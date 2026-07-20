import { Link } from "react-router-dom";
import { Sparkles, Coffee, ArrowRight, Phone } from "lucide-react";
import logoAsset from "@/assets/cresta-logo-transparent.png.asset.json";
import heroRoof from "@/assets/hero-roof.jpg";
import vendingHero from "@/assets/vending-hero.jpg";

const Landing = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <header className="border-b bg-card/95 backdrop-blur-md">
      <div className="container flex items-center justify-between h-20 py-2">
        <div className="flex items-center gap-2">
          <img src={logoAsset.url} alt="Cresta" className="h-14 w-auto" />
        </div>
        <a
          href="tel:+17785583384"
          className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-80"
        >
          <Phone className="h-4 w-4" /> (778) 558-3384
        </a>
      </div>
    </header>

    <main className="flex-1 container py-12 md:py-20">
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Welcome to Cresta
        </h1>
        <p className="text-lg text-muted-foreground">
          Choose the service you're looking for.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
        <Link
          to="/exterior-cleaning"
          className="group relative overflow-hidden rounded-2xl border shadow-md hover:shadow-2xl transition-all bg-card"
        >
          <div
            className="h-64 md:h-80 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroRoof})` }}
          >
            <div className="w-full h-full bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Exterior Cleaning</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Roof moss removal, gutter cleaning, pressure washing, and house soft washing across Greater Vancouver.
            </p>
            <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
              Explore services <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </Link>

        <Link
          to="/vending"
          className="group relative overflow-hidden rounded-2xl border shadow-md hover:shadow-2xl transition-all bg-card"
        >
          <div
            className="h-64 md:h-80 bg-cover bg-center"
            style={{ backgroundImage: `url(${vendingHero})` }}
          >
            <div className="w-full h-full bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Coffee className="h-5 w-5 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Cresta Vending</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Specialists in AI-powered vending machines. Free install, fully managed, 100% hands-off.
            </p>
            <span className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
              Learn more <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </Link>
      </div>
    </main>

    <footer className="border-t py-6 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Cresta · Maple Ridge, BC · (778) 558-3384
    </footer>
  </div>
);

export default Landing;