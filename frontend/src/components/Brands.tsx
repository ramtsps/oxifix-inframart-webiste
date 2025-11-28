import { useAOS } from "@/hooks/useAOS";

// Dynamically import all images from the brand folder using Vite
const brandImages = Object.values(
  import.meta.glob('@/assets/brand/*.{png,jpg,jpeg,svg}', {
    eager: true,
    as: 'url'
  })
);

interface BrandsProps {
  showTopBanner?: boolean;
  showBottomBanner?: boolean;
  bannerContent?: {
    items: string[];
    separator?: string;
  };
}

const Brands: React.FC<BrandsProps> = ({
  showTopBanner = false,
  showBottomBanner = true,
  bannerContent = {
    items: [
      "HIGH-QUALITY PRODUCTS",
      "ONTIME DELIVERY",
      "AFTER SALE SUPPORT",
      "INSTALLATION",
    ],
    separator: "★",
  },
}) => {
  useAOS(); // Initialize AOS

  // Scrolling Banner Component
  const ScrollingBanner = () => (
    <div className="bg-primary text-primary-foreground overflow-hidden w-full">
      <div className="py-3 sm:py-4 md:py-6">
        {/* Mobile: Infinite scrolling with 2 repetitions */}
        <div className="sm:hidden flex items-center gap-3 overflow-hidden">
          <div
            className="flex items-center gap-3 flex-nowrap animate-marquee"
            style={{ animationDuration: '40s' }}
          >
            {[...Array(1)].map((_, repetitionIndex) => ( // Increased from 1 to 2 for smoother loop
              <div key={repetitionIndex} className="flex items-center gap-3 flex-shrink-0">
                {bannerContent.items.map((item, index) => (
                  <div key={`mobile-${repetitionIndex}-${index}`} className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-xs font-bold whitespace-nowrap">
                      {item}
                    </span>
                    <span className="text-xs">
                      {bannerContent.separator}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop/Tablet: Infinite scrolling with 3 repetitions */}
        <div className="hidden sm:flex items-center gap-4 md:gap-6 lg:gap-8 overflow-hidden">
          <div
            className="flex items-center gap-4 md:gap-6 lg:gap-8 flex-nowrap animate-marquee"
            style={{ animationDuration: '60s' }}
          >
            {[...Array(3)].map((_, repetitionIndex) => (
              <div key={repetitionIndex} className="flex items-center gap-4 md:gap-6 lg:gap-8 flex-shrink-0">
                {bannerContent.items.map((item, index) => (
                  <div key={`desktop-${repetitionIndex}-${index}`} className="flex items-center gap-4 md:gap-6 lg:gap-8 flex-shrink-0">
                    <span className="text-base md:text-xl lg:text-2xl font-bold whitespace-nowrap">
                      {item}
                    </span>
                    <span className="text-base md:text-xl lg:text-2xl">
                      {bannerContent.separator}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add CSS for marquee animation */}
      <style jsx>{`
      @keyframes marquee {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      .animate-marquee {
        animation: marquee linear infinite;
      }
    `}</style>
    </div>
  );
  // Fixed Banner Component (No Scrolling)
  const FixedBanner = () => (
    <div className="bg-primary text-primary-foreground w-full">
      <div className="whitespace-nowrap py-3 sm:py-4 md:py-6">
        {/* Mobile & Tablet: Scrollable when content overflows */}
        <div className="md:hidden flex items-center gap-3 sm:gap-4 overflow-x-auto w-full px-4 sm:px-6 scrollbar-hide">
          <div className="flex items-center gap-3 sm:gap-4 flex-nowrap mx-auto">
            {bannerContent.items.map((item, index) => (
              <div key={`mobile-tablet-${index}`} className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
                <span className="text-xs sm:text-base font-bold whitespace-nowrap">
                  {item}
                </span>
                {index < bannerContent.items.length - 1 && (
                  <span className="text-xs sm:text-base">
                    {bannerContent.separator}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Single line, no wrapping, scrollable if needed */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 overflow-x-auto w-full px-8 scrollbar-hide">
          <div className="flex items-center gap-6 lg:gap-8 flex-nowrap mx-auto">
            {bannerContent.items.map((item, index) => (
              <div key={`desktop-${index}`} className="flex items-center gap-6 lg:gap-8 flex-shrink-0">
                <span className="text-xl lg:text-2xl font-bold whitespace-nowrap">
                  {item}
                </span>
                {index < bannerContent.items.length - 1 && (
                  <span className="text-xl lg:text-2xl">
                    {bannerContent.separator}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  // Scrolling Text Banner Component
  const ScrollingTextBanner = () => (
    <div className="overflow-hidden py-4 sm:py-6">
      <div className="animate-marquee-left-right whitespace-nowrap flex items-center">
        {/* Mobile: Show 2 repetitions */}
        <div className="sm:hidden flex items-center flex-shrink-0">
          {[...Array(1)].map((_, i) => (
            <div key={i} className="inline-flex items-center flex-shrink-0">
              <span className="text-base font-bold">
                Built Excellence
              </span>
              <span className="text-base text-primary mx-2">
                ★
              </span>
              <span className="text-base font-bold">
                All-In One
              </span>
              <span className="text-base text-primary mx-2">
                ★
              </span>
            </div>
          ))}
        </div>

        {/* Desktop: Show 4 repetitions */}
        <div className="hidden sm:flex items-center flex-shrink-0">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="inline-flex items-center flex-shrink-0">
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
                Built Excellence
              </span>
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary mx-2 sm:mx-3 lg:mx-4">
                ★
              </span>
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
                All-In One
              </span>
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary mx-2 sm:mx-3 lg:mx-4">
                ★
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section
      className={`bg-[#F6F6F6] ${showTopBanner ? "pt-0" : "pt-12 sm:pt-16 lg:pt-20"
        } ${showBottomBanner ? "pb-0" : "pb-12 sm:pb-16 lg:pb-20"}`}
    >
      {/* Top Banner - Conditionally Rendered */}
      {showTopBanner && (
        <div className="mb-12 sm:mb-16 lg:mb-18 mt-12 sm:mt-16 lg:mt-20">
          {/* <ScrollingTextBanner /> */}
          <ScrollingBanner />
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 lg:mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Brands We Deal With
        </h2>

        {/* Three Row Infinite Scrolling Brands Carousel */}
        <div className="relative overflow-hidden py-8 space-y-6">
          {/* First Row - Normal Direction */}
          <div
            className="flex gap-4 sm:gap-6"
            style={{
              animation: 'scroll 80s linear infinite'
            }}
          >
            {[...brandImages, ...brandImages].map((logo: any, index: number) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg w-24 sm:w-28 lg:w-32 xl:w-36 border border-gray-100"
              >
                <div className="text-center">
                  <div className="w-16 h-10 sm:w-18 sm:h-12 lg:w-20 lg:h-14 xl:w-24 xl:h-16 mx-auto rounded-lg flex items-center justify-center">
                    <img
                      src={logo}
                      alt={`Brand ${(index % brandImages.length) + 1}`}
                      className="w-full h-full object-contain transition-all duration-300 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - Reverse Direction */}
          <div
            className="flex gap-4 sm:gap-6"
            style={{
              animation: 'scrollReverse 70s linear infinite'
            }}
          >
            {[...brandImages.slice(brandImages.length / 3), ...brandImages.slice(0, brandImages.length / 3), ...brandImages.slice(brandImages.length / 3), ...brandImages.slice(0, brandImages.length / 3)].map((logo: any, index: number) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg w-24 sm:w-28 lg:w-32 xl:w-36 border border-gray-100"
              >
                <div className="text-center">
                  <div className="w-16 h-10 sm:w-18 sm:h-12 lg:w-20 lg:h-14 xl:w-24 xl:h-16 mx-auto rounded-lg flex items-center justify-center">
                    <img
                      src={logo}
                      alt={`Brand ${(index % brandImages.length) + 1}`}
                      className="w-full h-full object-contain transition-all duration-300 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Third Row - Normal Direction (Different Speed) */}
          <div
            className="flex gap-4 sm:gap-6"
            style={{
              animation: 'scroll 90s linear infinite'
            }}
          >
            {[...brandImages.slice(brandImages.length * 2 / 3), ...brandImages.slice(0, brandImages.length * 2 / 3), ...brandImages.slice(brandImages.length * 2 / 3), ...brandImages.slice(0, brandImages.length * 2 / 3)].map((logo: any, index: number) => (
              <div
                key={`third-${index}`}
                className="flex-shrink-0 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg w-24 sm:w-28 lg:w-32 xl:w-36 border border-gray-100"
              >
                <div className="text-center">
                  <div className="w-16 h-10 sm:w-18 sm:h-12 lg:w-20 lg:h-14 xl:w-24 xl:h-16 mx-auto rounded-lg flex items-center justify-center">
                    <img
                      src={logo}
                      alt={`Brand ${(index % brandImages.length) + 1}`}
                      className="w-full h-full object-contain transition-all duration-300 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F6F6F6] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F6F6F6] to-transparent z-10 pointer-events-none"></div>

          {/* Custom Animations */}
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-24rem * 8));
              }
            }
            
            @keyframes scrollReverse {
              0% {
                transform: translateX(calc(-24rem * 8));
              }
              100% {
                transform: translateX(0);
              }
            }
            
            @media (min-width: 640px) {
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(calc(-28rem * 8));
                }
              }
              @keyframes scrollReverse {
                0% {
                  transform: translateX(calc(-28rem * 8));
                }
                100% {
                  transform: translateX(0);
                }
              }
            }
            
            @media (min-width: 1024px) {
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(calc(-32rem * 8));
                }
              }
              @keyframes scrollReverse {
                0% {
                  transform: translateX(calc(-32rem * 8));
                }
                100% {
                  transform: translateX(0);
                }
              }
            }
            
            @media (min-width: 1280px) {
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(calc(-36rem * 8));
                }
              }
              @keyframes scrollReverse {
                0% {
                  transform: translateX(calc(-36rem * 8));
                }
                100% {
                  transform: translateX(0);
                }
              }
            }
          `}</style>
        </div>

        {/* Brands Counter */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-lg sm:text-xl text-gray-600 font-semibold">
            Trusted by <span className="text-primary font-bold">{brandImages.length}+</span> Premium Brands
          </p>
        </div>
      </div>

      {/* Bottom Banner - Conditionally Rendered */}
      {showBottomBanner && (
        <div className="mt-12 sm:mt-16 lg:mt-20">

          {/*  <ScrollingTextBanner /> */}
          <ScrollingBanner />
        </div>
      )}
    </section>
  );
};

export default Brands;