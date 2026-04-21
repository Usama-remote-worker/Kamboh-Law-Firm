'use client';

import Container from '@/components/common/Container';
import Link from 'next/link';
import { useState, useCallback } from 'react';
import { Calculator, TrendingDown, Banknote, CalendarDays, ArrowRight, Info, ChevronDown } from 'lucide-react';

// ── FBR Tax Slabs 2025-26 (Annual) ──
const TAX_SLABS_2526 = [
  { min: 0,        max: 600000,   rate: 0,    fixed: 0       },
  { min: 600001,   max: 1200000,  rate: 0.05, fixed: 0       },
  { min: 1200001,  max: 2200000,  rate: 0.15, fixed: 30000   },
  { min: 2200001,  max: 3200000,  rate: 0.25, fixed: 180000  },
  { min: 3200001,  max: 4100000,  rate: 0.30, fixed: 430000  },
  { min: 4100001,  max: Infinity, rate: 0.35, fixed: 700000  },
];

function calcAnnualTax(annualSalary: number): number {
  for (const slab of TAX_SLABS_2526) {
    if (annualSalary >= slab.min && annualSalary <= slab.max) {
      return slab.fixed + (annualSalary - (slab.min - 1)) * slab.rate;
    }
  }
  return 0;
}

function fmt(n: number) {
  return 'Rs. ' + Math.round(n).toLocaleString('en-PK');
}

export default function SalaryCalculatorPage() {
  const [mode, setMode] = useState<'monthly' | 'annual'>('monthly');
  const [input, setInput] = useState('');

  const salary = parseFloat(input.replace(/,/g, '')) || 0;
  const annualSalary = mode === 'monthly' ? salary * 12 : salary;
  const annualTax = calcAnnualTax(annualSalary);
  const monthlyTax = annualTax / 12;
  const annualAfterTax = annualSalary - annualTax;
  const monthlyAfterTax = annualAfterTax / 12;
  const effectiveRate = annualSalary > 0 ? ((annualTax / annualSalary) * 100).toFixed(1) : '0.0';

  const activeSlab = TAX_SLABS_2526.find(s => annualSalary >= s.min && annualSalary <= s.max);

  return (
    <>
      {/* Hero */}
      <section className="bg-white text-primary py-16 md:py-24 relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold rounded-full filter blur-[120px]" />
        </div>
        <Container>
          <div className="relative z-10 max-w-3xl">
            <Link href="/tools" className="inline-flex items-center gap-2 text-gold-dark text-sm font-bold uppercase tracking-widest mb-6 hover:text-primary transition-colors">
              ← Intelligence Hub
            </Link>
            <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight text-primary">
              Salary Tax <span className="text-gold-dark">Calculator</span>
            </h1>
            <p className="text-xl text-gray-500 font-medium">
              Instantly compute your income tax using <strong className="text-primary font-black">FBR 2025-26</strong> official tax slabs. Free & accurate.
            </p>
          </div>
        </Container>
      </section>

      {/* Calculator */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Input Card */}
            <div className="bg-muted/20 rounded-[2.5rem] p-10 border border-border shadow-sm">
              <h2 className="text-2xl font-black text-primary mb-8">Enter Your Salary</h2>

              {/* Mode Toggle */}
              <div className="flex bg-white border border-border rounded-2xl p-1 mb-8">
                {(['monthly', 'annual'] as const).map(m => (
                  <button
                    key={m}
                    onClick={() => setMode(m)}
                    className={`flex-1 py-3 rounded-xl font-black text-sm uppercase tracking-widest transition-all duration-300 ${
                      mode === m
                        ? 'bg-gold text-primary shadow-md'
                        : 'text-gray-400 hover:text-primary'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>

              {/* Salary Input */}
              <div className="relative mb-8">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gold font-black text-xl">Rs.</span>
                <input
                  type="number"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder={mode === 'monthly' ? '150,000' : '1,800,000'}
                  className="w-full pl-16 pr-6 py-5 border-2 border-border rounded-2xl text-2xl font-black text-primary focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/10 transition-all"
                />
              </div>

              {/* Quick Select */}
              <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Quick Select</p>
              <div className="grid grid-cols-3 gap-3">
                {(mode === 'monthly'
                  ? [50000, 100000, 150000, 200000, 300000, 500000]
                  : [600000, 1200000, 2400000, 3600000, 4800000, 6000000]
                ).map(v => (
                  <button
                    key={v}
                    onClick={() => setInput(v.toString())}
                    className={`py-2 rounded-xl border font-bold text-xs transition-all ${
                      salary === v
                        ? 'bg-gold text-primary border-gold'
                        : 'border-border text-gray-500 hover:border-gold hover:text-gold'
                    }`}
                  >
                    {(v / 1000).toFixed(0)}K
                  </button>
                ))}
              </div>

              {/* Active Slab info */}
              {salary > 0 && activeSlab && (
                <div className="mt-8 p-5 rounded-2xl bg-gold/10 border border-gold/30 flex items-start gap-3">
                  <Info className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-black text-primary">Active Tax Slab</p>
                    <p className="text-xs font-bold text-gray-500 mt-1">
                      Annual income between{' '}
                      {activeSlab.min === 0 ? 'Rs. 0' : fmt(activeSlab.min)} –{' '}
                      {activeSlab.max === Infinity ? '∞' : fmt(activeSlab.max)}{' '}
                      taxed at <span className="text-gold-dark">{(activeSlab.rate * 100).toFixed(0)}%</span>
                      {activeSlab.fixed > 0 ? ` + ${fmt(activeSlab.fixed)} fixed` : ''}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Results */}
            <div className="space-y-6">
              {[
                { label: 'Monthly Tax Deduction', val: monthlyTax, icon: TrendingDown, highlight: true },
                { label: 'Monthly Take-Home Pay', val: monthlyAfterTax, icon: Banknote, highlight: false },
                { label: 'Annual Tax Liability', val: annualTax, icon: CalendarDays, highlight: false },
                { label: 'Annual Take-Home Pay', val: annualAfterTax, icon: CalendarDays, highlight: false },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-[2rem] p-8 border flex items-center gap-6 transition-all duration-300 ${
                    item.highlight
                      ? 'bg-primary border-primary text-white'
                      : 'bg-white border-border hover:border-gold/30'
                  }`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${item.highlight ? 'bg-gold/20' : (item.label.includes('Take-Home') ? 'bg-gold/10' : 'bg-muted')}`}>
                    <item.icon className={`w-7 h-7 ${item.highlight ? 'text-gold' : (item.label.includes('Take-Home') ? 'text-gold' : 'text-gold-dark')}`} />
                  </div>
                  <div className="flex-1">
                    <p className={`text-xs font-black uppercase tracking-widest mb-1 ${item.highlight ? 'text-gray-400' : 'text-gray-400'}`}>{item.label}</p>
                    <p className={`text-3xl font-black ${item.highlight ? 'text-gold' : (item.label.includes('Take-Home') ? 'text-gold' : 'text-primary')}`}>
                      {salary > 0 ? fmt(item.val) : 'Rs. —'}
                    </p>
                  </div>
                </div>
              ))}

              {/* Effective Rate Badge */}
              {salary > 0 && (
                <div className="rounded-[2rem] p-8 border border-gold/30 bg-gold/5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Effective Tax Rate</p>
                    <p className="text-4xl font-black text-primary">{effectiveRate}<span className="text-xl text-gold">%</span></p>
                  </div>
                  <div className="w-20 h-20 rounded-full border-4 border-gold flex items-center justify-center">
                    <span className="font-black text-gold text-lg">{effectiveRate}%</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Tax Slab Table */}
          <div className="mt-20">
            <h2 className="text-3xl font-black text-primary mb-10 text-center">FBR Tax Slabs 2025-26</h2>
            <div className="overflow-x-auto rounded-[2rem] border border-border shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-8 py-5 text-left text-xs font-black uppercase tracking-widest">Annual Income Range</th>
                    <th className="px-8 py-5 text-center text-xs font-black uppercase tracking-widest">Tax Rate</th>
                    <th className="px-8 py-5 text-right text-xs font-black uppercase tracking-widest">Fixed Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {TAX_SLABS_2526.map((slab, i) => {
                    const isActive = salary > 0 && activeSlab === slab;
                    return (
                      <tr
                        key={i}
                        className={`border-b border-border transition-colors ${isActive ? 'bg-gold/10' : 'hover:bg-muted/30'}`}
                      >
                        <td className="px-8 py-5 font-bold text-primary text-sm">
                          {slab.min === 0 ? 'Up to' : fmt(slab.min) + ' –'}{' '}
                          {slab.max === Infinity ? '& above' : fmt(slab.max)}
                          {isActive && (
                            <span className="ml-3 px-2 py-0.5 bg-gold text-primary text-xs font-black rounded-full">YOUR SLAB</span>
                          )}
                        </td>
                        <td className="px-8 py-5 text-center">
                          <span className={`font-black text-lg ${slab.rate === 0 ? 'text-gold-600' : 'text-primary'}`}>
                            {(slab.rate * 100).toFixed(0)}%
                          </span>
                        </td>
                        <td className="px-8 py-5 text-right font-semibold text-gray-600 text-sm">
                          {slab.fixed === 0 ? '—' : fmt(slab.fixed)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-white border-2 border-primary rounded-[3rem] p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold rounded-full filter blur-3xl" />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black text-primary mb-4">Need Tax Optimization?</h3>
              <p className="text-gray-500 text-lg font-medium mb-8">Our expert chartered accountants can help you legally reduce your tax liability.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-gold hover:text-primary transition-all duration-300 shadow-xl shadow-primary/20"
              >
                Book Free Consultation <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
