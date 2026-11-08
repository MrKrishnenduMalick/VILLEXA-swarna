import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  ArrowUpRight,
  Play,
  Gem,
  Award,
  Hammer,
  Flower2,
  ShieldCheck,
  Star
} from 'lucide-react';
import GlassRibbon, { RibbonItem } from '@/components/GlassRibbon';

const homeRibbonItems: RibbonItem[] = [
  { icon: Gem, label: 'Exclusive Designs', sublabel: 'One-of-a-kind creations' },
  { icon: Award, label: 'Certified Purity', sublabel: 'BIS 916 Hallmark' },
  { icon: Hammer, label: 'Handcrafted Excellence', sublabel: 'Generational Karigari' },
  { icon: Flower2, label: 'Traditional & Modern', sublabel: 'Time-honored fusion' },
  { icon: ShieldCheck, label: 'Secure Delivery', sublabel: '100% Insured transit' },
];

export default function HomePage() {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between overflow-hidden">
      
      {/* Background Cinematic Atmosphere & Light Effects */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Golden Wave Lines Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none">
          <path
            d="M-100 450 C300 300 600 650 1100 400 C1350 280 1550 480 1700 420"
            stroke="url(#gold-flow-1)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          <path
            d="M-50 520 C350 380 650 720 1150 480 C1400 360 1600 550 1750 500"
            stroke="url(#gold-flow-2)"
            strokeWidth="2"
            opacity="0.6"
          />
          <defs>
            <linearGradient id="gold-flow-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8E6F18" stopOpacity="0" />
              <stop offset="50%" stopColor="#E5B869" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#AA771C" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gold-flow-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#AA771C" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFE599" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#5C3F13" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 w-full flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Column: Brand Story & CTA */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 z-10">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-noir-900/80 border border-gold-400/40 backdrop-blur-md shadow-gold-glow">
              <Star className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
              <span className="text-xs sm:text-sm font-medium tracking-wide text-gold-200">
                Luxury Jewellery Boutique
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.1]">
              Timeless <br />
              Jewels for <br />
              <span className="italic font-normal text-gold-gradient drop-shadow-[0_4px_25px_rgba(212,175,55,0.4)]">
                Every Story
              </span>
            </h1>

            {/* Brand Intro Copy */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-xl font-light leading-relaxed">
              Exquisite jewellery that celebrates tradition, craftsmanship and the beauty of every occasion. Handcrafted by master artisans with pure 22KT gold and eternal gemstones.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/collections"
                className="btn-gold px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase flex items-center gap-2 group shadow-gold-glow-lg transition-transform hover:scale-105"
              >
                <span>Explore Collections</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/about"
                className="btn-glass px-7 py-3.5 rounded-full text-sm font-medium tracking-wider flex items-center gap-2.5 transition-all"
              >
                <div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center border border-gold-400/30">
                  <Play className="w-2.5 h-2.5 text-gold-300 fill-gold-300 ml-0.5" />
                </div>
                <span>Our Heritage</span>
              </Link>
            </div>

            {/* Trust Quote / Footnote */}
            <div className="pt-2 flex items-center gap-4 text-xs text-zinc-400">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
                ))}
              </div>
              <span>Trusted by 50,000+ discerning families across India &amp; worldwide</span>
            </div>

          </div>

          {/* Right Column: Cinematic Model Portrait */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Glowing circular backdrop halo behind model */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] rounded-full bg-gradient-to-tr from-gold-500/30 via-amber-600/20 to-transparent blur-3xl pointer-events-none" />
            
            {/* Model Frame with High-Definition Glass Bevel & Specular Glint */}
            <div className="relative w-[300px] sm:w-[400px] md:w-[440px] h-[380px] sm:h-[500px] md:h-[540px] rounded-[36px] p-2.5 bg-gradient-to-b from-white/20 via-gold-500/25 to-noir-950/80 backdrop-blur-2xl border-2 border-gold-400/50 shadow-[0_30px_70px_rgba(0,0,0,0.95),0_0_50px_rgba(212,175,55,0.35)]">
              {/* Specular Glint Line */}
              <div className="absolute top-0 inset-x-12 h-[2px] bg-gradient-to-r from-transparent via-gold-200 to-transparent z-20" />
              
              <div className="relative w-full h-full rounded-[28px] overflow-hidden">
                <Image
                  src="/images/hero-model.jpg"
                  alt="South Asian luxury model wearing Swarna Varna bridal gold jewellery"
                  fill
                  priority
                  className="object-cover object-top scale-100 hover:scale-105 transition-transform duration-1000 contrast-[1.08] brightness-[1.02]"
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 440px"
                />
                
                {/* Cinematic Golden Lighting Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-noir-950/90 via-transparent to-transparent opacity-85" />
                <div className="absolute inset-0 bg-gradient-to-r from-gold-500/15 via-transparent to-noir-950/40 mix-blend-overlay" />

                {/* Floating Glass Micro Badge on Image */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-noir-900/70 backdrop-blur-xl border border-gold-400/40 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.3)]">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gold-300 font-bold">
                      Featured Masterpiece
                    </p>
                    <p className="text-xs sm:text-sm font-serif font-bold text-white">
                      The Rajwada Bridal Haar &amp; Jhumkas
                    </p>
                  </div>
                  <Link
                    href="/collections"
                    className="p-2 rounded-full bg-gold-400/20 hover:bg-gold-400/40 border border-gold-300/50 text-gold-200 transition-all shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                    aria-label="View collection"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Feature Ribbon */}
      <div className="relative z-20 pb-8 sm:pb-12 px-4 sm:px-6">
        <GlassRibbon items={homeRibbonItems} />
      </div>

    </div>
  );
}

