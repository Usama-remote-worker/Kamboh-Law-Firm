'use client';

import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import { useState } from 'react';
import { SHOP_ADDRESS } from '@/lib/constants';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Star,
  ExternalLink
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Strategic inquiry received. A senior consultant will respond within 2 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.1]">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold rounded-full filter blur-[150px]"></div>
        </div>
        <Container>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
             <span className="text-gold font-black uppercase tracking-[0.3em] text-xs mb-4 block">Direct Engagement</span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Initiate <span className="gradient-text">Discovery</span></h1>
            <p className="text-xl md:text-2xl text-gray-400 font-medium">
              Discuss your regulatory and financial mandates with Pakistan&apos;s leading advisory firm.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 md:py-36 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Contact Form */}
            <div className="bg-muted/20 p-10 md:p-16 rounded-[3rem] border border-border shadow-sm">
              <h2 className="text-4xl font-black text-primary mb-10 tracking-tight">Engage a Consultant</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-5 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-white font-medium transition-all"
                      placeholder="e.g. Ahmed Khan"
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-5 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-white font-medium transition-all"
                      placeholder="ahmed@corporate.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-5 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-white font-medium transition-all"
                      placeholder="+92 XXX XXXXXXX"
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Mandate Type</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-5 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-white font-bold transition-all appearance-none"
                    >
                      <option value="">Select Priority</option>
                      <option value="tax-filing">Tax Strategic Advisory</option>
                      <option value="business-registration">Entity Incorporation</option>
                      <option value="accounting">Managed Accounting</option>
                      <option value="general">M&A / Corporate Law</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Message / Mandate Detail</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-6 py-5 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-white font-medium transition-all"
                    placeholder="Provide a brief overview of your requirement..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full py-8 text-xl font-black bg-primary text-white hover:bg-gold-dark transition-all duration-300 rounded-2xl shadow-xl shadow-gold/10">
                  Submit Strategic Inquiry <Send className="w-5 h-5 ml-3" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-12">
              {/* GBP Card */}
              <div className="p-10 md:p-12 rounded-[3rem] bg-white border border-border shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                    <span className="text-gold text-xl font-black">KA</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-primary">{SHOP_ADDRESS.name}</h2>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-gold fill-gold' : 'text-gold fill-gold/40'}`} />
                      ))}
                      <span className="text-sm font-bold text-gray-500 ml-2">{SHOP_ADDRESS.rating} ({SHOP_ADDRESS.reviewCount} reviews)</span>
                    </div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{SHOP_ADDRESS.type}</span>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex gap-5 items-start group">
                    <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                      <MapPin className="w-5 h-5 text-gold-dark" />
                    </div>
                    <div>
                      <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Address</h3>
                      <p className="text-lg font-bold text-primary">{SHOP_ADDRESS.street}</p>
                      <p className="text-lg font-bold text-primary">{SHOP_ADDRESS.city}, {SHOP_ADDRESS.country}</p>
                      <a
                        href={SHOP_ADDRESS.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-bold text-gold-dark hover:text-gold mt-2 transition-colors"
                      >
                        View on Google Maps <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-5 items-start group">
                    <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                      <Phone className="w-5 h-5 text-gold-dark" />
                    </div>
                    <div>
                      <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Phone Numbers</h3>
                      <a href={`tel:${SHOP_ADDRESS.phone1}`} className="block text-xl font-black text-primary hover:text-gold transition-colors">
                        {SHOP_ADDRESS.phone1}
                      </a>
                      <a href={`tel:${SHOP_ADDRESS.phone2}`} className="block text-xl font-black text-primary hover:text-gold transition-colors mt-1">
                        {SHOP_ADDRESS.phone2}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-5 items-start group">
                    <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                      <Mail className="w-5 h-5 text-gold-dark" />
                    </div>
                    <div>
                      <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Official Email</h3>
                      <a href="mailto:info@kambohassociates.com" className="text-xl font-bold text-primary hover:text-gold transition-colors">
                        info@kambohassociates.com
                      </a>
                      <p className="text-sm font-semibold text-gold-dark/60 mt-1">Response SLA: 120 Minutes</p>
                    </div>
                  </div>

                  <div className="flex gap-5 items-start group">
                    <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                      <Clock className="w-5 h-5 text-gold-dark" />
                    </div>
                    <div>
                      <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Business Hours</h3>
                      <p className="text-xl font-bold text-primary">{SHOP_ADDRESS.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative rounded-[3rem] bg-primary p-12 overflow-hidden text-white group cursor-default">
                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                    <ShieldCheck className="w-48 h-48 text-gold" />
                 </div>
                 <div className="relative z-10">
                   <h3 className="text-3xl font-bold mb-4">Urgent Response?</h3>
                   <p className="text-lg text-gray-400 font-medium mb-10">
                     Our rapid response unit is active 24/7 for critical regulatory matters.
                   </p>
                   <Button size="lg" className="bg-gold text-primary hover:bg-white px-10 rounded-xl font-bold">
                     Initiate Priority Chat
                   </Button>
                 </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Simplified FAQ */}
      <section className="py-24 md:py-36 bg-muted/20">
        <Container>
          <div className="text-center mb-20 text-primary">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Concerns & Clarifications</h2>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { q: 'What is the standard SLA for return filing?', a: 'High-priority private client filings are typically authorized and submitted to the FBR within 24-48 hours post-documentation.' },
              { q: 'Is client confidentiality protocols in place?', a: 'Absolute sovereignty. We employ bank-grade AES-256 encryption and legal non-disclosure agreements for all engagements.' },
              { q: 'Do you offer recursive monthly retainerships?', a: 'Yes. We provide tiered retainership models for corporate accounting, payroll, and continuous tax optimization.' },
              { q: 'Are you authorized by FBR and SECP?', a: 'Kamboh Associates is an officially registered and authorized consultant firm with direct integration portals for both FBR and SECP.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-10 rounded-[2.5rem] bg-white border border-border group hover:border-gold/30 transition-all duration-500">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-gold-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-primary mb-4 leading-tight">{item.q}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

