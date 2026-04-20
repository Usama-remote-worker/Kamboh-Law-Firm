'use client';

import { useState } from 'react';
import { TrendingUp, ArrowRight, DollarSign, Calendar, Percent, Landmark } from 'lucide-react';
import Link from 'next/link';

function fmt(n: number) {
  return 'Rs. ' + Math.round(n).toLocaleString('en-PK');
}

export default function InvestmentCalculator() {
  const [principal, setPrincipal] = useState('100000');
  const [rate, setRate] = useState('12');
  const [years, setYears] = useState('5');
  const [compounding, setCompounding] = useState<'annual' | 'monthly'>('annual');

  const p = parseFloat(principal.replace(/,/g, '')) || 0;
  const r = parseFloat(rate) || 0;
  const t = parseFloat(years) || 0;

  // A = P(1 + r/n)^(nt)
  const n = compounding === 'annual' ? 1 : 12;
  const result = p * Math.pow(1 + (r / 100) / n, n * t);
  const gain = result - p;

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side: Inputs */}
        <div className="bg-white rounded-[2.5rem] p-10 border border-border shadow-sm">
          <h3 className="text-2xl font-black text-primary mb-8">Projection Parameters</h3>
          
          <div className="space-y-8">
            <div>
              <label className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4 block flex items-center gap-2">
                <Landmark className="w-3 h-3" /> Initial Capital (PKR)
              </label>
              <div className="relative">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 font-black text-gold text-xl">Rs.</span>
                <input
                  type="number"
                  value={principal}
                  onChange={e => setPrincipal(e.target.value)}
                  className="w-full pl-16 pr-6 py-5 border-2 border-border rounded-2xl text-2xl font-black text-primary focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/10 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4 block flex items-center gap-2">
                   <Percent className="w-3 h-3" /> APY (%)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={rate}
                    onChange={e => setRate(e.target.value)}
                    className="w-full pl-6 pr-12 py-5 border-2 border-border rounded-2xl text-2xl font-black text-primary focus:outline-none focus:border-gold transition-all"
                  />
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 font-black text-gold text-xl">%</span>
                </div>
              </div>
              <div>
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4 block flex items-center gap-2">
                  <Calendar className="w-3 h-3" /> Horizon (Yrs)
                </label>
                <input
                  type="number"
                  value={years}
                  onChange={e => setYears(e.target.value)}
                  className="w-full px-6 py-5 border-2 border-border rounded-2xl text-2xl font-black text-primary focus:outline-none focus:border-gold transition-all"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4 block">Compounding Frequency</label>
              <div className="flex bg-muted/50 rounded-2xl p-1 border border-border">
                <button
                  onClick={() => setCompounding('annual')}
                  className={`flex-1 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${compounding === 'annual' ? 'bg-primary text-white shadow-lg' : 'text-gray-400'}`}
                >
                  Annually
                </button>
                <button
                  onClick={() => setCompounding('monthly')}
                  className={`flex-1 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${compounding === 'monthly' ? 'bg-primary text-white shadow-lg' : 'text-gray-400'}`}
                >
                  Monthly
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Results */}
        <div className="space-y-6">
          <div className="bg-primary rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <TrendingUp className="w-48 h-48 text-gold" />
            </div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gold mb-10">Projected Maturity Amount</h3>
            <div className="relative z-10">
              <div className="text-5xl md:text-6xl font-black mb-10 text-white">
                {p > 0 ? fmt(result) : 'Rs. —'}
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/10">
                <div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Total Contributions</p>
                  <p className="text-xl font-black text-white">{fmt(p)}</p>
                </div>
                <div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Gain</p>
                  <p className="text-xl font-black text-gold">{fmt(gain)}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gold/10 border border-gold/20 rounded-[2.5rem] p-10">
            <h4 className="text-xl font-black text-primary mb-4">Strategic Wealth Tip</h4>
            <p className="text-sm text-gray-600 font-medium leading-relaxed mb-8">
              Compounding interest is the eighth wonder of the world. At a <span className="text-gold font-bold">{rate}%</span> return, your capital doubles approximately every <span className="text-gold font-bold">{Math.round(72 / r)} years</span>.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-gold font-black uppercase text-xs tracking-widest hover:text-primary transition-colors"
            >
              Consult a Wealth Strategist <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
