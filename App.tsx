import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { ProfileModal } from './components/ProfileModal';
import { PRODUCTS, CATEGORY_THEMES } from './constants';
import { Product, ParentCategory } from './types';

// Default "All" state style
const ALL_CATEGORY_STYLE = {
  colors: {
    primary: 'text-gray-900',
    secondary: 'text-gray-500',
    background: 'bg-[#F3F4F6]', // Neutral Gray
    accent: 'bg-black',
  }
};

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<ParentCategory | 'All'>('Furniture'); // Default to Furniture as requested
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  // Determine current theme based on active category
  const currentTheme = activeCategory === 'All' 
    ? ALL_CATEGORY_STYLE 
    : CATEGORY_THEMES[activeCategory];

  const filteredProducts = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.parentCategory === activeCategory);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-1000 ease-in-out ${currentTheme.colors.background} selection:bg-black/10 selection:text-black`}>
      <Header onOpenProfile={() => setIsProfileOpen(true)} />
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-6 pb-20">
        {/* Simple Hero Section */}
        <section className="py-20 md:py-32 flex flex-col items-center text-center transition-all duration-700">
            <span className={`font-mono text-xs uppercase tracking-[0.2em] mb-6 transition-colors duration-700 ${currentTheme.colors.secondary}`}>
                Curated Collection 2024
            </span>
            <h2 className={`font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-8 transition-colors duration-700 ${currentTheme.colors.primary}`}>
                My Favorite<br />
                <span className="italic opacity-50">Things.</span>
            </h2>
            <p className={`max-w-xl font-sans leading-relaxed transition-colors duration-700 ${currentTheme.colors.secondary} mb-10`}>
                A digital archive of tangible objects, spaces, and flavors. 
                Switch categories to explore different facets of lifestyle.
            </p>

            {/* Profile / Curator Button */}
            <button 
                onClick={() => setIsProfileOpen(true)}
                className={`group flex items-center gap-3 pl-2 pr-6 py-2 rounded-full bg-white shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ring-1 ring-black/5`}
            >
                <div className="w-10 h-10 rounded-full overflow-hidden relative ring-2 ring-white shadow-sm">
                    <img 
                        src="https://picsum.photos/seed/profile_v2/100/100" 
                        alt="Profile" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                </div>
                <div className="flex flex-col items-start text-left">
                        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold leading-none mb-1">Curated by</span>
                        <span className={`font-serif text-base font-medium ${currentTheme.colors.primary}`}>Takumi.</span>
                </div>
            </button>
        </section>

        {/* Categories / Filter */}
        <div className="flex justify-center gap-3 mb-16 flex-wrap">
            <button 
                onClick={() => setActiveCategory('All')}
                className={`px-6 py-2 rounded-full text-sm font-mono transition-all duration-500 border border-transparent
                  ${activeCategory === 'All' 
                    ? 'bg-black text-white shadow-lg scale-105' 
                    : 'bg-white text-gray-400 hover:text-black hover:shadow-md'}`}
            >
                All
            </button>
            
            {(Object.keys(CATEGORY_THEMES) as ParentCategory[]).map((cat) => {
                const theme = CATEGORY_THEMES[cat];
                const isActive = activeCategory === cat;
                return (
                    <button 
                        key={cat} 
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-mono transition-all duration-500 border border-transparent
                            ${isActive 
                                ? `${theme.colors.accent} text-white shadow-lg scale-105` 
                                : `bg-white ${theme.colors.secondary} hover:bg-white hover:text-black hover:shadow-md`
                            }
                        `}
                    >
                        {theme.label}
                    </button>
                );
            })}
        </div>

        {/* Product Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredProducts.map((product, index) => (
              <div key={product.id} className="h-full animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-backwards" style={{ animationDelay: `${index * 50}ms` }}>
                <ProductCard 
                    product={product} 
                    onClick={handleProductClick} 
                    index={index}
                />
              </div>
            ))}
            
            {/* Empty State */}
            {filteredProducts.length === 0 && (
                <div className="col-span-full py-20 text-center opacity-50">
                    <p className="font-serif text-xl">More items coming soon to this collection.</p>
                </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      
      <ProductModal 
        product={selectedProduct} 
        onClose={handleCloseModal} 
      />
      
      <ProfileModal 
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </div>
  );
};

export default App;