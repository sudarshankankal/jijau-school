import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: 'white' | 'warm' | 'secondary' | 'gradient';
}

const bgClasses: Record<string, string> = {
  white: 'bg-white',
  warm: 'bg-warm-50',
  secondary: 'bg-secondary-600 text-white',
  gradient: 'bg-gradient-to-b from-warm-50 to-warm-100',
};

export default function SectionWrapper({
  id,
  children,
  className = '',
  background = 'warm',
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`section-padding ${bgClasses[background]} ${className}`}
    >
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
}
