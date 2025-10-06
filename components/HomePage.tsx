import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Chatbot } from './Chatbot';
import { useLanguage } from '../contexts/LanguageContext';
import { translations, Professor, Floor, DepartmentCategory, DepartmentItem } from '../data/translations';


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
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div 
                className="bg-gray-800 rounded-lg shadow-2xl w-full max-w-4xl h-full max-h-[85vh] flex flex-col relative overflow-hidden"
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
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-gray-800 rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col relative"
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
              <ul className="list-disc list-inside space-y-2 text-gray-300 pr-4 rtl:pl-4 rtl:pr-0">
                {professor.publications.map((pub, index) => <li key={index}>{pub}</li>)}
              </ul>
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
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-gray-800 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
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
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-gray-800 rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
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

interface HomePageProps {
  onEnterWorld: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onEnterWorld }) => {
  const [selectedFloor, setSelectedFloor] = useState<Floor | null>(null);
  const [selectedProfessor, setSelectedProfessor] = useState<Professor | null>(null);
  const [activeCategory, setActiveCategory] = useState<DepartmentCategory | null>(null);
  const [activeItem, setActiveItem] = useState<DepartmentItem | null>(null);

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
      
      {/* Hero Section */}
      <header 
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1614726365953-53131ada455b?q=80&w=2670&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <LanguageSwitcher />
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">{home.heroTitle}</h1>
          <p className="text-xl md:text-2xl text-cyan-300 mb-8 max-w-3xl mx-auto">
            {home.heroSubtitle}
          </p>
          <button 
            onClick={onEnterWorld}
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-lg py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg shadow-cyan-500/30"
          >
            {home.heroButton}
          </button>
        </div>
      </header>

      <main className="relative bg-gray-900 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* About Section */}
          <section className="text-center py-20">
             <h2 className="text-3xl font-bold text-cyan-400 mb-4">{home.aboutTitle}</h2>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
              {home.aboutText}
            </p>
          </section>

          {/* Announcements Section */}
          <section className="py-20 bg-gray-800/50 rounded-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-cyan-400">{home.announcementsTitle}</h2>
              <p className="text-lg text-gray-400 mt-2">{home.announcementsSubtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.announcements.map((item, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-xl text-white mb-2">{item.title}</h3>
                  <p className="text-cyan-400">{item.date}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Department Sections */}
          <section className="py-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-cyan-400">{home.sectionsTitle}</h2>
                <p className="text-lg text-gray-400 mt-2">{home.sectionsSubtitle}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {t.departmentSections.map((category) => (
                <button 
                  key={category.title} 
                  onClick={() => setActiveCategory(category)}
                  className="w-full text-center bg-gray-800 p-6 rounded-lg flex flex-col items-center justify-center aspect-square transition-all duration-300 transform hover:scale-105 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500"
                  >
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="font-semibold text-md text-white">{category.title}</h3>
                </button>
              ))}
            </div>
          </section>

          {/* Professors Section */}
          <section className="py-20 bg-gray-800/50 rounded-xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-cyan-400">{home.professorsTitle}</h2>
                <p className="text-lg text-gray-400 mt-2">{home.professorsSubtitle}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.professors.map((prof) => (
                <button 
                  key={prof.name} 
                  onClick={() => setSelectedProfessor(prof)}
                  className="w-full text-center bg-gray-800 p-6 rounded-lg flex flex-col items-center transition-all duration-300 transform hover:scale-105 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500"
                  >
                  <div className="w-24 h-24 bg-cyan-500 rounded-full flex items-center justify-center text-4xl font-bold text-gray-900 flex-shrink-0 mb-4">
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
          
          {/* Map and Chatbot Section */}
          <section className="py-20">
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

                  <div className="lg:col-span-3 bg-gray-800 rounded-xl shadow-2xl flex flex-col h-[600px]">
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