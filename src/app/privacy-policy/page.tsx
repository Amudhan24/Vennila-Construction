import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Vennila Construction',
  description: 'Privacy policy for Vennila Construction website and consultation services.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-32 pb-20 bg-cream-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 bg-white p-8 sm:p-12 rounded-xl border border-cream-400 shadow-sm text-charcoal-900 text-xs sm:text-sm leading-relaxed">
        <h1 className="font-serif text-3xl font-bold">Privacy Policy</h1>
        <p className="text-gold-500 font-semibold">Last Updated: January 2026</p>
        
        <h2 className="font-serif text-xl font-bold pt-4 border-t border-cream-200">1. Information Collection</h2>
        <p>Vennila Construction collects personal information provided voluntarily through our consultation forms, phone calls, and WhatsApp messages. This includes your name, phone number, email address, plot location, and project specifications.</p>

        <h2 className="font-serif text-xl font-bold pt-4 border-t border-cream-200">2. Use of Information</h2>
        <p>Information collected is used exclusively to prepare architectural proposals, arrange site visits, communicate project milestones, and fulfill contractual construction obligations.</p>

        <h2 className="font-serif text-xl font-bold pt-4 border-t border-cream-200">3. Data Protection</h2>
        <p>We do not sell, rent, or trade your personal information to third parties. All client records are stored securely in compliance with standard data protection practices.</p>

        <h2 className="font-serif text-xl font-bold pt-4 border-t border-cream-200">4. Contact Us</h2>
        <p>If you have questions regarding this privacy policy, please contact info@vennilaconstruction.com.</p>
      </div>
    </main>
  );
}
