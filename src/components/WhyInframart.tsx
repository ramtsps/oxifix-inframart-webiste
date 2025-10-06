import React from "react";
import { Link } from "react-router-dom";
import braGraph from "@/assets/graph.png";
import bottomBackgroundImage from "@/assets/bottom-image.png";
import topBackgroundImage from "@/assets/top.svg";
import { ArrowRight } from "lucide-react";
import { useAOS } from "@/hooks/useAOS"; // Add AOS hook

const WhyInframart = () => {
  useAOS(); // Initialize AOS

  return (
    <section className="pt-24 lg:pt-32 pb-40 lg:pb-52 relative bg-[#f4f4f5]">
      {/* Top background */}
   
         <div
        className="absolute top-0 left-0 w-full h-5 sm:h-12  bg-cover bg-center bg-repeat-x animate-move-bg-l-r"
        style={{
          backgroundImage: `url(${topBackgroundImage})`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-card rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Image */}
            <div
              className="relative w-full flex items-end justify-center"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <img
                src={braGraph}
                alt="3D Chart"
                className="w-full max-w-md sm:max-w-lg lg:max-w-full h-auto object-contain"
              />
            </div>

            {/* Right Content */}
            <div
              className="space-y-6 sm:space-y-8"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <p className="text-primary font-normal tracking-wider text-sm flex items-center gap-2">
                WHO WE ARE
                <span className="w-8 lg:w-12 h-0.5 bg-white bg-dotted"></span>
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Infra Is A Hidden Gem.
              </h2>

              <div className="space-y-4 text-lg sm:text-xl text-muted-foreground leading-relaxed">
                <p>
                  Not many people know that size of the Infra Structure industry
                  is bigger than the size of popular industries like the beauty
                  & wellness industry, the fast food industry, and the
                  diagnostic labs industry.
                </p>

                <p>
                  You will be surprised to know that 96% of the Infra Structure
                  industry is unorganised.
                </p>

                <p>
                  But now with huge investments coming into the industry, it is
                  now expected to explode just like food delivery (Swiggy,
                  Zomato), UPI payments (PayTM, PhonePe), and online cabs (Ola,
                  Uber).
                </p>
              </div>

              <Link to="/contact" className="block">
                <button className="flex items-center rounded-full bg-primary text-white font-medium px-4 py-2 sm:px-5 sm:py-3 transition-transform duration-200 hover:scale-105">
                  <span className="pr-2">CONTACT US</span>
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-black -mr-1">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom background */}
      <div
        className="absolute bottom-0 left-0 w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 bg-cover bg-center bg-repeat-x animate-move-bg-l-r"
        style={{ backgroundImage: `url(${bottomBackgroundImage})` }}
      />
    </section>
  );
};

export default WhyInframart;
