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
    <div className="animate-marquee whitespace-nowrap py-3 sm:py-4 md:py-6 flex items-center">
      {/* Mobile: Show 2 repetitions with proper separator */}
      <div className="sm:hidden flex items-center gap-3">
        {[...Array(1)].map((_, repetitionIndex) => (
          <div key={repetitionIndex} className="flex items-center gap-3">
            {bannerContent.items.map((item, index) => (
              <div key={`mobile-${repetitionIndex}-${index}`} className="flex items-center gap-3">
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
      
      {/* Desktop/Tablet: Show 3 repetitions with proper separator */}
      <div className="hidden sm:flex items-center gap-4 md:gap-6 lg:gap-8">
        {[...Array(3)].map((_, repetitionIndex) => (
          <div key={repetitionIndex} className="flex items-center gap-4 md:gap-6 lg:gap-8">
            {bannerContent.items.map((item, index) => (
              <div key={`desktop-${repetitionIndex}-${index}`} className="flex items-center gap-4 md:gap-6 lg:gap-8">
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
);

  // New Scrolling Text Banner Component with mobile-optimized text
const ScrollingTextBanner = () => (
  <div className="overflow-hidden py-4 sm:py-6">
    <div className="animate-marquee-left-right whitespace-nowrap flex items-center">
      {/* Mobile: Show 2 repetitions */}
      <div className="sm:hidden flex items-center flex-shrink-0">
        {[...Array(2)].map((_, i) => (
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
      className={`bg-[#F6F6F6] ${
        showTopBanner ? "pt-0" : "pt-12 sm:pt-16 lg:pt-20"
      } ${showBottomBanner ? "pb-0" : "pb-12 sm:pb-16 lg:pb-20"}`}
    >
      {/* Top Banner - Conditionally Rendered */}
      {showTopBanner && (
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <ScrollingTextBanner />
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

  <div
  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mx-auto"
  data-aos="fade-up"
  data-aos-delay="50"
  data-aos-duration="300"
>
  {brandImages.map((logo: any, index: number) => (
    <div
      key={index}
      className="bg-background p-4 sm:p-6 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-150 hover:scale-105 hover:shadow-lg"
      data-aos="zoom-in"
      data-aos-delay={index * 30 + 100}
      data-aos-duration="300"
    >
      <div className="text-center">
        <div className="w-24 h-12 sm:w-28 lg:w-32 xl:w-36 mx-auto rounded-lg flex items-center justify-center">
          <img
            src={logo}
            alt={`Brand ${index + 1}`}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  ))}
</div>
      </div>

      {/* Bottom Banner - Conditionally Rendered */}
      {showBottomBanner && (
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <ScrollingTextBanner />
          <ScrollingBanner />
        </div>
      )}
    </section>
  );
};

export default Brands;