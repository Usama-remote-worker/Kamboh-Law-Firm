'use client';

import { useState } from 'react';
import Button from '@/components/common/Button';

export default function GSTCalculator() {
  const [amount, setAmount] = useState<number>(0);
  const [gstRate, setGstRate] = useState<number>(18);
  const [gstAmount, setGstAmount] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const calculateGST = () => {
    const gst = (amount * gstRate) / 100;
    const total = amount + gst;
    setGstAmount(gst);
    setTotalAmount(total);
  };

  return (
    <div className="bg-lightBg rounded-lg p-8 max-w-2xl">
      <h2 className="text-3xl font-bold text-primary mb-6">GST Calculator</h2>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            Amount Before GST ($)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Enter amount"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            GST Rate (%)
          </label>
          <select
            value={gstRate}
            onChange={(e) => setGstRate(Number(e.target.value))}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value={5}>5%</option>
            <option value={12}>12%</option>
            <option value={18}>18%</option>
            <option value={28}>28%</option>
          </select>
        </div>

        <Button onClick={calculateGST} size="lg" className="w-full">
          Calculate GST
        </Button>

        {gstAmount > 0 && (
          <div className="bg-secondary border-2 border-accent rounded-lg p-6 space-y-3">
            <div className="flex justify-between">
              <span className="text-primary font-medium">Amount:</span>
              <span className="font-bold text-primary">${amount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-primary font-medium">GST ({gstRate}%):</span>
              <span className="font-bold text-accent">${gstAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
            </div>
            <div className="bg-accent rounded p-3 flex justify-between">
              <span className="text-primary font-bold">Total Amount:</span>
              <span className="font-bold text-primary">
                ${totalAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
