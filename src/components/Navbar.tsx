'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === '/') {
        const heroEl = document.getElementById('hero-sequence');
        if (heroEl) {
          const rect = heroEl.getBoundingClientRect();
          // Header becomes white only once the entire hero sequence is over and scrolled past
          setIsScrolled(rect.bottom <= 80);
        } else {
          setIsScrolled(window.scrollY > window.innerHeight * 2.5);
        }
      } else {
        setIsScrolled(window.scrollY > 40);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Packages', href: '/packages' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const isHome = pathname === '/';
  const isTransparent = isHome && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-header py-3 shadow-luxury'
            : isHome
            ? 'bg-transparent py-5 border-b border-white/10'
            : 'bg-cream-100/90 backdrop-blur-md py-4 border-b border-cream-400/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 overflow-hidden rounded-md border border-gold-400/40 shadow-sm bg-white p-1">
                <Image
                  src={COMPANY_INFO.logo}
                  alt={COMPANY_INFO.name}
                  width={48}
                  height={48}
                  className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-serif font-bold text-lg sm:text-xl tracking-wider transition-colors duration-300 ${
                    isTransparent ? 'text-white' : 'text-charcoal-900'
                  }`}
                >
                  VENNILA
                </span>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
                  CONSTRUCTION
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-xs xl:text-sm uppercase tracking-wider font-medium transition-colors duration-300 ${
                      isActive
                        ? 'text-gold-400 font-semibold'
                        : isTransparent
                        ? 'text-white/90 hover:text-gold-300 drop-shadow-sm'
                        : 'text-charcoal-800 hover:text-gold-400'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gold-400 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons (Pill design matching reference screenshot) */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className={`inline-flex items-center space-x-2 text-xs font-semibold px-4 py-2.5 rounded-full transition-all duration-300 shadow-sm ${
                  isTransparent
                    ? 'bg-white text-charcoal-900 hover:bg-gold-400 hover:text-white'
                    : 'bg-white/80 hover:bg-white text-charcoal-900 border border-cream-400 hover:border-gold-400'
                }`}
              >
                <Phone className="w-3.5 h-3.5 text-gold-500" />
                <span>Call Now</span>
              </a>

              <Link
                href="/#consultation"
                className="luxury-shimmer inline-flex items-center space-x-2 bg-charcoal-900/90 hover:bg-gold-500 text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md hover:shadow-luxury transition-all duration-300 transform hover:-translate-y-0.5 border border-white/20"
              >
                <span>Free Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-md focus:outline-none transition-colors ${
                isTransparent ? 'text-white hover:text-gold-300' : 'text-charcoal-900 hover:text-gold-400'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-cream-100/98 backdrop-blur-xl lg:hidden flex flex-col pt-24 pb-8 px-6 overflow-y-auto"
          >
            <div className="flex justify-between items-center pb-4 border-b border-cream-400">
              <span className="font-serif font-bold text-xl text-charcoal-900">Menu</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-charcoal-900 hover:text-gold-400"
                aria-label="Close menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            <div className="flex flex-col space-y-4 my-auto pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl sm:text-2xl font-serif text-charcoal-900 hover:text-gold-400 border-b border-cream-400/40 pb-3 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-5 h-5 text-gold-400 opacity-60" />
                </Link>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              <Link
                href="/#consultation"
                onClick={() => setMobileMenuOpen(false)}
                className="luxury-shimmer w-full text-center block bg-gold-400 hover:bg-gold-500 text-white font-semibold uppercase tracking-wider py-4 rounded-full shadow-md text-sm"
              >
                Get a Free Consultation
              </Link>

              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full text-center flex items-center justify-center space-x-2 border border-charcoal-900 text-charcoal-900 font-semibold py-3.5 rounded-full text-sm"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>Call Now: {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
