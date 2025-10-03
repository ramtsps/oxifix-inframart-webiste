// Locations.tsx
import { MapPin, Phone, Mail } from "lucide-react";
import storeFront from "@/assets/store-front.jpg";
import indiaMap from "@/assets/india-map.svg";
import { useAOS } from "@/hooks/useAOS";

const locations = [
  {
    name: "Harur",
    address:
      "2/307, Kurinji Nagar, (Near Velappanchavadi Signal), Harur, Dharmapuri Dt, Tamil Nadu - 636903",
    phone: "+91-95000 29430",
    email: "harur@oxifixinfra.com",
  },
  {
    name: "Madurai",
    address:
      "2/307, Kurinji Nagar, (Near Velappanchavadi Signal), Harur, Dharmapuri Dt, Tamil Nadu - 636903",
    phone: "+91-95000 29430",
    email: "harur@oxifixinfra.com",
  },
  {
    name: "Namakkal",
    address:
      "2/307, Kurinji Nagar, (Near Velappanchavadi Signal), Harur, Dharmapuri Dt, Tamil Nadu - 636903",
    phone: "+91-95000 29430",
    email: "harur@oxifixinfra.com",
  },
  {
    name: "Kovai",
    address:
      "2/307, Kurinji Nagar, (Near Velappanchavadi Signal), Harur, Dharmapuri Dt, Tamil Nadu - 636903",
    phone: "+91-95000 29430",
    email: "harur@oxifixinfra.com",
  },
];

const Locations = () => {
  useAOS(); // Initialize AOS

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <p
            className="text-primary font-normal tracking-wider text-sm flex items-center gap-2 mb-3 sm:mb-4"
            data-aos="fade-right"
            data-aos-delay="50" // Reduced delay
            data-aos-duration="300" // Reduced duration
          >
            <span className="w-8 sm:w-12 h-0.5 bg-dotted"></span>
            WE ARE JUST NEAR YOU
          </p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold"
            data-aos="fade-up"
            data-aos-delay="100" // Reduced delay
            data-aos-duration="400" // Reduced duration
          >
            Our Locations
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Location Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {locations.map((location, index) => (
              <div
                key={location.name}
                className="bg-background rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105" // Faster hover transition
                data-aos="fade-up"
                data-aos-delay={index * 50 + 150} // Reduced delays
                data-aos-duration="400" // Reduced duration
              >
                <div className="bg-foreground text-background p-3 sm:p-4 text-center">
                  <h3 className="text-lg sm:text-xl font-bold">
                    {location.name}
                  </h3>
                </div>

                <div className="aspect-video overflow-hidden">
                  <img
                    src={storeFront}
                    alt={`${location.name} store`}
                    className="w-full h-full object-cover transition-transform duration-200 hover:scale-110" // Faster hover transition
                  />
                </div>

                <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
                  {/* Address */}
                  <div className="flex gap-2 text-xs sm:text-sm">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground block sm:inline">
                        Address:
                      </span>{" "}
                      {location.address}
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-2 text-xs sm:text-sm">
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Phone:
                      </span>{" "}
                      {location.phone}
                    </p>
                  </div>

                  {/* Email */}
                  <div className="flex gap-2 text-xs sm:text-sm">
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Email:
                      </span>{" "}
                      {location.email}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* India Map Section */}
          <div
            className="flex items-center justify-center mt-8 lg:mt-0"
            data-aos="fade-left"
            data-aos-delay="300" // Reduced delay
            data-aos-duration="400" // Reduced duration
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <img
                src={indiaMap}
                alt="India map showing our locations"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
