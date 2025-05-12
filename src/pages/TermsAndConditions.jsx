import { motion } from 'framer-motion';

const TermsAndConditions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="mb-8 text-center font-bold text-primary dark:text-primary-light">
        Terms and Conditions
      </h1>
      
      <div className="bg-white dark:bg-surface-800 rounded-xl shadow-card p-6 md:p-8 mb-8">
        <p className="text-surface-600 dark:text-surface-300 mb-6">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        
        <p className="mb-6">
          Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the DropVault application operated by our company.
        </p>
        
        <p className="mb-6">
          Your access to and use of the service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
        </p>
        
        <p className="mb-8">
          By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
        </p>
        
        <h2 className="text-xl md:text-2xl mb-4 text-primary dark:text-primary-light">
          1. Acceptance of Terms
        </h2>
        <div className="mb-8 pl-4 border-l-2 border-surface-200 dark:border-surface-700">
          <p className="mb-3">
            By accessing or using our application, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy.
          </p>
          <p>
            We reserve the right to modify these terms at any time. We will always post the most current version on our website. By continuing to use our application after revisions become effective, you agree to be bound by the revised terms.
          </p>
        </div>
        
        <h2 className="text-xl md:text-2xl mb-4 text-primary dark:text-primary-light">
          2. User Accounts
        </h2>
        <div className="mb-8 pl-4 border-l-2 border-surface-200 dark:border-surface-700">
          <p className="mb-3">
            When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
          </p>
          <p className="mb-3">
            You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password.
          </p>
          <p>
            You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
          </p>
        </div>
        
        <h2 className="text-xl md:text-2xl mb-4 text-primary dark:text-primary-light">
          3. Intellectual Property and Content
        </h2>
        <div className="mb-8 pl-4 border-l-2 border-surface-200 dark:border-surface-700">
          <p className="mb-3">
            Our service and its original content, features, and functionality are and will remain the exclusive property of our company and its licensors.
          </p>
          <p className="mb-3">
            You retain all your ownership rights to your content. By uploading content to our platform, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, adapt, publish, and distribute such content for the purpose of providing our services.
          </p>
          <p>
            You represent and warrant that you own or have the necessary rights to the content you post and that such content does not violate the rights of any third party.
          </p>
        </div>
        
        <h2 className="text-xl md:text-2xl mb-4 text-primary dark:text-primary-light">
          4. Prohibited Uses
        </h2>
        <div className="mb-8 pl-4 border-l-2 border-surface-200 dark:border-surface-700">
          <p className="mb-3">
            You may use our service only for lawful purposes and in accordance with these Terms. You agree not to use our service:
          </p>
          <ul className="list-disc pl-5 mb-3 space-y-2">
            <li>In any way that violates any applicable national or international law or regulation.</li>
            <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
            <li>To impersonate or attempt to impersonate our company, an employee, another user, or any other person or entity.</li>
            <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the service, or which may harm our company or users of the service.</li>
          </ul>
        </div>
        
        <h2 className="text-xl md:text-2xl mb-4 text-primary dark:text-primary-light">
          5. Limitation of Liability
        </h2>
        <div className="mb-8 pl-4 border-l-2 border-surface-200 dark:border-surface-700">
          <p className="mb-3">
            In no event shall our company, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul className="list-disc pl-5 mb-3 space-y-2">
            <li>Your access to or use of or inability to access or use the service.</li>
            <li>Any conduct or content of any third party on the service.</li>
            <li>Any content obtained from the service.</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
          </ul>
        </div>
        
        <h2 className="text-xl md:text-2xl mb-4 text-primary dark:text-primary-light">
          6. Termination
        </h2>
        <div className="mb-8 pl-4 border-l-2 border-surface-200 dark:border-surface-700">
          <p className="mb-3">
            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
          <p>
            Upon termination, your right to use the service will immediately cease. If you wish to terminate your account, you may simply discontinue using the service.
          </p>
        </div>
        
        <h2 className="text-xl md:text-2xl mb-4 text-primary dark:text-primary-light">
          7. Governing Law
        </h2>
        <div className="mb-8 pl-4 border-l-2 border-surface-200 dark:border-surface-700">
          <p className="mb-3">
            These Terms shall be governed and construed in accordance with the laws of our jurisdiction, without regard to its conflict of law provisions.
          </p>
          <p>
            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
          </p>
        </div>
        
        <h2 className="text-xl md:text-2xl mb-4 text-primary dark:text-primary-light">
          8. Contact Us
        </h2>
        <div className="pl-4 border-l-2 border-surface-200 dark:border-surface-700">
          <p>
            If you have any questions about these Terms and Conditions, please contact us through our <a href="/contact" className="text-primary hover:underline dark:text-primary-light">contact page</a>.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TermsAndConditions;