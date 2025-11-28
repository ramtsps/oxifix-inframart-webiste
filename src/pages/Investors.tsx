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
import storeFront from "@/assets/investors.jpg";
import showroom1 from "@/assets/welcome/pic6.jpg";
import showroom2 from "@/assets/welcome/pic7.jpg";
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
import InvestorProposalSection from "@/components/InvestorProposalSection"; // Add this import
import GrowthStrategySection from "@/components/GrowthStrategySection"; // Add this import
import MrMoovendan from "@/assets/profile-pic/Moovendan-2.jpg";

const Investors = () => {
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
        title="Grow With Us"
        subtitle="For inquiries, proposals, or detailed investment information, connect with our dedicated Investor Relations team ready to assist and guide you."
        minHeight="min-h-[70vh]"
        overlayOpacity={0.6}
        animate={true}
      />

      {/* New Investor Proposal Section */}
      <InvestorProposalSection />

      {/* Why Inframart Section */}
      <WhyInframart />

      {/* New Growth Strategy Section */}
      <GrowthStrategySection />


      <Welcome
        badgeText="JOIN US"
        title="Partner with Us for Lasting Growth"
        description="At Inframart, we believe in creating value through sustainable growth and innovative projects. Join us as an investor to be part of our journey and benefit from our proven expertise and market presence."
        features={[
          { id: "1", text: "Invest in diverse projects with strong growth potential." },
          { id: "2", text: "Benefit from our track record of timely, successful deliveries." },
          { id: "3", text: "Stay informed with clear updates and open communication." },
        ]}
        testimonial={{
          quote:
            "Our CEO believes in creating shared value and sustainable growth. Join us to be part of Inframart's journey toward building a stronger, brighter future together.",
          name: "Mr. Moovendan Murugan",
          position: "Director",
          avatar:
            MrMoovendan,
        }}
        award={{
          icon: awardIcon,
          title: "We're A Global Award",
          subtitle: "winning Company",
        }}
        images={{
          main: showroom2,
          secondary: [showroom1, appliances],
        }}
      />

      {/* Leadership Section */}
      {/* <LeadershipSection
        title="Meet Our Leadership"
        subtitle="···················· OUR CORE TEAM ··················"
        topBackgroundImage={topBackgroundImage}
      /> */}

      {/* <Testimonials />
      <FAQ />
      <Brands /> */}

      <Footer />
    </div>
  );
};

export default Investors;
