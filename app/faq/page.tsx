"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, HelpCircle, Search, MessageCircle, Phone } from "lucide-react";
import { FAQS, BUSINESS_INFO } from "@/data/retreat-data";

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIndices, setOpenIndices] = useState<Record<number, boolean>>({ 0: true });

  const categories = ["All", "Treatments", "Appointments & Bookings", "Facilities & Guidelines", "Location & Travel"];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCat = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesQuery =
      searchQuery.trim() === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const toggle = (idx: number) => {
    setOpenIndices((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <main className="min-h-screen bg-[#faf7f2]">
      {/* Hero Banner */}
      <section className="relative py-24 sm:py-32 bg-[#10261d] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/images/hero-sanctuary.jpg"
            alt="Sanctuary atmosphere"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#10261d]/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17382b] text-[#d6b573] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#c5a059]/30">
            <HelpCircle className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Clear & Honest Guidance</span>
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl mx-auto">
            Frequently Asked Questions
          </h1>
          <p className="mt-5 text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our traditional Kalari therapies, visit guidelines, and what to expect during your retreat.
          </p>

          {/* Search Input */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by topic, e.g. Chavitti, hours, pain, oils..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white/10 text-white placeholder:text-stone-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#c5a059] backdrop-blur-md text-sm"
            />
          </div>
        </div>
      </section>

      {/* Main FAQ Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-[#17382b] text-[#d6b573] font-semibold shadow-md"
                    : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isOpen = !!openIndices[index];
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs"
                  >
                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#17382b]"
                      aria-expanded={isOpen}
                    >
                      <span className="font-serif-luxury text-base sm:text-lg font-bold text-[#10261d] pr-2">
                        {faq.question}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 bg-[#17382b] text-[#d6b573]" : "text-stone-600"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-stone-700 leading-relaxed border-t border-stone-100 pt-3 animate-fadeIn">
                        <p>{faq.answer}</p>
                        <span className="inline-block mt-3 text-[10px] uppercase font-bold tracking-wider text-[#b85d38] bg-stone-100 px-2 py-0.5 rounded">
                          {faq.category}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl border border-stone-200 p-8">
                <p className="text-stone-600 text-sm">
                  No matching questions found for &ldquo;{searchQuery}&rdquo;.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="mt-3 text-xs text-[#17382b] font-bold underline"
                >
                  Clear search filters
                </button>
              </div>
            )}
          </div>

          {/* Direct Support Card */}
          <div className="mt-14 p-8 rounded-2xl bg-[#10261d] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-[#1e4a39]">
            <div>
              <h3 className="font-serif-luxury text-xl font-bold">
                Still have specific health questions?
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-md">
                Our practitioners in Pollachi are happy to discuss your specific concerns, prior reports, and travel plans.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Hello, I have a specific question about treatments at Prathama Kalari Retreat."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-full text-xs font-semibold transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center gap-2 bg-[#17382b] hover:bg-[#1e4a39] text-stone-200 px-5 py-2.5 rounded-full text-xs font-semibold border border-[#c5a059]/40 transition-all"
              >
                <Phone className="w-4 h-4 text-[#c5a059]" />
                <span>Call Center</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
