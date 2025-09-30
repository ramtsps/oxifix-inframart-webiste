import { Building2, Package } from "lucide-react";
import showroom1 from "@/assets/showroom-1.jpg";
import showroom2 from "@/assets/showroom-2.jpg";
import appliances from "@/assets/appliances.jpg";
import construction from "@/assets/construction.jpg";
import sectionBg from "@/assets/WhoWeAre.svg"; // Add your background image

const WhoWeAre = () => {
  return (
    <section className="bg-background">
      {/* First Section - Background Image with Title */}
      <div
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${sectionBg})`,
        }}
      >
        {/* <div className="absolute inset-0 bg-[#C7C7C7]"></div> */}
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex items-start gap-20">
            {/* WHO WE ARE - Left side */}
            <div className="flex-shrink-0">
              <p className="text-primary font-normal tracking-wider text-sm flex items-center gap-2">
                <span className="w-12 h-0.5 bg-white bg-dotted"></span>
                WHO WE ARE
              </p>
            </div>

            {/* Heading - Right side */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                The Largest Showroom For
                <br />
                All{" "}
                <span className="bg-primary text-white">
                  Construction Needs
                </span>{" "}
                In <br /> Salem, Tamil Nadu
              </h1>
            </div>
          </div>
        </div>

        {/* Second Section - Content with Image Grid and Stats */}
        <div className=" ">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left side - Floating Image Grid */}
              <div className="space-y-8 lg:pt-20 ">
                <div className="grid grid-cols-5 gap-4">
                  {/* Left Column - 1/3 width */}
                  <div className="col-span-2 flex flex-col gap-4">
                    <div className="aspect-square rounded-2xl overflow-hidden animate-fade-in shadow-2xl -mt-16">
                      <img
                        src={showroom1}
                        alt="Construction materials showroom"
                        className=" h-100 w-50 object-cover hover-scale"
                      />
                    </div>
                    <div
                      className="aspect-square rounded-2xl overflow-hidden animate-fade-in shadow-2xl "
                      style={{ animationDelay: "0.1s" }}
                    >
                      <img
                        src={showroom2}
                        alt="Hardware and plumbing section"
                        className=" h-full object-cover hover-scale"
                      />
                    </div>
                  </div>

                  {/* Right Column - 1/2 width */}
                  <div className="col-span-3 flex flex-col gap-4">
                    <div
                      className="aspect-[4/3] rounded-2xl overflow-hidden animate-fade-in shadow-2xl"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <img
                        src={appliances}
                        alt="Premium appliances display"
                        className="w-full h-full object-cover hover-scale"
                      />
                    </div>
                    <div
                      className="aspect-[4/3] rounded-2xl overflow-hidden animate-fade-in shadow-2xl"
                      style={{ animationDelay: "0.3s" }}
                    >
                      <img
                        src={construction}
                        alt="Construction materials"
                        className="w-full h-full object-cover hover-scale"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="space-y-8 lg:pt-20">
                <div className="space-y-6">
                  {/* Divider Line */}
                  <div className="w-20 h-1 bg-foreground/30"></div>

                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold">
                      We Are The Change!
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
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
                <div className="grid grid-cols-2 gap-8 pt-8 ">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Building2 className="w-8 h-8 text-primary" />
                      <span className="text-lg font-semibold">Brand Reach</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <div className="text-5xl font-bold text-foreground">
                        25
                      </div>
                      <div className="text-2xl font-bold text-primary">+</div>
                    </div>
                    <div className="text-lg text-muted-foreground">
                      Global Brands
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Package className="w-8 h-8 text-primary" />
                      <span className="text-lg font-semibold">
                        Products Range
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <div className="text-5xl font-bold text-foreground">
                        1300
                      </div>
                      <div className="text-2xl font-bold text-primary">+</div>
                    </div>
                    <div className="text-lg text-muted-foreground">
                      Products
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
