import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import constructionImage from "@/assets/construction-site.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${constructionImage})`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed animate-fade-in">
            We Sell Best in class Construction Materials at affordable price with a wide range of collections.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 lg:py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">
                  LET'S CONNECT
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  We Are Here To<br />
                  Hear From You
                </h2>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="First Name"
                      className="h-12 bg-muted border-border"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Last Name"
                      className="h-12 bg-muted border-border"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="h-12 bg-muted border-border"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      className="h-12 bg-muted border-border"
                    />
                  </div>
                </div>

                <div>
                  <Textarea
                    placeholder="Message"
                    rows={6}
                    className="bg-muted border-border resize-none"
                  />
                </div>

                <Button variant="heroPrimary" size="lg" className="gap-2">
                  SEND NOW
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                Contact<br />
                Info
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">
                      1/120, Mookkareddipptty, Pallipatti,
                    </p>
                    <p className="text-muted-foreground">
                      Tamil Nadu 636905
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">
                      +91 99435 43040
                    </p>
                    <p className="text-muted-foreground">
                      +91 99435 43042
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">
                      info@oxifixinframart.com
                    </p>
                    <p className="text-muted-foreground">
                      investor@oxifixinframart.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-muted rounded-2xl p-4 h-96 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
              <p className="text-lg font-medium">Interactive Map</p>
              <p className="text-sm">Location: Oxifix Infra Mart, Tamil Nadu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="py-8 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-primary-foreground">
            <div className="flex items-center gap-2">
              <span className="text-2xl">★</span>
              <span className="font-semibold">HIGH-QUALITY PRODUCTS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">★</span>
              <span className="font-semibold">ONTIME DELIVERY</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">★</span>
              <span className="font-semibold">AFTER SALE SUPPORT</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">★</span>
              <span className="font-semibold">INSTALLATION</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 lg:py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
            Brands We Deal With
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 h-24 flex items-center justify-center shadow-sm border"
              >
                <div className="w-16 h-16 bg-muted rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;