import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto"
    >
      <div className="card p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-primary dark:text-primary-light">Privacy Policy</h1>
        
        <p className="mb-6 text-surface-600 dark:text-surface-300">
          Last updated: {new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-3 text-surface-800 dark:text-surface-100">Introduction</h2>
            <p className="mb-3 text-surface-600 dark:text-surface-300">
              At DropVault, we respect your privacy and are committed to protecting your personal data. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
              you use our file management service.
            </p>
            <p className="text-surface-600 dark:text-surface-300">
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, 
              please do not access the application.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-surface-800 dark:text-surface-100">Information We Collect</h2>
            <p className="mb-3 text-surface-600 dark:text-surface-300">
              We collect information that you provide directly to us when you:
            </p>
            <ul className="list-disc pl-6 mb-3 text-surface-600 dark:text-surface-300 space-y-2">
              <li>Create an account and profile</li>
              <li>Upload, download, or share files</li>
              <li>Communicate with us directly</li>
              <li>Subscribe to our newsletters or updates</li>
              <li>Respond to surveys or questionnaires</li>
            </ul>
            <p className="text-surface-600 dark:text-surface-300">
              This information may include your name, email address, profile information, and the content of files you upload.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-surface-800 dark:text-surface-100">How We Use Your Information</h2>
            <p className="mb-3 text-surface-600 dark:text-surface-300">
              We use the information we collect for various purposes, including to:
            </p>
            <ul className="list-disc pl-6 mb-3 text-surface-600 dark:text-surface-300 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process and complete transactions</li>
              <li>Send administrative information, such as updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Communicate with you about products, services, offers, and events</li>
              <li>Monitor and analyze usage patterns and trends</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-surface-800 dark:text-surface-100">Cookies and Tracking Technologies</h2>
            <p className="mb-3 text-surface-600 dark:text-surface-300">
              We use cookies and similar tracking technologies to track activity on our application and 
              hold certain information. Cookies are files with a small amount of data that may include 
              an anonymous unique identifier.
            </p>
            <p className="text-surface-600 dark:text-surface-300">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
              However, if you do not accept cookies, you may not be able to use some portions of our service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-surface-800 dark:text-surface-100">Data Security</h2>
            <p className="mb-3 text-surface-600 dark:text-surface-300">
              We have implemented appropriate technical and organizational security measures designed to protect 
              the security of any personal information we process. However, please also remember that we cannot 
              guarantee that the internet itself is 100% secure.
            </p>
            <p className="text-surface-600 dark:text-surface-300">
              Although we will do our best to protect your personal information, transmission of personal 
              information to and from our application is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-surface-800 dark:text-surface-100">Your Data Protection Rights</h2>
            <p className="mb-3 text-surface-600 dark:text-surface-300">
              Depending on your location, you may have the following rights regarding your data:
            </p>
            <ul className="list-disc pl-6 mb-3 text-surface-600 dark:text-surface-300 space-y-2">
              <li>The right to access information we have about you</li>
              <li>The right to request correction of any inaccurate information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to object to processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-surface-800 dark:text-surface-100">Changes to This Privacy Policy</h2>
            <p className="text-surface-600 dark:text-surface-300">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last updated" date. You are advised to 
              review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-surface-800 dark:text-surface-100">Contact Us</h2>
            <p className="text-surface-600 dark:text-surface-300">
              If you have any questions about this Privacy Policy, please contact us at privacy@dropvault.com.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;