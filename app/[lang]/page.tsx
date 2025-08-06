
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection';
import ServicesSection from '@/components/services/page';
import FeaturesSection from '@/components/FeaturesSection';
import AboutSection from '@/components/AboutSection';
import InstagramSection from '@/components/InstagramSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WorldMapSection from '@/components/WorldMapSection';
import NewsSection from '@/components/NewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import GallerySection  from '@/components/gallery-section';
import WhatsAppWidget from '@/components/WhatsAppWidget';
export default function Home({ params }: { params: { lang: string } }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main>
        <HeroSection />
        <WhatsAppWidget />
        <StorySection />
        <ServicesSection  lang={params.lang}  />
        <FeaturesSection />
        <GallerySection lang={params.lang}  />
        <AboutSection lang={params.lang}  />
        <InstagramSection  lang={params.lang}/>
        <TestimonialsSection lang={params.lang} />
        <WorldMapSection  lang={params.lang}/>
        <NewsSection lang={params.lang} />
        <ContactSection lang={params.lang} />
      </main>
      <Footer lang={params.lang}  />
    </div>
  );
}