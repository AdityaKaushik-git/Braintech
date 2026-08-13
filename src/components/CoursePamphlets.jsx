import { useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { pamphletImages } from '../data/academyData';
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
      aria-label={`Pamphlet image: ${img.alt}`}
      onClick={onClose}
      onKeyDown={handleKey}
      tabIndex={-1}
    >
      <button
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm text-slate-900 flex items-center justify-center transition-colors"
        onClick={onClose}
        aria-label="Close"
        autoFocus
      >
        <X size={20} />
      </button>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm text-slate-900 flex items-center justify-center transition-colors disabled:opacity-30"
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
        <p className="text-center text-slate-900/60 text-sm mt-3">{img.caption}</p>
        <p className="text-center text-slate-900/40 text-xs mt-1">{currentIndex + 1} / {images.length}</p>
      </div>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm text-slate-900 flex items-center justify-center transition-colors disabled:opacity-30"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        disabled={currentIndex === images.length - 1}
        aria-label="Next image"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}

const heights = ['h-64', 'h-52', 'h-60', 'h-48'];

export default function CoursePamphlets() {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const openLightbox = (i) => setLightboxIdx(i);
  const closeLightbox = () => setLightboxIdx(null);
  const prevImage = () => setLightboxIdx(i => Math.max(0, i - 1));
  const nextImage = () => setLightboxIdx(i => Math.min(pamphletImages.length - 1, i + 1));

  return (
    <section id="pamphlets" className="section-padding relative overflow-hidden" aria-labelledby="pamphlets-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Course Info & Pamphlets</p>
            <h2 id="pamphlets-heading" className="section-title mb-4">Explore Our Programs</h2>
            <p className="section-subtitle mx-auto text-center">
              View our detailed course pamphlets and discover what we offer.
            </p>
          </div>
        </ScrollReveal>

        {/* Masonry grid with staggered reveal */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          {pamphletImages.map((img, i) => (
            <ScrollReveal key={img.id} animation="zoom-in" delay={i * 60} duration={600}>
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
                      <div class="w-full h-full bg-white border border-gray-200 shadow-md flex items-center justify-center">
                        <span class="text-slate-500 text-sm">Image unavailable</span>
                      </div>
                    `;
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="bg-white border border-gray-100 shadow-sm backdrop-blur-sm rounded-full p-3 scale-75 hover:scale-100 transition-transform">
                    <ZoomIn size={22} className="text-slate-900" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {lightboxIdx !== null && (
        <Lightbox
          images={pamphletImages}
          currentIndex={lightboxIdx}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  );
}
