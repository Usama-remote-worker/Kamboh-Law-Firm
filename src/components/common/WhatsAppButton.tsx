'use client';

import { MessageCircle } from 'lucide-react';
import { SHOP_ADDRESS } from '@/lib/constants';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${SHOP_ADDRESS.whatsapp.replace(/-/g, '')}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-full mr-4 px-4 py-2 bg-white text-primary text-sm font-bold rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with an Expert
      </span>
    </a>
  );
}
