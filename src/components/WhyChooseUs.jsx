import { Wind, GraduationCap, Briefcase, IndianRupee, Users, MapPin } from 'lucide-react';
import { features } from '../data/academyData';
import ScrollReveal from './ScrollReveal';

const iconMap = { Wind, GraduationCap, Briefcase, IndianRupee, Users, MapPin };

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding relative overflow-hidden" aria-labelledby="why-us-heading">
      <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0F7B10]/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#A6D52C]/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <ScrollReveal animation="fade-up">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#0F7B10] mb-3">Why Braintech</p>
            <h2 id="why-us-heading" className="section-title mb-5">Why Students Choose Us</h2>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mx-auto">
              Thousands of students have trusted Braintech Computer Academy in Budh Vihar. Here's what makes us stand out.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Wind;
            return (
              <ScrollReveal key={feature.id} animation="zoom-in" delay={i * 100} duration={600} className="h-full flex flex-col">
                <article className="group relative bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-[#0F7B10]/30 rounded-2xl p-6 transition-all duration-300 cursor-default h-full flex-1">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0F7B10]/10 to-[#A6D52C]/10 border border-gray-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 group-hover:border-[#0F7B10]/30 transition-all duration-300">
                    <Icon size={22} className="text-[#0F7B10] group-hover:text-[#0F7B10] transition-colors" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-base mb-2 group-hover:text-[#0F7B10] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-600 transition-colors">
                    {feature.description}
                  </p>
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'radial-gradient(circle at 50% 0%, rgba(166,213,44,0.12) 0%, transparent 70%)' }} />
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal animation="fade-up" delay={200}>
          <div className="text-center mt-14">
            <p className="text-slate-500 text-sm mb-5">
              Rated <strong className="text-slate-900">5.0 ★</strong> with <strong className="text-slate-900">578+ reviews</strong> on Justdial — Budh Vihar's most trusted computer training institute.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Start Learning Today
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
