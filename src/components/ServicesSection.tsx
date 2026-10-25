'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '@/data/companyData';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-cream-400 pb-8">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400 block">
              OUR SERVICES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight">
              Complete Construction Solutions,<br />
              <span className="italic font-serif text-gold-400">Under One Roof.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-charcoal-800/80 max-w-md">
            From single-residence blueprints to commercial developments and bespoke luxury interiors, we execute every phase with structural discipline and architectural refinement.
          </p>
        </div>

        {/* Services Grid (8 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-lg border border-cream-400 overflow-hidden shadow-sm hover:shadow-luxury-hover transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Zoom */}
                <div className="relative h-52 w-full overflow-hidden bg-cream-200">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Large Number Badge */}
                  <span className="absolute top-4 left-4 font-serif text-2xl font-bold text-white bg-charcoal-900/80 backdrop-blur-md px-3 py-1 rounded border border-gold-400/40">
                    {service.number}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-xl font-bold text-charcoal-900 group-hover:text-gold-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed font-normal line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 pb-6 pt-2 border-t border-cream-400/50 mt-4">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-charcoal-900 group-hover:text-gold-400 transition-colors"
                >
                  <span>Explore Service</span>
                  <ArrowUpRight className="w-4 h-4 text-gold-400 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 bg-charcoal-900 text-white rounded-xl p-8 sm:p-12 border border-gold-400/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Require a Custom Construction Specification?
            </h3>
            <p className="text-sm text-cream-200 opacity-90 max-w-2xl">
              Our engineering and architectural team will tailor material specifications, structural design, and timeline milestones to match your exact vision.
            </p>
          </div>
          <Link
            href="/#consultation"
            className="whitespace-nowrap bg-gold-400 hover:bg-gold-500 text-white font-semibold uppercase tracking-wider text-xs sm:text-sm px-8 py-4 rounded shadow-md transition-all duration-300"
          >
            Request Custom Proposal
          </Link>
        </div>
      </div>
    </section>
  );
};
