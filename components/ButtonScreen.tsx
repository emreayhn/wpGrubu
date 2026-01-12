import React from 'react';

interface ButtonScreenProps {
  onActivate: () => void;
}

export const ButtonScreen: React.FC<ButtonScreenProps> = ({ onActivate }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-10 animate-fade-in text-center py-8">
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold text-white tracking-tight drop-shadow-xl">Hızlı Grup Kur</h1>
        <p className="text-slate-400 font-medium text-lg">Tek tıkla işlemleri başlatın.</p>
      </div>

      <button
        onClick={onActivate}
        className="group relative flex items-center justify-center w-72 h-72 rounded-full bg-gradient-to-b from-green-500 to-green-700 shadow-[0_0_60px_rgba(34,197,94,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_90px_rgba(34,197,94,0.6)] active:scale-95 active:shadow-[0_0_30px_rgba(34,197,94,0.3)] cursor-pointer"
        aria-label="WP Grubu Aç"
      >
        <div className="absolute inset-0 rounded-full border-4 border-green-400/30 animate-[pulse_2s_infinite]"></div>
        <div className="absolute inset-2 rounded-full border border-white/10"></div>
        
        <div className="flex flex-col items-center space-y-4 z-10 transform transition-transform group-hover:-translate-y-1">
          <svg 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-24 h-24 text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]"
          >
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2z"/>
          </svg>
          <span className="text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            BAŞLAT
          </span>
        </div>
      </button>
      
      <div className="flex items-center gap-2 text-xs text-slate-500 font-mono bg-slate-900/50 px-3 py-1 rounded-full border border-slate-800">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        Sistem Çevrimiçi
      </div>
    </div>
  );
};