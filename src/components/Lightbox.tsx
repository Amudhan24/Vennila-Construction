'use client';

import React from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryPhoto } from '@/data/companyData';

interface LightboxProps {
  photos: GalleryPhoto[];
  activeIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  photos,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  if (activeIndex === null || !photos[activeIndex]) return null;

  const currentPhoto = photos[activeIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-950/95 backdrop-blur-md p-4">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-charcoal-900 text-white flex items-center justify-center hover:bg-gold-400 transition-colors border border-gold-400/40"
        aria-label="Close image lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-charcoal-900/80 text-white flex items-center justify-center hover:bg-gold-400 transition-colors border border-gold-400/40"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-charcoal-900/80 text-white flex items-center justify-center hover:bg-gold-400 transition-colors border border-gold-400/40"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image View */}
      <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center">
        <div className="relative w-full h-[70vh] rounded-lg overflow-hidden border border-gold-400/30">
          <Image
            src={currentPhoto.url}
            alt={currentPhoto.title}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center text-white space-y-1">
          <span className="text-xs uppercase font-semibold text-gold-400 tracking-widest">
            {currentPhoto.category} &bull; Image {activeIndex + 1} of {photos.length}
          </span>
          <h3 className="font-serif text-lg font-bold text-cream-100">
            {currentPhoto.title}
          </h3>
        </div>
      </div>
    </div>
  );
};
