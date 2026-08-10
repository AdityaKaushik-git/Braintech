import { useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { galleryImages } from '../data/academyData';
import ScrollReveal from './ScrollReveal';

function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  const img = images[currentIndex];

  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'ArrowRight') onNext();
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`Gallery image: ${img.alt}`}
      onClick={onClose}
      onKeyDown={handleKey}
      tabIndex={-1}
    >
      <button
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
        onClick={onClose}
        aria-label="Close gallery"
        autoFocus
      >
        <X size={20} />
      </button>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors disabled:opacity-30"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        disabled={currentIndex === 0}
        aria-label="Previous image"
      >
        <ChevronLeft size={22} />
      </button>
      <div onClick={(e) => e.stopPropagation()}>
        <img
          src={img.src}
          alt={img.alt}
          className="lightbox-img"
          onError={(e) => { e.target.alt = 'Image not available'; }}
        />
        <p className="text-center text-white/60 text-sm mt-3">{img.caption}</p>
        <p className="text-center text-white/40 text-xs mt-1">{currentIndex + 1} / {images.length}</p>
      </div>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors disabled:opacity-30"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        disabled={currentIndex === images.length - 1}
        aria-label="Next image"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}

const heights = ['h-52', 'h-64', 'h-48', 'h-60', 'h-56', 'h-44'];

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const openLightbox = (i) => setLightboxIdx(i);
  const closeLightbox = () => setLightboxIdx(null);
  const prevImage = () => setLightboxIdx(i => Math.max(0, i - 1));
  const nextImage = () => setLightboxIdx(i => Math.min(galleryImages.length - 1, i + 1));

  return (
    <section id="gallery" className="section-padding bg-gray-50" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Photo Gallery</p>
            <h2 id="gallery-heading" className="section-title mb-4">Inside Braintech Academy</h2>
            <p className="section-subtitle mx-auto text-center">
              Take a visual tour of our facilities, classrooms, and learning environment in Budh Vihar Phase I.
            </p>
          </div>
        </ScrollReveal>

        {/* Masonry grid with staggered reveal */}
        <div className="columns-2 sm:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <ScrollReveal key={img.id} animation="zoom-in" delay={i * 80} duration={600}>
              <div
                className={`gallery-item break-inside-avoid ${heights[i % heights.length]}`}
                onClick={() => openLightbox(i)}
                role="button"
                tabIndex={0}
                aria-label={`View: ${img.alt}`}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLightbox(i); }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-slate-100 flex items-center justify-center">
                        <span class="text-slate-400 text-sm">Image unavailable</span>
                      </div>
                    `;
                  }}
                />
                {/* Hover zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 scale-75 hover:scale-100 transition-transform">
                    <ZoomIn size={22} className="text-white" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={100}>
          <p className="text-center text-slate-500 text-sm mt-8">
            See all 61+ photos on{' '}
            <a
              href="https://www.justdial.com/Delhi/Braintech-Computer-Academy-Gulab-Park-Budh-Vihar/011PXX11-XX11-220528132912-N2B4_BZDET"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              Justdial
            </a>
          </p>
        </ScrollReveal>
      </div>

      {lightboxIdx !== null && (
        <Lightbox
          images={galleryImages}
          currentIndex={lightboxIdx}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  );
}
