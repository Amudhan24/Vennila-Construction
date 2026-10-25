'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, CheckCircle2, Award, ChevronDown } from 'lucide-react';

const TOTAL_FRAMES = 135;
const IMAGE_WIDTH = 1280;
const IMAGE_HEIGHT = 720;

const getFrameUrl = (index: number): string => {
  const pad = index.toString().padStart(3, '0');
  return `/Image sequence 2/watermark-removed-gemini_generated_video_eef1afcb${pad}.png`;
};

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const currentFrameRef = useRef<number>(0);
  const targetFrameRef = useRef<number>(0);
  const isRenderingRef = useRef<boolean>(false);
  const lastDrawnFrameRef = useRef<number>(-1);

  const [isFirstFrameLoaded, setIsFirstFrameLoaded] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Draw a specific 1280x720 frame to canvas edge-to-edge (cover scaling with zero side gaps)
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Find requested image or fallback to the closest loaded frame to avoid any black screen / flickering
    let img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = imagesRef.current[frameIndex - offset];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          img = prev;
          break;
        }
        const next = imagesRef.current[frameIndex + offset];
        if (next && next.complete && next.naturalWidth > 0) {
          img = next;
          break;
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cw = canvas.width;
    const ch = canvas.height;

    // Full-bleed cover scale: always fills entire screen edge-to-edge without any side gaps or letterboxing
    const scale = Math.max(cw / IMAGE_WIDTH, ch / IMAGE_HEIGHT);

    const sw = Math.round(IMAGE_WIDTH * scale);
    const sh = Math.round(IMAGE_HEIGHT * scale);
    const sx = Math.round((cw - sw) / 2);
    const sy = Math.round((ch - sh) / 2);

    ctx.clearRect(0, 0, cw, ch);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT, sx, sy, sw, sh);

    lastDrawnFrameRef.current = frameIndex;
    currentFrameRef.current = frameIndex;
  }, []);

  // Resize canvas to match display size with DPR for Retina sharpness
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;

    const targetWidth = Math.round(displayWidth * dpr);
    const targetHeight = Math.round(displayHeight * dpr);

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
    }

    drawFrame(currentFrameRef.current);
  }, [drawFrame]);

  // Load a single frame by index
  const loadFrame = useCallback((index: number): Promise<HTMLImageElement> => {
    return new Promise((resolve) => {
      if (imagesRef.current[index] && imagesRef.current[index]?.complete) {
        resolve(imagesRef.current[index]!);
        return;
      }

      const img = new Image();
      img.src = getFrameUrl(index);
      img.onload = () => {
        imagesRef.current[index] = img;
        if (index === 0) {
          setIsFirstFrameLoaded(true);
          drawFrame(0);
        } else if (targetFrameRef.current === index) {
          drawFrame(index);
        }
        resolve(img);
      };
      img.onerror = () => {
        resolve(img);
      };
    });
  }, [drawFrame]);

  // Preloading strategy:
  // 1. Immediately load frame 0 for instant display
  // 2. Load initial burst (frames 1-15)
  // 3. Progressively load remainder in batches during idle
  useEffect(() => {
    let isCancelled = false;

    // Step 1: Load first frame immediately
    loadFrame(0).then(() => {
      if (isCancelled) return;
      resizeCanvas();

      // Step 2: Load initial buffer (frames 1 to 20)
      const initialBatch = Array.from({ length: 20 }, (_, i) => i + 1);
      Promise.all(initialBatch.map((idx) => loadFrame(idx))).then(() => {
        if (isCancelled) return;

        // Step 3: Progressively load remaining frames in chunks
        let nextIndex = 21;
        const loadNextChunk = () => {
          if (isCancelled || nextIndex >= TOTAL_FRAMES) return;
          const chunk = [];
          for (let i = 0; i < 8 && nextIndex < TOTAL_FRAMES; i++, nextIndex++) {
            chunk.push(nextIndex);
          }
          Promise.all(chunk.map((idx) => loadFrame(idx))).then(() => {
            if (!isCancelled && nextIndex < TOTAL_FRAMES) {
              if (typeof window.requestIdleCallback === 'function') {
                window.requestIdleCallback(loadNextChunk);
              } else {
                setTimeout(loadNextChunk, 40);
              }
            }
          });
        };

        if (typeof window.requestIdleCallback === 'function') {
          window.requestIdleCallback(loadNextChunk);
        } else {
          setTimeout(loadNextChunk, 40);
        }
      });
    });

    return () => {
      isCancelled = true;
    };
  }, [loadFrame, resizeCanvas]);

  // Window resize listener
  useEffect(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });
    window.addEventListener('orientationchange', resizeCanvas, { passive: true });
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('orientationchange', resizeCanvas);
    };
  }, [resizeCanvas]);

  // Smooth frame renderer loop driven by scroll
  const renderLoop = useCallback(() => {
    if (!isRenderingRef.current) return;

    const current = currentFrameRef.current;
    const target = targetFrameRef.current;

    if (current !== target) {
      drawFrame(target);
    }

    isRenderingRef.current = false;
  }, [drawFrame]);

  // Scroll listener mapping sticky container progress to frame sequence
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const maxScroll = rect.height - window.innerHeight;

      if (maxScroll <= 0) return;

      // Calculate progress between 0 and 1
      const progress = Math.min(1, Math.max(0, -rect.top / maxScroll));
      setScrollProgress(progress);

      const targetIndex = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(progress * (TOTAL_FRAMES - 1))));
      targetFrameRef.current = targetIndex;

      // If target image is not loaded yet, prioritize its download
      if (!imagesRef.current[targetIndex]) {
        loadFrame(targetIndex);
      }

      if (!isRenderingRef.current) {
        isRenderingRef.current = true;
        requestAnimationFrame(renderLoop);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loadFrame, renderLoop]);

  // Calculate UI text opacity based on scroll progress (visible at top, fades out smoothly as scroll sequence advances)
  const heroUiOpacity = Math.max(0, Math.min(1, 1 - scrollProgress * 3.5));
  const pointerEvents = heroUiOpacity > 0.05 ? 'auto' : 'none';

  return (
    <div ref={containerRef} id="hero-sequence" className="relative w-full h-[350vh] bg-charcoal-950">
      {/* Sticky 100vh full-screen pinned viewport spanning 100% width edge-to-edge */}
      <div className="sticky top-0 h-screen w-full overflow-hidden select-none bg-charcoal-950 flex flex-col justify-between">
        
        {/* Instant Frame 0 fallback image edge-to-edge with object-cover (zero side gaps) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={getFrameUrl(0)}
          alt="Vennila Construction Genesis"
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none z-0 transition-opacity duration-300 ${
            isFirstFrameLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* High-Performance Canvas Renderer filling 100% viewport */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block object-cover z-0"
        />

        {/* Top soft gradient for transparent Navbar legibility */}
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-charcoal-950/85 via-charcoal-950/35 to-transparent z-10 pointer-events-none" />

        {/* Bottom soft gradient (fades out as animation plays for unobstructed view) */}
        <div
          className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-charcoal-950/95 via-charcoal-950/45 to-transparent z-10 pointer-events-none transition-opacity duration-300"
          style={{ opacity: heroUiOpacity }}
        />

        {/* Top Spacer for Fixed Navigation Header */}
        <div className="relative z-20 pt-28 sm:pt-32" />

        {/* Hero Interactive UI Layer (smoothly fades out as user scrolls into the building transformation) */}
        <div
          className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-14 transition-all duration-300"
          style={{
            opacity: heroUiOpacity,
            transform: `translateY(${(1 - heroUiOpacity) * -20}px)`,
            pointerEvents: pointerEvents as React.CSSProperties['pointerEvents'],
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            
            {/* Left Column: Headlines & Actions */}
            <div className="lg:col-span-8 space-y-4 sm:space-y-6 text-left">
              {/* Brand Pill */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center space-x-2.5 bg-charcoal-900/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-lg"
              >
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-white/95">
                  Building Spaces &bull; Creating Legacies
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold text-white leading-[1.12] tracking-tight drop-shadow-2xl max-w-2xl"
              >
                Where Exceptional Design{' '}
                <span className="block mt-1 font-serif italic text-gold-300 drop-shadow">
                  Meets Exceptional Construction.
                </span>
              </motion.h1>

              {/* Supporting Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="text-sm sm:text-base text-cream-100/90 font-normal leading-relaxed max-w-xl drop-shadow"
              >
                From structural steel and concrete framing to turnkey luxury handover, Vennila Construction transforms architectural blueprints into permanent living legacies.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="pt-2 sm:pt-4 flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/#consultation"
                  className="luxury-shimmer inline-flex items-center space-x-3 bg-gold-400 hover:bg-gold-500 text-white font-semibold uppercase tracking-wider text-xs sm:text-sm px-7 py-3.5 sm:py-4 rounded-xl shadow-luxury hover:shadow-luxury-hover transition-all duration-300 transform hover:-translate-y-0.5 group"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform duration-300" />
                </Link>

                <Link
                  href="/gallery"
                  className="inline-flex items-center space-x-2 bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/25 hover:border-gold-400/50 font-semibold uppercase tracking-wider text-xs sm:text-sm px-6 py-3.5 sm:py-4 rounded-xl transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
                >
                  <span>Explore Gallery</span>
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Trust Indicators */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full sm:w-auto grid grid-cols-2 sm:grid-cols-1 gap-2.5 sm:gap-3 bg-charcoal-900/80 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/15 shadow-2xl"
              >
                <div className="flex items-center space-x-3 text-left group">
                  <div className="w-9 h-9 rounded-full bg-gold-400/20 border border-gold-400/40 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-400 group-hover:text-white transition-colors duration-300">
                    <Award className="w-4 h-4 text-gold-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="font-serif text-lg sm:text-xl font-bold text-white block leading-none">15+</span>
                    <span className="text-[10px] uppercase font-semibold text-cream-200/70 tracking-wider">Years Experience</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-left border-l sm:border-l-0 sm:border-t border-white/10 pl-3 sm:pl-0 sm:pt-2.5 group">
                  <div className="w-9 h-9 rounded-full bg-gold-400/20 border border-gold-400/40 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-400 group-hover:text-white transition-colors duration-300">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="font-serif text-lg sm:text-xl font-bold text-white block leading-none">100%</span>
                    <span className="text-[10px] uppercase font-semibold text-cream-200/70 tracking-wider">Quality Assured</span>
                  </div>
                </div>
              </motion.div>

              {/* Scroll Trigger Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="hidden sm:flex items-center space-x-2 text-white/70 text-xs tracking-widest uppercase pt-2"
              >
                <span>Scroll to Build</span>
                <ChevronDown className="w-3.5 h-3.5 text-gold-400 animate-bounce" />
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
