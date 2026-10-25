import React from 'react';

export const metadata = {
  title: 'Terms & Conditions | Vennila Construction',
  description: 'Terms and conditions for Vennila Construction services.',
};

export default function TermsPage() {
  return (
    <main className="pt-32 pb-20 bg-cream-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 bg-white p-8 sm:p-12 rounded-xl border border-cream-400 shadow-sm text-charcoal-900 text-xs sm:text-sm leading-relaxed">
        <h1 className="font-serif text-3xl font-bold">Terms &amp; Conditions</h1>
        <p className="text-gold-500 font-semibold">Last Updated: January 2026</p>
        
        <h2 className="font-serif text-xl font-bold pt-4 border-t border-cream-200">1. Architectural & Construction Estimates</h2>
        <p>All preliminary cost estimates presented on this website are indicative. Binding contractual pricing is finalized only upon physical site survey, soil testing, and execution of a formal written agreement.</p>

        <h2 className="font-serif text-xl font-bold pt-4 border-t border-cream-200">2. Intellectual Property</h2>
        <p>All website content, architectural render concepts, text, logos, and gallery media are the intellectual property of Vennila Construction.</p>

        <h2 className="font-serif text-xl font-bold pt-4 border-t border-cream-200">3. Contact & Inquiries</h2>
        <p>For inquiries regarding terms of contract, please contact info@vennilaconstruction.com.</p>
      </div>
    </main>
  );
}
