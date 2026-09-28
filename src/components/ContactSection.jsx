import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { dentalData } from '../data/dentalData';
import { Send, MapPin, Phone, Clock, Mail, CheckCircle2, Heart } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', reason: '', plan: '', details: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 }, colors: ['#7C3AED', '#06B6D4', '#FFFFFF'] });
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', reason: '', plan: '', details: '' });
    }, 5000);
  };

  const { workshopInfo, comfortMenu } = dentalData.contact;

  return (
    <section id="contact" className="py-24 bg-white border-t border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono font-bold tracking-widest uppercase text-[#7C3AED] mb-2">Spa Appointments</div>
          <h2 className="text-4xl sm:text-5xl font-bold font-heading uppercase text-[#1E1B4B]">RESERVE YOUR RELAXING VISIT</h2>
          <div className="w-16 h-1 bg-[#7C3AED] mx-auto my-4 rounded-full" />
          <p className="text-gray-600 text-sm">Select your preferred comfort amenities below for a truly serene dental experience.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#FAF9F6] border border-purple-100 shadow-md">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#7C3AED]/20 text-[#7C3AED] flex items-center justify-center mx-auto border-2 border-[#7C3AED] animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-[#1E1B4B]">Visit Reserved With Care</h3>
                <p className="text-sm text-gray-600 font-body">Our patient concierge will confirm your relaxation appointment within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-gray-600 mb-2">Your Full Name *</label>
                    <input type="text" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="Sarah Miller" className="w-full px-4 py-3 rounded-xl bg-white border border-purple-200 text-[#1E1B4B] focus:border-[#7C3AED] focus:outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-gray-600 mb-2">Email Address *</label>
                    <input type="email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="sarah@wellness.com" className="w-full px-4 py-3 rounded-xl bg-white border border-purple-200 text-[#1E1B4B] focus:border-[#7C3AED] focus:outline-none text-sm" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-gray-600 mb-2">Phone Number *</label>
                    <input type="tel" required value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} placeholder="+1 (718) 555-0192" className="w-full px-4 py-3 rounded-xl bg-white border border-purple-200 text-[#1E1B4B] focus:border-[#7C3AED] focus:outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-gray-600 mb-2">Treatment Reason *</label>
                    <select required value={formData.reason} onChange={e => setFormData({ ...formData, reason: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white border border-purple-200 text-[#1E1B4B] focus:border-[#7C3AED] focus:outline-none text-sm">
                      <option value="">Select Treatment</option>
                      <option value="Cleaning">Gentle Spa Cleaning & Polish</option>
                      <option value="Whitening">Philips Zoom Cold Laser Whitening</option>
                      <option value="Invisalign">Invisalign 3D Digital Scan</option>
                      <option value="Veneers">Porcelain Veneer Consultation</option>
                      <option value="Emergency">Gentle Urgent Tooth Care</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold uppercase text-gray-600 mb-2">Dental Coverage / Wellness Plan *</label>
                  <select required value={formData.plan} onChange={e => setFormData({ ...formData, plan: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white border border-purple-200 text-[#1E1B4B] focus:border-[#7C3AED] focus:outline-none text-sm">
                    <option value="">Select Plan Tier</option>
                    <option value="Delta">Delta Dental / MetLife / Cigna</option>
                    <option value="Aetna">Aetna / Guardian / Humana</option>
                    <option value="InHouse">BrightSmile In-House Wellness Plan ($35/mo)</option>
                    <option value="HSA">Flexible HSA / FSA Self-Pay</option>
                  </select>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-heading font-bold text-[#7C3AED] uppercase">
                    <Heart className="w-4 h-4" />
                    <span>Complementary Spa Comfort Amenities (Select Any):</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {comfortMenu.map((item, i) => (
                      <label key={i} className="flex items-center gap-2 cursor-pointer text-gray-600">
                        <input type="checkbox" className="accent-[#7C3AED] rounded w-3.5 h-3.5" />
                        <span className="text-[11px]">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button type="submit" className="w-full py-4 rounded-full font-heading font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-3 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white shadow-md hover:shadow-lg transition-all">
                  <span>Reserve Relaxing Experience</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#FAF9F6] border border-purple-100 space-y-6 shadow-sm">
              <h3 className="text-xl font-bold font-heading text-[#1E1B4B] uppercase">Williamsburg Studio</h3>
              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-[#7C3AED] shrink-0"><MapPin className="w-5 h-5" /></div>
                  <div>
                    <div className="font-mono text-[10px] text-gray-500 uppercase">Studio Location</div>
                    <div className="font-medium text-[#1E1B4B] mt-0.5">{workshopInfo.address}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-[#7C3AED] shrink-0"><Phone className="w-5 h-5" /></div>
                  <div>
                    <div className="font-mono text-[10px] text-gray-500 uppercase">Studio Concierge</div>
                    <div className="font-bold text-[#7C3AED] mt-0.5">{workshopInfo.phone}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-[#7C3AED] shrink-0"><Clock className="w-5 h-5" /></div>
                  <div>
                    <div className="font-mono text-[10px] text-gray-500 uppercase">Studio Hours</div>
                    <div className="font-medium text-[#1E1B4B] mt-0.5">{workshopInfo.hours}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-[#7C3AED] shrink-0"><Mail className="w-5 h-5" /></div>
                  <div>
                    <div className="font-mono text-[10px] text-gray-500 uppercase">Direct Email</div>
                    <div className="font-medium text-[#1E1B4B] mt-0.5">{workshopInfo.email}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}