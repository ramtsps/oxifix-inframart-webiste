import React from "react";

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  minHeight?: string;
  overlayOpacity?: number;
  animate?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  title,
  subtitle,
  minHeight = "min-h-screen",
  overlayOpacity = 0.6,
  animate = true,
}) => {
  return (
    <section
      className={`flex items-center justify-center relative ${minHeight}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, ${overlayOpacity}), rgba(0, 0, 0, ${overlayOpacity})), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="text-center text-white max-w-5xl px-4">
        <h1
          className={`text-6xl md:text-8xl font-bold mb-8 ${
            animate ? "animate-fade-in" : ""
          }`}
        >
          {title}
        </h1>
        <p
          className={`text-xl md:text-2xl leading-relaxed ${
            animate ? "animate-fade-in" : ""
          }`}
          style={animate ? { animationDelay: "0.2s" } : {}}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
