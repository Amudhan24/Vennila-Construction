import React from 'react';
import { PackagesComparison } from '@/components/PackagesComparison';

export const metadata = {
  title: 'Construction Packages in Chennai | Vennila Construction',
  description:
    'Explore transparent home construction packages in Chennai starting from ₹1,999/sq.ft. Compare Value for Money, Builder’s Choice, and Vennila Elite packages with detailed material specifications.',
  keywords:
    'construction packages Chennai, house construction cost Chennai, home building packages, Vennila Construction pricing, per sq ft construction cost',
};

export default function PackagesPage() {
  return (
    <main className="pt-28 pb-24 bg-cream-100 min-h-screen">
      {/* Page Header Hero */}
      <section className="bg-cream-50 py-16 sm:py-20 border-b border-cream-400 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-500 block">
            TRANSPARENT SPECIFICATIONS & FIXED PRICING
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-charcoal-900 leading-tight">
            Home Construction Packages
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-charcoal-800/80 max-w-2xl mx-auto leading-relaxed">
            Engineered residential construction packages tailored to your lifestyle and budget. From architectural planning and certified RCC substructures to premium woodwork and turnkey handovers.
          </p>
        </div>
      </section>

      {/* Main Comparison & Calculator Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <PackagesComparison />
      </div>
    </main>
  );
}
