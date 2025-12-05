import React from 'react';
import { FLOW_STEPS } from '../constants';
import { FlowStep } from '../types';

interface AssetFlowProps {
  onStepClick: (step: FlowStep) => void;
}

const AssetFlow: React.FC<AssetFlowProps> = ({ onStepClick }) => {
  return (
    <section className="py-24 bg-ac-ink/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-ac-ivory mb-4">The Liquidity Mechanism</h2>
          <div className="h-[1px] w-24 bg-ac-gold"></div>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-ac-gold/30 to-transparent transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {FLOW_STEPS.map((step, index) => (
              <div 
                key={step.id} 
                onClick={() => onStepClick(step)}
                className="group relative flex flex-col items-center lg:items-start cursor-pointer"
              >
                {/* Number Circle */}
                <div className="w-16 h-16 rounded-full bg-ac-black border border-ac-gold/30 text-ac-gold flex items-center justify-center font-serif text-xl mb-6 group-hover:bg-ac-gold group-hover:text-ac-black transition-all duration-300 shadow-xl z-10 relative">
                    {step.id}
                    {/* Ripple effect on hover */}
                    <div className="absolute inset-0 rounded-full border border-ac-gold/50 opacity-0 group-hover:animate-ping"></div>
                </div>

                <div className="text-center lg:text-left bg-ac-black/50 p-6 border border-white/5 backdrop-blur-sm w-full hover:border-ac-gold/20 transition-colors">
                    <h3 className="text-xl font-serif text-ac-ivory mb-2">{step.title}</h3>
                    <p className="text-sm text-ac-ivory/60 font-sans">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetFlow;