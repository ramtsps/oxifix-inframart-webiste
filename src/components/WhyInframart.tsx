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
                WHY OXIFIX INFRAMART
                <span className="w-8 lg:w-12 h-0.5 bg-white bg-dotted"></span>
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Your Trusted Home Solutions Partner
              </h2>

              <div className="space-y-4   text-muted-foreground leading-relaxed text-base sm:text-lg">
                <p>
                  At Inframart, we are committed to making every home project seamless and stress-free.
                  From bath fittings and plywood to electricals and paints, we offer everything under one roof.
                  Our range of products comes from trusted brands, ensuring quality, durability, and safety.
                  With expert guidance at every step, we help our customers make informed choices.
                </p>

                <p>
                  We prioritize convenience and reliability in every interaction.
                  Timely delivery and personalized support are at the heart of our service.
                </p>

                <p>
                  Whether building a new home or renovating an existing one, Inframart is your go-to partner.
                  Our comprehensive solutions save time and effort, letting you focus on bringing your vision to life.
                  We combine innovation and quality to create spaces that are functional, beautiful, and lasting.
                  With Inframart, every project becomes a smooth and satisfying experience.
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
