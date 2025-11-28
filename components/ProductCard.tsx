import React from 'react';
import { Product } from '../types';
import { Plus } from 'lucide-react';
import { CATEGORY_THEMES } from '../constants';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
  index: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, index }) => {
  const theme = CATEGORY_THEMES[product.parentCategory];

  return (
    <div 
      className={`group relative flex flex-col ${theme.colors.cardBg} rounded-[2rem] shadow-soft hover:shadow-floating transition-all duration-500 ease-out cursor-pointer hover:-translate-y-2 overflow-hidden h-full`}
      onClick={() => onClick(product)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] w-full p-3 pb-0">
        <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative shadow-inner-soft">
            <img
            src={`https://picsum.photos/seed/${product.imageSeeds[0]}/800/1000`}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            />
            {/* Overlay Gradient - Tinted by theme */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <button className={`absolute bottom-4 right-4 bg-white/90 backdrop-blur ${theme.colors.primary} p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg`}>
                <Plus className="w-5 h-5" />
            </button>
        </div>
      </div>

      <div className="flex flex-col flex-grow px-6 pb-6 pt-4">
        <div className="flex justify-between items-start mb-2">
            <div>
                <span className={`font-mono text-[10px] ${theme.colors.secondary} uppercase tracking-widest mb-2 inline-block px-2 py-1 rounded-md ${theme.colors.badgeBg} ${theme.colors.badgeText} font-semibold`}>
                    No. {String(index + 1).padStart(2, '0')} — {product.category}
                </span>
                <h2 className={`font-serif text-xl font-medium ${theme.colors.primary} leading-tight`}>
                    {product.name}
                </h2>
            </div>
        </div>
        
        <div className="mt-auto flex justify-between items-end border-t border-gray-100 pt-4">
             <p className={`text-xs ${theme.colors.secondary} line-clamp-2 leading-relaxed max-w-[70%]`}>
                {product.description}
            </p>
            <span className={`font-mono text-sm font-semibold ${theme.colors.primary}`}>
                {product.price > 0 ? `${product.price.toLocaleString()}円` : 'Priceless'}
            </span>
        </div>
      </div>
    </div>
  );
};