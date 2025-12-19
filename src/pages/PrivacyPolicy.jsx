import { Helmet } from 'react-helmet-async'

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | AquaaLiv</title>
        <meta name="description" content="Read AquaaLiv's privacy policy to understand how we collect, use, and protect your data, including cookies and communication preferences." />
      </Helmet>
      <section className="container-p py-12 sm:py-16 max-w-4xl">
        <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
        <p className="mt-4 text-slate-700 text-sm">Effective date: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-slate max-w-none mt-6">
          <h2>1. Information We Collect</h2>
          <p>We may collect personal information such as name, phone number, email address, and service details when you contact us or request services.</p>

          <h2>2. How We Use Information</h2>
          <p>We use your information to provide and improve our services, schedule visits, process enquiries, and communicate with you.</p>

          <h2>3. Data Protection</h2>
          <p>We implement reasonable technical and organizational measures to secure your data. However, no method of transmission is 100% secure.</p>

          <h2>4. Cookies</h2>
          <p>Our website may use cookies to improve your browsing experience and analyze site traffic. You can control cookies through your browser settings.</p>

          <h2>5. Third-Party Services</h2>
          <p>We may use third-party tools for analytics and communication in compliance with relevant laws.</p>

          <h2>6. Your Choices</h2>
          <p>You may opt out of promotional communications at any time. To update or delete your data, contact us at care@aquaaliv.com.</p>

          <h2>7. Changes to This Policy</h2>
          <p>We may update this policy periodically. Continued use of our services constitutes acceptance of the updated policy.</p>

          <h2>8. Contact Us</h2>
          <p>If you have any questions about this policy, contact us at care@aquaaliv.com.</p>
        </div>
      </section>
    </>
  )
}
