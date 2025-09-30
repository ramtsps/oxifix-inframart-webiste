import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ravi Krishnan",
    role: "CEO, R&J Constructions",
    quote: "Sed Aliquet Mi Orci, Porta Condimentum Nulla Accumsan Eget. Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam A Lorem Sollicitudin.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
];

const stats = [
  { number: "32", label: "Categories", color: "bg-muted" },
  { number: "1.2m", label: "Sq.Ft Of Showroom", color: "bg-muted" },
  { number: "12", label: "Locations", color: "bg-muted" },
  { number: "100", label: "Success Stories", color: "bg-muted" },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Testimonial */}
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-16 h-16 rounded-full border-4 border-background overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${1500000000000 + i * 10000000}?w=150&h=150&fit=crop`}
                    alt={`Customer ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Trusted By</p>
              <p className="font-semibold">Leading Infra Companies.</p>
            </div>
          </div>

          <div className="relative">
            <Quote className="w-12 h-12 text-primary mb-4" />
            <blockquote className="text-3xl md:text-4xl font-bold leading-relaxed mb-8">
              {testimonials[0].quote}
            </blockquote>
            <div>
              <p className="font-bold text-xl">{testimonials[0].name}</p>
              <p className="text-muted-foreground">{testimonials[0].role}</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`${stat.color} p-8 rounded-2xl hover-scale animate-fade-in relative`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 left-8 w-0.5 h-16 bg-foreground -translate-y-16">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-foreground rounded-full" />
              </div>
              <div className="text-5xl font-bold mb-2">
                {stat.number}
                <span className="text-primary">+</span>
              </div>
              <div className="text-lg font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
