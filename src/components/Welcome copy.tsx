import React from "react";
import { Check, Award } from "lucide-react";

interface Feature {
  id: string;
  text: string;
}

interface Testimonial {
  quote: string;
  name: string;
  position: string;
  avatar: string;
}

interface AwardInfo {
  icon: string;
  title: string;
  subtitle: string;
}

interface DynamicSectionProps {
  // Header
  badgeText?: string;
  title: string;
  subtitle?: string;
  description?: string;

  // Features
  features?: Feature[];

  // Testimonial
  testimonial?: Testimonial;

  // Award
  award?: AwardInfo;

  // Images
  images: {
    main: string;
    secondary: string[];
  };

  // Layout
  imagePosition?: "left" | "right";
  variant?: "default" | "compact" | "featured";
}

const Welcome: React.FC<DynamicSectionProps> = ({
  badgeText = "WHO WE ARE",
  title,
  subtitle,
  description,
  features = [],
  testimonial,
  award,
  images,
  imagePosition = "right",
  variant = "default",
}) => {
  const ContentComponent = (
    <div className="space-y-8">
      <div className="space-y-4">
        <p className="text-primary font-semibold tracking-wider text-sm flex items-center gap-2">
          <span className="w-8 sm:w-12 h-0.5 bg-dotted"></span>
          {badgeText}
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-muted-foreground leading-relaxed text-lg">
            {subtitle}
          </p>
        )}
      </div>

      <div className="space-y-6">
        {description && (
          <p className="text-muted-foreground leading-relaxed text-lg">
            {description}
          </p>
        )}

        {features.length > 0 && (
          <div className="space-y-4">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-lg font-semibold">{feature.text}</span>
              </div>
            ))}
          </div>
        )}

        {testimonial && (
          <div className="bg-muted p-6 rounded-2xl">
            <p className="text-foreground leading-relaxed mb-4">
              {testimonial.quote}
            </p>
            <div className="flex items-center gap-3">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.position}
                </p>
              </div>
            </div>
          </div>
        )}

        {variant === "featured" && award && (
          <div className="flex items-center gap-4 bg-primary/10 p-6 rounded-2xl">
            <div className="bg-primary p-3 rounded-full">
              <Award className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h4 className="font-bold text-xl">{award.title}</h4>
              <p className="text-muted-foreground">{award.subtitle}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const ImageComponent = (
    <div className="relative">
      <div className="grid grid-cols-2 gap-4">
        <div className="pt-32">
          <img
            src={images.main}
            alt="Main showcase"
            className="w-full h-80 object-cover rounded-3xl hover:scale-105 transition-transform duration-300 border-4 border-white"
          />
        </div>
        <div className="space-y-4">
          <img
            src={images.secondary[0]}
            alt="Secondary image 1"
            className="w-full h-64 object-cover rounded-3xl hover:scale-105 transition-transform duration-300 -ml-20 z-20 border-4 border-white"
          />
          <img
            src={images.secondary[1]}
            alt="Secondary image 2"
            className="w-52 h-60 object-cover rounded-3xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {award && variant !== "featured" && (
        <div className="absolute bottom-[-40px] left-[-20px] animate-fade-in opacity-0 [--animation-delay:1000ms]">
          <div className="flex items-center gap-4">
            <img
              className="w-[63px] object-cover"
              alt="Award"
              src={award.icon}
            />
            <div className="[font-family:'Roboto',Helvetica] font-bold text-black text-2xl tracking-[0] leading-8">
              {award.title}
              <br />
              {award.subtitle}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl relative">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center ${
            imagePosition === "left"
              ? "lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1"
              : ""
          }`}
        >
          {imagePosition === "left" ? (
            <>
              {ImageComponent}
              {ContentComponent}
            </>
          ) : (
            <>
              {ContentComponent}
              {ImageComponent}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Welcome;
