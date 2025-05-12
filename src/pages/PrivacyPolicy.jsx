import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4
};

function PrivacyPolicy() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-8">
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Introduction</h2>
            <p className="text-surface-600 dark:text-surface-300 mb-3">
              At DropVault, we are committed to protecting your privacy and personal data. This Privacy Policy 
              explains how we collect, use, process, and store your information when you use our services.
            </p>
            <p className="text-surface-600 dark:text-surface-300">
              This policy applies to all users of DropVault, including registered users and visitors to our website.
            </p>
          </div>
          
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
            <h3 className="text-lg font-medium mb-2">Personal Information</h3>
            <p className="text-surface-600 dark:text-surface-300 mb-3">
              We collect personal information that you provide directly to us, such as:
            </p>
            <ul className="list-disc list-inside text-surface-600 dark:text-surface-300 ml-4 mb-4">
              <li>Name and contact information</li>
              <li>Account credentials</li>
              <li>Payment information</li>
              <li>Profile information</li>
            </ul>
            
            <h3 className="text-lg font-medium mb-2">Usage Data</h3>
            <p className="text-surface-600 dark:text-surface-300 mb-3">
              We automatically collect certain information when you use DropVault:
            </p>
            <ul className="list-disc list-inside text-surface-600 dark:text-surface-300 ml-4">
              <li>IP address and device information</li>
              <li>Browser type and settings</li>
              <li>Usage patterns and preferences</li>
              <li>Files uploaded and storage usage</li>
            </ul>
          </div>
          
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-surface-600 dark:text-surface-300 mb-3">
              We use the collected information for various purposes:
            </p>
            <ul className="list-disc list-inside text-surface-600 dark:text-surface-300 ml-4">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </div>
          
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Data Security</h2>
            <p className="text-surface-600 dark:text-surface-300">
              The security of your data is important to us. We implement appropriate security measures to protect 
              your personal information from unauthorized access, alteration, disclosure, or destruction. All data 
              is encrypted during transmission and at rest. We regularly review our security practices to ensure 
              the highest level of protection.
            </p>
          </div>
          
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
            <p className="text-surface-600 dark:text-surface-300 mb-3">
              You have the following data protection rights:
            </p>
            <ul className="list-disc list-inside text-surface-600 dark:text-surface-300 ml-4">
              <li>The right to access, update or delete your information</li>
              <li>The right to rectification</li>
              <li>The right to object to processing</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default PrivacyPolicy;