"use client";
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { products } from '@/lib/products';

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");
  const whatsappNumber = "918349798177";

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setActiveCategory(cat);
    } else {
      setActiveCategory("All");
    }
  }, [searchParams]);

  const categories = ["All", "Wheat", "Soyabean", "Gram", "Mustard", "Mung", "Paddy", "Maize"];

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === "All") {
      router.push('/products');
    } else {
      router.push(`/products?category=${cat}`);
    }
  };

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      {/* Hero Header */}
      <section className="bg-primary pt-[180px] pb-[80px] text-center max-[768px]:pt-[140px] max-[768px]:pb-[50px]">
        <div className="container mx-auto px-8 max-[768px]:px-6">
          <span className="text-secondary uppercase tracking-[0.3em] font-extrabold text-[0.8rem] mb-6 block fade-in">The Collection</span>
          <h1 className="text-white text-[clamp(2rem,6vw,4.5rem)] mb-8 font-prata fade-in max-[768px]:text-[2.5rem]">
            Masterfully <span className="italic text-secondary">Selected</span> Seeds
          </h1>
          <p className="text-white/70 max-w-[700px] mx-auto text-[1.1rem] leading-[1.8] fade-in max-[768px]:text-[0.95rem]">
            Explore our comprehensive range of certified high-yield varieties, 
            carefully analyzed and selected for the modern farmer.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-12 border-b border-black/5 bg-white sticky top-[80px] z-30 shadow-sm">
        <div className="container mx-auto px-8 overflow-x-auto">
          <div className="flex justify-center gap-4 min-w-max pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-8 py-3 text-[0.75rem] font-bold uppercase tracking-[0.15em] transition-all duration-300 border ${
                  activeCategory === cat 
                  ? "bg-primary text-white border-primary" 
                  : "bg-transparent text-primary border-primary/20 hover:border-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="py-20 max-[768px]:py-12">
        <div className="container mx-auto px-8 max-[768px]:px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-[1200px]:gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group bg-white border border-black/5 flex flex-col h-full hover:shadow-2xl transition-all duration-500 overflow-hidden fade-in">
                
                {/* Product Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-linen">
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-linen/50 border-2 border-dashed border-primary/10">
                       <span className="text-primary/20 text-[4rem] font-prata italic">DS</span>
                       <span className="text-primary/30 text-[0.6rem] font-bold uppercase tracking-[0.2em] mt-4">Image Coming Soon</span>
                    </div>
                  )}
                  <div className="absolute top-6 left-6 max-[768px]:top-4 max-[768px]:left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-primary text-[0.65rem] font-extrabold uppercase tracking-[0.2em] px-4 py-2 border border-primary/10">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-8 flex flex-col flex-grow max-[768px]:p-6">
                  <h3 className="text-[1.6rem] mb-4 font-prata group-hover:text-secondary transition-colors duration-300 max-[768px]:text-[1.4rem] min-h-[3.5rem]">
                    {product.name}
                  </h3>
                  <p className="text-textBody/70 text-[0.95rem] mb-8 leading-[1.6] max-[768px]:mb-6">
                    A premium variety of {product.category} seed, masterfully selected for maximum yield and resilience in various soil conditions.
                  </p>
                  
                  <div className="mt-auto">
                    <a 
                      href={`https://wa.me/${whatsappNumber}?text=Hi, I am interested in ${product.name} seeds. Please provide more details.`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full inline-flex items-center justify-center gap-3 py-5 bg-primary text-white text-[0.75rem] font-extrabold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-secondary max-[768px]:py-4"
                    >
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L22 4l-2.1 4.6z" />
                      </svg>
                      Inquire on WhatsApp
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-32 text-center">
              <p className="text-textBody font-prata text-[1.5rem] opacity-40">
                No varieties currently listed for this category.
              </p>
            </div>
          )}

          <div className="mt-24 text-center max-[768px]:mt-16">
            <p className="text-textBody italic font-prata text-[1.2rem] max-[768px]:text-[1rem]">
              More varieties arriving with the change of seasons.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><span className="loader"></span></div>}>
      <ProductsContent />
    </Suspense>
  );
}
