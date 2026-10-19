"use client";

import { MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/data/retreat-data";

export default function WhatsAppFloating() {
  const defaultMessage = encodeURIComponent(
    "Hello! I am contacting Prathama Kalari Wellness Retreat (Pollachi) to enquire about consultations and treatments."
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      <div className="hidden md:block mr-3 bg-[#10261d] text-[#d6b573] text-xs font-medium py-1.5 px-3 rounded-full shadow-lg border border-[#c5a059]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Enquire on WhatsApp
      </div>
      <a
        href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire via WhatsApp on +91 93448 82346"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-105 active:scale-95 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping" />
        <MessageCircle className="w-7 h-7 relative z-10" />
      </a>
    </div>
  );
}
