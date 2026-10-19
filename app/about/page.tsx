import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Compass, Heart, Leaf, MapPin, CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/data/retreat-data";

export const metadata: Metadata = {
  title: "About Our Heritage & Philosophy | Prathama Kalari Wellness Retreat",
  description:
    "Learn about Prathama Kalari Wellness Retreat in Pollachi. Rooted in ancient South Indian Kalari Chikitsa, Marma vital points, and classical Ayurvedic traditions.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hello! I am reading about your heritage and would like to learn more about visiting Prathama Kalari Retreat in Pollachi."
  )}`;

  return (
    <main className="min-h-screen bg-[#faf7f2]">
      {/* Page Hero Banner */}
      <section className="relative py-24 sm:py-32 bg-[#10261d] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/images/pollachi-retreat.jpg"
            alt="Pollachi natural surroundings"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#10261d]/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17382b] text-[#d6b573] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#c5a059]/30">
            <span>Our Sacred Roots</span>
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl mx-auto">
            Preserving South India&apos;s Ancient Healing Lineage
          </h1>
          <p className="mt-5 text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Where traditional Kalari Chikitsa, Marma science, and authentic Ayurveda converge in the tranquil sanctuary of Pollachi.
          </p>
        </div>
      </section>

      {/* Origin & Philosophy Section */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-[#b85d38] uppercase tracking-widest">
                Our Foundation
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#10261d] leading-tight">
                Kalari is More Than Martial Art — It is Medicine & Alignment
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                For centuries, masters of Kalaripayattu understood that physical combat inevitably leads to trauma, dislocations, muscular tears, and nervous exhaustion. To protect their practitioners, the ancient masters developed a profound medical branch: <strong className="text-[#10261d]">Kalari Chikitsa</strong>.
              </p>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                At <strong className="text-[#10261d]">{BUSINESS_INFO.name}</strong>, this heritage lives on. Located at 51, Railway Station Road in Pollachi, our sanctuary was built to offer genuine traditional therapies for individuals suffering from modern spinal stiffness, joint degeneration, and systemic stress.
              </p>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                We combine the physical precision of Kalari Chavitti Uzhichil (rope-supported bodywork) with the biological science of classical Ayurveda—using time-tested herbal oils, medicated steam baths, and vital marma point therapy to awaken the body&apos;s innate restorative power.
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs text-stone-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                  Zero Chemical Oils
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                  Non-Commercial Approach
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                  Personalized Attention
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-[440px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/hero-sanctuary.jpg"
                  alt="Traditional treatment sanctuary at Prathama Kalari"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white bg-black/40 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                  <p className="font-serif-luxury text-base font-bold text-[#d6b573]">
                    Authentic Taila Droni & Sacred Space
                  </p>
                  <p className="text-xs text-stone-200 mt-1">
                    Every element—from hand-carved medicinal wood tables to bronze oil vessels—honors traditional healing principles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Pollachi Section */}
      <section className="py-20 bg-[#f4ede2] border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold text-[#17382b] uppercase tracking-widest">
              Sanctuary Setting
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#10261d] mt-2">
              Why Pollachi is the Ideal Wellness Environment
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              Healing requires clean air, a balanced climate, and an unhurried rhythm. Pollachi provides the perfect natural cradle for retreat and renewal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-2xl shadow-sm border border-stone-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#17382b] text-[#c5a059] flex items-center justify-center">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-lg font-bold text-[#10261d]">
                Breeze of the Western Ghats
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Located near the Anaimalai Hills, Pollachi enjoys gentle wind currents and moderate temperatures throughout the year, preventing the dehydration common in urban centers.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl shadow-sm border border-stone-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#17382b] text-[#c5a059] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-lg font-bold text-[#10261d]">
                Verdant Coconut Heartland
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Pollachi is globally celebrated for its lush organic coconut estates, pure water table, and agrarian serenity that calms overactive sensory systems.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl shadow-sm border border-stone-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#17382b] text-[#c5a059] flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-lg font-bold text-[#10261d]">
                Effortless Railway & Road Access
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Our location at 51 Railway Station Road puts you directly opposite the Pollachi Railway Station, making travel effortless for guests arriving from Coimbatore, Kerala, or Bangalore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 lg:py-24 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#b85d38] uppercase tracking-widest">
              Guiding Principles
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#10261d] mt-2">
              Our Commitment to You
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base">
              The values that dictate every session, formulation, and consultation at Prathama Kalari.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#17382b]/10 text-[#17382b] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-[#c5a059]" />
              </div>
              <h3 className="font-serif-luxury text-base font-bold text-[#10261d] mb-2">
                1. Ethical Transparency
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                No false promises or fabricated cure claims. We provide realistic, evidence-informed traditional care tailored to your true state.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#17382b]/10 text-[#17382b] flex items-center justify-center mb-4">
                <Leaf className="w-5 h-5 text-[#c5a059]" />
              </div>
              <h3 className="font-serif-luxury text-base font-bold text-[#10261d] mb-2">
                2. Purity of Botanical Oils
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Every thailam used is classical, made from cold-pressed sesame or coconut oil infused with freshly gathered medicinal herbs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#17382b]/10 text-[#17382b] flex items-center justify-center mb-4">
                <Heart className="w-5 h-5 text-[#c5a059]" />
              </div>
              <h3 className="font-serif-luxury text-base font-bold text-[#10261d] mb-2">
                3. Gentle Respect for Body
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                We work with fascia, tendons, and vital marma points through patient mobilization rather than forceful, painful manipulation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#17382b]/10 text-[#17382b] flex items-center justify-center mb-4">
                <Compass className="w-5 h-5 text-[#c5a059]" />
              </div>
              <h3 className="font-serif-luxury text-base font-bold text-[#10261d] mb-2">
                4. Rooted in Lineage
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Practices strictly honor the proven methodologies of traditional South Indian Kalari Chikitsa and classical Ayurveda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practitioner Bio Placeholder Section */}
      <section className="py-20 bg-[#10261d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative h-96 sm:h-[440px] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#1e4a39]">
                <Image
                  src="/images/marma-chikitsa.jpg"
                  alt="Experienced Kalari Marma healer performing consultation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-[#d6b573] uppercase tracking-widest">
                Our Healers & Practitioners
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white">
                Guided by Experienced Practitioners
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                At Prathama Kalari, treatments are performed solely by practitioners with rigorous hands-on training in traditional Kalari body mechanics, rope balancing, and vital marma point palpation.
              </p>

              <div className="p-4 bg-[#17382b]/80 border border-[#c5a059]/40 rounded-xl text-xs text-stone-300 space-y-2">
                <p className="font-semibold text-[#d6b573]">
                  Practitioner Lineage & Certifications:
                </p>
                <p>
                  To uphold our standard of strict truthfulness, detailed biographies, guru-parampara lineages, and clinical accreditations will be published following direct confirmation from the retreat director.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire About Practitioner Availability</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#17382b] hover:bg-[#204d3d] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-semibold border border-[#c5a059]/30 transition-all"
                >
                  <span>Plan Your Visit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
