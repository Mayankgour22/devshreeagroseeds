"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Play, Star, MapPin, TrendingUp } from 'lucide-react';

export default function SuccessStories() {
  const stories = [
    {
      farmer: "Rajesh Kumar",
      location: "Dewas District",
      seed: "HI-1544 Wheat (Purna)",
      result: "65 Quintals per Hectare",
      quote: "Earlier I was struggling with 45-50 quintals. With Dev Shree's HI-1544, my yield increased by 30% and the grain quality was exceptional.",
      image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=1000&auto=format&fit=crop"
    },
    {
      farmer: "Sunil Patidar",
      location: "Indore Region",
      seed: "JS 2034 Soybean",
      result: "24 Quintals per Hectare",
      quote: "Even with inconsistent rains, the JS 2034 variety showed amazing resistance. The harvest was bold and shiny, fetching the best market price.",
      image: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=1000&auto=format&fit=crop"
    },
    {
      farmer: "Manoj Singh",
      location: "Khargone",
      seed: "Vishal Gram (Chana)",
      result: "18 Quintals per Hectare",
      quote: "The germination was near 100%. I've never seen such vigorous growth in the early stages. Dev Shree seeds are truly elite.",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      {/* Hero Header */}
      <section className="bg-primary pt-[180px] pb-[80px] relative overflow-hidden">
        <div className="container mx-auto px-8 relative z-10 text-center">
          <span className="text-secondary uppercase tracking-[0.4em] font-extrabold text-[0.8rem] mb-6 block animate-in fade-in slide-in-from-bottom-4 duration-700">Real Results</span>
          <h1 className="text-white text-[clamp(2.5rem,6vw,4.5rem)] font-prata mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Farmer <span className="italic text-secondary">Success Stories</span>
          </h1>
          <p className="text-white/70 max-w-[800px] mx-auto text-[1.1rem] leading-[1.8] animate-in fade-in slide-in-from-bottom-12 duration-1000">
            Experience the transformative power of Dev Shree seeds through the eyes of the farmers 
            who have turned their hard work into record-breaking harvests.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
           <img src="/images/Logo.jpeg" alt="" className="w-full h-full object-contain grayscale invert" />
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="py-24 bg-white -mt-10 relative z-20">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Video 1 */}
            <div className="group relative">
               <div className="aspect-video bg-black overflow-hidden rounded-[2px] shadow-2xl relative">
                  <video 
                    src="/images/vedio1.mp4" 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    controls
                    poster="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?q=80&w=1000&auto=format&fit=crop"
                  ></video>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
                    <div className="w-20 h-20 rounded-full bg-secondary/90 flex items-center justify-center text-white backdrop-blur-sm">
                      <Play className="w-8 h-8 ml-1 fill-current" />
                    </div>
                  </div>
               </div>
               <div className="mt-6">
                 <h3 className="text-[1.4rem] font-prata text-primary">Field Demonstration: Wheat Selection</h3>
                 <p className="text-textBody/60 text-[0.9rem] mt-2 font-medium">Showing the robust growth and spike density of our premium wheat varieties.</p>
               </div>
            </div>

            {/* Video 2 */}
            <div className="group relative">
               <div className="aspect-video bg-black overflow-hidden rounded-[2px] shadow-2xl relative">
                  <video 
                    src="/images/vedio2.mp4" 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    controls
                    poster="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1000&auto=format&fit=crop"
                  ></video>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
                    <div className="w-20 h-20 rounded-full bg-secondary/90 flex items-center justify-center text-white backdrop-blur-sm">
                      <Play className="w-8 h-8 ml-1 fill-current" />
                    </div>
                  </div>
               </div>
               <div className="mt-6">
                 <h3 className="text-[1.4rem] font-prata text-primary">Harvest Day Insights</h3>
                 <p className="text-textBody/60 text-[0.9rem] mt-2 font-medium">Real-time harvest results and grain quality analysis from the Indore region.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Cards */}
      <section className="py-32 bg-linen/20">
        <div className="container mx-auto px-8">
          <div className="space-y-32">
            {stories.map((story, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}>
                <div className="flex-1 w-full relative">
                  <div className="aspect-[4/5] overflow-hidden rounded-[2px] shadow-2xl">
                    <img 
                      src={story.image} 
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-700" 
                      alt={story.farmer} 
                    />
                  </div>
                  {/* Floating Badge */}
                  <div className={`absolute ${idx % 2 === 0 ? '-bottom-10 -right-10' : '-bottom-10 -left-10'} bg-white p-8 border border-black/5 shadow-xl hidden xl:block`}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-full text-secondary">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[0.6rem] uppercase font-extrabold tracking-widest text-textBody/40 block">Total Yield</span>
                        <span className="text-[1.2rem] font-prata text-primary">{story.result}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span className="text-secondary font-bold uppercase tracking-[0.2em] text-[0.7rem]">{story.location}</span>
                  </div>
                  <h3 className="text-[3.5rem] font-prata mb-8 text-primary leading-[1.1]">{story.farmer}</h3>
                  
                  <div className="relative mb-12">
                    <div className="absolute -top-6 -left-6 text-secondary/20 text-[6rem] font-prata leading-none">&ldquo;</div>
                    <p className="text-[1.4rem] leading-[1.6] text-textBody/80 font-medium relative z-10 pl-6">
                      {story.quote}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-black/10 pt-10">
                    <div className="flex flex-col gap-2">
                      <span className="text-[0.65rem] uppercase font-extrabold tracking-[0.2em] text-secondary">Seed Variety</span>
                      <p className="text-[1.1rem] font-bold text-primary">{story.seed}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-[0.65rem] uppercase font-extrabold tracking-[0.2em] text-secondary">Farmer Rating</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(star => (
                          <Star key={star} className="w-4 h-4 fill-secondary text-secondary" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultivation Gallery */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-8 text-center mb-16">
          <span className="section-label mx-auto">Field Gallery</span>
          <h2 className="text-[3rem] font-prata text-primary">Cultivating Prosperity</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
           <div className="aspect-square overflow-hidden">
             <img src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?q=80&w=600" className="w-full h-full object-cover hover:scale-110 transition-duration-500" alt="Seed Sowing" />
           </div>
           <div className="aspect-square overflow-hidden">
             <img src="https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=600" className="w-full h-full object-cover hover:scale-110 transition-duration-500" alt="Indian Farmer" />
           </div>
           <div className="aspect-square overflow-hidden">
             <img src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=600" className="w-full h-full object-cover hover:scale-110 transition-duration-500" alt="Seeds in Hand" />
           </div>
           <div className="aspect-square overflow-hidden">
             <img src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=600" className="w-full h-full object-cover hover:scale-110 transition-duration-500" alt="Grain Harvest" />
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
