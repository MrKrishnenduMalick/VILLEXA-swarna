'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, ShieldCheck, Gem } from 'lucide-react';
import { COLLECTIONS_DATA, CollectionItem } from '@/data/collections';

interface CollectionsCarousel3DProps {
  onSelectCollection?: (item: CollectionItem) => void;
}

export default function CollectionsCarousel3D({ onSelectCollection }: CollectionsCarousel3DProps) {
  // Bridal Collection (index 2) is highlighted in the center initially
  const [activeIndex, setActiveIndex] = useState(2);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchDeltaX, setTouchDeltaX] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200);
  const [selectedDetail, setSelectedDetail] = useState<CollectionItem | null>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const total = COLLECTIONS_DATA.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchDeltaX(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX !== null) {
      setTouchDeltaX(e.touches[0].clientX - touchStartX);
    }
  };

  const handleTouchEnd = () => {
    if (touchDeltaX > 50) {
      prevSlide();
    } else if (touchDeltaX < -50) {
      nextSlide();
    }
    setTouchStartX(null);
    setTouchDeltaX(0);
  };

  // Responsive geometry calculations
  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  const getCardStyle = (index: number) => {
    let offset = (index - activeIndex) % total;
    if (offset > 2) offset -= total;
    if (offset < -2) offset += total;

    // Responsive geometric spacing
    const stepX = isMobile ? 88 : isTablet ? 155 : 235;
    const stepZ = isMobile ? 38 : 55;
    const stepRotate = isMobile ? 22 : 28;

    let translateX = offset * stepX;
    let translateZ = -Math.abs(offset) * stepZ;
    let rotateY = -offset * stepRotate;
    let scale = 1 - Math.abs(offset) * (isMobile ? 0.14 : 0.1);
    let opacity = 1 - Math.abs(offset) * (isMobile ? 0.2 : 0.14);
    let zIndex = 30 - Math.abs(offset) * 10;

    // Center card prominence
    if (offset === 0) {
      translateZ = isMobile ? 90 : 140;
      scale = isMobile ? 1.04 : 1.12;
      opacity = 1;
      zIndex = 35;
    }

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      zIndex,
      opacity,
      transition: 'all 0.65s cubic-bezier(0.2, 0.9, 0.3, 1)',
    };
  };

  const activeItem = COLLECTIONS_DATA[activeIndex];

  return (
    <div className="relative w-full max-w-6xl mx-auto py-12 px-2 sm:px-6 select-none overflow-hidden">
      
      {/* 3D Carousel Stage */}
      <div
        className="relative h-[490px] sm:h-[550px] md:h-[610px] flex items-center justify-center perspective-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >

        {/* ============================================================== */}
        {/* ULTRA HD CIRCULAR ILLUMINATED GOLDEN PLATFORM                  */}
        {/* ============================================================== */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 w-[360px] sm:w-[680px] md:w-[920px] h-[140px] sm:h-[200px] pointer-events-none">
          {/* Layer 1: Ambient Molten Gold Flare */}
          <div className="absolute inset-0 rounded-[50%] bg-radial-gradient from-amber-400/40 via-gold-500/25 to-transparent blur-3xl opacity-85" />
          
          {/* Layer 2: Glowing Outer Golden Pedestal Bevel */}
          <div className="absolute inset-1 sm:inset-3 rounded-[50%] border-2 border-gold-300/80 shadow-[0_0_40px_rgba(245,210,120,0.8),0_0_80px_rgba(212,175,55,0.4)] bg-gradient-to-b from-noir-950/40 via-noir-900/80 to-noir-950" />
          
          {/* Layer 3: Concentric High-Gloss Gold Reflection Ring */}
          <div className="absolute inset-6 sm:inset-10 rounded-[50%] border border-gold-400/60 shadow-[inset_0_0_30px_rgba(229,184,105,0.45)] bg-gradient-to-t from-gold-500/20 via-gold-400/10 to-transparent" />
          
          {/* Layer 4: Stage Center High-Intensity Spotlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-80 md:w-96 h-16 sm:h-28 rounded-[50%] bg-gold-300/35 blur-2xl" />

          {/* Layer 5: Radial Grid Stage Pattern */}
          <div className="absolute inset-10 sm:inset-14 rounded-[50%] border border-gold-400/30 opacity-70" />
        </div>

        {/* Left Navigation Arrow (HD Frosted Glass) */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-noir-900/60 hover:bg-gold-500/30 text-gold-200 hover:text-white border border-gold-400/50 hover:border-gold-300 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.4)] flex items-center justify-center transition-all duration-300 active:scale-90"
          aria-label="Previous Collection"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2.2]" />
        </button>

        {/* Right Navigation Arrow (HD Frosted Glass) */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-noir-900/60 hover:bg-gold-500/30 text-gold-200 hover:text-white border border-gold-400/50 hover:border-gold-300 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.4)] flex items-center justify-center transition-all duration-300 active:scale-90"
          aria-label="Next Collection"
        >
          <ChevronRight className="w-6 h-6 stroke-[2.2]" />
        </button>

        {/* ============================================================== */}
        {/* 3D CARDS TRACK WITH TRUE HD GLASSMORPHISM                      */}
        {/* ============================================================== */}
        <div className="relative w-full h-full flex items-center justify-center preserve-3d">
          {COLLECTIONS_DATA.map((item, index) => {
            const isCenter = index === activeIndex;
            const style = getCardStyle(index);

            return (
              <div
                key={item.id}
                onClick={() => {
                  if (!isCenter) {
                    setActiveIndex(index);
                  } else {
                    setSelectedDetail(item);
                    if (onSelectCollection) onSelectCollection(item);
                  }
                }}
                style={style}
                className={`absolute cursor-pointer will-change-transform ${
                  isCenter ? 'cursor-zoom-in' : 'cursor-pointer'
                }`}
              >
                {/* Individual Card Container with Glass Texture */}
                <div
                  className={`relative w-[190px] sm:w-[240px] md:w-[275px] h-[290px] sm:h-[365px] md:h-[405px] rounded-[24px] overflow-hidden transition-all duration-500 ${
                    isCenter ? 'hd-glass-card-center' : 'hd-glass-card'
                  }`}
                >
                  {/* Diagonal Glass Sheen Reflection */}
                  <div className="glass-sheen" />

                  {/* Top Glint Edge Highlight */}
                  <div className="glass-glint-top" />

                  {/* Card Image Area with Crisp HD Luxury Lighting */}
                  <div className="relative w-full h-[73%] sm:h-[76%] overflow-hidden bg-noir-950">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className={`object-cover object-center transition-all duration-700 ${
                        isCenter
                          ? 'scale-105 contrast-[1.1] brightness-[1.06]'
                          : 'scale-100 contrast-[1.05] brightness-[0.98]'
                      }`}
                      sizes="(max-width: 640px) 190px, (max-width: 1024px) 240px, 275px"
                      priority={isCenter}
                    />

                    {/* Subtle bottom edge blend into frosted label */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-noir-950/70 to-transparent pointer-events-none" />

                    {/* Active Center Card VIP Ribbon */}
                    {isCenter && (
                      <div className="absolute top-3.5 left-3.5 z-30 px-3 py-1 rounded-full bg-noir-900/80 border border-gold-300/80 backdrop-blur-xl flex items-center gap-1.5 shadow-[0_0_15px_rgba(212,175,55,0.6)]">
                        <Sparkles className="w-3.5 h-3.5 text-gold-300" />
                        <span className="text-[10px] font-bold text-gold-100 uppercase tracking-widest">
                          Signature
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Label Area — Integrated Translucent Frosted Glass */}
                  <div className="relative h-[27%] sm:h-[24%] px-3.5 sm:px-4 py-2.5 sm:py-3 flex flex-col justify-center items-center text-center bg-white/[0.04] backdrop-blur-md border-t border-gold-400/25">
                    <h3
                      className={`font-serif tracking-wide transition-colors ${
                        isCenter
                          ? 'text-sm sm:text-base font-bold text-gold-gradient drop-shadow-[0_2px_10px_rgba(212,175,55,0.6)]'
                          : 'text-xs sm:text-sm font-semibold text-zinc-200'
                      }`}
                    >
                      {item.title}
                    </h3>

                    <span className="text-[10px] sm:text-[11px] text-gold-400 font-medium mt-0.5 tracking-wider">
                      {item.category}
                    </span>

                    {/* Subtle click indicator for active card */}
                    {isCenter && (
                      <span className="text-[9px] text-zinc-300 mt-1 flex items-center gap-1 underline underline-offset-2 decoration-gold-400/50 hover:text-gold-200">
                        View Craftsmanship Details
                      </span>
                    )}
                  </div>
                </div>

                {/* Specular Ground Mirror Reflection Under Card */}
                <div
                  className={`w-full h-12 mt-2 rounded-full blur-md transition-opacity duration-500 pointer-events-none ${
                    isCenter
                      ? 'bg-gradient-to-b from-gold-400/35 via-gold-500/20 to-transparent opacity-100'
                      : 'bg-gold-500/10 opacity-30'
                  }`}
                />
              </div>
            );
          })}
        </div>

      </div>

      {/* Pagination Indicator Dots */}
      <div className="flex items-center justify-center gap-2.5 mt-2">
        {COLLECTIONS_DATA.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                isActive
                  ? 'w-8 h-2.5 bg-gradient-to-r from-gold-200 via-gold-400 to-gold-500 shadow-[0_0_15px_rgba(212,175,55,0.9)]'
                  : 'w-2.5 h-2.5 bg-zinc-700/80 hover:bg-gold-400/60'
              }`}
              aria-label={`Go to ${item.title}`}
            />
          );
        })}
      </div>

      {/* Active Card Quick Summary Drawer (HD Glass) */}
      <div className="mt-8 max-w-2xl mx-auto p-5 rounded-2xl gold-glass text-center transition-all duration-500 border border-gold-400/35 shadow-[0_10px_35px_rgba(0,0,0,0.7)]">
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-gold-200 mb-2 font-medium">
          <span className="px-3 py-1 rounded-full bg-gold-500/20 border border-gold-400/40 backdrop-blur-md">
            {activeItem.metal}
          </span>
          <span>•</span>
          <span className="px-3 py-1 rounded-full bg-gold-500/20 border border-gold-400/40 backdrop-blur-md">
            {activeItem.purity}
          </span>
          <span>•</span>
          <span className="px-3 py-1 rounded-full bg-gold-500/20 border border-gold-400/40 backdrop-blur-md">
            {activeItem.gemstone}
          </span>
        </div>
        <p className="text-zinc-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
          {activeItem.description}
        </p>
      </div>

      {/* Detailed Modal when active card is clicked */}
      {selectedDetail && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-xl p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedDetail(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl p-6 sm:p-8 bg-noir-900/90 border-2 border-gold-400/60 shadow-[0_0_50px_rgba(212,175,55,0.4),0_25px_60px_rgba(0,0,0,0.9)] gold-glass overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top golden glint line */}
            <div className="glass-glint-top" />

            <div className="flex items-start justify-between border-b border-gold-500/20 pb-4 mb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
                  {selectedDetail.category}
                </span>
                <h3 className="font-serif text-2xl font-bold text-gold-gradient">
                  {selectedDetail.title}
                </h3>
                <p className="text-xs text-zinc-400 italic mt-0.5">
                  &ldquo;{selectedDetail.tagline}&rdquo;
                </p>
              </div>
              <button
                onClick={() => setSelectedDetail(null)}
                className="text-zinc-400 hover:text-white p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-5 border border-gold-400/40 shadow-inner">
              <Image
                src={selectedDetail.image}
                alt={selectedDetail.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-950/80 via-transparent to-transparent" />
            </div>

            <div className="space-y-3 text-sm text-zinc-300 mb-6">
              <div className="flex justify-between py-1.5 border-b border-gold-500/10">
                <span className="text-zinc-400">Metal Specifications</span>
                <span className="text-gold-200 font-medium">{selectedDetail.metal}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-gold-500/10">
                <span className="text-zinc-400">Hallmark &amp; Certification</span>
                <span className="text-gold-200 font-medium">{selectedDetail.purity}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-gold-500/10">
                <span className="text-zinc-400">Gemstones Used</span>
                <span className="text-gold-200 font-medium">{selectedDetail.gemstone}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-gold-500/10">
                <span className="text-zinc-400">Estimated Price Range</span>
                <span className="text-gold-300 font-semibold">Starting from {selectedDetail.priceStarting}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setSelectedDetail(null);
                  window.location.href = '/contact';
                }}
                className="btn-gold flex-1 py-3.5 rounded-xl text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 shadow-gold-glow"
              >
                <span>Book Boutique Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
