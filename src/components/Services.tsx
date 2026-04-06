import { Home, Droplets, TreePine, Shield } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  { icon: Home, title: "Roof Moss Removal", desc: "Gentle hand-scraping and soft-wash treatment that removes moss without damaging your shingles." },
  { icon: Droplets, title: "Driveway & Patio Cleaning", desc: "High-pressure and soft-wash cleaning to restore concrete, pavers, and stone surfaces." },
  { icon: TreePine, title: "Gutter & Downspout Cleaning", desc: "Clear debris and moss buildup to ensure proper drainage and prevent water damage." },
  { icon: Shield, title: "Moss Prevention Treatment", desc: "Zinc-based treatments that keep moss from growing back for up to 3 years." },
];

const Services = () => (
  <section id="services" className="py-20 bg-section-alt">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">What We Do</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
        <p className="text-muted-foreground">From roof to curb, we keep your property moss-free and looking its best.</p>
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
