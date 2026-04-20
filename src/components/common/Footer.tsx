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
    <footer className="bg-primary text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand & Address */}
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gold/10 border border-gold/20 rounded-xl flex items-center justify-center">
                <span className="text-gold text-xl font-black">KA</span>
              </div>
              <h3 className="text-2xl font-black tracking-tight">{SITE_NAME}</h3>
            </div>
            <p className="text-base text-gray-400 font-medium leading-relaxed">
              Pakistan&apos;s trusted tax & legal advisory. Authorised FBR firm serving Lahore since 2008.
            </p>
            {/* Real Address */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                <p className="text-sm font-semibold text-gray-400">{SHOP_ADDRESS.street}, {SHOP_ADDRESS.city}, {SHOP_ADDRESS.country}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <div>
                  <a href={`tel:${SHOP_ADDRESS.phone1}`} className="block text-sm font-bold text-gray-300 hover:text-gold transition-colors">{SHOP_ADDRESS.phone1}</a>
                  <a href={`tel:${SHOP_ADDRESS.phone2}`} className="block text-sm font-bold text-gray-300 hover:text-gold transition-colors">{SHOP_ADDRESS.phone2}</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:info@kambohassociates.com" className="text-sm font-bold text-gray-300 hover:text-gold transition-colors">info@kambohassociates.com</a>
              </div>
            </div>
            <div className="flex gap-4 pt-2">
              {[X, MessageCircle, Share2].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Engagement Hub */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gold mb-10">Engagement Hub</h4>
            <ul className="space-y-4">
              {[
                { name: 'Advisory Portfolio', path: '/services' },
                { name: 'Knowledge Center', path: '/tools' },
                { name: 'Executive Blog', path: '/blog' },
                { name: 'Strategic Vision', path: '/about' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all font-bold group">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Intelligence */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gold mb-10">Intelligence</h4>
            <ul className="space-y-4">
              {[
                { name: 'Regulatory FAQ', path: '/faq' },
                { name: 'Compliance Guides', path: '/blog' },
                { name: 'Tax Architecture', path: '/services' },
                { name: 'Direct Support', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all font-bold group">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Framework */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gold mb-10">Legal Framework</h4>
            <ul className="space-y-4">
              {[
                { name: 'Privacy Protocols', path: '/privacy' },
                { name: 'Service Mandate', path: '/terms' },
                { name: 'Regulatory Disclaimer', path: '/disclaimer' },
                { name: 'Entity Sitemap', path: '/sitemap' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all font-bold group">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Global Bottom Bar */}
        <div className="pt-12 border-t border-white/5">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="flex flex-wrap justify-center gap-10">
               <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-gold" />
                  <span className="text-xs font-black uppercase tracking-widest text-gray-500">AES-256 Sovereignty</span>
               </div>
               <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-gold" />
                  <span className="text-xs font-black uppercase tracking-widest text-gray-500">ISO-9001 Certified</span>
               </div>
               <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold" />
                  <span className="text-xs font-black uppercase tracking-widest text-gray-500">FBR Authorized</span>
               </div>
            </div>
            
            <p className="text-sm text-gray-500 font-bold tracking-tight">
              &copy; {currentYear} {SITE_NAME}. Orchestrating Financial Sovereignty since 2008.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

