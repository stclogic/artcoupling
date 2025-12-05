import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface AboutProps {
  onWhitepaper: () => void;
}

const About: React.FC<AboutProps> = ({ onWhitepaper }) => {
  return (
    <section id="about" className="py-24 md:py-32 bg-ac-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Narrative */}
        <div className="relative z-10">
          <div className="inline-block border-b border-ac-gold/50 pb-1 mb-8">
            <span className="text-ac-gold font-sans text-sm tracking-[0.2em] uppercase">The Philosophy</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-ac-ivory mb-8 leading-tight">
            Restoring the <br/>
            <span className="text-ac-gold italic">Sovereignty</span> of Value.
          </h2>
          <p className="text-ac-ivory/70 font-sans leading-loose mb-6">
            For centuries, art has been the ultimate store of value for the elite. Yet, it remains illiquid. 
            Art Coupling bridges the gap between the aesthetic and the financial, transforming static canvases into dynamic assets.
          </p>
          <p className="text-ac-ivory/70 font-sans leading-loose mb-10">
            We employ bank-grade custody, blockchain-verified provenance, and advanced valuation algorithms to 
            allow collectors to leverage their holdings for liquidity, all while preserving the integrity of the work.
          </p>
          
          <button 
            onClick={onWhitepaper}
            className="text-ac-ivory hover:text-ac-gold border-b border-transparent hover:border-ac-gold transition-all duration-300 flex items-center gap-2 pb-1"
          >
            Read the Whitepaper
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Visual: 3D Glass Frame Concept */}
        <div className="relative h-[500px] w-full flex items-center justify-center perspective-[1000px]">
          {/* Background blurred element */}
          <div className="absolute w-3/4 h-3/4 bg-ac-gold/10 rounded-full blur-[100px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          
          {/* The Frame */}
          <div className="relative w-72 h-96 md:w-80 md:h-[28rem] transition-transform duration-700 hover:rotate-y-12 hover:rotate-x-6 transform-style-3d group cursor-pointer">
            {/* Image Layer */}
            <div className="absolute inset-0 bg-gray-800 rounded-sm overflow-hidden shadow-2xl border-[10px] border-ac-charcoal">
               <img 
                 src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimlBHg_1F10trf-CtkRF78Dv-W_mxepFI5-JYekxNV1asSu95QVZqreau4uRVJ3w5i-Z_DpDyzY_Y5K3q70QpGsxbUtArIzb3SrfPaj8kS5PHRBMYh3zjfQSVKNaYyjqhI7Mk_urS_dLZNNL-3mfP0zyxwIX3lU_mlX-ALAlQ839EKrcCnSUwsg9hG0UQO/s1971/IMG_8999.jpeg$0" 
                 alt="Featured Art" 
                 className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
               />
            </div>
            
            {/* Glass Reflection Layer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50 pointer-events-none border border-white/10"></div>
            
            {/* Floating Label */}
            <div className="absolute -bottom-8 -right-8 bg-ac-black/90 backdrop-blur border border-ac-gold/30 p-4 shadow-xl translate-z-10">
              <p className="text-ac-gold font-serif text-lg">Portrait of Equity</p>
              <p className="text-xs text-ac-ivory/50 uppercase tracking-widest">Est. 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;