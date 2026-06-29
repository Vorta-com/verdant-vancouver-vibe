import logoAsset from "@/assets/cresta-logo-transparent.png.asset.json";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-12">
    <div className="container">
      <div className="grid sm:grid-cols-3 gap-8 mb-8">
        <div>
          <img src={logoAsset.url} alt="Cresta Exterior Cleaning" className="h-20 w-auto mb-3 brightness-0 invert" />
          <p className="text-primary-foreground/70 text-sm">Professional exterior cleaning and moss removal for homes across Greater Vancouver.</p>
        </div>
        <div>
          <h4 className="font-serif font-semibold mb-3">Quick Links</h4>
          <nav className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            <a href="#services" className="hover:text-primary-foreground transition-colors">Services</a>
            <a href="#why-us" className="hover:text-primary-foreground transition-colors">Why Us</a>
            <a href="#before-after" className="hover:text-primary-foreground transition-colors">Before &amp; After</a>
            <a href="#testimonials" className="hover:text-primary-foreground transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a>
          </nav>
        </div>
        <div>
          <h4 className="font-serif font-semibold mb-3">Service Areas</h4>
          <p className="text-sm text-primary-foreground/70">Burnaby · Coquitlam · Delta · Langley · Maple Ridge · Mission · New Westminster · North Vancouver · Pitt Meadows · Port Coquitlam · Port Moody · Richmond · Surrey · Vancouver · West Vancouver · White Rock · and more</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} Cresta Exterior Cleaning. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
