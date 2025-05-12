import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { Mail, User, MessageSquare, Send } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email address is invalid";
      isValid = false;
    }
    
    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }
    
    setErrors(tempErrors);
    return isValid;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when the user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate an API call
      try {
        // Fake API delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Success
        toast.success("Your message has been sent successfully!");
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } catch (error) {
        toast.error("Failed to send message. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="card p-6">
        <p className="text-surface-600 dark:text-surface-400 mb-8">
          Have a question or feedback? We'd love to hear from you. Fill out the form below and our team will get back to you as soon as possible.
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1 text-surface-700 dark:text-surface-300">Your Name</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 border border-r-0 border-surface-300 dark:border-surface-700 rounded-l-lg bg-surface-100 dark:bg-surface-800 text-surface-500">
                <User size={18} />
              </span>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className={`input rounded-l-none flex-1 ${errors.name ? 'border-red-500 dark:border-red-700' : ''}`} 
                placeholder="Enter your name"
              />
            </div>
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-surface-700 dark:text-surface-300">Email Address</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 border border-r-0 border-surface-300 dark:border-surface-700 rounded-l-lg bg-surface-100 dark:bg-surface-800 text-surface-500">
                <Mail size={18} />
              </span>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`input rounded-l-none flex-1 ${errors.email ? 'border-red-500 dark:border-red-700' : ''}`} placeholder="Enter your email" />
            </div>
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>
          
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium mb-1 text-surface-700 dark:text-surface-300">Subject</label>
            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className={`input ${errors.subject ? 'border-red-500 dark:border-red-700' : ''}`} placeholder="What is your message about?" />
            {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-1 text-surface-700 dark:text-surface-300">Message</label>
            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} className={`input resize-none ${errors.message ? 'border-red-500 dark:border-red-700' : ''}`} placeholder="Type your message here..."></textarea>
            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
          </div>
          
          <button type="submit" className="btn btn-primary w-full flex items-center justify-center gap-2" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'} 
            <Send size={18} className={isSubmitting ? 'animate-pulse' : ''} />
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;