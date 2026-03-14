import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import diningHero from '@/assets/dining-hero.jpg';
import rooftopImg from '@/assets/rooftop-dining.jpg';
import foodImg from '@/assets/food-plated.jpg';

const DiningSection = () => {
  return (
    <section id="dining" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Krishnam Restaurant */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-48 md:w-64 h-48 md:h-64 border border-primary/20 z-0" />
            <img
              src={diningHero}
              className="relative z-10 w-full aspect-[3/4] object-cover"
              alt="V1 Restaurant Interior"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-primary text-xs tracking-luxury uppercase mb-6 block font-sans">Culinary Excellence</span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-8 leading-tight font-light">
              V1 Restaurant: <br />A Symphony of Flavours
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-md font-sans">
              At V One, we believe great taste begins with fresh ingredients. Our chefs prepare every dish
              using carefully selected vegetables and spices to deliver authentic flavours, quality, and
              unforgettable dining moments — from a peaceful breakfast to a celebratory dinner.
            </p>
            <div className="space-y-6 mb-10">
              {['Signature Multi-Cuisine', 'Pure Vegetarian Delights', 'Fresh Farm-to-Table Ingredients', 'Private Dining Available'].map((item) => (
                <div key={item} className="flex items-center gap-4 group">
                  <div className="w-10 h-px bg-primary/40 group-hover:w-16 transition-all duration-500" />
                  <span className="text-foreground text-xs uppercase tracking-widest font-sans">{item}</span>
                </div>
              ))}
            </div>
            <button className="border border-primary text-primary px-10 py-4 text-[11px] uppercase tracking-widest font-sans hover:bg-primary hover:text-primary-foreground transition-luxury">
              Reserve a Table
            </button>
          </motion.div>
        </div>

        {/* Rooftop Dining */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:order-2"
          >
            <span className="text-primary text-xs tracking-luxury uppercase mb-6 block font-sans">Sealand Rooftop</span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-8 leading-tight font-light">
              Dine Above <br />
              <span className="italic">the City</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-md font-sans">
              Relish flavours, ambience, and stunning skyline views — all in one extraordinary setting.
              Our rooftop restaurant offers an intimate al fresco experience where taste meets tranquility
              beneath the stars.
            </p>
            <div className="flex items-center gap-6 mb-10">
              <div className="text-center">
                <p className="text-2xl font-serif text-primary">10 AM</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-sans">Opens</p>
              </div>
              <div className="w-8 h-px bg-primary/30" />
              <div className="text-center">
                <p className="text-2xl font-serif text-primary">12 PM</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-sans">Closes</p>
              </div>
            </div>
            <a
              href="tel:+919972919995"
              className="inline-flex items-center gap-2 text-primary text-[11px] uppercase tracking-widest font-sans hover:text-foreground transition-luxury"
            >
              Reserve by Phone <ChevronRight size={14} />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:order-1 relative"
          >
            <img
              src={rooftopImg}
              className="w-full aspect-[16/10] object-cover"
              alt="Sealand Rooftop Dining"
              loading="lazy"
            />
            <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm p-4">
              <img src={foodImg} alt="Gourmet dish" className="w-24 h-24 object-cover" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DiningSection;
