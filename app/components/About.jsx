"use client";

import React from 'react';
import { Target, TrendingUp, Radio, GraduationCap, Briefcase, Award, Shield, CheckCircle, Globe } from 'lucide-react';

const About = () => {
  // Data for the Right Side Grid Cards
  const achievements = [
    {
      icon: TrendingUp,
      title: "Orchestrated PRAN nationwide campaign",
      desc: "Achieved 350% sales over target in just 45 days."
    },
    {
      icon: Radio,
      title: "Created 'Metrocem To The Point'",
      desc: "Produced one of Channel i's highest-rated industry talk shows."
    },
    {
      icon: Shield,
      title: "Bengal Cement Transformation",
      desc: "Revived stakeholder trust via a strategic crisis communication overhaul."
    },
    {
      icon: GraduationCap,
      title: "Camp for Life Initiative",
      desc: "Led Bangladesh's first life-skill bootcamp for 1500+ youth."
    }
  ];

  // Data for the Bottom Left Stats
  const stats = [
    {
      icon: Briefcase,
      value: "12+",
      label: "BUSINESS UNITS LED"
    },
    {
      icon: TrendingUp,
      value: "350%",
      label: "SALES PEAK GROWTH"
    },
    {
      icon: Shield,
      value: "13+",
      label: "YEARS IN LEADERSHIP"
    },
    {
      icon: Award,
      value: "3",
      label: "INTERNATIONAL AWARDS"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white relative overflow-hidden">

      <div className="container mx-auto px-4 md:px-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column: Executive Profile & Bio */}
          <div className="space-y-10">

            {/* Header Section */}
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase">
                <Globe size={14} /> EXECUTIVE PROFILE
              </span>

              <h2 className="text-4xl lg:text-7xl font-black text-slate-900 leading-[0.95] tracking-tight">
                Strategist <br />
                <span className="text-blue-600">by Design,</span> <br />
                Leader <br />
                <span className="text-blue-600">by Impact.</span>
              </h2>

              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  As a dynamic brand leader with over 13 years of expertise in Bangladesh's top FMCG, building materials, and education sectors, I specialize in crafting high-impact brand strategies that drive measurable growth.
                </p>
                <p>
                  I currently lead branding, marketing, and communications for 12 diverse business concerns at <strong className="text-slate-900">Betopia Group</strong>, balancing creative vision with business acumen to deliver innovation and measurable results on a global stage.
                </p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-100 p-4 rounded-xl border border-slate-100 group hover:border-blue-100 transition-colors">
                  {/* <stat.icon className="text-blue-600 mb-3" size={20} /> */}
                  <div className="font-black text-2xl text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dark Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {achievements.map((item, idx) => (
              <div key={idx} className="bg-slate-900 p-8 rounded-xl text-white hover:-translate-y-2 transition-transform duration-300 group">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                  <item.icon size={22} strokeWidth={2} />
                </div>
                <h4 className="font-bold text-xl mb-3 leading-tight">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
