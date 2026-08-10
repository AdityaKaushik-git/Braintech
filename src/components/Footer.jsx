import { MapPin, Phone, Clock, ExternalLink, Heart } from 'lucide-react';
import { academy, courses, navLinks } from '../data/academyData';

export default function Footer() {
  const handleScroll = (href) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#060e1c] text-slate-400" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/8">

          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <path d="M8 21h8M12 17v4"/>
                  <path d="M9 10l2 2 4-4"/>
                </svg>
              </div>
              <div>
                <div className="font-display font-bold text-white text-base leading-tight">
                  Braintech Computer Academy
                </div>
                <div className="text-xs text-slate-500 leading-tight">
                  Computer Training Institute
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-400 mb-5 max-w-xs">
              Expert computer training in a comfortable, AC learning environment. Serving students, professionals, and career-seekers in Budh Vihar Phase I, New Delhi since our establishment.
            </p>

            {/* Contact info */}
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5 text-sm">
                <MapPin size={15} className="text-blue-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <address className="not-italic text-slate-400">
                  Y11, 30 Feet Rd, Pocket A, Block A<br />Budh Vihar Phase I, New Delhi – 110086
                </address>
              </div>
              {!academy.phone.includes('XXXXXXXXXX') && (
                <div className="flex items-center gap-2.5 text-sm">
                  <Phone size={15} className="text-blue-400 flex-shrink-0" aria-hidden="true" />
                  <a href={`tel:${academy.phone}`} className="hover:text-white transition-colors">
                    {academy.phone}
                  </a>
                </div>
              )}
              <div className="flex items-center gap-2.5 text-sm">
                <Clock size={15} className="text-blue-400 flex-shrink-0" aria-hidden="true" />
                <span>Mon – Sat · 8:00 AM – 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2.5">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleScroll(link.href); }}
                      className="text-sm text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-flex items-center gap-1 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Courses list */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Our Courses
            </h3>
            <ul className="space-y-2.5">
              {courses.slice(0, 6).map(course => (
                <li key={course.id}>
                  <a
                    href="#courses"
                    onClick={(e) => { e.preventDefault(); handleScroll('#courses'); }}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {course.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {year} Braintech Computer Academy, Budh Vihar, Delhi. All rights reserved.
          </p>

          <div className="flex items-center gap-1.5">
            <span>Designed & Developed by</span>
            <span className="text-slate-300 font-semibold">Arknex</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
