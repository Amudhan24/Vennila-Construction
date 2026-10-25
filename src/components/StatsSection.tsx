'use client';

import React from 'react';
import { COMPANY_STATS } from '@/data/companyData';

export const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-charcoal-900 text-white relative overflow-hidden border-y border-gold-400/20">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C89B3C_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400 block">
            THE MEASURE OF EXCELLENCE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Driven by Benchmark Standards
          </h2>
          <p className="text-xs sm:text-sm text-cream-200/80">
            A testament to structural longevity, client trust, and meticulous execution across every project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto gap-8">
          {COMPANY_STATS.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-charcoal-800/60 border border-gold-400/20 backdrop-blur-md hover:border-gold-400/60 transition-all duration-300 group"
            >
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-400 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white mt-3 mb-1">
                {stat.label}
              </span>
              <span className="text-[11px] text-cream-300/70 font-normal line-clamp-2">
                {stat.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
