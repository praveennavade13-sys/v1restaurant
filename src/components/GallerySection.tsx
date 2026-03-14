import { motion } from 'framer-motion';
import heroImg from '@/assets/hero-hotel.jpg';
import diningImg from '@/assets/dining-hero.jpg';
import roomExec from '@/assets/room-executive.jpg';
import roomDeluxe from '@/assets/room-deluxe.jpg';
import roomFamily from '@/assets/room-family.jpg';
import rooftopImg from '@/assets/rooftop-dining.jpg';
import foodImg from '@/assets/food-plated.jpg';
import amenitiesImg from '@/assets/amenities-bg.jpg';

const images = [
  { src: heroImg, alt: 'Hotel Lobby', span: 'md:col-span-2 md:row-span-2' },
  { src: roomDeluxe, alt: 'Deluxe Room', span: '' },
  { src: diningImg, alt: 'Restaurant Interior', span: '' },
  { src: rooftopImg, alt: 'Rooftop Dining', span: 'md:col-span-2' },
  { src: roomExec, alt: 'Executive Suite', span: '' },
  { src: foodImg, alt: 'Gourmet Cuisine', span: '' },
  { src: roomFamily, alt: 'Family Suite', span: '' },
  { src: amenitiesImg, alt: 'Hotel Amenities', span: 'md:col-span-2' },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs tracking-luxury uppercase mb-4 block font-sans">Visual Highlights</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground font-light">The Gallery</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={`overflow-hidden group cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover min-h-[200px] transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
