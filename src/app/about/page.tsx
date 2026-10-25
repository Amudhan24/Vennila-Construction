import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Award, Users, Sparkles, Compass, HeartHandshake, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

export const metadata = {
  title: 'About Vennila Construction | Quality & Craftsmanship',
  description: 'Learn about Vennila Construction, our company philosophy, architectural approach, quality commitment, and dedicated engineering team.',
};

export default function AboutPage() {
  const values = [
    { title: 'Integrity', desc: 'Transparent contracts, zero hidden costs, and honest material sourcing.', icon: ShieldCheck },
    { title: 'Quality', desc: '12-stage engineering inspections ensuring zero-compromise structural longevity.', icon: Award },
    { title: 'Transparency', desc: 'Real-time site updates and clear milestone progression reports.', icon: Sparkles },
    { title: 'Craftsmanship', desc: 'Master wood joinery, fine tile setting, and precision civil work.', icon: Compass },
    { title: 'Innovation', desc: 'Modern 3D architectural planning and thermal efficient building methods.', icon: Users },
    { title: 'Client Satisfaction', desc: 'Building long-term relationships through dedicated post-handover support.', icon: HeartHandshake },
  ];

  return (
    <main className="pt-28 pb-20 bg-cream-100 min-h-screen">
      {/* About Hero */}
      <section className="bg-cream-50 py-16 border-b border-cream-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400 block">
            ABOUT VENNILA CONSTRUCTION
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal-900">
            BUILDING MORE THAN STRUCTURES.
          </h1>
          <p className="text-base sm:text-lg text-charcoal-800/80 max-w-2xl mx-auto">
            Creating enduring residential and commercial legacies built on structural excellence, refined design, and uncompromising craftsmanship.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative h-[480px] w-full rounded-xl overflow-hidden border border-cream-400 shadow-luxury bg-white p-3">
                <Image
                  src="/images/3.jpeg"
                  alt="Vennila Construction Story & Craftsmanship"
                  fill
                  className="object-cover rounded"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block">
                OUR STORY & PHILOSOPHY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 leading-tight">
                Building With Purpose. Creating Spaces That Last.
              </h2>
              <div className="w-16 h-1 bg-gold-gradient rounded-full" />
              <div className="space-y-4 text-xs sm:text-sm text-charcoal-800/90 leading-relaxed">
                <p>
                  Vennila Construction was founded with a clear vision: to elevate residential and commercial construction standards by combining disciplined civil engineering with high-end architectural aesthetics.
                </p>
                <p>
                  Over 15+ years of operations, we have established a reputation for delivering independent homes, luxury villas, and commercial developments with single-point turnkey responsibility.
                </p>
                <p>
                  We believe that a house is not merely concrete and steel—it is an intimate space tailored to family life, daily comfort, and future legacies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Our Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block">
              GUIDING PRINCIPLES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
              OUR CORE VALUES
            </h2>
            <div className="w-16 h-1 bg-gold-gradient mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-white p-8 rounded-xl border border-cream-400 shadow-sm space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-cream-100 border border-gold-400/30 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-charcoal-900">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/#consultation"
              className="inline-flex items-center space-x-3 bg-gold-400 hover:bg-gold-500 text-white font-semibold uppercase tracking-wider text-xs sm:text-sm px-8 py-4 rounded shadow-md"
            >
              <span>Work With Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
