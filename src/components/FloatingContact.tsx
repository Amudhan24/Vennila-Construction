'use client';

import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

export const FloatingContact: React.FC = () => {
  const phoneClean = COMPANY_INFO.phone.replace(/[^0-9+]/g, '');
  const waClean = COMPANY_INFO.whatsapp.replace(/[^0-9]/g, '');

  return (
    <>
      {/* Desktop Floating Action Buttons (Bottom-Right) */}
      <div className="hidden lg:flex fixed bottom-8 right-8 z-40 flex-col space-y-3">
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${waClean}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 border border-white/20 group relative p-3.5"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-white" />
          <span className="absolute right-16 bg-charcoal-900 text-white text-xs font-semibold px-3 py-1.5 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            WhatsApp Inquiry
          </span>
        </a>

        {/* Call Button */}
        <a
          href={`tel:${phoneClean}`}
          className="w-13 h-13 rounded-full bg-gold-400 hover:bg-gold-500 text-white flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 border border-white/20 group relative p-3.5"
          aria-label="Call Now"
        >
          <Phone className="w-6 h-6" />
          <span className="absolute right-16 bg-charcoal-900 text-white text-xs font-semibold px-3 py-1.5 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Call Construction Desk
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar (Call Now | WhatsApp | Enquire) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-charcoal-900/95 backdrop-blur-md border-t border-gold-400/30 text-white grid grid-cols-3 divide-x divide-charcoal-800 text-center py-3 text-xs font-semibold">
        <a
          href={`tel:${phoneClean}`}
          className="flex flex-col items-center justify-center space-y-1 hover:text-gold-400 transition-colors"
        >
          <Phone className="w-4 h-4 text-gold-400" />
          <span>Call Now</span>
        </a>

        <a
          href={`https://wa.me/${waClean}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center space-y-1 hover:text-gold-400 transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400" />
          <span>WhatsApp</span>
        </a>

        <a
          href="/#consultation"
          className="flex flex-col items-center justify-center space-y-1 text-gold-400 font-bold uppercase tracking-wider"
        >
          <Calendar className="w-4 h-4" />
          <span>Enquire</span>
        </a>
      </div>
    </>
  );
};
