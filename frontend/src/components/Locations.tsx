// Locations.tsx
import { MapPin, Phone, Mail } from "lucide-react";
import storeFront from "@/assets/store-front.jpg";
import indiaMap from "@/assets/india-map.svg";
import { useAOS } from "@/hooks/useAOS";

const Locations = () => {
  useAOS(); // Initialize AOS

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header Section */}
        <div className="">
          <p
            className="text-primary font-normal tracking-wider text-sm flex items-center gap-2 mb-3 sm:mb-4"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="300"
          >
            <span className="w-8 sm:w-12 h-0.5 bg-dotted"></span>
            WE ARE JUST NEAR YOU
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px]">
          {/* Left Side - Only Title */}
          <div
            className="flex items-center justify-center lg:justify-start"
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-duration="500"
          >
            <h2
              className="
    text-4xl       /* smaller for mobile */
    sm:text-5xl
    md:text-6xl
    lg:text-8xl
    font-bold
    leading-tight
    text-center
    lg:text-left
    px-4           /* reduced left-right padding for mobile */
    mt-6           /* smaller margin top on mobile */
    sm:mt-8
    md:mt-10
  "
            >
              Services Across{" "}
              <span className="text-primary block mt-2 sm:mt-4 lg:mt-6">
                India
              </span>
            </h2>

          </div>

          {/* Right Side - India Map */}
          <div
            className="flex items-center justify-center"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl transform rotate-3 scale-105"></div>

              {/* Map Container */}
              <div className="relative bg-background rounded-2xl p-6 sm:p-8 shadow-2xl border">
                <img
                  src={indiaMap}
                  alt="India map showing our service locations across the country"
                  className="w-full h-[300px] drop-shadow-md"
                />

                {/* Floating PAN India Badge */}
                <div className="absolute -top-3 -right-3 bg-primary text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                  PAN India
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;