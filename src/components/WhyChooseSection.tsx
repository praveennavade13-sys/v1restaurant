import { motion } from 'framer-motion';
import { Award, Heart, MapPin, Clock } from 'lucide-react';

const reasons = [
  {
    icon: <Award size={28} strokeWidth={1} />,
    title: 'Impeccable Standards',
    desc: 'Every detail is thoughtfully curated — from premium linens to personalized service that anticipates your needs.',
  },
  {
    icon: <Heart size={28} strokeWidth={1} />,
    title: 'Warm Hospitality',
    desc: 'Experience genuine care and attention from a team dedicated to making every moment of your stay exceptional.',
  },
  {
    icon: <MapPin size={28} strokeWidth={1} />,
    title: 'Prime Location',
    desc: 'Located in the heart of Raichur with effortless access to major landmarks, business districts, and cultural sites.',
  },
  {
    icon: <Clock size={28} strokeWidth={1} />,
    title: 'Round-the-Clock Service',
    desc: 'From 24-hour room service to concierge assistance, our team is always available to ensure your comfort.',
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-24 bg-card/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs tracking-luxury uppercase mb-4 block font-sans">Why V One</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground font-light">The V One Difference</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center group p-8 border border-foreground/5 hover:border-primary/30 transition-luxury"
            >
              <div className="text-primary/50 group-hover:text-primary transition-luxury mb-6 flex justify-center">
                {r.icon}
              </div>
              <h3 className="text-lg font-serif text-foreground mb-3">{r.title}</h3>
              <p className="text-muted-foreground text-sm font-sans leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
