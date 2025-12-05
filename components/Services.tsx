import React from 'react';
import { Building, Shield, Coins, Users, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';
import { ServiceItem } from '../types';

interface ServicesProps {
  onServiceClick: (service: ServiceItem) => void;
}

const iconMap = {
  Building: Building,
  Shield: Shield,
  Coins: Coins,
  Users: Users
};

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  return (
    <section id="services" className="py-24 bg-ac-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-serif text-ac-ivory mb-4">Private Client Services</h2>
          <p className="text-ac-ivory/50 max-w-xl mx-auto font-sans font-light">
            Bespoke solutions for the modern collector and investor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.iconName];
            return (
              <div 
                key={service.id}
                onClick={() => onServiceClick(service)}
                className="group p-8 border border-white/5 bg-gradient-to-b from-white/5 to-transparent hover:border-ac-gold/30 hover:from-ac-ink/20 hover:to-ac-ink/5 transition-all duration-300 cursor-pointer flex flex-col items-center text-center h-80 justify-between"
              >
                <div className="p-4 rounded-full bg-ac-black border border-ac-gold/20 text-ac-gold group-hover:bg-ac-gold group-hover:text-ac-black transition-colors duration-300">
                  <Icon size={24} strokeWidth={1} />
                </div>
                
                <div>
                  <h3 className="text-xl font-serif text-ac-ivory mb-3">{service.title}</h3>
                  <p className="text-sm text-ac-ivory/60 font-sans leading-relaxed">{service.shortDesc}</p>
                </div>
                
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-xs text-ac-gold flex items-center gap-1 uppercase tracking-widest">
                    Details <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;