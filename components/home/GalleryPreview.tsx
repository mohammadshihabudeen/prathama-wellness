import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Eye, Camera } from "lucide-react";
import { GALLERY_PHOTOS } from "@/data/retreat-data";

export default function GalleryPreview() {
  const previewPhotos = GALLERY_PHOTOS.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-[#10261d] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17382b] text-[#d6b573] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#c5a059]/30">
              <Camera className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Authentic Sanctuary Glimpses</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Moments from Prathama Kalari
            </h2>
            <p className="mt-3 text-stone-300 text-sm sm:text-base max-w-xl">
              Authentic therapy spaces, traditional wooden droni tables, and hand-prepared medicinal herbs in Pollachi.
            </p>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-[#c5a059] hover:bg-[#d6b573] text-[#0b1a14] px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-md shrink-0"
          >
            <span>View Complete Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewPhotos.map((photo) => (
            <Link
              key={photo.id}
              href="/gallery"
              className="group relative h-72 rounded-2xl overflow-hidden border border-[#1e4a39] shadow-lg cursor-pointer"
            >
              <Image
                src={photo.image}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-sm p-2 rounded-full text-white">
                <Eye className="w-4 h-4 text-[#d6b573]" />
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
