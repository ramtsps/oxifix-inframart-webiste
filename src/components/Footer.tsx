import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";
import point from "@/assets/menu-point.svg";
import sectionBg from "@/assets/sevices.png";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // API Configuration from environment variables
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api/contact";
  const API_TOKEN = import.meta.env.VITE_API_TOKEN || "your-secret-api-token-here";
  const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  // reCAPTCHA handlers
  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
    if (error && error.includes("reCAPTCHA")) {
      setError("");
    }
  };

  const handleRecaptchaExpired = () => {
    setRecaptchaToken(null);
  };

  const handleRecaptchaError = () => {
    setRecaptchaToken(null);
    setError("reCAPTCHA verification failed. Please try again.");
  };

  const resetRecaptcha = () => {
    setRecaptchaToken(null);
    recaptchaRef.current?.reset();
  };

  const handleNewsletterSubmit = async () => {
    if (!email) {
      setError("Please enter your email address");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // reCAPTCHA validation
    if (!recaptchaToken) {
      setError("Please complete the reCAPTCHA verification");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      console.log("Newsletter submission - Environment Variables:", {
        API_URL: API_URL,
        API_TOKEN: API_TOKEN ? "Present" : "Missing",
        RECAPTCHA_SITE_KEY: RECAPTCHA_SITE_KEY ? "Present" : "Missing"
      });

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
          firstName: "Newsletter", // Required field
          lastName: "Subscriber",  // Required field
          email: email.trim(),
          phone: "Not provided",   // Required field
          message: "Newsletter subscription request", // Required field
          isNewsletter: true, // Flag to identify newsletter subscription
          recaptchaToken: recaptchaToken // Send recaptcha token to backend
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        // Reset reCAPTCHA on error
        resetRecaptcha();

        if (result.message?.includes("reCAPTCHA") || result.message?.includes("robot")) {
          throw new Error("reCAPTCHA verification failed. Please try again.");
        }

        throw new Error(result.message || `HTTP error! status: ${response.status}`);
      }

      if (result.success) {
        setNewsletterSuccess(true);
        setEmail("");
        resetRecaptcha();

        // Hide success after 5 seconds
        setTimeout(() => {
          setNewsletterSuccess(false);
        }, 5000);
      } else {
        resetRecaptcha();
        throw new Error(result.message || "Failed to subscribe");
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setError(
        error instanceof Error
          ? error.message
          : "There was an error subscribing. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Investors", path: "/investors" },
    { name: "Contact", path: "/contact" },
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
            <Link to="/">
              <img
                src={logo}
                alt="OXIFIX Infra Mart"
                className="h-12 mb-6 brightness-0 invert"
              />
            </Link>
            <p className="text-white leading-relaxed mb-6">
              Our customers, our partners, and our community benefit from our commitment to quality, reliability, and seamless service.We deliver excellence in every product, every installation, and every interaction.
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
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-white hover:text-primary transition-colors group"
                  >
                    <img
                      src={point}
                      alt=""
                      className="w-4 h-4 hover:text-primary"
                    />
                    {link.name}
                  </Link>
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
              Stay updated with the latest news and insights from Inframart.
            </p>

            {newsletterSuccess ? (
              // Success Message
              <div className="bg-primary text-white rounded-full p-4 text-center animate-pulse">
                <p className="font-semibold">Thank you for subscribing!</p>
                <p className="text-sm mt-1">Confirmation email sent to your inbox.</p>
              </div>
            ) : (
              // Newsletter Form
              <div className="space-y-3">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <div className="flex gap-2 flex-wrap">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    disabled={isSubmitting}
                    className="flex-1 min-w-[250px] bg-white border-gray-300 text-black placeholder:text-gray-400 rounded-full py-5 px-6 h-16 focus:border-primary disabled:opacity-50"
                  />
                  <div className="">
                    <div className="flex justify-start">
                      <div className="scale-75 transform origin-left"> {/* Scale to 75% */}
                        <ReCAPTCHA
                          ref={recaptchaRef}
                          sitekey={RECAPTCHA_SITE_KEY}
                          onChange={handleRecaptchaChange}
                          onExpired={handleRecaptchaExpired}
                          onErrored={handleRecaptchaError}
                          theme="light"
                          size="normal"
                        />
                      </div>
                    </div>
                    {!recaptchaToken && email && (
                      <p className="text-xs text-amber-600 text-left mt-2">
                        Please complete the reCAPTCHA verification
                      </p>
                    )}
                  </div>
                  <button
                    onClick={handleNewsletterSubmit}
                    disabled={isSubmitting || !recaptchaToken}
                    className="flex items-center rounded-full bg-primary text-white font-medium px-4 py-2 relative hover-scale sm:px-5 sm:py-3 md:px-4 md:py-2 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <span className="pr-2">
                      {isSubmitting ? "SUBSCRIBING..." : "SUBSCRIBE"}
                    </span>
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-black -mr-1">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </span>
                  </button>
                </div>

                {/* reCAPTCHA Section for Newsletter */}

              </div>
            )}
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
                <Link
                  to="/terms"
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </Link>
                <span className="text-white/30 hidden md:block">|</span>
                <Link
                  to="/privacy"
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;