'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Sparkles, TrendingUp } from 'lucide-react';

export const ArchitectureDesign: React.FC = () => {
  const principles = [
    {
      title: 'Function',
      tagline: 'Spaces designed around everyday life.',
      desc: 'Intuitive circulation paths, optimal natural daylighting, acoustic privacy, and ergonomic room layouts engineered for modern living.',
      icon: Compass,
    },
    {
      title: 'Form',
      tagline: 'Architecture with a distinctive visual identity.',
      desc: 'Elegant geometric facades, bespoke wood paneling, fluted glass elements, and harmonious material selections creating lasting curb appeal.',
      icon: Sparkles,
    },
    {
      title: 'Future',
      tagline: 'Design planned for long-term comfort and value.',
      desc: 'Sustainable construction choices, thermal insulation, expandable utility conduits, and high resale structural resilience.',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden border-t border-cream-400/60">
      {/* Full-bleed Panoramic Villa Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/architecture-bg.jpg"
          alt="Architectural Planning & Spatial Design by Vennila Construction"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-[center_right]"
          quality={95}
        />
        {/* Soft Golden Sunset Gradient Wash for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream-50/95 via-cream-50/70 to-transparent lg:w-[58%] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-cream-50/40 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Content: Left-Aligned Architecture & Philosophy */}
        <div className="max-w-2xl lg:max-w-xl mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B88728] block">
              ARCHITECTURE & PHILOSOPHY
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-950 leading-[1.15] tracking-tight">
              DESIGN THAT BELONGS<br className="hidden sm:inline" /> TO YOU.
            </h2>

            <div className="w-16 h-1 bg-[#B88728] rounded-full" />

            <p className="text-sm sm:text-base text-charcoal-800 leading-relaxed font-normal pt-1">
              Every project begins with understanding how you want to live, work, and experience your space. Our architectural process bridges spatial art with civil structural execution.
            </p>

            <div className="pt-3">
              <Link
                href="/#consultation"
                className="inline-flex items-center space-x-2.5 bg-[#C59B3F] hover:bg-[#b08731] text-white font-bold uppercase tracking-wider text-xs px-7 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                <span>Discuss Your Design</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Floating Cards Sitting Across the Reflecting Pool */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-white/95 backdrop-blur-md p-7 sm:p-8 rounded-2xl border border-cream-300/80 shadow-xl hover:shadow-2xl transition-all duration-300 space-y-3.5 group relative overflow-hidden"
              >
                {/* Gold Top Accent Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="w-11 h-11 rounded-xl bg-cream-100/90 border border-gold-400/40 flex items-center justify-center group-hover:bg-[#C59B3F] group-hover:border-[#C59B3F] transition-colors duration-300 shadow-sm">
                  <Icon className="w-5 h-5 text-gold-600 group-hover:text-white transition-colors duration-300" />
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] uppercase font-bold tracking-widest text-[#B88728] block">
                    PRINCIPLE 0{idx + 1}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-charcoal-950 group-hover:text-gold-600 transition-colors">
                    {p.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-charcoal-900 italic">
                  "{p.tagline}"
                </p>

                <p className="text-xs sm:text-[13px] text-charcoal-700 leading-relaxed font-normal">
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
