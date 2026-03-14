import { motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'sonner';

const BookingSection = () => {
  const [form, setForm] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: '',
    name: '',
    email: '',
    phone: '',
    requests: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Booking request received! Our team will contact you shortly.');
  };

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <section id="booking" className="py-24 bg-background relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs tracking-luxury uppercase mb-4 block font-sans">Reservations</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground font-light mb-4">Book Your Stay</h2>
          <p className="text-muted-foreground font-sans text-sm max-w-md mx-auto">
            Reserve your sanctuary of comfort. Our team will confirm your booking within 24 hours.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          onSubmit={handleSubmit}
          className="bg-card/50 backdrop-blur-sm border border-foreground/10 p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="text-[10px] text-primary uppercase tracking-luxury mb-2 block font-sans">Check In *</label>
              <input
                type="date"
                required
                value={form.checkIn}
                onChange={(e) => update('checkIn', e.target.value)}
                className="w-full bg-transparent border-b border-foreground/20 py-3 text-sm text-foreground font-sans focus:outline-none focus:border-primary transition-luxury"
              />
            </div>
            <div>
              <label className="text-[10px] text-primary uppercase tracking-luxury mb-2 block font-sans">Check Out *</label>
              <input
                type="date"
                required
                value={form.checkOut}
                onChange={(e) => update('checkOut', e.target.value)}
                className="w-full bg-transparent border-b border-foreground/20 py-3 text-sm text-foreground font-sans focus:outline-none focus:border-primary transition-luxury"
              />
            </div>
            <div>
              <label className="text-[10px] text-primary uppercase tracking-luxury mb-2 block font-sans">Number of Guests *</label>
              <select
                required
                value={form.guests}
                onChange={(e) => update('guests', e.target.value)}
                className="w-full bg-transparent border-b border-foreground/20 py-3 text-sm text-foreground font-sans focus:outline-none focus:border-primary transition-luxury"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n} className="bg-background">{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-[10px] text-primary uppercase tracking-luxury mb-2 block font-sans">Room Type *</label>
              <select
                required
                value={form.roomType}
                onChange={(e) => update('roomType', e.target.value)}
                className="w-full bg-transparent border-b border-foreground/20 py-3 text-sm text-foreground font-sans focus:outline-none focus:border-primary transition-luxury"
              >
                <option value="" className="bg-background">Select a room</option>
                <option value="deluxe" className="bg-background">Deluxe Room</option>
                <option value="executive" className="bg-background">Executive Suite</option>
                <option value="family" className="bg-background">Family Suite</option>
                <option value="superior" className="bg-background">Superior Room</option>
              </select>
            </div>
            <div>
              <label className="text-[10px] text-primary uppercase tracking-luxury mb-2 block font-sans">Full Name *</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                placeholder="Your full name"
                className="w-full bg-transparent border-b border-foreground/20 py-3 text-sm text-foreground font-sans focus:outline-none focus:border-primary transition-luxury placeholder:text-muted-foreground/50"
              />
            </div>
            <div>
              <label className="text-[10px] text-primary uppercase tracking-luxury mb-2 block font-sans">Phone *</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => update('phone', e.target.value)}
                placeholder="+91 XXXXX XXXXX"
                className="w-full bg-transparent border-b border-foreground/20 py-3 text-sm text-foreground font-sans focus:outline-none focus:border-primary transition-luxury placeholder:text-muted-foreground/50"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-[10px] text-primary uppercase tracking-luxury mb-2 block font-sans">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                placeholder="your@email.com"
                className="w-full bg-transparent border-b border-foreground/20 py-3 text-sm text-foreground font-sans focus:outline-none focus:border-primary transition-luxury placeholder:text-muted-foreground/50"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-[10px] text-primary uppercase tracking-luxury mb-2 block font-sans">Special Requests</label>
              <textarea
                value={form.requests}
                onChange={(e) => update('requests', e.target.value)}
                placeholder="Any special arrangements or preferences..."
                rows={3}
                className="w-full bg-transparent border-b border-foreground/20 py-3 text-sm text-foreground font-sans focus:outline-none focus:border-primary transition-luxury placeholder:text-muted-foreground/50 resize-none"
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-16 py-4 bg-primary text-primary-foreground text-[11px] font-sans font-bold uppercase tracking-widest hover:bg-foreground transition-luxury"
            >
              Confirm Reservation
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingSection;
