'use client';

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQS_DATA } from '@/data/companyData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS_DATA[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-24 bg-cream-50 relative border-t border-cream-400/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400 block">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight">
            Clear Answers to Your Construction Questions
          </h2>
          <p className="text-sm sm:text-base text-charcoal-800/80">
            Everything you need to know about starting your project, contracts, material customization, and timelines.
          </p>
          <div className="w-20 h-1 bg-gold-gradient mx-auto rounded-full mt-4" />
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-cream-400 overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 hover:bg-cream-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-charcoal-900 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-gold-400 text-white'
                        : 'bg-cream-100 text-charcoal-800 border border-cream-400'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-charcoal-800/90 leading-relaxed font-normal border-t border-cream-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Quick Help Note */}
        <div className="mt-12 text-center text-xs text-charcoal-800/80 space-y-2">
          <p>Have a question not covered here?</p>
          <a
            href="#consultation"
            className="inline-flex items-center space-x-2 text-gold-500 font-semibold uppercase tracking-wider hover:underline"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Speak directly with our engineering advisory team</span>
          </a>
        </div>
      </div>
    </section>
  );
};
