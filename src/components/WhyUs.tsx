import { CheckCircle } from "lucide-react";

const reasons = [
  "Licensed & insured in British Columbia",
  "Eco-friendly, biodegradable cleaning products",
  "No high-pressure damage to your roof",
  "Free inspections & honest quotes",
  "3-year moss prevention guarantee",
  "Serving Vancouver & the Lower Mainland since 2015",
];

const WhyUs = () => (
  <section id="why-us" className="py-20">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">Why Choose Us</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Vancouver's Most Trusted Moss Cleaning Team
          </h2>
          <p className="text-muted-foreground mb-8">
            Our experienced crew uses proven techniques and safe products to protect your property while delivering spotless results every time.
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
          <div className="text-6xl font-serif font-bold text-primary mb-2">1,200+</div>
          <p className="text-muted-foreground mb-6">Roofs cleaned across Vancouver</p>
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
