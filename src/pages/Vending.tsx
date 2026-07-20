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

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
          <div>
            <span className="inline-block bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Free amenity for your business
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Got space for a <span className="text-accent">vending machine?</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              I install and stock snack &amp; drink vending machines at{" "}
              <span className="font-bold text-accent">NO COST</span> to you — a nice, easy perk for your staff or customers.
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
              alt="Modern vending machine in an office"
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

      {/* Two-card promise */}
      <section className="container py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-2xl p-8 bg-card flex gap-5 items-start shadow-sm">
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shrink-0">
              <DollarSign className="h-7 w-7 text-accent-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">$0 Cost to You</h3>
              <p className="text-muted-foreground">
                Installation, stocking, and maintenance — all covered by me.
              </p>
            </div>
          </div>
          <div className="border rounded-2xl p-8 bg-card flex gap-5 items-start shadow-sm">
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shrink-0">
              <Handshake className="h-7 w-7 text-accent-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">100% Hands-Off</h3>
              <p className="text-muted-foreground">
                I manage restocking, repairs, and cash/card collection. You never lift a finger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-secondary py-14 md:py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: 1, Icon: MessageCircle, title: "Quick Chat", body: "We find the right spot on your property together — takes 5 minutes." },
              { n: 2, Icon: Truck, title: "Free Install", body: "I deliver, place, and set up the machine at no charge to you." },
              { n: 3, Icon: Package, title: "I Restock", body: "Regular visits to keep it stocked, clean, and running smoothly." },
            ].map(({ n, Icon, title, body }) => (
              <div key={n} className="bg-card rounded-2xl p-8 text-center shadow-sm border">
                <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {n}
                </div>
                <Icon className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why + Good fit */}
      <section className="container py-14 md:py-20 grid md:grid-cols-2 gap-6">
        <div className="border rounded-2xl overflow-hidden bg-card shadow-sm">
          <div className="bg-primary text-primary-foreground px-6 py-4">
            <h3 className="text-xl font-bold">Why Host a Machine?</h3>
          </div>
          <ul className="p-6 space-y-3">
            {[
              "Convenient snacks & drinks for staff, customers, or tenants",
              "Zero upfront cost and zero ongoing effort on your part",
              "Modern card-reader machines, no cash handling required",
              "Locally owned and operated — based right here in Maple Ridge",
            ].map((t) => (
              <li key={t} className="flex gap-3 items-start">
                <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-foreground">{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="border rounded-2xl overflow-hidden bg-card shadow-sm">
          <div className="bg-accent text-accent-foreground px-6 py-4">
            <h3 className="text-xl font-bold">Good Fit If You Have:</h3>
          </div>
          <ul className="p-6 space-y-3">
            {[
              "A shop, warehouse, or office with regular foot traffic",
              "Staff or customers who are often on-site for a while",
              "An unused corner, hallway, or waiting area",
              "A desire to offer staff or customers a nice, easy perk",
            ].map((t) => (
              <li key={t} className="flex gap-3 items-start">
                <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-foreground">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-primary text-primary-foreground py-14 md:py-20">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Let's set it up!</h2>
          <p className="opacity-90 mb-8">
            A quick call is all it takes to see if a free vending machine is right for your space.
          </p>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 space-y-4 text-left inline-block">
            <p className="text-lg font-bold">Tharaka Dissanayake</p>
            <p className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-accent" /> Maple Ridge, BC
            </p>
            <a href="tel:+17785583384" className="flex items-center gap-3 hover:text-accent">
              <Phone className="h-5 w-5 text-accent" /> (778) 558-3384
            </a>
            <a href="mailto:info@crestaexterior.ca" className="flex items-center gap-3 hover:text-accent break-all">
              <Mail className="h-5 w-5 text-accent" /> info@crestaexterior.ca
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