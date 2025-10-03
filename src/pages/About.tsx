import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Check, Award, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import storeFront from "@/assets/store-front.jpg";
import showroom1 from "@/assets/showroom-1.jpg";
import showroom2 from "@/assets/showroom-2.jpg";
import appliances from "@/assets/appliances.jpg";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import HeroSection from "@/components/HeroSection";

import { useState } from "react";
import awardIcon from "@/assets/awards-icon.png";
import Welcome from "@/components/Welcome";
import topBackgroundImage from "@/assets/top.svg";
import LeadershipSection from "@/components/LeadershipSection";
import WhatWeBuild from "@/components/WhatWeBuild";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Brands from "@/components/Brands";

const testimonials = [
  {
    name: "Ravi Krishnan",
    role: "CEO, R&J Constructions",
    quote:
      "Sed Aliquet Mi Orci, Porta Condimentum Nulla Accumsan Eget. Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam A Lorem Sollicitudin.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
];

const stats = [
  { number: "32", label: "Categories" },
  { number: "1.2m", label: "Sq.Ft Of Showroom" },
  { number: "12", label: "Locations" },
  { number: "100", label: "Success Stories" },
];

const services = [
  {
    number: "01",
    title: "Building Construction",
    description:
      "Our solutions are designed to meet the needs of modern enterprises, ensuring they thrive in today's competitive online landscape. Enterprises, ensuring they thrive in today's competitive online landscape.",
  },
  {
    number: "02",
    title: "Building Construction",
    description:
      "Our solutions are designed to meet the needs of modern enterprises, ensuring they thrive in today's competitive online landscape. Enterprises, ensuring they thrive in today's competitive online landscape.",
  },
  {
    number: "03",
    title: "Building Construction",
    description:
      "Our solutions are designed to meet the needs of modern enterprises, ensuring they thrive in today's competitive online landscape. Enterprises, ensuring they thrive in today's competitive online landscape.",
  },
];

const teamMembers = [
  {
    name: "Mr. Rajesh Kumar",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
  },
  {
    name: "Mr. Rajesh Kumar",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
  },
  {
    name: "Mr. Rajesh Kumar",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
  },
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
      "Sed Aliquet Mi Orci, Porta Condimentum Nulla Accumsan Eget. Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam A Lorem Sollicitudin.",
  },
  {
    question: "Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam?",
    answer:
      "Sed Aliquet Mi Orci, Porta Condimentum Nulla Accumsan Eget. Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam A Lorem Sollicitudin.",
  },
  {
    question: "Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam?",
    answer:
      "Sed Aliquet Mi Orci, Porta Condimentum Nulla Accumsan Eget. Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam A Lorem Sollicitudin.",
  },
  {
    question: "Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam?",
    answer:
      "Sed Aliquet Mi Orci, Porta Condimentum Nulla Accumsan Eget. Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam A Lorem Sollicitudin.",
  },
];

const brandLogos = [
  "https://via.placeholder.com/120x60/e5e7eb/9ca3af?text=WUTAMA+LAND",
  "https://via.placeholder.com/120x60/e5e7eb/9ca3af?text=BRAND+2",
  "https://via.placeholder.com/120x60/e5e7eb/9ca3af?text=BRAND+3",
  "https://via.placeholder.com/120x60/e5e7eb/9ca3af?text=BRAND+4",
  "https://via.placeholder.com/120x60/e5e7eb/9ca3af?text=GORMLEY+CONSTRUCTION",
  "https://via.placeholder.com/120x60/e5e7eb/9ca3af?text=BRAND+6",
];

const About = () => {
  const [openFAQs, setOpenFAQs] = useState<number[]>([0]);

  const toggleFAQ = (index: number) => {
    setOpenFAQs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}

      <HeroSection
        backgroundImage={storeFront}
        title="About Us"
        subtitle="We Sell Best in class Construction Materials at affordable price with a wide range of collections."
        minHeight="min-h-[80vh]"
        overlayOpacity={0.6}
        animate={true}
      />
      <Welcome
        badgeText="WHO WE ARE"
        title="Leading Global Builder And Developer"
        description="Proin Porttitor Pharetra Interdum. Donec Erat Nibh, Cursus Non Interdum Ac, Fermentum."
        features={[
          { id: "1", text: "Innovation Eco Power Technologies" },
          { id: "2", text: "Regularly Maintaining And Organizing Your Tools" },
          { id: "3", text: "Regularly Organizing And Maintaining Your Tools" },
        ]}
        testimonial={{
          quote:
            "We Have Multiple Models Of Engagement: We Can Work Directly With Individuals For Private Residences, Partner.",
          name: "John Smith",
          position: "CEO & Founder",
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop",
        }}
        award={{
          icon: awardIcon,
          title: "We're A Global Award",
          subtitle: "wining Company",
        }}
        images={{
          main: showroom2,
          secondary: [showroom1, appliances],
        }}
      />
      <LeadershipSection
        title="Meet Our Leadership"
        subtitle="···················· OUR CORE TEAM ··················"
        topBackgroundImage={topBackgroundImage} // Pass the background image
      />
      <WhatWeBuild />
      <Testimonials />
      <FAQ />
      <Brands />

      <Footer />
    </div>
  );
};

export default About;
