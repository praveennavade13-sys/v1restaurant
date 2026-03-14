import { motion } from 'framer-motion';
import { useState } from 'react';
import heroImg from '@/assets/hero-hotel.jpg';

const HeroSection = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [roomType, setRoomType] = useState('');

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/50 z-10" />
        <img
          src={heroImg}
          className="w-full h-full object-cover animate-slow-zoom"
          alt="V One Hotel Luxury Lobby"
          loading="eager"
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="block text-primary text-xs md:text-sm tracking-luxury uppercase mb-6 font-sans"
        >
          The Zenith of Raichur
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-6xl lg:text-8xl font-serif text-foreground mb-6 leading-tight font-light"
        >
          Where Luxury <br /> <span className="italic">Meets Legacy</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto mb-10 font-sans"
        >
          Experience refined luxury, signature dining, and warm hospitality in the heart of Raichur.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo('booking')}
            className="px-10 py-4 bg-primary text-primary-foreground text-[11px] font-sans font-bold uppercase tracking-widest hover:bg-foreground transition-luxury"
          >
            Book Your Stay
          </button>
          <button
            onClick={() => scrollTo('dining')}
            className="px-10 py-4 border border-foreground/20 text-foreground text-[11px] font-sans font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-luxury"
          >
            Explore Restaurant
          </button>
        </motion.div>
      </div>

      {/* Booking Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 md:px-6 hidden md:block"
      >
        <div className="bg-background/60 backdrop-blur-xl border border-foreground/10 p-2 flex flex-col md:flex-row items-stretch gap-2">
          <div className="flex-1 grid grid-cols-4 gap-2">
            <div className="p-4 hover:bg-foreground/5 transition-luxury cursor-pointer border-r border-foreground/5">
              <p className="text-[10px] text-primary uppercase tracking-luxury mb-1 font-sans">Check In</p>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="bg-transparent text-sm text-foreground font-sans w-full focus:outline-none cursor-pointer"
              />
            </div>
            <div className="p-4 hover:bg-foreground/5 transition-luxury cursor-pointer border-r border-foreground/5">
              <p className="text-[10px] text-primary uppercase tracking-luxury mb-1 font-sans">Check Out</p>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="bg-transparent text-sm text-foreground font-sans w-full focus:outline-none cursor-pointer"
              />
            </div>
            <div className="p-4 hover:bg-foreground/5 transition-luxury cursor-pointer border-r border-foreground/5">
              <p className="text-[10px] text-primary uppercase tracking-luxury mb-1 font-sans">Guests</p>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="bg-transparent text-sm text-foreground font-sans w-full focus:outline-none cursor-pointer"
              >
                <option value="1" className="bg-background">1 Guest</option>
                <option value="2" className="bg-background">2 Guests</option>
                <option value="3" className="bg-background">3 Guests</option>
                <option value="4" className="bg-background">4 Guests</option>
                <option value="5" className="bg-background">5 Guests</option>
              </select>
            </div>
            <div className="p-4 hover:bg-foreground/5 transition-luxury cursor-pointer">
              <p className="text-[10px] text-primary uppercase tracking-luxury mb-1 font-sans">Room Type</p>
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="bg-transparent text-sm text-foreground font-sans w-full focus:outline-none cursor-pointer"
              >
                <option value="" className="bg-background">Select Room</option>
                <option value="deluxe" className="bg-background">Deluxe Room</option>
                <option value="executive" className="bg-background">Executive Suite</option>
                <option value="family" className="bg-background">Family Suite</option>
                <option value="superior" className="bg-background">Superior Room</option>
              </select>
            </div>
          </div>
          <button
            onClick={() => scrollTo('booking')}
            className="bg-primary px-10 py-4 text-primary-foreground font-sans font-bold uppercase text-xs tracking-widest hover:bg-foreground transition-luxury whitespace-nowrap"
          >
            Check Availability
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
