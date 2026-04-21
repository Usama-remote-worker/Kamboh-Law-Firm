'use client';

import Link from 'next/link';
import { SITE_NAME, SHOP_ADDRESS } from '@/lib/constants';
import { 
  ShieldCheck, 
  X, 
  MessageCircle,
  Share2, 
  ArrowUpRight,
  Award,
  CircleCheck as CheckCircle2,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border">
      {/* Main Footer Content - White Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Address */}
          <div className="space-y-6 lg:col-span-1 text-primary">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 relative group-hover:scale-110 transition-transform duration-500">
                <img 
                  src="/logo.png" 
                  alt={SITE_NAME}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">{SITE_NAME}</h3>
            </div>
            <p className="text-base text-gray-600 font-medium leading-relaxed">
              Pakistan&apos;s trusted tax & legal advisory. Authorized FBR firm serving Lahore since 2008.
            </p>
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                  <MapPin className="w-5 h-5 text-gold-dark group-hover:text-white" />
                </div>
                <p className="text-sm font-bold opacity-80 leading-relaxed">
                   {SHOP_ADDRESS.street}, {SHOP_ADDRESS.city}, {SHOP_ADDRESS.country}.
                </p>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                  <Phone className="w-5 h-5 text-gold-dark group-hover:text-white" />
                </div>
                <a href={`tel:${SHOP_ADDRESS.phone1}`} className="text-sm font-black text-gold-dark hover:text-primary transition-colors">
                  {SHOP_ADDRESS.phone1}
                </a>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                  <Mail className="w-5 h-5 text-gold-dark group-hover:text-white" />
                </div>
                <a href="mailto:info@kambohassociates.com" className="text-sm font-black text-gold-dark hover:text-primary transition-colors">
                  info@kambohassociates.com
                </a>
              </div>
            </div>
          </div>

          {/* Hubs */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gold-dark mb-8">Engagement Hub</h4>
            <ul className="space-y-4">
              {[{ name: 'Advisory Portfolio', path: '/services' }, { name: 'Knowledge Center', path: '/tools' }, { name: 'Executive Blog', path: '/blog' }, { name: 'Strategic Vision', path: '/about' }].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="group flex items-center gap-2 text-gray-500 hover:text-gold transition-all font-bold">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gold-dark mb-8">Intelligence</h4>
            <ul className="space-y-4">
              {[{ name: 'Regulatory FAQ', path: '/faq' }, { name: 'Compliance Guides', path: '/blog' }, { name: 'Tax Architecture', path: '/services' }, { name: 'Direct Support', path: '/contact' }].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="group flex items-center gap-2 text-gray-500 hover:text-gold transition-all font-bold">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gold-dark mb-8">Legal Framework</h4>
            <ul className="space-y-4">
              {[{ name: 'Privacy Protocols', path: '/privacy' }, { name: 'Service Mandate', path: '/terms' }, { name: 'Regulatory Disclaimer', path: '/disclaimer' }].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="group flex items-center gap-2 text-gray-500 hover:text-gold transition-all font-bold">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Global Bottom Bar - Green Area */}
      <div className="bg-primary py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 text-white">
            <div className="flex flex-wrap justify-center gap-8">
               <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-gold/40" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40">AES-256 Sovereignty</span>
               </div>
               <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-gold/40" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40">ISO-9001 Certified</span>
               </div>
               <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold/40" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40">FBR Authorized</span>
               </div>
            </div>
            
            <p className="text-sm text-white/40 font-bold tracking-tight">
              &copy; {currentYear} {SITE_NAME}. Orchestrating Financial Sovereignty since 2008.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
