import { ShieldCheck, Compass, Sparkles, HeartPulse, Leaf, MapPin } from "lucide-react";

export default function WhyChooseUs() {
  const differentiators = [
    {
      icon: Compass,
      title: "Authentic Kalari Heritage",
      description:
        "Rooted in genuine South Indian martial healing wisdom, practicing true Chavitti Uzhichil and traditional body realignment rather than superficial spa routines.",
    },
    {
      icon: Sparkles,
      title: "Marma Point Expertise",
      description:
        "Targeting the 107 vital neurological and musculoskeletal junction points to release deep-rooted physical tension, sciatica, and cervical strain.",
    },
    {
      icon: Leaf,
      title: "Pure Classical Herbal Formulations",
      description:
        "Every medicated oil (thailam) and herbal poultice (kizhi) is prepared according to classical texts using pure botanicals without synthetic fragrances or adulterants.",
    },
    {
      icon: HeartPulse,
      title: "Targeted Sports & Spinal Care",
      description:
        "Specialized therapeutic care for athletic sprains, joint immobility, lumbar stiffness, and chronic postural compression from modern lifestyle stress.",
    },
    {
      icon: ShieldCheck,
      title: "Ethical & Transparent Practices",
      description:
        "We prioritize honesty, safety, and individual care. We never promise magical cures, but instead work diligently with your body's innate regenerative capacity.",
    },
    {
      icon: MapPin,
      title: "Tranquil Pollachi Location",
      description:
        "Conveniently situated opposite the Pollachi Railway Station, enveloped by lush coconut groves and the refreshing breeze from the nearby Western Ghats.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#10261d] text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#17382b] rounded-full filter blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c5a059] rounded-full filter blur-3xl opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17382b] text-[#d6b573] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#c5a059]/30">
            <span>Our Distinction</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Why Choose Prathama Kalari
          </h2>
          <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
            We preserve traditional healing as an art of precision, compassion, and natural recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-[#0b1a14]/70 border border-[#1e4a39] hover:border-[#c5a059]/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#17382b] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] mb-5 group-hover:bg-[#c5a059] group-hover:text-[#0b1a14] transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif-luxury text-lg font-bold text-white mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
