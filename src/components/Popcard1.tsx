import React from 'react';
import { X } from 'lucide-react';

interface PopupCardProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const PopupCard: React.FC<PopupCardProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Card */}
      <div className="relative bg-gradient-to-b from-blue-200 from-5% to-white rounded-2xl shadow-xl w-full max-w-md mx-4 transform transition-all">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-xl text-center font-semibold text-gray-900 mb-4">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PopupCard;