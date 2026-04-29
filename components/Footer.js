import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-linen py-[120px] pb-[60px]">
      <div className="container mx-auto px-8">
        
        <div className="flex justify-between mb-20 gap-[60px] max-[768px]:flex-col">
          <div className="max-w-[400px]">
            <img 
              src="/images/Logo.jpeg" 
              alt="Dev Shree Logo" 
              className="w-16 h-16 object-contain mb-6 rounded-sm"
            />
            <h2 className="text-[2.2rem] mb-6 font-prata">Dev Shree <br /> <span className="text-[0.8rem] uppercase tracking-[0.4em] text-secondary font-extrabold block">Agro Seeds</span></h2>
            <p className="text-[1rem] leading-[1.6] opacity-70 mb-8">Crafting higher standards for agricultural excellence. We empower farmers with the science of selection.</p>
            <div className="flex flex-col gap-4 opacity-70 text-[0.9rem]">
              <p><strong>Office:</strong> Shri Vrindavan Dham, Indore Bypass, Dewas (M.P.) 455001</p>
              <p><strong>Work:</strong> Chidawad, Dewas (M.P.)</p>
              <p><strong>Email:</strong> devshreeagroseeds@gmail.com</p>
            </div>
          </div>
          
          <div className="flex gap-[100px] max-[768px]:gap-10 max-[768px]:flex-wrap">
            <div className="flex flex-col gap-3">
              <h4 className="text-[0.8rem] uppercase tracking-[0.2em] text-primary mb-[30px] font-bold">Explore</h4>
              <a href="/" className="no-underline text-[0.95rem] text-textBody transition-colors duration-300 hover:text-secondary">Home</a>
              <a href="/about" className="no-underline text-[0.95rem] text-textBody transition-colors duration-300 hover:text-secondary">About Us</a>
              <a href="/products" className="no-underline text-[0.95rem] text-textBody transition-colors duration-300 hover:text-secondary">Products</a>
              <a href="/careers" className="no-underline text-[0.95rem] text-textBody transition-colors duration-300 hover:text-secondary">Careers</a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-[0.8rem] uppercase tracking-[0.2em] text-primary mb-[30px] font-bold">Categories</h4>
              <a href="#products" className="no-underline text-[0.95rem] text-textBody transition-colors duration-300 hover:text-secondary">Kharif Variety</a>
              <a href="#products" className="no-underline text-[0.95rem] text-textBody transition-colors duration-300 hover:text-secondary">Rabi Variety</a>
              <a href="#products" className="no-underline text-[0.95rem] text-textBody transition-colors duration-300 hover:text-secondary">Scientific Data</a>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="w-full h-[1px] bg-black/10 mb-10"></div>
          <div className="flex justify-between items-center text-[0.85rem] opacity-60 max-[768px]:flex-col max-[768px]:gap-5 max-[768px]:text-center">
            <span>&copy; {new Date().getFullYear()} Dev Shree Agro Seeds. All rights reserved.</span>
            <div>
               Designed for <span className="italic font-prata text-primary">Prosperity</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

