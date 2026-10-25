'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award } from 'lucide-react';
import { QUALITY_CHECKPOINTS } from '@/data/companyData';

export const QualityStandards: React.FC = () => {
  const [activeCheck, setActiveCheck] = useState<number>(0);

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
    <section className="py-24 bg-cream-50 border-t border-cream-400/60 relative overflow-hidden">
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
            QUALITY ASSURANCE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight">
            QUALITY IS NOT AN AFTERTHOUGHT.<br />
            <span className="italic font-serif text-gold-400">It is built into every stage of the process.</span>
          </h2>
          <div className="w-20 h-1 bg-gold-gradient mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Checkpoints Interactive Grid with Staggered Motion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {QUALITY_CHECKPOINTS.map((qp, idx) => {
            const isSelected = activeCheck === idx;
            return (
              <motion.div
                key={qp.id}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                onClick={() => setActiveCheck(idx)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                  isSelected
                    ? 'bg-white border-gold-400 shadow-luxury ring-1 ring-gold-400/30'
                    : 'bg-white/80 border-cream-400 hover:border-gold-400/60 hover:bg-white luxury-card-glow'
                }`}
              >
                {/* Active selection bar */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600" />
                )}

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-xs font-bold text-gold-500 uppercase tracking-widest bg-gold-50 px-2.5 py-1 rounded-md border border-gold-400/20">
                      STAGE {qp.number}
                    </span>
                    <CheckCircle2
                      className={`w-5 h-5 transition-colors duration-300 ${
                        isSelected ? 'text-gold-500' : 'text-cream-400'
                      }`}
                    />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-charcoal-900 group-hover:text-gold-500 transition-colors">
                    {qp.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed font-normal">
                    {qp.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-cream-400/50 flex items-center justify-between text-[11px] text-charcoal-800/60 font-semibold uppercase">
                  <span>Inspection Protocol Verified</span>
                  <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Quality Banner Note with motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 p-6 rounded-2xl bg-white border border-cream-400 shadow-sm flex items-center space-x-4 max-w-2xl mx-auto luxury-card-glow"
        >
          <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-400/30 flex items-center justify-center flex-shrink-0">
            <Award className="w-6 h-6 text-gold-500" />
          </div>
          <p className="text-xs sm:text-sm text-charcoal-800/90 leading-relaxed font-medium">
            <strong className="text-charcoal-900 font-semibold">Quality Commitment:</strong> Every stage requires formal site sign-off by our senior structural engineer before advancing to subsequent construction phases.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
