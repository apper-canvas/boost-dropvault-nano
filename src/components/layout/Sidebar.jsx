import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSidebar } from '../../contexts/SidebarContext';
import getIcon from '../../utils/iconUtils';

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useSidebar();
  const location = useLocation();
  
  // Icons
  const HomeIcon = getIcon('Home');
  const FolderIcon = getIcon('Folder');
  const UploadIcon = getIcon('Upload');
  const SettingsIcon = getIcon('Settings');
  const FileIcon = getIcon('FileText');
  const InfoIcon = getIcon('Info');
  const MessageIcon = getIcon('MessageSquare');
  const XIcon = getIcon('X');
  
  // Close sidebar on route change on mobile
  useEffect(() => {
    if (window.innerWidth < 1024) {
      closeSidebar();
    }
  }, [location.pathname, closeSidebar]);
  
  const menuItems = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'My Files', path: '/files', icon: FolderIcon },
    { name: 'Upload', path: '/upload', icon: UploadIcon },
    { name: 'Settings', path: '/settings', icon: SettingsIcon },
    { divider: true },
    { name: 'Terms of Service', path: '/terms', icon: FileIcon },
    { name: 'Privacy Policy', path: '/privacy', icon: InfoIcon },
    { name: 'Contact Us', path: '/contact', icon: MessageIcon },
    { name: 'Sample Page', path: '/sample', icon: FileIcon },
  ];

  return (
    <>
      {/* Backdrop overlay - visible on mobile only when sidebar is open */}
      {isSidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: isSidebarOpen ? 0 : "-100%" }}
        transition={{ type: "spring", damping: 20 }}
        className="fixed top-0 left-0 z-30 h-full w-64 bg-white dark:bg-surface-800 border-r border-surface-200 dark:border-surface-700 shadow-lg"
      >
        <div className="p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">DropVault</h2>
          <button onClick={closeSidebar} className="lg:hidden p-2 rounded-full hover:bg-surface-100 dark:hover:bg-surface-700">
            <XIcon className="w-5 h-5 text-surface-600 dark:text-surface-400" />
          </button>
        </div>

        <nav className="mt-4">
          {menuItems.map((item, index) => (
            item.divider ? 
            <div key={`divider-${index}`} className="my-2 border-t border-surface-200 dark:border-surface-700"></div> :
            <NavLink key={item.path} to={item.path} className={({ isActive }) => 
              `flex items-center gap-3 px-4 py-3 transition-colors ${isActive ? 'bg-primary/10 text-primary border-r-4 border-primary dark:text-primary-light' : 'text-surface-600 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700'}`
            }>
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </motion.aside>
    </>
  );
}

export default Sidebar;