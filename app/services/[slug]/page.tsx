import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ShieldCheck,
  ChevronRight,
  MessageCircle,
  Calendar,
  Sparkles,
} from "lucide-react";
import { VERIFIED_SERVICES, BUSINESS_INFO } from "@/data/retreat-data";
import EnquiryForm from "@/components/forms/EnquiryForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return VERIFIED_SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = VERIFIED_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | Prathama Kalari Wellness Retreat",
    };
  }

  return {
    title: `${service.title} | Prathama Kalari Retreat Pollachi`,
    description: service.shortDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} - Prathama Kalari Wellness Retreat`,
      description: service.shortDescription,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = VERIFIED_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello Prathama Kalari, I am interested in booking a session for ${service.title} in Pollachi.`
  )}`;

  return (
    <main className="min-h-screen bg-[#faf7f2]">
      {/* Breadcrumb Bar */}
      <div className="bg-[#0b1a14] text-xs text-stone-400 py-3 border-b border-[#1e4a39]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[#c5a059] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
          <Link href="/services" className="hover:text-[#c5a059] transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
          <span className="text-[#d6b573] font-medium truncate">{service.title}</span>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative py-16 sm:py-24 bg-[#10261d] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#10261d]/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17382b] text-[#d6b573] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#c5a059]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{service.category}</span>
            </div>

            <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              {service.title}
            </h1>

            {service.tamilName && (
              <p className="text-sm sm:text-base text-[#c5a059] font-medium mt-2">
                {service.tamilName}
              </p>
            )}

            <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed">
              {service.shortDescription}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2 bg-[#17382b] px-3.5 py-1.5 rounded-lg border border-[#1e4a39]">
                <Clock className="w-4 h-4 text-[#c5a059]" />
                <span>Session Duration: {service.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-[#17382b] px-3.5 py-1.5 rounded-lg border border-[#1e4a39]">
                <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                <span>Verified Traditional Discipline</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire via WhatsApp</span>
              </a>
              <a
                href="#book-session"
                className="inline-flex items-center gap-2 bg-[#c5a059] hover:bg-[#d6b573] text-[#0b1a14] px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Appointment</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left 7 Columns: Detailed Description & Protocols */}
            <div className="lg:col-span-7 space-y-10">
              {/* Image Showcase */}
              <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overview & Purpose */}
              <div className="space-y-4">
                <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#10261d]">
                  Overview & Ancient Healing Purpose
                </h2>
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  {service.fullDescription}
                </p>
                <div className="p-4 rounded-xl bg-[#17382b]/5 border-l-4 border-[#17382b] text-xs sm:text-sm text-stone-800">
                  <span className="font-bold text-[#10261d]">Core Objective: </span>
                  {service.purpose}
                </div>
              </div>

              {/* What a Session Involves */}
              <div className="space-y-4">
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#10261d]">
                  What Your Session Involves
                </h3>
                <div className="space-y-3">
                  {service.sessionInvolves.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white border border-stone-200/90 flex items-start gap-3.5 shadow-xs"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#17382b] text-[#d6b573] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Course & Suitable For */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
                  <h4 className="font-serif-luxury text-base font-bold text-[#10261d]">
                    Recommended Course
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {service.recommendedCourse}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
                  <h4 className="font-serif-luxury text-base font-bold text-[#10261d]">
                    Ideal For
                  </h4>
                  <ul className="space-y-2 text-xs text-stone-600">
                    {service.suitableFor.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1a8e45] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contraindications if any */}
              {service.contraindications && service.contraindications.length > 0 && (
                <div className="p-5 rounded-2xl bg-red-50/60 border border-red-200 space-y-2">
                  <div className="flex items-center gap-2 text-red-800 text-xs font-bold uppercase tracking-wider">
                    <AlertCircle className="w-4 h-4" />
                    <span>Precautions & Contraindications</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-red-700 space-y-1">
                    {service.contraindications.map((c, idx) => (
                      <li key={idx}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Preparation Guidelines */}
              <div className="space-y-3">
                <h3 className="font-serif-luxury text-lg font-bold text-[#10261d]">
                  Before You Arrive: Preparation Instructions
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-600">
                  {service.preparationInstructions.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c5a059] mt-2 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service FAQs */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-stone-200">
                  <h3 className="font-serif-luxury text-xl font-bold text-[#10261d] flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#c5a059]" />
                    <span>Frequently Asked Questions</span>
                  </h3>
                  <div className="space-y-3">
                    {service.faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-xl bg-white border border-stone-200/90 space-y-2"
                      >
                        <h4 className="font-serif-luxury text-sm font-bold text-[#10261d]">
                          {faq.question}
                        </h4>
                        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right 5 Columns: Booking Card & Enquiry Form */}
            <div className="lg:col-span-5 space-y-6" id="book-session">
              {/* Pricing & Transparency Notice */}
              <div className="bg-[#10261d] text-white p-6 rounded-2xl border border-[#1e4a39] shadow-lg space-y-4">
                <span className="text-[11px] font-bold text-[#c5a059] uppercase tracking-widest">
                  Consultation & Pricing
                </span>
                <h3 className="font-serif-luxury text-xl font-bold text-white">
                  Schedule Your {service.title}
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {service.pricingNote}
                </p>

                <div className="pt-2 border-t border-[#1e4a39] space-y-2 text-xs text-stone-300">
                  <div className="flex justify-between">
                    <span>Center Location:</span>
                    <strong className="text-white">Pollachi, TN</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Advance Booking:</span>
                    <strong className="text-[#c5a059]">Recommended</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Direct WhatsApp:</span>
                    <strong className="text-white">{BUSINESS_INFO.displayPhone}</strong>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 rounded-xl text-xs font-semibold transition-all shadow-md mt-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant WhatsApp Confirmation</span>
                </a>
              </div>

              {/* Dedicated Enquiry Form */}
              <div className="space-y-3">
                <h4 className="font-serif-luxury text-lg font-bold text-[#10261d]">
                  Request an Appointment Online
                </h4>
                <EnquiryForm preselectedService={service.title} compact={true} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
