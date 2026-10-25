import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/data/companyData';

interface BlogDetailProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogDetailProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Article Not Found | Vennila Construction' };

  return {
    title: `${post.title} | Vennila Construction`,
    description: post.excerpt,
  };
}

export default function BlogDetailPage({ params }: BlogDetailProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="pt-28 pb-20 bg-cream-100 min-h-screen">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link
          href="/blog"
          className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-gold-500 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles</span>
        </Link>

        <div className="space-y-4">
          <span className="text-xs uppercase font-semibold text-gold-400 tracking-widest bg-cream-50 px-3 py-1 rounded border border-cream-400">
            {post.category}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4 text-xs text-charcoal-800/80 font-medium pb-4 border-b border-cream-300">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-gold-400" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-gold-400" />
              {post.readTime}
            </span>
          </div>
        </div>

        <div className="relative h-[400px] w-full rounded-xl overflow-hidden border border-cream-400 shadow-luxury">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="bg-white p-8 sm:p-12 rounded-xl border border-cream-400 shadow-sm space-y-6 text-charcoal-900 text-sm sm:text-base leading-relaxed font-normal prose prose-serif max-w-none">
          <p className="font-serif text-lg italic text-gold-600 border-l-2 border-gold-400 pl-4 py-1">
            "{post.excerpt}"
          </p>
          <div className="space-y-4 whitespace-pre-line">
            {post.content}
          </div>
        </div>

        {/* CTA Box */}
        <div className="bg-charcoal-900 text-white p-8 rounded-xl border border-gold-400/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-2xl font-bold">Planning a Build in Chennai or Tamil Nadu?</h3>
            <p className="text-xs text-cream-200">Schedule a 1-on-1 discovery consultation with Vennila Construction.</p>
          </div>
          <Link
            href="/#consultation"
            className="whitespace-nowrap bg-gold-400 hover:bg-gold-500 text-white font-semibold uppercase tracking-wider text-xs px-6 py-3.5 rounded shadow"
          >
            Get Free Consultation
          </Link>
        </div>
      </article>
    </main>
  );
}
