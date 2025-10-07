import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
          
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">            <h1 className="text-3xl md:text-5xl font-bold mb-4">Privacy Policy</h1>

            <div className="prose prose-lg max-w-none">
              
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                1. Introduction
              </h2>
              <p className="text-muted-foreground mb-6">
                OXIFIX INFRAMART ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you visit our website or use our services.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                2. Information We Collect
              </h2>
              <p className="text-muted-foreground mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Business information (company name, address, tax identification)</li>
                <li>Order and transaction information</li>
                <li>Communication preferences and feedback</li>
                <li>Technical information (IP address, browser type, device information)</li>
                <li>Usage data and analytics</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                3. How We Use Your Information
              </h2>
              <p className="text-muted-foreground mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Process and fulfill your orders and requests</li>
                <li>Communicate with you about products, services, and promotions</li>
                <li>Improve our website, products, and services</li>
                <li>Analyze usage patterns and optimize user experience</li>
                <li>Comply with legal obligations and prevent fraud</li>
                <li>Send administrative information and updates</li>
                <li>Respond to customer service inquiries</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-muted-foreground mb-6">
                We do not sell or rent your personal information to third parties. We may share your 
                information with:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Service providers who assist in our operations (payment processors, delivery services)</li>
                <li>Business partners for collaborative purposes</li>
                <li>Legal authorities when required by law or to protect our rights</li>
                <li>Third parties in connection with a merger, acquisition, or sale of assets</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                5. Data Security
              </h2>
              <p className="text-muted-foreground mb-6">
                We implement appropriate technical and organizational security measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction. 
                However, no method of transmission over the internet is 100% secure, and we cannot 
                guarantee absolute security.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                6. Cookies and Tracking Technologies
              </h2>
              <p className="text-muted-foreground mb-6">
                We use cookies and similar tracking technologies to enhance your experience on our 
                website. Cookies help us understand user behavior, remember preferences, and provide 
                personalized content. You can control cookie settings through your browser preferences.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                7. Your Privacy Rights
              </h2>
              <p className="text-muted-foreground mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Access and review your personal data</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal data</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                8. Data Retention
              </h2>
              <p className="text-muted-foreground mb-6">
                We retain your personal information for as long as necessary to fulfill the purposes 
                outlined in this Privacy Policy, unless a longer retention period is required or 
                permitted by law. When data is no longer needed, we will securely delete or anonymize it.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                9. Third-Party Links
              </h2>
              <p className="text-muted-foreground mb-6">
                Our website may contain links to third-party websites. We are not responsible for the 
                privacy practices of these external sites. We encourage you to review the privacy 
                policies of any third-party sites you visit.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                10. Children's Privacy
              </h2>
              <p className="text-muted-foreground mb-6">
                Our services are not directed to individuals under the age of 18. We do not knowingly 
                collect personal information from children. If you become aware that a child has 
                provided us with personal information, please contact us.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                11. Changes to Privacy Policy
              </h2>
              <p className="text-muted-foreground mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last Updated" date. 
                We encourage you to review this Privacy Policy periodically.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                12. Contact Us
              </h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our 
                data practices, please contact us at:
              </p>
              <div className="bg-muted p-6 rounded-lg mb-8">
                <p className="text-foreground font-semibold mb-2">OXIFIX INFRAMART</p>
                <p className="text-muted-foreground mb-1">Email: info@oxifixinframart.com</p>
                <p className="text-muted-foreground mb-1">Phone: +91 XXX XXX XXXX</p>
                <p className="text-muted-foreground">Address: [Your Business Address]</p>
              </div>

              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mt-8">
                <p className="text-foreground font-semibold mb-2">Your Privacy Matters</p>
                <p className="text-muted-foreground">
                  At OXIFIX INFRAMART, we are committed to transparency and protecting your personal 
                  information. If you have any questions about how we handle your data, please don't 
                  hesitate to reach out to us.
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
