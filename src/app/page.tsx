import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { BrandIntro } from '@/components/BrandIntro';
import { ArchitectureDesign } from '@/components/ArchitectureDesign';
import { GallerySection } from '@/components/GallerySection';
import { CostEstimatorForm } from '@/components/CostEstimatorForm';
import { ContactSection } from '@/components/ContactSection';

export const metadata = {
  title: 'Vennila Construction | Premium Home & Villa Construction',
  description: 'Vennila Construction delivers premium residential, villa, commercial and turnkey construction solutions with a focus on quality, craftsmanship and transparent execution.',
  keywords: 'Vennila Construction, home construction, villa construction, residential construction, turnkey construction, commercial construction, house builders',
  openGraph: {
    title: 'Vennila Construction | Premium Home & Villa Construction',
    description: 'Vennila Construction delivers premium residential, villa, commercial and turnkey construction solutions.',
    images: ['/Logo.jpg'],
  }
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream-100">
      {/* 2. Premium Hero */}
      <HeroSection />

      {/* 3. Brand Introduction */}
      <BrandIntro />

      {/* 12. Architecture & Design */}
      <ArchitectureDesign />

      {/* 15. Gallery */}
      <GallerySection />

      {/* 17. Consultation / Lead Form */}
      <CostEstimatorForm />

      {/* 18. Contact */}
      <ContactSection />
    </main>
  );
}
