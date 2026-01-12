import React from 'react';

interface ResultScreenProps {
  onReset: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ onReset }) => {
  return (
    <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 p-8 rounded-3xl shadow-2xl text-center animate-fade-in overflow-hidden">
      {/* Alert Icon */}
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-red-500/20 rounded-full animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
      </div>

      <h2 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mb-4 tracking-tighter drop-shadow-sm">
        100K
      </h2>
      
      <h3 className="text-4xl font-bold text-white mb-8 uppercase tracking-widest">
        HAZIRLA
      </h3>

      <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700 mb-8">
        <p className="text-slate-300 text-sm">
          Grup açılış ücreti hesaplandı. Lütfen ödemeyi hazırlayınız.
        </p>
      </div>

      <button 
        onClick={onReset}
        className="text-slate-500 hover:text-white text-sm transition-colors duration-200 underline decoration-slate-700 hover:decoration-white"
      >
        İptal Et / Geri Dön
      </button>
    </div>
  );
};