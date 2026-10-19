"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, Camera, ShieldCheck, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_PHOTOS } from "@/data/retreat-data";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["All", "Treatments", "Sanctuary", "Herbal Traditions", "Pollachi Heritage"];

  const filteredPhotos =
    selectedCategory === "All"
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <main className="min-h-screen bg-[#faf7f2]">
      {/* Header Banner */}
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
            <Camera className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Visual Journey</span>
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl mx-auto">
            Glimpses of Prathama Kalari
          </h1>
          <p className="mt-5 text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Authentic spaces, traditional therapy tables, and the natural green beauty of Pollachi, Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Transparency Note */}
          <div className="mb-10 p-4 bg-[#17382b]/5 rounded-2xl border border-[#17382b]/15 flex items-start gap-3 max-w-3xl mx-auto text-xs text-stone-700">
            <ShieldCheck className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#10261d]">
                Authentic Visual Documentation:
              </p>
              <p className="mt-0.5">
                The photographs featured in this gallery reflect the genuine tools, hand-carved treatment dronis, medicated herbal preparations, and Pollachi natural surroundings of our retreat.
              </p>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-[#17382b] text-[#d6b573] shadow-md font-semibold"
                    : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Responsive Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => openLightbox(index)}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-stone-200 cursor-pointer hover:-translate-y-1"
              >
                <Image
                  src={photo.image}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-xs p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4 text-[#d6b573]" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#c5a059] block mb-1">
                    {photo.category}
                  </span>
                  <h3 className="font-serif-luxury text-base font-bold mb-1">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-stone-300 line-clamp-2">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none z-50"
            aria-label="Close image viewer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            type="button"
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none z-50"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next */}
          <button
            type="button"
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none z-50"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Photo Content */}
          <div className="max-w-4xl max-h-[90vh] flex flex-col items-center">
            <div className="relative w-[90vw] max-w-4xl h-[65vh] rounded-2xl overflow-hidden border border-white/20">
              <Image
                src={filteredPhotos[lightboxIndex].image}
                alt={filteredPhotos[lightboxIndex].alt}
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center text-white max-w-2xl px-4">
              <span className="text-xs font-semibold text-[#c5a059] uppercase tracking-wider block mb-1">
                {filteredPhotos[lightboxIndex].category} ({lightboxIndex + 1} of {filteredPhotos.length})
              </span>
              <h3 className="font-serif-luxury text-xl font-bold mb-1">
                {filteredPhotos[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300">
                {filteredPhotos[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
