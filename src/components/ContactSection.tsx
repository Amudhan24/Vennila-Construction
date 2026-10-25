'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageSquare, Instagram, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-cream-50 relative border-t border-cream-400/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400 block">
            GET IN TOUCH
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight">
            LET'S CREATE SOMETHING EXCEPTIONAL.
          </h2>
          <div className="w-20 h-1 bg-gold-gradient mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Office Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-white p-8 rounded-2xl border border-cream-400 shadow-luxury space-y-8 luxury-card-glow relative overflow-hidden"
          >
            {/* Top gold bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600" />

            <div className="space-y-2 pt-2">
              <span className="text-xs uppercase font-semibold text-gold-400 tracking-widest block">
                HEAD OFFICE
              </span>
              <h3 className="font-serif text-2xl font-bold text-charcoal-900">
                {COMPANY_INFO.name}
              </h3>
            </div>

            <div className="space-y-6 text-sm text-charcoal-800">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-gold-50 border border-gold-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <strong className="block text-charcoal-900 font-semibold text-xs uppercase tracking-wider mb-1">
                    Corporate Office
                  </strong>
                  <p>{COMPANY_INFO.address}</p>
                  <p className="text-xs text-charcoal-800/70">{COMPANY_INFO.city}</p>
                  <a
                    href={COMPANY_INFO.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs text-gold-500 hover:text-gold-600 font-medium mt-1.5 transition-colors"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-gold-50 border border-gold-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <strong className="block text-charcoal-900 font-semibold text-xs uppercase tracking-wider mb-1">
                    Phone Advisory
                  </strong>
                  <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-gold-500 font-medium transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MessageSquare className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <strong className="block text-charcoal-900 font-semibold text-xs uppercase tracking-wider mb-1">
                    WhatsApp Advisory
                  </strong>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold-500 font-medium transition-colors"
                  >
                    {COMPANY_INFO.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-gold-50 border border-gold-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <strong className="block text-charcoal-900 font-semibold text-xs uppercase tracking-wider mb-1">
                    Email Desk
                  </strong>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-gold-500 font-medium break-all transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Instagram className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <strong className="block text-charcoal-900 font-semibold text-xs uppercase tracking-wider mb-1">
                    Instagram
                  </strong>
                  <a
                    href={COMPANY_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold-500 font-medium transition-colors"
                  >
                    @{COMPANY_INFO.instagram}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-gold-50 border border-gold-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <strong className="block text-charcoal-900 font-semibold text-xs uppercase tracking-wider mb-1">
                    Working Hours
                  </strong>
                  <p className="text-xs text-charcoal-800/80">{COMPANY_INFO.workingHours}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Google Maps Embed & Direct Navigation Link */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-cream-400 shadow-luxury bg-cream-200">
              <iframe
                title="Vennila Construction Office Location"
                src="https://www.google.com/maps?q=65,+VSM+Garden+St,+West+Saidapet,+West+Jafferkhanpet,+Chennai,+Tamil+Nadu+600083&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-90 hover:saturate-100 transition-all duration-500"
              />
            </div>
            <div className="flex justify-end">
              <a
                href={COMPANY_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-shimmer inline-flex items-center space-x-2 bg-charcoal-900 hover:bg-gold-500 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
