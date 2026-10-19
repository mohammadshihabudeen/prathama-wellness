import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { BUSINESS_INFO } from "@/data/retreat-data";

export default function IntroductionSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#faf7f2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image: Pollachi Landscape / Sanctuary */}
              <div className="relative h-[380px] sm:h-[460px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/pollachi-retreat.jpg"
                  alt="Scenic coconut groves and serene surroundings of Pollachi"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white p-3 bg-black/40 backdrop-blur-sm rounded-xl">
                  <p className="text-xs font-semibold text-[#d6b573]">Pollachi, Tamil Nadu</p>
                  <p className="text-xs text-stone-200">
                    A peaceful town enveloped by coconut estates and fresh breezes from the Anaimalai Hills.
                  </p>
                </div>
              </div>

              {/* Floating Accent Card: Emblem & Authenticity */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#10261d] text-[#faf7f2] p-4 sm:p-5 rounded-2xl shadow-xl border border-[#c5a059]/40 max-w-[220px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-full bg-[#17382b] border border-[#c5a059] flex items-center justify-center text-[#c5a059] shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="font-serif-luxury text-sm font-bold text-white leading-tight">
                    Traditional Heritage
                  </span>
                </div>
                <p className="text-[11px] text-stone-300 leading-tight">
                  Time-honored Kalari Chikitsa & Marma science passed down through dedicated practitioners.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17382b]/10 text-[#17382b] text-xs font-semibold uppercase tracking-wider">
              <span>About Prathama Kalari</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10261d] leading-tight">
              A Living Sanctuary for Traditional South Indian Healing in Pollachi
            </h2>

            <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
              Nestled at <strong className="text-[#10261d]">51, Railway Station Road</strong> right opposite Pollachi Railway Station, <strong className="text-[#10261d]">{BUSINESS_INFO.name}</strong> was created to preserve and practice the profound healing wisdom of Kalaripayattu and authentic Ayurveda.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              In traditional South Indian culture, Kalari is not merely a martial art—it is a comprehensive system of medicine and body mechanics. Through precise knowledge of the 107 vital marma points, suspended-rope bodywork (Chavitti Uzhichil), and medicated herbal oils, we help the body dissolve chronic tension, overcome sports injuries, and restore natural alignment without invasive shortcuts.
            </p>

            {/* Core Values Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                <span className="text-sm text-stone-800 font-medium">
                  Suspended-Rope Chavitti Uzhichil
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                <span className="text-sm text-stone-800 font-medium">
                  Targeted Marma Point Nerve Relief
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                <span className="text-sm text-stone-800 font-medium">
                  Shirodhara & Medicated Kizhi Poultices
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                <span className="text-sm text-stone-800 font-medium">
                  Ethical & Non-Commercial Care
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#17382b] hover:bg-[#10261d] text-[#d6b573] px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg"
              >
                <span>Read Our Full Story & Philosophy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-stone-700 hover:text-[#17382b] text-sm font-semibold underline underline-offset-4"
              >
                <span>Browse All Treatments</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
