import type { Metadata, Viewport } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloating from "@/components/layout/WhatsAppFloating";
import { BUSINESS_INFO } from "@/data/retreat-data";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#10261d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Prathama Kalari Wellness Retreat | Pollachi, Tamil Nadu",
    template: "%s | Prathama Kalari Wellness Retreat",
  },
  description:
    "Authentic Kalari Chikitsa, Chavitti Uzhichil, Marma therapy, and traditional Ayurvedic wellness in Pollachi, Tamil Nadu. Relieve chronic pain, decompress the spine, and restore vitality.",
  keywords: [
    "Prathama Kalari",
    "Prathama Kalari Wellness Retreat",
    "Kalari wellness Pollachi",
    "Chavitti Uzhichil Pollachi",
    "Marma chikitsa Tamil Nadu",
    "Ayurveda Pollachi",
    "traditional wellness retreat Pollachi",
    "sports injury rehabilitation Kalari",
    "Shirodhara Pollachi",
    "Kizhi therapy",
  ],
  authors: [{ name: "Prathama Kalari Wellness Retreat" }],
  creator: "Prathama Kalari",
  publisher: "Prathama Kalari Wellness Retreat",
  metadataBase: new URL("https://prathamawellness.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Prathama Kalari Wellness Retreat | Pollachi",
    description:
      "Traditional South Indian Kalari Chikitsa, Marma Vital Point Therapy, and Ayurvedic Healing Sanctuary in Pollachi, Tamil Nadu.",
    url: "https://prathamawellness.com",
    siteName: "Prathama Kalari Wellness Retreat",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-sanctuary.jpg",
        width: 1200,
        height: 630,
        alt: "Prathama Kalari Wellness Retreat Sanctuary in Pollachi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prathama Kalari Wellness Retreat | Pollachi",
    description:
      "Authentic Kalari Chikitsa, Chavitti Uzhichil, and traditional Ayurvedic rejuvenation in Pollachi.",
    images: ["/images/hero-sanctuary.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: BUSINESS_INFO.name,
    alternateName: "Prathama Kalari Marma Wellness",
    description:
      "A traditional wellness retreat focused on holistic well-being, rejuvenation, and traditional South Indian practices associated with Kalari Chikitsa, Marma therapy, and Ayurveda.",
    telephone: BUSINESS_INFO.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.line1,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "10.6596",
      longitude: "77.0041",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Monday",
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
    image: "https://prathamawellness.com/images/hero-sanctuary.jpg",
    sameAs: [BUSINESS_INFO.instagram],
  };

  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#faf7f2] text-[#1c2220] selection:bg-[#17382b] selection:text-[#d6b573]">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
