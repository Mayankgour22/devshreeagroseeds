import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 bg-primary overflow-hidden">
      
      {/* Background Image / Video Effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2500&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-30 grayscale-[0.3]"
          alt="Agriculture Field"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-8 max-[768px]:px-6 relative z-10">
        <div className="grid grid-cols-[1.5fr_1fr] items-center gap-24 max-[1200px]:gap-12 max-[992px]:grid-cols-1 max-[992px]:text-center">
          
          <div className="fade-in">
            <span className="bg-secondary text-white text-[0.7rem] font-bold uppercase tracking-[0.3em] px-4 py-2 mb-8 inline-block">ISO 9001:2015 Certified Seed Company</span>
            <h1 className="text-white text-[clamp(2.5rem,8vw,5.5rem)] mb-8 leading-[1.1] font-prata max-[768px]:text-[2.5rem]">
              शुद्धता और पैदावार का <br />
              <span className="italic text-secondary">अटूट</span> विश्वास
            </h1>
            <p className="text-white/80 max-w-[600px] mb-14 text-[1.4rem] leading-[1.6] max-[992px]:mx-auto max-[768px]:text-[1.1rem]">
              देव श्री एग्रो सीड्स: हर खेत बनेगा मिसाल, हर किसान होगा खुशहाल। हम लाए हैं आपके लिए विज्ञान और परंपरा का बेहतरीन संगम।
            </p>
            
            <div className="flex items-center gap-8 max-[1200px]:flex-col max-[1200px]:items-start max-[992px]:items-center max-[992px]:gap-10">
              <a href="/products" className="py-6 px-12 bg-secondary text-white text-[0.8rem] font-bold uppercase tracking-[0.2em] transition-all hover:bg-white hover:text-primary backdrop-blur-sm max-[768px]:w-full text-center">
                बीज कैटलॉग देखें <ArrowUpRight size={18} className="inline-block ml-2" />
              </a>
              <div className="flex items-center gap-8 text-white">
                <div className="flex flex-col">
                  <strong className="font-prata text-[2rem] max-[768px]:text-[1.5rem]">98%</strong>
                  <span className="text-[0.6rem] uppercase tracking-[0.2em] opacity-60">शुद्धता प्रमाणित</span>
                </div>
                <div className="w-[1px] h-[40px] bg-white/20"></div>
                <div className="flex flex-col">
                  <strong className="font-prata text-[2rem] max-[768px]:text-[1.5rem]">25+</strong>
                  <span className="text-[0.6rem] uppercase tracking-[0.2em] opacity-60">अनुभवी वर्ष</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group max-[992px]:hidden">
            <div className="relative h-[600px] border-[20px] border-white/5 overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2000&auto=format&fit=crop" 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                 alt="Premium Wheat"
               />
               <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all"></div>
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 shadow-2xl transition-transform group-hover:-translate-y-4">
              <p className="font-prata text-primary text-[1.2rem] mb-2">Elite Variety</p>
              <p className="text-secondary text-[0.7rem] font-bold uppercase tracking-[0.1em]">HI-1544 Purna Wheat</p>
            </div>
          </div>

        </div>
      </div>
      
    </section>
  );
}



