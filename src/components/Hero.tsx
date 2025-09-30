import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center justify-center mb-8 animate-fade-in">
          <span className="bg-primary/20 backdrop-blur-sm text-primary-foreground px-6 py-2 rounded-full text-sm font-medium border border-primary/30">
            Unleash your Creative Potential
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in leading-tight">
          All Your{" "}
          <span className="[-webkit-text-stroke:2px_hsl(var(--primary))]" style={{
            WebkitTextStroke: '2px hsl(var(--primary))',
            paintOrder: 'stroke fill',
            color: 'transparent'
          }}>
            Construction
          </span>{" "}
          Needs
          <br />
          Under One Roof
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-4xl mx-auto animate-fade-in">
          We Sell Best in class Construction Materials at affordable price
          <br />
          with a wide range of collections.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in">
          <Button variant="hero" size="xl" className="gap-3 hover-scale">
            VISIT OUR STORE
            <div className="bg-primary rounded-full p-2">
              <ArrowRight className="w-5 h-5 text-primary-foreground" />
            </div>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
