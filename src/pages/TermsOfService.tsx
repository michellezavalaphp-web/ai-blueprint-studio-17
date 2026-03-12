import SectionHeading from "@/components/SectionHeading";
import { FileText } from "lucide-react";

const TermsOfService = () => (
  <>
    <section className="page-header">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <div className="badge-tag mb-4">
            <FileText className="h-3 w-3" />
            Legal
          </div>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Terms of Service
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
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using the website and services provided by <strong>Agape Advisory Group LLC DBA Go AI Innovation</strong> ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access our services.
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
          <h2>3. Services</h2>
          <p>
            Go AI Innovation provides AI strategy consulting, workflow automation, AI implementation and integration services, and related digital tools. Our services are designed for organizations seeking to implement intelligent systems to improve operational efficiency.
          </p>
        </div>

        <div className="prose-section">
          <h2>4. Use of Our Services</h2>
          <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul>
            <li>Use our services in any way that violates applicable laws or regulations</li>
            <li>Attempt to gain unauthorized access to any part of our services or systems</li>
            <li>Use our services to transmit harmful, offensive, or unlawful content</li>
            <li>Reproduce, duplicate, or exploit any portion of our services without express written permission</li>
          </ul>
        </div>

        <div className="prose-section">
          <h2>5. Intellectual Property</h2>
          <p>
            All content, features, and functionality on our website — including but not limited to the Time Reclaimed™ Framework, text, graphics, logos, and software — are the exclusive property of Go AI Innovation DBA Agape Advisory Group LLC and are protected by copyright, trademark, and other intellectual property laws.
          </p>
        </div>

        <div className="prose-section">
          <h2>6. Consultations & Strategy Sessions</h2>
          <p>
            Free AI Strategy Sessions are offered at the Company's discretion. Scheduling a session does not constitute a binding agreement for ongoing services. Any paid engagements will be governed by separate service agreements.
          </p>
        </div>

        <div className="prose-section">
          <h2>7. Disclaimer of Warranties</h2>
          <p>
            Our services are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, error-free, or that results from our consulting services will achieve specific outcomes.
          </p>
        </div>

        <div className="prose-section">
          <h2>8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Go AI Innovation DBA Agape Advisory Group LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities arising from your use of our services.
          </p>
        </div>

        <div className="prose-section">
          <h2>9. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Go AI Innovation DBA Agape Advisory Group LLC, its officers, directors, employees, and agents from any claims, liabilities, damages, or expenses arising from your use of our services or violation of these Terms.
          </p>
        </div>

        <div className="prose-section">
          <h2>10. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts located in Broward County, Florida.
          </p>
        </div>

        <div className="prose-section">
          <h2>11. Changes to These Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes acceptance of the new Terms.
          </p>
        </div>

        <div className="prose-section">
          <h2>12. Contact Us</h2>
          <p>
            If you have questions about these Terms, please contact us at:<br />
            Email: <a href="mailto:mzavala@goaiinnovation.com" className="text-primary hover:underline">mzavala@goaiinnovation.com</a><br />
            Phone: (305) 360-6170<br />
            Address: 8958 West State Road 84, 233, Davie, FL 33324
          </p>
        </div>
      </div>
    </section>
  </>
);

export default TermsOfService;
