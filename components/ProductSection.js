"use client";
import React, { useRef } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const categories = [
  {
    id: 1,
    title: "Elite Soybean",
    subtitle: "Kharif Champion",
    image: "https://images.unsplash.com/photo-1594759074031-62bc7f4c9447?q=80&w=2000&auto=format&fit=crop",
    varieties: ["JS 2034", "JS 2098"],
    description: "Scientific precision meets high harvest count for the monsoon season."
  },
  {
    id: 2,
    title: "Premium Maize",
    subtitle: "Hybrid Gold",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=2000&auto=format&fit=crop",
    varieties: ["Local Hybrid", "Pioneer"],
    description: "Crafted for maximum sweetness and resilience against pests."
  },
  {
    id: 3,
    title: "Sprout Moong",
    subtitle: "Nurtured Pulse",
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2000&auto=format&fit=crop",
    varieties: ["MH 421", "IPM 02-3"],
    description: "Rapid maturation for the efficient farmer looking for quick turnaround."
  },
  {
    id: 4,
    title: "Golden Wheat",
    subtitle: "Rabi Legend",
    image: "/images/WhatsApp Image 2026-04-21 at 11.24.41.jpeg",
    varieties: ["HI 1544", "GW 322"],
    description: "The backbone of the winter harvest, ensuring luxury grain quality."
  },
  {
    id: 9,
    title: "Bold Gram",
    subtitle: "Winter Protein",
    image: "/images/WhatsApp Image 2026-04-21 at 11.01.56.jpeg",
    varieties: ["Vishal", "JG 12"],
    description: "Dense nutritional profile with exceptional germination vigor."
  },
  {
    id: 10,
    title: "Yellow Mustard",
    subtitle: "Oilseed Wealth",
    image: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?q=80&w=2000&auto=format&fit=crop",
    varieties: ["Pusa Bold", "Local"],
    description: "Highest oil content varieties for the masterful cultivator."
  }
];

export default function ProductSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="bg-background overflow-hidden relative">
      <div className="container mx-auto px-8">
        
        <div className="flex justify-between items-end mb-16 max-[768px]:flex-col max-[768px]:items-start max-[768px]:gap-8">
          <div>
            <span className="section-label">Curated Selects</span>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-prata max-w-[600px]">
              Refined Seed <br />
              <span className="italic text-secondary">Generations</span>
            </h2>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center transition-all hover:bg-primary hover:text-white group"
            >
              <ArrowLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center transition-all hover:bg-primary hover:text-white group"
            >
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Area */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12 -mx-4 px-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="min-w-[400px] max-[480px]:min-w-[280px] snap-center group relative bg-white border border-black/5 p-10 flex flex-col hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-[250px] mb-10 overflow-hidden bg-linen">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <span className="text-[0.7rem] uppercase font-extrabold text-secondary tracking-[0.2em] mb-3 block">
                {cat.subtitle}
              </span>
              <h3 className="text-[1.8rem] font-prata mb-4">{cat.title}</h3>
              <p className="text-textBody opacity-70 mb-8 text-[0.95rem] leading-[1.6]">
                {cat.description}
              </p>

              <div className="flex gap-3 mt-auto">
                {cat.varieties.map((v, idx) => (
                  <span 
                    key={idx} 
                    className="text-[0.65rem] font-bold uppercase tracking-[0.1em] border border-black/10 py-2 px-4 rounded-[2px]"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Style Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-primary/20"></div>
          ))}
        </div>

      </div>
    </section>
  );
}
