import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-primary text-white overflow-hidden py-[120px] relative max-[992px]:py-20">
      <div className="container mx-auto px-8">
        
        <div className="grid grid-cols-2 gap-[100px] items-center max-[992px]:grid-cols-1 max-[992px]:gap-20">
          <div className="relative z-[2]">
            <span className="section-label text-white/60">Dialogue</span>
            <h2 className="text-white text-[clamp(3rem,6vw,4.5rem)] mb-8">Let&apos;s Cultivate <br /> Your <span className="italic text-secondary">Success</span></h2>
            <p className="text-white/70 max-w-[450px] mb-14 text-[1.1rem]">Expert guidance is just a message away. Reach out to our master agriculturists for custom seed consultations.</p>
            
            <div className="flex flex-col gap-[30px]">
              <div className="flex items-start gap-5">
                <div className="w-[50px] h-[50px] bg-white/5 border border-white/10 flex items-center justify-center text-secondary shrink-0"><Phone size={18} /></div>
                <div>
                  <label className="block text-[0.7rem] uppercase tracking-[0.15em] text-secondary font-extrabold mb-1">Direct Inquiries</label>
                  <a href="tel:+918349798177" className="font-prata text-[1.4rem] text-white no-underline">+91 83497 98177</a>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-[50px] h-[50px] bg-white/5 border border-white/10 flex items-center justify-center text-secondary shrink-0"><Mail size={18} /></div>
                <div>
                  <label className="block text-[0.7rem] uppercase tracking-[0.15em] text-secondary font-extrabold mb-1">Digital Correspondence</label>
                  <a href="mailto:devshreeagroseeds@gmail.com" className="font-prata text-[1.4rem] text-white no-underline break-words max-[768px]:text-[1.1rem]">devshreeagroseeds@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-[50px] h-[50px] bg-white/5 border border-white/10 flex items-center justify-center text-secondary shrink-0"><MapPin size={18} /></div>
                <div>
                  <label className="block text-[0.7rem] uppercase tracking-[0.15em] text-secondary font-extrabold mb-1">Office Address</label>
                  <span className="font-prata text-[1.2rem] text-white leading-relaxed">Shri Vrindavan Dham, Indore Bypass, <br /> Dewas (M.P.) 455001</span>
                </div>
              </div>
              <div className="flex items-start gap-5 opacity-80">
                <div className="w-[50px] h-[50px] bg-white/5 border border-white/10 flex items-center justify-center text-secondary shrink-0"><MapPin size={18} /></div>
                <div>
                  <label className="block text-[0.7rem] uppercase tracking-[0.15em] text-secondary font-extrabold mb-1">Facility Location</label>
                  <span className="font-prata text-[1.1rem] text-white">Chidawad, Dewas (M.P.)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-[2]">
            <div className="bg-white p-[60px] shadow-lg max-[992px]:p-10">
              <h3 className="text-primary mb-10 text-[2rem] font-prata">Initiate Inquiry</h3>
              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-5 max-[992px]:grid-cols-1">
                  <input type="text" placeholder="Full Name" required className="w-full bg-linen border border-black/10 p-[18px_24px] font-inherit text-[0.9rem] outline-none transition-colors duration-300 focus:border-secondary text-primary" />
                  <input type="email" placeholder="Email Address" required className="w-full bg-linen border border-black/10 p-[18px_24px] font-inherit text-[0.9rem] outline-none transition-colors duration-300 focus:border-secondary text-primary" />
                </div>
                <div>
                  <textarea placeholder="Specific Requirements (e.g., Variety, Quantity)" rows="5" className="w-full bg-linen border border-black/10 p-[18px_24px] font-inherit text-[0.9rem] outline-none transition-colors duration-300 focus:border-secondary text-primary"></textarea>
                </div>
                <button type="submit" className="bg-primary text-white border-none p-5 font-bold uppercase tracking-[0.2em] text-[0.8rem] flex items-center justify-center gap-3 cursor-pointer transition-colors duration-300 hover:bg-secondary">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
      
      {/* Decorative Text */}
      <div className="absolute bottom-[-5%] right-[-5%] text-[25vw] font-black text-white opacity-[0.03] pointer-events-none whitespace-nowrap -z-[1]">SEED CRAFT</div>
    </section>
  );
}

