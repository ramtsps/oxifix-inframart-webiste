import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-lg md:text-xl text-white/90">
              Last Updated: January 2025
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground mb-6">
                By accessing and using OXIFIX INFRAMART's services, you acknowledge that you have read, 
                understood, and agree to be bound by these Terms of Service. If you do not agree with 
                any part of these terms, please do not use our services.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                2. Services Description
              </h2>
              <p className="text-muted-foreground mb-6">
                OXIFIX INFRAMART provides premium construction materials, infrastructure solutions, and 
                building products. Our services include product sales, delivery, consultation, and 
                customer support for construction and infrastructure projects.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                3. User Obligations
              </h2>
              <p className="text-muted-foreground mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Provide accurate and complete information when placing orders</li>
                <li>Use our products and services in compliance with applicable laws and regulations</li>
                <li>Not misuse or attempt to gain unauthorized access to our systems</li>
                <li>Respect intellectual property rights of OXIFIX INFRAMART</li>
                <li>Maintain the confidentiality of your account credentials</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                4. Orders and Payments
              </h2>
              <p className="text-muted-foreground mb-6">
                All orders are subject to acceptance and availability. We reserve the right to refuse 
                or cancel orders at our discretion. Payment terms will be communicated at the time of 
                order confirmation. All prices are subject to change without notice.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                5. Product Information and Quality
              </h2>
              <p className="text-muted-foreground mb-6">
                We strive to provide accurate product descriptions and specifications. However, we do 
                not warrant that product descriptions or other content is accurate, complete, or 
                error-free. All products meet industry standards and come with applicable warranties.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                6. Delivery and Returns
              </h2>
              <p className="text-muted-foreground mb-6">
                Delivery times are estimates and not guaranteed. Risk of loss and title for products 
                pass to you upon delivery. Returns and refunds are subject to our return policy. 
                Damaged or defective products must be reported within the specified timeframe.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                7. Limitation of Liability
              </h2>
              <p className="text-muted-foreground mb-6">
                OXIFIX INFRAMART shall not be liable for any indirect, incidental, special, or 
                consequential damages arising out of or related to the use of our products or services. 
                Our total liability shall not exceed the amount paid by you for the specific product 
                or service.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                8. Intellectual Property
              </h2>
              <p className="text-muted-foreground mb-6">
                All content, trademarks, logos, and intellectual property on our website and materials 
                are owned by OXIFIX INFRAMART. You may not use, reproduce, or distribute any content 
                without our prior written permission.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                9. Modifications to Terms
              </h2>
              <p className="text-muted-foreground mb-6">
                We reserve the right to modify these Terms of Service at any time. Changes will be 
                effective immediately upon posting. Your continued use of our services constitutes 
                acceptance of the modified terms.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                10. Governing Law
              </h2>
              <p className="text-muted-foreground mb-6">
                These Terms of Service shall be governed by and construed in accordance with the laws 
                of India. Any disputes shall be subject to the exclusive jurisdiction of the courts 
                in our registered location.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                11. Contact Information
              </h2>
              <p className="text-muted-foreground mb-6">
                For questions or concerns regarding these Terms of Service, please contact us at:
              </p>
              <div className="bg-muted p-6 rounded-lg mb-8">
                <p className="text-foreground font-semibold mb-2">OXIFIX INFRAMART</p>
                <p className="text-muted-foreground mb-1">Email: info@oxifixinframart.com</p>
                <p className="text-muted-foreground mb-1">Phone: +91 XXX XXX XXXX</p>
                <p className="text-muted-foreground">Address: [Your Business Address]</p>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
