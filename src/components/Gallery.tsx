import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import SectionHeading from './ui/SectionHeading';
import { galleryImages } from '../data/content';

function GalleryCard({
  src,
  alt,
  category,
  onClick,
}: {
  src: string;
  alt: string;
  category: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="relative w-full h-full min-h-[220px] overflow-hidden rounded-2xl group cursor-pointer border border-warm-200 shadow-sm"
      aria-label={`View ${alt}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
      <div className="absolute inset-0 flex flex-col justify-between p-4 text-left">
        <div className="self-end">
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <Camera size={18} />
          </div>
        </div>
        <div>
          <span className="inline-block px-2.5 py-1 bg-primary-500 text-white rounded-md text-xs font-semibold mb-1">
            {category}
          </span>
          <p className="text-white text-sm font-medium line-clamp-1">{alt}</p>
        </div>
      </div>
    </button>
  );
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="gallery" background="white">
      <SectionHeading
        title="Campus Life"
        subtitle="Glimpses of the vibrant learning, celebrations, and joy at Jijau School"
      />

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[240px] md:auto-rows-[260px]">
        {galleryImages.map((image, index) => (
          <div
            key={image.src}
            className={`
              ${image.span === 'wide' ? 'md:col-span-2' : ''}
              ${image.span === 'tall' ? 'row-span-2' : ''}
            `}
          >
            <GalleryCard
              src={image.src}
              alt={image.alt}
              category={image.category}
              onClick={() => setLightboxIndex(index)}
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image View */}
              <div className="relative w-full h-[60vh] max-h-[600px] bg-black flex items-center justify-center">
                <img
                  src={galleryImages[lightboxIndex].src}
                  alt={galleryImages[lightboxIndex].alt}
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white">
                  <span className="inline-block px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-md mb-2">
                    {galleryImages[lightboxIndex].category}
                  </span>
                  <p className="text-base font-medium">
                    {galleryImages[lightboxIndex].alt}
                  </p>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-black/90 transition-colors cursor-pointer z-10"
                aria-label="Close lightbox"
              >
                <X size={20} />
              </button>

              {/* Navigation */}
              <div className="flex justify-between items-center p-4 bg-slate-900 text-white">
                <button
                  onClick={() =>
                    setLightboxIndex(
                      (lightboxIndex - 1 + galleryImages.length) %
                        galleryImages.length
                    )
                  }
                  className="px-4 py-2 bg-slate-800 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  ← Previous
                </button>
                <span className="text-sm text-slate-400 font-medium">
                  {lightboxIndex + 1} of {galleryImages.length}
                </span>
                <button
                  onClick={() =>
                    setLightboxIndex(
                      (lightboxIndex + 1) % galleryImages.length
                    )
                  }
                  className="px-4 py-2 bg-slate-800 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  Next →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
