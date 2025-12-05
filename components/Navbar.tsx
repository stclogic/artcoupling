import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenVIP: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenVIP }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 border-b ${isScrolled ? 'bg-ac-black/90 backdrop-blur-md border-ac-gold/20 py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-serif text-ac-ivory tracking-widest cursor-pointer select-none">
          ART <span className="text-ac-gold">COUPLING</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          <a href="#about" className="text-sm font-sans text-ac-ivory/80 hover:text-ac-gold transition-colors tracking-wide">PHILOSOPHY</a>
          <a href="#services" className="text-sm font-sans text-ac-ivory/80 hover:text-ac-gold transition-colors tracking-wide">SERVICES</a>
          <a href="#collection" className="text-sm font-sans text-ac-ivory/80 hover:text-ac-gold transition-colors tracking-wide">COLLECTION</a>
          <button 
            onClick={onOpenVIP}
            className="text-xs font-sans tracking-widest text-ac-black bg-ac-gold px-6 py-2 rounded-full hover:bg-white transition-colors duration-300"
          >
            VIP ACCESS
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-ac-gold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-ac-black border-b border-ac-gold/20 py-8 px-6 flex flex-col space-y-6">
          <a href="#about" className="text-lg font-serif text-ac-ivory" onClick={() => setIsMobileMenuOpen(false)}>Philosophy</a>
          <a href="#services" className="text-lg font-serif text-ac-ivory" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#collection" className="text-lg font-serif text-ac-ivory" onClick={() => setIsMobileMenuOpen(false)}>Collection</a>
          <button 
            onClick={() => { onOpenVIP(); setIsMobileMenuOpen(false); }}
            className="text-left text-lg font-serif text-ac-gold"
          >
            VIP Access
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;