import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export function Navbar({ onOpenBooking }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-[#7C3AED]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/40 flex items-center justify-center text-[#7C3AED]">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-bold font-heading tracking-wider text-[#1E1B4B]">BrightSmile</div>
            <div className="text-[10px] tracking-widest font-mono text-gray-500 uppercase">WELLNESS DENTAL STUDIO</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-xs font-heading font-semibold uppercase tracking-wider text-gray-600">
          <a href="#services" className="hover:text-[#7C3AED] transition-colors">Gentle Care</a>
          <a href="#transformations" className="hover:text-[#7C3AED] transition-colors">Transformations</a>
          <a href="#testimonials" className="hover:text-[#7C3AED] transition-colors">Comfort Stories</a>
          <a href="#contact" className="hover:text-[#7C3AED] transition-colors">Studio & Book</a>
        </nav>

        <button
          onClick={onOpenBooking}
          className="px-5 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white shadow-md hover:shadow-lg transition-all"
        >
          <span>Relaxing Visit</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}