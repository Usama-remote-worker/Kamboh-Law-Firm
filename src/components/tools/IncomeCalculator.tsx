'use client';

import { useState } from 'react';
import Button from '@/components/common/Button';

export default function IncomeCalculator() {
  const [income, setIncome] = useState<number>(0);
  const [deductions, setDeductions] = useState<number>(0);
  const [taxableIncome, setTaxableIncome] = useState<number>(0);
  const [taxAmount, setTaxAmount] = useState<number>(0);

  const calculateTax = () => {
    const taxable = income - deductions;
    setTaxableIncome(taxable);

    // Simple progressive tax calculation (adjust rates for your jurisdiction)
    let tax = 0;
    if (taxable > 250000) {
      tax = (taxable - 250000) * 0.30 + 100000 * 0.20 + 75000 * 0.10;
    } else if (taxable > 175000) {
      tax = (taxable - 175000) * 0.20 + 75000 * 0.10;
    } else if (taxable > 100000) {
      tax = (taxable - 100000) * 0.10;
    }

    setTaxAmount(tax);
  };

  return (
    <div className="bg-lightBg rounded-lg p-8 max-w-2xl">
      <h2 className="text-3xl font-bold text-primary mb-6">Income Tax Calculator</h2>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            Annual Income ($)
          </label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Enter your annual income"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            Deductions ($)
          </label>
          <input
            type="number"
            value={deductions}
            onChange={(e) => setDeductions(Number(e.target.value))}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Enter deductible expenses"
          />
        </div>

        <Button onClick={calculateTax} size="lg" className="w-full">
          Calculate Tax
        </Button>

        {taxAmount > 0 && (
          <div className="bg-secondary border-2 border-accent rounded-lg p-6 space-y-3">
            <div className="flex justify-between">
              <span className="text-primary font-medium">Gross Income:</span>
              <span className="font-bold text-primary">${income.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-primary font-medium">Deductions:</span>
              <span className="font-bold text-primary">${deductions.toLocaleString()}</span>
            </div>
            <div className="border-t border-border pt-3 flex justify-between">
              <span className="text-primary font-medium">Taxable Income:</span>
              <span className="font-bold text-primary">
                ${taxableIncome.toLocaleString()}
              </span>
            </div>
            <div className="bg-accent rounded p-3 flex justify-between">
              <span className="text-primary font-bold">Estimated Tax:</span>
              <span className="font-bold text-primary">${taxAmount.toLocaleString()}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
