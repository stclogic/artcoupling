import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, className = '' }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-ac-black/80 backdrop-blur-md transition-opacity duration-300 px-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div 
        ref={modalRef}
        className={`bg-ac-black border border-ac-gold/30 shadow-2xl relative w-full max-h-[90vh] overflow-y-auto animate-[fadeInScale_0.3s_ease-out] ${className}`}
        style={{ animationFillMode: 'forwards' }}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-ac-ivory/50 hover:text-ac-gold transition-colors z-10"
          aria-label="Close Modal"
        >
          <X size={24} />
        </button>
        
        {title && (
          <div className="sticky top-0 bg-ac-black/95 backdrop-blur-sm px-8 py-6 border-b border-white/5 z-0">
            <h2 className="text-2xl font-serif text-ac-gold tracking-wide">{title}</h2>
          </div>
        )}
        
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;