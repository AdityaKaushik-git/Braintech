import { ChevronRight, ArrowRight, Star, MapPin, Clock } from 'lucide-react';
import { academy, galleryImages } from '../data/academyData';
import CountUp from './CountUp';

/* Tiny inline keyframe for the hero entrance — runs once on mount */
const heroStyle = `
  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes heroSlideRight {
    from { opacity: 0; transform: translateX(40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes badgePop {
    0%   { opacity: 0; transform: scale(0.7); }
    60%  { transform: scale(1.06); }
    100% { opacity: 1; transform: scale(1); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
`;

function HeroAnim({ children, delay = 0, from = 'up', style = {} }) {
  const fromMap = {
    up:    'translateY(30px)',
    right: 'translateX(40px)',
    left:  'translateX(-40px)',
  };
  return (
    <div
      style={{
        animation: `heroFadeUp 0.7s ease both`,
        animationDelay: `${delay}ms`,
        '--from': fromMap[from],
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function Hero() {
  const handleScroll = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <style>{heroStyle}</style>

      <section
        id="home"
        className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-green-50 via-white to-white overflow-hidden"
        aria-label="Hero — Braintech Computer Academy"
      >
        <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_50%,rgba(15,123,16,0.08)_0%,transparent_70%),radial-gradient(ellipse_40%_40%_at_10%_80%,rgba(166,213,44,0.05)_0%,transparent_60%)] pointer-events-none" aria-hidden="true" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* ── Left copy ── */}
            <div className="order-2 lg:order-1">

              {/* Trust badge */}
              <div
                style={{ animation: 'badgePop 0.6s ease both', animationDelay: '100ms' }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm/8 border border-white/15 mb-6"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-slate-600 font-medium">
                  Rated <strong className="text-slate-900">5.0</strong> by 578+ students on Justdial
                </span>
              </div>

              {/* Headline */}
              <HeroAnim delay={200}>
                <h1 className="font-display text-slate-900 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-5">
                  Build Skills.<br />
                  <span
                    className="gradient-text"
                    style={{
                      backgroundSize: '200% auto',
                      animation: 'shimmer 4s linear infinite',
                      animationDelay: '1s',
                    }}
                  >
                    Build Confidence.
                  </span>
                  <br />
                  Build Your Future.
                </h1>
              </HeroAnim>

              <HeroAnim delay={350}>
                <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-xl">
                  Braintech Computer Academy in Budh Vihar, Delhi offers expert computer training with AC classrooms, experienced faculty, and job-oriented courses designed to launch your career.
                </p>
              </HeroAnim>

              {/* CTAs */}
              <HeroAnim delay={480}>
                <div className="flex flex-col sm:flex-row gap-3 mb-10">
                  <button
                    onClick={() => handleScroll('courses')}
                    className="btn-primary group w-full sm:w-auto justify-center"
                  >
                    Explore Courses
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => handleScroll('contact')}
                    className="btn-secondary w-full sm:w-auto justify-center"
                  >
                    Contact Academy
                    <ChevronRight size={16} />
                  </button>
                </div>
              </HeroAnim>

              {/* Quick info pills */}
              <HeroAnim delay={600}>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <MapPin size={15} className="text-[#A6D52C] flex-shrink-0" />
                    <span>Budh Vihar Phase I, New Delhi - 110086</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Clock size={15} className="text-[#A6D52C] flex-shrink-0" />
                    <span>Mon – Sat · 8AM – 8PM</span>
                  </div>
                </div>
              </HeroAnim>
            </div>

            {/* ── Right image stack ── */}
            <div
              className="order-1 lg:order-2 relative"
              style={{ animation: 'heroSlideRight 0.8s ease both', animationDelay: '300ms' }}
            >
              {/* Main image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 animate-float">
                <img
                  src="/Braintech/images/Institute_Front_Face.jpeg"
                  alt="Braintech Computer Academy — Computer Lab, Budh Vihar Delhi"
                  className="w-full h-72 sm:h-96 object-cover"
                  loading="eager"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div
                  className="w-full h-72 sm:h-96 bg-gradient-to-br from-gray-100 to-gray-200 hidden items-center justify-center"
                  aria-hidden="true"
                >
                  <div className="text-center text-slate-400">
                    <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="1.5"/>
                      <path d="M8 21h8M12 17v4" strokeWidth="1.5"/>
                    </svg>
                    <p className="text-sm">Academy Image</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Floating badge — rating */}
              <div
                className="absolute -bottom-4 -left-4 z-20 bg-white border border-gray-100 rounded-xl p-3.5 shadow-xl border border-gray-100 flex items-center gap-3"
                style={{ animation: 'badgePop 0.6s ease both', animationDelay: '800ms' }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center">
                  <Star size={18} className="fill-white text-slate-900" />
                </div>
                <div>
                  <div className="text-xl font-extrabold text-slate-900 leading-tight">5.0 ★</div>
                  <div className="text-xs text-slate-500"><CountUp end={578} suffix="+" /> Reviews</div>
                </div>
              </div>

              {/* Floating badge — location */}
              <div
                className="absolute -top-3 -right-3 z-20 bg-white border border-gray-100 rounded-xl p-3 shadow-xl border border-gray-100 flex items-center gap-2.5 max-w-[180px]"
                style={{ animation: 'badgePop 0.6s ease both', animationDelay: '950ms' }}
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0F7B10] to-[#A6D52C] flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">Budh Vihar</div>
                  <div className="text-xs text-slate-500">Delhi – 110086</div>
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#A6D52C]/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>

        {/* Bottom curve */}
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60H1440V20C1440 20 1080 60 720 60C360 60 0 20 0 20V60Z" fill="#f8fafc"/>
          </svg>
        </div>
      </section>
    </>
  );
}
