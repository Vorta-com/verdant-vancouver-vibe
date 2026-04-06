import logo from "@/assets/logo_AES.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-12">
    <div className="container">
      <div className="grid sm:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="rounded-lg inline-block mb-3">
            <img src={logo} alt="Apex Exterior Solutions" className="h-12 w-auto brightness-0 invert" />
          </div>
          <p className="text-primary-foreground/70 text-sm">Professional exterior cleaning and moss removal for homes across Surrey and Greater Vancouver.</p>
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
          <p className="text-sm text-primary-foreground/70">Surrey · Burnaby · Coquitlam · New Westminster · Vancouver</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} Apex Exterior Solutions. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
