import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Academics from './components/Academics';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import AdmissionsSection from './components/Admissions/AdmissionsSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';

function MobileEnquiryCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#admissions"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 lg:hidden px-6 py-3 bg-accent-400 hover:bg-accent-500 text-white rounded-full shadow-button font-semibold text-sm flex items-center gap-2 transition-colors"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', damping: 20 }}
        >
          <Send size={16} />
          Enquire Now
        </motion.a>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-warm-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Academics />
        <Facilities />
        <Gallery />
        <Testimonials />
        <AdmissionsSection />
        <Contact />
      </main>
      <Footer />

      {/* Floating Elements */}
      <WhatsAppButton />
      <BackToTop />
      <MobileEnquiryCTA />
    </div>
  );
}
