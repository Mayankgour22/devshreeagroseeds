"use client";
import React, { useRef } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { categories } from '@/lib/products';

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
            <span className="section-label">Our Varieties</span>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-prata max-w-[600px]">
              Premium Seed <br />
              <span className="italic text-secondary">Categories</span>
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
            <Link 
              key={cat.name} 
              href={`/products?category=${cat.name}`}
              className="min-w-[400px] max-[480px]:min-w-[280px] snap-center group relative bg-white border border-black/5 p-10 flex flex-col hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-[250px] mb-10 overflow-hidden bg-linen">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <span className="text-[0.7rem] uppercase font-extrabold text-secondary tracking-[0.2em] mb-3 block">
                {cat.hindiName}
              </span>
              <h3 className="text-[1.8rem] font-prata mb-4">{cat.name}</h3>
              <p className="text-textBody opacity-70 mb-8 text-[0.95rem] leading-[1.6]">
                {cat.description}
              </p>

              <div className="flex items-center text-primary font-bold text-[0.8rem] mt-auto">
                VIEW VARIETIES
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Style Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {categories.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-primary/20"></div>
          ))}
        </div>

      </div>
    </section>
  );
}
