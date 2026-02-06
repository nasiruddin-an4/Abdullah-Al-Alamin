"use client";

import React from 'react';
import { Linkedin, Mail, Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-end lg:items-center pt-24 overflow-hidden bg-white">

      <div className="container mx-auto px-4 md:px-20 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">

          {/* Left Side: Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 lg:space-y-10 pb-20 lg:pb-0">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-tight lg:leading-[1.1] tracking-tight">
              Shaping Brands. <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
                Leading Growth.
              </span>
            </h1>

            <p className="text-slate-600 text-base lg:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              Head of Marketing & Corporate Affairs at <span className="text-slate-900 font-bold">Betopia Group</span>.
              Driving business expansion through strategic communication and brand innovation.
            </p>

            <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-6">
              <p className="text-[10px] lg:text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">Connect With Me</p>
              <div className="flex items-center gap-3 lg:gap-4">
                <a href="#" aria-label="LinkedIn" className="w-10 h-10 lg:w-12 lg:h-12 bg-white text-blue-700 rounded-full shadow-md shadow-blue-900/5 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 border border-slate-100">
                  <Linkedin size={20} strokeWidth={2.5} />
                </a>
                <a href="#" aria-label="Facebook" className="w-10 h-10 lg:w-12 lg:h-12 bg-white text-blue-600 rounded-full shadow-md shadow-blue-900/5 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 border border-slate-100">
                  <Facebook size={20} strokeWidth={2.5} />
                </a>
                <a href="#" aria-label="Instagram" className="w-10 h-10 lg:w-12 lg:h-12 bg-white text-pink-600 rounded-full shadow-md shadow-blue-900/5 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 border border-slate-100">
                  <Instagram size={20} strokeWidth={2.5} />
                </a>
                <a href="mailto:hello@example.com" aria-label="Email" className="w-10 h-10 lg:w-12 lg:h-12 bg-white text-slate-700 rounded-full shadow-md shadow-blue-900/5 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 border border-slate-100">
                  <Mail size={20} strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Image Placeholder */}
          <div className="w-full lg:flex-1 relative flex justify-center lg:justify-end">
            <div className="relative w-[85%] lg:w-full max-w-2xl aspect-4/5 lg:aspect-square flex items-end justify-center">
              <Image
                src="/heroImg.jpeg"
                alt="Abdullah Al Alamin"
                width={800}
                height={800}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
