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
import NotFound from "./pages/NotFound";
import { useAOS } from "@/hooks/useAOS";
const queryClient = new QueryClient();

const App = () => {
  const ScrollToTopWrapper = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();

    useLayoutEffect(() => {
      // Scroll to the top of the page when the route changes
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
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
