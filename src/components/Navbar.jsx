import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { navLinks } from '../data/academyData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navLinks.map(l => l.href.replace('#', ''));
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    // Run once on mount to set initial state
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-in-out will-change-transform ${
          isScrolled
            ? 'bg-[#0a1628]/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-white/10'
            : 'bg-[#0a1628] border-b border-white/5'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-400 ease-in-out ${
              isScrolled ? 'py-3' : 'py-5'
            }`}
          >
            {/* ── Logo ── */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
              className="flex items-center gap-3.5 group flex-shrink-0 transition-transform duration-400 ease-in-out origin-left"
              style={{ transform: isScrolled ? 'scale(0.85)' : 'scale(1)' }}
              aria-label="Braintech Computer Academy — Home"
            >
              {/* Icon box */}
              <div
                className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0 shadow-lg transition-transform duration-300 group-hover:scale-105 group-active:scale-95"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                  <path d="M9 10l2 2 4-4" />
                </svg>
              </div>

              {/* Text */}
              <div className="leading-none flex flex-col justify-center">
                <div className="font-display font-extrabold text-white text-[20px] tracking-tight mb-1">
                  Braintech
                </div>
                <div className="text-cyan-100/80 font-medium text-[11px] tracking-wide uppercase">
                  Computer Academy
                </div>
              </div>
            </a>

            {/* ── Desktop nav links ── */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 group/link ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {/* Hover background */}
                    <span className="absolute inset-0 rounded-lg bg-white/0 group-hover/link:bg-white/10 transition-colors duration-200" />
                    <span className="relative">{link.label}</span>
                    
                    {/* Active bottom line */}
                    <span 
                      className={`absolute bottom-0 left-4 right-4 h-[2px] bg-cyan-400 rounded-full transition-all duration-300 ease-out origin-center ${
                        isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                      }`} 
                    />
                  </a>
                );
              })}
            </div>

            {/* ── Desktop CTA ── */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                className={`group relative inline-flex items-center gap-1.5 font-semibold rounded-lg px-5 py-2.5 text-sm transition-all duration-300 hover:-translate-y-0.5 active:scale-95 ${
                  isScrolled
                    ? 'bg-blue-600 text-white shadow-md hover:bg-blue-500 hover:shadow-blue-600/30 hover:shadow-lg border border-transparent'
                    : 'bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20'
                }`}
              >
                Enquire Now
                <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* ── Mobile hamburger ── */}
            <button
              className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out ${
                    isOpen ? 'rotate-90 opacity-100' : 'rotate-0 opacity-0 pointer-events-none scale-50'
                  }`}
                >
                  <X size={24} />
                </span>
                <span
                  className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out ${
                    isOpen ? '-rotate-90 opacity-0 pointer-events-none scale-50' : 'rotate-0 opacity-100 scale-100'
                  }`}
                >
                  <Menu size={24} />
                </span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile menu backdrop ── */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* ── Mobile menu panel ── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#080f1e] shadow-2xl lg:hidden transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-white/8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
            </div>
            <span className="font-display font-bold text-white text-base">Braintech</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="p-4 space-y-1">
          {navLinks.map((link, i) => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-300 group ${
                  isActive
                    ? 'bg-blue-600/10 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
                style={{ 
                  transitionDelay: isOpen ? `${i * 40}ms` : '0ms',
                  transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
                  opacity: isOpen ? 1 : 0
                }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-1 h-1 rounded-full transition-colors ${isActive ? 'bg-cyan-400' : 'bg-transparent'}`} />
                  <span className="font-medium text-sm">{link.label}</span>
                </div>
                <ChevronRight
                  size={16}
                  className={`transition-transform duration-300 ${isActive ? 'text-cyan-400 translate-x-1' : 'text-slate-600 group-hover:text-slate-400 group-hover:translate-x-1'}`}
                />
              </a>
            );
          })}
        </nav>

        {/* Bottom CTA */}
        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#080f1e] via-[#080f1e] to-transparent">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-blue-600/20"
          >
            Enquire Now
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </>
  );
}
