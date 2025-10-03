import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import logo from "@/assets/logo.svg";
import point from "@/assets/menu-point.svg";
import sectionBg from "@/assets/sevices.png";
const Footer = () => {
  const quickLinks = [
    "Home",
    "About",
    "Products",
    "Locations",
    "Investors",

    "Contact",
  ];

  return (
    <footer className="bg-foreground text-background relative overflow-hidden ">
      {/* Marble texture overlay */}
      <div
        className="relative  bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${sectionBg})`,
        }}
      ></div>
      <div className="container mx-auto px-4 py-16 relative z-10 max-w-7xl ">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <img
              src={logo}
              alt="OXIFIX Infra Mart"
              className="h-12 mb-6 brightness-0 invert"
            />
            <p className="text-white leading-relaxed mb-6">
              Our clients, our employees, and our community through our
              commitment to leadership, excellence in craft, and attention to
              detail.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6  ">
              <span className="border-b-2 border-white pb-2">Quick Links</span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className="flex items-center gap-2 text-white hover:text-primary transition-colors group"
                  >
                    <img
                      src={point}
                      alt=""
                      className="w-4 h-4 hover:text-primary"
                    />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="border-b-2 border-white pb-2">Newsletter</span>
            </h3>
            <p className="text-white mb-6">
              Our clients, our employees, and our community through our
              commitment.
            </p>
            <div className="flex gap-2 flex-wrap">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 min-w-[250px] bg-white border-gray-300 text-black placeholder:text-gray-400 rounded-full py-5 px-6 h-16 focus:border-primary "
              />

              <button className="flex items-center rounded-full bg-primary text-white font-medium px-4 py-2 relative  hover-scale sm:px-5 sm:py-3 md:px-4 md:py-2">
                <span className="pr-2">SUBSCRIBE</span>
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-black -mr-1">
                  <ArrowRight className="w-4 h-4 text-white" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-4 md:py-8 bg-[#575757] text-center rounded-none md:rounded-full px-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
              {/* Copyright - Left side */}
              <p className="text-white/60 text-xs md:text-sm">
                COPYRIGHTS 2025. ALL RIGHTS ARE RESERVED.
              </p>

              {/* Links - Right side */}
              <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm">
                <a
                  href="/terms"
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </a>
                <span className="text-white/30 hidden md:block">|</span>
                <a
                  href="/privacy"
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
