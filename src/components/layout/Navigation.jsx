import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import getIcon from '../../utils/iconUtils';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const MenuIcon = getIcon('Menu');
  const XIcon = getIcon('X');
  const HomeIcon = getIcon('Home');
  const FolderIcon = getIcon('Folder');
  const UploadIcon = getIcon('Upload');
  const SettingsIcon = getIcon('Settings');
  
  const menuItems = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'My Files', path: '/files', icon: FolderIcon },
    { name: 'Upload', path: '/upload', icon: UploadIcon },
    { name: 'Settings', path: '/settings', icon: SettingsIcon },
  ];

  return (
    <nav className="relative">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `px-3 py-2 rounded-lg flex items-center space-x-1 transition-colors ${
                isActive 
                  ? 'bg-primary/10 text-primary dark:text-primary-light' 
                  : 'text-surface-600 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-800'
              }`
            }
          >
            <item.icon className="w-4 h-4" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2 rounded-lg text-surface-600 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-800"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 top-10 w-48 mt-2 py-2 bg-white dark:bg-surface-800 rounded-lg shadow-soft border border-surface-200 dark:border-surface-700 md:hidden"
          >
            {menuItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={({ isActive }) => `block px-4 py-2 hover:bg-surface-100 dark:hover:bg-surface-700 ${isActive ? 'text-primary dark:text-primary-light' : 'text-surface-600 dark:text-surface-300'}`} onClick={() => setIsMenuOpen(false)}>{item.name}</NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navigation;