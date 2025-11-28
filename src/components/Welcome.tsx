import React, { useEffect } from "react";
import { Check, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
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
    <div
      className="space-y-6 lg:space-y-8"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="space-y-3 lg:space-y-4">
        <p
          className="text-primary font-semibold tracking-wider text-xs sm:text-sm flex items-center gap-2"
          data-aos="fade-right"
          data-aos-delay="150"
        >
          <span className="w-6 sm:w-8 lg:w-12 h-0.5 bg-dotted bg-primary"></span>
          {badgeText}
        </p>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className="text-muted-foreground leading-relaxed text-base sm:text-lg lg:text-xl"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            {subtitle}
          </p>
        )}
      </div>

      <div className="space-y-4 lg:space-y-6">
        {description && (
          <p
            className="text-muted-foreground leading-relaxed text-base sm:text-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {description}
          </p>
        )}

        {features.length > 0 && (
          <div className="space-y-3 lg:space-y-4">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="flex items-center gap-3"
                data-aos="fade-up"
                data-aos-delay={350 + index * 50}
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground" />
                </div>
                <span className="text-base sm:text-lg font-semibold">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        )}

        {testimonial && (
          <>
            <div
              className="bg-muted p-4 sm:p-6 rounded-xl lg:rounded-2xl"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <p
                className="text-foreground leading-relaxed text-sm sm:text-base mb-3 sm:mb-4"
                data-aos="fade-up"
                data-aos-delay="550"
              >
                {testimonial.quote}
              </p>
              <div
                className="flex items-center gap-3"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-sm sm:text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
            <Link to="/contact" className="block">
              <button className="flex items-center rounded-full bg-primary text-white font-medium px-4 py-2 relative hover:scale-105 transition-transform duration-200">
                <span className="pr-2">CONTACT US</span>
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-black -mr-1">
                  <ArrowRight className="w-4 h-4 text-white" />
                </span>
              </button>
            </Link>
          </>
        )}

        {variant === "featured" && award && (
          <div
            className="flex items-center gap-4 bg-primary/10 p-4 sm:p-6 rounded-xl lg:rounded-2xl"
            data-aos="fade-up"
            data-aos-delay="650"
          >
            <div
              className="bg-primary p-2 sm:p-3 rounded-full"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
            </div>
            <div data-aos="fade-left" data-aos-delay="750">
              <h4 className="font-bold text-lg sm:text-xl">{award.title}</h4>
              <p className="text-muted-foreground text-sm sm:text-base">
                {award.subtitle}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const ImageComponent = (
    <div className="relative" data-aos="fade-up" data-aos-delay="200">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Main image */}
        <div
          className="pt-12 sm:pt-16 lg:pt-32 relative"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <img
            src={images.main}
            alt="Main showcase"
            className="w-60 h-48 md:w-full sm: sm:h-64 md:h-72 lg:h-80 object-cover rounded-3xl border-2 sm:border-4 border-white"
          />

          {/* On mobile, overlap secondary[0] from the TOP */}
          <img
            src={images.secondary[0]}
            alt="Secondary image 1"
            className="absolute -top-6 left-[60%] -translate-x-1/2 w-2/3 h-48 object-cover rounded-2xl hover:scale-105 transition-transform duration-300 border-2 border-white sm:hidden z-10"
            data-aos="fade-left"
            data-aos-delay="400"
          />
        </div>

        {/* Secondary images (tablet & desktop only) */}
        <div
          className="hidden sm:flex flex-col space-y-4 items-start"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <img
            src={images.secondary[0]}
            alt="Secondary image 1"
            className="w-11/12 md:w-full h-48 md:h-56 lg:h-64 object-cover rounded-3xl hover:scale-105 transition-transform duration-300 -ml-6 md:-ml-10 lg:-ml-20 z-20 border-2 sm:border-4 border-white"
            data-aos="zoom-in"
            data-aos-delay="500"
          />
          <img
            src={images.secondary[1]}
            alt="Secondary image 2"
            className="w-40 md:w-80 lg:w-52 h-44 md:h-48 lg:h-60 object-cover rounded-3xl hover:scale-105 transition-transform duration-300"
            data-aos="zoom-in"
            data-aos-delay="600"
          />
        </div>
      </div>

      {/* Award */}
      {award && variant !== "featured" && (
        <div
          className="absolute -bottom-10 sm:-bottom-20 md:-bottom-[0px] lg:-bottom-[40px] left-2 sm:left-[-6px] md:left-4 lg:left-[-30px]"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-4">
            <img
              className="w-8 sm:w-10 md:w-12 lg:w-[63px] object-cover"
              alt="Award"
              src={award.icon}
              data-aos="zoom-in"
              data-aos-delay="750"
            />
            <div
              className="[font-family:'Roboto',Helvetica] font-bold text-black text-sm sm:text-base md:text-lg lg:text-2xl leading-5 sm:leading-6 md:leading-7 lg:leading-8"
              data-aos="fade-left"
              data-aos-delay="800"
            >
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
    <section
      className="py-12 sm:py-16 lg:py-20 bg-background"
      data-aos="fade-in"
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 max-w-7xl relative">
        <div
          className={`grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center ${imagePosition === "left"
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
