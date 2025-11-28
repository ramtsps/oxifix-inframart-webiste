import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80  pt-36 md:pt-36">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Protecting your data and privacy is our commitment
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">



              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                1. Introduction
              </h2>
              <p className="text-muted-foreground mb-6">
                OXIFIX  INFRAMART ("we," "our," or "us") is committed to protecting your privacy and ensuring the security
                of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website, use our services, or interact with us as a customer or partner
                in the construction materials industry.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                2. Information We Collect
              </h2>
              <p className="text-muted-foreground mb-4">
                We collect various types of information to provide and improve our services:
              </p>

              <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Personal Information</h3>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Contact details (name, email address, phone number, business address)</li>
                <li>Business information (company name, GST number, tax identification)</li>
                <li>Professional details (job title, industry, project requirements)</li>
                <li>Account credentials and preferences</li>
              </ul>

              <h3 className="text-xl font-bold text-foreground mb-3">Transaction Information</h3>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Order history and purchase details</li>
                <li>Payment information (processed securely through payment gateways)</li>
                <li>Delivery addresses and shipping preferences</li>
                <li>Contract and agreement details</li>
              </ul>

              <h3 className="text-xl font-bold text-foreground mb-3">Technical Information</h3>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>IP address, browser type, and device information</li>
                <li>Website usage data and analytics</li>
                <li>Cookies and tracking technologies data</li>
                <li>Server logs and error reports</li>
              </ul>

              <h3 className="text-xl font-bold text-foreground mb-3">Communication Data</h3>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Customer service inquiries and support tickets</li>
                <li>Email correspondence and chat transcripts</li>
                <li>Feedback, reviews, and survey responses</li>
                <li>Marketing communication preferences</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                3. How We Use Your Information
              </h2>
              <p className="text-muted-foreground mb-4">
                We use the collected information for legitimate business purposes:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Process and fulfill your construction material orders and requests</li>
                <li>Provide technical support and product information</li>
                <li>Manage your account and maintain business relationships</li>
                <li>Send order confirmations, invoices, and delivery updates</li>
                <li>Communicate about products, services, and industry insights</li>
                <li>Improve our website, products, and customer experience</li>
                <li>Conduct market research and analyze business trends</li>
                <li>Comply with legal obligations and industry regulations</li>
                <li>Prevent fraud, enhance security, and protect our rights</li>
                <li>Send promotional materials and business updates (with consent)</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                4. Legal Basis for Processing
              </h2>
              <p className="text-muted-foreground mb-4">
                We process your personal information based on the following legal grounds:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li><strong>Contractual Necessity:</strong> To fulfill our agreements and provide services</li>
                <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
                <li><strong>Legitimate Interests:</strong> To operate and improve our business</li>
                <li><strong>Consent:</strong> For marketing communications and specific purposes where required</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                5. Information Sharing and Disclosure
              </h2>
              <p className="text-muted-foreground mb-6">
                We respect your privacy and do not sell your personal information to third parties.
                We may share your information in the following circumstances:
              </p>

              <h3 className="text-xl font-bold text-foreground mb-3">Service Providers</h3>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Payment processors and financial institutions</li>
                <li>Delivery and logistics partners</li>
                <li>IT service providers and cloud hosting services</li>
                <li>Marketing and analytics platforms</li>
                <li>Customer support tools</li>
              </ul>

              <h3 className="text-xl font-bold text-foreground mb-3">Business Partners</h3>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Manufacturers and suppliers for order fulfillment</li>
                <li>Industry partners for collaborative projects</li>
                <li>Authorized distributors and representatives</li>
              </ul>

              <h3 className="text-xl font-bold text-foreground mb-3">Legal Requirements</h3>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>When required by law, regulation, or legal process</li>
                <li>To protect our rights, property, or safety</li>
                <li>To prevent fraud or security issues</li>
                <li>In connection with business transfers or mergers</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                6. Data Security Measures
              </h2>
              <p className="text-muted-foreground mb-4">
                We implement comprehensive security measures to protect your information:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Encryption of sensitive data during transmission and storage</li>
                <li>Secure servers and network infrastructure</li>
                <li>Regular security assessments and vulnerability testing</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection and privacy</li>
                <li>Physical security measures at our facilities</li>
                <li>Incident response and breach notification procedures</li>
              </ul>
              <p className="text-muted-foreground mb-6">
                While we implement robust security measures, no method of transmission over the internet
                or electronic storage is 100% secure. We continuously work to enhance our security practices.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                7. Data Retention
              </h2>
              <p className="text-muted-foreground mb-6">
                We retain your personal information only for as long as necessary to fulfill the purposes
                outlined in this Privacy Policy, unless a longer retention period is required or permitted
                by law. Our retention periods are based on:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Ongoing business relationships and contractual obligations</li>
                <li>Legal and regulatory requirements for record-keeping</li>
                <li>Statutory limitation periods for legal claims</li>
                <li>Business needs for analysis and improvement</li>
              </ul>
              <p className="text-muted-foreground mb-6">
                When data is no longer needed, we securely delete or anonymize it using industry-standard methods.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                8. Your Privacy Rights
              </h2>
              <p className="text-muted-foreground mb-4">
                Depending on your location and applicable laws, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li><strong>Access:</strong> Request copies of your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Restriction:</strong> Request limitation of processing your data</li>
                <li><strong>Portability:</strong> Request transfer of your data to another organization</li>
                <li><strong>Objection:</strong> Object to processing of your personal data</li>
                <li><strong>Withdraw Consent:</strong> Withdraw previously given consent</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              </ul>
              <p className="text-muted-foreground mb-6">
                To exercise any of these rights, please contact us using the information provided below.
                We will respond to your request within 30 days.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                9. Cookies and Tracking Technologies
              </h2>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar technologies to enhance your experience:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand user behavior</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and choices</li>
                <li><strong>Marketing Cookies:</strong> Deliver relevant advertisements</li>
              </ul>
              <p className="text-muted-foreground mb-6">
                You can control cookie settings through your browser preferences. However, disabling
                essential cookies may affect website functionality.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                10. International Data Transfers
              </h2>
              <p className="text-muted-foreground mb-6">
                As a construction materials business operating primarily in India, we process and store
                your data within India. In cases where data may be transferred internationally, we ensure
                appropriate safeguards are in place to protect your information in accordance with
                applicable data protection laws.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                11. Third-Party Links
              </h2>
              <p className="text-muted-foreground mb-6">
                Our website may contain links to third-party websites, including manufacturers, industry
                partners, and service providers. We are not responsible for the privacy practices or
                content of these external sites. We encourage you to review the privacy policies of any
                third-party sites you visit.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                12. Children's Privacy
              </h2>
              <p className="text-muted-foreground mb-6">
                Our services are intended for business professionals and are not directed to individuals
                under the age of 18. We do not knowingly collect personal information from children.
                If you become aware that a child has provided us with personal information, please
                contact us immediately.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                13. Changes to This Privacy Policy
              </h2>
              <p className="text-muted-foreground mb-6">
                We may update this Privacy Policy from time to time to reflect changes in our practices,
                services, or legal requirements. We will notify you of any material changes by:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Posting the updated Privacy Policy on our website</li>
                <li>Updating the "Last Updated" date at the top of this policy</li>
                <li>Sending notifications for significant changes (where appropriate)</li>
              </ul>
              <p className="text-muted-foreground mb-6">
                We encourage you to review this Privacy Policy periodically to stay informed about how
                we are protecting your information.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                14. Contact Information
              </h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our
                data practices, please contact our Data Protection Officer at:
              </p>
              <div className="bg-muted p-6 rounded-lg mb-8">
                <p className="text-foreground font-semibold mb-2">OXIFIX INFRAMART</p>
                <p className="text-muted-foreground mb-1">
                  Email: <a href="mailto:sales@oxifixinframart.com" className="underline hover:text-primary transition-colors duration-200">sales@oxifixinframart.com</a>
                </p>
                <p className="text-muted-foreground mb-1">
                  Customer Support: <a href="mailto:customer@oxifixinframart.com" className="underline hover:text-primary transition-colors duration-200">customer@oxifixinframart.com</a>
                </p>
                <p className="text-muted-foreground mb-1">
                  Phone: <a href="tel:+919443900246" className="underline hover:text-primary transition-colors duration-200">+91 94439 00246</a> | <a href="tel:+918428002244" className="underline hover:text-primary transition-colors duration-200">+91 84280 02244</a>
                </p>
              </div>

              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mt-8">
                <p className="text-foreground font-semibold mb-2">Your Privacy Matters to Us</p>
                <p className="text-muted-foreground">
                  At OXIFIX  INFRAMART, we are committed to transparency and protecting your personal
                  information. We value the trust you place in us as your construction materials partner
                  and are dedicated to maintaining the highest standards of data protection and privacy.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;