import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative">
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Star className="text-primary mx-auto mb-8" size={24} strokeWidth={1} />
          <span className="text-primary text-xs tracking-luxury uppercase mb-6 block font-sans">About V One</span>
          <h2 className="text-3xl md:text-5xl font-serif mb-10 leading-snug text-foreground font-light">
            A bespoke sanctuary designed for <br className="hidden md:block" />
            <span className="italic">extraordinary moments.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-sans">
            Welcome to V One Hotel, where comfort, convenience, and warm hospitality converge
            to create an unforgettable experience. Located in the vibrant heart of Raichur with
            effortless access to the city's landmarks, our boutique hotel is the premier choice
            for discerning business travelers, families, and connoisseurs of refined living.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '50+', label: 'Premium Rooms' },
              { number: '3', label: 'Dining Venues' },
              { number: '24/7', label: 'Guest Services' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-4xl font-serif text-primary mb-2">{stat.number}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-sans">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
