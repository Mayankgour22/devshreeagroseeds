"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed left-0 right-0 z-[2000] px-8 max-[768px]:px-4 transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] ${scrolled ? 'top-[15px]' : 'top-[30px]'}`}>
      <nav className={`relative z-[2010] max-w-[1400px] mx-auto bg-linen/95 backdrop-blur-[10px] border border-black/10 flex items-center justify-between rounded-[4px] shadow-md transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] ${scrolled ? 'h-16 px-8' : 'h-20 px-12'} max-[992px]:px-6 max-[768px]:h-16`}>
        <Link href="/" className="flex items-center gap-[12px] no-underline">
          <img 
            src="/images/Logo.jpeg" 
            alt="Dev Shree Logo" 
            className="w-12 h-12 object-contain rounded-sm max-[768px]:w-10 max-[768px]:h-10 border border-black/5"
          />
          <div className="flex flex-col">
            <span className="font-prata text-[1.4rem] text-primary leading-none max-[768px]:text-[1.1rem]">Dev Shree</span>
            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-secondary font-extrabold max-[768px]:text-[0.5rem]">Agro Seeds</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-10 max-[992px]:hidden">
          <Link href="/products" className="text-[0.75rem] font-extrabold uppercase tracking-[0.1em] text-primary no-underline relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-secondary after:transition-all after:duration-300 hover:after:w-full">Products</Link>
          <Link href="/process" className="text-[0.75rem] font-extrabold uppercase tracking-[0.1em] text-primary no-underline relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-secondary after:transition-all after:duration-300 hover:after:w-full">Our Process</Link>
          <Link href="/success" className="text-[0.75rem] font-extrabold uppercase tracking-[0.1em] text-primary no-underline relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-secondary after:transition-all after:duration-300 hover:after:w-full">Success Stories</Link>
          <Link href="/about" className="text-[0.75rem] font-extrabold uppercase tracking-[0.1em] text-primary no-underline relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-secondary after:transition-all after:duration-300 hover:after:w-full">About Us</Link>
          <Link href="/careers" className="text-[0.75rem] font-extrabold uppercase tracking-[0.1em] text-primary no-underline relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-secondary after:transition-all after:duration-300 hover:after:w-full">Careers</Link>
          <Link href="#contact" className="bg-primary text-white py-[12px] px-8 text-[0.75rem] font-bold uppercase tracking-[0.1em] no-underline transition-all duration-300 hover:bg-secondary rounded-[2px] ml-4">Get In Touch</Link>
        </div>

        {/* Tablet/Mobile Burger Menu */}
        <button 
          className="hidden max-[992px]:block bg-transparent border-none text-primary cursor-pointer z-[2020] p-2 relative" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Unique Fullscreen Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-primary z-[2005] flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-10'}`}>
        <div className="flex flex-col gap-8 text-center pt-20">
          <Link href="/" onClick={() => setIsOpen(false)} className="font-prata text-[2rem] text-white no-underline hover:text-secondary transition-colors">Home</Link>
          <Link href="/products" onClick={() => setIsOpen(false)} className="font-prata text-[2rem] text-white no-underline hover:text-secondary transition-colors">Products</Link>
          <Link href="/process" onClick={() => setIsOpen(false)} className="font-prata text-[2rem] text-white no-underline hover:text-secondary transition-colors">How We Work</Link>
          <Link href="/success" onClick={() => setIsOpen(false)} className="font-prata text-[2rem] text-white no-underline hover:text-secondary transition-colors">Success Stories</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="font-prata text-[2rem] text-white no-underline hover:text-secondary transition-colors">About Us</Link>
          <Link href="/careers" onClick={() => setIsOpen(false)} className="font-prata text-[2rem] text-white no-underline hover:text-secondary transition-colors">Careers</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="font-prata text-[2rem] text-white no-underline hover:text-secondary transition-colors">Contact</Link>
          
          <div className="mt-6 border-t border-white/10 pt-6">
            <a href="https://wa.me/918349798177" className="bg-secondary text-white py-4 px-10 text-[0.8rem] font-bold uppercase tracking-[0.2em] inline-block">WhatsApp Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}


