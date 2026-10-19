import HeroSection from "@/components/home/HeroSection";
import IntroductionSection from "@/components/home/IntroductionSection";
import FeaturedServices from "@/components/home/FeaturedServices";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PackagesPreview from "@/components/home/PackagesPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import HealersPhilosophy from "@/components/home/HealersPhilosophy";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
import LocationContactSection from "@/components/home/LocationContactSection";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IntroductionSection />
      <FeaturedServices />
      <WhyChooseUs />
      <PackagesPreview />
      <GalleryPreview />
      <HealersPhilosophy />
      <TestimonialsSection />
      <FaqSection />
      <LocationContactSection />
    </main>
  );
}
