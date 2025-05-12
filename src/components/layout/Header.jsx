import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './Navigation';
import getIcon from '../../utils/iconUtils';
import { useSidebar } from '../../contexts/SidebarContext';

function Header({ darkMode, setDarkMode }) {
  const MoonIcon = getIcon('Moon');
  const SunIcon = getIcon('Sun');
  const MenuIcon = getIcon('Menu');
  const { toggleSidebar } = useSidebar();

   return (
    <header className="sticky top-0 z-10 bg-white/80 dark:bg-surface-900/80 backdrop-blur-sm border-b border-surface-200 dark:border-surface-800">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="text-white font-bold text-xl"
              >
                D
              </motion.div>
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              DropVault
            </h1>
          </Link>
          <button
            onClick={toggleSidebar}
            className="ml-2 p-2 rounded-lg bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 transition-colors"
            aria-label="Toggle sidebar"
          >
            <MenuIcon className="w-5 h-5 text-surface-600 dark:text-surface-400" />
          </button>
        </div>
        
         <div className="flex items-center space-x-4">
          <Navigation />
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 transition-colors" aria-label="Toggle dark mode">
            {darkMode ? <SunIcon className="w-5 h-5 text-yellow-400" /> : <MoonIcon className="w-5 h-5 text-surface-600" />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;