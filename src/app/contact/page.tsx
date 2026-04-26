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
      <section className="relative bg-white text-primary py-24 md:py-36 overflow-hidden border-b border-border">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold rounded-full filter blur-[150px]"></div>
        </div>
        <Container>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
             <span className="text-gold-dark font-black uppercase tracking-[0.3em] text-xs mb-4 block">Direct Engagement</span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-primary">Initiate <span className="text-gold-dark">Consultation</span></h1>
            <p className="text-xl md:text-2xl text-gray-500 font-medium">
              Discuss your regulatory and financial mandates with Pakistan&apos;s leading advisory firm.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info Cards */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-12">Visit Our <span className="text-gold-dark">Main Boulevard</span> Office</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone Card */}
                <div className="p-8 rounded-[2rem] bg-muted border border-border group hover:border-gold/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
                    <Phone className="w-6 h-6 text-gold-dark" />
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Direct Lines</h4>
                  <div className="space-y-1">
                    <p className="font-black text-primary text-lg">{SHOP_ADDRESS.phone1}</p>
                    <p className="font-black text-primary text-lg">{SHOP_ADDRESS.phone2}</p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="p-8 rounded-[2rem] bg-muted border border-border group hover:border-gold/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
                    <Mail className="w-6 h-6 text-gold-dark" />
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Electronic Mail</h4>
                  <p className="font-black text-primary text-lg">info@kambohassociates.com</p>
                </div>

                {/* Office Hours */}
                <div className="p-8 rounded-[2rem] bg-muted border border-border group hover:border-gold/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
                    <Clock className="w-6 h-6 text-gold-dark" />
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Visit Timings</h4>
                  <p className="font-black text-primary text-lg">{SHOP_ADDRESS.hours}</p>
                </div>

                {/* Office Location */}
                <div className="p-8 rounded-[2rem] bg-muted border border-border group hover:border-gold/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
                    <MapPin className="w-6 h-6 text-gold-dark" />
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Location</h4>
                  <p className="font-black text-primary text-sm leading-relaxed">{SHOP_ADDRESS.street}, {SHOP_ADDRESS.city}</p>
                </div>
              </div>

              {/* Priority Support Card — Fixed Version */}
              <div className="relative rounded-[2.5rem] bg-white border-2 border-primary p-10 overflow-hidden text-primary group cursor-default shadow-xl shadow-primary/5 mt-12">
                 <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-700">
                    <ShieldCheck className="w-40 h-40 text-gold" />
                 </div>
                 <div className="relative z-10">
                   <h3 className="text-2xl font-black mb-3">Priority Compliance Support</h3>
                   <p className="text-gray-500 font-medium mb-8 max-w-sm">
                     Urgent tax audit or FBR notice? Our legal team is standing by for prioritized consultation.
                   </p>
                   <Button size="lg" className="bg-primary text-white hover:bg-gold hover:text-primary px-10 rounded-xl font-black transition-all">
                     Initiate Priority Case
                   </Button>
                 </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-muted p-10 md:p-16 rounded-[3rem] border border-border shadow-2xl relative">
              <div className="absolute top-10 right-10">
                <Send className="w-12 h-12 text-gold opacity-10" />
              </div>
              <h2 className="text-3xl font-black text-primary mb-10">Engage our <span className="text-gold-dark">Advisory</span></h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Full Identity</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border-2 border-border rounded-2xl px-6 py-4 focus:outline-none focus:border-gold transition-all font-bold text-primary"
                      placeholder="e.g. Uzair Kamboh"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Contact Protocol</label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border-2 border-border rounded-2xl px-6 py-4 focus:outline-none focus:border-gold transition-all font-bold text-primary"
                      placeholder="e.g. 0321-4567890"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Official Email</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border-2 border-border rounded-2xl px-6 py-4 focus:outline-none focus:border-gold transition-all font-bold text-primary"
                    placeholder="e.g. contact@entity.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Subject of Inquiry</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border-2 border-border rounded-2xl px-6 py-4 focus:outline-none focus:border-gold transition-all font-bold text-primary appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSIjQjE5MDQ0IiBzdHJva2Utd2lkdGg9IjIiPjxwYXRoIGQ9Ik0xOSA5bC03IDctNy03Ii8+PC9zdmc+')] bg-[length:20px] bg-[right_1.5rem_center] bg-no-repeat"
                  >
                    <option value="">Select Mandate Tier</option>
                    <option value="Individual Tax filing">Individual Tax Filing</option>
                    <option value="Business Registration">Business Registration (SECP/FBR)</option>
                    <option value="Audit Support">FBR Audit Representation</option>
                    <option value="Corporate Retainers">Corporate Advisory Retainers</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Mandate Brief</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-white border-2 border-border rounded-2xl px-6 py-4 focus:outline-none focus:border-gold transition-all font-bold text-primary resize-none"
                    placeholder="Describe your legal or financial requirement..."
                  ></textarea>
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary text-white hover:bg-gold hover:text-primary py-8 rounded-2xl font-black text-sm uppercase tracking-[0.3em] transition-all shadow-xl shadow-primary/20">
                  Transmit Mandate Inquiry
                </Button>
              </form>
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
              { q: 'What is the standard SLA for return filing?', a: 'High-priority private client filings are typically processed and submitted to the FBR within 24-48 hours post-documentation.' },
              { q: 'Is client confidentiality protocols in place?', a: 'Absolute sovereignty. We employ bank-grade AES-256 encryption and legal non-disclosure agreements for all engagements.' },
              { q: 'Do you offer recursive monthly retainerships?', a: 'Yes. We provide tiered retainership models for corporate accounting, payroll, and continuous tax optimization.' },
              { q: 'Are you recognized by FBR and SECP?', a: 'Kamboh Associates is an officially registered and recognized consultant firm with direct integration portals for both FBR and SECP.' },
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

