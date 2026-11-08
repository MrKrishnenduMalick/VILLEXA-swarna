'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  Sparkles,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Bridal Jewellery Consultation',
    datetime: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name';
    if (!formData.email.trim() || !formData.email.includes('@'))
      errs.email = 'Please provide a valid email address';
    if (!formData.phone.trim() || formData.phone.length < 8)
      errs.phone = 'Please enter a valid contact/WhatsApp number';
    if (!formData.service) errs.service = 'Please select the consultation service';
    if (!formData.datetime) errs.datetime = 'Please choose your preferred date and time';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const generatedId = `SV-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(generatedId);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Bridal Jewellery Consultation',
      datetime: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <div className="relative min-h-screen py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Main Grid: Info + Form + Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Brand Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-noir-900/80 border border-gold-400/40 backdrop-blur-md shadow-gold-glow">
            <Star className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
            <span className="text-xs sm:text-sm font-medium tracking-wide text-gold-200">
              Get in Touch
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.15]">
            Let&apos;s Create <br />
            <span className="font-normal italic text-gold-gradient drop-shadow-[0_4px_25px_rgba(212,175,55,0.4)]">
              Your Perfect Jewel
            </span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
            Have a design in mind or need a personalized consultation? We&apos;re here to help you find the jewellery that&apos;s truly yours.
          </p>

          {/* Contact Details Cards */}
          <div className="space-y-3.5 pt-2">
            
            {/* Call Us */}
            <div className="p-4 rounded-2xl gold-glass flex items-start gap-4 hover:border-gold-400/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-400/30 flex items-center justify-center text-gold-300 shrink-0 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-1">
                  Call Us
                </p>
                <p className="text-sm text-zinc-200 font-medium">+91 33 4567 8900</p>
                <p className="text-sm text-zinc-300 font-medium">+91 98765 43210 (WhatsApp VIP)</p>
              </div>
            </div>

            {/* Email Us */}
            <div className="p-4 rounded-2xl gold-glass flex items-start gap-4 hover:border-gold-400/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-400/30 flex items-center justify-center text-gold-300 shrink-0 mt-0.5">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-1">
                  Email Us
                </p>
                <p className="text-sm text-zinc-200 font-medium">hello@swarnavarna.com</p>
                <p className="text-sm text-zinc-300 font-medium">care@swarnavarna.com</p>
              </div>
            </div>

            {/* Visit Our Boutique */}
            <div className="p-4 rounded-2xl gold-glass flex items-start gap-4 hover:border-gold-400/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-400/30 flex items-center justify-center text-gold-300 shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-1">
                  Visit Our Boutique
                </p>
                <p className="text-sm text-zinc-200 font-medium leading-snug">
                  Plot No. 12, Newtown Business Park, <br />
                  Kolkata – 700156, India
                </p>
                <span className="text-[11px] text-gold-400/80 mt-1 inline-block">
                  Valet parking available &amp; Private VIP elevator access
                </span>
              </div>
            </div>

            {/* Store Hours */}
            <div className="p-4 rounded-2xl gold-glass flex items-start gap-4 hover:border-gold-400/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-400/30 flex items-center justify-center text-gold-300 shrink-0 mt-0.5">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-1">
                  Store Hours
                </p>
                <p className="text-sm text-zinc-200 font-medium">
                  Mon – Sat: 10:00 AM – 8:00 PM
                </p>
                <p className="text-sm text-zinc-300 font-medium">
                  Sun: 11:00 AM – 6:00 PM
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Right Column: Appointment Form + Background Showroom Mannequin */}
        <div className="lg:col-span-7 relative">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            {/* The Form Card (Ultra HD Smoked Glass) */}
            <div className="md:col-span-7 rounded-[28px] hd-glass-card p-6 sm:p-8 relative z-20 shadow-2xl border-2 border-gold-400/50 overflow-hidden">
              <div className="glass-glint-top" />
              <div className="glass-sheen" />

              {!submitted ? (
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <Calendar className="w-5 h-5 text-gold-400" />
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-gold-gradient">
                      Book an Appointment
                    </h2>
                  </div>
                  <p className="text-xs text-zinc-400 mb-6">
                    Schedule a private in-store preview with our chief gemologist.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Your Name */}
                    <div>
                      <label className="block text-xs font-medium text-gold-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Radhika Roy"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-noir-950/80 border border-gold-500/30 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-gold-400 transition-colors"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-[11px] mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-medium text-gold-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="radhika@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-noir-950/80 border border-gold-500/30 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-gold-400 transition-colors"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-[11px] mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone / WhatsApp */}
                    <div>
                      <label className="block text-xs font-medium text-gold-300 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-noir-950/80 border border-gold-500/30 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-gold-400 transition-colors"
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-[11px] mt-1">{errors.phone}</p>
                      )}
                    </div>

                    {/* Service Required */}
                    <div>
                      <label className="block text-xs font-medium text-gold-300 mb-1">
                        Service Required *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-noir-950/90 border border-gold-500/30 text-white text-sm focus:outline-none focus:border-gold-400"
                      >
                        <option value="Bridal Jewellery Consultation">Bridal Jewellery Consultation</option>
                        <option value="Custom Design Commission">Custom Design Commission</option>
                        <option value="Diamond Solitaire Viewing">Diamond Solitaire Viewing</option>
                        <option value="Traditional Polki Selection">Traditional Polki Selection</option>
                        <option value="Heritage Jewellery Appraisal">Heritage Jewellery Appraisal</option>
                      </select>
                    </div>

                    {/* Preferred Date & Time */}
                    <div>
                      <label className="block text-xs font-medium text-gold-300 mb-1">
                        Preferred Date &amp; Time *
                      </label>
                      <input
                        type="datetime-local"
                        value={formData.datetime}
                        onChange={(e) => setFormData({ ...formData, datetime: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-noir-950/80 border border-gold-500/30 text-white text-sm focus:outline-none focus:border-gold-400 [color-scheme:dark]"
                      />
                      {errors.datetime && (
                        <p className="text-red-400 text-[11px] mt-1">{errors.datetime}</p>
                      )}
                    </div>

                    {/* Your Message */}
                    <div>
                      <label className="block text-xs font-medium text-gold-300 mb-1">
                        Your Message
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Mention any specific ornaments, metal preferences, or wedding date..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-noir-950/80 border border-gold-500/30 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-gold-400 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn-gold w-full py-3.5 rounded-xl text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 mt-2 shadow-gold-glow hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      <span>Book Appointment</span>
                      <Sparkles className="w-4 h-4" />
                    </button>

                  </form>
                </div>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gold-500/20 border-2 border-gold-400 flex items-center justify-center text-gold-300 shadow-gold-glow animate-bounce">
                    <CheckCircle2 className="w-10 h-10 text-gold-400" />
                  </div>
                  
                  <h3 className="font-serif text-2xl font-bold text-gold-gradient">
                    Appointment Confirmed
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed">
                    Thank you, <span className="text-gold-200 font-semibold">{formData.name}</span>. Your private viewing has been reserved.
                  </p>

                  <div className="p-4 rounded-xl bg-noir-950/80 border border-gold-500/25 text-xs text-zinc-300 text-left space-y-2">
                    <div className="flex justify-between border-b border-gold-500/15 pb-1">
                      <span className="text-zinc-400">Booking Ref:</span>
                      <span className="text-gold-300 font-mono font-bold">{referenceId}</span>
                    </div>
                    <div className="flex justify-between border-b border-gold-500/15 pb-1">
                      <span className="text-zinc-400">Service:</span>
                      <span className="text-white font-medium">{formData.service}</span>
                    </div>
                    <div className="flex justify-between border-b border-gold-500/15 pb-1">
                      <span className="text-zinc-400">Scheduled Date:</span>
                      <span className="text-white font-medium">{new Date(formData.datetime).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Phone:</span>
                      <span className="text-white font-medium">{formData.phone}</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-zinc-400 italic">
                    A confirmation SMS &amp; WhatsApp calendar invite have been dispatched to your phone.
                  </p>

                  <button
                    onClick={handleReset}
                    className="btn-gold px-6 py-2.5 rounded-full text-xs uppercase font-semibold mt-2"
                  >
                    Book Another Consultation
                  </button>
                </div>
              )}

            </div>

            {/* Mannequin / Showcase Column */}
            <div className="md:col-span-5 relative hidden md:block">
              <div className="relative w-full h-full min-h-[500px] rounded-3xl overflow-hidden border border-gold-400/40 p-2 bg-gradient-to-b from-gold-500/20 via-noir-900 to-noir-950 shadow-2xl">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/mannequin.jpg"
                    alt="Mannequin displaying royal bridal gold necklace"
                    fill
                    className="object-cover object-center"
                    sizes="350px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/20 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-noir-950/85 backdrop-blur-md border border-gold-400/30 text-center">
                    <p className="text-[10px] uppercase tracking-wider text-gold-400 font-semibold">
                      VIP Lounge Experience
                    </p>
                    <p className="text-xs font-serif font-bold text-white mt-0.5">
                      Private Salon &amp; Bridal Trials
                    </p>
                    <p className="text-[11px] text-zinc-400 mt-1">
                      Try our heirloom sets with your wedding lehenga in dedicated lighting simulation booths.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

