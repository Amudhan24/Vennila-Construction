'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Calculator, ShieldCheck, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

export const CostEstimatorForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    projectType: 'Villa',
    plotSize: '',
    builtUpArea: '2500',
    floors: 'G+1',
    estimatedBudget: '',
    startDate: '',
    message: '',
    privacyAccepted: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = 'Valid phone number is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.city.trim()) errs.city = 'City/Location is required';
    if (!formData.privacyAccepted) errs.privacyAccepted = 'Please accept the privacy terms';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  // Dynamic cost estimator logic
  const areaNum = parseFloat(formData.builtUpArea) || 0;
  let ratePerSqFt = 2400; // Base residential
  if (formData.projectType === 'Villa') ratePerSqFt = 2900;
  if (formData.projectType === 'Commercial') ratePerSqFt = 2600;
  if (formData.projectType === 'Renovation') ratePerSqFt = 1600;
  if (formData.projectType === 'Interior') ratePerSqFt = 1200;

  const estimatedMin = Math.round((areaNum * ratePerSqFt) / 100000);
  const estimatedMax = Math.round((areaNum * (ratePerSqFt + 400)) / 100000);

  return (
    <section id="consultation" className="py-24 bg-cream-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-3xl border border-cream-400 p-8 sm:p-12 shadow-luxury overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Form Header & Estimator Box */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400 block">
                  FREE CONSULTATION & ESTIMATE
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 leading-tight">
                  LET'S BUILD YOUR VISION.
                </h2>
                <p className="text-sm text-charcoal-800/80 leading-relaxed font-normal">
                  Tell us about your project and our engineering team will get in touch to discuss your requirements, site specifications, and preliminary budget bounds.
                </p>
              </div>

              {/* Dynamic Instant Cost Estimator Widget */}
              <div className="bg-charcoal-900 text-white p-6 rounded-xl border border-gold-400/30 space-y-4 shadow-lg">
                <div className="flex items-center space-x-2 text-gold-400 text-xs uppercase font-semibold tracking-wider">
                  <Calculator className="w-4 h-4" />
                  <span>Instant Structural Cost Preview</span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs text-cream-200/80 uppercase">
                    Estimated Structural Range ({formData.projectType}):
                  </span>
                  <div className="font-serif text-3xl font-bold text-gold-400">
                    {areaNum > 0 ? `₹${estimatedMin} Lakhs - ₹${estimatedMax} Lakhs*` : 'Enter Area (Sq. Ft.)'}
                  </div>
                </div>

                <p className="text-[11px] text-cream-300/70 leading-relaxed italic border-t border-gold-400/20 pt-3">
                  *Preliminary estimate based on standard specification tiers. Exact itemized costing provided after site survey and blueprint analysis.
                </p>
              </div>

              {/* Quick Contact Direct Lines */}
              <div className="space-y-3 pt-2 text-xs font-semibold text-charcoal-900">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gold-400" />
                  <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-gold-500">
                    Direct Hotline: {COMPANY_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gold-400" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-gold-500 break-all">
                    Email: {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Lead Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 bg-cream-50 p-6 sm:p-8 rounded-2xl border border-cream-400"
            >
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gold-400 text-white flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-charcoal-900">
                    Consultation Request Received
                  </h3>
                  <p className="text-sm text-charcoal-800/90 max-w-md mx-auto leading-relaxed">
                    Thank you for contacting Vennila Construction. Our technical team will review your requirement and get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold uppercase tracking-wider text-gold-500 hover:underline pt-4"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-900 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 text-xs sm:text-sm rounded border bg-white focus:outline-none focus:border-gold-400 ${
                          errors.fullName ? 'border-red-500' : 'border-cream-400'
                        }`}
                      />
                      {errors.fullName && <span className="text-[10px] text-red-500">{errors.fullName}</span>}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-900 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 78100 45253"
                        className={`w-full px-4 py-3 text-xs sm:text-sm rounded border bg-white focus:outline-none focus:border-gold-400 ${
                          errors.phone ? 'border-red-500' : 'border-cream-400'
                        }`}
                      />
                      {errors.phone && <span className="text-[10px] text-red-500">{errors.phone}</span>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-900 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 text-xs sm:text-sm rounded border bg-white focus:outline-none focus:border-gold-400 ${
                          errors.email ? 'border-red-500' : 'border-cream-400'
                        }`}
                      />
                      {errors.email && <span className="text-[10px] text-red-500">{errors.email}</span>}
                    </div>

                    {/* City */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-900 mb-1">
                        City / Location *
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Chennai"
                        className={`w-full px-4 py-3 text-xs sm:text-sm rounded border bg-white focus:outline-none focus:border-gold-400 ${
                          errors.city ? 'border-red-500' : 'border-cream-400'
                        }`}
                      />
                      {errors.city && <span className="text-[10px] text-red-500">{errors.city}</span>}
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-900 mb-1">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 text-xs sm:text-sm rounded border border-cream-400 bg-white focus:outline-none focus:border-gold-400"
                      >
                        <option value="Independent House">Independent House</option>
                        <option value="Villa">Luxury Villa</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Renovation">Renovation & Remodeling</option>
                        <option value="Interior">Interior Execution</option>
                        <option value="Turnkey">Turnkey Construction</option>
                        <option value="Other">Other Civil Works</option>
                      </select>
                    </div>

                    {/* Built-up Area */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-900 mb-1">
                        Approx. Built-up Area (Sq. Ft.)
                      </label>
                      <input
                        type="number"
                        value={formData.builtUpArea}
                        onChange={(e) => setFormData({ ...formData, builtUpArea: e.target.value })}
                        placeholder="2500"
                        className="w-full px-4 py-3 text-xs sm:text-sm rounded border border-cream-400 bg-white focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-900 mb-1">
                      Project Notes / Special Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details regarding plot size, preferred floors, timeline, or material preferences..."
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded border border-cream-400 bg-white focus:outline-none focus:border-gold-400"
                    />
                  </div>

                  {/* Privacy Checkbox */}
                  <div className="flex items-center space-x-2 text-xs text-charcoal-800">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={formData.privacyAccepted}
                      onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                      className="rounded border-cream-400 text-gold-400 focus:ring-gold-400"
                    />
                    <label htmlFor="privacy" className="cursor-pointer">
                      I agree to the privacy policy and consent to receiving a project consultation.
                    </label>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="luxury-shimmer w-full bg-gold-400 hover:bg-gold-500 text-white font-semibold uppercase tracking-wider text-xs sm:text-sm py-4 rounded-xl shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 transform hover:-translate-y-0.5"
                  >
                    {loading ? (
                      <span>Processing...</span>
                    ) : (
                      <>
                        <span>Request a Consultation</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
