import heroImg from "@/assets/hero-roof.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center pt-20">
    <img src={heroImg} alt="Before and after roof moss removal in Surrey BC" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
    <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
    <div className="container relative z-10 py-20">
      <div className="max-w-2xl animate-fade-in-up">
        <p className="text-primary-foreground/80 font-medium mb-3 tracking-wide uppercase text-sm">Vancouver's Trusted Exterior Cleaning Pros</p>
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
          Roof Moss Removal &amp; Exterior Cleaning in Greater Vancouver
        </h1>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg">
          Safe, affordable, and reliable service with free quotes. We keep your home looking its best — from roof to curb.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8" asChild>
            <a href="#contact">Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" /></a>
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8" asChild>
            <a href="tel:+16045551234"><Phone className="mr-2 h-5 w-5" /> Call Now</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
