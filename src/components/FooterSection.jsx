import React from 'react';
import { Sparkles, Award } from 'lucide-react';

export function FooterSection() {
  return (
    <footer className="pt-16 pb-12 border-t border-purple-100 bg-[#1E1B4B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/20 border border-[#7C3AED]/40 flex items-center justify-center text-[#7C3AED]"><Sparkles className="w-5 h-5" /></div>
              <span className="text-2xl font-bold font-heading tracking-wider">BrightSmile Studio</span>
            </div>
            <p className="text-sm text-purple-200 max-w-sm">Spa-inspired gentle dental wellness studio designed to eliminate dental anxiety and deliver radiant, natural smiles.</p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#06B6D4]">
              <Award className="w-4 h-4" />
              <span>ADA Member • Invisalign VIP Diamond Plus</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-white mb-4">Care Offerings</h4>
            <ul className="space-y-2 text-xs text-purple-200">
              <li>Cold Laser Whitening</li>
              <li>Invisalign Clear Aligners</li>
              <li>Handcrafted Veneers</li>
              <li>Gentle Ultrasonic Clean</li>
              <li>Anxiety Sedation Options</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-white mb-4">Williamsburg Studio</h4>
            <p className="text-xs text-purple-200 leading-relaxed">280 Bedford Avenue, Brooklyn, NY<br/><br/>Direct: +1 (718) 390-2100<br/>hello@brightsmile-studio.com</p>
          </div>
        </div>

        <div className="pt-8 border-t border-purple-800/50 flex flex-col sm:flex-row items-center justify-between text-xs text-purple-300 gap-4">
          <div>© {new Date().getFullYear()} BrightSmile Dental Studio LLC. All rights reserved. Zero Judgment Promise.</div>
          <div className="flex gap-6">
            <span>Comfort Menu</span>
            <span>Privacy Policy</span>
            <span>Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}