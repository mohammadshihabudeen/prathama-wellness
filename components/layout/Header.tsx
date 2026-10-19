"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Menu, X, Calendar, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "@/data/retreat-data";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Treatments & Services", href: "/services" },
    { label: "Programs & Packages", href: "/programs" },
    { label: "Gallery", href: "/gallery" },
    { label: "FAQs", href: "/faq" },
    { label: "Contact & Location", href: "/contact" },
  ];

  return (
    <>
      {/* Top Notification / Hours Bar */}
      <div className="bg-[#0b1a14] text-[#d6b573] text-xs py-2 px-4 border-b border-[#1e4a39]/40">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
              Opposite Railway Station, Pollachi, Tamil Nadu
            </span>
            <span className="hidden md:inline-block text-[#c5a059]/60">|</span>
            <span className="hidden md:inline-block text-stone-300">
              Hours: Mon 7:00 AM – 6:00 PM (Sun by Appointment)
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium ml-auto">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1.5 text-white hover:text-[#c5a059] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{BUSINESS_INFO.displayPhone}</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                "Hello, I would like to enquire about treatments at Prathama Kalari Wellness Retreat, Pollachi."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/30 px-2.5 py-0.5 rounded-full border border-[#25D366]/40 transition-colors"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#10261d]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#295f4a]/30"
            : "bg-[#10261d] py-4 border-b border-[#295f4a]/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Title */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-[#c5a059]/50 shadow-md group-hover:border-[#c5a059] transition-all">
                <Image
                  src="/images/prathama-emblem.jpg"
                  alt="Prathama Kalari Emblem"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-luxury text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-[#d6b573] transition-colors">
                  PRATHAMA KALARI
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#c5a059] font-medium">
                  Wellness Retreat • Pollachi
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "text-[#c5a059] bg-[#1e4a39]/60 font-semibold"
                        : "text-stone-200 hover:text-[#d6b573] hover:bg-[#1e4a39]/40"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Header CTA & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact#enquire"
                className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-[#c5a059] to-[#aa853c] hover:from-[#d6b573] hover:to-[#c5a059] text-[#0b1a14] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                <span>Enquire Now</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-stone-200 hover:text-white hover:bg-[#1e4a39] focus:outline-none focus:ring-2 focus:ring-[#c5a059]"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0e2119] border-b border-[#295f4a]/50 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "text-[#d6b573] bg-[#1e4a39] font-semibold"
                        : "text-stone-200 hover:text-[#d6b573] hover:bg-[#17382b]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-[#1e4a39] flex flex-col gap-2">
              <Link
                href="/contact#enquire"
                className="w-full flex items-center justify-center gap-2 bg-[#c5a059] text-[#0b1a14] py-2.5 rounded-lg text-sm font-semibold shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation / Enquire</span>
              </Link>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Hello, I am contacting Prathama Kalari Retreat to enquire about treatments."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-2.5 rounded-lg text-sm font-semibold shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 93448 82346)</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 border border-stone-600 text-stone-200 py-2.5 rounded-lg text-sm font-medium hover:bg-[#17382b]"
              >
                <Phone className="w-4 h-4 text-[#c5a059]" />
                <span>Call {BUSINESS_INFO.displayPhone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
