import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { VERIFIED_SERVICES, BUSINESS_INFO } from "@/data/retreat-data";

export const metadata: Metadata = {
  title: "Treatments & Services | Prathama Kalari Wellness Retreat",
  description:
    "Explore verified traditional Kalari therapies, Marma Chikitsa, Chavitti Uzhichil, Shirodhara, and Ayurvedic treatments in Pollachi, Tamil Nadu.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  const categories = [
    "All",
    "Kalari Therapies",
    "Ayurvedic Treatments",
    "Rehabilitation & Pain Care",
  ] as const;

  return (
    <main className="min-h-screen bg-[#faf7f2]">
      {/* Services Header Banner */}
      <section className="relative py-24 sm:py-32 bg-[#10261d] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/images/hero-sanctuary.jpg"
            alt="Sanctuary atmosphere"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#10261d]/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17382b] text-[#d6b573] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#c5a059]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Sacred Disciplines</span>
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl mx-auto">
            Traditional Kalari & Ayurvedic Therapies
          </h1>
          <p className="mt-5 text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Every therapy offered at Prathama Kalari is grounded in centuries-old South Indian healing traditions, combining customized botanical thailams with authentic manual techniques.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Transparency / Ethical Notice */}
          <div className="mb-12 p-4 bg-[#17382b]/5 rounded-2xl border border-[#17382b]/15 flex items-start gap-3 max-w-3xl mx-auto text-xs text-stone-700">
            <ShieldCheck className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#10261d]">
                Verified Traditional Services:
              </p>
              <p className="mt-0.5">
                All therapies listed below represent genuine treatments performed at our Pollachi center. We do not offer generic commercial spa services or claim miraculous instant cures. Every protocol is matched to your physical evaluation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VERIFIED_SERVICES.map((service) => {
              const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                `Hello Prathama Kalari! I would like to enquire about ${service.title} session in Pollachi.`
              )}`;

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-stone-200/90 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Image Area */}
                    <div className="relative h-60 w-full overflow-hidden bg-stone-100">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70" />
                      
                      <div className="absolute top-3 left-3 bg-[#10261d]/90 text-[#d6b573] text-[11px] font-semibold px-3 py-1 rounded-full border border-[#c5a059]/40 backdrop-blur-xs">
                        {service.category}
                      </div>

                      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md">
                        <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                        <span>{service.duration}</span>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6">
                      <div className="mb-2">
                        <h2 className="font-serif-luxury text-xl font-bold text-[#10261d] group-hover:text-[#1e4a39] transition-colors">
                          {service.title}
                        </h2>
                        {service.tamilName && (
                          <p className="text-xs text-[#b85d38] font-medium mt-0.5">
                            {service.tamilName}
                          </p>
                        )}
                      </div>

                      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                        {service.shortDescription}
                      </p>

                      <div className="space-y-1.5 pt-2 border-t border-stone-100">
                        <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block">
                          Core Therapeutic Purpose:
                        </span>
                        <p className="text-xs text-stone-700 italic">
                          {service.purpose}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="p-6 pt-0">
                    <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#17382b] hover:text-[#c5a059] transition-colors"
                      >
                        <span>Full Details & Protocol</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#1a8e45] px-3 py-1.5 rounded-full font-medium transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Consultation CTA Banner */}
          <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#10261d] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl border border-[#1e4a39]">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold text-[#c5a059] uppercase tracking-widest">
                Need Guidance on Which Therapy is Right?
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold">
                Speak Directly with Our Healers
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm max-w-xl">
                Every individual presents distinct constitution and physical patterns. Connect with us to determine the ideal course for your spine, joints, and wellbeing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Hello, I need guidance on which therapy is suitable for my health condition."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask on WhatsApp</span>
              </a>
              <Link
                href="/contact#enquire"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c5a059] hover:bg-[#d6b573] text-[#0b1a14] px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-md"
              >
                <span>Book Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
