import React from 'react';
import { dentalData } from '../data/dentalData';
import { Quote, CheckCircle } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="text-xs font-mono font-bold tracking-widest uppercase text-[#7C3AED] mb-2">Patient Relief & Joy</div>
        <h2 className="text-4xl sm:text-5xl font-bold font-heading uppercase text-[#1E1B4B]">STORIES FROM HAPPIER SMILES</h2>
        <div className="w-16 h-1 bg-[#7C3AED] mx-auto my-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {dentalData.testimonials.map((item, i) => (
          <div key={i} className="p-8 sm:p-10 rounded-3xl bg-white border border-purple-100 shadow-sm flex flex-col justify-between">
            <Quote className="w-8 h-8 text-[#7C3AED] mb-6" />
            <blockquote className="text-base sm:text-lg text-[#1E1B4B] font-body leading-relaxed mb-8 italic">
              "{item.quote}"
            </blockquote>
            <div className="pt-6 border-t border-purple-50 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img src={item.avatar} alt={item.author} className="w-12 h-12 rounded-full object-cover border-2 border-[#7C3AED]" />
                <div>
                  <div className="font-heading font-bold text-lg text-[#1E1B4B] flex items-center gap-1.5">
                    <span>{item.author}</span>
                    <CheckCircle className="w-4 h-4 text-[#7C3AED]" />
                  </div>
                  <div className="text-xs text-gray-500">{item.title}</div>
                </div>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-purple-50 text-[#7C3AED]">
                {item.car}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}