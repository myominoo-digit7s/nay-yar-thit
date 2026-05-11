import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for NAY YAR THIT FUTURE COMPANY LIMITED.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-neutral-800 via-neutral-900 to-black text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Last updated: January 1, 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-neutral max-w-none">
            <p className="lead text-lg text-neutral-600 mb-8">
              At NAY YAR THIT FUTURE COMPANY LIMITED, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold text-neutral-800 mt-10 mb-4">1. Information We Collect</h2>
            <p className="text-neutral-600 mb-4">
              We may collect information about you in a variety of ways. The information we may collect on the Site includes:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 mb-6 space-y-2">
              <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.</li>
              <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
              <li><strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g. valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site.</li>
            </ul>

            <h2 className="text-2xl font-bold text-neutral-800 mt-10 mb-4">2. Use of Your Information</h2>
            <p className="text-neutral-600 mb-4">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 mb-6 space-y-2">
              <li>Create and manage your account.</li>
              <li>Process your transactions and send you related information, including purchase confirmations and invoices.</li>
              <li>Improve our website and services to better serve you.</li>
              <li>Respond to your comments, questions, and provide customer service.</li>
              <li>Send you technical notices, updates, security alerts, and support and administrative messages.</li>
            </ul>

            <h2 className="text-2xl font-bold text-neutral-800 mt-10 mb-4">3. Disclosure of Your Information</h2>
            <p className="text-neutral-600 mb-4">
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 mb-6 space-y-2">
              <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
              <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
            </ul>

            <h2 className="text-2xl font-bold text-neutral-800 mt-10 mb-4">4. Security of Your Information</h2>
            <p className="text-neutral-600 mb-6">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>

            <h2 className="text-2xl font-bold text-neutral-800 mt-10 mb-4">5. Your Rights</h2>
            <p className="text-neutral-600 mb-6">
              Depending on your location, you may have the right to access, correct, or delete your personal data. To exercise these rights, please contact us using the information provided below.
            </p>

            <h2 className="text-2xl font-bold text-neutral-800 mt-10 mb-4">6. Contact Us</h2>
            <p className="text-neutral-600 mb-4">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p className="text-neutral-600">
              NAY YAR THIT FUTURE COMPANY LIMITED<br />
              No. 71/84, San Sai 10 Street,<br />
              San Sai A Quarter, Tachileik Township,<br />
              Shan State, 06271, Myanmar<br />
              Email: support@nayyarthit.com
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
