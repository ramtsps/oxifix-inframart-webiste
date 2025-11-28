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
      className={`flex items-center justify-center relative ${minHeight} overflow-hidden`}
    >
      {/* Background Image with optimized rendering */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, ${overlayOpacity}), rgba(0, 0, 0, ${overlayOpacity})), url(${backgroundImage})`,
          imageRendering: "crisp-edges", // Prevents blurry scaling
          transform: "translate3d(0, 0, 0)", // Hardware acceleration
          willChange: "transform", // Optimizes rendering
        }}
      />

      {/* Optional: Add a sharpening filter */}
      <div
        className="absolute inset-0 z-5"
        style={{
          backdropFilter: "contrast(1.05) saturate(1.1)", // Enhances clarity
          mixBlendMode: "normal",
        }}
      />

      {/* Content */}
      <div className="text-center text-white max-w-5xl px-4 relative z-10">
        <h1
          className={`text-6xl md:text-8xl font-bold mb-8 ${animate ? "animate-fade-in" : ""
            }`}
        >
          {title}
        </h1>
        <p
          className={`text-xl md:text-2xl leading-relaxed ${animate ? "animate-fade-in" : ""
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