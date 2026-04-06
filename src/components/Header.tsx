import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-serif text-xl font-bold text-primary">
          MossAway<span className="text-accent">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <Button asChild>
            <a href="tel:+16045551234" className="gap-2">
              <Phone className="h-4 w-4" /> (604) 555-1234
            </a>
          </Button>
        </nav>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-card border-t px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary" onClick={() => setMobileOpen(false)}>
              {l.label}
            </a>
          ))}
          <Button asChild className="w-full">
            <a href="tel:+16045551234" className="gap-2">
              <Phone className="h-4 w-4" /> (604) 555-1234
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
