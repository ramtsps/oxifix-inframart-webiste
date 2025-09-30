import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.svg";

const Navigation = () => {
  const navItems = ["HOME", "ABOUT", "PRODUCTS", "LOCATIONS", "INVESTORS", "BLOG"];

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
                              (item === "INVESTORS" && window.location.pathname === "/investors");
              
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

          <Button variant="heroPrimary" size="default" className="gap-2">
            CONTACT US
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
