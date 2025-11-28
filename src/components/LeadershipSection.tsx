import React from "react";
import bottomBackgroundImage from "@/assets/bottom-image.png";
import MrMoovendan from "@/assets/profile-pic/Moovendan.jpg";
import MrBoopathi from "@/assets/profile-pic/Boopathi.jpg";
import MrPrabakaran from "@/assets/profile-pic/Prabakaran.png";
import MrsElavarasi from "@/assets/profile-pic/Elavarasi.jpg";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  animationDelay?: string;
}

interface LeadershipSectionProps {
  title?: string;
  subtitle?: string;
  topBackgroundImage?: string;
}

const teamMembers = [
  {
    name: "Mr. Moovendan Murugan",
    role: "Director",
    image: MrMoovendan,
  },
  {
    name: "Mr. Boopathi",
    role: "Director",
    image: MrBoopathi,
  },
  {
    name: "Mr. Prabakaran",
    role: "Director",
    image: MrPrabakaran,
  },
  {
    name: "Mrs. Elavarasi",
    role: "Director",
    image: MrsElavarasi,
  }
];

const LeadershipSection: React.FC<LeadershipSectionProps> = ({
  title = "Meet Our Leadership",
  subtitle = "···················· OUR CORE TEAM ··················",
  topBackgroundImage,
}) => {
  return (
    <section className="relative overflow-hidden min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[900px] py-12 sm:py-16 lg:py-20 bg-[#f4f4f5]">
      {/* Top Background */}
      {topBackgroundImage && (
        <div
          className="absolute top-0 left-0 w-full h-5 sm:h-12 bg-cover bg-center bg-repeat-x animate-move-bg-l-r"
          style={{
            backgroundImage: `url(${topBackgroundImage})`,
          }}
        />
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className="text-center mb-12 sm:mb-14 lg:mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className="text-primary font-semibold tracking-wider text-xs sm:text-sm mb-3 sm:mb-4">
            {subtitle}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            {title}
          </h2>
        </div>

        {/* Fixed Grid for Responsive Layout */}
        {/* Mobile: 1 card, Tablet: 2 cards, Desktop: 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              animationDelay={`${(index + 1) * 100}`}
            />
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 bg-cover bg-center bg-repeat-x animate-move-bg-l-r"
        style={{ backgroundImage: `url(${bottomBackgroundImage})` }}
      />
    </section>
  );
};

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  animationDelay?: string | number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  image,
  animationDelay = 100,
}) => {
  return (
    <div
      className="group flex flex-col h-full"
      data-aos="fade-up"
      data-aos-delay={animationDelay}
      data-aos-duration="400"
    >
      <div className="relative flex flex-col flex-1">
        {/* Image Container with Animated Border */}
        <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-2 mb-3 sm:mb-4 transition-all duration-300 ease-out relative flex-shrink-0">
          {/* Animated Border */}
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl z-0">
            <div className="absolute top-[-8px] sm:top-[-12px] lg:top-[-15px] right-[-8px] sm:right-[-12px] lg:right-[-15px] w-0 h-0 border-0 border-primary rounded-2xl sm:rounded-3xl transition-all duration-300 ease-out group-hover:w-[calc(100%+16px)] sm:group-hover:w-[calc(100%+24px)] lg:group-hover:w-[calc(100%+30px)] group-hover:h-[calc(100%+16px)] sm:group-hover:h-[calc(100%+24px)] lg:group-hover:h-[calc(100%+30px)] group-hover:border-2 sm:group-hover:border-3 lg:group-hover:border-4"></div>
          </div>

          {/* Image - Responsive height */}
          <img
            src={image}
            alt={name}
            className="w-full h-[280px] sm:h-[300px] md:h-[320px] lg:h-[340px] object-cover rounded-xl sm:rounded-2xl transition-transform duration-500 group-hover:scale-105 relative z-10"
          />
        </div>

        {/* Info Card - Improved responsive spacing */}
        <div className="bg-background rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 flex-1 flex flex-col justify-between -mt-16 relative z-20 mx-2 sm:mx-3 lg:mx-1 transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-lg">
          <div className="relative z-10 flex-1 flex flex-col">
            <h3 className="font-bold text-base sm:text-lg lg:text-lg mb-1 sm:mb-2 transition-colors duration-300 group-hover:text-primary leading-tight break-words">
              {name}
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg transition-colors duration-300 group-hover:text-foreground leading-relaxed break-words">
              {role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipSection;