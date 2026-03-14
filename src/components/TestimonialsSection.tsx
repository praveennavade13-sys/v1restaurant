import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh K.',
    title: 'Business Traveler',
    text: 'V One Hotel exceeded every expectation. The rooms are impeccable, the dining is exceptional, and the staff made me feel like royalty. My go-to hotel in Raichur.',
    rating: 5,
  },
  {
    name: 'Priya M.',
    title: 'Family Vacation',
    text: 'We celebrated our anniversary at V One and it was magical. The rooftop dining with city views, the spacious family suite — every moment was perfect.',
    rating: 5,
  },
  {
    name: 'Suresh B.',
    title: 'Corporate Executive',
    text: 'The executive suite is perfectly designed for business travelers. Excellent Wi-Fi, comfortable workspace, and the restaurant serves the most delicious vegetarian cuisine.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs tracking-luxury uppercase mb-4 block font-sans">Guest Voices</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground font-light">What Our Guests Say</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="border border-foreground/5 p-8 hover:border-primary/20 transition-luxury"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} size={14} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm font-sans leading-relaxed mb-8 italic">"{t.text}"</p>
              <div>
                <p className="text-foreground font-serif text-lg">{t.name}</p>
                <p className="text-muted-foreground text-[10px] uppercase tracking-widest font-sans">{t.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
