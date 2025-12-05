import React from 'react';
import { ARTWORKS } from '../constants';
import { ArtWork } from '../types';
import { ArrowRight } from 'lucide-react';

interface GalleryProps {
  onArtworkClick: (art: ArtWork) => void;
}

const Gallery: React.FC<GalleryProps> = ({ onArtworkClick }) => {
  return (
    <section id="collection" className="py-24 bg-ac-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
           <span className="text-ac-gold font-sans text-xs tracking-[0.2em] uppercase block mb-2">The Collection</span>
           <h2 className="text-4xl font-serif text-ac-ivory">Featured Masterpieces</h2>
        </div>
        <div className="hidden md:flex text-ac-ivory/40 text-sm font-sans items-center gap-2">
           Scroll for more <ArrowRight size={14} />
        </div>
      </div>

      <div className="flex overflow-x-auto gap-8 px-6 pb-12 hide-scrollbar snap-x snap-mandatory max-w-[100vw]">
        {ARTWORKS.map((art) => (
          <div 
            key={art.id} 
            onClick={() => onArtworkClick(art)}
            className="snap-center shrink-0 w-[85vw] md:w-[600px] group cursor-pointer relative"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-900">
               <img 
                 src={art.imageUrl} 
                 alt={art.title} 
                 className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-ac-black via-transparent to-transparent opacity-80"></div>
               
               <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div>
                        <h3 className="text-2xl font-serif text-ac-ivory italic mb-1">{art.title}</h3>
                        <p className="text-sm font-sans text-ac-ivory/70 uppercase tracking-widest">{art.artist}, {art.year}</p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <span className="text-ac-gold border border-ac-gold px-4 py-1 rounded-full text-xs tracking-wider">
                           {art.valuation}
                        </span>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        ))}
         {/* Spacer for right padding */}
        <div className="shrink-0 w-6"></div>
      </div>
    </section>
  );
};

export default Gallery;