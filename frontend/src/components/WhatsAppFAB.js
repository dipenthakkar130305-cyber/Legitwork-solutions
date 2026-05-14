import React from 'react';
import { WhatsappLogo } from '@phosphor-icons/react';

const WhatsAppFAB = () => {
  return (
    <a
      href="https://wa.me/917016868061?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20labour%20law%20compliance%20services."
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-fab"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg whatsapp-pulse transition-transform hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsappLogo size={32} weight="fill" />
    </a>
  );
};

export default WhatsAppFAB;