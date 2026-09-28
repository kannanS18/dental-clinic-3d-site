import React from 'react';
import { dentalData } from '../data/dentalData';
import { BeforeAfterSlider } from './ui/BeforeAfterSlider';

export function GallerySection({ onOpenBooking }) {
  return (
    <section id="transformations" className="py-24 bg-white border-y border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-mono font-bold tracking-widest uppercase text-[#7C3AED] mb-2">Smile Atelier Transformations</div>
          <h2 className="text-4xl sm:text-5xl font-bold font-heading uppercase text-[#1E1B4B]">SMILE TRANSFORMATION ATELIER</h2>
          <p className="text-gray-600 text-sm mt-1">Realistic, natural smile makeovers that bring confidence back to everyday life.</p>
        </div>

        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-purple-200 shadow-sm">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-mono text-[#7C3AED] font-bold uppercase tracking-wider">Interactive Clinical Slider</span>
            <h3 className="text-2xl font-bold font-heading text-[#1E1B4B] mt-1">Drag to Reveal 10-Unit Porcelain Smile Makeover</h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">Drag the white divider horizontally to inspect natural enamel texture and translucency.</p>
          </div>
          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80"
            afterImage="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80"
            beforeLabel="Enamel Wear & Midline Gap"
            afterLabel="Full Porcelain Veneers"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dentalData.gallery.slice(1).map((item, i) => (
            <div key={i} className="group rounded-2xl overflow-hidden bg-[#FAF9F6] border border-purple-100 hover:border-[#7C3AED] transition-all shadow-sm">
              <div className="relative h-56 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 text-white text-[10px] font-mono font-bold uppercase">{item.badge}</div>
              </div>
              <div className="p-5">
                <h4 className="font-heading font-bold text-lg text-[#1E1B4B] group-hover:text-[#7C3AED] transition-colors">{item.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{item.specs}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}