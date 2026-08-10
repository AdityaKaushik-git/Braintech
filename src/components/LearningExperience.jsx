import { Monitor, BookOpen, Users, Zap } from 'lucide-react';
import { galleryImages } from '../data/academyData';
import ScrollReveal from './ScrollReveal';

const stats = [
  { icon: Monitor, label: 'Computer Labs', value: 'AC Equipped',   color: 'text-blue-500' },
  { icon: BookOpen, label: 'Learning Mode', value: 'Hands-On',     color: 'text-cyan-500' },
  { icon: Users,    label: 'Environment',  value: 'Student-First', color: 'text-purple-500' },
  { icon: Zap,      label: 'Approach',     value: 'Job-Oriented',  color: 'text-amber-500' },
];

function LazyImage({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`transition-transform duration-700 hover:scale-105 ${className}`}
      loading="lazy"
      onError={(e) => { e.target.style.background = '#f1f5f9'; }}
    />
  );
}

export default function LearningExperience() {
  return (
    <section className="section-padding bg-white" aria-labelledby="learning-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <p className="section-label mb-3">The Experience</p>
            <h2 id="learning-heading" className="section-title mb-4">A Modern Learning Environment</h2>
            <p className="section-subtitle mx-auto text-center">
              At Braintech, learning is practical, hands-on, and conducted in a comfortable, air-conditioned space built for focused study.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Large photo grid */}
          <ScrollReveal animation="fade-right" duration={700} className="lg:col-span-3 space-y-5">
            <div className="rounded-2xl overflow-hidden shadow-xl h-72 sm:h-96">
              <LazyImage
                src={galleryImages[3].src}
                alt="Braintech Computer Academy computer lab — Budh Vihar Delhi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-xl overflow-hidden shadow-md h-40">
                <LazyImage
                  src={galleryImages[4].src}
                  alt="Students practising on computers at Braintech Academy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md h-40">
                <LazyImage
                  src={galleryImages[5].src}
                  alt="Braintech Computer Academy classroom, Budh Vihar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Info + stats */}
          <div className="lg:col-span-2 space-y-5">
            {[
              { bg: 'bg-slate-50', border: 'border-slate-100', title: 'Comfortable AC Classrooms',
                text: 'Our air-conditioned classrooms provide the ideal environment for focused, productive learning — comfortable through every season.' },
              { bg: 'bg-blue-50', border: 'border-blue-100', title: 'Hands-On Practical Learning',
                text: 'Every concept is reinforced with practical exercises on real computers, ensuring students gain usable, industry-relevant skills.' },
              { bg: 'bg-cyan-50', border: 'border-cyan-100', title: 'Expert, Personalized Guidance',
                text: 'Our faculty are highly knowledgeable and supportive, offering personalized attention to help each student master their chosen course.' },
            ].map((card, i) => (
              <ScrollReveal key={i} animation="fade-left" delay={i * 120} duration={500}>
                <div className={`p-5 ${card.bg} rounded-2xl border ${card.border}`}>
                  <h3 className="font-display font-bold text-slate-900 text-base mb-2">{card.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{card.text}</p>
                </div>
              </ScrollReveal>
            ))}

            {/* Mini stat grid */}
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-100 rounded-xl p-3.5 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <stat.icon size={20} className={`${stat.color} mx-auto mb-1.5`} aria-hidden="true" />
                    <div className="text-sm font-bold text-slate-900">{stat.value}</div>
                    <div className="text-xs text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
