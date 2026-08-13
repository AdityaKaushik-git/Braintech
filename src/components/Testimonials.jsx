import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { testimonials } from '../data/academyData';
import ScrollReveal from './ScrollReveal';
import CountUp from './CountUp';

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200 fill-gray-200'}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent(i => Math.max(0, i - 1));
  const next = () => setCurrent(i => Math.min(testimonials.length - 1, i + 1));

  return (
    <section id="reviews" className="section-padding relative overflow-hidden" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Student Reviews</p>
            <h2 id="reviews-heading" className="section-title mb-4">What Our Students Say</h2>
            <p className="section-subtitle mx-auto text-center">
              Genuine reviews from verified students on Justdial — Budh Vihar, Delhi.
            </p>
          </div>
        </ScrollReveal>

        {/* Overall rating bar */}
        <ScrollReveal animation="zoom-in" delay={100} className="relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 p-6 bg-white border border-gray-100 rounded-2xl max-w-2xl mx-auto shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="text-center group">
              <div className="text-6xl font-extrabold font-display text-slate-900 leading-none group-hover:scale-105 transition-transform duration-300">5.0</div>
              <div className="flex gap-1 justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-sm text-slate-500 mt-1">out of 5</div>
            </div>
            <div className="w-px h-16 bg-slate-200 hidden sm:block" />
            <div className="text-center group">
              <div className="text-4xl font-extrabold font-display text-slate-900 leading-none group-hover:scale-105 transition-transform duration-300">
                <CountUp end={578} suffix="+" />
              </div>
              <div className="text-slate-500 text-sm mt-1">Student Reviews</div>
              <a
                href="https://www.justdial.com/Delhi/Braintech-Computer-Academy-Gulab-Park-Budh-Vihar/011PXX11-XX11-220528132912-N2B4_BZDET"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#0F7B10] text-xs hover:underline mt-2 font-medium"
              >
                View on Justdial <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Carousel */}
        {testimonials.length > 0 && (
          <ScrollReveal animation="fade-up" delay={150}>
            <div className="max-w-3xl mx-auto">
              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${current * 100}%)` }}
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {testimonials.map((t, i) => (
                    <div key={t.id} className="w-full h-full flex-shrink-0 px-2">
                      <div
                        className={`testimonial-card h-full flex flex-col transition-all duration-500 ${
                          i === current ? 'opacity-100 scale-100' : 'opacity-40 scale-95 pointer-events-none'
                        }`}
                        aria-hidden={i !== current}
                      >
                        <div className="w-10 h-10 rounded-xl bg-[#0F7B10]/5 flex items-center justify-center mb-4">
                          <Quote size={18} className="text-[#0F7B10]" />
                        </div>
                        <StarRating rating={t.rating} />
                        <blockquote className="mt-4 mb-5 flex-1">
                          <p className="text-slate-700 text-base leading-relaxed">"{t.text}"</p>
                        </blockquote>
                        <footer className="flex items-center justify-between mt-auto">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0F7B10] to-[#A6D52C] flex items-center justify-center text-white font-bold text-sm">
                              {t.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                              <div className="text-xs text-slate-500">{t.date}</div>
                            </div>
                          </div>
                          <span className="text-xs text-slate-500">via {t.source}</span>
                        </footer>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {testimonials.length > 1 && (
                <div className="flex items-center justify-center gap-4 mt-8">
                  <button
                    onClick={prev}
                    disabled={current === 0}
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-slate-600 hover:border-[#0F7B10] hover:text-[#0F7B10] transition-colors disabled:opacity-30"
                    aria-label="Previous review"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <div className="flex gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === current ? 'bg-[#0F7B10] w-6' : 'bg-gray-300 hover:bg-gray-400 w-2'
                        }`}
                        aria-label={`Go to review ${i + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={next}
                    disabled={current === testimonials.length - 1}
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-slate-600 hover:border-[#0F7B10] hover:text-[#0F7B10] transition-colors disabled:opacity-30"
                    aria-label="Next review"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </div>
          </ScrollReveal>
        )}

        <ScrollReveal animation="fade-up" delay={200}>
          <p className="text-center text-slate-500 text-xs mt-8 max-w-lg mx-auto">
            All reviews are authentic public reviews from the Justdial listing for Braintech Computer Academy, Budh Vihar. Only reviews with meaningful text are displayed.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
