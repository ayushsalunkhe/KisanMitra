import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

// Components
import { ThemeProvider } from './components/ThemeProvider';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RoleSelector from './components/RoleSelector';
import ModuleGrid from './components/ModuleGrid';
import About from './components/About';
import Footer from './components/Footer';

// Mock data
import { modules, roles } from './data/mockData';

// Language files (simplified for now)
const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिंदी' },
  { code: 'mr', name: 'मराठी' },
  { code: 'bn', name: 'বাংলা' },
  { code: 'ta', name: 'தমிழ்' },
  { code: 'te', name: 'తెలుగు' },
  { code: 'kn', name: 'ಕನ್ನಡ' },
  { code: 'gu', name: 'ગુજરાતી' }
];

// Simple translation function (mock)
const translations = {
  en: {
    title: 'Kisan Mitra',
    subtitle: 'Smart Farm Assistant'
  },
  hi: {
    title: 'किसान मित्र',
    subtitle: 'स्मार्ट फार्म सहायक'
  }
};

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [selectedRole, setSelectedRole] = useState('farmer');
  const [showInstallPWA, setShowInstallPWA] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  // Language management
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
    document.documentElement.lang = savedLanguage;
  }, []);

  const setLanguage = (lang) => {
    setCurrentLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  // Role management
  useEffect(() => {
    const savedRole = localStorage.getItem('selectedRole') || 'farmer';
    setSelectedRole(savedRole);
  }, []);

  const handleRoleSelect = (roleId) => {
    setSelectedRole(roleId);
    localStorage.setItem('selectedRole', roleId);
  };

  // PWA Install
  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPWA(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const installPWA = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setShowInstallPWA(false);
      }
      setDeferredPrompt(null);
    }
  };

  // Simple translation function
  const t = (key) => {
    return translations[currentLanguage]?.[key] || translations.en[key] || key;
  };

  // Get modules ordered by selected role
  const getOrderedModules = () => {
    const role = roles.find(r => r.id === selectedRole);
    if (!role) return modules;
    
    const orderedModules = role.moduleOrder.map(id => modules.find(m => m.id === id)).filter(Boolean);
    const remainingModules = modules.filter(m => !role.moduleOrder.includes(m.id));
    
    return [...orderedModules, ...remainingModules];
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="App min-h-screen transition-colors duration-300">
          <AnimatedBackground />
          
          <Navbar
            currentLanguage={currentLanguage}
            setLanguage={setLanguage}
            languages={languages}
            showInstallPWA={showInstallPWA}
            installPWA={installPWA}
          />
          
          <main>
            <Hero t={t} />
            
            <RoleSelector
              selectedRole={selectedRole}
              onRoleSelect={handleRoleSelect}
              t={t}
            />
            
            <ModuleGrid
              modules={getOrderedModules()}
              selectedRole={selectedRole}
              t={t}
            />
            
            <About t={t} />
          </main>
          
          <Footer
            currentLanguage={currentLanguage}
            setLanguage={setLanguage}
            languages={languages}
            t={t}
          />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;