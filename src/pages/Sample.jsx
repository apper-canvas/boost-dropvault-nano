import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check, Info, AlertTriangle, Activity, Download, Upload, ChevronRight } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
};

function Sample() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted with data: ' + JSON.stringify(formData));
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="space-y-10"
    >
      <section className="mb-8">
        <h1 className="mb-4">Sample Page</h1>
        <p className="text-lg text-surface-600 dark:text-surface-400 mb-6">
          This is a sample page demonstrating various UI components and layout options for your application.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="card p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary dark:text-primary-light mr-3">
                <Info size={20} />
              </div>
              <h3 className="text-lg">Information</h3>
            </div>
            <p className="text-surface-600 dark:text-surface-400">
              This card provides general information about the component or feature.
            </p>
          </div>

          <div className="card p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary dark:text-secondary-light mr-3">
                <Activity size={20} />
              </div>
              <h3 className="text-lg">Analytics</h3>
            </div>
            <p className="text-surface-600 dark:text-surface-400">
              Track performance and monitor key metrics with analytics.
            </p>
          </div>

          <div className="card p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-3">
                <AlertTriangle size={20} />
              </div>
              <h3 className="text-lg">Notifications</h3>
            </div>
            <p className="text-surface-600 dark:text-surface-400">
              Get real-time alerts and notifications for important events.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-6">Button Examples</h2>
        <div className="flex flex-wrap gap-4 mb-6">
          <button className="btn btn-primary">Primary Button</button>
          <button className="btn btn-secondary">Secondary Button</button>
          <button className="btn btn-outline">Outline Button</button>
          <button className="btn bg-accent text-white hover:bg-orange-600">Accent Button</button>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <button className="btn btn-primary flex items-center">
            <Download size={18} className="mr-2" /> 
            Download
          </button>
          <button className="btn btn-secondary flex items-center">
            <Upload size={18} className="mr-2" /> 
            Upload
          </button>
          <button className="btn btn-outline flex items-center">
            Learn More 
            <ChevronRight size={18} className="ml-1" />
          </button>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-6">Form Example</h2>
        <div className="card p-6 max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-surface-700 dark:text-surface-300">Name</label>
              <input id="name" name="name" type="text" className="input" value={formData.name} onChange={handleInputChange} placeholder="Enter your name" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-surface-700 dark:text-surface-300">Email</label>
              <input id="email" name="email" type="email" className="input" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-surface-700 dark:text-surface-300">Message</label>
              <textarea id="message" name="message" rows="4" className="input" value={formData.message} onChange={handleInputChange} placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit Form</button>
          </form>
        </div>
      </section>
    </motion.div>
  );
}

export default Sample;