'use client';

import Link from 'next/link';
import { SITE_NAME, SHOP_ADDRESS } from '@/lib/constants';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

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
        ? 'bg-primary/95 backdrop-blur-md py-3 shadow-xl border-b border-white/10' 
        : 'bg-primary py-5 border-b border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-14 h-14 relative group-hover:scale-110 transition-transform duration-500 bg-white rounded-full p-1">
              <img 
                src="/logo.png" 
                alt={SITE_NAME}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white tracking-tight">{SITE_NAME}</span>
              <span className="text-[10px] font-black text-gold uppercase tracking-[0.3em]">Authorized Regulatory Advisory</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
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
                className="text-white/80 font-semibold text-sm uppercase tracking-widest hover:text-gold transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Contact & CTA */}
          <div className="flex items-center gap-8">
            <div className="hidden xl:flex items-center gap-3 text-white">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Phone className="w-4 h-4 text-gold" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest leading-none mb-1">Direct Advisory</div>
                <a href={`tel:${SHOP_ADDRESS.phone1}`} className="text-sm font-black hover:text-gold transition-colors leading-none">{SHOP_ADDRESS.phone1}</a>
              </div>
            </div>
            
            <Link
              href="/contact"
              className="hidden lg:flex px-8 py-3 bg-gold text-primary rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-300 shadow-xl shadow-gold/20"
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
          <div className="md:hidden mt-6 pb-10 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300 bg-primary">
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
                className="block py-4 text-center text-xl font-bold text-white border-b border-white/10 hover:text-gold"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-6">
              <div className="flex flex-col items-center gap-2 mb-6">
                 <a 
                   href={`tel:${SHOP_ADDRESS.phone1}`}
                   className="flex items-center justify-center gap-3 text-white font-bold"
                 >
                   <Phone className="w-5 h-5 text-gold" /> {SHOP_ADDRESS.phone1}
                 </a>
              </div>
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="block px-6 py-5 bg-gold text-primary rounded-2xl text-center font-black text-lg uppercase tracking-widest"
              >
                Consult an Expert
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
