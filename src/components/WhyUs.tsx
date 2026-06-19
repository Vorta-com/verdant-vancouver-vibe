import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, Leaf, Clock } from "lucide-react";

const reasons = [
  "Locally based in Surrey, BC",
  "Fast response time — usually within 24 hours",
  "Free quotes — just send us a photo for pricing",
  "Fully insured for your peace of mind",
  "Proven before & after results on every job",
  "Eco-friendly, biodegradable cleaning products",
];

const WhyUs = () => (
  <section id="why-us" className="py-20">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">Why Choose Us</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Surrey's Most Trusted Exterior Cleaning Team
          </h2>
          <p className="text-muted-foreground mb-8">
            We're your local neighbours — we know the Lower Mainland weather and what it does to your home. Our experienced crew delivers spotless results every time.
          </p>
          <ul className="space-y-4">
            {reasons.map((r) => (
              <li key={r} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground">{r}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-primary/5 rounded-2xl p-10">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Our Promise to You</h3>
          <p className="text-muted-foreground mb-6">A new local business built on quality work, honest pricing, and same-day quotes.</p>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <span className="text-foreground">Fully insured &amp; safe methods</span>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <span className="text-foreground">Same-day free quotes</span>
            </div>
            <div className="flex items-start gap-3">
              <Leaf className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <span className="text-foreground">Eco-friendly cleaning products</span>
            </div>
          </div>
          <Button asChild className="w-full" size="lg">
            <a href="tel:+17785583384" className="gap-2">
              <Phone className="h-4 w-4" /> (778) 558-3384
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default WhyUs;
