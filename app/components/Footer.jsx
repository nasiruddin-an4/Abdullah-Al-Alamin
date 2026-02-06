"use client";

import React from 'react';
import { ArrowUpRight, Linkedin, Twitter, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Impact', href: '/#achievements' },
    { name: 'Career', href: '/#experience' },
    { name: 'Media', href: '/#news' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <footer id="contact" className="relative bg-slate-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 md:px-2 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="#hero" className="inline-flex items-center gap-3 group">
              <Image src="/witeLogo@4x.png" alt="Logo" width={250} height={100} />
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
              Helping brands navigate the future with strategic vision and creative excellence. Let's create something extraordinary together.
            </p>
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 lg:pl-8">
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-blue-600"></span>
              Explore
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-slate-400 hover:text-white transition-colors"
                  >
                    <ArrowUpRight size={14} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-blue-600"></span>
              Get in Touch
            </h3>
            <div className="space-y-6">
              <Link href="mailto:hello@abdullahalamin.com" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Email Me</p>
                  <p className="text-white group-hover:text-blue-400 transition-colors">hello@abdullahalamin.com</p>
                </div>
              </Link>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Location</p>
                  <p className="text-white">Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Call</p>
                  <p className="text-white">+880 1XXX XXXXXX</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Abdullah Al Alamin. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
