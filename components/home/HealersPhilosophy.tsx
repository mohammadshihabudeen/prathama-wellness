import Image from "next/image";
import { HeartHandshake, ShieldCheck, Flame, Compass } from "lucide-react";

export default function HealersPhilosophy() {
  return (
    <section className="py-20 lg:py-28 bg-[#faf7f2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17382b]/10 text-[#17382b] text-xs font-semibold uppercase tracking-wider">
              <span>Practitioner Heritage</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10261d] leading-tight">
              The Sacred Relationship Between Healer, Body & Nature
            </h2>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              In traditional South Indian Kalari Chikitsa, therapeutic bodywork is treated with the same discipline, reverence, and focused attention as sacred martial art. Our practitioners approach each guest not as a clinical statistic, but as a living system seeking balance.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              By carefully palpating the 107 marma points, assessing kinetic restrictions in the spine, and understanding daily stressors, our healers calibrate pressure and apply specific medicinal decoctions that allow tight fascia to soften and natural vitality to resurface.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                <div className="flex items-center gap-2.5 text-[#17382b] font-semibold text-sm mb-1.5">
                  <Flame className="w-4 h-4 text-[#c5a059]" />
                  <span>Individualized Dosha Focus</span>
                </div>
                <p className="text-xs text-stone-600">
                  Every treatment protocol is matched to your physical constitution and joint condition.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                <div className="flex items-center gap-2.5 text-[#17382b] font-semibold text-sm mb-1.5">
                  <Compass className="w-4 h-4 text-[#c5a059]" />
                  <span>Root-Cause Alignment</span>
                </div>
                <p className="text-xs text-stone-600">
                  We address the structural chains causing pain rather than merely numbing symptoms.
                </p>
              </div>
            </div>

            {/* Verification Note for Owner */}
            <div className="p-4 bg-amber-50/70 border border-amber-200/60 rounded-xl text-xs text-amber-900 leading-relaxed">
              <span className="font-bold">Practitioner Verification Notice:</span> Detailed biographies and certifications for our senior Kalari Asans and Ayurvedic Vaidyas are subject to final editorial confirmation from retreat management.
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[420px] sm:h-[480px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/traditional-uzhichil.jpg"
                alt="Traditional practitioner performing authentic herbal oil healing therapy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm p-4 rounded-xl text-white">
                <p className="font-serif-luxury text-sm font-bold text-[#d6b573]">
                  Dedicated Hands & Ancient Wisdom
                </p>
                <p className="text-xs text-stone-200 mt-1">
                  Experienced practitioners preserving classical Kerala-Tamil Nadu wellness traditions in Pollachi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
