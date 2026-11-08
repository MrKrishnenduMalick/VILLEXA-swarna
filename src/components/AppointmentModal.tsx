'use client';

import React, { useState } from 'react';
import { X, Calendar, CheckCircle, Clock, Sparkles } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Bridal Jewellery Consultation',
    datetime: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim() || !formData.email.includes('@'))
      newErrors.email = 'Please enter a valid email address';
    if (!formData.phone.trim() || formData.phone.length < 8)
      newErrors.phone = 'Please enter a valid phone/WhatsApp number';
    if (!formData.datetime) newErrors.datetime = 'Please select a date and time';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const resetForm = () => {
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
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-300">
      <div
        className="relative w-full max-w-lg rounded-2xl bg-noir-900 border border-gold-400/50 shadow-2xl p-6 sm:p-8 gold-glass overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle top golden light line */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

        <button
          onClick={resetForm}
          className="absolute top-5 right-5 text-zinc-400 hover:text-white p-1 rounded-lg"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-gold-400" />
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-gold-gradient">
                Book a Private Viewing
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 mb-6">
              Experience personalized VIP hospitality with our master gemologists and bridal stylists.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gold-300 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ananya Sen"
                  className="w-full px-4 py-2.5 rounded-xl bg-noir-950/80 border border-gold-500/30 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-gold-400"
                />
                {errors.name && <p className="text-red-400 text-[11px] mt-1">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gold-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-noir-950/80 border border-gold-500/30 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-gold-400"
                  />
                  {errors.email && <p className="text-red-400 text-[11px] mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-gold-300 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-noir-950/80 border border-gold-500/30 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-gold-400"
                  />
                  {errors.phone && <p className="text-red-400 text-[11px] mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gold-300 mb-1">
                  Service Required *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-noir-950/90 border border-gold-500/30 text-white text-sm focus:outline-none focus:border-gold-400"
                >
                  <option value="Bridal Jewellery Consultation">Bridal Jewellery Consultation</option>
                  <option value="Custom Design Commission">Custom Design Commission</option>
                  <option value="Diamond Solitaire Viewing">Diamond Solitaire Viewing</option>
                  <option value="Traditional Polki Selection">Traditional Polki Selection</option>
                  <option value="Heritage Jewellery Appraisal">Heritage Jewellery Appraisal</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gold-300 mb-1">
                  Preferred Date &amp; Time *
                </label>
                <input
                  type="datetime-local"
                  value={formData.datetime}
                  onChange={(e) => setFormData({ ...formData, datetime: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-noir-950/80 border border-gold-500/30 text-white text-sm focus:outline-none focus:border-gold-400 [color-scheme:dark]"
                />
                {errors.datetime && (
                  <p className="text-red-400 text-[11px] mt-1">{errors.datetime}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-gold-300 mb-1">
                  Special Notes or Design Preferences
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the occasion, weight preferences, or gemstones..."
                  className="w-full px-4 py-2.5 rounded-xl bg-noir-950/80 border border-gold-500/30 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-gold-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-gold w-full py-3 rounded-xl text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 mt-4"
              >
                <span>Confirm Appointment Booking</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-gold-500/20 border-2 border-gold-400 flex items-center justify-center text-gold-300 shadow-gold-glow">
              <CheckCircle className="w-9 h-9 text-gold-400" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-gold-gradient">
              Consultation Reserved
            </h3>
            <p className="text-sm text-zinc-300 max-w-sm mx-auto">
              Thank you, <span className="text-gold-200 font-semibold">{formData.name}</span>. Your private viewing for{' '}
              <span className="text-gold-300">{formData.service}</span> has been tentatively scheduled.
            </p>
            <div className="p-4 rounded-xl bg-noir-950/70 border border-gold-500/20 text-xs text-zinc-400 space-y-1">
              <p>Reference ID: <span className="text-gold-300 font-mono">SV-{Math.floor(100000 + Math.random() * 900000)}</span></p>
              <p>Our senior concierge will reach out on <span className="text-white">{formData.phone}</span> shortly to confirm your VIP lounge arrangements.</p>
            </div>
            <button
              onClick={resetForm}
              className="btn-gold px-6 py-2.5 rounded-full text-xs uppercase font-semibold mt-4"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

