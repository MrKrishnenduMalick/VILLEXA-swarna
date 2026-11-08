import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Star,
  Award,
  Users,
  Sparkles,
  Check,
  Gem,
  Crown,
  HeartHandshake,
  Compass,
  ArrowUpRight
} from 'lucide-react';

export default function AboutPage() {
  const stats = [
    {
      value: '10+',
      label: 'Years of Excellence',
      icon: Award,
    },
    {
      value: '50K+',
      label: 'Delighted Customers',
      icon: Users,
    },
    {
      value: '2,000+',
      label: 'Exclusive Designs',
      icon: Sparkles,
    },
  ];

  const values = [
    {
      title: 'Authentic Purity',
      desc: 'Every gram of gold is strictly BIS 916 hallmarked, and diamonds are internationally certified.',
    },
    {
      title: 'Artisanal Craftsmanship',
      desc: 'Preserving ancient Bengal and Rajasthani karigari through generations of dedicated goldsmiths.',
    },
    {
      title: 'Customer Trust',
      desc: 'Complete transparency in gold rates, stone weights, making charges, and lifetime buyback.',
    },
    {
      title: 'Timeless Designs',
      desc: 'Heirloom creations designed to be cherished across generations without losing their allure.',
    },
  ];

  const expertise = [
    {
      title: 'Bridal Jewellery',
      desc: 'Ornate chokers, mathapattis & grand wedding haar sets.',
      icon: Crown,
    },
    {
      title: 'Fine Jewellery',
      desc: 'Precious diamond collets, Colombian emeralds & sapphires.',
      icon: Gem,
    },
    {
      title: 'Daily Wear',
      desc: 'Lightweight gold bangles, solitaire rings & chains.',
      icon: Sparkles,
    },
    {
      title: 'Custom Designs',
      desc: 'Bespoke commissions sketched and forged to your vision.',
      icon: Compass,
    },
  ];

  return (
    <div className="relative min-h-screen py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      {/* Background ambient lighting */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Section: Our Story & Showroom Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">

        {/* Story & Stats */}
        <div className="lg:col-span-7 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-noir-900/80 border border-gold-400/40 backdrop-blur-md shadow-gold-glow">
            <Star className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
            <span className="text-xs sm:text-sm font-medium tracking-wide text-gold-200">
              Our Heritage
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-light text-white tracking-tight">
            Our <span className="font-normal italic text-gold-gradient">Story</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
            Swarna Varna is a premium jewellery house where traditional artistry meets contemporary elegance. For over a decade, we have been crafting fine jewellery that celebrates life&apos;s most precious moments.
          </p>

          <p className="text-sm text-zinc-400 leading-relaxed">
            Founded with an enduring passion for authentic Indian jewellery arts, our atelier bridges royal ancestral motifs with state-of-the-art precision. From raw 24KT bullion to breathtaking museum-grade bridal necklaces, each creation honors the bond of purity and love.
          </p>

          {/* 3 Stat Cards (Ultra HD Glass) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="p-5 rounded-2xl hd-glass-card text-center relative group hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="glass-glint-top" />
                  <div className="w-10 h-10 mx-auto rounded-full bg-gold-400/20 border border-gold-300/50 flex items-center justify-center mb-3 text-gold-300 group-hover:scale-110 shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-transform">
                    <Icon className="w-5 h-5 text-gold-200" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gold-gradient mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-xs text-zinc-300 font-medium">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Showroom Showcase Imagery (HD Glass Bevel) */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-[32px] overflow-hidden border-2 border-gold-400/50 p-2.5 bg-gradient-to-b from-white/20 via-gold-500/20 to-noir-950/80 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_35px_rgba(212,175,55,0.3)]">
            <div className="glass-glint-top" />
            <div className="relative w-full h-[320px] sm:h-[400px] rounded-[22px] overflow-hidden">
              <Image
                src="/images/showroom.jpg"
                alt="Swarna Varna Flagship Jewellery Showroom"
                fill
                className="object-cover contrast-[1.08] brightness-[1.03]"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-950/90 via-transparent to-transparent opacity-85" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-noir-950/75 backdrop-blur-xl border border-gold-400/40 shadow-[0_8px_32px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.3)]">
                <p className="text-[10px] uppercase tracking-wider text-gold-300 font-bold">
                  Flagship Boutique
                </p>
                <p className="text-sm font-serif font-bold text-white">
                  The Swarna Varna Grand Gallery — Kolkata
                </p>
                <p className="text-xs text-zinc-300 mt-1">
                  Private VIP viewing lounges with dedicated master stylists.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Middle Section: Artisanal Craftsmanship Spotlight */}
      <div className="relative rounded-3xl p-1 bg-gradient-to-r from-gold-500/20 via-gold-400/40 to-gold-500/20 mb-16 shadow-[0_15px_40px_rgba(0,0,0,0.7)]">
        <div className="rounded-[22px] bg-noir-900/90 backdrop-blur-xl border border-gold-400/20 p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-5 relative">
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-gold-400/30 shadow-2xl">
                <Image
                  src="/images/craftsmanship.jpg"
                  alt="Master goldsmith handcrafting gold jewellery"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-950/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-noir-950/80 border border-gold-400/50 text-[10px] uppercase tracking-wider text-gold-300 font-semibold backdrop-blur-md">
                  Generational Artistry
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
                The Karigari Legacy
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Every Curve Shaped by Hand, <br />
                <span className="italic text-gold-gradient">Every Stone Set with Devotion</span>
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                True luxury cannot be mass-produced on an assembly line. At Swarna Varna, our master karigars spend hundreds of meticulous hours carving intricate nakshi motifs, hand-setting syndicate polki with pure 24KT gold foil, and fusing ancient temple traditions with flawless finish.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-gold-300 font-medium">
                  <span className="w-2 h-2 rounded-full bg-gold-400" />
                  <span>Zero Cadmium Soldering</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gold-300 font-medium">
                  <span className="w-2 h-2 rounded-full bg-gold-400" />
                  <span>Laser Purity Verification</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gold-300 font-medium">
                  <span className="w-2 h-2 rounded-full bg-gold-400" />
                  <span>Ethically Sourced Gemstones</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Section: Our Values & Our Expertise */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Our Values Card */}
        <div className="rounded-3xl gold-glass p-6 sm:p-8 relative group hover:border-gold-400/60 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gold-500/20">
            <div className="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-300">
              <HeartHandshake className="w-5 h-5 text-gold-300" />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-gold-gradient">
                Our Values
              </h2>
              <p className="text-xs text-zinc-400">Guiding our craft and customer relationships</p>
            </div>
          </div>

          <div className="space-y-4">
            {values.map((v, idx) => (
              <div key={idx} className="flex items-start gap-3.5 p-3 rounded-xl bg-noir-900/50 border border-gold-500/15">
                <div className="w-5 h-5 rounded-full bg-gold-500/20 border border-gold-400/50 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-gold-300 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-100 mb-0.5">
                    {v.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Expertise Card */}
        <div className="rounded-3xl gold-glass p-6 sm:p-8 relative group hover:border-gold-400/60 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gold-500/20">
            <div className="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-300">
              <Sparkles className="w-5 h-5 text-gold-300" />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-gold-gradient">
                Our Expertise
              </h2>
              <p className="text-xs text-zinc-400">Mastery across varied jewellery disciplines</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {expertise.map((exp, idx) => {
              const Icon = exp.icon;
              return (
                <div key={idx} className="p-4 rounded-xl bg-noir-900/50 border border-gold-500/15 flex flex-col justify-between hover:border-gold-400/40 transition-colors">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-gold-500/15 border border-gold-400/30 flex items-center justify-center text-gold-300 mb-2.5">
                      <Icon className="w-4 h-4 text-gold-300" />
                    </div>
                    <h3 className="text-sm font-semibold text-zinc-100 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-gold-500/20 flex items-center justify-between">
            <span className="text-xs text-zinc-400">
              Looking for bespoke custom jewellery?
            </span>
            <Link
              href="/contact"
              className="text-xs text-gold-300 font-semibold flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>Consult an Artisan</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}

