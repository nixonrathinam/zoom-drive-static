import React from 'react';
import { Phone, MessageSquare, Car as CarIcon, Sparkles } from 'lucide-react';

interface MobileQuickBarProps {
  onBookNowClick: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onBookNowClick }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#0B0B0B]/95 backdrop-blur-xl border-t border-[#FF0033]/40 px-3 pt-2.5 pb-[max(0.6rem,env(safe-area-inset-bottom))] shadow-[0_-10px_25px_rgba(0,0,0,0.8)]">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Direct Phone Call */}
        <a
          href="tel:+917538822706"
          className="flex flex-col items-center justify-center gap-1 py-2 px-1 bg-[#181818] active:bg-[#252525] border border-[#FF0033]/30 text-[#FF0033] rounded-xl text-center transition-all shadow-sm"
          aria-label="Call Zoom Drive"
        >
          <Phone className="w-4 h-4 text-[#FF0033]" />
          <span className="text-[10px] font-extrabold tracking-tight">CALL NOW</span>
        </a>

        {/* WhatsApp Instant Chat */}
        <a
          href={`https://wa.me/917538822706?text=${encodeURIComponent("Hi Zoom Drive, I am interested to book a car. Please share details and availability!")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-2 px-1 bg-[#0E281A] active:bg-[#143B26] border border-emerald-700/60 text-emerald-400 rounded-xl text-center transition-all shadow-sm"
          aria-label="WhatsApp Enquiry"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400" />
          <span className="text-[10px] font-extrabold tracking-tight">WHATSAPP</span>
        </a>

        {/* Primary Instant Booking Action */}
        <button
          onClick={onBookNowClick}
          className="flex flex-col items-center justify-center gap-1 py-2 px-1 bg-gradient-to-r from-[#FF0033] via-[#E11D48] to-[#CC0029] active:scale-98 text-white rounded-xl text-center font-black transition-all shadow-md shadow-[#FF0033]/25 cursor-pointer"
        >
          <div className="flex items-center gap-1">
            <CarIcon className="w-4 h-4 text-white" />
            <Sparkles className="w-3 h-3 text-white animate-pulse" />
          </div>
          <span className="text-[10px] font-black tracking-tight uppercase">BOOK NOW</span>
        </button>
      </div>
    </div>
  );
};
