import { motion } from 'framer-motion';
import { heroContent, heroStats } from '../data/content';
import Button from './ui/Button';
import * as LucideIcons from 'lucide-react';

function HeroIllustration() {
  return (
    <motion.div
      className="relative w-full max-w-lg mx-auto lg:max-w-none"
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Main illustration — kids learning */}
      <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Background blob */}
        <ellipse cx="250" cy="220" rx="220" ry="170" fill="#FFF5E8" />
        <ellipse cx="250" cy="220" rx="190" ry="150" fill="#FFECD1" opacity="0.5" />
        
        {/* School building */}
        <rect x="160" y="100" width="180" height="140" rx="12" fill="#1B4965" />
        <rect x="170" y="110" width="160" height="120" rx="8" fill="#2D8BB2" />
        
        {/* Roof */}
        <path d="M140 108 L250 50 L360 108" fill="#1B4965" stroke="#163C54" strokeWidth="3" />
        <circle cx="250" cy="78" r="12" fill="#F5A623" />
        
        {/* Windows */}
        <rect x="190" y="125" width="35" height="30" rx="4" fill="#FFF5E8" />
        <rect x="275" y="125" width="35" height="30" rx="4" fill="#FFF5E8" />
        <rect x="190" y="170" width="35" height="30" rx="4" fill="#FFF5E8" />
        <rect x="275" y="170" width="35" height="30" rx="4" fill="#FFF5E8" />
        
        {/* Door */}
        <rect x="232" y="185" width="36" height="55" rx="18" fill="#F5A623" />
        <circle cx="258" cy="215" r="3" fill="#CC7F0E" />
        
        {/* Flag */}
        <line x1="250" y1="50" x2="250" y2="25" stroke="#1B4965" strokeWidth="2" />
        <path d="M250 25 L275 32 L250 40" fill="#E8614D" />
        
        {/* Child 1 — reading */}
        <circle cx="120" cy="260" r="18" fill="#F5A623" />
        <circle cx="120" cy="248" r="14" fill="#FFE09E" />
        <rect x="106" y="268" width="28" height="35" rx="8" fill="#E8614D" />
        <rect x="100" y="290" width="16" height="30" rx="4" fill="#1B4965" />
        <rect x="124" y="290" width="16" height="30" rx="4" fill="#1B4965" />
        {/* Book */}
        <rect x="95" y="275" width="22" height="16" rx="2" fill="#1B4965" transform="rotate(-15 95 275)" />
        
        {/* Child 2 — waving */}
        <circle cx="380" cy="255" r="18" fill="#2D8BB2" />
        <circle cx="380" cy="243" r="14" fill="#FFE09E" />
        <rect x="366" y="263" width="28" height="35" rx="8" fill="#F5A623" />
        <rect x="360" y="285" width="16" height="30" rx="4" fill="#1B4965" />
        <rect x="384" y="285" width="16" height="30" rx="4" fill="#1B4965" />
        {/* Waving arm */}
        <line x1="394" y1="270" x2="415" y2="250" stroke="#FFE09E" strokeWidth="6" strokeLinecap="round" />
        
        {/* Tree */}
        <rect x="60" y="280" width="10" height="50" rx="3" fill="#A66208" />
        <circle cx="65" cy="265" r="28" fill="#2D8BB2" opacity="0.3" />
        <circle cx="60" cy="260" r="22" fill="#1B6A94" opacity="0.5" />
        
        {/* Clouds */}
        <ellipse cx="100" cy="60" rx="30" ry="14" fill="white" opacity="0.7" />
        <ellipse cx="400" cy="45" rx="35" ry="16" fill="white" opacity="0.6" />
        
        {/* Sun */}
        <circle cx="430" cy="70" r="25" fill="#F5A623" opacity="0.9" />
        <circle cx="430" cy="70" r="18" fill="#FFD077" />
        
        {/* Ground */}
        <ellipse cx="250" cy="340" rx="230" ry="30" fill="#8EC8DE" opacity="0.2" />
        
        {/* Stars/sparkles */}
        <path d="M150 80 L153 87 L160 90 L153 93 L150 100 L147 93 L140 90 L147 87 Z" fill="#F5A623" opacity="0.6" />
        <path d="M350 100 L352 105 L357 107 L352 109 L350 114 L348 109 L343 107 L348 105 Z" fill="#E8614D" opacity="0.5" />
      </svg>

      {/* Decorative blobs behind illustration */}
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary-200 blob-shape opacity-30 -z-10" />
      <div className="absolute -bottom-4 -left-6 w-24 h-24 bg-accent-200 blob-shape opacity-25 -z-10" />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-100 blob-shape opacity-40" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary-100 blob-shape opacity-30" />
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-accent-100 blob-shape opacity-20" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              🎓 Admissions Open 2026–27
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-700 mb-6 leading-tight">
              {heroContent.headline.split('Joy').map((part, i) =>
                i === 0 ? (
                  <span key={i}>
                    {part}
                    <span className="text-primary-400">Joy</span>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </h1>

            <p className="text-lg text-warm-600 mb-8 max-w-xl mx-auto lg:mx-0">
              {heroContent.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href="#admissions" size="lg">
                {heroContent.ctaPrimary}
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                {heroContent.ctaSecondary}
              </Button>
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <HeroIllustration />
          </motion.div>
        </div>

        {/* Trust Strip */}
        <motion.div
          className="mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {heroStats.map((stat, index) => {
              const IconComponent = LucideIcons[stat.icon as keyof typeof LucideIcons] as React.ComponentType<{ size?: number; className?: string }>;
              return (
                <motion.div
                  key={stat.label}
                  className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                    {IconComponent && <IconComponent size={22} className="text-primary-500" />}
                  </div>
                  <div>
                    <div className="text-xl font-bold text-secondary-700 font-heading">
                      {stat.value}
                    </div>
                    <div className="text-xs text-warm-500">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
