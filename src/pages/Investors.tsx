import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Award, ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Investors = () => {
  const teamMembers = [
    {
      name: "Mr. Rajesh Kumar",
      position: "Founder & CEO",
      image: "/placeholder.svg"
    },
    {
      name: "Mr. Rajesh Kumar",
      position: "Founder & CEO", 
      image: "/placeholder.svg"
    },
    {
      name: "Mr. Rajesh Kumar",
      position: "Founder & CEO",
      image: "/placeholder.svg"
    }
  ];

  const benefits = [
    "Innovation Eco Power Technologies",
    "Regularly Maintaining And Organizing Your Tools",
    "Regularly Organizing And Maintaining Your Tools"
  ];

  const faqs = [
    {
      question: "Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam?",
      answer: "Sed Aliquet Mi Orci, Porta Condimentum Nulla Accumsan Eget. Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam A Lorem Sollicitudin. Pellentesque Habitant Morbi Tristique Senectus Et Netus Et Malesuada Fames Ac Turpis Egestas. Sed Gravida Ac Turpis Sed Maximus."
    },
    {
      question: "Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam?",
      answer: "Sed Aliquet Mi Orci, Porta Condimentum Nulla Accumsan Eget. Curabitur Vulputate Erat Tellus."
    },
    {
      question: "Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam?",
      answer: "Sed Aliquet Mi Orci, Porta Condimentum Nulla Accumsan Eget. Curabitur Vulputate Erat Tellus."
    },
    {
      question: "Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam?",
      answer: "Sed Aliquet Mi Orci, Porta Condimentum Nulla Accumsan Eget. Curabitur Vulputate Erat Tellus."
    },
    {
      question: "Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam?",
      answer: "Sed Aliquet Mi Orci, Porta Condimentum Nulla Accumsan Eget. Curabitur Vulputate Erat Tellus."
    }
  ];

  const brands = [
    { name: "WUTAMALAND", logo: "/placeholder.svg" },
    { name: "GORMLEY CONSTRUCTION", logo: "/placeholder.svg" },
    { name: "CONSTRUCTION", logo: "/placeholder.svg" },
    { name: "BRAND 4", logo: "/placeholder.svg" },
    { name: "BRAND 5", logo: "/placeholder.svg" },
    { name: "BRAND 6", logo: "/placeholder.svg" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-7xl md:text-8xl font-bold text-foreground mb-6 leading-tight">
            Investors
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We Sell Best in class Construction Materials at affordable price 
            with a wide range of collections.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
              <div className="w-8 h-px bg-primary" />
              OUR CORE TEAM
              <div className="w-8 h-px bg-primary" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground">
              Meet Our Leadership
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="relative bg-card rounded-3xl p-8 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                  <div className="aspect-square bg-muted rounded-2xl mb-6 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {member.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Business Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-6">
                <div className="w-8 h-px bg-primary" />
                JOIN US
                <div className="w-8 h-px bg-primary" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Join Fastest Growing Supply Chain Business
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Proin Porttitor Pharetra Interdum. Donec Erat Nibh, Cursus 
                Non Interdum Ac, Fermentum.
              </p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-muted/50 rounded-2xl p-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex-shrink-0" />
                  <div>
                    <p className="text-foreground mb-4">
                      We Have Multiple Models Of Engagement: We Can Work 
                      Directly With Individuals For Private Residences, Partner.
                    </p>
                    <div>
                      <h4 className="font-bold text-foreground">John Smith</h4>
                      <p className="text-muted-foreground text-sm">CEO & Founder</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="heroPrimary" size="lg" className="gap-2">
                  CONTACT US
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <Award className="w-8 h-8 text-yellow-500" />
                  <div>
                    <p className="font-bold text-foreground">We're A Global Award</p>
                    <p className="font-bold text-foreground">Wining Company</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
                  <img src="/placeholder.svg" alt="Tools" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
                  <img src="/placeholder.svg" alt="Store" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
                  <img src="/placeholder.svg" alt="Kitchen" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
                  <img src="/placeholder.svg" alt="Showroom" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden Gem Section */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-card rounded-3xl p-12 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-end justify-center p-8">
                  {/* 3D Chart representation */}
                  <div className="flex items-end gap-2">
                    <div className="w-12 h-16 bg-blue-300 rounded-t-lg"></div>
                    <div className="w-12 h-24 bg-green-400 rounded-t-lg"></div>
                    <div className="w-12 h-32 bg-yellow-400 rounded-t-lg"></div>
                    <div className="w-12 h-48 bg-pink-400 rounded-t-lg"></div>
                    <div className="w-12 h-64 bg-purple-500 rounded-t-lg"></div>
                  </div>
                </div>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-6">
                  <div className="w-8 h-px bg-primary" />
                  WHY INFRAMART
                  <div className="w-8 h-px bg-primary" />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                  Infra Is A Hidden Gem.
                </h2>
                
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
                  <p>
                    Not many people know that size of the Infra Structure industry 
                    is bigger than the size of popular industries like the beauty & 
                    wellness industry, the fast food industry, and the diagnostic 
                    labs industry.
                  </p>
                  
                  <p>
                    You will be surprised to know that 96% of the Infra Structure 
                    industry is unorganised.
                  </p>
                  
                  <p>
                    But now with huge investments coming into the industry, it is 
                    now expected to explode just like food delivery (Swiggy, 
                    Zomato), UPI payments (PayTM, Phonepe), and online cabs 
                    (Ola, Uber).
                  </p>
                </div>

                <Button variant="heroPrimary" size="lg" className="gap-2">
                  CONTACT US
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-6">
                <div className="w-8 h-px bg-primary" />
                WHO WE ARE
                <div className="w-8 h-px bg-primary" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
                Customers Ask Us
              </h2>

              <div className="w-full h-96 bg-muted rounded-2xl overflow-hidden">
                <img src="/placeholder.svg" alt="Construction Site" className="w-full h-full object-cover" />
              </div>
            </div>

            <div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-border rounded-2xl px-6 bg-card"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="font-medium text-foreground pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">
            Brands We Deal With
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
            {brands.map((brand, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-6 bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-sm font-medium text-foreground text-center">{brand.name}</span>
              </div>
            ))}
          </div>

          {/* Scrolling Banner */}
          <div className="relative overflow-hidden bg-primary rounded-2xl py-6">
            <div className="flex animate-marquee whitespace-nowrap">
              <span className="text-2xl font-bold text-primary-foreground mx-8">HIGH-QUALITY PRODUCTS</span>
              <span className="text-2xl font-bold text-primary-foreground mx-8">★</span>
              <span className="text-2xl font-bold text-primary-foreground mx-8">ONTIME DELIVERY</span>
              <span className="text-2xl font-bold text-primary-foreground mx-8">★</span>
              <span className="text-2xl font-bold text-primary-foreground mx-8">AFTER SALE SUPPORT</span>
              <span className="text-2xl font-bold text-primary-foreground mx-8">★</span>
              <span className="text-2xl font-bold text-primary-foreground mx-8">INSTALLATION</span>
              <span className="text-2xl font-bold text-primary-foreground mx-8">★</span>
              <span className="text-2xl font-bold text-primary-foreground mx-8">HIGH-QUALITY PRODUCTS</span>
              <span className="text-2xl font-bold text-primary-foreground mx-8">★</span>
              <span className="text-2xl font-bold text-primary-foreground mx-8">ONTIME DELIVERY</span>
              <span className="text-2xl font-bold text-primary-foreground mx-8">★</span>
              <span className="text-2xl font-bold text-primary-foreground mx-8">AFTER SALE SUPPORT</span>
              <span className="text-2xl font-bold text-primary-foreground mx-8">★</span>
              <span className="text-2xl font-bold text-primary-foreground mx-8">INSTALLATION</span>
              <span className="text-2xl font-bold text-primary-foreground mx-8">★</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Investors;