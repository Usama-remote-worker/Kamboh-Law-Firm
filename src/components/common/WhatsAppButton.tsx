'use client';

import { SHOP_ADDRESS } from '@/lib/constants';

export default function WhatsAppButton() {
  // Ensure the number is in international format for the link
  // 03284675162 -> 923284675162
  const cleanNumber = SHOP_ADDRESS.whatsapp.replace(/^0/, '92').replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 z-[100] group transition-all duration-300 hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative">
        <div className="absolute -inset-1 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
        {/* Original WhatsApp Circular Icon (SVG) */}
        <svg 
          viewBox="0 0 24 24" 
          className="w-[64px] h-[64px] drop-shadow-2xl" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M12 0C5.37258 0 0 5.37258 0 12C0 14.1207 0.551351 16.1121 1.51737 17.8392L0.0381679 23.2758C-0.0881679 23.7408 0.354054 24.1673 0.811802 24.0199L6.16811 22.2855C7.90487 23.3642 9.87568 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0Z" 
            fill="#25D366"
          />
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M17.8546 15.1118C17.5259 14.9472 15.9038 14.1507 15.6022 14.0416C15.3006 13.9325 15.0815 13.8779 14.8624 14.2053C14.6433 14.5327 14.0132 15.2691 13.8214 15.4875C13.6296 15.7059 13.4379 15.7332 13.1091 15.5695C12.7803 15.4059 11.7205 15.0595 10.4633 13.9388C9.48493 13.0664 8.82425 11.9891 8.63243 11.6618C8.44062 11.3344 8.61243 11.1572 8.77665 10.9942C8.92425 10.8475 9.10515 10.6124 9.27015 10.4214C9.43425 10.2304 9.48882 10.0939 9.59843 9.87561C9.70804 9.65731 9.65347 9.46631 9.59843 9.30261C9.5434 9.1389 9.10515 8.07436 8.92425 7.63756C8.74834 7.21175 8.56843 7.21856 8.44062 7.21856H8.0294C7.78284 7.21856 7.3713 7.31346 7.0298 7.69532C6.6883 8.07718 5.7294 9.00445 5.7294 10.915C5.7294 12.8256 7.12643 14.6542 7.31825 14.9001C7.51006 15.146 10.0717 19.3015 14.108 20.8845C17.4616 22.2001 18.1438 21.9365 18.8834 21.8274C19.6231 21.7183 21.2668 20.8173 21.6059 19.8622C21.9449 18.9071 21.9449 18.0883 21.8443 17.9246C21.7437 17.761 21.4697 17.6791 21.141 17.5154L17.8546 15.1118Z" 
            fill="white"
          />
        </svg>
      </div>
      <span className="absolute right-full mr-6 px-5 py-3 bg-white text-primary text-sm font-black rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 whitespace-nowrap pointer-events-none border border-gold/20">
        Direct Consultancy
      </span>
    </a>
  );
}
