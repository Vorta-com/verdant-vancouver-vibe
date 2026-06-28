import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { z } from "npm:zod@3.23.8";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const MAX_PHOTO_MB = 5;
const MAX_PHOTO_BYTES = MAX_PHOTO_MB * 1024 * 1024;

const BodySchema = z.object({
  name: z.string().min(1).max(100),
  phone: z.string().min(1).max(50),
  email: z.union([z.string().email().max(255), z.literal("")]).optional(),
  address: z.string().min(1).max(255),
  notes: z.union([z.string().max(1000), z.literal("")]).optional(),
  photoName: z.string().max(255).optional(),
  photoMimeType: z.string().max(100).optional(),
  photoBase64: z.string().max(Math.ceil(MAX_PHOTO_BYTES * 1.4)).optional(),
});

function buildMultipartEmail(
  to: string,
  subject: string,
  textBody: string,
  attachment?: { name: string; mimeType: string; base64: string },
): string {
  const boundary = `----CrestaContact${crypto.randomUUID().replace(/-/g, "")}`;

  const headers = [
    `To: ${to}`,
    `Subject: ${subject}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/mixed; boundary=\"${boundary}\"`,
    "",
  ];

  const textPart = [
    `--${boundary}`,
    'Content-Type: text/plain; charset="UTF-8"',
    "",
    textBody,
  ];

  const parts = [headers.join("\r\n"), textPart.join("\r\n")];

  if (attachment) {
    const attachmentPart = [
      `--${boundary}`,
      `Content-Type: ${attachment.mimeType}; name=\"${attachment.name}\"`,
      `Content-Disposition: attachment; filename=\"${attachment.name}\"`,
      "Content-Transfer-Encoding: base64",
      "",
      attachment.base64,
    ];
    parts.push(attachmentPart.join("\r\n"));
  }

  parts.push(`--${boundary}--`);

  return parts.join("\r\n");
}

function encodeBase64Url(input: string): string {
  const bytes = new TextEncoder().encode(input);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const parsed = BodySchema.safeParse(await req.json());
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: parsed.error.flatten().fieldErrors }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { name, phone, email, address, notes, photoName, photoMimeType, photoBase64 } = parsed.data;

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const GOOGLE_MAIL_API_KEY = Deno.env.get("GOOGLE_MAIL_API_KEY");
    const RECIPIENT = "info@crestaexterior.ca";

    if (!LOVABLE_API_KEY || !GOOGLE_MAIL_API_KEY) {
      return new Response(JSON.stringify({ error: "Email service not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const textBody = [
      `New quote request from ${name}`,
      "",
      `Phone: ${phone}`,
      email ? `Email: ${email}` : "",
      `Address: ${address}`,
      notes ? `Notes: ${notes}` : "",
    ].filter(Boolean).join("\n");

    const attachment = photoBase64 && photoName && photoMimeType
      ? { name: photoName, mimeType: photoMimeType, base64: photoBase64 }
      : undefined;

    const rawEmail = buildMultipartEmail(
      RECIPIENT,
      "New Quote Request - Cresta Exterior",
      textBody,
      attachment,
    );

    const raw = encodeBase64Url(rawEmail);

    const response = await fetch("https://connector-gateway.lovable.dev/google_mail/users/me/messages/send", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": GOOGLE_MAIL_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ raw }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gmail send error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "Failed to send email. Please try again or call us." }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("send-contact-email error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
