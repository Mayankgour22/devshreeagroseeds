import React from 'react';
import { ShieldCheck, Crosshair, Droplets, PackageCheck } from 'lucide-react';

export default function QualityAssurance() {
  const steps = [
    {
      icon: <Crosshair className="w-8 h-8" />,
      title: "Genetic Purity",
      description: "We source and select only the most genetically pure mother seeds to ensure varietal integrity and consistent performance."
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Advanced Cleaning",
      description: "Our state-of-the-art processing facility uses multi-stage cleaning to remove every impurity, leaving only healthy, bold seeds."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Vigor Testing",
      description: "Every batch undergoes rigorous germination and vigor tests in controlled environments before being cleared for the market."
    },
    {
      icon: <PackageCheck className="w-8 h-8" />,
      title: "Secure Packaging",
      description: "Moisture-proof, high-durability packaging ensures that the seeds reach you with their germination power fully intact."
    }
  ];

  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] border-[1px] border-white rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] border-[1px] border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-24">
          <span className="text-secondary uppercase tracking-[0.4em] font-extrabold text-[0.8rem] mb-6 block">Our Standards</span>
          <h2 className="text-white text-[clamp(2.5rem,5vw,4rem)] font-prata">
            The Science of <span className="italic text-secondary">Trust</span>
          </h2>
          <p className="text-white/60 max-w-[700px] mx-auto mt-8 text-[1.1rem] leading-[1.8]">
            At Dev Shree, quality is not just a promise; it's a multi-stage scientific process designed to ensure your prosperity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white/5 border border-white/10 flex items-center justify-center text-secondary mb-8 transition-all duration-500 group-hover:bg-secondary group-hover:text-primary group-hover:scale-110">
                {step.icon}
              </div>
              <h3 className="text-white text-[1.4rem] font-prata mb-4">{step.title}</h3>
              <p className="text-white/50 text-[0.95rem] leading-[1.7]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-24 pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-6">
             <div className="w-16 h-16 bg-secondary/20 flex items-center justify-center rounded-full">
                <img src="/images/Logo.jpeg" alt="Logo" className="w-10 h-10 object-contain grayscale invert" />
             </div>
             <div>
               <p className="text-white font-prata text-[1.2rem]">Devendra Palatiya</p>
               <p className="text-secondary text-[0.7rem] uppercase font-bold tracking-widest">Founder, Dev Shree Agro Seeds</p>
             </div>
          </div>
          
          <div className="flex gap-12 text-center md:text-right">
             <div>
                <p className="text-secondary text-[1.5rem] font-prata leading-none">99.8%</p>
                <p className="text-white/40 text-[0.6rem] uppercase font-bold tracking-widest mt-2">Germination Success</p>
             </div>
             <div>
                <p className="text-secondary text-[1.5rem] font-prata leading-none">20+</p>
                <p className="text-white/40 text-[0.6rem] uppercase font-bold tracking-widest mt-2">Years of Legacy</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
