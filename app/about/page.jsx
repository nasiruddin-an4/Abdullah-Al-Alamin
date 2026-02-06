"use client";

import React from 'react';
import {
  Award,
  Briefcase,
  GraduationCap,
  Target,
  Globe,
  ArrowRight,
  MapPin,
  Star
} from 'lucide-react';

export default function AboutPage() {
  const experiences = [
    {
      period: "Present",
      role: "Head of Marketing & Corporate Affairs",
      company: "Betopia Group",
      description: "Leading branding, marketing, and communications for 12 diverse business concerns. Orchestrating group-wide brand architecture and global recognition strategies.",
      icon: Briefcase
    },
    {
      period: "Previous",
      role: "Brand Portfolio Lead",
      company: "PRAN-RFL Group",
      description: "Orchestrated nationwide campaigns achieving 350% sales growth. Managed diverse FMCG portfolios through high-impact market penetration strategies.",
      icon: Target
    },
    {
      period: "Career Milestone",
      role: "Media Producer & Strategist",
      company: "Channel i / Metrocem",
      description: "Created and produced 'Metrocem To The Point', a leading talk show bridging industry gaps and driving national discourse.",
      icon: Star
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center bg-[#060a12] pt-32 pb-20 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-indigo-600/15 rounded-full blur-[140px]"></div>
          <div className="absolute inset-0 bg-linear-to-b from-blue-900/5 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-20 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl lg:text-[100px] font-bold text-white mb-10">
              Strategist<br />
              <span className="text-blue-500 relative inline-block">
                Visionary
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-slate-400 leading-relaxed max-w-2xl font-medium border-l-2 border-blue-600/30 pl-8">
              A dynamic brand leader with over <span className="text-white font-bold">13 years</span> of expertise in Bangladesh's top FMCG,
              building materials, and education sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-20">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

            {/* Left Column: Bio & Values */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-3">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Professional Journey</h2>
                <div className="w-28 h-1 bg-blue-600 rounded-full mb-4"></div>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                  <p>
                    With more than a decade of experience, I have developed a deep-seated passion for
                    shaping brands that stand the test of time. My journey has been defined by a
                    commitment to excellence and a drive to create measurable impact across diverse
                    industries.
                  </p>
                  <p>
                    Currently, I serve as the Head of Marketing & Corporate Affairs at <span className="text-slate-900 font-bold">Betopia Group</span>.
                    In this role, I manage a complex portfolio of 12 business units, ranging from technology
                    to manufacturing, ensuring each brand speaks with a unified voice while
                    effectively reaching its unique audience.
                  </p>
                  <p>
                    My philosophy is simple: <span className="text-blue-600 italic">"Strategy without execution is just an idea, and execution without strategy is just noise."</span>
                    I strive to bridge this gap, delivering creative visions that are grounded in
                    data-driven business acumen.
                  </p>
                </div>
              </div>

              {/* Personal Values */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                  <Globe className="text-blue-600 mb-6" size={32} />
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Global Perspective</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Bringing international standards to local markets, ensuring brands remain
                    competitive in an increasingly globalized economy.
                  </p>
                </div>
                <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                  <Target className="text-blue-600 mb-6" size={32} />
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Outcome Focus</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Always prioritizing measurable growth and ROI through strategic market
                    intelligence and consumer research.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Experience */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 rounded-xl p-8 lg:p-12 text-white">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Briefcase className="text-blue-400" /> Career Highlights
                </h3>

                <div className="space-y-12 relative before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-0.5 before:bg-white/10">
                  {experiences.map((exp, idx) => (
                    <div key={idx} className="relative pl-10">
                      <div className="absolute left-0 top-1.5 w-6 h-6 bg-blue-600 rounded-full border-4 border-slate-900 z-10 flex items-center justify-center">
                        <exp.icon size={12} className="text-white" />
                      </div>
                      <span className="text-blue-400 text-xs font-black uppercase tracking-widest mb-2 block">{exp.period}</span>
                      <h4 className="text-lg font-bold mb-1">{exp.role}</h4>
                      <p className="text-blue-100/60 text-sm font-medium mb-3">{exp.company}</p>
                      <p className="text-slate-400 text-xs leading-relaxed">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Foundation Section - Separated */}
      <section className="py-24 bg-blue-50/30 border-y border-blue-100">
        <div className="container mx-auto px-4 md:px-20">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Academic Foundation</h2>
            <div className="w-28 h-1 bg-blue-600 rounded-full mb-12"></div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Masters of Business Administration (MBA)</h3>
                <p className="text-blue-600 font-semibold mb-4">Major in Marketing</p>
                <div className="space-y-2">
                  <p className="text-slate-500 text-sm flex items-center gap-2">
                    <MapPin size={14} /> Leading University in Bangladesh
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Professional Marketing Certifications</h3>
                <p className="text-blue-600 font-semibold mb-4">Strategy & Communication</p>
                <div className="space-y-2">
                  <p className="text-slate-500 text-sm flex items-center gap-2">
                    <Globe size={14} /> Reputed Global & Local Institutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-black text-slate-900 mb-2">13+</div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-blue-600 mb-2">350%</div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Growth Peak</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-slate-900 mb-2">12+</div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Brands Managed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-blue-600 mb-2">3</div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Intl. Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-20 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl font-black text-slate-900">Let's build something <br /><span className="text-blue-600">extraordinary together.</span></h2>
            <p className="text-slate-500 font-medium">
              Whether you're looking for strategic branding advice or group-wide marketing
              leadership, I'm always open to discussing new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:hello@example.com" className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-600 transition-all duration-300">
                Get In Touch <ArrowRight size={20} />
              </a>
              <a href="#" className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold flex items-center justify-center gap-3 hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                Download Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
