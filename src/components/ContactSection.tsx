import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Your message has been sent. We will get back to you shortly.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs tracking-luxury uppercase mb-4 block font-sans">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground font-light">Contact & Inquiry</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-serif text-foreground mb-8 font-light">We'd Love to Hear From You</h3>
            <div className="space-y-6 mb-10">
              <a href="tel:+919972919995" className="flex items-center gap-4 group">
                <Phone size={18} className="text-primary" />
                <span className="text-foreground font-sans text-sm group-hover:text-primary transition-luxury">+91 99729 19995</span>
              </a>
              <a href="mailto:vonehotelraichur@gmail.com" className="flex items-center gap-4 group">
                <Mail size={18} className="text-primary" />
                <span className="text-foreground font-sans text-sm group-hover:text-primary transition-luxury">vonehotelraichur@gmail.com</span>
              </a>
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-primary mt-0.5" />
                <span className="text-foreground font-sans text-sm leading-relaxed">Uday Nagar, Raichur,<br />Karnataka, India</span>
              </div>
            </div>

            {/* Map embed */}
            <div className="w-full aspect-video bg-card border border-foreground/5 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30528.976308!2d76.5465!3d16.2076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc7b25e23456789%3A0xabcdef!2sRaichur%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
                allowFullScreen
                loading="lazy"
                title="V One Hotel Location"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="text-[10px] text-primary uppercase tracking-luxury mb-2 block font-sans">Your Name *</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-foreground/20 py-3 text-sm text-foreground font-sans focus:outline-none focus:border-primary transition-luxury"
              />
            </div>
            <div>
              <label className="text-[10px] text-primary uppercase tracking-luxury mb-2 block font-sans">Email Address *</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-b border-foreground/20 py-3 text-sm text-foreground font-sans focus:outline-none focus:border-primary transition-luxury"
              />
            </div>
            <div>
              <label className="text-[10px] text-primary uppercase tracking-luxury mb-2 block font-sans">Your Message *</label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full bg-transparent border-b border-foreground/20 py-3 text-sm text-foreground font-sans focus:outline-none focus:border-primary transition-luxury resize-none"
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground text-[11px] font-sans font-bold uppercase tracking-widest hover:bg-foreground transition-luxury"
            >
              Send Message <ChevronRight size={14} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
