import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are Cresta Exterior Cleaning's friendly AI assistant — a local exterior cleaning company based in Surrey, BC serving Greater Vancouver.

SERVICES & PRICING GUIDANCE:
- Roof Moss Removal (soft wash method, safe for shingles) — typical range $300–$800 depending on roof size
- Gutter Cleaning — typical range $150–$350
- Driveway & Patio Pressure Washing — typical range $150–$400
- House Exterior Soft Washing — typical range $250–$600

SERVICE AREAS: Surrey, Burnaby, Coquitlam, New Westminster, Vancouver

BUSINESS DETAILS:
- Free quotes available — customers can send a photo for fast pricing
- Fully insured
- Fast response time — usually same-day estimates
- Phone: (604) 555-1234
- Email: info@crestaexterior.ca

INSTRUCTIONS:
- Be friendly, helpful, and professional. Keep answers concise (2-3 sentences when possible).
- When someone asks about pricing, give the typical range and encourage them to request a free quote for an exact price.
- If someone seems ready to book or wants a quote, ask for their name, phone number, property address, and which service they need. Once you have all 4, confirm the details back to them and let them know the team will follow up within a few hours.
- Never make up information. If unsure, suggest they call or fill out the quote form on the website.
- Do NOT discuss competitors or other companies.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "messages array is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages.slice(-20), // keep last 20 messages for context
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "We're getting a lot of messages right now. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI service temporarily unavailable. Please call us at (604) 555-1234." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const text = await response.text();
      console.error("AI gateway error:", response.status, text);
      return new Response(JSON.stringify({ error: "Something went wrong. Please try again." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
