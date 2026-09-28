import React from 'react';
import { dentalData } from '../data/dentalData';
import { Sparkles, Smile, ShieldCheck, Gem, HeartHandshake, Layers, ArrowRight } from 'lucide-react';

const icons = { Sparkles, Smile, ShieldCheck, Gem, HeartHandshake, Layers };

export function ServicesSection({ onOpenBooking }) {
  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="text-xs font-mono font-bold tracking-widest uppercase text-[#7C3AED] mb-2">Judgment-Free Dental Wellness</div>
        <h2 className="text-4xl sm:text-5xl font-bold font-heading uppercase text-[#1E1B4B]">CARE THAT FEELS LIKE SELF-CARE</h2>
        <div className="w-16 h-1 bg-[#7C3AED] mx-auto my-4 rounded-full" />
        <p className="text-gray-600 text-sm sm:text-base">No intimidating tools, no lectures, and zero discomfort. Just healthy, glowing smiles.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dentalData.services.map((item, i) => {
          const Icon = icons[item.icon] || Sparkles;
          return (
            <div key={i} className="p-7 rounded-2xl bg-white border border-purple-100 shadow-sm hover:shadow-md transition-all group">
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-purple-50 text-[#7C3AED]">{item.tag}</span>
              </div>
              <h3 className="text-xl font-bold font-heading text-[#1E1B4B] mb-2 group-hover:text-[#7C3AED] transition-colors">{item.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">{item.desc}</p>
              <div className="pt-4 border-t border-purple-50 flex items-center justify-between text-xs">
                <span className="font-mono font-semibold text-[#7C3AED]">{item.metric}</span>
                <button onClick={onOpenBooking} className="text-gray-500 group-hover:text-[#7C3AED] font-heading font-bold uppercase flex items-center gap-1">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}