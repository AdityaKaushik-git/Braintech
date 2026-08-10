import {
  Monitor, FileText, Calculator, Code2, Terminal,
  Palette, Database, Briefcase, ChevronRight, ArrowRight
} from 'lucide-react';
import { courses } from '../data/academyData';
import ScrollReveal from './ScrollReveal';

const iconMap = { Monitor, FileText, Calculator, Code2, Terminal, Palette, Database, Briefcase };

const categoryColors = {
  Foundation:           'bg-slate-100 text-slate-600',
  'Office Productivity':'bg-blue-50 text-blue-600',
  'Finance & Accounting':'bg-green-50 text-green-600',
  Programming:          'bg-purple-50 text-purple-600',
  Design:               'bg-pink-50 text-pink-600',
  'Office Skills':      'bg-orange-50 text-orange-600',
  Career:               'bg-cyan-50 text-cyan-600',
};

function CourseCard({ course, index }) {
  const Icon = iconMap[course.icon] || Monitor;
  const categoryClass = categoryColors[course.category] || 'bg-slate-100 text-slate-600';

  return (
    <ScrollReveal animation="zoom-up" delay={index * 70} duration={550}>
      <article
        className={`card group relative flex flex-col h-full ${
          course.featured ? 'border-blue-200 bg-gradient-to-br from-blue-50/60 to-white' : ''
        }`}
        aria-label={`Course: ${course.title}`}
      >
        {course.featured && (
          <div className="absolute -top-3 left-4">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full shadow-sm">
              <Briefcase size={10} />
              Most Popular
            </span>
          </div>
        )}

        <div className="flex items-start gap-4 mb-4">
          <div
            className={`icon-box-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
              course.featured
                ? 'bg-gradient-to-br from-blue-500 to-cyan-400'
                : 'bg-gradient-to-br from-blue-50 to-cyan-50'
            }`}
          >
            <Icon size={22} className={course.featured ? 'text-white' : 'text-blue-600'} aria-hidden="true" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-display font-bold text-slate-900 text-base leading-tight mb-1">
              {course.title}
            </h3>
            <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${categoryClass}`}>
              {course.category}
            </span>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-4">{course.shortDesc}</p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <span className="text-xs text-slate-400 font-medium">{course.level}</span>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-blue-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all hover:text-blue-700 group/btn"
            aria-label={`Enquire about ${course.title}`}
          >
            Enquire
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </article>
    </ScrollReveal>
  );
}

export default function Courses() {
  return (
    <section id="courses" className="section-padding bg-gray-50" aria-labelledby="courses-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <ScrollReveal animation="fade-up">
          <div className="text-center mb-4">
            <p className="section-label mb-3">What We Offer</p>
            <h2 id="courses-heading" className="section-title mb-4">Courses & Training Programs</h2>
            <p className="section-subtitle mx-auto text-center">
              Practical, job-oriented computer training designed for students, professionals, and anyone ready to build technology skills.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={100}>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-10 flex items-start gap-3">
            <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-amber-800 text-sm">
              <strong>Course details:</strong> Specific durations, fees, and full curriculum are available at the academy. Contact us or visit directly for the most up-to-date information.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {courses.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={100}>
          <div className="text-center mt-12">
            <p className="text-slate-600 text-sm mb-4">Not sure which course is right for you? Our team will guide you.</p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary group"
            >
              Get Free Guidance
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
