import React from 'react';
import {
  Star,
  Award,
  Gem,
  Compass,
  Gift,
  Truck,
  Sparkles
} from 'lucide-react';
import CollectionsCarousel3D from '@/components/CollectionsCarousel3D';
import GlassRibbon, { RibbonItem } from '@/components/GlassRibbon';

const collectionsRibbonItems: RibbonItem[] = [
  { icon: Award, label: 'BIS Hallmarked', sublabel: '100% Certified 916 Gold' },
  { icon: Gem, label: 'Premium Gemstones', sublabel: 'GIA & IGI Verified' },
  { icon: Compass, label: 'Custom Designing', sublabel: 'Bespoke Karigari' },
  { icon: Gift, label: 'Wedding Packages', sublabel: 'Bridal Trousseau Curations' },
  { icon: Truck, label: 'Pan India Delivery', sublabel: 'Tamper-proof & Insured' },
];

export default function CollectionsPage() {
  return (
    <div className="relative min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header Area */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-4 z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-noir-900/80 border border-gold-400/40 backdrop-blur-md shadow-gold-glow">
          <Star className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
          <span className="text-xs sm:text-sm font-medium tracking-wide text-gold-200">
            Our Collections
          </span>
        </div>

        {/* Signature Headline */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
          Explore Our{' '}
          <span className="font-normal italic text-gold-gradient drop-shadow-[0_4px_25px_rgba(212,175,55,0.45)]">
            Collections
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
          A stunning range of handcrafted jewellery for every celebration, from grand weddings to everyday elegance.
        </p>

      </div>

      {/* Flagship Interactive 3D Curved Carousel */}
      <div className="relative z-20 my-2">
        <CollectionsCarousel3D />
      </div>

      {/* Bottom Feature Ribbon */}
      <div className="relative z-20 pt-8 pb-6">
        <GlassRibbon items={collectionsRibbonItems} />
      </div>

    </div>
  );
}

