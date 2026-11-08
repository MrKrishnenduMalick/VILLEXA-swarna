import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Award, Gem, Truck, Heart, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-gold-500/20 bg-noir-950/90 pt-16 pb-10 overflow-hidden">
      {/* Golden top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent shadow-[0_0_15px_rgba(212,175,55,0.8)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-20 bg-gold-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gold-500/15">
          
          {/* Brand Intro */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif tracking-[0.2em] text-xl font-bold text-gold-gradient">
                SWARNA VARNA<sup className="text-[10px] ml-0.5 text-gold-400">®</sup>
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Where heritage meets contemporary grandeur. For over a decade, Swarna Varna has celebrated India&apos;s finest jewelry traditions through 22KT certified gold, pristine uncut polki, and solitaires.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-gold-300">
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              <span>100% BIS Hallmarked &amp; IGI Certified</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="font-serif text-sm uppercase tracking-widest text-gold-300 font-semibold mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <Link href="/" className="hover:text-gold-200 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500/50">›</span> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-200 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500/50">›</span> About Our Heritage
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-gold-200 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500/50">›</span> Jewellery Collections
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-200 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500/50">›</span> Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Signature Collections */}
          <div>
            <h3 className="font-serif text-sm uppercase tracking-widest text-gold-300 font-semibold mb-4">
              Collections
            </h3>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <Link href="/collections" className="hover:text-gold-200 transition-colors">
                  Traditional Temple Gold
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-gold-200 transition-colors">
                  Solitaire Diamond Necklaces
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-gold-200 transition-colors">
                  Royal Bridal Chokers
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-gold-200 transition-colors">
                  Syndicate Polki &amp; Kundan
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-gold-200 transition-colors">
                  Daily Wear Bangles &amp; Kadas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-serif text-sm uppercase tracking-widest text-gold-300 font-semibold mb-4">
              Flagship Boutique
            </h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Plot No. 12, Newtown Business Park, Kolkata – 700156, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>+91 33 4567 8900 / +91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span>care@swarnavarna.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} Swarna Varna Fine Jewellery Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6 text-zinc-400">
            <span>BIS Registration: HM-748921</span>
            <span>•</span>
            <span>GIA Certified Diamonds</span>
            <span>•</span>
            <span className="text-gold-400">Pan-India Insured Transit</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

