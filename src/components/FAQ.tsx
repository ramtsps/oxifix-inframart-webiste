import { ArrowRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import constructionSite from "@/assets/faq.png";
import top from "@/assets/top.svg";
import { useAOS } from "@/hooks/useAOS";

const faqs = [
  {
    question: "What types of products does Oxifix Inframart supply?",
    answer: "Oxifix Inframart offers a comprehensive range of construction and home improvement materials — including electricals, plumbing, sanitaryware, paints, tiles, hardware, tools, kitchen fittings, and appliances. We ensure all products meet industry standards and are sourced from trusted national and international brands.",
    isOpen: true,
  },
  {
    question: "Do you supply materials for both residential and commercial projects?",
    answer: "Yes. We cater to a wide client base — from individual homeowners and builders to large-scale infrastructure, commercial, and industrial projects.",
    isOpen: false,
  },
  {
    question: "How can I place an order or get a quotation?",
    answer: "You can connect with our sales team through the 'Contact Us' page, call our corporate office, or visit our nearest Oxifix Inframart location. Our representatives will assist you with quotations, bulk pricing, and delivery schedules.",
    isOpen: false,
  },
  {
    question: "Do you provide delivery and logistics support?",
    answer: "Yes. We have a well-structured logistics network across India to ensure timely and secure delivery of materials to all client locations.",
    isOpen: false,
  },
];
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  useAOS(); // Initialize AOS

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="pt-20 sm:pt-32 lg:pt-40 bg-[#F6F6F6] w-full relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute top-0 left-0 w-full h-5 sm:h-12  bg-cover bg-center bg-repeat-x animate-move-bg-l-r"
        style={{
          backgroundImage: `url(${top})`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Construction Site Image */}
          <div
            className="order-2 lg:order-1 flex justify-center items-center"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img
              src={constructionSite}
              alt="Construction site visualization"
              className="w-full h-auto max-w-xs sm:max-w-sm lg:max-w-md"
            />
          </div>

          {/* FAQ Content */}
          <div
            className="order-1 lg:order-2"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <p
              className="text-primary font-semibold tracking-wider text-sm flex items-center gap-2 mb-3 sm:mb-4"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <span className="w-8 sm:w-12 h-0.5 bg-primary"></span>
              WHO WE ARE
            </p>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Customers Ask Us
            </h2>

            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <Collapsible
                  key={index}
                  open={openIndex === index}
                  onOpenChange={() => toggleItem(index)}
                  className="bg-white px-4 sm:px-6 py-4 sm:py-5 rounded-2xl sm:rounded-3xl transition-all duration-300 ease-in-out hover:shadow-md border border-gray-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 100 + 300}
                >
                  <div>
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-left group">
                      <span className="font-semibold text-base sm:text-lg pr-2 transition-colors duration-200 group-hover:text-primary leading-relaxed">
                        {faq.question}
                      </span>
                      <div
                        className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out ${
                          openIndex === index
                            ? "bg-foreground text-background scale-105"
                            : "bg-primary text-primary-foreground group-hover:scale-105"
                        }`}
                      >
                        <ArrowRight
                          className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ease-in-out ${
                            openIndex === index ? "-rotate-45" : "rotate-45"
                          }`}
                        />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-3 sm:pt-4 overflow-hidden">
                      <div className="pb-1 sm:pb-2">
                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
