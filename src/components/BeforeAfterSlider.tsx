'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  return (
    <section className="py-24 bg-cream-100 relative border-t border-cream-400/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400 block">
            BEFORE & AFTER
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight">
            TRANSFORMING SPACES
          </h2>
          <p className="text-sm sm:text-base text-charcoal-800/80">
            Slide left and right to compare raw structural state vs. completed luxury interior execution.
          </p>
          <div className="w-20 h-1 bg-gold-gradient mx-auto rounded-full mt-4" />
        </div>

        {/* Interactive Image Split Container */}
        <div className="max-w-4xl mx-auto bg-white p-3 rounded-2xl border border-cream-400 shadow-luxury">
          <div
            className="relative h-[360px] sm:h-[480px] w-full rounded-xl overflow-hidden select-none cursor-ew-resize"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Background Layer) */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/2.jpeg"
                alt="After Transformation - Luxury Fluted Glass Interior Wardrobe by Vennila Construction"
                fill
                className="object-cover"
              />
              <span className="absolute top-4 right-4 bg-gold-400 text-white font-semibold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded shadow">
                AFTER (Completed Transformation)
              </span>
            </div>

            {/* Before Image (Clipped Overlay Layer) */}
            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="relative w-full h-full min-w-[100%]">
                <Image
                  src="/images/20.jpeg"
                  alt="Before Transformation - Existing Structural Site Work"
                  fill
                  className="object-cover filter contrast-125 grayscale"
                />
                <span className="absolute top-4 left-4 bg-charcoal-900 text-white font-semibold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded shadow">
                  BEFORE (Existing State)
                </span>
              </div>
            </div>

            {/* Vertical Divider Drag Bar */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-gold-400 cursor-ew-resize shadow-2xl"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-gold-400 border-2 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold">
                ↔
              </div>
            </div>
          </div>

          <div className="p-4 text-center text-xs font-semibold uppercase tracking-wider text-charcoal-800/70">
            Drag divider to view before & after transformation detail
          </div>
        </div>
      </div>
    </section>
  );
};
