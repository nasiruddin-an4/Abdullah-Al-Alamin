"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Impact', href: '/#achievements' },
    { name: 'Career', href: '/#experience' },
    { name: 'Media', href: '/#news' },
    { name: 'Expertise', href: '/#skills' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'
      }`}>
      <div className="container mx-auto px-4 md:px-2">
        <div className={`relative bg-white backdrop-blur-2xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.06)] rounded-xl px-2 md:px-4 flex justify-between h-16 items-center overflow-hidden transition-all duration-500 ${scrolled ? 'shadow-blue-900/5' : ''
          }`}>


          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <Image src="/Logo@4x.png" alt="Logo" width={300} height={300} className="w-[80%] md:w-[300px] h-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link href={link.href} key={link.name} className="px-4 py-2 text-[11px] font-black uppercase tracking-[0.15em] text-slate-500 hover:text-blue-600 transition-all relative group">
                {link.name}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            ))}

            <div className="h-6 w-[1px] bg-slate-200 mx-4"></div>

            <Link href="/#contact" className="group flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest rounded-xl hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300">

              Let's Talk <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      <div
        className={`lg:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed top-0 right-0 w-[80%] h-screen bg-white shadow-2xl z-100 transition-all duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-16">
            <Link href="/" className="flex items-center gap-2 group cursor-pointer">
              <Image src="/Logo@4x.png" alt="Logo" width={300} height={300} className="w-[80%] md:w-[300px] h-auto" />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-3 text-slate-900 hover:bg-slate-100 rounded-2xl transition-all"
            >
              <X size={28} />
            </button>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-black text-slate-900 hover:text-blue-600 transition-colors py-4 border-b border-slate-100 last:border-0 flex justify-between items-center group"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {link.name}
                <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-600" size={32} />
              </Link>
            ))}
          </div>

          <div className="mt-auto">
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-3 py-3 bg-blue-600 text-white text-lg font-bold uppercase tracking-widest rounded-xl"
            >
              Lets Connect <Sparkles size={20} />
            </Link>
            <p className="text-center mt-6 text-slate-400 text-sm font-medium italic">
              "Shaping brands that generations will look up to."
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
