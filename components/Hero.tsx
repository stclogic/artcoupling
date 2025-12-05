import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onRequestExhibition: () => void;
  onLiquidityConsult: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRequestExhibition, onLiquidityConsult }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with slow zoom parallax simulation */}
      <div className="absolute inset-0 z-0">
        <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-[20s] ease-in-out transform scale-110 hover:scale-100"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1544211075-846152b113cd?q=80&w=2960&auto=format&fit=crop")',
              filter: 'brightness(0.4)'
            }} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ac-black via-transparent to-ac-black/40"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 mt-20">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-ac-ivory mb-6 tracking-wide leading-tight">
          Art Becomes <span className="text-ac-gold italic">Capital</span>
        </h1>
        <p className="text-lg md:text-xl font-sans text-ac-ivory/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          The intersection of masterpiece curation and sophisticated financial liquidity. 
          Unlock the value of your portfolio without relinquishing possession.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button 
            onClick={onRequestExhibition}
            className="group relative px-8 py-3 overflow-hidden rounded-full bg-transparent border border-ac-gold text-ac-gold transition-all duration-300 hover:bg-ac-gold hover:text-ac-black w-64"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 font-medium tracking-wide">
              Request Exhibition
            </span>
          </button>
          
          <button 
            onClick={onLiquidityConsult}
            className="group relative px-8 py-3 overflow-hidden rounded-full bg-ac-ink border border-ac-ink text-ac-ivory transition-all duration-300 hover:bg-ac-ivory hover:text-ac-ink w-64"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 font-medium tracking-wide">
              Asset Liquidity
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-ac-gold to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;