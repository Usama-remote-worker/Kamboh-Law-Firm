'use client';

import Container from '@/components/common/Container';
import Link from 'next/link';
import { useState } from 'react';
import { Building2, ArrowRight, ShieldCheck, Calculator } from 'lucide-react';

const ENTITY_TYPES = [
  { 
    id: 'pvt-ltd', 
    name: 'Private Limited (SECP)', 
    baseFee: 2500, 
    perMill: 500, 
    desc: 'Ideal for startups & scalable businesses.',
    features: ['Legal Entity Status', 'Ease of Transfer', 'Investor Ready']
  },
  { 
    id: 'aop', 
    name: 'AOP / Partnership', 
    baseFee: 1500, 
    perMill: 0, 
    desc: 'For partners with shared liability.',
    features: ['Simple Governance', 'Direct Control', 'Flexible Terms']
  },
  { 
    id: 'sole-prop', 
    name: 'Sole Proprietorship', 
    baseFee: 500, 
    perMill: 0, 
    desc: 'Best for individual shopkeepers & freelancers.',
    features: ['100% Ownership', 'Minimal Compliance', 'Quick Setup']
  },
];

function fmt(n: number) {
  return 'Rs. ' + Math.round(n).toLocaleString('en-PK');
}

export default function CompanyFeeEstimatorPage() {
  const [capital, setCapital] = useState('100000');
  const [activeEntity, setActiveEntity] = useState(ENTITY_TYPES[0]);

  const cap = parseFloat(capital.replace(/,/g, '')) || 0;
  
  // Logic for SECP Fee (Approximate for estimation)
  let estimtedFee = activeEntity.baseFee;
  if (activeEntity.id === 'pvt-ltd' && cap > 100000) {
    const extra = Math.ceil((cap - 100000) / 100000);
    estimtedFee += extra * activeEntity.perMill;
  }

  const stampDuty = activeEntity.id === 'pvt-ltd' ? cap * 0.001 : 0; // 0.1% stamp duty approx
  const serviceFee = 5000; // Professional fee placeholder
  const total = estimtedFee + stampDuty + serviceFee;

  return (
    <>
      <section className="bg-primary text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold rounded-full filter blur-[120px]" />
        </div>
        <Container>
          <div className="relative z-10 max-w-3xl">
            <Link href="/tools" className="inline-flex items-center gap-2 text-gold text-sm font-bold uppercase tracking-widest mb-6 hover:text-white transition-colors">
              ← All Tools
            </Link>
            <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
               Registration Fee <span className="text-gold">Estimator</span>
            </h1>
            <p className="text-xl text-gray-400 font-medium">
              Calculate SECP and FBR registration costs for your new business venture in Pakistan.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Input Side */}
            <div className="bg-muted/20 rounded-[2.5rem] p-10 border border-border shadow-sm">
              <h2 className="text-2xl font-black text-primary mb-8">Configure Your Entity</h2>

              <label className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4 block">Select Entity Type</label>
              <div className="grid grid-cols-1 gap-3 mb-10">
                {ENTITY_TYPES.map(e => (
                  <button
                    key={e.id}
                    onClick={() => setActiveEntity(e)}
                    className={`p-5 rounded-2xl border transition-all text-left flex items-start gap-4 ${
                      activeEntity.id === e.id
                        ? 'bg-gold border-gold text-primary'
                        : 'bg-white border-border hover:border-gold/30'
                    }`}
                  >
                    <div className={`p-3 rounded-xl ${activeEntity.id === e.id ? 'bg-white/20' : 'bg-muted'}`}>
                      <Building2 className={`w-5 h-5 ${activeEntity.id === e.id ? 'text-primary' : 'text-primary'}`} />
                    </div>
                    <div>
                      <div className="font-black text-sm uppercase tracking-wider">{e.name}</div>
                      <div className={`text-[10px] font-bold mt-0.5 ${activeEntity.id === e.id ? 'text-white/80' : 'text-gray-400'}`}>{e.desc}</div>
                    </div>
                  </button>
                ))}
              </div>

              {activeEntity.id === 'pvt-ltd' && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4 block">Authorised Capital (PKR)</label>
                  <div className="relative mb-8">
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gold font-black text-xl">Rs.</span>
                    <input
                      type="number"
                      value={capital}
                      onChange={e => setCapital(e.target.value)}
                      className="w-full pl-16 pr-6 py-5 border-2 border-border rounded-2xl text-2xl font-black text-primary focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/10 transition-all"
                    />
                  </div>
                </div>
              )}

              <div className="p-6 rounded-2xl bg-gold/5 border border-gold/20">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="w-5 h-5 text-gold" />
                  <h4 className="font-black text-primary uppercase text-xs tracking-widest">Compliance Assurance</h4>
                </div>
                <div className="space-y-2">
                  {activeEntity.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                      <span className="text-xs font-bold text-gray-600 uppercase tracking-tight">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Side */}
            <div className="space-y-6">
               <div className="bg-primary rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
                 <div className="absolute top-0 right-0 p-8 opacity-10">
                   <Calculator className="w-40 h-40 text-gold" />
                 </div>
                 <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gold mb-10">Estimated Total Cost</h3>
                 <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black mb-8 text-white">{fmt(total)}</div>
                    
                    <div className="space-y-4 pt-8 border-t border-white/10">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400 font-bold group">Official Authority Fee</span>
                        <span className="font-black text-gold">{fmt(estimtedFee + stampDuty)}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400 font-bold">Advisory & Filing Fee</span>
                        <span className="font-black text-gold">{fmt(serviceFee)}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs text-gray-500 pt-4 font-medium italic">
                        * Prices are indicative & subject to FBR/SECP portal updates.
                      </div>
                    </div>
                 </div>
               </div>

               <div className="bg-white border border-border rounded-[2.5rem] p-10">
                  <h4 className="text-xl font-black text-primary mb-6">Execution Roadmap</h4>
                  <div className="space-y-6">
                    {[
                      { step: '01', title: 'Name Reservation', desc: 'Secure your unique business brand name via SECP.' },
                      { step: '02', title: 'Form Filing', desc: 'Submission of Articles and Memorandum of Association.' },
                      { step: '03', title: 'Digital Signature', desc: 'Biometric verification for all proposed directors.' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-5 items-start">
                        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center font-black text-gold text-xs shrink-0">{item.step}</div>
                        <div>
                          <p className="font-black text-primary text-sm uppercase tracking-wide">{item.title}</p>
                          <p className="text-xs text-gray-500 font-medium mt-1">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="mt-10 w-full inline-flex items-center justify-center gap-3 bg-gold text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-primary transition-all duration-300 group"
                  >
                    Start Registration <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
               </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
