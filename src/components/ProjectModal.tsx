'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, MapPin, Calendar, Maximize, CheckCircle2, ArrowRight } from 'lucide-react';
import { ProjectItem } from '@/data/companyData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl border border-gold-400/40 overflow-hidden my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-charcoal-900/80 text-white flex items-center justify-center hover:bg-gold-400 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-64 sm:h-80 w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold-400 bg-charcoal-900/80 px-3 py-1 rounded border border-gold-400/30">
              {project.category}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              {project.title}
            </h3>
            <div className="flex items-center space-x-2 text-xs text-cream-200">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>

        {/* Modal Content Details */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Key Specs Row */}
          <div className="grid grid-cols-3 gap-4 bg-cream-100 p-4 rounded-lg border border-cream-400 text-xs font-semibold text-charcoal-900">
            <div>
              <span className="text-[10px] text-charcoal-800/60 uppercase block">Area</span>
              <span className="flex items-center gap-1 mt-1 text-sm">
                <Maximize className="w-4 h-4 text-gold-400" />
                {project.builtUpArea}
              </span>
            </div>
            <div>
              <span className="text-[10px] text-charcoal-800/60 uppercase block">Year</span>
              <span className="flex items-center gap-1 mt-1 text-sm">
                <Calendar className="w-4 h-4 text-gold-400" />
                {project.year}
              </span>
            </div>
            <div>
              <span className="text-[10px] text-charcoal-800/60 uppercase block">Type</span>
              <span className="text-sm mt-1 block">{project.category}</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-charcoal-900">Project Overview</h4>
            <p className="text-xs sm:text-sm text-charcoal-800/90 leading-relaxed">
              {project.story}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-charcoal-900">Design Concept</h4>
            <p className="text-xs sm:text-sm text-charcoal-800/90 leading-relaxed italic border-l-2 border-gold-400 pl-4 py-1">
              "{project.designConcept}"
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-charcoal-900">Key Execution Highlights</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-charcoal-800">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Modal Footer CTA */}
          <div className="pt-4 border-t border-cream-400 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href={`/projects/${project.slug}`}
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-charcoal-900 hover:bg-charcoal-800 text-white font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded"
            >
              <span>Full Details Page</span>
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </Link>

            <Link
              href="/#consultation"
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gold-400 hover:bg-gold-500 text-white font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded shadow-md"
            >
              <span>Discuss Similar Project</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
