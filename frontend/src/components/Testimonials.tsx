import { useState, useEffect } from "react";
import pic1 from "@/assets/profile-logo/pic1.png";
import pic2 from "@/assets/profile-logo/pic2.png";
import pic3 from "@/assets/profile-logo/pic3.png";
import pic4 from "@/assets/profile-logo/pic4.png";
import bgImage from "@/assets/bottom.png";
import dots from "@/assets/dots.svg";
import { useAOS } from "@/hooks/useAOS";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Project Manager, Chennai Builders & Developers",
    quote: `"Investing in Oxifix has been a rewarding experience. The transparency and consistent updates from Inframart made the entire process smooth and reassuring."`,
  },
  {
    name: "Priya Sundaram",
    role: "Architect, Madurai Design Studio",
    quote: `"Oxifix's innovative approach and sustainable model impressed me. Inframart's commitment to quality and timely execution gives me full confidence as an investor."`,
  },
  {
    name: "Arun Balaji",
    role: "Civil Engineer, Coimbatore Infrastructure Ltd",
    quote: `"Partnering with Inframart for Oxifix was an easy decision. Their professionalism, market insight, and focus on delivering value make them a trusted investment partner."`,
  },
  {
    name: "Lakshmi Narayanan",
    role: "Construction Manager, Salem Projects Pvt Ltd",
    quote: `"The quality of materials and timely delivery from Oxifix Inframart has significantly improved our project timelines. A reliable partner for all infrastructure needs."`,
  },
  {
    name: "Karthik Subramanian",
    role: "Site Engineer, Tiruppur Constructions",
    quote: `"Oxifix Inframart's products have proven to be durable and cost-effective. Their technical support and after-sales service are exceptional."`,
  },

];

const trustedCompanies = [
  { name: "R&J Constructions", logo: "https://media.istockphoto.com/vectors/avatar-photo-placeholder-icon-design-vector-id1221380217?k=20&m=1221380217&s=612x612&w=0&h=avdFJ5PNo-CSkbUZzQ0Xm8h3u5BovGfSNDrfRicPDfY=" },
  { name: "Metro Builders", logo: "https://media.istockphoto.com/vectors/avatar-photo-placeholder-icon-design-vector-id1221380217?k=20&m=1221380217&s=612x612&w=0&h=avdFJ5PNo-CSkbUZzQ0Xm8h3u5BovGfSNDrfRicPDfY=" },
  { name: "Skyline Infrastructure", logo: "https://media.istockphoto.com/vectors/avatar-photo-placeholder-icon-design-vector-id1221380217?k=20&m=1221380217&s=612x612&w=0&h=avdFJ5PNo-CSkbUZzQ0Xm8h3u5BovGfSNDrfRicPDfY=" },
  { name: "Green Valley Constructions", logo: "https://media.istockphoto.com/vectors/avatar-photo-placeholder-icon-design-vector-id1221380217?k=20&m=1221380217&s=612x612&w=0&h=avdFJ5PNo-CSkbUZzQ0Xm8h3u5BovGfSNDrfRicPDfY=" },
];

const stats = [
  { number: "32", label: "Categories", color: "bg-muted" },
  { number: "13,000", label: "Sq.Ft. Of Showroom", color: "bg-muted" },
  { number: "4.6", label: "Google Rating", color: "bg-muted" },
  { number: "1 Lakh", label: "Happy Customers", color: "bg-muted" },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right"
  );
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  useAOS(); // Initialize AOS

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setSlideDirection("right");
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setSlideDirection("left");
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setSlideDirection(index > currentTestimonial ? "right" : "left");
    setCurrentTestimonial(index);
  };
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setCurrentX(clientX);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setCurrentX(clientX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    const diff = startX - currentX;
    const swipeThreshold = 50; // Minimum swipe distance

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next testimonial
        nextTestimonial();
      } else {
        // Swipe right - previous testimonial
        prevTestimonial();
      }
    }

    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
  };
  return (
    <section className="pt-12 sm:pt-16 lg:pt-20 bg-muted/30 relative overflow-hidden">
      {/* Background Image at Bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 lg:h-64 bg-repeat-x animate-move-bg-r-l"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "auto 100%",
        }}
      />

      {/* Right Side Circle - Responsive */}
      <div
        className="absolute top-40 sm:top-60 right-0 translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px] rounded-full border-[20px] sm:border-[30px] lg:border-[50px] border-muted opacity-60 pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Pagination Dots - Responsive Positioning */}
      <div
        className="absolute z-20 right-4 sm:right-8 lg:right-44 top-80 sm:top-40 lg:top-60 transform -translate-y-1/2 flex flex-col items-center gap-2 sm:gap-3 lg:gap-4"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`rounded-full transition-all duration-300 ${index === currentTestimonial
              ? "bg-black ring-1 sm:ring-2 w-2 h-2 sm:w-3 sm:h-3 ring-black ring-offset-1 sm:ring-offset-2 ring-offset-white"
              : "bg-gray-300 hover:bg-gray-400 w-1.5 h-1.5 sm:w-2 sm:h-2"
              }`}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Testimonial Section */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          {/* Trusted Companies */}
          <div
            className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 sm:mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* <div className="flex -space-x-3 sm:-space-x-4">
              {trustedCompanies.map((company, index) => (
                <div
                  key={index}
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full border-2 sm:border-4 border-background overflow-hidden transition-all duration-300 hover:scale-110 hover:z-10"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div> */}
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Trusted By
              </p>
              <p className="font-semibold text-sm sm:text-base">
                Leading Infra Companies
              </p>
            </div>
          </div>

          {/* Dynamic Testimonial Content with Slide */}
          <div
            className="relative overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              key={currentTestimonial}
              className={`w-full cursor-grab active:cursor-grabbing ${slideDirection === "right"
                ? "animate-slide-in-right"
                : "animate-slide-in-left"
                }`}
              onMouseDown={(e) => handleDragStart(e)}
              onTouchStart={(e) => handleDragStart(e)}
              onMouseMove={(e) => handleDragMove(e)}
              onTouchMove={(e) => handleDragMove(e)}
              onMouseUp={handleDragEnd}
              onTouchEnd={handleDragEnd}
              onMouseLeave={handleDragEnd}
            >
              <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed mb-4 sm:mb-6 lg:mb-8 select-none">
                {testimonials[currentTestimonial].quote}
              </blockquote>
              <div className="flex items-center gap-3 sm:gap-4 select-none">
                {/* Avatar - Added for better visual */}
                {/* <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div> */}
                <div>
                  <p className="font-bold text-base sm:text-lg lg:text-xl">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className="relative pt-4 sm:pt-12 mb-12 sm:mb-0"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center justify-end"
              >
                <div className="mb-1 sm:mb-2 transform md:translate-x-8 lg:translate-x-12 xl:translate-x-20">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black">
                    {stat.number}
                    <span className="text-green-500 text-lg sm:text-xl lg:text-2xl xl:text-3xl align-top">
                      +
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base xl:text-lg font-medium text-black mt-1 sm:mt-2">
                    {stat.label}
                  </div>
                </div>

                {/* Hide dots and lines on mobile, show on tablet and above */}
                <div className="hidden sm:flex flex-col items-center">
                  <img
                    src={dots}
                    alt="dots"
                    className="w-6 h-6 lg:w-8 lg:h-8"
                  />
                  <div
                    className={`w-0.5 bg-black ${index % 2 === 0 ? "h-12 lg:h-16" : "h-20 lg:h-28"
                      }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
