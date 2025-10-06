// WhoWeAre.tsx
import { Building2, Package } from "lucide-react";
import showroom1 from "@/assets/showroom-1.jpg";
import showroom2 from "@/assets/showroom-2.jpg";
import appliances from "@/assets/appliances.jpg";
import construction from "@/assets/construction.jpg";
import under from "@/assets/who-we-are/under.png";
import sectionBg from "@/assets/sevices.png";
import buildingIcon from "@/assets/building.png";
import { useAOS } from "@/hooks/useAOS";

const WhoWeAre = () => {
  useAOS(); // Initialize AOS

  return (
    <section className="bg-background">
      {/* First Section - Background Image with Title */}
      <div
        className="relative py-16 sm:py-24 lg:py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${sectionBg})`,
        }}
      >
        
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12 lg:gap-20">
            {/* WHO WE ARE - Top on mobile, left on desktop */}
            <div className="flex-shrink-0 md:w-1/4">
              <p
                className="text-primary font-normal tracking-wider text-sm flex items-center gap-2 md:mb-4"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <span className="w-8 lg:w-12 h-0.5 bg-white bg-dotted"></span>
                WHO WE ARE
              </p>
            </div>

            {/* Heading - Bottom on mobile, right on desktop */}
            <div
              className="flex-1 md:w-3/4 md:pl-24 lg:pl-0" // Changed from md:pl-10 to md:pl-20
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                The Largest Showroom For
                <br />
                All{" "}
                <span className="bg-primary text-white px-1">
                  Construction Needs
                </span>{" "}
                In <br className="hidden sm:block" /> Salem, Tamil Nadu
              </h1>
            </div>
          </div>
        </div>

        {/* Second Section - Content with Image Grid and Stats */}
        <div className="mt-12 lg:mt-0">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Left side - Floating Image Grid */}
              <div className="space-y-6 lg:pt-20">
                <div className="grid grid-cols-5 gap-3 sm:gap-4">
                  {/* Left Column - 2/5 width on mobile, 2/5 on larger screens */}
                  <div className="col-span-2 flex flex-col gap-3 sm:gap-4 relative">
                    <div
                      className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl mt-0 md:-mt-20 sm:-mt-36"
                      data-aos="fade-right"
                      data-aos-delay="300"
                    >
                      <img
                        src={showroom1}
                        alt="Construction materials showroom"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div
                      className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl"
                      data-aos="fade-right"
                      data-aos-delay="400"
                    >
                      <img
                        src={showroom2}
                        alt="Hardware and plumbing section"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div
                      className="absolute -bottom-4 -right-4 sm:bottom-0 sm:right-0 sm:translate-x-1/2 z-20"
                      data-aos="zoom-in"
                      data-aos-delay="600"
                    >
                      <img
                        src={under}
                        alt="Hardware and plumbing section"
                        className="h-24 w-auto sm:h-40 object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Right Column - 3/5 width on mobile, 3/5 on larger screens */}
                  <div className="col-span-3 flex flex-col gap-3 sm:gap-4">
                    <div
                      className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl"
                      data-aos="fade-left"
                      data-aos-delay="500"
                    >
                      <img
                        src={appliances}
                        alt="Premium appliances display"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div
                      className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl"
                      data-aos="fade-left"
                      data-aos-delay="600"
                    >
                      <img
                        src={construction}
                        alt="Construction materials"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="space-y-6 lg:pt-20">
                <div className="space-y-4 sm:space-y-6">
                  {/* Divider Line */}
                  <div
                    className="w-12 sm:w-16 lg:w-20 h-0.5 sm:h-1 bg-foreground/30"
                    data-aos="fade-right"
                    data-aos-delay="200"
                  ></div>

                  <div className="space-y-4 sm:space-y-6">
                    <h2
                      className="text-2xl sm:text-3xl md:text-4xl font-bold"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      We Are The Change!
                    </h2>
                    <div
                      className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <p>
                        Proin Porttitor Pharetra Interdum. Donec Erat Nibh,
                        Cursus Non Interdum Ac, Fermentum Eget Nisi. Donec Non
                        Nisi Ut Dolor Sagittis Convallis Eget Ut Ante.
                      </p>
                      <p>
                        Curabitur Ultricies Dolor Nec Velit Sagittis, At
                        Eleifend Felis Aliquet. Pellentesque Vulputate Viverra
                        Risus, A Viverra Magna Bibendum Eu.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats Section */}
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  {/* Brand Reach Card */}
                  <div className="bg-red-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col justify-center min-h-[160px] sm:min-h-[200px] lg:min-h-[240px] text-white">
                    <div className="mb-2 sm:mb-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm sm:text-base lg:text-lg font-semibold">
                          Brand Reach
                        </span>
                        <img
                          src={buildingIcon}
                          alt="Building icon"
                          className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                        />
                      </div>
                      <div className="border-b border-white mb-2 sm:mb-3" />
                    </div>
                    <div className="flex items-baseline gap-1 sm:gap-2 mb-1 sm:mb-2">
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                        25
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-white">
                        +
                      </div>
                    </div>
                    <div className="text-sm sm:text-base lg:text-lg">
                      Global Brands
                    </div>
                  </div>

                  {/* Products Range Card */}
                  <div className="bg-black rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col justify-center min-h-[160px] sm:min-h-[200px] lg:min-h-[240px] text-white">
                    <div className="mb-2 sm:mb-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm sm:text-base lg:text-lg font-semibold">
                          Products Range
                        </span>
                        <img
                          src={buildingIcon}
                          alt="Package icon"
                          className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                        />
                      </div>
                      <div className="border-b border-white mb-2 sm:mb-3" />
                    </div>
                    <div className="flex items-baseline gap-1 sm:gap-2 mb-1 sm:mb-2">
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                        1300
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-green-400">
                        +
                      </div>
                    </div>
                    <div className="text-sm sm:text-base lg:text-lg">
                      Products
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
