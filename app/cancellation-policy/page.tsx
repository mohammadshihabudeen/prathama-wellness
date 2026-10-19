import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Calendar, MessageCircle, AlertCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/data/retreat-data";

export const metadata: Metadata = {
  title: "Booking & Cancellation Policy | Prathama Kalari Wellness Retreat",
  description:
    "Appointment scheduling, cancellation, and rescheduling policies for Prathama Kalari Wellness Retreat in Pollachi.",
  alternates: {
    canonical: "/cancellation-policy",
  },
};

export default function CancellationPolicyPage() {
  return (
    <main className="min-h-screen bg-[#faf7f2] py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-md border border-stone-200/90 space-y-8">
          <div className="border-b border-stone-200 pb-6">
            <span className="text-xs font-bold text-[#b85d38] uppercase tracking-widest">
              Retreat Policy
            </span>
            <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#10261d] mt-1">
              Booking, Rescheduling & Cancellation Policy
            </h1>
            <p className="text-xs text-stone-500 mt-2">
              Last Updated: October 2026 • Draft Subject to Owner Confirmation
            </p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Why Advance Notice Matters:</strong> Authentic Kalari and Ayurvedic therapies—especially Shirodhara, Chavitti Uzhichil, and Kizhi—require advance preparation of freshly warmed herbal thailams and dedicated practitioner time.
              </div>
            </div>

            <section className="space-y-3">
              <h2 className="font-serif-luxury text-lg font-bold text-[#10261d] flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#c5a059]" />
                <span>1. Appointment Scheduling</span>
              </h2>
              <p>
                Appointments can be requested via our website enquiry form, by calling <a href={`tel:${BUSINESS_INFO.phone}`} className="font-bold underline text-[#10261d]">{BUSINESS_INFO.displayPhone}</a>, or through our direct WhatsApp channel. Appointments are finalized once our team confirms time-slot availability.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-luxury text-lg font-bold text-[#10261d] flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#c5a059]" />
                <span>2. Arrival & Punctuality</span>
              </h2>
              <p>
                Please arrive 10 to 15 minutes before your scheduled appointment time to complete your preliminary consultation form and transition into a relaxed state. Late arrivals may result in a shortened session to avoid delaying subsequent guests.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-luxury text-lg font-bold text-[#10261d]">
                3. Rescheduling & Cancellations
              </h2>
              <p>
                We understand that unexpected travel delays or personal commitments occur. We kindly ask for:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-stone-600">
                <li>
                  <strong>Single Treatment Sessions:</strong> At least <strong>24 hours advance notice</strong> for rescheduling or cancellation.
                </li>
                <li>
                  <strong>Multi-Day Programs (3 to 14 days):</strong> At least <strong>48 hours advance notice</strong> so that therapy slots and medicinal preparations can be adjusted.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-luxury text-lg font-bold text-[#10261d]">
                4. How to Reschedule
              </h2>
              <p>
                To reschedule or cancel your session, please notify us immediately via WhatsApp or phone:
              </p>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                    "Hello Prathama Kalari, I need to reschedule or cancel my appointment."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-xs font-semibold shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Reschedule on WhatsApp ({BUSINESS_INFO.displayPhone})</span>
                </a>
              </div>
            </section>
          </div>

          <div className="pt-6 border-t border-stone-200 flex justify-between items-center text-xs">
            <Link href="/" className="text-[#17382b] font-bold hover:underline">
              ← Return to Home
            </Link>
            <Link href="/contact" className="text-stone-500 hover:text-stone-800">
              Contact Us →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
