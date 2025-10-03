import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Award, ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HeroSection from "@/components/HeroSection";
import storeFront from "@/assets/store-front.jpg";
import showroom1 from "@/assets/showroom-1.jpg";
import showroom2 from "@/assets/showroom-2.jpg";
import appliances from "@/assets/appliances.jpg";
import awardIcon from "@/assets/awards-icon.png";
import Welcome from "@/components/Welcome";
import { Link } from "react-router-dom";
import braGraph from "@/assets/graph.png";
import bottomBackgroundImage from "@/assets/bottom-image.png";
import topBackgroundImage from "@/assets/top.svg";
import WhyInframart from "@/components/WhyInframart";
import LeadershipSection from "@/components/LeadershipSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Brands from "@/components/Brands";
import WhoWeAre from "@/components/WhoWeAre";
import Locations from "@/components/Locations";
const LocationsPage = () => {
  const teamMembers = [
    {
      name: "Mr. Rajesh Kumar",
      position: "Founder & CEO",
      image: "/placeholder.svg",
    },
    {
      name: "Mr. Rajesh Kumar",
      position: "Founder & CEO",
      image: "/placeholder.svg",
    },
    {
      name: "Mr. Rajesh Kumar",
      position: "Founder & CEO",
      image: "/placeholder.svg",
    },
  ];

  const benefits = [
    "Innovation Eco Power Technologies",
    "Regularly Maintaining And Organizing Your Tools",
    "Regularly Organizing And Maintaining Your Tools",
  ];

  const faqs = [
    {
      question: "Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam?",
      answer:
        "Sed Aliquet Mi Orci, Porta Condimentum Nulla Accumsan Eget. Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam A Lorem Sollicitudin. Pellentesque Habitant Morbi Tristique Senectus Et Netus Et Malesuada Fames Ac Turpis Egestas. Sed Gravida Ac Turpis Sed Maximus.",
    },
    {
      question: "Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam?",
      answer:
        "Sed Aliquet Mi Orci, Porta Condimentum Nulla Accumsan Eget. Curabitur Vulputate Erat Tellus.",
    },
    {
      question: "Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam?",
      answer:
        "Sed Aliquet Mi Orci, Porta Condimentum Nulla Accumsan Eget. Curabitur Vulputate Erat Tellus.",
    },
    {
      question: "Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam?",
      answer:
        "Sed Aliquet Mi Orci, Porta Condimentum Nulla Accumsan Eget. Curabitur Vulputate Erat Tellus.",
    },
    {
      question: "Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam?",
      answer:
        "Sed Aliquet Mi Orci, Porta Condimentum Nulla Accumsan Eget. Curabitur Vulputate Erat Tellus.",
    },
  ];

  const brands = [
    { name: "WUTAMALAND", logo: "/placeholder.svg" },
    { name: "GORMLEY CONSTRUCTION", logo: "/placeholder.svg" },
    { name: "CONSTRUCTION", logo: "/placeholder.svg" },
    { name: "BRAND 4", logo: "/placeholder.svg" },
    { name: "BRAND 5", logo: "/placeholder.svg" },
    { name: "BRAND 6", logo: "/placeholder.svg" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <HeroSection
        backgroundImage={storeFront}
        title="Locations"
        subtitle=" We Sell Best in class Construction Materials at affordable price
            with a wide range of collections."
        minHeight="min-h-[80vh]"
        overlayOpacity={0.6}
        animate={true}
      />
      {/* Hero Section */}
      <Locations />

      <Testimonials />
      <FAQ />
      <Brands />

      <Footer />
    </div>
  );
};

export default LocationsPage;
