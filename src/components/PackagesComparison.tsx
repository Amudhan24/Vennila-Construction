'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Home,
  Star,
  ShieldCheck,
  Check,
  Calculator,
  Phone,
  ArrowRight,
} from 'lucide-react';
import {
  CONSTRUCTION_PACKAGES,
  PackageTier,
} from '@/data/packagesData';
import { COMPANY_INFO } from '@/data/companyData';

export const PackagesComparison: React.FC = () => {
  // Area calculator state
  const [builtUpArea, setBuiltUpArea] = useState<number>(1500);
  const [selectedPackageForCalc, setSelectedPackageForCalc] = useState<string>('builders-choice');
  const [showAllPackages, setShowAllPackages] = useState<boolean>(false);

  // The 3 primary packages matching user screenshot
  const primaryPackageIds = ['value-for-money', 'builders-choice', 'vennila-elite'];
  const displayedPackages = showAllPackages
    ? CONSTRUCTION_PACKAGES
    : CONSTRUCTION_PACKAGES.filter((p) => primaryPackageIds.includes(p.id));

  // Current selected package for calculation
  const currentCalcPkg =
    CONSTRUCTION_PACKAGES.find((p) => p.id === selectedPackageForCalc) ||
    CONSTRUCTION_PACKAGES[1];

  const estimatedCost = builtUpArea * currentCalcPkg.price;
  const originalCost = builtUpArea * currentCalcPkg.originalPrice;
  const savings = originalCost - estimatedCost;

  const scrollToCalculator = (pkgId?: string) => {
    if (pkgId) {
      setSelectedPackageForCalc(pkgId);
    }
    const el = document.getElementById('package-calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-16">
      {/* 1. TOP PRICING CARDS (Matching Reference Screenshot media_1792849422566.png) */}
      <section className="relative">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 pb-4 border-b border-cream-400 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-500 block">
              TRANSPARENT PRICING TIERS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900 mt-1">
              Select Your Construction Specification
            </h2>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowAllPackages(!showAllPackages)}
              className="text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full border border-gold-400/60 text-charcoal-900 bg-white hover:bg-gold-50 transition-colors shadow-sm"
            >
              {showAllPackages ? 'Show Top 3 Core Packages' : 'Include Budget Friendly Tier (₹1,999)'}
            </button>
          </div>
        </div>

        {/* Responsive Grid of Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${
            displayedPackages.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
          } gap-6 lg:gap-8 items-stretch`}
        >
          {displayedPackages.map((pkg) => {
            const isBuildersChoice = pkg.id === 'builders-choice';
            return (
              <motion.div
                key={pkg.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                  isBuildersChoice
                    ? 'bg-[#FEFBF2] border-2 border-gold-400 shadow-xl ring-2 ring-gold-400/20'
                    : 'bg-[#FAF8F5] border border-cream-400 shadow-md hover:shadow-lg'
                }`}
              >
                {/* Most Popular Ribbon (matching screenshot red ribbon badge) */}
                {pkg.isPopular && (
                  <div className="absolute top-0 right-0 z-20">
                    <div className="bg-[#E53935] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-bl-xl shadow-md">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-6 sm:p-8 flex flex-col items-center text-center">
                  {/* Top Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-white border border-gold-400/30 flex items-center justify-center shadow-sm mb-4">
                    {pkg.highlightIcon === 'star' ? (
                      <Star className="w-8 h-8 text-gold-500 fill-gold-400" />
                    ) : pkg.highlightIcon === 'shield' ? (
                      <ShieldCheck className="w-8 h-8 text-gold-500" />
                    ) : (
                      <Home className="w-8 h-8 text-gold-500 fill-amber-100" />
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-serif text-2xl font-bold text-charcoal-900 mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-charcoal-800/75 min-h-[32px] max-w-[240px]">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Offer Price Yellow/Gold Banner (Identical to screenshot reference) */}
                <div className="bg-[#FFCD00] text-charcoal-950 py-4 px-6 text-center border-y border-[#E5B800] my-2">
                  <span className="text-xs font-semibold uppercase tracking-wider block opacity-90 mb-1">
                    Offer Price
                  </span>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-base sm:text-lg line-through text-charcoal-800/70 font-medium">
                      ₹{pkg.originalPrice}*/-
                    </span>
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-charcoal-950">
                      ₹{pkg.price}*/-
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-charcoal-900/80 font-bold block mt-0.5">
                    Per Sq. Ft. Built-up Area
                  </span>
                </div>

                {/* Features & Action */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow space-y-6">
                  {/* Key Highlights */}
                  <ul className="space-y-2.5 text-xs text-charcoal-800/90 text-left">
                    {pkg.summaryFeatures.slice(0, 5).map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Calculate Now Pill Button (Matching screenshot) */}
                  <div className="pt-2">
                    <button
                      onClick={() => scrollToCalculator(pkg.id)}
                      className="w-full py-3 px-6 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md transform hover:-translate-y-0.5 bg-[#FFCD00] hover:bg-[#EBB800] text-charcoal-950 border border-amber-500/30 flex items-center justify-center space-x-2"
                    >
                      <Calculator className="w-4 h-4" />
                      <span>Calculate Now</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 2. INTERACTIVE PACKAGE COST CALCULATOR */}
      <section
        id="package-calculator"
        className="bg-charcoal-900 rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-luxury relative overflow-hidden border border-gold-400/30"
      >
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400 block">
              INSTANT ESTIMATION TOOL
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold">
              Calculate Your Home Construction Budget
            </h3>
            <p className="text-xs sm:text-sm text-cream-200/80 max-w-xl mx-auto">
              Slide to adjust your proposed built-up area and see your estimated project budget with transparent savings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-charcoal-950/70 p-6 sm:p-8 rounded-2xl border border-white/10">
            {/* Input controls */}
            <div className="md:col-span-7 space-y-6">
              {/* Select Package */}
              <div className="space-y-2">
                <label className="text-xs uppercase font-semibold text-gold-300 tracking-wider block">
                  Select Package Tier:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {displayedPackages.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPackageForCalc(p.id)}
                      className={`text-xs py-2 px-3 rounded-lg font-semibold transition-all border ${
                        selectedPackageForCalc === p.id
                          ? 'bg-gold-400 text-charcoal-950 border-gold-400 shadow-md font-bold'
                          : 'bg-charcoal-900 text-cream-200 border-white/10 hover:border-gold-400/50'
                      }`}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider & Built-up Area Input */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs uppercase font-semibold text-gold-300 tracking-wider">
                    Built-up Area (Sq. Ft.):
                  </label>
                  <div className="flex items-center space-x-2 bg-charcoal-900 px-3 py-1.5 rounded-lg border border-gold-400/40">
                    <input
                      type="number"
                      min={600}
                      max={10000}
                      step={50}
                      value={builtUpArea}
                      onChange={(e) => setBuiltUpArea(Math.max(100, Number(e.target.value)))}
                      className="w-20 bg-transparent text-white font-serif font-bold text-right text-base focus:outline-none"
                    />
                    <span className="text-xs text-gold-400 font-semibold">sq.ft</span>
                  </div>
                </div>

                <input
                  type="range"
                  min={600}
                  max={8000}
                  step={50}
                  value={builtUpArea}
                  onChange={(e) => setBuiltUpArea(Number(e.target.value))}
                  className="w-full accent-gold-400 cursor-pointer h-2 bg-charcoal-800 rounded-lg"
                />

                {/* Preset quick buttons */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {[1000, 1500, 2000, 2500, 3500].map((area) => (
                    <button
                      key={area}
                      onClick={() => setBuiltUpArea(area)}
                      className={`text-[11px] px-2.5 py-1 rounded-md transition-colors ${
                        builtUpArea === area
                          ? 'bg-white/20 text-white font-bold'
                          : 'bg-white/5 text-cream-300/70 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {area.toLocaleString('en-IN')} sq.ft
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Estimated Output Result */}
            <div className="md:col-span-5 bg-charcoal-900/90 rounded-2xl p-6 border border-gold-400/40 flex flex-col justify-between text-center space-y-4">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-gold-400 font-bold block mb-1">
                  {currentCalcPkg.name} ({currentCalcPkg.price}/sq.ft)
                </span>
                <span className="text-xs text-cream-200/70 block">
                  Estimated Total Build Cost:
                </span>
                <div className="font-serif text-3xl sm:text-4xl font-extrabold text-white mt-1">
                  ₹{estimatedCost.toLocaleString('en-IN')}*
                </div>
                {savings > 0 && (
                  <span className="inline-block mt-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-3 py-1 rounded-full">
                    🎉 You Save ₹{savings.toLocaleString('en-IN')} with Current Offer!
                  </span>
                )}
              </div>

              <div className="space-y-2 pt-2 border-t border-white/10">
                <a
                  href={`https://wa.me/917810045253?text=${encodeURIComponent(
                    `Hello Vennila Construction, I am interested in the ${currentCalcPkg.name} package for an estimated built-up area of ${builtUpArea} sq.ft (approx cost ₹${estimatedCost.toLocaleString(
                      'en-IN'
                    )}). Please share full details and schedule a consultation.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md transition-colors"
                >
                  <span>WhatsApp This Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  href="/#consultation"
                  className="w-full py-2.5 px-4 rounded-full bg-charcoal-800 hover:bg-charcoal-700 text-white font-semibold text-xs uppercase tracking-wider block transition-colors border border-white/15"
                >
                  Book Free Site Inspection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONSULTATION DESK CTA */}
      <section className="bg-gradient-to-r from-charcoal-950 via-charcoal-900 to-charcoal-950 rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 border border-gold-400/40 shadow-xl">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400 block">
          NEED A CUSTOMIZED SPECIFICATION?
        </span>
        <h3 className="font-serif text-2xl sm:text-4xl font-bold max-w-2xl mx-auto">
          Talk to Our Principal Civil Engineers Today
        </h3>
        <p className="text-xs sm:text-sm text-cream-200/80 max-w-xl mx-auto leading-relaxed">
          Have unique structural requirements, basement parking needs, or custom architectural elevations? We customize our packages to match your exact vision and plot soil profile.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
            className="w-full sm:w-auto py-3.5 px-8 rounded-full bg-gold-400 hover:bg-gold-500 text-charcoal-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg transition-transform transform hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4" />
            <span>Call +91 78100 45253</span>
          </a>

          <Link
            href="/#consultation"
            className="w-full sm:w-auto py-3.5 px-8 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 border border-white/20 transition-colors"
          >
            <span>Request In-Person Site Visit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
