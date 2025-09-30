import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

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
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-primary font-semibold tracking-wider text-sm flex items-center gap-2 mb-4">
          <span className="w-12 h-0.5 bg-primary"></span>
          OUR BLOG & NEWS
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Latest News</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div 
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="rounded-3xl overflow-hidden mb-6">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-6 leading-tight">
                {blog.title}
              </h3>

              <Button 
                variant={blog.variant === "primary" ? "heroPrimary" : blog.variant === "secondary" ? "default" : "secondary"}
                size="lg"
                className="gap-2 rounded-full group-hover:scale-105 transition-transform"
              >
                READ MORE
                <div className={`${blog.variant === "primary" || blog.variant === "secondary" ? "bg-foreground" : "bg-primary"} rounded-full p-2`}>
                  <ArrowRight className={`w-4 h-4 ${blog.variant === "primary" || blog.variant === "secondary" ? "text-background" : "text-primary-foreground"}`} />
                </div>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
