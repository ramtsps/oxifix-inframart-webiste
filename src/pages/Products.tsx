import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Filter, ShoppingCart, ArrowRight, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import heroBg from "@/assets/hero-bg.jpg";
import constructionImg from "@/assets/construction.jpg";
import appliancesImg from "@/assets/appliances.jpg";
import storeFrontImg from "@/assets/store-front.jpg";
import constructionSiteImg from "@/assets/construction-site.jpg";
import HeroSection from "@/components/HeroSection";
import { Link } from "react-router-dom";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const categories = [
    "All",
    "Building Materials",
    "Electrical",
    "Plumbing",
    "Hardware",
    "Paints & Coatings",
    "Tools & Equipment",
  ];

  const products = [
    {
      id: 1,
      name: "Premium Cement",
      category: "Building Materials",
      price: "₹350",
      unit: "per bag",
      image: constructionImg,
      description: "High-quality cement for all construction needs",
      featured: true,
    },
    {
      id: 2,
      name: "Steel Bars TMT",
      category: "Building Materials",
      price: "₹52,000",
      unit: "per ton",
      image: constructionSiteImg,
      description: "Corrosion-resistant TMT bars for strength",
      featured: true,
    },
    {
      id: 3,
      name: "Electrical Wires",
      category: "Electrical",
      price: "₹2,500",
      unit: "per roll",
      image: appliancesImg,
      description: "Fire-resistant copper wiring solutions",
      featured: false,
    },
    {
      id: 4,
      name: "PVC Pipes",
      category: "Plumbing",
      price: "₹450",
      unit: "per piece",
      image: storeFrontImg,
      description: "Durable PVC pipes for water supply",
      featured: false,
    },
    {
      id: 5,
      name: "Door Hardware Kit",
      category: "Hardware",
      price: "₹1,200",
      unit: "per set",
      image: constructionImg,
      description: "Complete door fitting hardware set",
      featured: false,
    },
    {
      id: 6,
      name: "Premium Wall Paint",
      category: "Paints & Coatings",
      price: "₹3,500",
      unit: "per 20L",
      image: appliancesImg,
      description: "Weather-resistant exterior paint",
      featured: true,
    },
    {
      id: 7,
      name: "Power Drill Set",
      category: "Tools & Equipment",
      price: "₹8,500",
      unit: "per set",
      image: constructionSiteImg,
      description: "Professional cordless drill kit",
      featured: false,
    },
    {
      id: 8,
      name: "Ceramic Tiles",
      category: "Building Materials",
      price: "₹45",
      unit: "per sq.ft",
      image: storeFrontImg,
      description: "Designer vitrified floor tiles",
      featured: false,
    },
    {
      id: 9,
      name: "LED Panel Lights",
      category: "Electrical",
      price: "₹650",
      unit: "per piece",
      image: appliancesImg,
      description: "Energy-efficient LED lighting",
      featured: false,
    },
    {
      id: 10,
      name: "Bathroom Fittings",
      category: "Plumbing",
      price: "₹5,500",
      unit: "per set",
      image: constructionImg,
      description: "Premium chrome finish fittings",
      featured: true,
    },
    {
      id: 11,
      name: "Safety Equipment",
      category: "Tools & Equipment",
      price: "₹2,800",
      unit: "per set",
      image: constructionSiteImg,
      description: "Complete worker safety gear",
      featured: false,
    },
    {
      id: 12,
      name: "Waterproofing Solution",
      category: "Paints & Coatings",
      price: "₹4,200",
      unit: "per 20L",
      image: storeFrontImg,
      description: "Advanced waterproofing compound",
      featured: false,
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleProductClick = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <HeroSection
        backgroundImage={heroBg}
        title="Our Products"
        subtitle="Premium quality building materials and construction supplies for all your projects"
        minHeight="min-h-[80vh]"
        overlayOpacity={0.6}
        animate={true}
      />

      {/* Search and Filter Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products..."
                className="pl-12 h-12 bg-background"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
              <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <div className="flex gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    onClick={() => setSelectedCategory(category)}
                    className="whitespace-nowrap"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* All Products */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-0.5 bg-primary"></span>
              <h2 className="text-3xl md:text-4xl font-bold">
                {selectedCategory === "All" ? "All Products" : selectedCategory}
              </h2>
              <span className="text-muted-foreground">
                ({filteredProducts.length} items)
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full cursor-pointer"
                  onClick={() => handleProductClick(product)}
                >
                  <div className="relative overflow-hidden h-48 flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-4 flex flex-col flex-grow">
                    <div className="mb-1">
                      <span className="text-xs text-primary font-semibold tracking-wider">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2 flex-grow">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-3">
                      <div>
                        <span className="text-xl font-bold text-primary">
                          {product.price}
                        </span>
                        <span className="text-xs text-muted-foreground block">
                          {product.unit}
                        </span>
                      </div>
                      <Link to={`/contact`}>
                        <Button
                          size="sm"
                          className="gap-2 bg-primary text-white hover:bg-[#4bc483] hover:text-white transition-colors duration-300"
                        >
                          <ShoppingCart className="w-3 h-3" />
                          Inquire
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-2xl text-muted-foreground">
                  No products found matching your criteria
                </p>
                <Button
                  className="mt-6"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                >
                  Clear Filters
                </Button>
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

      {/* Product Detail Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <div className="grid md:grid-cols-2 gap-6">
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-lg h-64 md:h-full min-h-[300px]">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                {selectedProduct.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="flex flex-col">
                <DialogHeader className="mb-4">
                  <div className="mb-2">
                    <span className="text-xs text-primary font-semibold tracking-wider uppercase">
                      {selectedProduct.category}
                    </span>
                  </div>
                  <DialogTitle className="text-2xl md:text-3xl font-bold">
                    {selectedProduct.name}
                  </DialogTitle>
                  <DialogDescription className="text-base mt-2">
                    {selectedProduct.description}
                  </DialogDescription>
                </DialogHeader>

                {/* Price */}
                <div className="mb-6 p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary">
                      {selectedProduct.price}
                    </span>
                    <span className="text-muted-foreground">
                      {selectedProduct.unit}
                    </span>
                  </div>
                </div>

                {/* Product Specifications */}
                <div className="mb-6 space-y-3">
                  <h3 className="font-semibold text-lg">Specifications</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Category:</span>
                      <span className="font-medium">{selectedProduct.category}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Product ID:</span>
                      <span className="font-medium">#{selectedProduct.id.toString().padStart(4, '0')}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Availability:</span>
                      <span className="font-medium text-green-600">In Stock</span>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mb-6 p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> All prices are subject to change based on market conditions. 
                    Contact our sales team for bulk orders and special pricing.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-auto flex flex-col sm:flex-row gap-3">
                  <Link to="/contact" className="flex-1">
                    <Button className="w-full gap-2 bg-primary hover:bg-[#4bc483]">
                      <ShoppingCart className="w-4 h-4" />
                      Request Quote
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Products;
