import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah M.", location: "North Vancouver", text: "They transformed our 20-year-old roof! Looks brand new and the moss prevention treatment gives us peace of mind." },
  { name: "James T.", location: "Burnaby", text: "Professional, on time, and very reasonable pricing. Our neighbours couldn't believe the difference. Highly recommend!" },
  { name: "Linda K.", location: "West Vancouver", text: "We tried pressure washing ourselves but they showed us the right way. Gentle on the roof and incredibly thorough." },
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-section-alt">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">Testimonials</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <Card key={t.name} className="border-border/60">
            <CardContent className="pt-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">"{t.text}"</p>
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.location}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
