import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import getIcon from '../utils/iconUtils';

const MainFeature = ({ onFileUpload }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});
  const fileInputRef = useRef(null);
  
  // Icon components
  const UploadCloudIcon = getIcon('UploadCloud');
  const FileTextIcon = getIcon('FileText');
  const TrashIcon = getIcon('Trash2');
  const CheckCircleIcon = getIcon('CheckCircle');
  const XCircleIcon = getIcon('XCircle');
  const FolderPlusIcon = getIcon('FolderPlus');
  
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };
  
  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(Array.from(e.target.files));
    }
  };
  
  const handleFiles = (newFiles) => {
    // Create file objects with unique IDs
    const processedFiles = newFiles.map(file => ({
      id: Math.random().toString(36).substring(2),
      file,
      name: file.name,
      size: file.size,
      type: file.type
    }));
    
    setFiles(prevFiles => [...prevFiles, ...processedFiles]);
  };
  
  const removeFile = (id) => {
    setFiles(prevFiles => prevFiles.filter(file => file.id !== id));
  };
  
  const clearFiles = () => {
    setFiles([]);
  };
  
  const simulateUpload = useCallback(() => {
    if (files.length === 0) {
      toast.error("Please add at least one file to upload");
      return;
    }
    
    setIsUploading(true);
    
    // Initialize progress for each file
    const initialProgress = {};
    files.forEach(file => {
      initialProgress[file.id] = 0;
    });
    setUploadProgress(initialProgress);
    
    // Simulate file upload with progress
    const simulateFileProgress = (fileId, index) => {
      let progress = 0;
      const randomTime = 500 + Math.random() * 1000; // Random time between 500ms and 1500ms
      
      const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 10) + 1;
        
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
          
          // Check if all files have reached 100%
          setUploadProgress(prev => {
            const updated = { ...prev, [fileId]: progress };
            
            // If all files are at 100%, complete the upload
            if (Object.values(updated).every(p => p === 100)) {
              setTimeout(() => {
                // Successful upload
                onFileUpload(files.map(f => f.file));
                setIsUploading(false);
                setFiles([]);
                setUploadProgress({});
              }, 500);
            }
            
            return updated;
          });
        } else {
          setUploadProgress(prev => ({
            ...prev,
            [fileId]: progress
          }));
        }
      }, randomTime / 10);
    };
    
    // Start simulating uploads with staggered starts
    files.forEach((file, index) => {
      setTimeout(() => {
        simulateFileProgress(file.id, index);
      }, index * 300); // Stagger start of each file upload by 300ms
    });
  }, [files, onFileUpload]);
  
  const cancelUpload = () => {
    setIsUploading(false);
    setUploadProgress({});
    toast.info("Upload canceled");
  };
  
  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  };
  
  // File type icons mapping based on mime type
  const getFileIcon = (type) => {
    if (type.startsWith('image/')) return getIcon('Image');
    if (type.startsWith('video/')) return getIcon('Video');
    if (type.startsWith('audio/')) return getIcon('Music');
    if (type.includes('pdf')) return getIcon('FileText');
    if (type.includes('spreadsheet') || type.includes('excel')) return getIcon('FileSpreadsheet');
    if (type.includes('word') || type.includes('document')) return getIcon('FileText');
    if (type.includes('presentation') || type.includes('powerpoint')) return getIcon('FilePresentation');
    if (type.includes('zip') || type.includes('compressed')) return getIcon('Archive');
    return getIcon('File');
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="card overflow-visible"
    >
      <div className="p-6 pb-3 border-b border-surface-200 dark:border-surface-700">
        <h2 className="text-xl md:text-2xl font-bold mb-1 flex items-center">
          <UploadCloudIcon className="mr-2 w-6 h-6 text-primary" />
          File Uploader
        </h2>
        <p className="text-surface-600 dark:text-surface-400">
          Drag & drop files or browse to upload
        </p>
      </div>
      
      <div className="p-6">
        <div
          className={`
            border-2 border-dashed rounded-xl p-8 transition-all duration-200 text-center
            ${isDragging 
              ? 'border-primary bg-primary/5' 
              : 'border-surface-300 dark:border-surface-700 hover:border-primary hover:bg-primary/5'
            }
          `}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileInputChange}
            className="hidden"
            multiple
          />
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-20 h-20 mx-auto mb-4 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center"
          >
            <UploadCloudIcon className="w-10 h-10 text-primary" />
          </motion.div>
          
          <h3 className="text-lg font-semibold mb-2">
            {isDragging ? 'Drop files here' : 'Drag & Drop Files Here'}
          </h3>
          
          <p className="text-surface-500 dark:text-surface-400 mb-4">
            Or browse from your computer
          </p>
          
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn btn-primary"
            onClick={() => fileInputRef.current.click()}
            disabled={isUploading}
          >
            <FolderPlusIcon className="w-5 h-5 mr-2 inline-block" />
            Browse Files
          </motion.button>
        </div>
        
        {files.length > 0 && (
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold flex items-center">
                <FileTextIcon className="w-5 h-5 mr-2 text-primary" />
                Selected Files ({files.length})
              </h3>
              
              {!isUploading && (
                <button 
                  className="text-red-500 hover:text-red-600 text-sm flex items-center"
                  onClick={clearFiles}
                >
                  <TrashIcon className="w-4 h-4 mr-1" />
                  Clear All
                </button>
              )}
            </div>
            
            <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 scrollbar-hide">
              <AnimatePresence initial={false}>
                {files.map(file => {
                  const FileTypeIcon = getFileIcon(file.type);
                  const progress = uploadProgress[file.id] || 0;
                  
                  return (
                    <motion.div
                      key={file.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="bg-surface-50 dark:bg-surface-800 rounded-lg p-3 relative"
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-lg bg-surface-200 dark:bg-surface-700 flex items-center justify-center mr-3 shrink-0">
                          <FileTypeIcon className="w-5 h-5 text-primary" />
                        </div>
                        
                        <div className="min-w-0 flex-1 pr-8">
                          <p className="font-medium truncate" title={file.name}>{file.name}</p>
                          <p className="text-xs text-surface-500 dark:text-surface-400">
                            {formatBytes(file.size)}
                          </p>
                          
                          {isUploading && (
                            <div className="mt-2">
                              <div className="h-1.5 w-full bg-surface-200 dark:bg-surface-700 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-primary rounded-full transition-all duration-200"
                                  style={{ width: `${progress}%` }}
                                />
                              </div>
                              <span className="text-xs mt-1 inline-block text-surface-500 dark:text-surface-400">
                                {progress}%
                              </span>
                            </div>
                          )}
                        </div>
                        
                        {!isUploading && (
                          <button 
                            className="absolute right-3 top-3 text-surface-400 hover:text-red-500 transition-colors"
                            onClick={() => removeFile(file.id)}
                          >
                            <XCircleIcon className="w-5 h-5" />
                          </button>
                        )}
                        
                        {isUploading && progress === 100 && (
                          <CheckCircleIcon className="w-5 h-5 text-green-500 absolute right-3 top-3" />
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
            
            <div className="mt-6 flex gap-3 justify-end">
              {isUploading ? (
                <button 
                  className="btn btn-outline text-red-500 border-red-200 hover:bg-red-50 dark:border-red-800/50 dark:hover:bg-red-900/20"
                  onClick={cancelUpload}
                >
                  Cancel Upload
                </button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-primary"
                  onClick={simulateUpload}
                  disabled={files.length === 0}
                >
                  <UploadCloudIcon className="w-5 h-5 mr-2 inline-block" />
                  Upload Files
                </motion.button>
              )}
            </div>
          </div>
        )}
      </div>
      
      <div className="px-6 py-4 bg-surface-50 dark:bg-surface-800/50 border-t border-surface-200 dark:border-surface-700 rounded-b-xl">
        <p className="text-sm text-surface-500 dark:text-surface-400">
          <strong>Supported formats:</strong> All file types accepted up to 100MB each.
        </p>
      </div>
    </motion.div>
  );
};

export default MainFeature;