'use client';

import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection';
import ServicesSection from '@/components/ServicesSection';
import FeaturesSection from '@/components/FeaturesSection';
import AboutSection from '@/components/AboutSection';
import InstagramSection from '@/components/InstagramSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WorldMapSection from '@/components/WorldMapSection';
import NewsSection from '@/components/NewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home({ params }: { params: { lang: string } }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <ServicesSection />
        <FeaturesSection />
        <AboutSection />
        <InstagramSection />
        <TestimonialsSection />
        <WorldMapSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}