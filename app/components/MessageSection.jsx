"use client";

import React from 'react';
import { Quote } from 'lucide-react';

const MessageSection = () => {
  return (
    <section className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>

      <div className="container mx-auto px-4 md:px-20 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-500">
              <Quote size={32} className="fill-current" />
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-10">
            "Positioning brands not just as companies, but as <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">movements that shape legacies</span> across generations."
          </h2>

          <div className="flex flex-col items-center gap-2">
            <h3 className="text-xl font-bold text-slate-900">Abdullah Al Alamin</h3>
            <p className="text-slate-400 font-medium tracking-wide uppercase text-sm">Head of Brand & Communication</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
