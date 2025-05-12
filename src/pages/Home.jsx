import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import MainFeature from '../components/MainFeature';
import getIcon from '../utils/iconUtils';

const Home = () => {
  const [stats, setStats] = useState({
    totalFiles: 0,
    totalSize: 0,
    recentUploads: [],
  });
  
  // Icon components
  const FileIcon = getIcon('FileText');
  const StorageIcon = getIcon('Database');
  const SecurityIcon = getIcon('Shield');
  const SpeedIcon = getIcon('Zap');
  
  const handleFileUpload = (files) => {
    // Calculate new stats
    const newTotalFiles = stats.totalFiles + files.length;
    const newTotalSize = stats.totalSize + files.reduce((sum, file) => sum + file.size, 0);
    
    // Create entries for recent uploads
    const newUploads = files.map(file => ({
      id: Math.random().toString(36).substring(2),
      name: file.name,
      size: file.size,
      type: file.type,
      uploadedAt: new Date(),
    }));
    
    // Update stats
    setStats({
      totalFiles: newTotalFiles,
      totalSize: newTotalSize,
      recentUploads: [...newUploads, ...stats.recentUploads].slice(0, 5),
    });
    
    // Show success toast
    toast.success(`${files.length} file${files.length !== 1 ? 's' : ''} uploaded successfully!`);
  };
  
  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  };
  
  const featureItems = [
    {
      icon: SecurityIcon,
      title: "Secure Storage",
      description: "Your files are encrypted and stored securely with industry-standard protocols.",
    },
    {
      icon: SpeedIcon,
      title: "Fast Transfers",
      description: "Optimized upload and download speeds to save you time.",
    },
    {
      icon: FileIcon,
      title: "Any File Type",
      description: "Support for all file types and formats, no limitations.",
    },
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <section className="text-center max-w-3xl mx-auto mb-12">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          Secure File Management Made Simple
        </motion.h1>
        <p className="text-lg md:text-xl text-surface-600 dark:text-surface-400 mb-8">
          Upload, organize, and share your files with DropVault's intuitive interface.
        </p>
      </section>
      
      <MainFeature onFileUpload={handleFileUpload} />
      
      {stats.totalFiles > 0 && (
        <motion.section 
          className="card p-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <StorageIcon className="mr-2 w-5 h-5 text-primary" />
            Your Storage Stats
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-50 dark:bg-surface-800/50 rounded-lg p-4 flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <FileIcon className="text-primary w-6 h-6" />
              </div>
              <div>
                <p className="text-surface-500 dark:text-surface-400 text-sm">Total Files</p>
                <p className="text-2xl font-semibold">{stats.totalFiles}</p>
              </div>
            </div>
            
            <div className="bg-surface-50 dark:bg-surface-800/50 rounded-lg p-4 flex items-center">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mr-4">
                <StorageIcon className="text-secondary w-6 h-6" />
              </div>
              <div>
                <p className="text-surface-500 dark:text-surface-400 text-sm">Total Size</p>
                <p className="text-2xl font-semibold">{formatBytes(stats.totalSize)}</p>
              </div>
            </div>
          </div>
          
          {stats.recentUploads.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-3">Recent Uploads</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="text-left text-surface-500 dark:text-surface-400 text-sm">
                    <tr className="border-b border-surface-200 dark:border-surface-700">
                      <th className="pb-2 font-medium">Name</th>
                      <th className="pb-2 font-medium">Type</th>
                      <th className="pb-2 font-medium">Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.recentUploads.map((file) => (
                      <tr key={file.id} className="border-b border-surface-100 dark:border-surface-800">
                        <td className="py-3 pr-4 truncate max-w-[200px]">{file.name}</td>
                        <td className="py-3 pr-4 text-surface-500 dark:text-surface-400">{file.type}</td>
                        <td className="py-3">{formatBytes(file.size)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </motion.section>
      )}
      
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-8 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featureItems.map((feature, index) => (
            <motion.div
              key={index}
              className="card p-6 hover:shadow-soft transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 rounded-full neumorphic-light flex items-center justify-center mb-4 mx-auto">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
              <p className="text-surface-600 dark:text-surface-400 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Home;