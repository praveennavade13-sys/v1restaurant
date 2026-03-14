import { motion } from 'framer-motion';
import { ChevronRight, Users, Maximize } from 'lucide-react';
import roomExecutive from '@/assets/room-executive.jpg';
import roomDeluxe from '@/assets/room-deluxe.jpg';
import roomFamily from '@/assets/room-family.jpg';

const rooms = [
  {
    title: 'Deluxe Room',
    type: 'Refined Comfort',
    image: roomDeluxe,
    size: '35 sqm',
    guests: '2 Guests',
    description: 'A harmonious blend of comfort and elegance, featuring premium bedding, modern amenities, and thoughtful details for a restful retreat.',
    features: ['King Bed', 'City View', 'Premium Linens'],
  },
  {
    title: 'Executive Suite',
    type: 'Business Luxury',
    image: roomExecutive,
    size: '35 sqm',
    guests: '2 Guests',
    description: 'Designed for the modern traveler who demands excellence. Spacious interiors with dedicated work space and premium furnishings.',
    features: ['Work Desk', 'Lounge Area', 'King Bed'],
  },
  {
    title: 'Family Suite',
    type: 'Spacious Elegance',
    image: roomFamily,
    size: '45 sqm',
    guests: '5 Guests',
    description: 'Generously proportioned for families seeking luxury. Multiple sleeping arrangements with living space for shared moments.',
    features: ['Living Area', 'Multiple Beds', 'Panoramic View'],
  },
];

const RoomCard = ({ room, index }: { room: typeof rooms[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className="group relative bg-card overflow-hidden"
  >
    <div className="aspect-[4/5] overflow-hidden">
      <img
        src={room.image}
        alt={room.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
    </div>
    <div className="absolute bottom-0 p-6 md:p-8 w-full">
      <p className="text-primary text-[10px] uppercase tracking-luxury mb-2 font-sans">{room.type}</p>
      <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-3 font-light">{room.title}</h3>
      <p className="text-muted-foreground text-sm mb-4 font-sans line-clamp-2">{room.description}</p>
      <div className="flex gap-4 mb-6">
        <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground uppercase tracking-widest font-sans">
          <Maximize size={12} className="text-primary" /> {room.size}
        </span>
        <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground uppercase tracking-widest font-sans">
          <Users size={12} className="text-primary" /> {room.guests}
        </span>
      </div>
      <div className="flex gap-3 mb-6 flex-wrap">
        {room.features.map((f) => (
          <span key={f} className="text-[10px] text-foreground/50 uppercase tracking-widest border border-foreground/10 px-3 py-1 font-sans">{f}</span>
        ))}
      </div>
      <button
        onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
        className="flex items-center gap-2 text-foreground text-[11px] uppercase tracking-widest font-sans group-hover:text-primary transition-luxury"
      >
        Book This Room <ChevronRight size={14} />
      </button>
    </div>
  </motion.div>
);

const RoomsSection = () => {
  return (
    <section id="suites" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4"
        >
          <div>
            <span className="text-primary text-xs tracking-luxury uppercase mb-4 block font-sans">Accommodation</span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground font-light">The Suites</h2>
          </div>
          <p className="text-muted-foreground text-sm font-sans max-w-md">
            Each room is equipped with modern amenities, clean interiors, and thoughtful details to ensure your comfort throughout your stay.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {rooms.map((room, i) => (
            <RoomCard key={room.title} room={room} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
