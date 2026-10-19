import type { Metadata } from "next";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Navigation,
  Train,
  Bus,
  Plane,
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/retreat-data";
import EnquiryForm from "@/components/forms/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact & Location | Prathama Kalari Wellness Retreat Pollachi",
  description:
    "Find Prathama Kalari Wellness Retreat opposite the Railway Station, Pollachi, Tamil Nadu. Call +91 93448 82346 or submit an enquiry online.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hello Prathama Kalari, I would like to schedule a visit and consultation at your Pollachi retreat."
  )}`;

  return (
    <main className="min-h-screen bg-[#faf7f2]">
      {/* Hero Banner */}
      <section className="relative py-24 sm:py-32 bg-[#10261d] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/images/pollachi-retreat.jpg"
            alt="Pollachi landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#10261d]/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17382b] text-[#d6b573] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#c5a059]/30">
            <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Pollachi, Tamil Nadu</span>
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl mx-auto">
            Contact & Location Directions
          </h1>
          <p className="mt-5 text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Conveniently located right opposite the Pollachi Railway Station. Plan your journey to restorative traditional healing.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 sm:py-24" id="enquire">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left 5 Columns: Contact Info & Transit */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold text-[#b85d38] uppercase tracking-widest">
                  Direct Inquiries
                </span>
                <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#10261d] mt-1">
                  How to Reach Us
                </h2>
                <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed">
                  We look forward to welcoming you to our sanctuary. For quick scheduling or directions assistance, call or WhatsApp our team.
                </p>
              </div>

              {/* Verified Contact Details Cards */}
              <div className="space-y-4">
                {/* Physical Address */}
                <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#17382b] text-[#c5a059] flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                      Center Location
                    </h3>
                    <p className="text-sm font-bold text-[#10261d] mt-1">
                      {BUSINESS_INFO.address.line1}
                    </p>
                    <p className="text-xs text-stone-600 mt-0.5">
                      {BUSINESS_INFO.address.landmark}
                    </p>
                    <p className="text-xs text-stone-600">
                      {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} - {BUSINESS_INFO.address.pincode}, India
                    </p>
                    <a
                      href={BUSINESS_INFO.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#17382b] font-semibold hover:text-[#c5a059] mt-3"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Get Live Driving Directions →</span>
                    </a>
                  </div>
                </div>

                {/* Telephone & WhatsApp */}
                <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#17382b] text-[#c5a059] flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                      Phone & WhatsApp
                    </h3>
                    <p className="text-sm font-bold text-[#10261d] mt-1">
                      <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-[#c5a059]">
                        {BUSINESS_INFO.displayPhone}
                      </a>
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Mon – Sat: 7:00 AM – 6:00 PM
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#1a8e45] font-semibold hover:underline mt-2.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Click to Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Opening Hours Card */}
                <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#17382b] text-[#c5a059] flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                      Operating Schedule
                    </h3>
                    <div className="mt-2 space-y-1.5 text-xs text-stone-700">
                      <div className="flex justify-between border-b border-stone-100 pb-1">
                        <span className="font-semibold text-[#10261d]">Monday:</span>
                        <span className="font-mono text-[#1a8e45]">7:00 AM – 6:00 PM (Verified)</span>
                      </div>
                      <div className="flex justify-between border-b border-stone-100 pb-1">
                        <span>Tuesday – Saturday:</span>
                        <span className="font-mono text-stone-600">7:00 AM – 6:00 PM (Standard)</span>
                      </div>
                      <div className="flex justify-between pt-0.5">
                        <span>Sunday:</span>
                        <span className="text-[#b85d38] font-medium">By Prior Appointment</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="p-4 rounded-xl bg-[#10261d] text-white flex items-center justify-between">
                  <span className="text-xs text-stone-300">Instagram Official:</span>
                  <a
                    href={BUSINESS_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#d6b573] hover:underline"
                  >
                    <span>{BUSINESS_INFO.instagramHandle}</span>
                  </a>
                </div>
              </div>

              {/* Transit Directions Guide */}
              <div className="p-6 rounded-2xl bg-[#17382b]/10 border border-[#17382b]/20 space-y-4">
                <h3 className="font-serif-luxury text-base font-bold text-[#10261d]">
                  Transit & Arrival Guide
                </h3>
                <div className="space-y-3 text-xs text-stone-700">
                  <div className="flex items-start gap-2.5">
                    <Train className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900">By Train:</strong> We are situated right across the road from the Pollachi Junction Railway Station entrance.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Bus className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900">By Bus:</strong> Approximately 1.5 km from the Pollachi Central Bus Stand (5 minutes by auto-rickshaw).
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Plane className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900">By Air:</strong> Coimbatore International Airport (CJB) is about 45 km away (around 75 minutes by taxi).
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Form & Interactive Map */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#b85d38]">
                  Online Consultation Form
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#10261d] mt-1">
                  Send Your Consultation Enquiry
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm mt-1">
                  Submit your details below to schedule your Kalari Marma or Ayurvedic session.
                </p>
              </div>

              <EnquiryForm />

              {/* Interactive Google Map Embed */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-stone-200">
                <div className="p-4 bg-[#10261d] text-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#c5a059]" />
                    <span className="font-serif-luxury text-xs font-bold">
                      Location Map: 51, Railway Station Road, Pollachi
                    </span>
                  </div>
                  <a
                    href={BUSINESS_INFO.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#d6b573] hover:underline"
                  >
                    Open Full Map ↗
                  </a>
                </div>

                <div className="relative h-80 w-full bg-stone-100">
                  <iframe
                    title="Prathama Kalari Wellness Retreat Location Map"
                    src={BUSINESS_INFO.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
