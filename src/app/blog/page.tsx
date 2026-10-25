import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';
import { BLOG_POSTS } from '@/data/companyData';

export const metadata = {
  title: 'Construction Insights & Blog | Vennila Construction',
  description: 'Expert articles on house construction, villa architectural planning, turnkey vs item-rate contracts, construction materials, and budgeting.',
};

export default function BlogPage() {
  return (
    <main className="pt-28 pb-20 bg-cream-100 min-h-screen">
      <section className="bg-cream-50 py-16 border-b border-cream-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400 block">
            INSIGHTS & GUIDES
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal-900">
            Construction Advisory Articles
          </h1>
          <p className="text-base sm:text-lg text-charcoal-800/80 max-w-2xl mx-auto">
            Practical knowledge and architectural guides to help first-time and experienced homeowners plan their build.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl overflow-hidden border border-cream-400 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-cream-200">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-4 left-4 text-[10px] uppercase font-semibold tracking-wider text-white bg-charcoal-900/80 px-2.5 py-1 rounded backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-4 text-xs text-gold-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-serif text-xl font-bold text-charcoal-900 group-hover:text-gold-400 transition-colors leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed font-normal line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-cream-200 mt-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-charcoal-900 group-hover:text-gold-400"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-4 h-4 text-gold-400" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
