"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      image: "/news1.jpg",
      date: "Oct 24, 2025",
      category: "Media",
      title: "Betopia Group Expands into European Markets",
      excerpt: "Discussing the strategic vision behind our latest international partnerships and what it means for Bangladesh's export sector.",
      link: "/news/expansion-europe"
    },
    {
      image: "/news2.jpeg",
      date: "Sep 15, 2025",
      category: "Thoughts",
      title: "The Future of Brand Loyalty in a Digital Age",
      excerpt: "Keynote speech at the Asia Marketing Summit on how brands can build authentic communities beyond transactions.",
      link: "/news/brand-loyalty"
    },
    {
      image: "/news3.jpeg",
      date: "Aug 02, 2025",
      category: "CSR",
      title: "Camp for Life: Empowering 10,000 Next-Gen Leaders",
      excerpt: "Celebrating the 5th anniversary of our youth mentorship program with a new nationwide initiative.",
      link: "/news/camp-for-life-anniversary"
    }
  ];

  return (
    <section id="news" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-20">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2 block">Insights & Updates</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Latest News
            </h2>
          </div>
          <Link href="/news" className="group flex items-center gap-2 font-bold text-slate-500 hover:text-blue-600 transition-colors">
            View All Articles
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {newsItems.map((item, idx) => (
            <Link key={idx} href={item.link} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-slate-100">

              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 uppercase tracking-wide">
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col grow">
                <div className="flex items-center gap-2 text-slate-400 text-sm font-medium mb-4">
                  <Calendar size={14} />
                  {item.date}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 grow">
                  {item.excerpt}
                </p>

                <div className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Read Article
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default News;
