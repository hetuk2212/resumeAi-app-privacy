export const metadata = {
  title: 'Privacy Policy',
  description: 'Our commitment to protecting your privacy and personal data',
};

export default function PrivacyPolicy() {
  return (
 <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-slate-600">
            Last updated: {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-slate prose-lg max-w-none">
          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Introduction</h2>
            <p className="text-slate-700 leading-relaxed">
              Resume Builder is provided by innovexweb Apps as a free service. This policy outlines how we handle any personal information you may share while using our app.
            </p>
          </div>

          {/* Information Collection */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Information We Collect</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We do <strong>not</strong> collect or store any personal information on our servers.
              All data entered in the app, including your name, email, address, work experience, or education, is stored locally on your device and not shared with anyone.
            </p>
            <p className="text-slate-700 leading-relaxed">
              We do not use tracking technologies or third-party analytics services. However, we may use limited error reporting tools like Firebase Crashlytics to identify and fix bugs.
            </p>
          </div>

          {/* How We Use Your Information */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">How We Use Your Information</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                To allow you to create, save, and export resumes within the app
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                To improve app performance and fix issues (e.g., via crash reports)
              </li>
            </ul>
          </div>

          {/* Information Sharing */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Information Sharing</h2>
            <p className="text-slate-700 leading-relaxed">
              We do not share your information with any third party. Any crash logs collected (e.g., by Firebase Crashlytics) are used strictly for fixing app-related issues and contain no resume data.
            </p>
          </div>

          {/* Data Security */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Data Security</h2>
            <p className="text-slate-700 leading-relaxed">
              Your data is stored locally on your device and is never uploaded to a server. While we make efforts to ensure data is stored securely within your device, we recommend securing your phone with a password or biometric lock.
            </p>
          </div>

          {/* Children's Privacy */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Children’s Privacy</h2>
            <p className="text-slate-700 leading-relaxed">
              This app is not intended for children under the age of 13. We do not knowingly collect information from children. If you believe a child has provided us personal data, please contact us for deletion.
            </p>
          </div>

          {/* Cookies */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Cookies</h2>
            <p className="text-slate-700 leading-relaxed">
              This app does not use cookies. No browsing data or session data is tracked or stored externally.
            </p>
          </div>

          {/* Updates */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Changes to This Policy</h2>
            <p className="text-slate-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date.
            </p>
          </div>

          {/* Contact Info */}
          <div className="bg-blue-50 rounded-2xl border border-blue-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              If you have any questions or concerns regarding this Privacy Policy, feel free to contact us:
            </p>
            <div className="space-y-2 text-slate-700">
              <p>Email: innovexwebapp@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      );
}