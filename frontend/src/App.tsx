import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Investors from "./pages/Investors";
import Contact from "./pages/Contact";
import LocationsPage from "./pages/LocationsPage";
import Products from "./pages/Products";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import { useAOS } from "@/hooks/useAOS";

const queryClient = new QueryClient();

// Page metadata configuration
const pageMetadata = {
  "/": {
    title:
      "OXIFIX INFRAMART - Premium Construction Materials & Infrastructure Solutions",
    description:
      "Leading provider of high-quality construction materials, infrastructure solutions, and building products. Get premium materials with on-time delivery and expert support.",
  },
  "/about": {
    title: "About Us - OXIFIX INFRAMART | Our Story & Mission",
    description:
      "Learn about OXIFIX INFRAMART's journey, mission, and commitment to quality construction materials and infrastructure development.",
  },
  "/products": {
    title: "Products - OXIFIX INFRAMART | Construction Materials & Supplies",
    description:
      "Explore our wide range of premium construction materials, building supplies, and infrastructure products. Quality guaranteed with expert support.",
  },
  "/investors": {
    title: "Investors - OXIFIX INFRAMART | Investment Opportunities",
    description:
      "Discover investment opportunities with OXIFIX INFRAMART. Join us in building the future of infrastructure and construction materials.",
  },
  "/contact": {
    title: "Contact Us - OXIFIX INFRAMART | Get in Touch",
    description:
      "Get in touch with OXIFIX INFRAMART for construction materials, quotes, and expert support. We're here to help with your infrastructure needs.",
  },
  "/locations": {
    title: "Locations - OXIFIX INFRAMART | Find Our Offices",
    description:
      "Find OXIFIX INFRAMART offices and locations. Visit us for premium construction materials and infrastructure solutions near you.",
  },
  "/terms": {
    title: "Terms of Service - OXIFIX INFRAMART",
    description:
      "Read OXIFIX INFRAMART's Terms of Service. Understand your rights and obligations when using our construction materials and infrastructure services.",
  },
  "/privacy": {
    title: "Privacy Policy - OXIFIX INFRAMART",
    description:
      "OXIFIX INFRAMART's Privacy Policy. Learn how we collect, use, and protect your personal information and data.",
  },
  "*": {
    title: "Page Not Found - OXIFIX INFRAMART",
    description:
      "The page you are looking for doesn't exist. Return to OXIFIX INFRAMART homepage for construction materials and infrastructure solutions.",
  },
};

const App = () => {
  const ScrollToTopWrapper = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();

    useLayoutEffect(() => {
      // Scroll to the top of the page when the route changes
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });

      // Update page title and description based on route
      const metadata =
        pageMetadata[location.pathname as keyof typeof pageMetadata] ||
        pageMetadata["*"];

      // Update document title
      document.title = metadata.title;

      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.setAttribute("name", "description");
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute("content", metadata.description);

      // Update Open Graph tags for social media sharing
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement("meta");
        ogTitle.setAttribute("property", "og:title");
        document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute("content", metadata.title);

      let ogDescription = document.querySelector(
        'meta[property="og:description"]'
      );
      if (!ogDescription) {
        ogDescription = document.createElement("meta");
        ogDescription.setAttribute("property", "og:description");
        document.head.appendChild(ogDescription);
      }
      ogDescription.setAttribute("content", metadata.description);
    }, [location.pathname]);

    return <>{children}</>;
  };

  useAOS();
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTopWrapper>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/investors" element={<Investors />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/locations" element={<LocationsPage />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ScrollToTopWrapper>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
