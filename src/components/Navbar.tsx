'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenAppointment?: () => void;
}

export default function Navbar({ onOpenAppointment }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Collections', href: '/collections' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-gradient-to-b from-white/[0.08] via-noir-950/90 to-noir-950/95 backdrop-blur-2xl border-b border-gold-400/30 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.85)]'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Specular top glint line */}
      <div className="absolute top-0 inset-x-12 h-[1px] bg-gradient-to-r from-transparent via-gold-200 to-transparent pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Lotus Emblem with HD glow */}
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-gold-400/25 rounded-full blur-md group-hover:bg-gold-400/40 transition-all" />
              <svg
                viewBox="0 0 64 64"
                className="w-9 h-9 fill-none text-gold-400 group-hover:text-champagne-200 transition-colors drop-shadow-[0_0_10px_rgba(212,175,55,0.7)]"
              >
                <path
                  d="M32 6 C32 6 22 22 22 36 C22 46 27 52 32 54 C37 52 42 46 42 36 C42 22 32 6 32 6 Z"
                  fill="url(#lotus-gold)"
                  stroke="#FFE29A"
                  strokeWidth="1.2"
                />
                <path
                  d="M26 22 C26 22 10 30 10 42 C10 50 16 54 24 53 C20 45 22 33 26 22 Z"
                  fill="url(#lotus-gold-dark)"
                  stroke="#E5B869"
                  strokeWidth="1.2"
                />
                <path
                  d="M38 22 C38 22 54 30 54 42 C54 50 48 54 40 53 C44 45 42 33 38 22 Z"
                  fill="url(#lotus-gold-dark)"
                  stroke="#E5B869"
                  strokeWidth="1.2"
                />
                <ellipse cx="32" cy="55" rx="14" ry="3" fill="#E5B869" opacity="0.95" />
                <defs>
                  <linearGradient id="lotus-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFF9E6" />
                    <stop offset="45%" stopColor="#E5B869" />
                    <stop offset="100%" stopColor="#8E6F18" />
                  </linearGradient>
                  <linearGradient id="lotus-gold-dark" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F5D27A" />
                    <stop offset="100%" stopColor="#684E14" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Brand Typography */}
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.22em] text-lg sm:text-xl font-bold text-gold-gradient drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]">
                SWARNA VARNA<sup className="text-[10px] ml-0.5 text-gold-300">®</sup>
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.3em] text-gold-300/80 uppercase font-medium">
                Fine Jewellery | Timeless Craftsmanship
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links — Crystal Glass Capsule */}
          <nav className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-white/[0.07] via-noir-900/70 to-white/[0.07] border border-gold-400/35 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.3)]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-gold-400/35 via-gold-500/25 to-gold-400/35 border border-gold-300/80 shadow-[0_0_20px_rgba(212,175,55,0.5),inset_0_1px_1px_rgba(255,255,255,0.5)]'
                      : 'text-zinc-300 hover:text-gold-200 hover:bg-gold-500/10'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenAppointment ? (
              <button
                onClick={onOpenAppointment}
                className="btn-gold px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 shadow-gold-glow hover:scale-105 active:scale-95 transition-all"
              >
                <span>Book an Appointment</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            ) : (
              <Link
                href="/contact"
                className="btn-gold px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 shadow-gold-glow hover:scale-105 active:scale-95 transition-all"
              >
                <span>Book an Appointment</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </Link>
            )}
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-gold-300 hover:text-white bg-noir-850 border border-gold-500/30"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[68px] bg-noir-950/95 backdrop-blur-2xl border-b border-gold-500/30 px-6 py-6 shadow-2xl transition-all">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between ${
                    isActive
                      ? 'text-white bg-gold-500/25 border border-gold-400/70 shadow-gold-glow'
                      : 'text-zinc-300 hover:text-gold-200 hover:bg-gold-500/10'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-gold-400" />}
                </Link>
              );
            })}
            <div className="pt-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-gold w-full py-3 rounded-xl text-center text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2"
              >
                <span>Book an Appointment</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
