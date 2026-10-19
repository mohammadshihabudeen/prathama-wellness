import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, MessageCircle, Info } from "lucide-react";
import { WELLNESS_PROGRAMS, BUSINESS_INFO } from "@/data/retreat-data";

export default function PackagesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-[#faf7f2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17382b]/10 text-[#17382b] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Structured Retreats</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10261d]">
            Curated Wellness Programs
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            Multi-day immersive healing regimens designed to achieve measurable rejuvenation, spinal mobility, and profound mental rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WELLNESS_PROGRAMS.map((program) => {
            const programWhatsAppUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
              `Hello! I am interested in learning more about the ${program.title} (${program.duration}) at Prathama Kalari Retreat.`
            )}`;

            return (
              <div
                key={program.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-stone-200 flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  <div className="relative h-48 w-full bg-stone-100">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    {program.badge && (
                      <span className="absolute top-3 right-3 bg-[#c5a059] text-[#0b1a14] text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                        {program.badge}
                      </span>
                    )}
                    <div className="absolute bottom-3 left-4 text-white">
                      <span className="text-xs font-medium text-[#d6b573] uppercase tracking-wider block">
                        Duration: {program.duration}
                      </span>
                      <h3 className="font-serif-luxury text-lg font-bold">
                        {program.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-5">
                      {program.overview}
                    </p>

                    <div className="space-y-2 mb-6">
                      <p className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                        Program Inclusions:
                      </p>
                      {program.inclusions.slice(0, 4).map((inc, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                          <Check className="w-3.5 h-3.5 text-[#1a8e45] shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-stone-100 mt-2">
                  <p className="text-xs text-stone-500 italic mb-3">
                    {program.pricingNote}
                  </p>
                  <div className="flex items-center gap-2">
                    <a
                      href={programWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-4 rounded-xl text-xs font-semibold transition-all shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                    <Link
                      href="/programs"
                      className="inline-flex items-center justify-center p-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl transition-colors"
                      title="View Program Details"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informational Notice */}
        <div className="mt-12 p-4 bg-[#17382b]/5 rounded-xl border border-[#17382b]/15 flex items-start gap-3 max-w-2xl mx-auto text-xs text-stone-600">
          <Info className="w-4 h-4 text-[#17382b] shrink-0 mt-0.5" />
          <span>
            <strong>Please Note:</strong> All retreat schedules and treatment intensity are personalized following an initial assessment with our senior practitioners to ensure compatibility with your physical condition.
          </span>
        </div>
      </div>
    </section>
  );
}
