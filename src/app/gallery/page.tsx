import React from 'react';
import { GallerySection } from '@/components/GallerySection';

export const metadata = {
  title: 'Media Gallery | Vennila Construction',
  description: 'Explore on-site construction photos, architectural details, custom wood joinery, pooja mandapams, and completed luxury interiors.',
};

export default function GalleryPage() {
  return (
    <main className="pt-24 pb-20 bg-cream-100 min-h-screen">
      <GallerySection variant="grid" />
    </main>
  );
}
