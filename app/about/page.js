"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, Award, Microscope, Users, Globe, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fee74a62?q=80&w=2000&auto=format&fit=crop" 
            alt="Agricultural background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="container mx-auto px-8 relative z-10 text-center">
          <span className="text-secondary uppercase tracking-[0.4em] font-extrabold text-[0.8rem] mb-6 block animate-in fade-in slide-in-from-bottom-4 duration-700">Our Legacy</span>
          <h1 className="text-white text-[clamp(2.5rem,8vw,5.5rem)] font-prata leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Sowing Trust, <br />
            <span className="italic text-secondary">Harvesting Excellence</span>
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-[2px] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000&auto=format&fit=crop" 
                  alt="Seed Research" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary p-12 hidden xl:flex flex-col justify-center text-white">
                <span className="text-[3rem] font-prata leading-none mb-2">20+</span>
                <span className="text-[0.7rem] uppercase font-bold tracking-widest leading-tight">Years of Agricultural Excellence</span>
              </div>
            </div>

            <div>
              <span className="section-label">Who We Are</span>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-prata text-primary mb-10 leading-[1.2]">
                Dedicated to the <br />
                <span className="italic text-secondary">Future of Farming</span>
              </h2>
              <div className="space-y-6 text-textBody/80 text-[1.05rem] leading-[1.8]">
                <p>
                  Dev Shree Agro Seeds was established with a singular vision: to empower farmers with the highest quality seeds that combine traditional wisdom with modern scientific research.
                </p>
                <p>
                  Over the years, we have grown into a trusted name in the agricultural industry, continuously engaged in the production and marketing of high-yielding varieties of Wheat, Gram, Soyabean, Mustard, and more.
                </p>
                <p>
                  Our commitment goes beyond just selling seeds; we are partners in the farmer's journey, providing the foundation for a bountiful harvest and sustainable growth.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-16">
                <div className="flex flex-col gap-3">
                  <span className="text-primary font-prata text-[2rem]">100%</span>
                  <span className="text-[0.65rem] uppercase font-extrabold tracking-[0.15em] text-secondary">Certified Purity</span>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-primary font-prata text-[2rem]">50k+</span>
                  <span className="text-[0.65rem] uppercase font-extrabold tracking-[0.15em] text-secondary">Happy Farmers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Bento Style */}
      <section className="py-32 bg-linen/30">
        <div className="container mx-auto px-8 text-center mb-20">
          <span className="section-label mx-auto">Our Strength</span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-prata text-primary">Why Farmers Choose Dev Shree</h2>
        </div>

        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-12 border border-black/5 hover:shadow-xl transition-all duration-500 group">
              <div className="w-16 h-16 bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-[1.4rem] font-prata mb-6">High Germination Rate</h3>
              <p className="text-textBody/70 text-[0.95rem] leading-[1.7]">
                Our seeds are rigorously tested to deliver superior germination and vigorous early growth, ensuring strong plant establishment in any environment.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-12 border border-black/5 hover:shadow-xl transition-all duration-500 group lg:translate-y-8">
              <div className="w-16 h-16 bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-[1.4rem] font-prata mb-6">Genetic Purity</h3>
              <p className="text-textBody/70 text-[0.95rem] leading-[1.7]">
                We maintain strict quality standards to ensure varietal integrity, giving farmers the confidence that every seed will perform exactly as promised.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-12 border border-black/5 hover:shadow-xl transition-all duration-500 group">
              <div className="w-16 h-16 bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-[1.4rem] font-prata mb-6">Climate Adaptive</h3>
              <p className="text-textBody/70 text-[0.95rem] leading-[1.7]">
                Our varieties are specially developed to withstand changing climate conditions, including heat, drought, and seasonal stress.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-12 border border-black/5 hover:shadow-xl transition-all duration-500 group">
              <div className="w-16 h-16 bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Microscope className="w-8 h-8" />
              </div>
              <h3 className="text-[1.4rem] font-prata mb-6">Research Driven</h3>
              <p className="text-textBody/70 text-[0.95rem] leading-[1.7]">
                Continuous innovation through our R&D efforts allows us to develop seeds that offer higher yield potential and better disease resistance.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-12 border border-black/5 hover:shadow-xl transition-all duration-500 group lg:translate-y-8">
              <div className="w-16 h-16 bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-[1.4rem] font-prata mb-6">Farmer Centric</h3>
              <p className="text-textBody/70 text-[0.95rem] leading-[1.7]">
                Every decision we make is guided by the success of our farmers. We provide expert guidance and support throughout the cropping season.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-12 border border-black/5 hover:shadow-xl transition-all duration-500 group">
              <div className="w-16 h-16 bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-[1.4rem] font-prata mb-6">Premium Quality</h3>
              <p className="text-textBody/70 text-[0.95rem] leading-[1.7]">
                Our processing facility uses state-of-the-art technology to clean, grade, and treat seeds for maximum productivity and health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32 overflow-hidden bg-white">
        <div className="container mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-stretch">
            <div className="flex-1 bg-primary p-16 md:p-24 text-white relative overflow-hidden">
               <div className="relative z-10">
                 <span className="text-secondary uppercase tracking-[0.3em] font-extrabold text-[0.7rem] mb-6 block">Our Vision</span>
                 <h2 className="text-[2.5rem] font-prata mb-8 italic">Revolutionizing agriculture through superior seed technology.</h2>
                 <p className="text-white/70 text-[1.1rem] leading-[1.8]">
                   To be the most preferred and trusted seed brand globally, known for innovation, quality, and our commitment to farmer prosperity.
                 </p>
               </div>
               <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none translate-x-1/2 -translate-y-1/2">
                 <img src="/images/Logo.jpeg" alt="" className="w-full h-full object-contain grayscale invert" />
               </div>
            </div>
            
            <div className="flex-1 bg-secondary p-16 md:p-24 text-white relative overflow-hidden">
               <div className="relative z-10">
                 <span className="text-primary uppercase tracking-[0.3em] font-extrabold text-[0.7rem] mb-6 block">Our Mission</span>
                 <h2 className="text-[2.5rem] font-prata mb-8">Empowering farmers to feed the world sustainably.</h2>
                 <p className="text-white/80 text-[1.1rem] leading-[1.8]">
                   To provide high-quality, research-based seeds that maximize yield and minimize risk, while fostering long-term relationships with the farming community.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-32 bg-linen/10">
        <div className="container mx-auto px-8">
          <div className="max-w-[900px] mx-auto text-center">
            <div className="mb-12 inline-block">
               <img 
                 src="/images/Logo.jpeg" 
                 alt="Dev Shree Logo" 
                 className="w-20 h-20 object-contain mx-auto opacity-20"
               />
            </div>
            <h2 className="text-[2.5rem] font-prata text-primary mb-10 italic">&ldquo;Our mission is to ensure that the sweat and hard work of our farmers is rewarded with the best possible harvest. We don't just sell seeds; we sell the promise of prosperity.&rdquo;</h2>
            
            <div className="mt-12">
               <p className="text-primary font-prata text-[1.5rem]">Devendra Palatiya</p>
               <p className="text-secondary text-[0.8rem] uppercase font-bold tracking-widest mt-2">Founder & Chairman</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-prata text-primary mb-10">
            Let's Grow <span className="italic text-secondary">Together</span>
          </h2>
          <p className="text-textBody/70 max-w-[700px] mx-auto text-[1.1rem] mb-12">
            Interested in learning more about our varieties or partnering with us? 
            Our team of experts is ready to help you plan your next bountiful harvest.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/products" className="bg-primary text-white py-5 px-12 text-[0.8rem] font-bold uppercase tracking-[0.2em] hover:bg-secondary transition-all">View Catalog</a>
            <a href="https://wa.me/918349798177" className="border border-primary text-primary py-5 px-12 text-[0.8rem] font-bold uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all">WhatsApp Inquire</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
