import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import { useAOS } from "@/hooks/useAOS";

const blogs = [
  {
    title: "Curabitur Vulputate Erat Tellus Phasellus Facilisis Quam?",
    image: blog1,
    variant: "primary" as const,
  },
  {
    title: "Curabitur Vulputate Erat Tellus Phasellus Facilisis Quam?",
    image: blog2,
    variant: "secondary" as const,
  },
  {
    title: "Curabitur Vulputate Erat Tellus Phasellus Facilisis Quam?",
    image: blog3,
    variant: "muted" as const,
  },
];

const LatestNews = () => {
  useAOS(); // Initialize AOS

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <p
          className="text-primary font-semibold tracking-wider text-sm flex items-center gap-2 mb-3 sm:mb-4"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <span className="w-8 sm:w-12 h-0.5 bg-dotted "></span>
          OUR BLOG & NEWS
        </p>

        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 lg:mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Latest News
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group"
              data-aos="fade-up"
              data-aos-delay={index * 100 + 300}
            >
              <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden mb-4 sm:mb-6">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 leading-tight">
                {blog.title}
              </h3>

              <button className="flex items-center rounded-full bg-black/50 text-white font-medium px-4 py-2 sm:px-4 sm:py-2 text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:bg-primary   justify-center">
                <span className="pr-2">READ MORE</span>
                <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-black -mr-1">
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* View All Button - Centered */}
        {/* <div
          className="flex justify-center mt-8 sm:mt-12"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <button className="flex items-center rounded-full bg-primary text-white font-medium px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:bg-primary/90">
            <span className="pr-2">VIEW ALL NEWS</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default LatestNews;
