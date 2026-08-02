import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { navLinks, contactInfo } from '../data/content';
import Button from './ui/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass shadow-[var(--shadow-nav)] py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Jijau English Medium School Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover shadow-md group-hover:shadow-lg transition-shadow"
            />
            <div className="hidden sm:block">
              <h1 className="font-heading font-bold text-secondary-700 text-lg leading-tight">
                Jijau
              </h1>
              <p className="text-xs text-warm-500 leading-tight">
                English Medium School
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-warm-700 hover:text-primary-500 rounded-lg hover:bg-warm-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* [EDIT ME] Phone number */}
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-1.5 text-sm text-warm-600 hover:text-secondary-600 transition-colors"
            >
              <Phone size={16} />
              <span>{contactInfo.phone}</span>
            </a>
            {/* [EDIT ME] WhatsApp number */}
            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-green-600 hover:text-green-700 transition-colors"
            >
              <MessageCircle size={16} />
            </a>
            <Button href="#admissions" size="sm">
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Button href="#admissions" size="sm" className="text-xs px-3 py-1.5">
              Enquire
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-warm-700 hover:text-secondary-600 rounded-lg hover:bg-warm-100 transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-white z-50 shadow-2xl lg:hidden overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-2">
                    <img
                      src="/logo.png"
                      alt="Jijau English Medium School Logo"
                      className="w-8 h-8 rounded-lg object-cover"
                    />
                    <span className="font-heading font-bold text-secondary-700">
                      Jijau School
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1.5 text-warm-500 hover:text-warm-700 rounded-lg hover:bg-warm-100"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-warm-700 hover:text-primary-500 hover:bg-warm-50 rounded-xl font-medium transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-warm-200 space-y-3">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center gap-3 px-4 py-2.5 text-warm-600 hover:text-secondary-600 rounded-xl hover:bg-warm-50 transition-colors"
                  >
                    <Phone size={18} />
                    <span className="text-sm">{contactInfo.phone}</span>
                  </a>
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2.5 text-green-600 hover:text-green-700 rounded-xl hover:bg-green-50 transition-colors"
                  >
                    <MessageCircle size={18} />
                    <span className="text-sm">Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
