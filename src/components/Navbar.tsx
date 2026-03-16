import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import vLogo from '@/assets/v-logo.png';

const navItems = ['Suites', 'Dining', 'Experience', 'Gallery', 'Booking', 'Contact'];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-luxury ${isScrolled ? 'bg-background/90 backdrop-blur-md py-4' : 'bg-transparent py-6 md:py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img src={vLogo} alt="V One Hotel Logo" className="h-16 md:h-20 w-auto object-contain" style={{ imageRendering: 'auto' }} />
          </a>

          <div className="hidden lg:flex gap-10 text-[11px] uppercase tracking-wide-luxury text-foreground/80 font-sans">
            {navItems.map((item) => (
              <button key={item} onClick={() => scrollTo(item)} className="hover:text-primary transition-luxury relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo('booking')}
              className="hidden md:block px-8 py-3 bg-primary text-primary-foreground text-[11px] font-sans font-semibold uppercase tracking-widest hover:bg-foreground transition-luxury"
            >
              Book Now
            </button>
            <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(item)}
                className="text-2xl font-serif text-foreground hover:text-primary transition-luxury"
              >
                {item}
              </motion.button>
            ))}
            <button
              onClick={() => scrollTo('booking')}
              className="mt-4 px-10 py-4 bg-primary text-primary-foreground text-sm font-sans font-semibold uppercase tracking-widest"
            >
              Book Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
