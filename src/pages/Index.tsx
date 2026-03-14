import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import RoomsSection from '@/components/RoomsSection';
import DiningSection from '@/components/DiningSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import GallerySection from '@/components/GallerySection';
import BookingSection from '@/components/BookingSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <RoomsSection />
      <DiningSection />
      <AmenitiesSection />
      <GallerySection />
      <WhyChooseSection />
      <BookingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
