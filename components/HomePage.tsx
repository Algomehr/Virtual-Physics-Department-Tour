import React, { useState, useEffect, useRef, useMemo } from 'react';
import { GoogleGenAI, Type } from '@google/genai';
import { Chatbot } from './Chatbot';
import { useLanguage } from '../contexts/LanguageContext';
import { translations, Professor, Floor, DepartmentCategory, DepartmentItem } from '../data/translations';

// Custom hook for scroll-triggered animations
const useScrollAnimation = () => {
  const [elements, setElements] = useState<HTMLElement[]>([]);
  
  useEffect(() => {
    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, [elements]);

  const refCallback = (el: HTMLElement | null) => {
    if (el && !elements.some(e => e === el)) {
      setElements(prev => [...prev, el]);
    }
  };
  
  return refCallback;
};

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="absolute top-4 right-4 z-20 flex space-x-2 bg-black/30 backdrop-blur-sm rounded-full p-1">
            <button 
                onClick={() => setLanguage('en')}
                className={`px-4 py-1 text-sm rounded-full transition-colors ${language === 'en' ? 'bg-cyan-500 text-white' : 'text-gray-300 hover:bg-white/10'}`}
            >
                English
            </button>
            <button 
                onClick={() => setLanguage('fa')}
                 className={`px-4 py-1 text-sm rounded-full transition-colors ${language === 'fa' ? 'bg-cyan-500 text-white' : 'text-gray-300 hover:bg-white/10'}`}
            >
                فارسی
            </button>
        </div>
    );
}

const MapModal: React.FC<{ floor: Floor; onClose: () => void, t: any }> = ({ floor, onClose, t }) => {
    const [pan, setPan] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [isPanning, setIsPanning] = useState(false);
    const [startPoint, setStartPoint] = useState({ x: 0, y: 0 });
    const imageContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    const handleWheel = (e: React.WheelEvent) => {
        e.preventDefault();
        const scaleAmount = 0.1;
        const newZoom = e.deltaY > 0 ? zoom - scaleAmount : zoom + scaleAmount;
        setZoom(Math.min(Math.max(0.5, newZoom), 3)); 
    };
    
    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsPanning(true);
        setStartPoint({ x: e.clientX - pan.x, y: e.clientY - pan.y });
        if(imageContainerRef.current) imageContainerRef.current.style.cursor = 'grabbing';
    };
    
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isPanning) return;
        e.preventDefault();
        setPan({
            x: e.clientX - startPoint.x,
            y: e.clientY - startPoint.y,
        });
    };
    
    const handleMouseUpOrLeave = () => {
        if (!isPanning) return;
        setIsPanning(false);
        if(imageContainerRef.current) imageContainerRef.current.style.cursor = 'grab';
    };

    const resetView = () => {
        setZoom(1);
        setPan({ x: 0, y: 0 });
    }

    return (
        <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div 
                className="bg-gray-800/80 backdrop-blur-lg border border-cyan-500/20 rounded-lg shadow-2xl w-full max-w-4xl h-full max-h-[85vh] flex flex-col relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <header className="flex justify-between items-center p-4 border-b border-gray-700 flex-shrink-0">
                    <h3 className="text-xl font-semibold text-cyan-300">{`${t.mapTitle}: ${floor.name}`}</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-white" aria-label={t.closeAria}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </header>

                <div 
                    ref={imageContainerRef}
                    className="flex-1 overflow-hidden relative cursor-grab bg-gray-900/50"
                    onWheel={handleWheel}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUpOrLeave}
                    onMouseLeave={handleMouseUpOrLeave}
                >
                    <img
                        src={floor.imageUrl}
                        alt={`${t.mapAlt} ${floor.name}`}
                        className="absolute top-0 left-0 w-full h-full object-contain"
                        style={{
                            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                            transition: isPanning ? 'none' : 'transform 0.1s ease-out',
                        }}
                    />
                </div>
                
                 <div className="absolute bottom-4 right-4 flex flex-col space-y-2 z-10">
                    <button onClick={() => setZoom(z => Math.min(z + 0.2, 3))} className="bg-gray-700 text-white rounded-full p-2 hover:bg-cyan-600 transition-colors shadow-lg" aria-label={t.zoomInAria}><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg></button>
                    <button onClick={() => setZoom(z => Math.max(z - 0.2, 0.5))} className="bg-gray-700 text-white rounded-full p-2 hover:bg-cyan-600 transition-colors shadow-lg" aria-label={t.zoomOutAria}><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" /></svg></button>
                    <button onClick={resetView} className="bg-gray-700 text-white rounded-full p-2 hover:bg-cyan-600 transition-colors shadow-lg" aria-label={t.resetViewAria}><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M20 20v-5h-5M4 4l16 16" /></svg></button>
                </div>
            </div>
        </div>
    );
};

const ProfessorModal: React.FC<{ professor: Professor; onClose: () => void, t: any }> = ({ professor, onClose, t }) => {
  const [pubs, setPubs] = useState<any[] | null>(null);
  const [pubError, setPubError] = useState<string | null>(null);
  const [isFetchingPubs, setIsFetchingPubs] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (!professor) return;

    const fetchPublications = async () => {
        setIsFetchingPubs(true);
        setPubs(null);
        setPubError(null);

        try {
            if (!process.env.API_KEY) {
                throw new Error("API key is not configured.");
            }
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

            const responseSchema = {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    title: { 
                      type: Type.STRING,
                      description: "The full title of the publication."
                    },
                    journal: { 
                      type: Type.STRING,
                      description: "The name of the journal or conference where it was published."
                    },
                    year: { 
                      type: Type.INTEGER,
                      description: "The year of publication."
                    }
                  },
                  required: ["title", "journal", "year"],
                }
            };
            
            const prompt = `Please list the 5 most recent and significant scientific publications by professor ${professor.name}, who is a specialist in ${professor.area}.`;

            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: prompt,
                config: {
                    responseMimeType: "application/json",
                    responseSchema: responseSchema,
                },
            });

            const publications = JSON.parse(response.text);

            if (publications && Array.isArray(publications) && publications.length > 0) {
                setPubs(publications);
            } else {
                setPubError(t.noPubsFound);
            }
        } catch (error) {
            console.error("Error fetching publications:", error);
            setPubError(t.pubFetchError);
        } finally {
            setIsFetchingPubs(false);
        }
    };

    fetchPublications();
  }, [professor, t.noPubsFound, t.pubFetchError]);

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-gray-800/80 backdrop-blur-lg border border-cyan-500/20 rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex justify-between items-center p-4 border-b border-gray-700 flex-shrink-0">
          <h3 className="text-xl font-semibold text-cyan-300">{t.profProfileTitle}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white" aria-label={t.closeAria}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </header>

        <div className="p-6 overflow-y-auto">
          <div className="flex flex-col sm:flex-row items-center mb-6 text-center sm:text-right sm:rtl:text-left">
            <div className="w-24 h-24 bg-cyan-500 rounded-full flex items-center justify-center text-4xl font-bold text-gray-900 flex-shrink-0 mb-4 sm:mb-0 sm:ml-6 rtl:sm:ml-0 rtl:sm:mr-6">
              {professor.initials}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">{professor.name}</h2>
              <p className="text-lg text-cyan-400">{professor.area}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-cyan-300 border-b border-gray-700 pb-1">{t.bioTitle}</h4>
              <p className="text-gray-300 leading-relaxed">{professor.bio}</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-cyan-300 border-b border-gray-700 pb-1">{t.pubsTitle}</h4>
              {isFetchingPubs && (
                <div className="space-y-3 animate-pulse" aria-label={t.loadingPubs}>
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="py-2">
                      <div className="h-4 bg-gray-600 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                    </div>
                  ))}
                </div>
              )}
              {pubError && !isFetchingPubs && (
                <p className="text-gray-400">{pubError}</p>
              )}
              {!isFetchingPubs && !pubError && pubs && (
                <ul className="list-disc list-inside space-y-3 text-gray-300 pr-4 rtl:pl-4 rtl:pr-0">
                  {pubs.map((pub, index) => (
                    <li key={index}>
                      <span className="font-semibold text-white">{pub.title}</span>
                      <span className="block text-sm text-cyan-400 mt-1">{pub.journal} ({pub.year})</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-cyan-300 border-b border-gray-700 pb-1">{t.contactTitle}</h4>
              <div className="text-gray-300 space-y-1">
                 <p><strong className="font-medium text-gray-200">{t.emailLabel}</strong> <a href={`mailto:${professor.contact.email}`} className="text-cyan-400 hover:underline">{professor.contact.email}</a></p>
                 <p><strong className="font-medium text-gray-200">{t.officeLabel}</strong> {professor.contact.office}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailModal: React.FC<{ item: DepartmentItem; onBack: () => void; onClose: () => void; t: any; language: string; }> = ({ item, onBack, onClose, t, language }) => {
  const [mainImage, setMainImage] = useState(item.gallery[0]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);
  
  const backArrow = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" /></svg>;
  const fwdArrow = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-gray-800/80 backdrop-blur-lg border border-cyan-500/20 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
        <header className="flex justify-between items-center p-4 border-b border-gray-700">
          <button onClick={onBack} className="text-gray-400 hover:text-white flex items-center">
             <span className={language === 'fa' ? 'ml-2' : 'mr-2'}>{language === 'fa' ? fwdArrow : backArrow}</span>
            {t.backButton}
          </button>
          <h3 className="text-xl font-semibold text-cyan-300">{item.name}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white" aria-label={t.closeAria}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </header>
        <div className="p-6 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <div className="mb-4 bg-black rounded-lg overflow-hidden">
                <img src={mainImage.src} alt={mainImage.alt} className="w-full h-80 object-cover" />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {item.gallery.map((img, index) => (
                  <button key={index} onClick={() => setMainImage(img)} className={`rounded-md overflow-hidden border-2 ${mainImage.src === img.src ? 'border-cyan-500' : 'border-transparent'} hover:border-cyan-500`}>
                    <img src={img.src} alt={img.alt} className="w-full h-20 object-cover" />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-4">{item.name}</h4>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const CategoryModal: React.FC<{ category: DepartmentCategory; onSelectItem: (item: DepartmentItem) => void; onClose: () => void; t: any, language: string }> = ({ category, onSelectItem, onClose, t, language }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);
  
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-gray-800/80 backdrop-blur-lg border border-cyan-500/20 rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
        <header className="flex justify-between items-center p-4 border-b border-gray-700">
          <h3 className="text-xl font-semibold text-cyan-300">{category.title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white" aria-label={t.closeAria}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </header>
        <div className="p-6 overflow-y-auto">
          <div className="space-y-4">
            {category.items.map(item => (
              <button key={item.name} onClick={() => onSelectItem(item)} className="w-full text-right rtl:text-left bg-gray-700 hover:bg-gray-600 border border-gray-600 hover:border-cyan-500 p-4 rounded-lg transition-all duration-300 flex justify-between items-center">
                <span className="text-lg text-white">{item.name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-gray-400 ${language === 'fa' ? 'transform -scale-x-100' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionDivider: React.FC = () => (
  <div className="overflow-hidden">
    <svg preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" style={{ fill: '#1f2937', width: '130%', height: 150, transform: 'translateY(5px)'}}>
        <path d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z" opacity=".25" />
        <path d="M0 0v150h1200V0h-27.35c-20.8 0-37.6 16.8-37.6 37.6 0 20.8 16.8 37.6 37.6 37.6s37.6-16.8 37.6-37.6c0-20.8-16.8-37.6-37.6-37.6zM600 0c-20.8 0-37.6 16.8-37.6 37.6 0 20.8 16.8 37.6 37.6 37.6s37.6-16.8 37.6-37.6C637.6 16.8 620.8 0 600 0zM1162.4 0c-20.8 0-37.6 16.8-37.6 37.6s16.8 37.6 37.6 37.6 37.6-16.8 37.6-37.6c0-20.8-16.8-37.6-37.6-37.6z" opacity=".5" />
        <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 122.49-16.77 186.23-17.7 65.81-1.02 130.83 5.37 196.46 14.83 65.62 9.45 131.25 21.84 198.86 21.84V0z" />
    </svg>
  </div>
);

interface HomePageProps {
  onEnterWorld: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onEnterWorld }) => {
  const [selectedFloor, setSelectedFloor] = useState<Floor | null>(null);
  const [selectedProfessor, setSelectedProfessor] = useState<Professor | null>(null);
  const [activeCategory, setActiveCategory] = useState<DepartmentCategory | null>(null);
  const [activeItem, setActiveItem] = useState<DepartmentItem | null>(null);
  const animatedRef = useScrollAnimation();

  const { language } = useLanguage();
  const t = translations[language];
  const { home, modals } = t;

  const chatbotContext = useMemo(() => {
    // Provide detailed information about each professor for the chatbot's context.
    const profInfo = t.professors.map(p => (
      `Professor Name: ${p.name}\n` +
      `Specialization: ${p.area}\n` +
      `Email: ${p.contact.email}\n` +
      `Biography: ${p.bio}`
    )).join('\n---\n');

    // Provide detailed information about each department section and its items.
    const sectionsInfo = t.departmentSections.map(s => {
      const itemsDetail = s.items.map(item => (
        `  Item Name: ${item.name}\n` +
        // Clean up description newlines for better context formatting
        `  Item Description: ${item.description.replace(/\s+/g, ' ').trim()}`
      )).join('\n');
      return `Section Title: ${s.title}\n${itemsDetail}`;
    }).join('\n---\n');
    
    // Announcements remain the same high-level format.
    const announcementInfo = t.announcements.map(a => `- ${a.title} (Date: ${a.date}).`).join('\n');

    // Replace placeholders in the main context string with the detailed information.
    return t.chatbot.context
      .replace('{profInfo}', profInfo)
      .replace('{sectionsInfo}', sectionsInfo)
      .replace('{announcementInfo}', announcementInfo);
  }, [t]);
  
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen font-sans">
      <style>{`
        .animated-section { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
        .animated-section.is-visible { opacity: 1; transform: translateY(0); }
        .card-3d { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .card-3d:hover { transform: perspective(1000px) rotateY(var(--rotate-y, 0)) rotateX(var(--rotate-x, 0)) scale3d(1.05, 1.05, 1.05); }
      `}</style>
      
      {/* Hero Section */}
      <header 
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2671&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <LanguageSwitcher />
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>{home.heroTitle}</h1>
          <p className="text-xl md:text-2xl text-cyan-300 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {home.heroSubtitle}
          </p>
          <button 
            onClick={onEnterWorld}
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/30 animate-fade-in-up animate-subtle-pulse"
            style={{ animationDelay: '0.6s' }}
          >
            {home.heroButton}
          </button>
        </div>
      </header>

      <main className="relative bg-gray-900 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* About Section */}
          <section ref={animatedRef} className="text-center py-20 animated-section">
             <h2 className="text-3xl font-bold text-cyan-400 mb-4">{home.aboutTitle}</h2>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
              {home.aboutText}
            </p>
          </section>

          <SectionDivider />

          {/* Announcements Section */}
          <section ref={animatedRef} className="py-20 bg-gray-800/50 rounded-xl animated-section" style={{transitionDelay: '200ms'}}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-cyan-400">{home.announcementsTitle}</h2>
              <p className="text-lg text-gray-400 mt-2">{home.announcementsSubtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.announcements.map((item, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-xl text-white mb-2">{item.title}</h3>
                  <p className="text-cyan-400">{item.date}</p>
                </div>
              ))}
            </div>
          </section>
          
          <SectionDivider />

          {/* Department Sections */}
          <section ref={animatedRef} className="py-20 animated-section" style={{transitionDelay: '200ms'}}>
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-cyan-400">{home.sectionsTitle}</h2>
                <p className="text-lg text-gray-400 mt-2">{home.sectionsSubtitle}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {t.departmentSections.map((category) => (
                <button 
                  key={category.title} 
                  onClick={() => setActiveCategory(category)}
                  className="w-full text-center bg-gray-800 p-6 rounded-lg flex flex-col items-center justify-center aspect-square transition-all duration-300 transform hover:scale-105 hover:bg-cyan-900/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20"
                  >
                  <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">{category.icon}</div>
                  <h3 className="font-semibold text-md text-white">{category.title}</h3>
                </button>
              ))}
            </div>
          </section>

          <SectionDivider />

          {/* Professors Section */}
          <section ref={animatedRef} className="py-20 bg-gray-800/50 rounded-xl animated-section" style={{transitionDelay: '200ms'}}>
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-cyan-400">{home.professorsTitle}</h2>
                <p className="text-lg text-gray-400 mt-2">{home.professorsSubtitle}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.professors.map((prof) => (
                <button 
                  key={prof.name} 
                  onClick={() => setSelectedProfessor(prof)}
                  className="card-3d group w-full text-center bg-gray-800 p-6 rounded-lg flex flex-col items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500"
                  onMouseMove={(e) => {
                     const rect = e.currentTarget.getBoundingClientRect();
                     const x = e.clientX - rect.left - rect.width / 2;
                     const y = e.clientY - rect.top - rect.height / 2;
                     e.currentTarget.style.setProperty('--rotate-x', `${-y / 20}deg`);
                     e.currentTarget.style.setProperty('--rotate-y', `${x / 20}deg`);
                  }}
                  onMouseLeave={(e) => {
                     e.currentTarget.style.setProperty('--rotate-x', '0deg');
                     e.currentTarget.style.setProperty('--rotate-y', '0deg');
                  }}
                  >
                  <div className="w-24 h-24 bg-cyan-500 rounded-full flex items-center justify-center text-4xl font-bold text-gray-900 flex-shrink-0 mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-400/50">
                    {prof.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">{prof.name}</h3>
                    <p className="text-sm text-cyan-400">{prof.area}</p>
                  </div>
                </button>
              ))}
            </div>
          </section>
          
          <SectionDivider />
          
          {/* Map and Chatbot Section */}
          <section ref={animatedRef} className="py-20 animated-section" style={{transitionDelay: '200ms'}}>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                  <div className="lg:col-span-2">
                    <h2 className="text-3xl font-bold text-cyan-400 mb-4">{home.mapTitle}</h2>
                    <p className="text-gray-400 mb-8">{home.mapSubtitle}</p>
                     <div className="space-y-4">
                      {t.floors.map((floor) => (
                        <button
                          key={floor.name}
                          onClick={() => setSelectedFloor(floor)}
                          className="w-full text-right rtl:text-left bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-cyan-500 p-4 rounded-lg transition-all duration-300 text-lg flex justify-between items-center"
                        >
                          <span>{floor.name}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-gray-400 ${language === 'fa' ? 'transform -scale-x-100' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-3 bg-gray-800/80 backdrop-blur-lg border border-cyan-500/20 rounded-xl shadow-2xl flex flex-col h-[600px]">
                     <div className="p-6 border-b border-gray-700">
                        <h2 className="text-2xl font-semibold text-cyan-300">{home.chatbotTitle}</h2>
                     </div>
                     <Chatbot context={chatbotContext} />
                  </div>
              </div>
          </section>

        </div>
      </main>
      
      {selectedFloor && <MapModal floor={selectedFloor} onClose={() => setSelectedFloor(null)} t={modals} />}
      {selectedProfessor && <ProfessorModal professor={selectedProfessor} onClose={() => setSelectedProfessor(null)} t={modals} />}
      
      {activeCategory && !activeItem && (
        <CategoryModal 
          category={activeCategory} 
          onSelectItem={item => setActiveItem(item)}
          onClose={() => setActiveCategory(null)}
          t={modals}
          language={language}
        />
      )}
      
      {activeItem && activeCategory && (
        <DetailModal 
          item={activeItem}
          onBack={() => setActiveItem(null)}
          onClose={() => {
            setActiveItem(null);
            setActiveCategory(null);
          }}
          t={modals}
          language={language}
        />
      )}
    </div>
  );
};