'use client';

import Container from '@/components/common/Container';
import Link from 'next/link';
import { useState } from 'react';
import { Coins, ArrowRight, Plus, Minus } from 'lucide-react';

const GST_RATES = [
  { label: 'Standard', rate: 17, desc: 'Most goods & services' },
  { label: 'Luxury', rate: 25, desc: 'Luxury items' },
  { label: 'Reduced', rate: 8, desc: 'Essential commodities' },
  { label: 'Zero', rate: 0, desc: 'Exported goods' },
];

function fmt(n: number) {
  return 'Rs. ' + Math.round(n).toLocaleString('en-PK');
}

export default function GSTCalculatorPage() {
  const [amount, setAmount] = useState('');
  const [customRate, setCustomRate] = useState('17');
  const [activeRate, setActiveRate] = useState(GST_RATES[0]);
  const [mode, setMode] = useState<'add' | 'extract'>('add');

  const base = parseFloat(amount.replace(/,/g, '')) || 0;
  const rate = parseFloat(customRate) || 0;

  const gstAmount = mode === 'add'
    ? base * (rate / 100)
    : base - base / (1 + rate / 100);
  const totalAmount = mode === 'add' ? base + gstAmount : base;
  const baseAmount = mode === 'extract' ? base - gstAmount : base;

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
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              GST <span className="gradient-text">Calculator</span>
            </h1>
            <p className="text-xl text-gray-400 font-medium">
              Compute Pakistan General Sales Tax (17%) or custom rates — instantly.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Mode Toggle */}
            <div className="flex bg-muted/30 border border-border rounded-2xl p-1 mb-10">
              <button
                onClick={() => setMode('add')}
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all ${mode === 'add' ? 'bg-primary text-white shadow-md' : 'text-gray-400'}`}
              >
                <Plus className="w-4 h-4" /> Add GST to Amount
              </button>
              <button
                onClick={() => setMode('extract')}
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all ${mode === 'extract' ? 'bg-primary text-white shadow-md' : 'text-gray-400'}`}
              >
                <Minus className="w-4 h-4" /> Extract GST from Total
              </button>
            </div>

            {/* Rate Presets */}
            <div className="grid grid-cols-4 gap-4 mb-10">
              {GST_RATES.map(r => (
                <button
                  key={r.rate}
                  onClick={() => { setActiveRate(r); setCustomRate(r.rate.toString()); }}
                  className={`p-4 rounded-2xl border transition-all text-center ${
                    activeRate.rate === r.rate && customRate === r.rate.toString()
                      ? 'bg-gold border-gold text-primary'
                      : 'border-border hover:border-gold text-gray-600 hover:text-gold'
                  }`}
                >
                  <div className="text-2xl font-black">{r.rate}%</div>
                  <div className="text-xs font-bold uppercase tracking-wider mt-1">{r.label}</div>
                  <div className="text-[10px] text-gray-400 mt-0.5">{r.desc}</div>
                </button>
              ))}
            </div>

            {/* Custom Rate Input */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div>
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3 block">
                  {mode === 'add' ? 'Amount (before GST)' : 'Total Amount (incl. GST)'}
                </label>
                <div className="relative">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gold font-black">Rs.</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    placeholder="100,000"
                    className="w-full pl-14 pr-5 py-5 border-2 border-border rounded-2xl text-xl font-black text-primary focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/10 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3 block">Custom GST Rate (%)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={customRate}
                    onChange={e => setCustomRate(e.target.value)}
                    placeholder="17"
                    className="w-full pr-12 pl-5 py-5 border-2 border-border rounded-2xl text-xl font-black text-primary focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/10 transition-all"
                  />
                  <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gold font-black text-xl">%</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-6 rounded-2xl bg-muted/20 border border-border">
                <span className="font-bold text-gray-600">Base Amount</span>
                <span className="text-2xl font-black text-primary">{base > 0 ? fmt(baseAmount) : '—'}</span>
              </div>
              <div className="flex items-center justify-between p-6 rounded-2xl bg-gold/10 border border-gold/30">
                <span className="font-bold text-gold-dark">GST Amount ({rate}%)</span>
                <span className="text-2xl font-black text-gold-dark">{base > 0 ? fmt(gstAmount) : '—'}</span>
              </div>
              <div className="flex items-center justify-between p-8 rounded-2xl bg-primary border border-primary">
                <span className="font-black text-white text-lg">Total Amount</span>
                <span className="text-3xl font-black text-gold">{base > 0 ? fmt(totalAmount) : '—'}</span>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/contact" className="inline-flex items-center gap-3 bg-gold text-primary px-10 py-5 rounded-2xl font-black text-lg hover:bg-primary hover:text-white transition-all duration-300">
                Need GST Registration Help? <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
