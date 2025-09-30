import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.svg";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ["HOME", "ABOUT", "PRODUCTS", "LOCATIONS", "INVESTORS", "BLOG", "CONTACT"];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="bg-background/95 backdrop-blur-md rounded-full shadow-xl border border-border px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-8" />
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => {
              const href = item === "HOME" ? "/" : `/${item.toLowerCase()}`;
              const isActive = (item === "HOME" && window.location.pathname === "/") || 
                              (item === "ABOUT" && window.location.pathname === "/about") ||
                              (item === "INVESTORS" && window.location.pathname === "/investors") ||
                              (item === "CONTACT" && window.location.pathname === "/contact");
              
              return (
                <a
                  key={item}
                  href={href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
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
            <Button variant="heroPrimary" size="default" className="gap-2">
              CONTACT US
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-1/2 -translate-x-1/2 w-[95%] max-w-7xl bg-background/95 backdrop-blur-md rounded-2xl shadow-xl border border-border mt-2 py-6 px-8">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const href = item === "HOME" ? "/" : `/${item.toLowerCase()}`;
              const isActive = (item === "HOME" && window.location.pathname === "/") || 
                              (item === "ABOUT" && window.location.pathname === "/about") ||
                              (item === "INVESTORS" && window.location.pathname === "/investors") ||
                              (item === "CONTACT" && window.location.pathname === "/contact");
              
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
              <Button 
                variant="heroPrimary" 
                size="default" 
                className="w-full gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACT US
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
