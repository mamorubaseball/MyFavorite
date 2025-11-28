import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#f3f4f6] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-12">
            <div>
                <h3 className="font-serif text-2xl font-bold italic text-gray-900 mb-4">Archive.</h3>
                <p className="font-sans text-gray-500 max-w-xs leading-relaxed text-sm">
                    Curating the finest furniture and objects for a life well-lived. Designed with simplicity in mind.
                </p>
            </div>
            <div className="flex gap-12">
                <div className="flex flex-col gap-2">
                    <span className="font-mono text-[10px] uppercase text-gray-400 tracking-widest mb-2">Social</span>
                    <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Instagram</a>
                    <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Pinterest</a>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="font-mono text-[10px] uppercase text-gray-400 tracking-widest mb-2">Legal</span>
                    <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Privacy</a>
                    <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Terms</a>
                </div>
            </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-gray-400">
            <span>© 2024 Archive Supply Co.</span>
            <span>Site by Gemini Engineer</span>
        </div>
      </div>
    </footer>
  );
};