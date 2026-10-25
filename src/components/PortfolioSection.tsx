'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '@/data/companyData';
import { ProjectModal } from './ProjectModal';

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Residential', 'Villas', 'Commercial', 'Renovation', 'Interior'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-cream-400 pb-8">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400 block">
              OUR PROJECTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight">
              Spaces We've Built With Purpose.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-charcoal-800/80 max-w-md">
            Explore our architectural portfolio spanning modern villas, private family residences, and commercial developments.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs uppercase tracking-wider font-semibold px-5 py-2.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-charcoal-900 text-white shadow-md border border-gold-400/40'
                    : 'bg-white text-charcoal-800 border border-cream-400 hover:border-gold-400 hover:text-gold-400'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Portfolio Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-xl overflow-hidden border border-cream-400 shadow-sm hover:shadow-luxury cursor-pointer transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Project Image Container */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-cream-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-charcoal-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                    <span className="inline-flex items-center space-x-2 bg-gold-400 text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span>View Project Details</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Gold Project Number Badge */}
                  <span className="absolute top-4 left-4 font-serif text-xs font-bold text-white bg-charcoal-900/80 px-3 py-1 rounded backdrop-blur-md border border-gold-400/30">
                    0{idx + 1}
                  </span>

                  <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider text-charcoal-900 bg-cream-100 px-2.5 py-1 rounded border border-cream-400">
                    {project.category}
                  </span>
                </div>

                {/* Info Container */}
                <div className="p-6 space-y-2">
                  <div className="flex items-center justify-between text-xs text-gold-400 font-semibold">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{project.location}</span>
                    </div>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-charcoal-900 group-hover:text-gold-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed font-normal line-clamp-2">
                    {project.shortDesc}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-3 border-t border-cream-400/50 flex items-center justify-between text-xs font-semibold uppercase text-charcoal-900 group-hover:text-gold-400">
                <span>{project.builtUpArea}</span>
                <span className="flex items-center space-x-1">
                  <span>Explore</span>
                  <ArrowUpRight className="w-4 h-4 text-gold-400" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
