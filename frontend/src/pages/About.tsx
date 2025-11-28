import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Check, Award, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import storeFront from "@/assets/store-front.jpg";
import aboutBg from "@/assets/about.jpg"
import showroom1 from "@/assets/welcome/pic3.jpg";
import showroom2 from "@/assets/welcome/pic2.jpg";
import appliances from "@/assets/welcome/pic1.jpg";
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
import MrMoovendan from "@/assets/profile-pic/Moovendan-2.jpg";



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
        backgroundImage={aboutBg}
        title="Build the Future"
        subtitle="Partner with Infra Mart to shape the next retail revolution in construction and home solutions."
        minHeight="min-h-[70vh]"
        overlayOpacity={0.6}
        animate={true}
      />
      <Welcome
        badgeText="WHO WE ARE"
        title="Renowned Global Builder & Innovator"
        description="Delivering cutting-edge solutions and world-class developments that shape the future."
        features={[
          { id: "1", text: "Innovating spaces that inspire and transform." },
          { id: "2", text: "Delivering excellence across the globe." },
          { id: "3", text: "Building a sustainable future for generations." },
        ]}
        testimonial={{
          quote:
            "Versatile Collaboration Options — Working One-on-One with Clients or Partnering with Organizations",
          name: "Mr. Moovendan Murugan",
          position: "Director",
          avatar:
            MrMoovendan,
        }}
        award={{
          icon: awardIcon,
          title: "We're A Global Award",
          subtitle: "winning  Company",
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
      {/* <Testimonials />
      <FAQ />
      <Brands /> */}

      <Footer />
    </div>
  );
};

export default About;
