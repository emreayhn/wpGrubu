import React from 'react';

interface ResultScreenProps {
  onReset: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ onReset }) => {
  return (
    <div className="relative bg-slate-800/80 backdrop-blur-2xl border border-slate-700 p-8 rounded-3xl shadow-[0_0_60px_-15px_rgba(239,68,68,0.3)] text-center animate-fade-in overflow-hidden">
      {/* Alert Icon */}
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-red-500/20 rounded-full animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
      </div>

      <h2 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-red-500 to-orange-500 mb-2 tracking-tighter drop-shadow-sm scale-110 transform">
        100K
      </h2>
      
      <h3 className="text-3xl font-bold text-white mb-8 uppercase tracking-[0.2em] border-b border-white/10 pb-4 mx-8">
        HAZIRLA
      </h3>

      <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50 mb-8 shadow-inner">
        <p className="text-slate-300 text-sm font-medium">
          Grup açılış ücreti hesaplandı.<br/>
          <span className="text-green-400 font-bold">Ödemeyi hazırlayınız.</span>
        </p>
      </div>

      <button 
        onClick={onReset}
        className="text-slate-500 hover:text-white text-xs transition-colors duration-200 uppercase tracking-widest hover:underline decoration-slate-700 hover:decoration-white offset-4"
      >
        İptal Et / Geri Dön
      </button>
    </div>
  );
};