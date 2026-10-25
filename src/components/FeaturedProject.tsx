'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Calendar, Layers, Maximize } from 'lucide-react';
import { PROJECTS_DATA } from '@/data/companyData';

export const FeaturedProject: React.FC = () => {
  const featured = PROJECTS_DATA[0];

  return (
    <section className="py-24 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-cream-400 p-6 sm:p-10 lg:p-12 shadow-luxury overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image Column */}
            <div className="lg:col-span-7 relative">
              <div className="relative h-[380px] sm:h-[480px] lg:h-[540px] w-full rounded-xl overflow-hidden group">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent opacity-40" />

                {/* Badge Overlay */}
                <div className="absolute top-6 left-6 bg-charcoal-900/90 text-gold-400 text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded-full border border-gold-400/30 backdrop-blur-md">
                  Featured Masterpiece
                </div>
              </div>
            </div>

            {/* Right Editorial Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400 block">
                  FEATURED PROJECT
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight">
                  {featured.title}
                </h2>
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-charcoal-800/80 font-medium">
                  <MapPin className="w-4 h-4 text-gold-400" />
                  <span>{featured.location}</span>
                </div>
              </div>

              <div className="w-16 h-1 bg-gold-gradient rounded-full" />

              <p className="text-charcoal-800/90 text-sm sm:text-base leading-relaxed font-normal">
                {featured.shortDesc}
              </p>

              {/* Quick Spec Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-2 border-y border-cream-400/60 py-4 text-xs font-medium text-charcoal-900">
                <div className="flex flex-col">
                  <span className="text-[10px] text-charcoal-800/60 uppercase">Built-up Area</span>
                  <span className="font-semibold text-charcoal-900 mt-1 flex items-center gap-1">
                    <Maximize className="w-3.5 h-3.5 text-gold-400" />
                    {featured.builtUpArea}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-charcoal-800/60 uppercase">Completion</span>
                  <span className="font-semibold text-charcoal-900 mt-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-gold-400" />
                    {featured.year}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-charcoal-800/60 uppercase">Category</span>
                  <span className="font-semibold text-charcoal-900 mt-1 flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-gold-400" />
                    {featured.category}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={`/projects/${featured.slug}`}
                  className="inline-flex items-center space-x-3 bg-gold-400 hover:bg-gold-500 text-white font-semibold uppercase tracking-wider text-xs sm:text-sm px-8 py-4 rounded shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
