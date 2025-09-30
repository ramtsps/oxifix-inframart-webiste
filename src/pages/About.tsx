import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Check, Award, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import storeFront from "@/assets/store-front.jpg";
import showroom1 from "@/assets/showroom-1.jpg";
import showroom2 from "@/assets/showroom-2.jpg";
import appliances from "@/assets/appliances.jpg";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const testimonials = [
  {
    name: "Ravi Krishnan", 
    role: "CEO, R&J Constructions",
    quote: "Sed Aliquet Mi Orci, Porta Condimentum Nulla Accumsan Eget. Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam A Lorem Sollicitudin.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
];

const stats = [
  { number: "32", label: "Categories" },
  { number: "1.2m", label: "Sq.Ft Of Showroom" },
  { number: "12", label: "Locations" },
  { number: "100", label: "Success Stories" },
];

const services = [
  {
    number: "01",
    title: "Building Construction",
    description: "Our solutions are designed to meet the needs of modern enterprises, ensuring they thrive in today's competitive online landscape. Enterprises, ensuring they thrive in today's competitive online landscape.",
  },
  {
    number: "02", 
    title: "Building Construction",
    description: "Our solutions are designed to meet the needs of modern enterprises, ensuring they thrive in today's competitive online landscape. Enterprises, ensuring they thrive in today's competitive online landscape.",
  },
  {
    number: "03",
    title: "Building Construction", 
    description: "Our solutions are designed to meet the needs of modern enterprises, ensuring they thrive in today's competitive online landscape. Enterprises, ensuring they thrive in today's competitive online landscape.",
  },
];

const teamMembers = [
  {
    name: "Mr. Rajesh Kumar",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Mr. Rajesh Kumar", 
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Mr. Rajesh Kumar",
    role: "Founder & CEO", 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
];

const faqs = [
  {
    question: "Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam?",
    answer: "Sed Aliquet Mi Orci, Porta Condimentum Nulla Accumsan Eget. Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam A Lorem Sollicitudin. Pellentesque Habitant Morbi Tristique Senectus Et Netus Et Malesuada Fames Ac Turpis Egestas. Sed Gravida Ac Turpis Sed Maximus.",
  },
  {
    question: "Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam?",
    answer: "Sed Aliquet Mi Orci, Porta Condimentum Nulla Accumsan Eget. Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam A Lorem Sollicitudin.",
  },
  {
    question: "Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam?",
    answer: "Sed Aliquet Mi Orci, Porta Condimentum Nulla Accumsan Eget. Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam A Lorem Sollicitudin.",
  },
  {
    question: "Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam?", 
    answer: "Sed Aliquet Mi Orci, Porta Condimentum Nulla Accumsan Eget. Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam A Lorem Sollicitudin.",
  },
  {
    question: "Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam?",
    answer: "Sed Aliquet Mi Orci, Porta Condimentum Nulla Accumsan Eget. Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam A Lorem Sollicitudin.",
  },
];

const brandLogos = [
  "https://via.placeholder.com/120x60/e5e7eb/9ca3af?text=WUTAMA+LAND",
  "https://via.placeholder.com/120x60/e5e7eb/9ca3af?text=BRAND+2", 
  "https://via.placeholder.com/120x60/e5e7eb/9ca3af?text=BRAND+3",
  "https://via.placeholder.com/120x60/e5e7eb/9ca3af?text=BRAND+4",
  "https://via.placeholder.com/120x60/e5e7eb/9ca3af?text=GORMLEY+CONSTRUCTION",
  "https://via.placeholder.com/120x60/e5e7eb/9ca3af?text=BRAND+6",
];

const About = () => {
  const [openFAQs, setOpenFAQs] = useState<number[]>([0]);

  const toggleFAQ = (index: number) => {
    setOpenFAQs(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${storeFront})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in">About Us</h1>
          <p className="text-xl md:text-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We Sell Best in class Construction Materials at affordable price<br />
            with a wide range of collections.
          </p>
        </div>
      </section>

      {/* WHO WE ARE Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-primary font-semibold tracking-wider text-sm flex items-center gap-2">
                  <span className="w-12 h-0.5 bg-primary"></span>
                  WHO WE ARE
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Leading Global{" "}
                  <span className="block">Builder And Developer</span>
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Proin Porttitor Pharetra Interdum. Donec Erat Nibh, Cursus Non Interdum Ac, Fermentum.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-lg font-medium">Innovation Eco Power Technologies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-lg font-medium">Regularly Maintaining And Organizing Your Tools</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-lg font-medium">Regularly Organizing And Maintaining Your Tools</span>
                  </div>
                </div>

                <div className="bg-muted p-6 rounded-2xl">
                  <p className="text-foreground leading-relaxed mb-4">
                    We Have Multiple Models Of Engagement: We Can Work Directly With Individuals For Private Residences, Partner.
                  </p>
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop" 
                      alt="John Smith" 
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-semibold">John Smith</p>
                      <p className="text-sm text-muted-foreground">CEO & Founder</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-primary/10 p-6 rounded-2xl">
                  <div className="bg-primary p-3 rounded-full">
                    <Award className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">We're A Global Award</h4>
                    <p className="text-muted-foreground">Wining Company</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src={showroom1} 
                    alt="Tools and hardware display" 
                    className="w-full h-64 object-cover rounded-3xl hover-scale"
                  />
                  <img 
                    src={appliances} 
                    alt="Store interior" 
                    className="w-full h-48 object-cover rounded-3xl hover-scale"
                  />
                </div>
                <div className="pt-8">
                  <img 
                    src={showroom2} 
                    alt="Hardware showroom" 
                    className="w-full h-80 object-cover rounded-3xl hover-scale"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials and Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          {/* Testimonial */}
          <div className="max-w-4xl mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-16 h-16 rounded-full border-4 border-background overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-${1500000000000 + i * 10000000}?w=150&h=150&fit=crop`}
                      alt={`Customer ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Trusted By</p>
                <p className="font-semibold">Leading Infra Companies.</p>
              </div>
            </div>

            <div className="relative">
              <Quote className="w-12 h-12 text-primary mb-4" />
              <blockquote className="text-3xl md:text-4xl font-bold leading-relaxed mb-8">
                {testimonials[0].quote}
              </blockquote>
              <div>
                <p className="font-bold text-xl">{testimonials[0].name}</p>
                <p className="text-muted-foreground">{testimonials[0].role}</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="bg-background p-8 rounded-2xl hover-scale animate-fade-in relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 left-8 w-0.5 h-16 bg-foreground -translate-y-16">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-foreground rounded-full" />
                </div>
                <div className="text-5xl font-bold mb-2">
                  {stat.number}
                  <span className="text-primary">+</span>
                </div>
                <div className="text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold tracking-wider text-sm mb-4">
              ···················· OUR BLOG & NEWS ··················
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              What We Build For Customers
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-3xl border hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl font-bold text-primary mb-6 leading-none">
                  {service.number}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <Button variant="ghost" className="text-primary hover:text-primary p-0 h-auto font-semibold">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Leadership Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold tracking-wider text-sm mb-4">
              ···················· OUR CORE TEAM ··················
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Meet Our Leadership
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <div className="border-4 border-primary rounded-3xl p-2 mb-4">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover rounded-2xl"
                    />
                  </div>
                  <div className="bg-background border-2 border-primary rounded-2xl p-6 -mt-12 relative z-10 mx-4">
                    <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 3D Construction Model */}
            <div className="order-2 lg:order-1">
              <div className="bg-muted/30 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏗️</div>
                  <p className="text-muted-foreground">3D Construction Site Model</p>
                </div>
              </div>
            </div>

            {/* FAQ Content */}
            <div className="order-1 lg:order-2">
              <p className="text-primary font-semibold tracking-wider text-sm flex items-center gap-2 mb-4">
                <span className="w-12 h-0.5 bg-primary"></span>
                WHO WE ARE
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Customers Ask Us</h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Collapsible
                    key={index}
                    open={openFAQs.includes(index)}
                    onOpenChange={() => toggleFAQ(index)}
                  >
                    <div className="border-b border-border pb-4">
                      <CollapsibleTrigger className="flex items-center justify-between w-full text-left group">
                        <span className="font-semibold text-lg pr-4">{faq.question}</span>
                        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                          openFAQs.includes(index) 
                            ? 'bg-foreground text-background' 
                            : 'bg-primary text-primary-foreground'
                        }`}>
                          <ArrowRight className={`w-5 h-5 transition-transform ${
                            openFAQs.includes(index) ? 'rotate-90' : ''
                          }`} />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pt-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </CollapsibleContent>
                    </div>
                  </Collapsible>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands We Deal With Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
            Brands We Deal With
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {brandLogos.map((logo, index) => (
              <div 
                key={index}
                className="bg-background p-6 rounded-2xl hover-scale animate-fade-in flex items-center justify-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={logo}
                  alt={`Brand ${index + 1}`}
                  className="max-w-full h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Banner */}
      <section className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <span className="text-primary text-xl">⭐</span>
              <span className="font-bold text-lg">HIGH-QUALITY PRODUCTS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary text-xl">⭐</span>
              <span className="font-bold text-lg">ONTIME DELIVERY</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary text-xl">⭐</span>
              <span className="font-bold text-lg">AFTER SALE SUPPORT</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary text-xl">⭐</span>
              <span className="font-bold text-lg">INSTALLATION</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;