import brand1 from "@/assets/brand/brands1.png";
import brand2 from "@/assets/brand/brands2.png";
import brand3 from "@/assets/brand/brands3.png";
import brand4 from "@/assets/brand/brands4.png";
import brand5 from "@/assets/brand/brands5.png";
import brand6 from "@/assets/brand/brands6.png";
import { useAOS } from "@/hooks/useAOS";

const brands = [
  {
    name: "Wutama Land",
    logo: brand1,
  },
  {
    name: "Mountain Construction",
    logo: brand2,
  },
  {
    name: "Hexagon Build",
    logo: brand3,
  },
  {
    name: "Premier Builders",
    logo: brand4,
  },
  {
    name: "Gormley Construction",
    logo: brand5,
  },
  {
    name: "Urban Towers",
    logo: brand6,
  },
];

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
    <div className="animate-marquee whitespace-nowrap py-3 sm:py-4 md:py-6 flex items-center gap-4 sm:gap-6 lg:gap-8">
      {/* Mobile: Show only 1 repetition */}
      <div className="sm:hidden flex items-center gap-3">
        {bannerContent.items.map((item, index) => (
          <>
            <span className="text-xs font-bold">
              {item}
            </span>
            {index < bannerContent.items.length - 1 && (
              <span className="text-xs">
                {bannerContent.separator}
              </span>
            )}
          </>
        ))}
      </div>
      
      {/* Desktop/Tablet: Show 3 repetitions */}
      {[...Array(3)].map((_, i) => (
        <div key={i} className="hidden sm:flex items-center gap-4 md:gap-6 lg:gap-8">
          {bannerContent.items.map((item, index) => (
            <>
              <span className="text-base md:text-xl lg:text-2xl font-bold">
                {item}
              </span>
              {index < bannerContent.items.length - 1 && (
                <span className="text-base md:text-xl lg:text-2xl">
                  {bannerContent.separator}
                </span>
              )}
            </>
          ))}
        </div>
      ))}
    </div>
  </div>
);
  // New Scrolling Text Banner Component with mobile-optimized text
  const ScrollingTextBanner = () => (
    <div className="overflow-hidden py-4 sm:py-6">
      <div className="animate-marquee-left-right whitespace-nowrap flex items-center">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="inline-flex items-center mx-3 sm:mx-4 md:mx-6 lg:mx-8 flex-shrink-0">
            {/* Mobile: Short text, Desktop: Full text */}
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
              {/* <span className="sm:hidden">QUALITY PRODUCTS</span> */}
              <span className="hidden sm:inline">HIGH-QUALITY PRODUCTS</span>
            </span>
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary mx-2 sm:mx-3 lg:mx-4">
              ★
            </span>
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
              ONTIME DELIVERY
            </span>
          </div>
        ))}
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
          data-aos-delay="200"
        >
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-background p-4 sm:p-6 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
              data-aos="zoom-in"
              data-aos-delay={index * 100 + 300}
            >
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto rounded-lg flex items-center justify-center">
                  <img
                    src={brand.logo}
                    alt={brand.name}
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