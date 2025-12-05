import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ac-black border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
             <div className="text-2xl font-serif text-ac-ivory tracking-widest mb-6">
              ART <span className="text-ac-gold">COUPLING</span>
            </div>
            <p className="text-ac-ivory/50 font-sans font-light max-w-sm">
              The premier destination for art-backed asset liquidity. 
              Bridging the gap between cultural heritage and financial innovation.
            </p>
          </div>
          
          <div>
            <h4 className="text-ac-gold font-sans text-xs uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-ac-ivory/60 font-sans text-sm">
              <li>Zurich: +41 44 555 0192</li>
              <li>Paris: +33 753 999 545</li>
              <li>stclogic@icloud.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-ac-gold font-sans text-xs uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4 text-ac-ivory/60 font-sans text-sm">
              <li className="cursor-pointer hover:text-ac-ivory">Terms of Service</li>
              <li className="cursor-pointer hover:text-ac-ivory">Privacy Policy</li>
              <li className="cursor-pointer hover:text-ac-ivory">AML / KYC Compliance</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-ac-ivory/30 font-sans">
          <p>© 2024 Art Coupling S.A. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <span>Regulated by FINMA</span>
             <span>|</span>
             <span>Member of Art Basel Circle</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;