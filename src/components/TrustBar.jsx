import { MapPin, Star, BookOpen, Clock, CreditCard } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const items = [
  { icon: MapPin,       label: 'Location',       value: 'Budh Vihar Phase I',      sub: 'New Delhi – 110086',           color: 'text-[#0F7B10]',   bg: 'bg-[#0F7B10]/5' },
  { icon: Star,         label: 'Justdial Rating', value: '5.0 ★ Rated',            sub: '578+ Student Reviews',        color: 'text-amber-500',  bg: 'bg-amber-50' },
  { icon: BookOpen,     label: 'Courses',         value: 'Computer Training',       sub: 'Job-Oriented Programs',       color: 'text-[#A6D52C]',   bg: 'bg-[#A6D52C]/10' },
  { icon: Clock,        label: 'Open',            value: 'Mon – Sat',               sub: '8:00 AM – 8:00 PM',           color: 'text-green-500',  bg: 'bg-green-50' },
  { icon: CreditCard,   label: 'Payment',         value: 'UPI & Cash',              sub: 'Easy Payment Modes',          color: 'text-purple-500', bg: 'bg-purple-50' },
];

export default function TrustBar() {
  return (
    <section className="trust-bar py-5" aria-label="Academy quick information">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-nowrap justify-between gap-6 lg:gap-4">
          {items.map((item, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 80} duration={500}>
              <div className="flex items-center gap-3 min-w-[170px] group cursor-default">
                <div className={`icon-box ${item.bg} flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  <item.icon size={18} className={`${item.color} transition-colors duration-300`} aria-hidden="true" />
                </div>
                <div className="transition-transform duration-300 group-hover:translate-x-1">
                  <div className="text-xs text-slate-500 font-medium leading-tight">{item.label}</div>
                  <div className="text-sm font-semibold text-slate-900 leading-tight group-hover:text-[#0F7B10] transition-colors duration-300">{item.value}</div>
                  <div className="text-xs text-slate-500">{item.sub}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
