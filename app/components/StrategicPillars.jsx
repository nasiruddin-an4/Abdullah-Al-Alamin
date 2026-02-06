"use client";

import React from 'react';
import { Target, ShieldAlert, BarChart3, Globe } from 'lucide-react';

const StrategicPillars = () => {
  const pillars = [
    {
      icon: Target,
      color: "bg-blue-600",
      title: "Brand Evolution",
      desc: "Crafting group-wide brand architecture and global recognition strategies for multi-billion BDT enterprises."
    },
    {
      icon: ShieldAlert,
      color: "bg-indigo-600",
      title: "Crisis Leadership",
      desc: "Implementing rapid-response communication strategies to counter market rumors and restore stakeholder trust."
    },
    {
      icon: BarChart3,
      color: "bg-purple-600",
      title: "Market Intelligence",
      desc: "Leveraging data-driven insights to design trade activation tools and national scale consumer campaigns."
    },
    {
      icon: Globe,
      color: "bg-slate-900",
      title: "International Relations",
      desc: "Building global partnerships through embassy engagement, chambers, and international trade bodies."
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-20 relative z-10 w-full">

        {/* Header */}
        <div className="mb-20 text-left md:text-center max-w-3xl mx-0 md:mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-4">
            Core Value Propositions
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Strategic Leadership Pillars
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 group h-full">
              <div className={`w-14 h-14 ${pillar.color} rounded-md flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                <pillar.icon className="text-white" size={28} strokeWidth={2} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StrategicPillars;
