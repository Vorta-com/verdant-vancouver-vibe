import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Phone,
  DollarSign,
  Handshake,
  MessageCircle,
  Truck,
  Package,
  Check,
  MapPin,
  Mail,
  Cpu,
  Heart,
  CreditCard,
  Clock,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import vendingHero from "@/assets/vending-hero.jpg";
import logoAsset from "@/assets/cresta-logo-transparent.png.asset.json";

const Vending = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b">
        <div className="container flex items-center justify-between h-18 py-2">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoAsset.url} alt="Cresta Vending" className="h-12 w-auto" />
            <span className="hidden sm:inline text-lg font-bold text-foreground">Vending</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="hidden sm:inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" /> All services
            </Link>
            <Button asChild>
              <a href="tel:+17785583384" className="gap-2">
                <Phone className="h-4 w-4" /> (778) 558-3384
              </a>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
          <div>
            <span className="inline-block bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Smart Healthy Vending
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Smart healthy vending, <span className="text-accent">right where your people are</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              AI-powered, health-focused vending machines for offices, gyms, and clinics across Maple Ridge and the surrounding area. We install, stock, and maintain every machine at
              <span className="font-bold text-accent"> NO COST</span> to you.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" variant="secondary" asChild>
                <a href="#contact">Get in touch</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/40 text-white hover:bg-white/20 hover:text-white"
                asChild
              >
                <a href="tel:+17785583384" className="gap-2">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src={vendingHero}
              alt="Modern AI-powered smart vending machine in an office"
              className="rounded-2xl shadow-2xl w-full"
              width={1536}
              height={1024}
            />
            <div className="absolute -bottom-6 -right-2 md:-right-6 bg-accent text-accent-foreground rounded-full w-28 h-28 md:w-36 md:h-36 flex flex-col items-center justify-center text-center font-bold shadow-xl border-4 border-white rotate-6">
              <span className="text-2xl md:text-3xl leading-none">100%</span>
              <span className="text-[10px] md:text-xs mt-1 leading-tight px-2">HANDS-OFF FOR YOU</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="container py-14 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { Icon: Cpu, title: "AI-Powered", body: "Smart inventory & restocking" },
            { Icon: Heart, title: "Health-Focused", body: "Better-for-you choices" },
            { Icon: CreditCard, title: "Cashless", body: "Tap, chip, or mobile wallet" },
            { Icon: Handshake, title: "Zero Effort", body: "We handle everything" },
            { Icon: Clock, title: "24/7 Access", body: "Convenience around the clock" },
          ].map(({ Icon, title, body }) => (
            <div key={title} className="border rounded-2xl p-6 bg-card text-center shadow-sm">
              <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-3">
                <Icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-1">{title}</h3>
              <p className="text-muted-foreground text-sm">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How our AI machines work */}
      <section className="bg-secondary py-14 md:py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">How Our AI Vending Machines Work</h2>
            <p className="text-muted-foreground">
              Each machine is a connected, self-managing retail point built to make healthy options convenient and low-maintenance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Touchscreen Display", body: "Full nutritional info for every product — calories, allergens, and ingredients at the point of purchase." },
              { title: "100% Cashless Payment", body: "Tap, chip, or mobile wallet. Your staff never handles cash." },
              { title: "AI-Driven Restocking", body: "Remote inventory monitoring flags low stock automatically so popular items rarely run out." },
              { title: "Dynamic Product Selection", body: "Offices lean to sparkling water and protein snacks; gyms to electrolytes and recovery bars. We adjust to real sales data." },
              { title: "Remote Diagnostics", body: "Most technical issues are caught and resolved before they ever affect your team." },
              { title: "Zero Effort on Your End", body: "Delivery, installation, restocking, repairs, and payment processing — all handled by us." },
            ].map(({ title, body }) => (
              <div key={title} className="bg-card rounded-2xl p-6 shadow-sm border">
                <Sparkles className="h-6 w-6 text-accent mb-3" />
                <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="container py-14 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Health-Focused Food & Beverages</h2>
          <p className="text-muted-foreground">
            Every machine is stocked with better-for-you options from trusted Canadian and BC-based suppliers. We tailor the mix to your location.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Protein & Performance",
              items: [
                "Protein bars (RXBAR, GoMacro, and similar clean brands)",
                "Jerky — beef, turkey, and plant-based",
                "Roasted edamame and protein chip alternatives",
                "Single-serve nut butter packets",
              ],
            },
            {
              title: "Better-For-You Snacks",
              items: [
                "Baked (not fried) chips and veggie crisps",
                "Air-popped popcorn, light on oil and salt",
                "Nut and seed mixes, dried fruit",
                "Lower-sugar granola and snack bars",
                "Gluten-free and vegan options clearly labelled",
              ],
            },
            {
              title: "Refreshing Beverages",
              items: [
                "Sparkling and still water",
                "Coconut water and cold-pressed juice",
                "Kombucha and unsweetened iced tea",
                "Electrolyte and recovery drinks (Nuun, LMNT)",
              ],
            },
          ].map(({ title, items }) => (
            <div key={title} className="border rounded-2xl p-6 bg-card shadow-sm">
              <h3 className="text-lg font-bold text-foreground mb-4">{title}</h3>
              <ul className="space-y-2">
                {items.map((it) => (
                  <li key={it} className="flex gap-2 items-start text-sm">
                    <Check className="h-4 w-4 text-accent shrink-0 mt-1" />
                    <span className="text-foreground">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Why it fits */}
      <section className="bg-secondary py-14 md:py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">A Strong Fit For Your Space</h2>
            <p className="text-muted-foreground">
              Health-focused vending is the fastest-growing segment in the industry — driven by demand from exactly the kinds of spaces you run.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Offices", body: "Keeps staff fuelled through the day without a trip off-site — supports wellness initiatives and satisfaction." },
              { title: "Gyms & Fitness Studios", body: "Members expect recovery-focused options — protein, electrolytes, and clean snacks right after a workout." },
              { title: "Clinics & Wellness Spaces", body: "A clean, functional vending option reinforces your brand — no sugary snacks sending the wrong message." },
            ].map(({ title, body }) => (
              <div key={title} className="bg-card rounded-2xl p-8 shadow-sm border">
                <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-primary text-primary-foreground py-14 md:py-20">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Let's walk your space</h2>
          <p className="opacity-90 mb-8">
            We can find the right spot together and typically have a machine installed within a short window of your approval — at no cost or obligation.
          </p>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 space-y-4 text-left inline-block">
            <p className="text-lg font-bold">Cresta Vending</p>
            <p className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-accent" /> Maple Ridge, BC
            </p>
            <a href="tel:+17785583384" className="flex items-center gap-3 hover:text-accent">
              <Phone className="h-5 w-5 text-accent" /> (778) 558-3384
            </a>
            <a href="mailto:crestavending@gmail.com" className="flex items-center gap-3 hover:text-accent break-all">
              <Mail className="h-5 w-5 text-accent" /> crestavending@gmail.com
            </a>
          </div>
          <div className="mt-8">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+17785583384" className="gap-2">
                <Phone className="h-4 w-4" /> Call (778) 558-3384
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 text-center text-sm">
        <div className="container">
          © {new Date().getFullYear()} Cresta Vending · Maple Ridge, BC ·{" "}
          <Link to="/" className="underline hover:text-accent">Back to all services</Link>
        </div>
      </footer>
    </div>
  );
};

export default Vending;