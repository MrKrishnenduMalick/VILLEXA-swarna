import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface RibbonItem {
  icon: LucideIcon;
  label: string;
  sublabel?: string;
}

interface GlassRibbonProps {
  items: RibbonItem[];
  className?: string;
}

export default function GlassRibbon({ items, className = '' }: GlassRibbonProps) {
  return (
    <div className={`w-full max-w-6xl mx-auto ${className}`}>
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-gold-400/20 via-gold-300/60 to-gold-400/20 shadow-[0_12px_40px_rgba(0,0,0,0.7),0_0_25px_rgba(212,175,55,0.2)]">
        
        {/* Specular Glint Top Line */}
        <div className="absolute top-0 inset-x-8 h-[1.5px] bg-gradient-to-r from-transparent via-gold-200 to-transparent z-10" />

        {/* Smoked Glass Body */}
        <div className="relative rounded-[15px] bg-gradient-to-r from-white/[0.05] via-amber-950/25 to-white/[0.05] backdrop-blur-2xl border border-gold-400/30 py-4 sm:py-5 px-3 sm:px-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.35)]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-2 divide-y sm:divide-y-0 sm:divide-x divide-gold-400/20">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center text-center px-2 py-2 group cursor-default transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-11 h-11 rounded-full flex items-center justify-center mb-2 bg-gradient-to-b from-white/[0.1] to-gold-500/15 border border-gold-400/40 group-hover:border-gold-300 group-hover:bg-gold-500/30 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.6),inset_0_1px_1px_rgba(255,255,255,0.5)] transition-all">
                    <Icon className="w-5 h-5 text-gold-300 group-hover:text-champagne-100 transition-colors" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold tracking-wide text-zinc-100 group-hover:text-gold-200 transition-colors">
                    {item.label}
                  </span>
                  {item.sublabel && (
                    <span className="text-[10px] text-zinc-400 mt-0.5 font-light">
                      {item.sublabel}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
