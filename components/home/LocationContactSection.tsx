import { MapPin, Phone, Clock, MessageCircle, Navigation, Train, Bus, Plane } from "lucide-react";
import { BUSINESS_INFO } from "@/data/retreat-data";
import EnquiryForm from "@/components/forms/EnquiryForm";

export default function LocationContactSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#10261d] text-white relative" id="enquire">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Location, Hours & Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17382b] text-[#d6b573] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#c5a059]/30">
                <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Pollachi Sanctuary</span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Visit Us in Pollachi
              </h2>
              <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
                We are conveniently located directly opposite the Pollachi Railway Station, accessible with ease from across Tamil Nadu and Kerala.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              {/* Address Card */}
              <div className="p-5 rounded-2xl bg-[#0b1a14]/80 border border-[#1e4a39] flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#17382b] flex items-center justify-center text-[#c5a059] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                    Physical Address
                  </h4>
                  <p className="text-sm font-semibold text-white mt-1">
                    {BUSINESS_INFO.address.line1}
                  </p>
                  <p className="text-xs text-stone-300">
                    {BUSINESS_INFO.address.landmark}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} - {BUSINESS_INFO.address.pincode}
                  </p>
                  <a
                    href={BUSINESS_INFO.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#c5a059] hover:underline mt-2.5 font-medium"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp Card */}
              <div className="p-5 rounded-2xl bg-[#0b1a14]/80 border border-[#1e4a39] flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#17382b] flex items-center justify-center text-[#c5a059] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                    Direct Contact & WhatsApp
                  </h4>
                  <p className="text-sm font-semibold text-white mt-1">
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-[#d6b573]">
                      {BUSINESS_INFO.displayPhone}
                    </a>
                  </p>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Fastest response for bookings and preliminary questions
                  </p>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                      "Hello Prathama Kalari Retreat! I would like to schedule a consultation."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#25D366] hover:underline mt-2 font-medium"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Start WhatsApp Chat Now</span>
                  </a>
                </div>
              </div>

              {/* Hours Card */}
              <div className="p-5 rounded-2xl bg-[#0b1a14]/80 border border-[#1e4a39] flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#17382b] flex items-center justify-center text-[#c5a059] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                    Opening Hours
                  </h4>
                  <div className="text-xs text-stone-300 mt-1 space-y-1">
                    <p className="text-white font-medium">
                      Monday: 7:00 AM – 6:00 PM <span className="text-[#c5a059] text-[10px]">(Verified)</span>
                    </p>
                    <p>Tuesday – Saturday: 7:00 AM – 6:00 PM (Standard)</p>
                    <p>Sunday: By Prior Appointment Only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Travel Transit Badges */}
            <div className="p-5 rounded-2xl bg-[#17382b]/40 border border-[#1e4a39] space-y-2">
              <h4 className="text-xs font-bold text-[#d6b573] uppercase tracking-wider">
                Transit & Arrival Access
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <Train className="w-4 h-4 text-[#c5a059]" />
                  <span>Opposite Railway Station</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bus className="w-4 h-4 text-[#c5a059]" />
                  <span>1.5 km to Bus Stand</span>
                </div>
                <div className="flex items-center gap-2">
                  <Plane className="w-4 h-4 text-[#c5a059]" />
                  <span>45 km to CJB Airport</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-7">
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c5a059]">
                Consultation Request
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mt-1">
                Begin Your Wellness Journey
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-1">
                Fill out the details below. Our team reviews your requirements and contacts you to confirm your session.
              </p>
            </div>

            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
