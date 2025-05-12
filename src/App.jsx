import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { SidebarProvider } from './contexts/SidebarContext';
import Sidebar from './components/layout/Sidebar';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';

// Page components
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Sample from './pages/Sample';
import TermsAndConditions from './pages/TermsAndConditions';
import Contact from './pages/Contact';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : 
           window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  
  const location = useLocation();
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <div className="flex-grow flex">
          <Sidebar />
      
          <main className="flex-grow w-full container mx-auto px-4 py-6">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/sample" element={<Sample />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
          </main>
        </div>
      
      <footer className="bg-white dark:bg-surface-800 border-t border-surface-200 dark:border-surface-700 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col">
              <p className="text-surface-500 dark:text-surface-400 text-sm">
                &copy; {new Date().getFullYear()} DropVault. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-col">
              <h3 className="font-semibold text-surface-700 dark:text-surface-300 mb-3">Quick Links</h3>
              <div className="flex flex-col space-y-2 text-sm">
                <Link to="/" className="text-surface-500 dark:text-surface-400 hover:text-primary dark:hover:text-primary-light transition-colors">
                  Home
                </Link>
                <Link to="/terms" className="text-surface-500 dark:text-surface-400 hover:text-primary dark:hover:text-primary-light transition-colors">
                  Terms of Service
                </Link>
                <Link to="/privacy" className="text-surface-500 dark:text-surface-400 hover:text-primary dark:hover:text-primary-light transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/contact" className="text-surface-500 dark:text-surface-400 hover:text-primary dark:hover:text-primary-light transition-colors">
                  Contact Us
                </Link>
                <Link to="/sample" className="text-surface-500 dark:text-surface-400 hover:text-primary dark:hover:text-primary-light transition-colors">
                  Sample Page
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <h3 className="font-semibold text-surface-700 dark:text-surface-300 mb-3">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-surface-500 dark:text-surface-400 hover:text-primary dark:hover:text-primary-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-surface-500 dark:text-surface-400 hover:text-primary dark:hover:text-primary-light transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-surface-500 dark:text-surface-400 hover:text-primary dark:hover:text-primary-light transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-surface-500 dark:text-surface-400 hover:text-primary dark:hover:text-primary-light transition-colors">
                <Github size={20} />
              </a>
            </div>
            </div>
          </div>
        </div>
      </footer>
      
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
        toastClassName="!bg-white dark:!bg-surface-800 !shadow-soft"
        progressClassName="!bg-primary"
      />
      </div>
    </SidebarProvider>
  ); 
}

export default App;