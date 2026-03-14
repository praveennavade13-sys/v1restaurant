import { motion } from 'framer-motion';
import { Bed, Utensils, MapPin, Star, Shield, Clock, Wifi, Car } from 'lucide-react';
import React from 'react';

const amenities = [
  { icon: <Bed />, label: 'Premium Rooms & Suites' },
  { icon: <Utensils />, label: 'Multi-Cuisine Restaurant' },
  { icon: <Shield />, label: '24-Hour Security' },
  { icon: <Clock />, label: '24/7 Room Service' },
  { icon: <MapPin />, label: 'Central Location' },
  { icon: <Star />, label: 'Concierge Service' },
  { icon: <Wifi />, label: 'Complimentary Wi-Fi' },
  { icon: <Car />, label: 'Valet Parking' },
];

const AmenitiesSection = () => {
  return (
    <section id="experience" className="py-24 border-y border-foreground/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs tracking-luxury uppercase mb-4 block font-sans">Guest Experience</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground font-light">Amenities & Services</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {amenities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="text-center group"
            >
              <div className="text-primary/40 group-hover:text-primary transition-luxury mb-4 flex justify-center">
                {React.cloneElement(item.icon, { size: 32, strokeWidth: 1 })}
              </div>
              <p className="text-[10px] md:text-[11px] uppercase tracking-widest text-muted-foreground font-sans">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
