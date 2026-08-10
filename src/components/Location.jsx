import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { academy, mapConfig } from '../data/academyData';
import ScrollReveal from './ScrollReveal';

export default function Location() {
  const whatsappUrl = `https://wa.me/${academy.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20courses%20at%20Braintech%20Computer%20Academy.`;

  const cards = [
    {
      icon: MapPin, bg: 'bg-blue-50', iconColor: 'text-blue-600',
      title: 'Address',
      content: (
        <address className="not-italic text-slate-600 text-sm leading-relaxed">
          Braintech Computer Academy<br />Y11, 30 Feet Rd, Pocket A, Block A<br />Budh Vihar Phase I, New Delhi – 110086
        </address>
      ),
    },
    {
      icon: Phone, bg: 'bg-green-50', iconColor: 'text-green-600',
      title: 'Phone',
      content: academy.phone.includes('XXXXXXXXXX')
        ? <p className="text-slate-500 text-sm italic">📞 TODO: CLIENT TO PROVIDE phone number</p>
        : <a href={`tel:${academy.phone}`} className="text-blue-600 font-medium hover:underline">{academy.phone}</a>,
    },
    {
      icon: Clock, bg: 'bg-purple-50', iconColor: 'text-purple-600',
      title: 'Opening Hours',
      content: (
        <div className="space-y-1 text-sm w-full">
          <div className="flex justify-between">
            <span className="text-slate-600">Monday – Saturday</span>
            <span className="font-medium text-slate-900">8:00 AM – 8:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600">Sunday</span>
            <span className="font-medium text-red-500">Closed</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="location" className="section-padding bg-gray-50" aria-labelledby="location-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Find Us</p>
            <h2 id="location-heading" className="section-title mb-4">Visit Braintech Academy</h2>
            <p className="section-subtitle mx-auto text-center">
              Conveniently located in Budh Vihar Phase I — easily accessible from Rohini and surrounding areas.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Info panel */}
          <div className="lg:col-span-2 space-y-4">
            {cards.map((card, i) => (
              <ScrollReveal key={i} animation="fade-right" delay={i * 100} duration={550}>
                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className={`icon-box-lg ${card.bg} flex-shrink-0`}>
                      <card.icon size={22} className={card.iconColor} aria-hidden="true" />
                    </div>
                    <div className="w-full">
                      <h3 className="font-semibold text-slate-900 mb-1">{card.title}</h3>
                      {card.content}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="flex flex-col gap-3">
                <a
                  href={mapConfig.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary justify-center group"
                >
                  <Navigation size={16} />
                  Get Directions
                </a>
                {!academy.phone.includes('XXXXXXXXXX') && (
                  <a href={`tel:${academy.phone}`} className="btn-secondary justify-center">
                    <Phone size={16} /> Call Now
                  </a>
                )}
                {!academy.whatsapp.includes('XXXXXXXXXX') && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#1da84e] transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp Us
                  </a>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* Map */}
          <ScrollReveal animation="fade-left" delay={100} duration={700} className="lg:col-span-3">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-96 lg:h-[500px]">
              <iframe
                src={mapConfig.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Braintech Computer Academy location map — Budh Vihar Phase I, New Delhi"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
