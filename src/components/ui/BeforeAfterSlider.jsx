import React, { useState, useRef, useCallback } from 'react';

export function BeforeAfterSlider({ beforeImage, afterImage, beforeLabel = 'Before Treatment', afterLabel = 'After Smile Design' }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    setSliderPosition(Math.max(0, Math.min(100, (x / rect.width) * 100)));
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={e => isDragging && handleMove(e.clientX)}
      onTouchMove={e => handleMove(e.touches[0].clientX)}
      className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden select-none cursor-ew-resize border border-[#7C3AED]/20 shadow-2xl"
    >
      <img src={afterImage} alt="After result" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-heading font-semibold text-white tracking-wider uppercase border border-white/20">
        {afterLabel}
      </div>

      <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
        <img
          src={beforeImage}
          alt="Before result"
          className="absolute inset-0 w-full h-full object-cover max-w-none"
          style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
        />
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-heading font-semibold text-white tracking-wider uppercase border border-white/20">
          {beforeLabel}
        </div>
      </div>

      <div className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-10" style={{ left: `${sliderPosition}%` }}>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-[#7C3AED]">
          <svg className="w-4 h-4 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l4-4 4 4m0 6l-4 4-4-4" transform="rotate(90 12 12)" />
          </svg>
        </div>
      </div>
    </div>
  );
}