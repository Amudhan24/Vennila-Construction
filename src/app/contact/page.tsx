import React from 'react';
import { ContactSection } from '@/components/ContactSection';
import { CostEstimatorForm } from '@/components/CostEstimatorForm';

export const metadata = {
  title: 'Contact Vennila Construction | Office & Advisory Desk',
  description: 'Contact Vennila Construction. Office location, hotline, WhatsApp advisory, business hours, and project consultation form.',
};

export default function ContactPage() {
  return (
    <main className="pt-28 pb-20 bg-cream-100 min-h-screen">
      <section className="bg-cream-50 py-16 border-b border-cream-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400 block">
            CONTACT US
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal-900">
            Let's Create Something Exceptional
          </h1>
          <p className="text-base sm:text-lg text-charcoal-800/80 max-w-2xl mx-auto">
            Our engineering team is ready to discuss your plot location, space requirements, and construction timeline.
          </p>
        </div>
      </section>

      <ContactSection />
      <CostEstimatorForm />
    </main>
  );
}
