import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, MessageCircle, Sparkles } from "lucide-react";
import { VERIFIED_SERVICES, BUSINESS_INFO } from "@/data/retreat-data";

export default function FeaturedServices() {
  const featured = VERIFIED_SERVICES.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-[#f4ede2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17382b]/10 text-[#17382b] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Time-Honored Healing</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10261d]">
            Verified Traditional Therapies
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            Every session at Prathama Kalari is administered in strict accordance with authentic South Indian lineage traditions, utilizing herbal medicated oils and specialized manual techniques.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((service) => {
            const serviceWhatsAppUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
              `Hello! I would like to enquire about ${service.title} at Prathama Kalari Retreat in Pollachi.`
            )}`;

            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-stone-200/80 flex flex-col hover:-translate-y-1"
              >
                {/* Image & Category Tag */}
                <div className="relative h-60 w-full overflow-hidden bg-stone-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-[#10261d]/90 backdrop-blur-xs text-[#d6b573] text-[11px] font-semibold px-3 py-1 rounded-full border border-[#c5a059]/40">
                    {service.category}
                  </div>

                  {/* Duration Tag */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="mb-2">
                      <h3 className="font-serif-luxury text-xl font-bold text-[#10261d] group-hover:text-[#1e4a39] transition-colors">
                        {service.title}
                      </h3>
                      {service.tamilName && (
                        <p className="text-xs text-[#b85d38] font-medium mt-0.5">
                          {service.tamilName}
                        </p>
                      )}
                    </div>

                    <p className="text-stone-600 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-stone-100 mb-6">
                      <p className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                        Primary Benefit:
                      </p>
                      <p className="text-xs text-stone-700 italic">
                        {service.purpose}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#17382b] hover:text-[#c5a059] transition-colors"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={serviceWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#1a8e45] px-3 py-1.5 rounded-full font-medium transition-colors"
                      title="Enquire on WhatsApp"
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

        {/* View All CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#17382b] hover:bg-[#10261d] text-[#d6b573] px-8 py-3.5 rounded-full font-semibold text-sm transition-all shadow-md hover:shadow-xl"
          >
            <span>View All Verified Treatments & Protocols</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
