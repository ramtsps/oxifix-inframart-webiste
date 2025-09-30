import { MapPin, Phone, Mail } from "lucide-react";
import storeFront from "@/assets/store-front.jpg";
import indiaMap from "@/assets/india-map.png";

const locations = [
  {
    name: "Harur",
    address: "2/307, Kurinji Nagar, (Near Velappanchavadi Signal), Harur, Dharmapuri Dt, Tamil Nadu - 636903",
    phone: "+91-95000 29430",
    email: "harur@oxifixinfra.com",
  },
  {
    name: "Madurai",
    address: "2/307, Kurinji Nagar, (Near Velappanchavadi Signal), Harur, Dharmapuri Dt, Tamil Nadu - 636903",
    phone: "+91-95000 29430",
    email: "harur@oxifixinfra.com",
  },
  {
    name: "Namakkal",
    address: "2/307, Kurinji Nagar, (Near Velappanchavadi Signal), Harur, Dharmapuri Dt, Tamil Nadu - 636903",
    phone: "+91-95000 29430",
    email: "harur@oxifixinfra.com",
  },
  {
    name: "Kovai",
    address: "2/307, Kurinji Nagar, (Near Velappanchavadi Signal), Harur, Dharmapuri Dt, Tamil Nadu - 636903",
    phone: "+91-95000 29430",
    email: "harur@oxifixinfra.com",
  },
];

const Locations = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <p className="text-primary font-semibold tracking-wider text-sm flex items-center gap-2 mb-4">
            <span className="w-12 h-0.5 bg-primary"></span>
            WE ARE JUST NEAR YOU
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">Our Locations</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Location Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {locations.map((location, index) => (
              <div 
                key={location.name} 
                className="bg-background rounded-2xl overflow-hidden shadow-lg hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-foreground text-background p-4 text-center">
                  <h3 className="text-xl font-bold">{location.name}</h3>
                </div>
                
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={storeFront} 
                    alt={`${location.name} store`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6 space-y-3">
                  <div className="flex gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Address:</span><br />
                      {location.address}
                    </p>
                  </div>
                  
                  <div className="flex gap-2 text-sm">
                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Phone:</span> {location.phone}
                    </p>
                  </div>
                  
                  <div className="flex gap-2 text-sm">
                    <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Email:</span> {location.email}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* India Map */}
          <div className="flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-full max-w-md">
              <img 
                src={indiaMap} 
                alt="India map showing our locations" 
                className="w-full h-auto"
              />
              {/* Location markers */}
              <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-primary rounded-full animate-pulse" />
              <div className="absolute top-2/3 left-1/3 w-4 h-4 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
