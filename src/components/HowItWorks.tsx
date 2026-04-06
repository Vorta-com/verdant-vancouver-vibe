import { Camera, DollarSign, CalendarCheck } from "lucide-react";

const steps = [
  { icon: Camera, step: "1", title: "Send a Photo or Request a Quote", desc: "Snap a photo of your roof, driveway, or exterior and send it to us — or fill out our quick quote form." },
  { icon: DollarSign, step: "2", title: "Get a Fast Price Estimate", desc: "We'll review your photos and get back to you with an honest, no-obligation estimate — usually same day." },
  { icon: CalendarCheck, step: "3", title: "Book Your Service", desc: "Pick a time that works for you and we'll handle the rest. Sit back and watch the transformation." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-20 bg-section-alt">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">Simple Process</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
        <p className="text-muted-foreground">Getting your home cleaned is easy — just 3 simple steps.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s) => (
          <div key={s.step} className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <s.icon className="h-7 w-7 text-primary" />
            </div>
            <div className="text-sm font-bold text-accent uppercase mb-2">Step {s.step}</div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
