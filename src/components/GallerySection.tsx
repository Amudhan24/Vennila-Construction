'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Play, Pause, ArrowRight, Grid3X3 } from 'lucide-react';
import { GALLERY_PHOTOS } from '@/data/companyData';
import { Lightbox } from './Lightbox';

interface GallerySectionProps {
  variant?: 'scroll' | 'grid';
}

export const GallerySection: React.FC<GallerySectionProps> = ({ variant = 'scroll' }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const categories = ['All', 'Interiors', 'Exteriors'];

  // Filtered source photos
  const basePhotos = useMemo(() => {
    return activeCategory === 'All'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Seamless looping set for right-to-left scroll mode
  const marqueeItems = useMemo(() => {
    if (variant === 'grid') return [];
    const minPerSet = 16;
    const repeatFactor = Math.max(1, Math.ceil(minPerSet / Math.max(1, basePhotos.length)));
    const singleSet = Array.from({ length: repeatFactor }, () => basePhotos).flat();
    return [...singleSet, ...singleSet];
  }, [basePhotos, variant]);

  // Dynamic animation duration for scroll mode
  const animationDuration = useMemo(() => {
    if (variant === 'grid') return '0s';
    const halfCount = marqueeItems.length / 2;
    return `${Math.max(35, Math.round(halfCount * 2.8))}s`;
  }, [marqueeItems, variant]);

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + basePhotos.length) % basePhotos.length);
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % basePhotos.length);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-24 bg-cream-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-cream-400 pb-8"
        >
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B88728] block">
              ON-SITE CRAFTSMANSHIP GALLERY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight">
              ARCHITECTURAL & CIVIL GALLERY
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-charcoal-800/80 max-w-md">
            Visual record of raw site progress, structural frameworks, wood joinery, pooja mandapams, and completed luxury interiors.
          </p>
        </motion.div>

        {/* Filter Category Tabs & Mode Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              const count = cat === 'All'
                ? GALLERY_PHOTOS.length
                : GALLERY_PHOTOS.filter((p) => p.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs uppercase tracking-wider font-semibold px-5 py-2.5 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 flex items-center space-x-1.5 ${
                    isActive
                      ? 'bg-charcoal-900 text-white shadow-luxury border border-gold-400/50'
                      : 'bg-white text-charcoal-800 border border-cream-400 hover:border-gold-400 hover:text-gold-500 shadow-sm'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white/20 text-cream-100' : 'bg-cream-200 text-charcoal-600'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Status Indicator (Only in Scroll Mode) */}
          {variant === 'scroll' && (
            <div className="flex items-center space-x-3 self-end sm:self-auto">
              <div className="flex items-center space-x-2 bg-white border border-cream-400 rounded-full px-4 py-2 shadow-sm text-xs text-charcoal-700 font-medium">
                <span className={`w-2 h-2 rounded-full ${isPaused ? 'bg-cream-400' : 'bg-gold-500 animate-pulse'}`} />
                <span>{isPaused ? 'Paused' : 'Scrolling Right to Left'}</span>
              </div>

              <button
                onClick={() => setIsPaused(!isPaused)}
                title={isPaused ? 'Resume Auto-Scroll' : 'Pause Auto-Scroll'}
                className="p-2.5 rounded-full bg-white border border-cream-400 text-charcoal-800 hover:text-gold-600 hover:border-gold-400 transition-colors shadow-sm"
              >
                {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4 text-gold-600" />}
              </button>
            </div>
          )}

          {/* Right Photo Counter (In Grid Mode) */}
          {variant === 'grid' && (
            <div className="flex items-center space-x-2 text-xs font-semibold text-charcoal-600 bg-white border border-cream-400 rounded-full px-4 py-2 shadow-sm self-end sm:self-auto">
              <Grid3X3 className="w-3.5 h-3.5 text-[#B88728]" />
              <span>Showing {basePhotos.length} Projects</span>
            </div>
          )}
        </div>
      </div>

      {/* MODE 1: GRID MODE (Used on /gallery page) */}
      {variant === 'grid' ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {basePhotos.map((photo, idx) => (
                <motion.div
                  layout
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-white border border-cream-400 shadow-sm luxury-card-glow cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:border-gold-400/50"
                >
                  <Image
                    src={photo.url}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Gold Top Accent Line on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                  {/* Dark Glass Overlay with Luxury Details on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-charcoal-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white backdrop-blur-[2px]">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-widest font-semibold text-gold-400 bg-charcoal-900/90 px-3 py-1 rounded-md border border-gold-400/40 shadow-sm">
                        {photo.category}
                      </span>
                      <span className="text-[11px] font-mono text-cream-200 bg-white/10 px-2.5 py-0.5 rounded border border-white/10">
                        #{photo.id}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/15">
                      <div>
                        <span className="font-serif text-sm font-semibold block text-white">
                          Photo #{photo.id}
                        </span>
                        <span className="text-[11px] text-cream-200">
                          On-site Craftsmanship
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gold-400 text-white flex items-center justify-center flex-shrink-0 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      ) : (
        /* MODE 2: SCROLL MODE (Used on Homepage) */
        <div className="relative w-full overflow-hidden py-4">
          {/* Left & Right Soft Blur Vignette Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-cream-100 via-cream-100/70 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-cream-100 via-cream-100/70 to-transparent z-10 pointer-events-none" />

          {/* Animated Marquee Flex Container */}
          <div
            className="animate-scroll-rtl flex gap-6 px-4"
            style={{
              animationDuration,
              animationPlayState: isPaused ? 'paused' : undefined,
            }}
          >
            {marqueeItems.map((photo, index) => {
              const originalIndex = basePhotos.findIndex((p) => p.id === photo.id);
              return (
                <div
                  key={`${photo.id}-${index}`}
                  onClick={() => setLightboxIndex(originalIndex >= 0 ? originalIndex : 0)}
                  className="group relative w-[280px] sm:w-[330px] md:w-[370px] h-[360px] sm:h-[420px] rounded-2xl overflow-hidden bg-white border border-cream-400 shadow-luxury flex-shrink-0 cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:border-gold-400/50"
                >
                  <Image
                    src={photo.url}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 768px) 280px, 370px"
                    className="object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Top Gold Accent Bar on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                  {/* Dark Glass Info Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-charcoal-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white backdrop-blur-[2px]">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-widest font-semibold text-gold-400 bg-charcoal-900/90 px-3 py-1 rounded-md border border-gold-400/40 shadow-sm">
                        {photo.category}
                      </span>
                      <span className="text-[11px] font-mono text-cream-200 bg-white/10 px-2.5 py-0.5 rounded border border-white/10">
                        #{photo.id}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/15">
                      <div>
                        <span className="font-serif text-sm font-semibold block text-white">
                          Photo #{photo.id}
                        </span>
                        <span className="text-[11px] text-cream-200">
                          On-site Craftsmanship
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gold-400 text-white flex items-center justify-center flex-shrink-0 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Callout to Full Grid Gallery Page */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center space-x-2.5 bg-white hover:bg-charcoal-900 text-charcoal-900 hover:text-white border border-cream-400 hover:border-charcoal-900 font-bold uppercase tracking-wider text-xs px-8 py-4 rounded-xl shadow-sm hover:shadow-luxury transition-all duration-300 transform hover:-translate-y-0.5 group"
            >
              <span>Explore All 42 Projects in Grid View</span>
              <ArrowRight className="w-4 h-4 text-[#B88728] group-hover:text-gold-400 group-hover:translate-x-1 transition-all duration-300" />
            </Link>
          </div>
        </div>
      )}

      {/* Lightbox Fullscreen Viewer */}
      <Lightbox
        photos={basePhotos}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
