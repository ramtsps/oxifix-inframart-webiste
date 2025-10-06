import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Search, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import heroBg from "@/assets/hero-bg.jpg";
import hardwareImg from "@/assets/categories/hardware.jpg";
import electricalsImg from "@/assets/categories/electricals.jpg";
import lightsFansImg from "@/assets/categories/lights-fans.jpg";
import plywoodImg from "@/assets/categories/plywood.jpg";
import tilesImg from "@/assets/categories/tiles.jpg";
import sanitarywareImg from "@/assets/categories/sanitaryware.jpg";
import paintsImg from "@/assets/categories/paints.jpg";
import plumbingImg from "@/assets/categories/plumbing.jpg";
import toolsImg from "@/assets/categories/tools.jpg";
import appliancesImg from "@/assets/categories/appliances.jpg";
import kitchenImg from "@/assets/categories/kitchen.jpg";
import HeroSection from "@/components/HeroSection";
import { Link } from "react-router-dom";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      id: 1,
      name: "Hardware",
      image: hardwareImg,
      description: "Complete range of hardware tools and equipment",
    },
    {
      id: 2,
      name: "Electricals",
      image: electricalsImg,
      description: "Electrical wires, switches, and components",
    },
    {
      id: 3,
      name: "Lights & Fans",
      image: lightsFansImg,
      description: "Modern lighting solutions and ceiling fans",
    },
    {
      id: 4,
      name: "Plywood",
      image: plywoodImg,
      description: "Premium quality plywood and laminates",
    },
    {
      id: 5,
      name: "Tiles",
      image: tilesImg,
      description: "Designer floor and wall tiles collection",
    },
    {
      id: 6,
      name: "Sanitaryware",
      image: sanitarywareImg,
      description: "Modern bathroom fixtures and fittings",
    },
    {
      id: 7,
      name: "Paints",
      image: paintsImg,
      description: "Premium paints and coating solutions",
    },
    {
      id: 8,
      name: "Plumbing",
      image: plumbingImg,
      description: "Complete plumbing supplies and solutions",
    },
    {
      id: 9,
      name: "Tools",
      image: toolsImg,
      description: "Professional construction tools and equipment",
    },
    {
      id: 10,
      name: "Appliances",
      image: appliancesImg,
      description: "Home and kitchen appliances",
    },
    {
      id: 11,
      name: "Kitchen",
      image: kitchenImg,
      description: "Kitchen fixtures and fittings",
    },
  ];

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <HeroSection
        backgroundImage={heroBg}
        title="Product Categories"
        subtitle="Explore our comprehensive range of building materials and construction supplies"
        minHeight="min-h-[80vh]"
        overlayOpacity={0.6}
        animate={true}
      />

      {/* Search Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col items-center justify-center">
            {/* Search Bar */}
            <div className="relative w-full max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search categories..."
                className="pl-12 h-12 bg-background"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div>
             {/* <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Product Categories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Browse through our extensive collection of premium building materials and supplies
              </p>
            </div>*/}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 justify-items-center">
  {filteredCategories.map((category) => (
    <div
      key={category.id}
      className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] cursor-default aspect-square w-full max-w-[280px]"
    >
      <div className="absolute inset-0">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:via-black/60 group-hover:to-black/30"></div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
        <h3 className="text-3xl sm:text-xl md:text-3xl font-bold text-white mb-3 sm:mb-2 group-hover:translate-y-0 translate-y-3 transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
          {category.name}
        </h3>
        <p className="text-lg sm:text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] delay-75 max-h-0 group-hover:max-h-20 overflow-hidden transform translate-y-3 group-hover:translate-y-0">
          {category.description}
        </p>
      </div>
    </div>
  ))}
</div>

            {/* No Results */}
            {filteredCategories.length === 0 && (
              <div className="text-center py-20">
                <p className="text-2xl text-muted-foreground">
                  No categories found matching your search
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need Help Finding the Right Product?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our experts are ready to assist you in choosing the best materials
            for your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div
              className="flex justify-center px-4"
              data-aos="fade-up"
              data-aos-duration="100"
            >
              <Link to={"/contact"}>
                <button className="flex items-center rounded-full bg-white text-black font-medium px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base relative transition-transform duration-300 hover:scale-105 active:scale-95">
                  <span className="pr-2 sm:pr-3">CONTACT US</span>
                  <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary -mr-1">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
