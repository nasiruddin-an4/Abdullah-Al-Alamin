"use client";

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Plane, Camera, Coffee, BookOpen, Music, Users, ArrowUpRight } from 'lucide-react';

const LifeStyle = () => {
  const interests = [
    {
      image: "/life1.jpg",
      icon: Plane,
      title: "Global Explorer",
      desc: "Exploring new cultures and markets across 15+ countries.",
      link: "/lifestyle/travel"
    },
    {
      image: "/life2.jpg",
      icon: Camera,
      title: "Photography",
      desc: "Capturing moments and architectural storytelling through the lens.",
      link: "/lifestyle/photography"
    },
    {
      image: "/life3.jpg",
      icon: Users,
      title: "Mentorship",
      desc: "Guiding the next generation of marketers at university bootcamps.",
      link: "/lifestyle/mentorship"
    },
    {
      image: "/life4.jpeg",
      icon: BookOpen,
      title: "Continuous Learning",
      desc: "Avid reader of psychology, behavioral economics, and brand strategy.",
      link: "/lifestyle/learning"
    }
  ];

  return (
    <section id="lifestyle" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-20">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2 block">Personal & Professional</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Life Beyond Styles
            </h2>
          </div>
          <p className="text-slate-500 max-w-md text-left">
            Believing that a rich life outside of work fuels creativity within it. Here are the passions that keep me inspired.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((item, idx) => (
            <Link key={idx} href={item.link} className="group bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 block">
              {/* Card Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors duration-500"></div>
              </div>

              {/* Card Content */}
              <div className="p-6 relative">
                <div className="absolute -top-8 right-6 w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:bg-slate-900 transition-colors duration-300">
                  <item.icon size={24} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 mt-4">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
                <span className="inline-block px-4 py-2 rounded-lg bg-slate-50 text-blue-600 text-sm font-bold group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  Read More
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LifeStyle;
