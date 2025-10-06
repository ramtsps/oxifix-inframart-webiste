import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = ["HOME", "ABOUT", "PRODUCTS", "LOCATIONS", "INVESTORS"];

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg "
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto transition-all duration-300 ${
          isScrolled
            ? "w-full px-6 sm:px-8 lg:px-20 py-3" // Fixed: Consistent padding values
            : "w-[95%] max-w-7xl px-6 sm:px-8 py-4 mt-6 rounded-full bg-background/95 backdrop-blur-md shadow-xl border border-border"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-8 sm:h-10" />
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => {
              const href = item === "HOME" ? "/" : `/${item.toLowerCase()}`;
              const isActive =
                (item === "HOME" && window.location.pathname === "/") ||
                (item === "ABOUT" && window.location.pathname === "/about") ||
                (item === "PRODUCTS" &&
                  window.location.pathname === "/products") ||
                (item === "INVESTORS" &&
                  window.location.pathname === "/investors") ||
                (item === "CONTACT" &&
                  window.location.pathname === "/contact") ||
                (item === "LOCATIONS" &&
                  window.location.pathname === "/locations");

              return (
    <a
  key={item}
  href={href}
  className={`text-sm font-roboto  font-bold transition-colors hover:text-primary ${
    isActive ? "text-primary" : "text-foreground"
  }`}
>
  {item}
</a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>

          {/* Desktop Contact Button */}
          <div className="hidden lg:block">
            <Link to="/contact" className="block">
              <button className="flex items-center rounded-full bg-primary text-white font-medium px-4 py-2 relative hover:scale-105 transition-transform duration-200">
                <span className="pr-2">CONTACT US</span>
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-black -mr-1">
                  <ArrowRight className="w-4 h-4 text-white" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-xl border-b border-border py-6 px-6 sm:px-8 ${
            isScrolled ? "mt-0" : "mt-2"
          }`}
        >
          <div className="flex flex-col space-y-4 max-w-7xl mx-auto">
            {navItems.map((item) => {
              const href = item === "HOME" ? "/" : `/${item.toLowerCase()}`;
              const isActive =
                (item === "HOME" && window.location.pathname === "/") ||
                (item === "ABOUT" && window.location.pathname === "/about") ||
                (item === "PRODUCTS" &&
                  window.location.pathname === "/products") ||
                (item === "INVESTORS" &&
                  window.location.pathname === "/investors") ||
                (item === "CONTACT" &&
                  window.location.pathname === "/contact") ||
                (item === "LOCATIONS" &&
                  window.location.pathname === "/locations");

              return (
                <a
                  key={item}
                  href={href}
                  className={`text-sm font-medium py-3 px-4 rounded-lg transition-colors hover:bg-primary/10 ${
                    isActive ? "text-primary bg-primary/10" : "text-foreground"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              );
            })}
            <div className="pt-4 border-t border-border">
              <Link to="/contact" className="block">
                <button className="flex items-center justify-between rounded-full bg-primary text-white font-medium px-4 py-3  hover:scale-105 transition-transform duration-200 group">
                  <span className="pr-2 text-sm sm:text-base font-semibold">
                    CONTACT US
                  </span>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black group-hover:bg-gray-800 transition-colors duration-200 flex-shrink-0">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
