import React, { useState } from 'react';
import { ButtonScreen } from './components/ButtonScreen';
import { ResultScreen } from './components/ResultScreen';

export default function App() {
  const [showResult, setShowResult] = useState(false);

  const handleButtonClick = () => {
    setShowResult(true);
  };

  const handleReset = () => {
    setShowResult(false);
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-black p-4 relative overflow-hidden animate-gradient">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        {!showResult ? (
          <ButtonScreen onActivate={handleButtonClick} />
        ) : (
          <ResultScreen onReset={handleReset} />
        )}
      </div>
    </main>
  );
}