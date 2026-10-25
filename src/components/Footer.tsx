'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Calendar,
  Youtube,
  Facebook,
  MessageCircle,
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0b0c0f] text-white pt-20 pb-10 overflow-hidden border-t border-[#C59B3F]/30">
      {/* Background Architectural Artwork with Dusk Buildings at Left & Right Edges */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/footer-bg.jpg"
          alt="Vennila Construction Footer Architecture"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={95}
        />
        {/* Soft Ambient Overlay for Seamless Contrast */}
        <div className="absolute inset-0 bg-[#0b0c0f]/50 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 3-Column Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12">
          {/* Column 1: Brand Info & Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Logo and Brand Name */}
            <Link href="/" className="inline-flex items-center space-x-3.5 group">
              <div className="relative w-12 h-12 rounded-xl bg-white p-1.5 shadow-md flex items-center justify-center flex-shrink-0">
                <Image
                  src={COMPANY_INFO.logo}
                  alt={COMPANY_INFO.name}
                  width={42}
                  height={42}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-white tracking-wider block">
                  VENNILA
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C59B3F] block">
                  CONSTRUCTION
                </span>
              </div>
            </Link>

            {/* Brand Narrative */}
            <p className="text-xs sm:text-[13px] text-cream-200/80 leading-relaxed font-normal max-w-md">
              Vennila Construction delivers luxury residential villas, independent homes, turnkey developments, and bespoke interior spaces crafted with structural integrity and architectural refinement.
            </p>

            {/* Contact Information List */}
            <div className="space-y-3 text-xs sm:text-[13px] text-cream-200/85 pt-1">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#C59B3F] flex-shrink-0 mt-0.5" />
                <a
                  href={COMPANY_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C59B3F] transition-colors leading-relaxed"
                >
                  65, VSM Garden St, West Saidapet, West Jafferkhanpet, Chennai, Tamil Nadu 600083
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#C59B3F] flex-shrink-0" />
                <a
                  href="tel:+917810045253"
                  className="hover:text-[#C59B3F] transition-colors font-medium"
                >
                  +91 78100 45253
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#C59B3F] flex-shrink-0" />
                <a
                  href="mailto:Vennilaconstruction1995@gmail.com"
                  className="hover:text-[#C59B3F] transition-colors"
                >
                  Vennilaconstruction1995@gmail.com
                </a>
              </div>

              {/* Instagram */}
              <div className="flex items-center space-x-3">
                <Instagram className="w-4 h-4 text-[#C59B3F] flex-shrink-0" />
                <a
                  href="https://instagram.com/vennilaconstruction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C59B3F] transition-colors"
                >
                  @vennilaconstruction
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#C59B3F] block">
                QUICK NAVIGATION
              </h4>
              <div className="w-10 h-0.5 bg-[#C59B3F] mt-2 mb-4" />
            </div>

            <ul className="space-y-3 text-xs sm:text-[13px] text-cream-200/85 font-medium">
              <li>
                <Link href="/" className="flex items-center space-x-2.5 hover:text-[#C59B3F] transition-colors group">
                  <span className="text-[#C59B3F] text-xs font-bold transition-transform duration-300 group-hover:translate-x-1">&gt;</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex items-center space-x-2.5 hover:text-[#C59B3F] transition-colors group">
                  <span className="text-[#C59B3F] text-xs font-bold transition-transform duration-300 group-hover:translate-x-1">&gt;</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/packages" className="flex items-center space-x-2.5 hover:text-[#C59B3F] transition-colors group">
                  <span className="text-[#C59B3F] text-xs font-bold transition-transform duration-300 group-hover:translate-x-1">&gt;</span>
                  <span>Construction Packages</span>
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="flex items-center space-x-2.5 hover:text-[#C59B3F] transition-colors group">
                  <span className="text-[#C59B3F] text-xs font-bold transition-transform duration-300 group-hover:translate-x-1">&gt;</span>
                  <span>Media Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center space-x-2.5 hover:text-[#C59B3F] transition-colors group">
                  <span className="text-[#C59B3F] text-xs font-bold transition-transform duration-300 group-hover:translate-x-1">&gt;</span>
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link href="/#consultation" className="flex items-center space-x-2.5 hover:text-[#C59B3F] transition-colors group">
                  <span className="text-[#C59B3F] text-xs font-bold transition-transform duration-300 group-hover:translate-x-1">&gt;</span>
                  <span>Request Consultation</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Advisory Desk */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#C59B3F] block">
                ADVISORY DESK
              </h4>
              <div className="w-10 h-0.5 bg-[#C59B3F] mt-2 mb-4" />
            </div>

            <p className="text-xs sm:text-[13px] text-cream-200/80 leading-relaxed font-normal">
              Contact our engineering advisory desk to schedule an in-person site review or architectural brief consultation.
            </p>

            <div className="pt-3">
              <Link
                href="/#consultation"
                className="inline-flex items-center justify-center space-x-2.5 w-full bg-gradient-to-r from-[#D9A74A] to-[#C59535] hover:from-[#e3b255] hover:to-[#d09f3e] text-white text-xs uppercase font-bold tracking-wider py-4 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Schedule Site Consultation</span>
                <span className="text-white text-sm font-bold transition-transform duration-300 group-hover:translate-x-1">&gt;</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Signature Sweeping Gold Curve with Center Architectural Emblem Divider */}
        <div className="relative w-full my-6 overflow-hidden">
          <svg
            viewBox="0 0 1200 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto max-h-16"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="goldCurveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C59B3F" stopOpacity="0.1" />
                <stop offset="20%" stopColor="#C59B3F" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#E5BE64" stopOpacity="1" />
                <stop offset="80%" stopColor="#C59B3F" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#C59B3F" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Left Sweeping Gold Curve */}
            <path
              d="M 0 18 Q 300 48 510 48"
              stroke="url(#goldCurveGrad)"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Right Sweeping Gold Curve */}
            <path
              d="M 690 48 Q 900 48 1200 18"
              stroke="url(#goldCurveGrad)"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Central Architectural Skyline / House Emblem */}
            <g stroke="#E5BE64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              {/* Stepped Base Pedestals */}
              <line x1="500" y1="48" x2="700" y2="48" strokeWidth="1.5" />
              <line x1="520" y1="52" x2="680" y2="52" strokeWidth="1.2" strokeOpacity="0.7" />
              <line x1="545" y1="56" x2="655" y2="56" strokeWidth="1" strokeOpacity="0.4" />

              {/* Center Tall Pitched Villa */}
              <path d="M 600 10 L 585 22 L 585 48 L 615 48 L 615 22 Z" />
              <line x1="600" y1="10" x2="600" y2="48" strokeOpacity="0.8" />
              <line x1="592" y1="26" x2="592" y2="48" strokeOpacity="0.6" />
              <line x1="608" y1="26" x2="608" y2="48" strokeOpacity="0.6" />

              {/* Left Modern House with Grid Windows */}
              <path d="M 558 24 L 585 24 L 585 48 L 558 48 Z" />
              <line x1="563" y1="29" x2="580" y2="29" strokeOpacity="0.6" />
              <line x1="563" y1="35" x2="580" y2="35" strokeOpacity="0.6" />
              <line x1="563" y1="41" x2="580" y2="41" strokeOpacity="0.6" />
              <line x1="571" y1="25" x2="571" y2="47" strokeOpacity="0.6" />

              {/* Right Contemporary House with Sloped Canopy & Arch */}
              <path d="M 615 22 L 642 30 L 642 48 L 615 48 Z" />
              <path d="M 624 48 L 624 37 Q 630 33 636 37 L 636 48" strokeOpacity="0.8" />
            </g>
          </svg>
        </div>

        {/* Bottom Bar: Copyright & Social Links */}
        <div className="pt-2 flex flex-col md:flex-row items-center justify-between text-xs text-cream-300/70 gap-6">
          {/* Left: Copyright & Brand Promise */}
          <div className="space-y-1 text-center md:text-left">
            <p className="text-cream-200/75">
              &copy; 2026 Vennila Construction. All Rights Reserved.
            </p>
            <p className="text-[#C59B3F] text-[11px] uppercase tracking-[0.2em] font-semibold">
              BUILDING TRUST | CREATING BETTER TOMORROWS
            </p>
          </div>

          {/* Right: Social Media Circles & Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
            {/* Social Icons */}
            <div className="flex items-center space-x-2.5">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                className="w-8 h-8 rounded-full border border-[#C59B3F]/40 bg-black/40 flex items-center justify-center text-cream-200 hover:text-[#C59B3F] hover:border-[#C59B3F] transition-all hover:scale-105"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
                className="w-8 h-8 rounded-full border border-[#C59B3F]/40 bg-black/40 flex items-center justify-center text-cream-200 hover:text-[#C59B3F] hover:border-[#C59B3F] transition-all hover:scale-105"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917810045253"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                className="w-8 h-8 rounded-full border border-[#C59B3F]/40 bg-black/40 flex items-center justify-center text-cream-200 hover:text-[#C59B3F] hover:border-[#C59B3F] transition-all hover:scale-105"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Separator Pipe */}
            <span className="hidden sm:inline text-white/20">|</span>

            {/* Legal Links */}
            <div className="flex items-center space-x-4 text-cream-300/80 font-medium">
              <Link href="/privacy-policy" className="hover:text-[#C59B3F] transition-colors">
                Privacy Policy
              </Link>
              <span className="text-white/20">|</span>
              <Link href="/terms-and-conditions" className="hover:text-[#C59B3F] transition-colors">
                Terms &amp; Conditions
              </Link>
              <span className="text-white/20">|</span>
              <Link href="/sitemap.xml" className="hover:text-[#C59B3F] transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
