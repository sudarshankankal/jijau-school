import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  delay?: number;
}

export default function Card({
  children,
  className = '',
  hoverable = true,
  delay = 0,
}: CardProps) {
  return (
    <motion.div
      className={`
        bg-white rounded-[var(--radius-card)] p-6 
        shadow-[var(--shadow-card)]
        ${hoverable ? 'hover:shadow-[var(--shadow-card-hover)]' : ''}
        transition-shadow duration-300
        ${className}
      `}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1, ease: [0.4, 0, 0.2, 1] }}
      whileHover={hoverable ? { y: -6 } : undefined}
    >
      {children}
    </motion.div>
  );
}
