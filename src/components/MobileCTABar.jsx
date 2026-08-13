import { Phone, MessageSquare, ChevronRight } from 'lucide-react';
import { academy } from '../data/academyData';

export default function MobileCTABar() {
  const handleEnquire = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="mobile-cta-bar" role="toolbar" aria-label="Quick contact actions">
      {!academy.phone.includes('XXXXXXXXXX') ? (
        <a
          href={`tel:${academy.phone}`}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white border border-gray-200 shadow-md hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-xl transition-colors"
          aria-label={`Call ${academy.phone}`}
        >
          <Phone size={16} />
          Call
        </a>
      ) : (
        <button
          onClick={handleEnquire}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white border border-gray-200 shadow-md hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-xl transition-colors"
          aria-label="Enquire about courses"
        >
          <MessageSquare size={16} />
          Enquire
        </button>
      )}

      <button
        onClick={handleEnquire}
        className="flex-[2] flex items-center justify-center gap-2 py-2.5 bg-[#0F7B10] hover:bg-[#0d6e0e] text-white font-semibold text-sm rounded-xl transition-colors shadow-md"
        aria-label="Send course enquiry"
      >
        Enquire Now
        <ChevronRight size={15} />
      </button>
    </div>
  );
}
