'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      num: '01',
      title: 'Consultation',
      desc: 'Understand your requirements, budget, plot orientation, site conditions, and architectural vision in detail.',
      detail: 'In-person meeting or virtual session to review architectural aspirations, spatial allocation, and preliminary budget bounds.'
    },
    {
      num: '02',
      title: 'Site Assessment',
      desc: 'Review site conditions, dimensions, soil characteristics, and municipal zoning project requirements.',
      detail: 'Engineers perform physical land surveys, soil bearing tests, and check sun-path orientation for natural daylighting.'
    },
    {
      num: '03',
      title: 'Planning & Design',
      desc: 'Develop architectural concepts, 2D floor plans, 3D exterior elevations, and project specifications.',
      detail: 'Our architectural wing creates 3D renders and detailed structural blueprints tailored to your family or business needs.'
    },
    {
      num: '04',
      title: 'Estimation & Proposal',
      desc: 'Prepare itemized project scope, certified material specifications, fixed costing, and milestone timeline.',
      detail: 'Transparent BOQ (Bill of Quantities) presented without hidden fees, locking in fixed rate contracts.'
    },
    {
      num: '05',
      title: 'Execution',
      desc: 'Coordinate civil construction, raw materials, RCC framing, MEP utility rough-ins, and weekly site checks.',
      detail: 'Site management team executes foundation, columns, masonry, plumbing, electrical, and concrete curing protocols.'
    },
    {
      num: '06',
      title: 'Finishing',
      desc: 'Complete wall plastering, custom interior joinery, flooring, tile setting, paintwork, and final quality inspection.',
      detail: 'Fine interior cabinetry, fluted glass wardrobes, lighting fixtures, and 12-stage quality audit completion.'
    },
    {
      num: '07',
      title: 'Handover',
      desc: 'Final walkthrough, completion certificate verification, key ceremony, and formal project handover.',
      detail: 'Comprehensive deep cleaning, warranty document presentation, and formal key handover ceremony.'
    },
  ];

  return (
    <section id="process" className="py-24 bg-cream-50 relative border-t border-cream-400/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400 block">
            OUR PROCESS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight">
            From Vision To Reality
          </h2>
          <p className="text-sm sm:text-base text-charcoal-800/80">
            A clear and structured process from your first conversation to the final handover.
          </p>
          <div className="w-20 h-1 bg-gold-gradient mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Step Selector Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-3"
          >
            {steps.map((step, idx) => {
              const isCurrent = activeStep === idx + 1;
              return (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(idx + 1)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-300 flex items-center justify-between group transform hover:-translate-y-0.5 ${
                    isCurrent
                      ? 'bg-charcoal-900 border-gold-400 text-white shadow-luxury'
                      : 'bg-white border-cream-400 text-charcoal-900 hover:border-gold-400/60 hover:bg-cream-100'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <span
                      className={`font-serif text-lg font-bold px-2.5 py-1 rounded-lg transition-colors duration-300 ${
                        isCurrent
                          ? 'bg-gold-400 text-white shadow'
                          : 'bg-cream-200 text-charcoal-900 group-hover:bg-gold-400 group-hover:text-white'
                      }`}
                    >
                      {step.num}
                    </span>
                    <span className="font-serif text-lg font-semibold tracking-wide">
                      {step.title}
                    </span>
                  </div>
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                      isCurrent ? 'text-gold-400' : 'text-charcoal-800/60'
                    }`}
                  >
                    Step {idx + 1}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Active Step Detailed Card with AnimatePresence */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-2xl border border-cream-400 p-8 sm:p-10 shadow-luxury space-y-6 relative overflow-hidden"
              >
                {/* Gold Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600" />

                <div className="flex items-center justify-between border-b border-cream-400 pb-6 pt-2">
                  <div>
                    <span className="text-xs uppercase font-semibold tracking-[0.2em] text-gold-400 block mb-1">
                      PHASE {steps[activeStep - 1].num} OF 07
                    </span>
                    <h3 className="font-serif text-3xl font-bold text-charcoal-900">
                      {steps[activeStep - 1].title}
                    </h3>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-cream-100 border border-gold-400/40 flex items-center justify-center font-serif text-2xl font-bold text-gold-400 shadow-sm">
                    {steps[activeStep - 1].num}
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-charcoal-900 font-medium leading-relaxed">
                    {steps[activeStep - 1].desc}
                  </p>
                  <div className="p-5 rounded-xl bg-cream-100 border border-cream-400/80 text-xs sm:text-sm text-charcoal-800/90 leading-relaxed shadow-sm">
                    <strong className="text-charcoal-900 font-semibold block mb-1.5 uppercase tracking-wider text-xs">
                      Execution Protocol:
                    </strong>
                    {steps[activeStep - 1].detail}
                  </div>
                </div>

                {/* Progress Line */}
                <div className="pt-4">
                  <div className="flex items-center justify-between text-xs text-charcoal-800/70 font-semibold mb-2">
                    <span>Overall Project Workflow</span>
                    <span className="text-gold-500 font-bold">{Math.round((activeStep / 7) * 100)}% Complete</span>
                  </div>
                  <div className="w-full h-2.5 bg-cream-200 rounded-full overflow-hidden p-0.5">
                    <motion.div
                      className="h-full bg-gold-gradient rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${(activeStep / 7) * 100}%` }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
