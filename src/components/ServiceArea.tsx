import { MapPin } from "lucide-react";

const areas = ["Burnaby", "Coquitlam", "Delta", "Langley", "Maple Ridge", "Mission", "New Westminster", "North Vancouver", "Pitt Meadows", "Port Coquitlam", "Port Moody", "Richmond", "Surrey", "Vancouver", "West Vancouver", "White Rock"];

const ServiceArea = () => (
  <section id="service-area" className="py-20">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">Where We Work</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Service Areas</h2>
        <p className="text-muted-foreground">We proudly serve homeowners across the Lower Mainland.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {areas.map((area) => (
          <div key={area} className="flex items-center gap-2 bg-primary/5 rounded-full px-6 py-3 border border-border/60">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="font-medium text-foreground">{area}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceArea;
