import React from 'react';

interface ButtonScreenProps {
  onActivate: () => void;
}

export const ButtonScreen: React.FC<ButtonScreenProps> = ({ onActivate }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 animate-fade-in text-center">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-white tracking-tight">Hızlı Grup Kur</h1>
        <p className="text-slate-400">Tek tıkla işlemleri başlatın.</p>
      </div>

      <button
        onClick={onActivate}
        className="group relative flex items-center justify-center w-64 h-64 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-[0_0_50px_rgba(34,197,94,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_80px_rgba(34,197,94,0.5)] active:scale-95"
      >
        <div className="absolute inset-0 rounded-full border-4 border-green-400/30 animate-pulse"></div>
        <div className="flex flex-col items-center space-y-4 z-10">
          <svg 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-20 h-20 text-white drop-shadow-lg"
          >
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2z"/>
          </svg>
          <span className="text-xl font-bold text-white drop-shadow-md">
            Tek Tuşla<br/>WP Grubu Aç
          </span>
        </div>
      </button>
      
      <p className="text-xs text-slate-500 mt-8">Güvenli Bağlantı</p>
    </div>
  );
};