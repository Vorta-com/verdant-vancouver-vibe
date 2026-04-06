import { CheckCircle } from "lucide-react";

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
        <div className="bg-primary/5 rounded-2xl p-10 text-center">
          <div className="text-6xl font-serif font-bold text-primary mb-2">500+</div>
          <p className="text-muted-foreground mb-6">Homes cleaned across Surrey &amp; Vancouver</p>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-3xl font-serif font-bold text-foreground">4.9★</div>
              <p className="text-sm text-muted-foreground">Google Rating</p>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-foreground">100%</div>
              <p className="text-sm text-muted-foreground">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyUs;
