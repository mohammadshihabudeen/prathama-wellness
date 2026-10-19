import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/data/retreat-data";

export const metadata: Metadata = {
  title: "Privacy Policy | Prathama Kalari Wellness Retreat",
  description: "Privacy policy and client data handling practices for Prathama Kalari Wellness Retreat, Pollachi.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#faf7f2] py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-md border border-stone-200/90 space-y-8">
          <div className="border-b border-stone-200 pb-6">
            <span className="text-xs font-bold text-[#b85d38] uppercase tracking-widest">
              Legal Documentation
            </span>
            <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#10261d] mt-1">
              Privacy Policy
            </h1>
            <p className="text-xs text-stone-500 mt-2">
              Last Updated: October 2026 • Draft Subject to Retreat Owner Confirmation
            </p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs">
              <strong>Owner Notice:</strong> This privacy policy is drafted in accordance with standard digital communication practices for traditional wellness centers in India. Specific corporate legal entity names and data protection officer details will be updated upon final business confirmation.
            </div>

            <section className="space-y-3">
              <h2 className="font-serif-luxury text-lg font-bold text-[#10261d]">
                1. Information We Collect
              </h2>
              <p>
                When you enquire about treatments, request a consultation, or communicate with <strong className="text-[#10261d]">{BUSINESS_INFO.name}</strong>, we collect information necessary to coordinate your wellness services. This includes:
              </p>
              <ul className="list-disc list-inside space-y-1 text-stone-600 pl-2">
                <li>Your full name and contact telephone / WhatsApp number</li>
                <li>Your email address (if provided)</li>
                <li>Preferred consultation dates and services of interest</li>
                <li>Health notes, musculoskeletal symptoms, or treatment preferences you choose to share</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-luxury text-lg font-bold text-[#10261d]">
                2. How We Use Your Information
              </h2>
              <p>
                We use collected information solely for genuine operational purposes:
              </p>
              <ul className="list-disc list-inside space-y-1 text-stone-600 pl-2">
                <li>To respond to your inquiries and confirm consultation appointments</li>
                <li>To enable our practitioners to review relevant physical complaints prior to your session</li>
                <li>To provide directions and scheduling updates via WhatsApp or telephone</li>
              </ul>
              <p>
                We do not sell, rent, or trade your personal or health information to third-party advertisers.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-luxury text-lg font-bold text-[#10261d]">
                3. Health Information Confidentiality
              </h2>
              <p>
                Any physical complaints, medical diagnoses, diagnostic scans, or constitutional assessments shared with our practitioners during consultation are treated with strict therapeutic discretion and kept confidential.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-luxury text-lg font-bold text-[#10261d]">
                4. Third-Party Links & Messaging
              </h2>
              <p>
                Our website provides links to external services such as WhatsApp (Meta Platforms) and Google Maps (Alphabet Inc.). Communications via these external platforms are subject to their respective privacy terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-luxury text-lg font-bold text-[#10261d]">
                5. Contact for Privacy Matters
              </h2>
              <p>
                For questions regarding your personal details or to request data removal, please contact:
              </p>
              <div className="p-4 bg-stone-50 rounded-xl space-y-1 text-xs">
                <p><strong>{BUSINESS_INFO.name}</strong></p>
                <p>{BUSINESS_INFO.address.full}</p>
                <p>Phone: {BUSINESS_INFO.displayPhone}</p>
              </div>
            </section>
          </div>

          <div className="pt-6 border-t border-stone-200 flex justify-between items-center text-xs">
            <Link href="/" className="text-[#17382b] font-bold hover:underline">
              ← Return to Home
            </Link>
            <Link href="/terms" className="text-stone-500 hover:text-stone-800">
              Terms of Use →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
