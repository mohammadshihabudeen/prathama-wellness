import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Calendar, ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "@/data/retreat-data";

export default function HeroSection() {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hello! I would like to book a consultation at Prathama Kalari Wellness Retreat in Pollachi."
  )}`;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#0b1a14] overflow-hidden">
      {/* Background Hero Image with warm gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-sanctuary.jpg"
          alt="Prathama Kalari traditional healing sanctuary in Pollachi"
          fill
          priority
          className="object-cover object-center opacity-45 mix-blend-luminosity scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a14] via-[#0b1a14]/65 to-[#0b1a14]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,26,20,0.7)_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
        {/* Subtle decorative badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#17382b]/90 border border-[#c5a059]/40 text-[#d6b573] text-xs sm:text-sm font-medium mb-6 shadow-lg backdrop-blur-sm animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse" />
          <span>Authentic South Indian Kalari Chikitsa & Traditional Ayurveda</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.15] drop-shadow-sm">
          Awaken Ancient Vitality Through Genuine{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d6b573] via-[#c5a059] to-[#dfc282]">
            Kalari Marma Healing
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-stone-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Welcome to <strong className="text-white font-medium">Prathama Kalari Wellness Retreat</strong> in Pollachi. Experience authentic rope-assisted <span className="text-[#d6b573]">Chavitti Uzhichil</span>, vital <span className="text-[#d6b573]">Marma therapy</span>, and classical Ayurvedic rejuvenation for pain relief and deep renewal.
        </p>

        {/* Location & Opening Hours pill */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-stone-400">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
            Opposite Railway Station, Pollachi, Tamil Nadu
          </span>
          <span className="hidden sm:inline text-stone-600">•</span>
          <span>Verified Hours: Mon 7:00 AM – 6:00 PM</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
          {/* WhatsApp CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-7 py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Enquire on WhatsApp</span>
          </a>

          {/* Book Consultation Form CTA */}
          <Link
            href="/contact#enquire"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c5a059] hover:bg-[#d6b573] text-[#0b1a14] px-7 py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Consultation</span>
          </Link>

          {/* Explore Services Link */}
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#17382b]/80 hover:bg-[#1e4a39] text-stone-200 hover:text-white px-6 py-4 rounded-full font-medium text-sm sm:text-base border border-[#c5a059]/30 transition-all duration-200"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4 text-[#c5a059]" />
          </Link>
        </div>

        {/* Pillars / Trust Badges */}
        <div className="mt-14 sm:mt-16 pt-10 border-t border-[#1e4a39]/60 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-left">
          <div className="p-3.5 rounded-xl bg-[#10261d]/60 border border-[#1e4a39]/40 backdrop-blur-xs">
            <div className="flex items-center gap-2 text-[#c5a059] text-xs font-semibold mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Kalari Lineage</span>
            </div>
            <p className="text-xs text-stone-300">
              Traditional South Indian martial healing & Chavitti Uzhichil.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#10261d]/60 border border-[#1e4a39]/40 backdrop-blur-xs">
            <div className="flex items-center gap-2 text-[#c5a059] text-xs font-semibold mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Marma Vital Science</span>
            </div>
            <p className="text-xs text-stone-300">
              Targeted relief for 107 vital energy intersections and spinal nerves.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#10261d]/60 border border-[#1e4a39]/40 backdrop-blur-xs">
            <div className="flex items-center gap-2 text-[#c5a059] text-xs font-semibold mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Classical Herbal Oils</span>
            </div>
            <p className="text-xs text-stone-300">
              Potent herbal thailams prepared following classical Ayurvedic recipes.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#10261d]/60 border border-[#1e4a39]/40 backdrop-blur-xs">
            <div className="flex items-center gap-2 text-[#c5a059] text-xs font-semibold mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Pollachi Setting</span>
            </div>
            <p className="text-xs text-stone-300">
              Tranquil coconut grove climate opposite Pollachi Railway Station.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
