'use client';

import Link from 'next/link';
import { SITE_NAME } from '@/lib/constants';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-primary/95 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl' 
        : 'bg-primary py-6 border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-gold/10 border border-gold/20 rounded-xl flex items-center justify-center group-hover:bg-gold group-hover:rotate-6 transition-all duration-500">
              <span className="text-gold group-hover:text-primary text-xl font-black">KA</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white tracking-tight">{SITE_NAME}</span>
              <span className="text-[10px] font-black text-gold uppercase tracking-[0.3em]">Regulatory Advisory</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {[
              { name: 'Home', path: '/' },
              { name: 'Advisory', path: '/services' },
              { name: 'Strategic Hub', path: '/tools' },
              { name: 'Insights', path: '/blog' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-gray-400 font-bold text-sm uppercase tracking-widest hover:text-gold transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-6">
             <Link
              href="/contact"
              className="hidden lg:flex px-8 py-3 bg-gold text-white rounded-xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-300 shadow-[0_10px_30px_rgba(16,185,129,0.2)]"
            >
              Initiate Discovery
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-white p-2" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-10 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
            {[
              { name: 'Home', path: '/' },
              { name: 'Services', path: '/services' },
              { name: 'Tools', path: '/tools' },
              { name: 'Blog', path: '/blog' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
               <Link 
                key={item.name}
                href={item.path} 
                onClick={() => setIsOpen(false)}
                className="block py-4 text-center text-xl font-bold text-white border-b border-white/5 hover:text-gold"
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="block mt-8 px-6 py-5 bg-gold text-primary rounded-2xl text-center font-black text-lg uppercase tracking-widest"
            >
              Consult an Expert
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

