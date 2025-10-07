import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Scene } from './components/Scene';
import { HomePage } from './components/HomePage';
import { useLanguage } from './contexts/LanguageContext';
import { translations } from './data/translations';
import { useFirstPersonControls } from './hooks/useFirstPersonControls';

const WorldView: React.FC = () => {
  const [showDesktopInstructions, setShowDesktopInstructions] = useState(true);
  const [showTouchInstructions, setShowTouchInstructions] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { language } = useLanguage();
  const t = translations[language].worldView;

  const isTouchDevice = useMemo(() => typeof window !== 'undefined' && 'ontouchstart' in window, []);

  const { camera, updateControls, joystick } = useFirstPersonControls(canvasRef);

  const handleClick = () => {
    if (!isTouchDevice && canvasRef.current && document.pointerLockElement !== canvasRef.current) {
      canvasRef.current.requestPointerLock();
    }
  };

  useEffect(() => {
    const hideTouchInstructions = () => {
      setShowTouchInstructions(false);
    };

    if (isTouchDevice) {
      window.addEventListener('touchstart', hideTouchInstructions, { once: true });
    } else {
      const handlePointerLockChange = () => {
        setShowDesktopInstructions(document.pointerLockElement !== canvasRef.current);
      };
      document.addEventListener('pointerlockchange', handlePointerLockChange, false);
      return () => {
        document.removeEventListener('pointerlockchange', handlePointerLockChange, false);
      };
    }

    return () => {
      window.removeEventListener('touchstart', hideTouchInstructions);
    };
  }, [isTouchDevice]);

  const JoystickUI = () => {
    if (!isTouchDevice || !joystick.base || !joystick.stick) return null;

    const baseStyle: React.CSSProperties = {
      position: 'fixed',
      left: `${joystick.base.x}px`,
      top: `${joystick.base.y}px`,
      transform: 'translate(-50%, -50%)',
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      border: '2px solid rgba(255, 255, 255, 0.4)',
      pointerEvents: 'none',
    };

    const stickStyle: React.CSSProperties = {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: `translate(-50%, -50%) translate(${joystick.stick.x}px, ${joystick.stick.y}px)`,
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
    };

    return (
      <div style={baseStyle}>
        <div style={stickStyle}></div>
      </div>
    );
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden" onClick={handleClick}>
      <Scene ref={canvasRef} camera={camera} updateControls={updateControls} />

      {showDesktopInstructions && !isTouchDevice && (
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

      {!showDesktopInstructions && !isTouchDevice && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-1 h-1 bg-white rounded-full mix-blend-difference"></div>
        </div>
      )}
      
      <JoystickUI />

      {isTouchDevice && showTouchInstructions && (
        <div className="absolute bottom-4 left-4 right-4 text-center text-white bg-black/50 p-3 rounded-lg pointer-events-none animate-fade-in-up">
            <p>{t.touchInstruction}</p>
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