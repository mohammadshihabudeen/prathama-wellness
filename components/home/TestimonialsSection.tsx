import { MessageSquareQuote, CheckCircle, ShieldCheck } from "lucide-react";
import { TESTIMONIALS, BUSINESS_INFO } from "@/data/retreat-data";

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f4ede2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17382b]/10 text-[#17382b] text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Guest Experiences</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10261d]">
            Voices of Healing & Restoration
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            Genuine experiences shared by visitors and patrons who have undergone traditional therapies at our Pollachi retreat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-7 shadow-md border border-stone-200 flex flex-col justify-between hover:shadow-xl transition-shadow"
            >
              <div>
                <MessageSquareQuote className="w-10 h-10 text-[#c5a059]/40 mb-4" />
                <p className="text-stone-700 text-sm sm:text-base italic leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif-luxury text-sm font-bold text-[#10261d]">
                    {t.name}
                  </h4>
                  <p className="text-xs text-stone-500">{t.location}</p>
                  <p className="text-[11px] text-[#b85d38] font-medium mt-0.5">
                    Treatment: {t.treatment}
                  </p>
                </div>
                {t.verified && (
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-[#1a8e45] bg-[#1a8e45]/10 px-2 py-0.5 rounded-full">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Verification & Review Invitation Box */}
        <div className="mt-12 p-5 bg-white/80 rounded-2xl border border-stone-200/80 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-xs text-stone-600">
            <p className="font-semibold text-stone-800">
              Have you experienced treatments at Prathama Kalari?
            </p>
            <p className="mt-0.5">
              We welcome honest feedback from our guests to maintain the highest standards of authentic traditional care.
            </p>
          </div>
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
              "Hello Prathama Kalari, I would like to submit my feedback regarding my treatment experience."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#17382b] hover:bg-[#10261d] text-[#d6b573] px-5 py-2.5 rounded-full text-xs font-semibold transition-all shadow-xs"
          >
            Submit Guest Feedback
          </a>
        </div>
      </div>
    </section>
  );
}
