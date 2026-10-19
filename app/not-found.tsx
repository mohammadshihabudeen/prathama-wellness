import Link from "next/link";
import { ArrowLeft, Home, MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/data/retreat-data";

export default function NotFound() {
  return (
    <main className="min-h-[75vh] flex items-center justify-center bg-[#faf7f2] px-4 py-20">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-stone-200">
        <span className="font-serif-luxury text-6xl sm:text-7xl font-bold text-[#c5a059] block">
          404
        </span>

        <h1 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#10261d]">
          Sanctuary Page Not Found
        </h1>

        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
          The page you are looking for may have been moved, renamed, or is currently undergoing preparation.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#17382b] hover:bg-[#10261d] text-[#d6b573] px-6 py-3 rounded-full text-xs font-semibold shadow-md transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded-full text-xs font-semibold shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </main>
  );
}
