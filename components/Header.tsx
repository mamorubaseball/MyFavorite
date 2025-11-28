import React from 'react';
import { Menu, Search, ShoppingBag, User } from 'lucide-react';

interface HeaderProps {
  onOpenProfile?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenProfile }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#f3f4f6]/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
        <div className="flex items-center gap-4">
          <button className="p-2 -ml-2 hover:bg-white rounded-xl transition-all duration-300 hover:shadow-soft group">
            <Menu className="w-5 h-5 text-gray-700 group-hover:text-black transition-colors" />
          </button>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="font-serif text-2xl font-bold tracking-tight text-gray-900 cursor-default select-none">
            Favorite Things.
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <button className="hidden md:block p-2 hover:bg-white rounded-xl transition-all duration-300 hover:shadow-soft text-gray-700 hover:text-black">
            <Search className="w-5 h-5" />
          </button>
          
          <button 
            onClick={onOpenProfile}
            className="p-2 hover:bg-white rounded-xl transition-all duration-300 hover:shadow-soft text-gray-700 hover:text-black"
            aria-label="Open Profile"
          >
            <User className="w-5 h-5" />
          </button>

          <button className="p-2 hover:bg-white rounded-xl transition-all duration-300 hover:shadow-soft relative text-gray-700 hover:text-black">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-400 rounded-full ring-2 ring-[#f3f4f6]"></span>
          </button>
        </div>
      </div>
    </header>
  );
};