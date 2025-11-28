import React, { useEffect, useState } from 'react';
import { X, Instagram, Twitter, Mail, MapPin, Globe, Award } from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#f3f4f6]/80 backdrop-blur-xl transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Profile Card */}
      <div 
        className={`relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden transform transition-all duration-500 ease-out flex flex-col md:flex-row ${isVisible ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-8 opacity-0'}`}
      >
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 p-2 bg-gray-100/50 backdrop-blur rounded-full hover:bg-gray-200 transition-all shadow-sm"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Left Side: Image */}
        <div className="w-full md:w-5/12 h-64 md:h-auto relative bg-gray-100">
             <img 
                src="https://picsum.photos/seed/profile_v2/600/800" 
                alt="Profile" 
                className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
             <div className="absolute bottom-6 left-6 text-white md:hidden">
                 <h2 className="font-serif text-3xl font-bold">Takumi.</h2>
                 <p className="font-mono text-xs opacity-80 uppercase tracking-widest">Curator</p>
             </div>
        </div>

        {/* Right Side: Info */}
        <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col justify-center">
            <div className="hidden md:block mb-6">
                <span className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-2 block">My Profile</span>
                <h2 className="font-serif text-4xl font-bold text-gray-900 mb-1">Takumi.</h2>
                <p className="font-sans text-gray-500 text-sm">Product Designer / Minimalist</p>
            </div>

            <div className="space-y-6">
                <p className="font-sans text-gray-600 leading-relaxed text-sm">
                    Tokyo-based designer obsessed with functional beauty. 
                    I collect objects that tell a story, ranging from mid-century furniture to high-tech gadgets. 
                    Welcome to my digital archive of favorite things.
                </p>

                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-2xl">
                        <div className="flex items-center gap-2 mb-1">
                            <Award className="w-4 h-4 text-gray-400" />
                            <span className="text-[10px] uppercase font-bold text-gray-400">Items</span>
                        </div>
                        <span className="font-serif text-2xl text-gray-800">10</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-2xl">
                        <div className="flex items-center gap-2 mb-1">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span className="text-[10px] uppercase font-bold text-gray-400">Base</span>
                        </div>
                        <span className="font-serif text-lg text-gray-800">Tokyo, JP</span>
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex gap-4">
                    <a href="#" className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors shadow-lg hover:-translate-y-1 duration-300">
                        <Instagram className="w-4 h-4" />
                    </a>
                    <a href="#" className="p-3 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors hover:-translate-y-1 duration-300">
                        <Twitter className="w-4 h-4" />
                    </a>
                    <a href="#" className="p-3 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors hover:-translate-y-1 duration-300">
                        <Globe className="w-4 h-4" />
                    </a>
                    <a href="#" className="p-3 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors hover:-translate-y-1 duration-300">
                        <Mail className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};