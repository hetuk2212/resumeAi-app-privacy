export const metadata = {
  title: 'Privacy Policy',
  description: 'Our commitment to protecting your privacy and personal data',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-slate-600">
            Last updated: {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>

        <div className="prose prose-slate prose-lg max-w-none">
          {/* Introduction */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Introduction</h2>
            <p className="text-slate-700">
              Resume Builder is provided by Innovexweb Apps as a free service. This policy outlines how we handle any personal information you may share while using our app.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Information We Collect</h2>
            <p className="text-slate-700">
              We do <strong>not</strong> collect or store any personal information on our servers.
              All resume data (like name, email, experience, etc.) stays on your device.
            </p>
            <p className="text-slate-700 mt-2">
              We do not use third-party SDKs, tracking tools, analytics, or advertising services.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">How We Use Your Information</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                To create, save, and export resumes within the app.
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                To ensure core app functionality on your device.
              </li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Information Sharing</h2>
            <p className="text-slate-700">
              Your information is not shared with any third party. The app does not send or upload any data to external servers.
            </p>
          </section>

          {/* Permissions */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Permissions</h2>
            <p className="text-slate-700">
              The app may request access to your device's camera or storage only for features like profile image upload or PDF export. These permissions are used solely for core functionality and do not send data anywhere.
            </p>
          </section>

          {/* Data Security */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Data Security</h2>
            <p className="text-slate-700">
              All data is stored locally on your phone. We recommend securing your device with a passcode or biometric lock for extra protection.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Children’s Privacy</h2>
            <p className="text-slate-700">
              This app is not intended for children under the age of 13. We do not knowingly collect data from children. Contact us if you believe a child has submitted personal data.
            </p>
          </section>

          {/* Cookies */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Cookies</h2>
            <p className="text-slate-700">
              This app does not use cookies or track any browsing or session data.
            </p>
          </section>

          {/* Changes */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Changes to This Policy</h2>
            <p className="text-slate-700">
              We may update this Privacy Policy from time to time. All changes will be posted here with the updated date.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-blue-50 rounded-2xl border border-blue-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-slate-700 mb-4">
              If you have any questions about this Privacy Policy, contact us at:
            </p>
            <p className="text-slate-700">📧 Email: innovexwebapp@gmail.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}
