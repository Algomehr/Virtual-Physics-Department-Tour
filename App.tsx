import React, { useState, useRef, useEffect } from 'react';
import { Scene } from './components/Scene';
import { HomePage } from './components/HomePage';
import { useLanguage } from './contexts/LanguageContext';
import { translations } from './data/translations';

const WorldView: React.FC = () => {
  const [showInstructions, setShowInstructions] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { language } = useLanguage();
  const t = translations[language].worldView;

  const handleClick = () => {
    // Only request pointer lock if the canvas exists and is not already the active lock element.
    if (canvasRef.current && document.pointerLockElement !== canvasRef.current) {
      canvasRef.current.requestPointerLock();
    }
  };

  useEffect(() => {
    const handlePointerLockChange = () => {
      if (document.pointerLockElement === canvasRef.current) {
        setShowInstructions(false);
      } else {
        setShowInstructions(true);
      }
    };

    document.addEventListener('pointerlockchange', handlePointerLockChange, false);

    return () => {
      document.removeEventListener('pointerlockchange', handlePointerLockChange, false);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden" onClick={handleClick}>
      <Scene ref={canvasRef} />
      
      {showInstructions && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm text-white font-sans cursor-pointer transition-opacity duration-500">
          <div className="text-center p-8 rounded-lg max-w-lg">
            <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
            <p className="text-lg mb-6">{t.instruction}</p>
            <div className="text-left inline-block bg-gray-800 p-6 rounded-md shadow-lg">
              <h2 className="text-xl font-semibold mb-3">{t.controlsTitle}:</h2>
              <ul className="space-y-2">
                <li><span className="font-bold inline-block w-28">{t.mouse}</span> {t.look}</li>
                <li><span className="font-bold inline-block w-28">{t.ws}</span> {t.move}</li>
                <li><span className="font-bold inline-block w-28">{t.ad}</span> {t.strafe}</li>
                <li><span className="font-bold inline-block w-28">{t.space}</span> {t.flyUp}</li>
                <li><span className="font-bold inline-block w-28">{t.esc}</span> {t.release}</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {!showInstructions && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-1 h-1 bg-white rounded-full mix-blend-difference"></div>
        </div>
      )}
    </div>
  );
};


const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'world'>('home');

  if (view === 'home') {
    return <HomePage onEnterWorld={() => setView('world')} />;
  }

  return <WorldView />;
};

export default App;