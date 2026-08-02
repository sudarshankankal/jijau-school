import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      <motion.h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? 'text-white' : 'text-secondary-700'
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="heading-underline">{title}</span>
      </motion.h2>
      {subtitle && (
        <motion.p
          className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-warm-300' : 'text-warm-600'
          }`}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
