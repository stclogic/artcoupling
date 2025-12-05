import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import AssetFlow from './components/AssetFlow';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { ArtWork, ServiceItem, FlowStep, ModalType } from './types';

const App: React.FC = () => {
  const [modalState, setModalState] = useState<{ type: ModalType; data?: any }>({ type: ModalType.NONE });

  const closeModal = () => setModalState({ type: ModalType.NONE });

  // Render content based on modal type
  const renderModalContent = () => {
    switch (modalState.type) {
      case ModalType.EXHIBITION_REQUEST:
        return (
          <div className="space-y-6">
            <p className="text-ac-ivory/70 font-sans font-light">
              To request a private viewing, please provide your details. Our concierge will contact you within 24 hours to arrange a secure time slot.
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-2 gap-4">
                 <input type="text" placeholder="First Name" className="bg-transparent border-b border-white/20 p-2 text-ac-ivory focus:border-ac-gold outline-none" />
                 <input type="text" placeholder="Last Name" className="bg-transparent border-b border-white/20 p-2 text-ac-ivory focus:border-ac-gold outline-none" />
               </div>
               <input type="email" placeholder="Private Email" className="w-full bg-transparent border-b border-white/20 p-2 text-ac-ivory focus:border-ac-gold outline-none" />
               <div className="pt-4">
                 <label className="flex items-center space-x-3 cursor-pointer">
                   <input type="checkbox" className="form-checkbox h-4 w-4 text-ac-gold rounded bg-transparent border-white/30" />
                   <span className="text-ac-ivory/50 text-sm">I agree to the Non-Disclosure Agreement (NDA)</span>
                 </label>
               </div>
               <button className="w-full mt-4 bg-ac-gold text-ac-black font-sans font-medium py-3 rounded-sm hover:bg-white transition-colors">
                 Submit Request
               </button>
            </form>
          </div>
        );

      case ModalType.LIQUIDITY_CONSULT:
        return (
          <div className="space-y-6">
             <p className="text-ac-ivory/70 font-sans font-light">
               Initiate a preliminary valuation for your asset. All submissions are encrypted and strictly confidential.
             </p>
             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <textarea 
                  placeholder="Describe the asset (Artist, Year, Medium, Provenance)..." 
                  rows={4}
                  className="w-full bg-ac-ink/20 border border-white/10 p-4 text-ac-ivory focus:border-ac-gold outline-none rounded-sm"
               ></textarea>
               <div className="border border-dashed border-white/20 p-8 text-center rounded-sm cursor-pointer hover:bg-white/5 transition-colors">
                 <span className="text-ac-gold text-sm uppercase tracking-wide">Upload Documentation / Photos</span>
               </div>
               <button className="w-full bg-ac-ink border border-ac-gold text-ac-gold py-3 hover:bg-ac-gold hover:text-ac-black transition-colors font-sans uppercase tracking-widest text-xs">
                 Request Consultation
               </button>
             </form>
          </div>
        );

      case ModalType.WHITEPAPER:
        return (
          <div className="text-center space-y-6">
            <p className="text-ac-ivory/80 font-serif text-lg italic">
              "The Democratization of High-Value Assets through Secure Custody and Tokenization"
            </p>
            <div className="bg-ac-ink/30 p-6 rounded-sm border border-white/5">
               <ul className="text-left text-ac-ivory/60 space-y-2 text-sm list-disc pl-4">
                 <li>Legal Framework for SPVs</li>
                 <li>Insurance Wrapping Mechanics</li>
                 <li>Secondary Market Liquidity</li>
               </ul>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
               <input type="email" placeholder="Enter your email to receive the PDF" className="w-full bg-transparent border-b border-white/20 p-2 text-center text-ac-ivory focus:border-ac-gold outline-none" />
               <button className="bg-ac-gold text-ac-black px-8 py-2 rounded-full text-sm font-medium hover:bg-white transition-colors">
                 Download
               </button>
            </form>
          </div>
        );
      
      case ModalType.ARTWORK_DETAIL:
        const art = modalState.data as ArtWork;
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 overflow-hidden rounded-sm">
              <img src={art.imageUrl} alt={art.title} className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-serif text-ac-ivory">{art.title}</h3>
                <p className="text-ac-gold text-lg mt-1">{art.artist}, {art.year}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm font-sans text-ac-ivory/60 border-y border-white/10 py-4">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-ac-ivory/30">Medium</span>
                  {art.medium}
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-ac-ivory/30">Dimensions</span>
                  {art.dimensions}
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-ac-ivory/30">Current Valuation</span>
                  <span className="text-ac-gold">{art.valuation}</span>
                </div>
              </div>

              <div className="space-y-2">
                 <h4 className="text-xs uppercase tracking-widest text-ac-ivory/50">Provenance</h4>
                 <p className="text-sm text-ac-ivory/70 leading-relaxed italic border-l-2 border-ac-gold pl-4">
                   {art.provenance}
                 </p>
              </div>

              <button className="w-full border border-ac-ivory/20 text-ac-ivory py-3 hover:bg-ac-ivory hover:text-ac-black transition-colors uppercase tracking-widest text-xs">
                Inquire about this piece
              </button>
            </div>
          </div>
        );

      case ModalType.SERVICE_DETAIL:
        const service = modalState.data as ServiceItem;
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-ac-gold">{service.title}</h3>
            <p className="text-ac-ivory/80 leading-relaxed font-sans font-light text-lg">
              {service.fullDesc}
            </p>
            <div className="bg-ac-ink/20 p-6 border-l border-ac-gold">
               <p className="text-ac-ivory/60 text-sm italic">
                 "Our {service.title.toLowerCase()} service is designed for UHNW individuals requiring absolute discretion."
               </p>
            </div>
            <button className="text-ac-gold hover:text-white underline underline-offset-4 text-sm">
              Schedule a call with a specialist
            </button>
          </div>
        );
      
      case ModalType.ASSET_FLOW_DETAIL:
        const step = modalState.data as FlowStep;
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-ac-gold text-ac-black flex items-center justify-center font-bold font-serif text-xl">
                 {step.id}
               </div>
               <h3 className="text-2xl font-serif text-ac-ivory">{step.title}</h3>
            </div>
            <p className="text-ac-ivory/70 text-lg">{step.description}</p>
            <div className="space-y-2">
              {step.details.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-3 text-ac-ivory/60">
                   <div className="w-1 h-1 bg-ac-gold rounded-full"></div>
                   <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>
        );

        case ModalType.VIP_BOOKING:
          return (
            <div className="space-y-6">
              <p className="text-ac-ivory/70 font-sans text-sm">
                Access the VIP Lounge. Please enter your membership ID or request access below.
              </p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Membership ID (Optional)" className="w-full bg-transparent border-b border-white/20 p-2 text-ac-ivory focus:border-ac-gold outline-none" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" className="bg-transparent border-b border-white/20 p-2 text-ac-ivory focus:border-ac-gold outline-none" />
                  <input type="email" placeholder="Email" className="bg-transparent border-b border-white/20 p-2 text-ac-ivory focus:border-ac-gold outline-none" />
                </div>
                <div className="h-4"></div>
                <button className="w-full bg-ac-gold text-ac-black font-medium py-3 rounded-full hover:bg-white transition-colors">
                  Request Access
                </button>
              </form>
            </div>
          );

      default:
        return null;
    }
  };

  const getModalTitle = () => {
    switch (modalState.type) {
      case ModalType.EXHIBITION_REQUEST: return "Request Exhibition";
      case ModalType.LIQUIDITY_CONSULT: return "Asset Liquidity";
      case ModalType.WHITEPAPER: return "Whitepaper";
      case ModalType.VIP_BOOKING: return "VIP Access";
      default: return undefined;
    }
  };

  return (
    <div className="bg-ac-black min-h-screen text-ac-ivory selection:bg-ac-gold selection:text-black relative">
      <Navbar onOpenVIP={() => setModalState({ type: ModalType.VIP_BOOKING })} />
      
      <main>
        <Hero 
          onRequestExhibition={() => setModalState({ type: ModalType.EXHIBITION_REQUEST })}
          onLiquidityConsult={() => setModalState({ type: ModalType.LIQUIDITY_CONSULT })}
        />
        <About 
          onWhitepaper={() => setModalState({ type: ModalType.WHITEPAPER })}
        />
        <Services 
          onServiceClick={(service) => setModalState({ type: ModalType.SERVICE_DETAIL, data: service })}
        />
        <Gallery 
          onArtworkClick={(art) => setModalState({ type: ModalType.ARTWORK_DETAIL, data: art })}
        />
        <AssetFlow 
          onStepClick={(step) => setModalState({ type: ModalType.ASSET_FLOW_DETAIL, data: step })}
        />
      </main>

      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/33753999545" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-[#20ba5a] transition-all duration-300 flex items-center justify-center group"
        aria-label="Contact us on WhatsApp"
      >
        <div className="absolute opacity-0 group-hover:opacity-100 right-full mr-4 bg-ac-black border border-ac-gold/20 px-3 py-1 rounded text-xs text-ac-gold whitespace-nowrap transition-opacity duration-300 pointer-events-none">
          Chat with Concierge
        </div>
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      <Modal 
        isOpen={modalState.type !== ModalType.NONE} 
        onClose={closeModal}
        title={getModalTitle()}
        className={modalState.type === ModalType.ARTWORK_DETAIL ? "max-w-5xl" : "max-w-xl"}
      >
        {renderModalContent()}
      </Modal>
    </div>
  );
};

export default App;