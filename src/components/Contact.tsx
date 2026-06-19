import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Quote request sent!", description: "We'll get back to you within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-section-alt">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">Get In Touch</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Request a Free Quote</h2>
            <p className="text-muted-foreground mb-8">
              Send us your details and a photo of the area you'd like cleaned. We'll get back to you with a free estimate — usually within a few hours.
            </p>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+16045551234" className="font-medium text-foreground hover:text-primary transition-colors">(604) 555-1234</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:info@crestaexterior.ca" className="font-medium text-foreground hover:text-primary transition-colors">info@crestaexterior.ca</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Service Area</p>
                  <p className="font-medium text-foreground">Surrey &amp; Greater Vancouver</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl border p-8 space-y-5 shadow-sm">
            <Input placeholder="Your name" required />
            <Input type="tel" placeholder="Phone number" required />
            <Input placeholder="Property address" required />
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Upload a photo (optional)</label>
              <Input type="file" accept="image/*" className="cursor-pointer" />
            </div>
            <Button type="submit" className="w-full" size="lg" disabled={loading}>
              {loading ? "Sending..." : "Get My Free Quote"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
