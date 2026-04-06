const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-12">
    <div className="container">
      <div className="grid sm:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="font-serif text-xl font-bold mb-3">MossAway<span className="text-accent">.</span></h3>
          <p className="text-primary-foreground/70 text-sm">Professional moss removal and prevention for Vancouver homes and businesses.</p>
        </div>
        <div>
          <h4 className="font-serif font-semibold mb-3">Quick Links</h4>
          <nav className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            <a href="#services" className="hover:text-primary-foreground transition-colors">Services</a>
            <a href="#why-us" className="hover:text-primary-foreground transition-colors">Why Us</a>
            <a href="#testimonials" className="hover:text-primary-foreground transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a>
          </nav>
        </div>
        <div>
          <h4 className="font-serif font-semibold mb-3">Service Areas</h4>
          <p className="text-sm text-primary-foreground/70">Vancouver · North Van · West Van · Burnaby · Richmond · Coquitlam · Surrey</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} MossAway Vancouver. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
