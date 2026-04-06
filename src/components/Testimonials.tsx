import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah M.", location: "Surrey", text: "They did an amazing job on our roof! The moss was terrible and now it looks brand new. Very professional and on time." },
  { name: "James T.", location: "Burnaby", text: "I sent a photo and got a quote within an hour. The driveway pressure washing was incredible — our neighbours couldn't believe the difference!" },
  { name: "Linda K.", location: "Coquitlam", text: "Friendly, honest, and affordable. They cleaned our gutters and soft-washed the entire house exterior. Highly recommend to anyone in the Lower Mainland." },
  { name: "David R.", location: "New Westminster", text: "We've used them twice now — roof moss removal and driveway cleaning. Always great results and fair pricing. Will definitely call again." },
  { name: "Priya S.", location: "Vancouver", text: "Super responsive and the before/after results speak for themselves. Our house looks like it just got a fresh coat of paint!" },
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-section-alt">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">Testimonials</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.slice(0, 3).map((t) => (
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
      <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
        {testimonials.slice(3).map((t) => (
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
