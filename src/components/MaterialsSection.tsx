'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Check } from 'lucide-react';
import { MATERIAL_CATEGORIES } from '@/data/companyData';

export const MaterialsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-24 bg-cream-100 relative overflow-hidden">
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
            MATERIAL EXCELLENCE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight">
            CRAFTED WITH THE RIGHT MATERIALS.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-800/80">
            We partner with certified tier-1 manufacturers to source structural steel, high-early-strength cement, natural woods, and luxury fittings.
          </p>
          <div className="w-20 h-1 bg-gold-gradient mx-auto rounded-full mt-4" />
        </motion.div>

        {/* 10 Material Categories Grid with Staggered Motion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {MATERIAL_CATEGORIES.map((mat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white p-6 rounded-2xl border border-cream-400 shadow-sm luxury-card-glow space-y-3 flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-cream-100 border border-gold-400/30 flex items-center justify-center font-serif text-sm font-bold text-gold-500 group-hover:bg-gold-400 group-hover:text-white transition-colors duration-300 shadow-sm">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </div>
                <h3 className="font-serif text-lg font-bold text-charcoal-900 group-hover:text-gold-500 transition-colors">
                  {mat.title}
                </h3>
                <span className="text-xs font-semibold text-gold-500 block">
                  {mat.spec}
                </span>
                <p className="text-xs text-charcoal-800/70 font-normal leading-relaxed">
                  {mat.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-cream-400/50 flex items-center space-x-1.5 text-[11px] font-semibold text-charcoal-800/60">
                <Check className="w-3.5 h-3.5 text-gold-500" />
                <span>Quality Tested</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Customization Notice Disclaimer Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 bg-charcoal-900 text-white rounded-2xl p-6 sm:p-8 border border-gold-400/30 text-center max-w-4xl mx-auto space-y-2 shadow-2xl relative overflow-hidden"
        >
          <div className="flex items-center justify-center space-x-2 text-gold-400 font-semibold text-xs uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>Tailored Procurement Guarantee</span>
          </div>
          <p className="text-sm sm:text-base font-serif italic text-cream-100">
            "Material specifications can be customised based on project requirements and client preferences."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
