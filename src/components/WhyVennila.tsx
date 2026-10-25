'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MessageSquare, Award, Compass, Clock, HeartHandshake } from 'lucide-react';

export const WhyVennila: React.FC = () => {
  const whyFeatures = [
    {
      num: '01',
      icon: ShieldCheck,
      title: 'Quality First',
      desc: 'Every stage of construction is approached with attention to material quality, workmanship and execution standards.',
    },
    {
      num: '02',
      icon: MessageSquare,
      title: 'Transparent Communication',
      desc: 'Clear communication keeps clients informed throughout the project journey with weekly digital photo and video progress reports.',
    },
    {
      num: '03',
      icon: Award,
      title: 'Experienced Execution',
      desc: 'Professional planning and coordinated civil execution maintain quality consistency across all structural and interior phases.',
    },
    {
      num: '04',
      icon: Compass,
      title: 'Attention to Detail',
      desc: 'From foundational soil analysis to fine wooden cabinetry alignment, we focus on precision at every stage.',
    },
    {
      num: '05',
      icon: Clock,
      title: 'Timely Progress',
      desc: 'Structured planning and milestone-based execution keep projects moving efficiently toward target handover dates.',
    },
    {
      num: '06',
      icon: HeartHandshake,
      title: 'End-to-End Support',
      desc: 'From initial design consultation to final structural inspection and key handover, our team supports your complete construction journey.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="why-vennila" className="py-24 bg-cream-50 relative border-t border-cream-400/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title & Editorial Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-20"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400 block">
            WHY VENNILA
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight">
            Built on Quality.<br />
            <span className="italic font-serif text-gold-400">Driven by Detail. Created to Last.</span>
          </h2>
          <div className="w-20 h-1 bg-gold-gradient mx-auto rounded-full mt-4" />
        </motion.div>

        {/* 6 Editorial Feature Blocks with Staggered Motion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {whyFeatures.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.num}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white p-8 rounded-2xl border border-cream-400 shadow-sm luxury-card-glow transition-all duration-300 relative group overflow-hidden"
              >
                {/* Gold Gradient Top Hover Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Gold Number Outline Accent */}
                <span className="absolute top-4 right-6 font-serif text-4xl font-bold text-cream-400/50 group-hover:text-gold-400/30 transition-colors">
                  {item.num}
                </span>

                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-cream-100 border border-gold-400/30 flex items-center justify-center group-hover:bg-gold-400 transition-colors duration-300 shadow-sm">
                    <Icon className="w-6 h-6 text-gold-400 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-charcoal-900 group-hover:text-gold-500 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
