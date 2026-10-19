import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/data/retreat-data";

export const metadata: Metadata = {
  title: "Terms of Use | Prathama Kalari Wellness Retreat",
  description: "Terms and conditions of service for Prathama Kalari Wellness Retreat in Pollachi.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#faf7f2] py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-md border border-stone-200/90 space-y-8">
          <div className="border-b border-stone-200 pb-6">
            <span className="text-xs font-bold text-[#b85d38] uppercase tracking-widest">
              Legal Documentation
            </span>
            <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#10261d] mt-1">
              Terms of Use & Traditional Service Guidelines
            </h1>
            <p className="text-xs text-stone-500 mt-2">
              Last Updated: October 2026 • Draft Subject to Retreat Owner Confirmation
            </p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <section className="space-y-3">
              <h2 className="font-serif-luxury text-lg font-bold text-[#10261d]">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing this website or scheduling services at <strong className="text-[#10261d]">{BUSINESS_INFO.name}</strong>, you agree to comply with the terms, traditional guidelines, and safety conditions outlined on this page.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-luxury text-lg font-bold text-[#10261d]">
                2. Traditional Practice Scope & Medical Disclaimer
              </h2>
              <p>
                All therapies offered—including Kalari Chavitti Uzhichil, Marma Chikitsa, Shirodhara, and Kizhi fomentation—are traditional complementary holistic health practices rooted in historical South Indian disciplines.
              </p>
              <div className="p-4 bg-stone-50 border-l-4 border-[#17382b] rounded-r-xl space-y-1">
                <p className="font-bold text-[#10261d]">Important Health Notice:</p>
                <p>
                  These services do not constitute emergency allopathic medicine or surgical interventions. If you have acute unmanaged medical crises, fractures, severe cardiovascular diseases, or cancer, you must maintain ongoing care with your primary medical doctor.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-luxury text-lg font-bold text-[#10261d]">
                3. Disclosure of Health History
              </h2>
              <p>
                Clients must fully disclose pre-existing medical conditions, surgical histories, active pregnancies, implants, or skin allergies prior to commencing any oil massage or heat therapy. Prathama Kalari is not liable for complications arising from withheld health history.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-luxury text-lg font-bold text-[#10261d]">
                4. Center Conduct & Sanctuary Etiquette
              </h2>
              <p>
                To maintain a tranquil healing atmosphere for all guests, we request visitors to keep mobile phones on silent and respect the serene atmosphere of our Pollachi sanctuary.
              </p>
            </section>
          </div>

          <div className="pt-6 border-t border-stone-200 flex justify-between items-center text-xs">
            <Link href="/" className="text-[#17382b] font-bold hover:underline">
              ← Return to Home
            </Link>
            <Link href="/cancellation-policy" className="text-stone-500 hover:text-stone-800">
              Cancellation Policy →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
