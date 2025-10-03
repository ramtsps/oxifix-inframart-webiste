// Hero.tsx
// Hero.tsx
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useAOS } from "@/hooks/useAOS";

const Hero = () => {
  useAOS(); // Initialize AOS

  return (
    <section className="relative flex items-center justify-center overflow-hidden py-20 sm:min-h-[100vh] md:min-h-[90vh] lg:min-h-screen">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // Optional: for parallax effect
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center w-full">
        {/* Badge */}
        <div
          className="inline-flex items-center justify-center mb-6 md:mb-8 mt-20"
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-duration="600"
        >
          <span className="bg-primary backdrop-blur-sm text-primary-foreground px-4 py-2 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-medium">
            Unleash your Creative Potential
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 md:mb-6 leading-tight md:leading-tight"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          All Your{" "}
          <span
            className="[-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:2px_white]"
            style={{
              WebkitTextStroke: "1px white",
              paintOrder: "stroke fill",
              color: "transparent",
            }}
          >
            Construction{" "}
          </span>
          Needs
          <br className="hidden sm:block" />
          Under One Roof
        </h1>

        {/* Subtitle */}
        <p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-10 max-w-2xl md:max-w-4xl mx-auto px-4"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="700"
        >
          We Sell Best in class Construction Materials at affordable price
          <br className="hidden sm:block" />
          with a wide range of collections.
        </p>

        {/* CTA Button - Centered */}
        <div
          className="flex justify-center px-4"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="600"
        >
          <button className="flex items-center rounded-full bg-white text-black font-medium px-4 py-3 sm:px-6 sm:py-3 text-sm sm:text-base relative transition-transform duration-300 hover:scale-105 active:scale-95">
            <span className="pr-2 sm:pr-3">VISIT OUR STORE</span>
            <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary -mr-1">
              <ArrowRight className="w-4 h-4 text-white" />
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator - Optional */}
    </section>
  );
};

export default Hero;
