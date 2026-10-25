'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '@/data/companyData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-cream-50 relative border-t border-cream-400/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400 block">
            CLIENT REVIEWS & TESTIMONIALS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight">
            WHAT OUR CLIENTS SAY
          </h2>
          <div className="w-20 h-1 bg-gold-gradient mx-auto rounded-full mt-4" />
        </div>

        {/* Testimonial Showcase Box */}
        <div className="max-w-4xl mx-auto relative bg-white rounded-2xl border border-cream-400 p-8 sm:p-12 shadow-luxury">
          <Quote className="absolute top-6 right-6 w-16 h-16 text-cream-200" />

          <div className="space-y-6 relative z-10">
            {/* Stars */}
            <div className="flex items-center space-x-1">
              {[...Array(TESTIMONIALS_DATA[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold-400 fill-gold-400" />
              ))}
            </div>

            {/* Testimonial Comment */}
            <p className="font-serif text-xl sm:text-2xl text-charcoal-900 leading-relaxed font-normal italic">
              "{TESTIMONIALS_DATA[currentIndex].comment}"
            </p>

            {/* Author Info */}
            <div className="pt-4 border-t border-cream-400/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-serif text-lg font-bold text-charcoal-900">
                  {TESTIMONIALS_DATA[currentIndex].name}
                </h4>
                <p className="text-xs text-gold-500 font-semibold uppercase tracking-wider">
                  {TESTIMONIALS_DATA[currentIndex].projectType} &bull; {TESTIMONIALS_DATA[currentIndex].location}
                </p>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full border border-cream-400 hover:border-gold-400 text-charcoal-900 hover:text-gold-400 transition-colors bg-cream-50"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-semibold text-charcoal-800">
                  0{currentIndex + 1} / 0{TESTIMONIALS_DATA.length}
                </span>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full border border-cream-400 hover:border-gold-400 text-charcoal-900 hover:text-gold-400 transition-colors bg-cream-50"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
