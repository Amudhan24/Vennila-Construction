'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

export const BrandIntro: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 min-h-[580px] lg:min-h-[660px] flex items-center overflow-hidden border-y border-cream-400/60">
      {/* Full-bleed Panoramic Background Composition */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/brand-intro-bg.jpg"
          alt="Vennila Construction Architectural Excellence & Purposeful Living"
          fill
          priority
          sizes="100vw"
          className="object-cover object-left lg:object-center"
          quality={95}
        />
        {/* Soft Mobile & Tablet Legibility Wash (hidden on desktop so pristine background shines) */}
        <div className="lg:hidden absolute inset-0 bg-white/85 backdrop-blur-[1px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Space (empty on desktop to showcase the illuminated villa and reflective driveway) */}
          <div className="hidden lg:block lg:col-span-6" />

          {/* Right Column: Editorial Text with Gold Accent Line */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 max-w-xl ml-auto"
          >
            {/* Header with Vertical Gold Line */}
            <div className="flex items-stretch space-x-4 sm:space-x-5">
              {/* Thin Vertical Gold Accent Bar */}
              <div className="w-[3px] bg-[#B88728] rounded-full flex-shrink-0 my-0.5" />

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B88728] block">
                  {COMPANY_INFO.name}
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] leading-[1.18] font-bold text-charcoal-950 tracking-tight">
                  Building With Purpose.<br />
                  <span className="font-serif italic font-normal text-[#B88728]">
                    Designing For Life.
                  </span>
                </h2>
              </div>
            </div>

            {/* Paragraph Text */}
            <div className="space-y-4 text-charcoal-800 text-sm sm:text-[15px] leading-relaxed font-normal pl-0 sm:pl-7">
              <p>
                Vennila Construction delivers thoughtfully planned residential and commercial spaces with a strong focus on quality, craftsmanship, transparency, and lasting value.
              </p>
              <p>
                From the first consultation to final handover, we bring together design, planning, engineering, and execution to create spaces that are built around the way you live and work.
              </p>
            </div>

            {/* Call To Action Button */}
            <div className="pt-2 pl-0 sm:pl-7">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2.5 bg-[#1C1E21] hover:bg-[#2C2F33] text-white font-bold uppercase tracking-wider text-xs px-7 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                <span>Discover Vennila</span>
                <ArrowRight className="w-4 h-4 text-[#C59B3F] group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
