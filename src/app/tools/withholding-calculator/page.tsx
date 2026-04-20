'use client';

import Container from '@/components/common/Container';
import Link from 'next/link';
import { useState } from 'react';
import { FileText, ArrowRight, Info, ShieldCheck, UserCheck, UserMinus } from 'lucide-react';

const WHT_RATES = [
  { id: 'goods', name: 'Supply of Goods', filer: 5.5, nonFiler: 11, desc: 'Sale of tangible products' },
  { id: 'services', name: 'Provision of Services', filer: 9, nonFiler: 18, desc: 'Professional or technical services' },
  { id: 'contracts', name: 'Execution of Contracts', filer: 8, nonFiler: 16, desc: 'Construction or supply contracts' },
  { id: 'rent', name: 'Rent of Property', filer: 15, nonFiler: 30, desc: 'Commercial or residential rent' },
];

function fmt(n: number) {
  return 'Rs. ' + Math.round(n).toLocaleString('en-PK');
}

export default function WithholdingCalculatorPage() {
  const [amount, setAmount] = useState('');
  const [activeRate, setActiveRate] = useState(WHT_RATES[0]);
  const [status, setStatus] = useState<'filer' | 'non-filer'>('filer');

  const base = parseFloat(amount.replace(/,/g, '')) || 0;
  const rate = status === 'filer' ? activeRate.filer : activeRate.nonFiler;
  const taxAmount = base * (rate / 100);
  const netAmount = base - taxAmount;

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
              Withholding Tax <span className="gradient-text">Calculator</span>
            </h1>
            <p className="text-xl text-gray-400 font-medium">
              Calculate WHT for Goods, Services, and Contracts based on <strong className="text-white">FBR Status</strong>.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Input Side */}
            <div className="bg-muted/20 rounded-[2.5rem] p-10 border border-border shadow-sm">
              <h2 className="text-2xl font-black text-primary mb-8">Transaction Details</h2>

              {/* Status Toggle */}
              <div className="flex bg-white border border-border rounded-2xl p-1 mb-8">
                <button
                  onClick={() => setStatus('filer')}
                  className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all ${status === 'filer' ? 'bg-gold text-white shadow-md' : 'text-gray-400'}`}
                >
                  <UserCheck className="w-4 h-4" /> Active Filer
                </button>
                <button
                  onClick={() => setStatus('non-filer')}
                  className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all ${status === 'non-filer' ? 'bg-primary text-white shadow-md' : 'text-gray-400'}`}
                >
                  <UserMinus className="w-4 h-4" /> Non-Filer
                </button>
              </div>

              {/* Category Select */}
              <label className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4 block">Transaction Category</label>
              <div className="grid grid-cols-1 gap-3 mb-8">
                {WHT_RATES.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setActiveRate(r)}
                    className={`p-5 rounded-2xl border transition-all text-left flex justify-between items-center ${
                      activeRate.id === r.id
                        ? 'bg-gold border-gold text-primary'
                        : 'border-border hover:border-gold/30 bg-white'
                    }`}
                  >
                    <div>
                      <div className="font-black text-sm uppercase tracking-wider">{r.name}</div>
                      <div className={`text-[10px] font-bold ${activeRate.id === r.id ? 'text-primary/70' : 'text-gray-400'}`}>{r.desc}</div>
                    </div>
                    <div className="text-xl font-black">
                      {status === 'filer' ? r.filer : r.nonFiler}%
                    </div>
                  </button>
                ))}
              </div>

              {/* Amount Input */}
              <label className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4 block">Gross Amount (before tax)</label>
              <div className="relative">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gold font-black text-xl">Rs.</span>
                <input
                  type="number"
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                  placeholder="250,000"
                  className="w-full pl-16 pr-6 py-5 border-2 border-border rounded-2xl text-2xl font-black text-primary focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/10 transition-all"
                />
              </div>

              {status === 'non-filer' && (
                <div className="mt-8 p-5 rounded-2xl bg-red-50 border border-red-100 flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                  <p className="text-sm font-medium text-red-800 leading-relaxed">
                    Non-filers are subject to <strong>Double Tax Rates</strong>. Become an Active Filer today to save up to 50% on withholding taxes.
                  </p>
                </div>
              )}
            </div>

            {/* Results Side */}
            <div className="space-y-6">
              {[
                { label: 'Withholding Tax Amount', val: taxAmount, icon: FileText, highlight: true, color: 'text-gold' },
                { label: 'Net Payable Amount', val: netAmount, icon: ArrowRight, highlight: false, color: 'text-primary' },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-[2.5rem] p-10 border transition-all duration-300 ${
                    item.highlight
                      ? 'bg-primary border-primary text-white shadow-2xl shadow-primary/10'
                      : 'bg-white border-border'
                  }`}
                >
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4">{item.label}</p>
                  <div className="flex items-center justify-between">
                    <p className={`text-4xl md:text-5xl font-black ${item.highlight ? 'text-gold' : 'text-primary'}`}>
                      {base > 0 ? fmt(item.val) : 'Rs. —'}
                    </p>
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.highlight ? 'bg-gold/10' : 'bg-muted'}`}>
                      <item.icon className={`w-7 h-7 ${item.highlight ? 'text-gold' : 'text-gold-dark'}`} />
                    </div>
                  </div>
                </div>
              ))}

              <div className="rounded-[2.5rem] p-10 border border-gold/30 bg-gold/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center font-black text-primary">!</div>
                  <h3 className="text-xl font-black text-primary">Compliance Note</h3>
                </div>
                <p className="text-gray-600 font-medium leading-relaxed mb-6">
                  According to FBR Section 153, Withholding Tax must be deposited in the government treasury within 7 days of deduction. Failure to comply leads to heavy penalties.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-gold-dark font-black uppercase tracking-widest text-sm hover:text-primary transition-colors">
                  Need Help with Filings? <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center bg-primary rounded-[3rem] p-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gold rounded-full filter blur-3xl" />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">Reduce Your <span className="text-gold">Tax Burden</span></h3>
              <p className="text-xl text-gray-400 mb-10 font-medium leading-relaxed">
                Strategic tax planning can save your business millions in unnecessary withholding. Consult our senior associates.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 bg-gold text-primary px-12 py-6 rounded-2xl font-black text-xl hover:bg-white transition-all duration-300"
              >
                Book Strategic Call <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
