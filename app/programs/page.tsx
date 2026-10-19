import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, Check, X, MessageCircle, Calendar, ShieldCheck, Sparkles, AlertCircle } from "lucide-react";
import { WELLNESS_PROGRAMS, BUSINESS_INFO } from "@/data/retreat-data";
import EnquiryForm from "@/components/forms/EnquiryForm";

export const metadata: Metadata = {
  title: "Wellness Programs & Packages | Prathama Kalari Wellness Retreat",
  description:
    "Explore multi-day wellness retreats in Pollachi: Pancha Prana Rejuvenation, Kalari Marma Spinal Care, and Manasa Shanti Stress Reset programs.",
  alternates: {
    canonical: "/programs",
  },
};

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[#faf7f2]">
      {/* Hero Banner */}
      <section className="relative py-24 sm:py-32 bg-[#10261d] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/images/pollachi-retreat.jpg"
            alt="Pollachi wellness landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#10261d]/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17382b] text-[#d6b573] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#c5a059]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Structured Multi-Day Regimens</span>
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto">
            Wellness Programs & Restorative Retreats
          </h1>
          <p className="mt-5 text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Immerse yourself in focused South Indian healing regimens designed to reverse chronic fatigue, restore spinal flexibility, and detoxify the physiology.
          </p>
        </div>
      </section>

      {/* Owner Confirmation Notice */}
      <section className="pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 sm:p-5 bg-amber-50 border border-amber-200/80 rounded-2xl flex items-start gap-3 text-xs sm:text-sm text-amber-900 leading-relaxed">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">Retreat Package Customization Notice:</strong>{" "}
              Package durations, specific daily therapies, and stay arrangements are customizable to each visitor&apos;s health needs following a direct consultation with our retreat team. Request a tailored quote below.
            </div>
          </div>
        </div>
      </section>

      {/* Programs Detailed List */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {WELLNESS_PROGRAMS.map((program, index) => {
            const isReversed = index % 2 !== 0;
            const programWhatsAppUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
              `Hello Prathama Kalari! I would like to enquire about the ${program.title} (${program.duration}) in Pollachi.`
            )}`;

            return (
              <div
                key={program.id}
                id={program.slug}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-stone-200/90"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 ${isReversed ? "lg:flex-row-reverse" : ""}`}>
                  {/* Visual Column */}
                  <div className="lg:col-span-5 relative h-72 lg:h-auto min-h-[340px]">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <span className="bg-[#10261d]/90 text-[#d6b573] text-xs font-semibold px-3 py-1 rounded-full border border-[#c5a059]/40 backdrop-blur-xs">
                        {program.category}
                      </span>
                      {program.badge && (
                        <span className="bg-[#c5a059] text-[#0b1a14] text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow">
                          {program.badge}
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-1.5 text-xs text-[#d6b573] mb-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Recommended Duration: {program.duration}</span>
                      </div>
                      <h3 className="font-serif-luxury text-xl font-bold">
                        {program.title}
                      </h3>
                    </div>
                  </div>

                  {/* Information Column */}
                  <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                        <h2 className="font-serif-luxury text-2xl font-bold text-[#10261d]">
                          {program.title}
                        </h2>
                        <span className="text-xs font-semibold text-[#17382b] bg-[#17382b]/10 px-3 py-1 rounded-full">
                          {program.duration}
                        </span>
                      </div>

                      <p className="text-stone-700 text-sm leading-relaxed">
                        {program.overview}
                      </p>

                      {/* Inclusions & Ideal For */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                        <div className="space-y-2">
                          <p className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                            What&apos;s Included:
                          </p>
                          <ul className="space-y-1.5 text-xs text-stone-600">
                            {program.inclusions.map((inc, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check className="w-3.5 h-3.5 text-[#1a8e45] shrink-0 mt-0.5" />
                                <span>{inc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <p className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                            Ideal For:
                          </p>
                          <ul className="space-y-1.5 text-xs text-stone-600">
                            {program.idealFor.map((ideal, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#c5a059] mt-1.5 shrink-0" />
                                <span>{ideal}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Schedule Outline */}
                      {program.scheduleOutline && (
                        <div className="p-4 bg-stone-50 rounded-xl space-y-2">
                          <p className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                            Daily Flow Outline:
                          </p>
                          <div className="space-y-1 text-xs text-stone-700">
                            {program.scheduleOutline.map((step, idx) => (
                              <p key={idx}>• {step}</p>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Actions & Pricing Note */}
                    <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <p className="text-xs text-stone-500 italic">
                          {program.pricingNote}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <a
                          href={programWhatsAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition-all shadow-md"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Enquire via WhatsApp</span>
                        </a>
                        <Link
                          href="/contact#enquire"
                          className="inline-flex items-center gap-2 bg-[#17382b] hover:bg-[#10261d] text-[#d6b573] px-5 py-2.5 rounded-xl text-xs font-semibold transition-all shadow-md"
                        >
                          <Calendar className="w-4 h-4" />
                          <span>Request Quotation</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Program Request Form Section */}
      <section className="py-16 bg-[#f4ede2] border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#b85d38] uppercase tracking-widest">
              Personalized Retreatment Plan
            </span>
            <h2 className="font-serif-luxury text-3xl font-bold text-[#10261d] mt-2">
              Request a Custom Program Assessment
            </h2>
            <p className="mt-2 text-stone-600 text-sm">
              Tell us your health objectives and available days in Pollachi.
            </p>
          </div>

          <EnquiryForm />
        </div>
      </section>
    </main>
  );
}
