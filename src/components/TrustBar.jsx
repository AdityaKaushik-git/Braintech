import { MapPin, Star, BookOpen, Clock, CreditCard } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const items = [
  { icon: MapPin,       label: 'Location',       value: 'Budh Vihar Phase I',      sub: 'New Delhi – 110086',           color: 'text-blue-500',   bg: 'bg-blue-50' },
  { icon: Star,         label: 'Justdial Rating', value: '5.0 ★ Rated',            sub: '578+ Student Reviews',        color: 'text-amber-500',  bg: 'bg-amber-50' },
  { icon: BookOpen,     label: 'Courses',         value: 'Computer Training',       sub: 'Job-Oriented Programs',       color: 'text-cyan-500',   bg: 'bg-cyan-50' },
  { icon: Clock,        label: 'Open',            value: 'Mon – Sat',               sub: '8:00 AM – 8:00 PM',           color: 'text-green-500',  bg: 'bg-green-50' },
  { icon: CreditCard,   label: 'Payment',         value: 'UPI & Cash',              sub: 'Easy Payment Modes',          color: 'text-purple-500', bg: 'bg-purple-50' },
];

export default function TrustBar() {
  return (
    <section className="trust-bar py-5" aria-label="Academy quick information">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center lg:justify-between gap-4">
          {items.map((item, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 80} duration={500}>
              <div className="flex items-center gap-3 min-w-[170px]">
                <div className={`icon-box ${item.bg} flex-shrink-0`}>
                  <item.icon size={18} className={item.color} aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium leading-tight">{item.label}</div>
                  <div className="text-sm font-semibold text-slate-800 leading-tight">{item.value}</div>
                  <div className="text-xs text-gray-500">{item.sub}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
