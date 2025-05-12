import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import getIcon from '../utils/iconUtils';

const NotFound = () => {
  // Icon components
  const AlertTriangleIcon = getIcon('AlertTriangle');
  const HomeIcon = getIcon('Home');
  
  return (
    <motion.div 
      className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.8, rotate: -5 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 260, 
          damping: 20
        }}
        className="w-24 h-24 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center mb-6"
      >
        <AlertTriangleIcon className="w-12 h-12 text-accent" />
      </motion.div>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Page Not Found</h1>
      
      <p className="text-lg md:text-xl text-surface-600 dark:text-surface-400 max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link 
          to="/" 
          className="btn btn-primary flex items-center justify-center gap-2"
        >
          <HomeIcon className="w-5 h-5" />
          Back to Home
        </Link>
      </motion.div>
      
      <div className="w-full max-w-md mt-16">
        <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
      </div>
    </motion.div>
  );
};

export default NotFound;