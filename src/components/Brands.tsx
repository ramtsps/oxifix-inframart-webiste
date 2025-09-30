const brands = [
  { name: "Wutama Land", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
  { name: "Mountain Construction", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
  { name: "Hexagon Build", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
  { name: "Premier Builders", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
  { name: "Gormley Construction", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
  { name: "Urban Towers", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
];

const Brands = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Brands We Deal With
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="bg-background p-6 rounded-2xl flex items-center justify-center hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-muted/50 rounded-lg flex items-center justify-center mb-2">
                  <svg className="w-12 h-12 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  </svg>
                </div>
                <p className="text-xs font-medium text-muted-foreground">{brand.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Scrolling Banner */}
        <div className="mt-20 bg-primary text-primary-foreground overflow-hidden">
          <div className="animate-marquee whitespace-nowrap py-6 flex items-center gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-8">
                <span className="text-2xl font-bold">HIGH-QUALITY PRODUCTS</span>
                <span className="text-2xl">★</span>
                <span className="text-2xl font-bold">ONTIME DELIVERY</span>
                <span className="text-2xl">★</span>
                <span className="text-2xl font-bold">AFTER SALE SUPPORT</span>
                <span className="text-2xl">★</span>
                <span className="text-2xl font-bold">INSTALLATION</span>
                <span className="text-2xl">★</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
