import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import Locations from "@/components/Locations";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Brands from "@/components/Brands";
import LatestNews from "@/components/LatestNews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen ">
      <Navigation />
      <Hero />
      <Locations />
      <WhoWeAre />
      <Testimonials />
      <FAQ />
      <Brands />
      {/* <LatestNews /> */}
      <Footer />
    </div>
  );
};

export default Index;
