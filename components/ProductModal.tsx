import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { X, Sparkles, ShoppingCart, MapPin, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { generateStylingAdvice } from '../services/geminiService';
import { CATEGORY_THEMES } from '../constants';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [advice, setAdvice] = useState<string | null>(null);
  const [isLoadingAdvice, setIsLoadingAdvice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (product) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
      setAdvice(null);
      setActiveImageIndex(0); // Reset image gallery
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }
  }, [product]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const handleGetAdvice = async () => {
    if (!product) return;
    setIsLoadingAdvice(true);
    const result = await generateStylingAdvice(product.name, product.description);
    setAdvice(result);
    setIsLoadingAdvice(false);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!product) return;
    setActiveImageIndex((prev) => (prev + 1) % product.imageSeeds.length);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!product) return;
    setActiveImageIndex((prev) => (prev - 1 + product.imageSeeds.length) % product.imageSeeds.length);
  };

  if (!product) return null;

  const theme = CATEGORY_THEMES[product.parentCategory];
  const ActionIcon = product.parentCategory === 'Place' ? MapPin : ShoppingCart;
  const actionText = product.parentCategory === 'Place' ? 'Save Location' : 'Add to Collection';

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
    >
      {/* Backdrop with strong blur */}
      <div 
        className="absolute inset-0 bg-[#f3f4f6]/80 backdrop-blur-xl transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Floating Card Modal */}
      <div 
        className={`relative w-full max-w-5xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden transform transition-all duration-500 ease-out flex flex-col md:flex-row max-h-[90vh] ${isVisible ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-8 opacity-0'}`}
      >
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/50 backdrop-blur rounded-full hover:bg-white transition-all shadow-sm"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Gallery Section */}
        <div className="w-full md:w-1/2 bg-gray-50 flex flex-col h-[40vh] md:h-auto relative group">
             <div className="flex-grow relative overflow-hidden">
                 <img
                  key={activeImageIndex} // Force re-render for animation if needed, or rely on src change
                  src={`https://picsum.photos/seed/${product.imageSeeds[activeImageIndex]}/1200/1200`}
                  alt={`${product.name} view ${activeImageIndex + 1}`}
                  className="w-full h-full object-cover animate-in fade-in duration-500 selection:bg-transparent"
                />
                
                {/* Left/Right Click Navigation Areas */}
                {product.imageSeeds.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute inset-y-0 left-0 w-1/3 flex items-center justify-start pl-4 cursor-pointer focus:outline-none z-10 hover:bg-gradient-to-r hover:from-black/10 hover:to-transparent transition-all duration-300"
                      aria-label="Previous image"
                    >
                      <div className="p-3 rounded-full bg-white/30 backdrop-blur-md shadow-lg opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        <ChevronLeft className="w-6 h-6 text-white drop-shadow-md" />
                      </div>
                    </button>
                    
                    <button
                      onClick={handleNextImage}
                      className="absolute inset-y-0 right-0 w-1/3 flex items-center justify-end pr-4 cursor-pointer focus:outline-none z-10 hover:bg-gradient-to-l hover:from-black/10 hover:to-transparent transition-all duration-300"
                      aria-label="Next image"
                    >
                      <div className="p-3 rounded-full bg-white/30 backdrop-blur-md shadow-lg opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        <ChevronRight className="w-6 h-6 text-white drop-shadow-md" />
                      </div>
                    </button>
                    
                    {/* Mobile Touch Indicators (Visible only briefly or always on touch, here just using css for simplicity) */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 md:hidden z-10">
                        {product.imageSeeds.map((_, idx) => (
                            <div 
                                key={idx} 
                                className={`w-1.5 h-1.5 rounded-full transition-all ${activeImageIndex === idx ? 'bg-white w-3' : 'bg-white/50'}`} 
                            />
                        ))}
                    </div>
                  </>
                )}
             </div>
             
             {/* Thumbnail Strip (Hidden on mobile to give more space to image, visible on md) */}
             <div className="hidden md:flex p-4 gap-3 overflow-x-auto no-scrollbar bg-white/50 backdrop-blur-sm border-t border-gray-100 z-20">
                {product.imageSeeds.map((seed, idx) => (
                    <button
                        key={seed}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-xl overflow-hidden transition-all duration-300 ${activeImageIndex === idx ? `ring-2 ring-offset-2 ${theme.colors.ring}` : 'opacity-70 hover:opacity-100'}`}
                    >
                        <img 
                            src={`https://picsum.photos/seed/${seed}/200/200`} 
                            alt="thumbnail" 
                            className="w-full h-full object-cover"
                        />
                    </button>
                ))}
             </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col overflow-y-auto no-scrollbar bg-white">
          <div>
            <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-widest font-semibold ${theme.colors.badgeBg} ${theme.colors.badgeText}`}>
                    {product.parentCategory} / {product.category}
                </span>
                <span className="font-mono text-xs text-gray-400">{product.id}</span>
            </div>
            
            <h2 className={`font-serif text-3xl md:text-4xl font-medium ${theme.colors.primary} mb-2`}>{product.name}</h2>
            <div className={`font-mono text-xl ${theme.colors.secondary} mb-6`}>
                 {product.price > 0 ? `${product.price.toLocaleString()}円` : 'Priceless'}
            </div>
            
            <p className="font-sans text-gray-600 leading-relaxed text-base mb-8">
              {product.description}
            </p>

            {/* Favorite Points */}
            <div className="mb-8">
                <h3 className={`font-mono text-xs uppercase tracking-widest font-bold mb-4 ${theme.colors.secondary}`}>My Favorite Points</h3>
                <ul className="space-y-3">
                    {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <div className={`mt-0.5 p-0.5 rounded-full ${theme.colors.badgeBg}`}>
                                <Check className={`w-3 h-3 ${theme.colors.badgeText}`} />
                            </div>
                            <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-2xl">
                    <span className="block text-[10px] uppercase text-gray-400 font-bold mb-1">Specs / Info</span>
                    <span className="text-sm text-gray-700">{product.dimensions}</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl">
                    <span className="block text-[10px] uppercase text-gray-400 font-bold mb-1">Details</span>
                    <span className="text-sm text-gray-700">{product.material}</span>
                </div>
            </div>
          </div>

          {/* AI Stylist */}
          <div className={`mt-auto p-5 rounded-2xl border ${theme.colors.badgeBg} border-opacity-50`}>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className={`w-4 h-4 ${theme.colors.primary}`} />
              <h3 className={`font-mono text-[10px] uppercase tracking-widest font-bold ${theme.colors.primary}`}>AI Assistant</h3>
            </div>
            
            {!advice ? (
              <button 
                  onClick={handleGetAdvice}
                  disabled={isLoadingAdvice}
                  className={`text-left w-full text-sm opacity-60 hover:opacity-100 underline underline-offset-4 transition-all ${theme.colors.primary}`}
                >
                  {isLoadingAdvice ? 'Thinking...' : 'Ask for comments on this item →'}
              </button>
            ) : (
              <div className="animate-in fade-in duration-500">
                <p className={`font-serif italic text-sm leading-relaxed ${theme.colors.primary}`}>
                  "{advice}"
                </p>
              </div>
            )}
          </div>
          
          <button className={`mt-6 w-full text-white py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:-translate-y-1 transition-all duration-300 font-mono text-sm uppercase ${theme.colors.accent} ${theme.colors.accentHover}`}>
            <ActionIcon className="w-4 h-4" />
            {actionText}
          </button>
        </div>
      </div>
    </div>
  );
};