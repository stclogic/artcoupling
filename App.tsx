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
    <div className="bg-ac-black min-h-screen text-ac-ivory selection:bg-ac-gold selection:text-black">
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