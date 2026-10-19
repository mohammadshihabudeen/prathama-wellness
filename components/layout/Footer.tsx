import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, MessageCircle, ShieldCheck, HeartHandshake } from "lucide-react";
import { BUSINESS_INFO, VERIFIED_SERVICES } from "@/data/retreat-data";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0b1a14] text-stone-300 border-t border-[#1e4a39]/50">
      {/* Top Banner / Guarantee of Authenticity */}
      <div className="bg-[#10261d] border-b border-[#1e4a39]/30 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-[#1e4a39] text-[#c5a059]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="font-serif-luxury text-white font-medium text-base">
                Authentic South Indian Lineage & Traditional Healing
              </p>
              <p className="text-xs text-stone-400">
                Genuine Kalari Marma therapy and traditional Ayurvedic care in Pollachi.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                "Hello, I would like to enquire about treatments and consultations at Prathama Kalari Wellness Retreat."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp Enquiry</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center gap-2 bg-[#1e4a39] hover:bg-[#295f4a] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all border border-[#c5a059]/40"
            >
              <Phone className="w-4 h-4 text-[#c5a059]" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#c5a059]/60 shadow-md">
                <Image
                  src="/images/prathama-emblem.jpg"
                  alt="Prathama Kalari Emblem"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-serif-luxury text-xl font-bold tracking-wider text-white block">
                  PRATHAMA KALARI
                </span>
                <span className="text-xs uppercase tracking-widest text-[#c5a059]">
                  Wellness Retreat • Pollachi
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed pr-4">
              Prathama Kalari Wellness Retreat is dedicated to the traditional sciences of South Indian Kalari Chikitsa, Marma vital point therapy, and authentic Ayurvedic wellness. Nestled in Pollachi at the foothills of the Western Ghats, we offer natural rejuvenation and structural restoration.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={BUSINESS_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs bg-[#17382b] hover:bg-[#204d3d] text-[#d6b573] px-3 py-1.5 rounded-full border border-[#c5a059]/30 transition-colors"
                aria-label="Instagram Profile"
              >
                <svg className="w-4 h-4 text-[#c5a059]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <span>{BUSINESS_INFO.instagramHandle}</span>
              </a>
            </div>

            <div className="pt-2 text-xs text-stone-400">
              <span className="text-stone-300 font-medium">Regional Name:</span> {BUSINESS_INFO.regionalName}
            </div>
          </div>

          {/* Col 3: Key Treatments */}
          <div className="space-y-3">
            <h3 className="font-serif-luxury text-base text-white font-semibold tracking-wide border-b border-[#1e4a39] pb-2">
              Verified Therapies
            </h3>
            <ul className="space-y-2 text-sm">
              {VERIFIED_SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-stone-400 hover:text-[#d6b573] transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-xs font-semibold text-[#c5a059] hover:underline"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation & Programs */}
          <div className="space-y-3">
            <h3 className="font-serif-luxury text-base text-white font-semibold tracking-wide border-b border-[#1e4a39] pb-2">
              Explore Retreat
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-stone-400 hover:text-[#d6b573] transition-colors">
                  About Our Heritage
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-stone-400 hover:text-[#d6b573] transition-colors">
                  Wellness Programs & Packages
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-stone-400 hover:text-[#d6b573] transition-colors">
                  Retreat Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-stone-400 hover:text-[#d6b573] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-stone-400 hover:text-[#d6b573] transition-colors">
                  Contact & Location Directions
                </Link>
              </li>
              <li>
                <Link href="/cancellation-policy" className="text-stone-400 hover:text-[#d6b573] transition-colors">
                  Booking & Cancellation Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-stone-400 hover:text-[#d6b573] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Location & Hours */}
          <div className="space-y-3">
            <h3 className="font-serif-luxury text-base text-white font-semibold tracking-wide border-b border-[#1e4a39] pb-2">
              Visit Us
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.address.line1}, {BUSINESS_INFO.address.landmark}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.pincode}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS_INFO.displayPhone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <p className="text-stone-300 font-medium">Mon: 7:00 AM – 6:00 PM</p>
                  <p className="text-[11px] text-stone-400">Tue – Sat: Standard Hours</p>
                  <p className="text-[11px] text-stone-400">Sun: Advance Appointment</p>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs text-[#c5a059] underline hover:text-[#d6b573]"
                >
                  Get Google Maps Directions →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Ethical Medical & Traditional Therapy Disclaimer */}
        <div className="mt-12 pt-6 border-t border-[#1e4a39]/40 text-xs text-stone-400 leading-relaxed space-y-2">
          <p className="text-stone-300 font-medium">
            * Traditional Practice & Wellness Consultation Notice:
          </p>
          <p>
            Treatments offered at Prathama Kalari Wellness Retreat are based on authentic South Indian traditional systems of Kalari Chikitsa, Marma therapy, and classical Ayurveda. Our services aim to support physical mobility, pain management, tissue rejuvenation, and overall health. They are not intended as emergency allopathic medical interventions. Guests with specific diagnosed medical conditions are encouraged to consult their physician and present their medical history during their preliminary consultation.
          </p>
        </div>

        {/* Copyright Bar */}
        <div className="mt-8 pt-6 border-t border-[#1e4a39]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <span>•</span>
            <Link href="/cancellation-policy" className="hover:text-white transition-colors">
              Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
