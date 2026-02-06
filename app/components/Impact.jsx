"use client";

import React from 'react';
import { TrendingUp, Tv, Users, Trophy } from 'lucide-react';

const Impact = () => {
  const milestones = [
    {
      icon: TrendingUp,
      stat: "350%",
      title: "Sales Growth",
      desc: "Over target for PRAN Frozen Food nationwide campaign in 45 days."
    },
    {
      icon: Tv,
      stat: "Top Rated",
      title: "Media Production",
      desc: "Creator of \"Metrocem To The Point\", a leading talk show on Channel i."
    },
    {
      icon: Users,
      stat: "1500+",
      title: "Youth Impact",
      desc: "Participants in Bangladesh's first life-skill bootcamp (Camp for Life)."
    },
    {
      icon: Trophy,
      stat: "3",
      title: "International Industry Awards",
      desc: "Received for a 5-year research project on tea shop retail models."
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-slate-950 text-white">
      <div className="container mx-auto px-4 md:px-20">

        {/* Header */}
        <div className="mb-16">
          <h4 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-3">Impact at a Glance</h4>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">Key Business Milestones</h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((item, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-white/5 p-8 rounded-2xl hover:bg-slate-900 transition-colors duration-300 group">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <item.icon size={24} />
              </div>

              <h3 className="text-3xl font-black text-blue-500 mb-2">{item.stat}</h3>
              <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Impact;
