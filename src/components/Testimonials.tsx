import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import SectionHeading from './ui/SectionHeading';
import { testimonials } from '../data/content';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const t = testimonials[current];

  return (
    <SectionWrapper id="testimonials" background="white">
      <SectionHeading
        title="What Parents Say"
        subtitle="Hear from the families who trust Jijau with their children's education"
      />

      <div className="relative max-w-3xl mx-auto">
        {/* Carousel Container */}
        <div className="relative overflow-hidden min-h-[360px] sm:min-h-[300px] md:min-h-[280px] flex items-center justify-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={t.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.3}
              onDragEnd={(_e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -3000) next();
                else if (swipe > 3000) prev();
              }}
              className="w-full"
            >
              <div className="bg-warm-50 rounded-3xl p-6 sm:p-8 md:p-10 text-center border border-warm-200 shadow-sm">
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-6">
                  <Quote size={22} className="text-primary-500" />
                </div>

                {/* Quote Text */}
                <blockquote className="text-warm-700 text-lg leading-relaxed mb-6 italic">
                  "{t.quote}"
                </blockquote>

                {/* Parent Info */}
                <div className="flex items-center justify-center gap-3">
                  {/* Avatar Circle */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold font-heading text-sm"
                    style={{ backgroundColor: t.avatarColor }}
                  >
                    {t.parentName
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-secondary-700 text-sm">
                      {t.parentName}
                    </p>
                    <p className="text-xs text-warm-400">{t.childGrade}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center text-secondary-600 hover:text-secondary-800 transition-all cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === current
                    ? 'w-8 bg-primary-400'
                    : 'w-2 bg-warm-300 hover:bg-warm-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center text-secondary-600 hover:text-secondary-800 transition-all cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
