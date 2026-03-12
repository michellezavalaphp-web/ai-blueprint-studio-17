import SectionHeading from "@/components/SectionHeading";
import { ShieldCheck } from "lucide-react";

const PrivacyPolicy = () => (
  <>
    <section className="page-header">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <div className="badge-tag mb-4">
            <ShieldCheck className="h-3 w-3" />
            Legal
          </div>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            Last updated: March 11, 2026
          </p>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto max-w-3xl px-4 space-y-8">
        <div className="prose-section">
          <h2>1. Introduction</h2>
          <p>
            <strong>Agape Advisory Group LLC DBA Go AI Innovation</strong> ("Company," "we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </div>

        <div className="prose-section">
          <h2>2. Company Information</h2>
          <p>
            Go AI Innovation DBA Agape Advisory Group LLC<br />
            8958 West State Road 84, 233<br />
            Davie, FL 33324<br />
            Email: <a href="mailto:mzavala@goaiinnovation.com" className="text-primary hover:underline">mzavala@goaiinnovation.com</a><br />
            Phone: (305) 360-6170
          </p>
        </div>

        <div className="prose-section">
          <h2>3. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <h3>Personal Information</h3>
          <ul>
            <li>Name, email address, phone number</li>
            <li>Company name and job title</li>
            <li>Information provided through contact forms and strategy session bookings</li>
            <li>Communication records when you contact us</li>
          </ul>
          <h3>Automatically Collected Information</h3>
          <ul>
            <li>IP address and browser type</li>
            <li>Device information and operating system</li>
            <li>Pages visited, time spent, and referring URLs</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </div>

        <div className="prose-section">
          <h2>4. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Respond to your inquiries and schedule consultations</li>
            <li>Send relevant communications about our services (with your consent)</li>
            <li>Analyze website usage to improve user experience</li>
            <li>Comply with legal obligations</li>
            <li>Protect against fraudulent or unauthorized activity</li>
          </ul>
        </div>

        <div className="prose-section">
          <h2>5. Information Sharing & Disclosure</h2>
          <p>We do not sell, rent, or trade your personal information. We may share your information with:</p>
          <ul>
            <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our website and delivering services (e.g., hosting, analytics, CRM platforms)</li>
            <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
          </ul>
        </div>

        <div className="prose-section">
          <h2>6. Cookies & Tracking Technologies</h2>
          <p>
            Our website uses cookies and similar technologies to enhance your browsing experience, analyze traffic, and personalize content. You can control cookie preferences through your browser settings. Disabling cookies may affect certain features of our website.
          </p>
        </div>

        <div className="prose-section">
          <h2>7. Third-Party Services</h2>
          <p>
            Our website may contain links to third-party websites or integrate third-party services (such as chat widgets, booking tools, and analytics). We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
          </p>
        </div>

        <div className="prose-section">
          <h2>8. Data Security</h2>
          <p>
            We implement reasonable administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </div>

        <div className="prose-section">
          <h2>9. Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
          </p>
        </div>

        <div className="prose-section">
          <h2>10. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access, correct, or delete your personal information</li>
            <li>Opt out of marketing communications</li>
            <li>Request a copy of the data we hold about you</li>
            <li>Withdraw consent where processing is based on consent</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at <a href="mailto:mzavala@goaiinnovation.com" className="text-primary hover:underline">mzavala@goaiinnovation.com</a>.
          </p>
        </div>

        <div className="prose-section">
          <h2>11. Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a minor, please contact us immediately.
          </p>
        </div>

        <div className="prose-section">
          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. Your continued use of our services after any changes constitutes acceptance of the revised policy.
          </p>
        </div>

        <div className="prose-section">
          <h2>13. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:<br />
            Email: <a href="mailto:mzavala@goaiinnovation.com" className="text-primary hover:underline">mzavala@goaiinnovation.com</a><br />
            Phone: (305) 360-6170<br />
            Address: 8958 West State Road 84, 233, Davie, FL 33324
          </p>
        </div>
      </div>
    </section>
  </>
);

export default PrivacyPolicy;
