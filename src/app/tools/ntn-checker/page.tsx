'use client';

import Container from '@/components/common/Container';
import Link from 'next/link';
import { useState } from 'react';
import { ShieldCheck, Search, ArrowRight, ExternalLink, UserCheck, ShieldAlert, FileSearch } from 'lucide-react';

export default function NTNCheckerPage() {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<null | 'success'>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    
    setIsSearching(true);
    // Simulate a check
    setTimeout(() => {
      setIsSearching(false);
      setResult('success');
    }, 1500);
  };

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
              NTN Status <span className="gradient-text">Verify</span>
            </h1>
            <p className="text-xl text-gray-400 font-medium">
              Verify your National Tax Number (NTN) and <strong className="text-white">Active Taxpayer Status</strong> directly through FBR.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-muted/20 rounded-[3rem] p-10 md:p-16 border border-border shadow-sm text-center">
              <div className="w-20 h-20 bg-white rounded-full border border-border flex items-center justify-center mx-auto mb-10 shadow-sm">
                <FileSearch className="w-10 h-10 text-gold" />
              </div>
              <h2 className="text-3xl font-black text-primary mb-4">Official Verification Portal</h2>
              <p className="text-gray-600 font-medium mb-12 max-w-xl mx-auto">
                Enter your CNIC (e.g. 35201-1234567-1) or NTN to initiate the official FBR IRIS verification protocol.
              </p>

              <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto mb-12">
                <div className="relative">
                  <input
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Enter CNIC or NTN..."
                    className="w-full pl-8 pr-48 py-6 bg-white border-2 border-border rounded-2xl text-xl font-bold text-primary focus:outline-none focus:border-gold transition-all"
                  />
                  <button
                    type="submit"
                    disabled={isSearching}
                    className="absolute right-2 top-2 bottom-2 px-8 bg-primary text-white rounded-xl font-black text-sm uppercase tracking-widest hover:bg-gold hover:text-primary transition-all flex items-center gap-2 disabled:opacity-50"
                  >
                    {isSearching ? 'Verifying...' : (
                      <>Verify Status <ArrowRight className="w-4 h-4" /></>
                    )}
                  </button>
                </div>
              </form>

              {result && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-white border border-gold/30 rounded-[2.5rem] p-10 shadow-2xl shadow-gold/5 mt-16 text-left">
                  <div className="flex items-center gap-6 mb-8 pb-8 border-b border-border">
                    <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
                      <UserCheck className="w-8 h-8 text-gold-dark" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-primary">Verification Initialized</h3>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Protocol Active</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <p className="text-lg text-gray-600 font-medium">
                      To complete the live verification of <span className="text-primary font-black uppercase">{query}</span>, please proceed to the official FBR Online Verification System (OVS) via the secure link below:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <a 
                        href="https://iris.fbr.gov.pk/" 
                        target="_blank"
                        className="flex items-center justify-between p-6 rounded-2xl bg-primary text-white hover:bg-gold hover:text-primary transition-all group"
                      >
                        <span className="font-black text-sm uppercase tracking-widest">Official FBR IRIS</span>
                        <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </a>
                      <div className="flex items-center justify-between p-6 rounded-2xl bg-muted border border-border">
                        <span className="font-bold text-gray-500 text-sm">Status: Redirect Ready</span>
                        <div className="w-3 h-3 bg-gold rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-gold/10 border border-gold/30 flex items-start gap-4">
                      <ShieldAlert className="w-6 h-6 text-gold-dark shrink-0 mt-1" />
                      <p className="text-sm font-bold text-primary leading-relaxed">
                        Notice: FBR usually updates the Active Taxpayer List (ATL) every Monday. If you recently filed your return, it may take 24-48 hours to reflect in the status.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Guide Section */}
            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 { title: 'Check ATL Status', desc: 'Active Taxpayer status determines your withholding tax rates. Filers pay 50% less tax.' },
                 { title: 'CNIC to NTN', desc: 'In Pakistan, for individuals, your 13-digit CNIC is officially merged as your NTN.' },
                 { title: 'Business Verification', desc: 'For Pvt Ltd or AOPs, use the 7-digit NTN assigned during registration.' },
               ].map((item, i) => (
                 <div key={i} className="text-center group">
                   <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/10 transition-colors">
                     <ShieldCheck className="w-8 h-8 text-gold-dark" />
                   </div>
                   <h4 className="text-xl font-black text-primary mb-3">{item.title}</h4>
                   <p className="text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>

            {/* CTA */}
            <div className="mt-24 bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
               <div className="absolute inset-0 opacity-10">
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold rounded-full filter blur-3xl" />
               </div>
               <div className="relative z-10">
                 <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Not an <span className="text-gold">Active Filer</span>?</h2>
                 <p className="text-lg text-gray-400 mb-10 font-medium">Don&apos;t pay double tax. We can get your NTN registered and status activated within 24 hours.</p>
                 <Link href="/contact" className="inline-flex items-center gap-3 bg-gold text-primary px-10 py-5 rounded-2xl font-black text-lg hover:bg-white transition-all shadow-xl shadow-gold/20">
                   Get Registered Today <ArrowRight className="w-5 h-5" />
                 </Link>
               </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
