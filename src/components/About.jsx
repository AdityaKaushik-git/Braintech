import { CheckCircle, ChevronRight, MapPin, Star } from 'lucide-react';
import { galleryImages } from '../data/academyData';
import ScrollReveal from './ScrollReveal';

const highlights = [
  'AC classrooms for comfortable learning',
  'Expert, knowledgeable & supportive faculty',
  'Job-oriented courses with placement support',
  'Affordable fees for quality education',
  'Friendly, student-focused environment',
  'Conveniently located in Budh Vihar, Delhi',
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Images ── */}
          <ScrollReveal animation="fade-right" duration={700}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl group">
                <img
                  src={galleryImages[1].src}
                  alt="Braintech Computer Academy training session, Budh Vihar Delhi"
                  className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => { e.target.src = ''; }}
                />
              </div>

              <div className="absolute -bottom-6 -right-6 w-40 h-40 sm:w-52 sm:h-52 rounded-xl overflow-hidden shadow-xl border-4 border-white group">
                <img
                  src={galleryImages[2].src}
                  alt="Students learning at Braintech Computer Academy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => { e.target.src = ''; }}
                />
              </div>

              {/* Floating rating card */}
              <div className="absolute top-4 -left-4 sm:-left-8 bg-white rounded-xl shadow-xl p-3.5 border border-gray-100 max-w-[160px]">
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-xs font-bold text-slate-900">5.0 on Justdial</div>
                <div className="text-xs text-slate-500 mt-0.5">578+ reviews</div>
              </div>

              <div className="absolute -z-10 -bottom-4 -left-4 w-2/3 h-2/3 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100" aria-hidden="true" />
            </div>
          </ScrollReveal>

          {/* ── Right: Content ── */}
          <div>
            <ScrollReveal animation="fade-up" delay={0}>
              <p className="section-label mb-3">About Us</p>
              <h2 id="about-heading" className="section-title mb-5">
                Braintech Computer Academy
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Braintech Computer Academy is a trusted computer training institute located in Budh Vihar Phase I, New Delhi. We are committed to delivering high-quality computer education in a comfortable, professional environment.
              </p>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Our students — from school children to working professionals — benefit from expert faculty, AC classrooms, practical hands-on training, and job-oriented course programs designed to build real-world technology skills.
              </p>
            </ScrollReveal>

            <ul className="space-y-2.5 mb-8" aria-label="Academy highlights">
              {highlights.map((point, i) => (
                <ScrollReveal key={i} animation="fade-left" delay={i * 60} duration={500}>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={17} className="text-blue-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-slate-700 text-sm">{point}</span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-6 p-3 bg-slate-50 rounded-lg border border-slate-100 w-fit">
                <MapPin size={16} className="text-blue-500 flex-shrink-0" />
                <span>Y11, 30 Feet Rd, Pocket A, Block A, Budh Vihar Phase I</span>
              </div>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary group"
              >
                Enquire Now
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
