import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-card pt-24 pb-12 border-t border-foreground/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <span className="text-3xl font-serif font-light tracking-luxury text-primary uppercase mb-8 block">V One</span>
            <p className="text-muted-foreground max-w-sm leading-relaxed text-sm font-sans">
              Redefining the standards of luxury hospitality in Raichur. A sanctuary for the modern
              traveler seeking elegance, comfort, and impeccable service.
            </p>
          </div>
          <div>
            <h4 className="text-foreground text-xs uppercase tracking-widest mb-8 font-sans">Quick Links</h4>
            <div className="space-y-3">
              {['Suites', 'Dining', 'Experience', 'Gallery', 'Booking', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="block text-muted-foreground text-sm font-sans hover:text-primary transition-luxury"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-foreground text-xs uppercase tracking-widest mb-8 font-sans">Contact</h4>
            <div className="space-y-4 text-sm text-muted-foreground font-sans">
              <a href="tel:+919972919995" className="flex items-center gap-3 hover:text-primary transition-luxury">
                <Phone size={14} className="text-primary" /> +91 99729 19995
              </a>
              <a href="mailto:vonehotelraichur@gmail.com" className="flex items-center gap-3 hover:text-primary transition-luxury">
                <Mail size={14} className="text-primary" /> vonehotelraichur@gmail.com
              </a>
              <p className="flex items-start gap-3 leading-relaxed">
                <MapPin size={14} className="text-primary mt-0.5" /> Uday Nagar, Raichur,<br />Karnataka, India
              </p>
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-foreground/30 uppercase tracking-widest font-sans">© 2025 V One Hotel & Restaurant. All Rights Reserved.</p>
          <div className="flex gap-8 text-[10px] text-foreground/30 uppercase tracking-widest font-sans">
            <a href="#" className="hover:text-primary transition-luxury">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-luxury">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
