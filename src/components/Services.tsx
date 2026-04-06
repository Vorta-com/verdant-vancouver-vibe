import { Home, Droplets, Waves, Sparkles } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  { icon: Home, title: "Roof Moss Removal", desc: "Gentle soft wash treatment that safely removes moss and algae without damaging your shingles. Extends your roof's lifespan." },
  { icon: Droplets, title: "Gutter Cleaning", desc: "Clear out leaves, debris, and moss buildup so your gutters drain properly and protect your home from water damage." },
  { icon: Waves, title: "Driveway & Patio Pressure Washing", desc: "Restore your concrete, pavers, and stone surfaces to like-new condition. Remove oil stains, algae, and grime." },
  { icon: Sparkles, title: "House Exterior Soft Washing", desc: "Low-pressure cleaning that safely removes dirt, mildew, and stains from siding, stucco, and brick — no damage, just results." },
];

const Services = () => (
  <section id="services" className="py-20 bg-section-alt">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">What We Do</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
        <p className="text-muted-foreground">Professional exterior cleaning for every surface of your home.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <Card key={s.title} className="group hover:shadow-lg transition-shadow border-border/60">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="font-serif text-lg">{s.title}</CardTitle>
              <CardDescription className="text-muted-foreground">{s.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
