import React from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import topBackgroundImage from "@/assets/top.svg";
import serviceImg01 from "@/assets/showroom-1.jpg"; // example images
import serviceImg02 from "@/assets/showroom-1.jpg";
import serviceImg03 from "@/assets/showroom-1.jpg";
import { useAOS } from "@/hooks/useAOS"; // import your AOS hook

const services = [
  {
    number: "01",
    title: "Complete Home Solutions",
    description: "We offer everything you need under one roof – from bath fittings and plywood to electricals and paints – making home creation effortless and convenient.",
    bgImage: serviceImg01,
  },
  {
    number: "02",
    title: "Quality & Reliability",
    description: "Our products are sourced from trusted brands, ensuring durability, safety, and long-lasting performance for every corner of your home.",
    bgImage: serviceImg02,
  },
  {
    number: "03",
    title: "Simplified Shopping Experience",
    description: "With all essentials available in one place, we save your time and effort, providing a seamless experience from selection to delivery for every home project.",
    bgImage: serviceImg03,
  },
];

const WhatWeBuild = () => {
  useAOS(); // Initialize AOS

  return (
    <section
      className="py-20 bg-[#f4f4f5] relative"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      {/* Top background */}
    
   <div
        className="absolute top-0 left-0 w-full h-5 sm:h-12  bg-cover bg-center bg-repeat-x animate-move-bg-l-r"
        style={{
          backgroundImage: `url(${topBackgroundImage})`,
        }}
      />
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
        >
          <p className="text-primary font-semibold tracking-wider text-sm mb-4">
            ···················· OUR BLOG & NEWS ··················
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Building Dreams for Our Customers
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-card p-8 rounded-3xl border cursor-pointer group transition-all duration-500"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay={index * 150}
            >
              {/* Background image with black overlay */}
              <div
                className="absolute inset-0 bg-center bg-cover opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-hover-scale"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${service.bgImage})`,
                }}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                <div
                  className="[-webkit-text-stroke:1px_#14AE5C] md:[-webkit-text-stroke:2px_#14AE5C] text-6xl font-bold mb-6 leading-none text-right"
                  style={{
                    WebkitTextStroke: "1px #14AE5C",
                    paintOrder: "stroke fill",
                    color: "transparent",
                  }}
                >
                  {service.number}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6  transition-colors duration-500">
                  {service.description}
                </p>
                {/* <Button
                  variant="ghost"
                  className="text-primary bg-transparent hover:bg-transparent hover:text-primary p-0 h-auto font-semibold hover:underline"
                >
                  Read More <Plus className="w-4 h-4" />
                </Button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
