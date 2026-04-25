"use client";
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { products } from '@/lib/products';
import { X, CheckCircle, MessageSquare } from 'lucide-react';

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const whatsappNumber = "918349798177";

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setActiveCategory(cat);
    } else {
      setActiveCategory("All");
    }
  }, [searchParams]);

  // Handle body scroll locking when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProduct]);

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
            carefully analyzed and selected for the modern farmer. Click on any seed to learn more.
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
              <div 
                key={product.id} 
                onClick={() => setSelectedProduct(product)}
                className="group bg-white border border-black/5 flex flex-col h-full hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer fade-in"
              >
                
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
                  <p className="text-textBody/70 text-[0.95rem] mb-8 leading-[1.6] max-[768px]:mb-6 line-clamp-3">
                    {product.description || `A premium variety of ${product.category} seed, masterfully selected for maximum yield.`}
                  </p>
                  
                  <div className="mt-auto flex items-center text-primary font-bold text-[0.7rem] uppercase tracking-[0.1em]">
                    View Details
                    <CheckCircle className="ml-2 w-4 h-4 opacity-30 group-hover:opacity-100 transition-opacity" />
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

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
          <div 
            className="absolute inset-0 bg-primary/40 backdrop-blur-md" 
            onClick={() => setSelectedProduct(null)}
          ></div>
          
          <div className="relative bg-white w-full max-w-[1100px] max-h-[90vh] overflow-y-auto flex flex-col md:flex-row shadow-2xl rounded-[2px] animate-in zoom-in-95 duration-500">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 z-50 p-2 bg-white/90 rounded-full text-primary hover:bg-primary hover:text-white transition-all shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left/Top: Image Details */}
            <div className="w-full md:w-1/2 h-[400px] md:h-auto bg-linen relative overflow-hidden">
              {selectedProduct.image ? (
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-12 bg-linen/50">
                  <span className="text-primary/20 text-[6rem] font-prata italic">DS</span>
                  <p className="text-primary/40 font-bold uppercase tracking-widest text-xs mt-4 font-inter">Authentic Quality Seeds</p>
                </div>
              )}
              <div className="absolute bottom-8 left-8">
                 <span className="bg-primary text-white text-[0.6rem] font-extrabold uppercase tracking-[0.2em] px-4 py-2">
                    {selectedProduct.category}
                 </span>
              </div>
            </div>

            {/* Right/Bottom: Content Details */}
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col">
              <span className="text-secondary font-bold uppercase tracking-[0.2em] text-[0.7rem] mb-4 block">Product Overview</span>
              <h2 className="text-[2.2rem] md:text-[3rem] font-prata mb-8 leading-[1.2] text-primary">
                {selectedProduct.name}
              </h2>
              
              <div className="mb-10">
                <h4 className="text-primary font-bold uppercase text-[0.75rem] tracking-widest mb-4">Description</h4>
                <p className="text-textBody/80 text-[1rem] leading-[1.8]">
                  {selectedProduct.description || `This ${selectedProduct.name} variety is masterfully selected for its resilience and exceptional yield potential. It represents the pinnacle of seed engineering and traditional farming wisdom.`}
                </p>
              </div>

              {selectedProduct.features && (
                <div className="mb-12">
                  <h4 className="text-primary font-bold uppercase text-[0.75rem] tracking-widest mb-6">Key Specifications</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedProduct.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 py-3 px-4 bg-linen/30 border border-black/5 rounded-[2px]">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-[0.85rem] font-bold text-primary/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-auto pt-8">
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=Hi, I am interested in ${selectedProduct.name} ${selectedProduct.category} seeds. Please provide pricing and availability details.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-4 py-6 bg-primary text-white text-[0.85rem] font-extrabold uppercase tracking-[0.25em] transition-all duration-500 hover:bg-secondary hover:shadow-xl hover:scale-[1.02]"
                >
                  <MessageSquare className="w-5 h-5" />
                  Inquire on WhatsApp
                </a>
                <p className="text-center text-textBody/40 text-[0.65rem] uppercase tracking-[0.1em] mt-6 font-bold">
                  Direct connection to our seed experts
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
