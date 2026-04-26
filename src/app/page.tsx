'use client';

import Link from 'next/link';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import { TOOLS, SERVICES } from '@/lib/constants';
import * as Icons from 'lucide-react';
import { 
  CircleCheck as CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Users, 
  ArrowRight,
  TrendingDown,
  Briefcase,
  TrendingUp,
  Award,
  Globe,
  FileText,
  BadgeCheck
} from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section - Refactored for Brand Compliance */}
      <section className="relative overflow-hidden bg-[#F5F7FA] pt-32 pb-20 md:pt-48 md:pb-36 border-b border-border">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right"></div>
        
        <Container>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fadeInUp">
              <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 bg-white border border-gold/30 rounded-full shadow-sm">
                <BadgeCheck className="w-4 h-4 text-gold" />
                <span className="text-primary font-bold text-xs uppercase tracking-widest">Pakistan's #1 Regulatory Platform</span>
              </div>
              <h1 className="text-[40px] md:text-[56px] font-bold mb-8 leading-[1.1] text-primary">
                Tax & Business <br /> <span className="text-gold">Excellence</span> Redefined
              </h1>
              <p className="text-lg md:text-xl text-charcoal mb-12 font-medium leading-relaxed max-w-xl">
                Premium tax filing, seamless business registration, and strategic financial advisory tailored for <span className="font-bold text-primary italic underline decoration-gold/50">Pakistan's Elite Professionals</span> and enterprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="/services">
                  <Button size="lg" className="bg-gold text-white hover:bg-primary transition-all duration-500 shadow-2xl shadow-gold/20 px-10 rounded-xl">
                    Our Premium Services
                  </Button>
                </Link>
                <Link href="/tools">
                  <Button size="lg" variant="outline" className="border-primary/20 text-primary hover:border-gold hover:text-gold transition-all duration-300 rounded-xl bg-white/50 backdrop-blur-sm">
                    Explore Advisory Tools
                  </Button>
                </Link>
              </div>
              
              <div className="mt-16 flex items-center gap-8 pt-8 border-t border-primary/10">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-muted flex items-center justify-center font-bold text-xs text-primary">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm font-bold text-charcoal">
                  Trusted by <span className="text-gold">5,000+</span> Corporate Entities
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
               <div className="absolute -inset-10 bg-gold/10 rounded-full filter blur-[80px]"></div>
               <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,57,36,0.15)] border-8 border-white">
                  <img 
                    src="/hero-professional.png" 
                    alt="Kamboh Associates Tax Consultant Lahore" 
                    className="w-full h-auto object-cover" 
                    onError={(e) => e.currentTarget.src = 'https://images.unsplash.com/photo-1554224155-169641357599?auto=format&fit=crop&q=80&w=1000'}
                  />
                  <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-gold/20 flex items-center justify-between">
                    <div>
                      <div className="text-primary font-black text-2xl">99.9%</div>
                      <div className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Acceptance Rate</div>
                    </div>
                    <div className="h-10 w-px bg-gray-200"></div>
                    <div>
                      <div className="text-primary font-black text-2xl">24h</div>
                      <div className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Turnaround</div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section - Precise Cards */}
      <section className="py-24 md:py-36 bg-white">
        <Container>
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-[32px] font-bold text-primary mb-6">Expert Advisory Solutions</h2>
            <div className="w-24 h-1.5 bg-gold mx-auto rounded-full"></div>
            <p className="mt-8 text-lg text-charcoal max-w-2xl mx-auto font-medium">
              Precision-driven regulatory assistance for forward-thinking business leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.slice(0, 6).map((service) => {
              const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle;
              return (
                <div
                  key={service.id}
                  className="group relative bg-white rounded-[2.5rem] p-10 border border-gold/10 hover:border-gold/40 shadow-sm hover:shadow-[0_30px_60px_rgba(177,144,68,0.1)] transition-all duration-500 flex flex-col"
                >
                  <div className="w-16 h-16 rounded-2xl bg-muted group-hover:bg-primary transition-all duration-500 flex items-center justify-center mb-8">
                    <IconComponent className="w-8 h-8 text-gold group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-6">{service.name}</h3>
                  <div className="space-y-4 mb-10 flex-grow">
                    {service.features.slice(0, 4).map((feature, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span className="text-sm font-semibold text-charcoal">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-black text-sm uppercase tracking-widest group-hover:text-gold transition-colors">
                    Consult Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Trust Signals & Accreditations */}
      <section className="py-24 bg-white text-primary overflow-hidden relative border-y border-border">
        <div className="absolute inset-0 opacity-[0.03]">
           <div className="grid grid-cols-8 gap-10">
             {Array.from({length: 40}).map((_, i) => (
               <ShieldCheck key={i} className="w-12 h-12" />
             ))}
           </div>
        </div>
        
        <Container>
           <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="max-w-xl text-center lg:text-left">
                <h2 className="text-3xl md:text-[32px] font-bold text-primary mb-8 border-l-4 border-gold pl-6">Accreditations & Certificates</h2>
                <p className="text-lg text-gray-500 font-medium leading-relaxed mb-10">
                  Kamboh Associates is a fully recognized tax practice firm. We adhere to the stringent compliance standards of the FBR and SECP.
                </p>
                <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                   <div className="px-8 py-4 bg-muted border border-border rounded-2xl flex items-center gap-4">
                     <Award className="w-6 h-6 text-gold" />
                     <span className="font-bold uppercase tracking-widest text-xs">FBR Certified</span>
                   </div>
                   <div className="px-8 py-4 bg-muted border border-border rounded-2xl flex items-center gap-4">
                     <Globe className="w-6 h-6 text-gold" />
                     <span className="font-bold uppercase tracking-widest text-xs">SECP Registered</span>
                   </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                 <div className="bg-white p-4 rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 border border-border">
                    <img src="/cert-fbr.png" alt="FBR Certificate Kamboh Associates Lahore" className="w-48 h-64 object-cover rounded-lg border border-gold/20" onError={(e) => e.currentTarget.src = 'https://images.unsplash.com/photo-1589330694653-93d39546059c?auto=format&fit=crop&q=80&w=400'} />
                    <div className="mt-3 text-center text-[10px] font-black text-primary uppercase">NTN Certification</div>
                 </div>
                 <div className="bg-white p-4 rounded-2xl shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500 mt-12 border border-border">
                    <img src="/cert-secp.png" alt="SECP Certification Kamboh Associates" className="w-48 h-64 object-cover rounded-lg border border-gold/20" onError={(e) => e.currentTarget.src = 'https://images.unsplash.com/photo-1589330694653-93d39546059c?auto=format&fit=crop&q=80&w=400'} />
                    <div className="mt-3 text-center text-[10px] font-black text-primary uppercase">STRN Registration</div>
                 </div>
              </div>
           </div>
        </Container>
      </section>

      {/* Adisory Tools CTA */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
               <div className="grid grid-cols-2 gap-6">
                 {TOOLS.slice(0, 4).map((tool, i) => (
                    <Link key={tool.id} href={tool.path}>
                      <div className="p-8 rounded-3xl bg-muted border border-gold/5 hover:border-gold/30 hover:bg-white hover:shadow-xl transition-all duration-300">
                         <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4">
                           <FileText className="w-6 h-6 text-gold" />
                         </div>
                         <div className="font-bold text-primary text-sm leading-tight">{tool.title}</div>
                      </div>
                    </Link>
                 ))}
               </div>
            </div>
            
            <div className="order-1 lg:order-2">
               <h2 className="text-3xl md:text-[32px] font-bold text-primary mb-8 underline decoration-gold/30 underline-offset-8">Precision Intelligence Hub</h2>
               <p className="text-lg text-charcoal font-medium leading-relaxed mb-10">
                 Harness the power of our data-backed advisory engines. Designed for high-stakes decision making and meticulous regulatory compliance.
               </p>
               <Link href="/tools">
                 <Button size="lg" className="bg-primary text-white hover:bg-gold rounded-xl px-10">Access Strategic Hub</Button>
               </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Final Brand CTA */}
      <section className="py-24 md:py-40 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-fixed">
        <div className="bg-white/95 py-24 md:py-40 backdrop-blur-sm border-y-4 border-gold">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
               <span className="text-gold-dark font-black uppercase tracking-[0.4em] text-xs mb-8 block">Your Regulatory Advantage</span>
               <h2 className="text-4xl md:text-[56px] font-bold text-primary mb-10 leading-tight">Master Your <span className="text-gold-dark">Financial</span> Sovereignty</h2>
               <p className="text-xl text-gray-600 mb-12 font-medium">Join 5,000+ elite business owners who trust Kamboh Associates.</p>
               <Link href="/contact">
                 <Button size="lg" className="bg-primary text-white hover:bg-gold hover:text-primary px-16 py-8 rounded-2xl text-xl font-bold shadow-2xl shadow-primary/20">Consult an Expert</Button>
               </Link>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}
