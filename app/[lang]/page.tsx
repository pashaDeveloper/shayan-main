import React from "react";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import ServicesSection from "@/components/services/page";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import InstagramSection from "@/components/InstagramSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WorldMapSection from "@/components/WorldMapSection";
import ContactSection from "@/components/ContactSection";
import Main from "@/layouts/Main";
import SocialNav from "@/components/SocialNav";
export default function Home({ params }: { params: { lang: string } }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Main params={params}>
        <main>
          <SocialNav />

          <HeroSection />
          <StorySection />
          <ServicesSection lang={params.lang} />
          <FeaturesSection />
          <AboutSection lang={params.lang} />
          <InstagramSection lang={params.lang} />
          <TestimonialsSection lang={params.lang} />
          <WorldMapSection lang={params.lang} />
          <ContactSection lang={params.lang} />
        </main>
      </Main>
    </div>
  );
}
