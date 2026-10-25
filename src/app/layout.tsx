import './globals.css';
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingContact } from '@/components/FloatingContact';
import { COMPANY_INFO } from '@/data/companyData';

export const metadata = {
  title: 'Vennila Construction | Premium Home & Villa Construction',
  description: 'Vennila Construction delivers premium residential, villa, commercial and turnkey construction solutions with a focus on quality, craftsmanship and transparent execution.',
  metadataBase: new URL('https://www.vennilaconstruction.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: COMPANY_INFO.name,
    image: 'https://www.vennilaconstruction.com/Logo.jpg',
    '@id': 'https://www.vennilaconstruction.com',
    url: 'https://www.vennilaconstruction.com',
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    priceRange: '$$$',
    sameAs: [COMPANY_INFO.instagramUrl],
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address,
      addressLocality: COMPANY_INFO.city,
      postalCode: COMPANY_INFO.pincode,
      addressCountry: 'IN',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
    knowsAbout: [
      'House Construction',
      'Luxury Villa Construction',
      'Turnkey Construction',
      'Commercial Construction',
      'Architectural Planning',
      'Interior Design',
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="antialiased bg-cream-100 text-charcoal-900 selection:bg-gold-400 selection:text-white">
        <Navbar />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
