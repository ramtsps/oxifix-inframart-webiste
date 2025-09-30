import { Building2, Package } from "lucide-react";
import showroom1 from "@/assets/showroom-1.jpg";
import showroom2 from "@/assets/showroom-2.jpg";
import appliances from "@/assets/appliances.jpg";
import construction from "@/assets/construction.jpg";

const WhoWeAre = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Images */}
          <div className="relative">
            <div className="flex flex-col gap-6">
              <div className="flex gap-6">
                <div className="w-1/2 aspect-square rounded-3xl overflow-hidden animate-fade-in">
                  <img 
                    src={showroom1} 
                    alt="Construction materials showroom" 
                    className="w-full h-full object-cover hover-scale"
                  />
                </div>
                <div className="w-1/2 aspect-square rounded-3xl overflow-hidden animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <img 
                    src={showroom2} 
                    alt="Hardware and plumbing section" 
                    className="w-full h-full object-cover hover-scale"
                  />
                </div>
              </div>
              
              <div className="rounded-3xl overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <img 
                  src={appliances} 
                  alt="Premium appliances display" 
                  className="w-full h-auto object-cover hover-scale"
                />
              </div>
              
              <div className="rounded-3xl overflow-hidden animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <img 
                  src={construction} 
                  alt="Construction materials" 
                  className="w-full h-auto object-cover hover-scale"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-semibold tracking-wider text-sm flex items-center gap-2">
                <span className="w-12 h-0.5 bg-primary"></span>
                WHO WE ARE
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                The Largest Showroom For All{" "}
                <span className="bg-primary text-primary-foreground px-4 py-1 inline-block">
                  Construction Needs
                </span>{" "}
                In Salem, Tamil Nadu
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">We Are The Change!</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Proin Porttitor Pharetra Interdum. Donec Erat Nibh, Cursus Non Interdum Ac, Fermentum Eget Nisi. Donec Non Nisi Ut Dolor Sagittis Convallis Eget Ut Ante.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Curabitur Ultricies Dolor Nec Velit Sagittis, At Eleifend Felis Aliquet. Pellentesque Vulputate Viverra Risus, A Viverra Magna Bibendum Eu.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="bg-destructive text-destructive-foreground p-8 rounded-3xl hover-scale">
                  <Building2 className="w-12 h-12 mb-4" />
                  <div className="text-5xl font-bold mb-2">25+</div>
                  <div className="text-lg">Global Brands</div>
                </div>
                
                <div className="bg-foreground text-background p-8 rounded-3xl hover-scale">
                  <Package className="w-12 h-12 mb-4" />
                  <div className="text-5xl font-bold mb-2 text-primary">1300+</div>
                  <div className="text-lg">Products</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
