import { ChevronDown, ArrowRight } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import constructionSite from "@/assets/construction-site.jpg";

const faqs = [
  {
    question: "Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam?",
    answer: "Sed Aliquet Mi Orci, Porta Condimentum Nulla Accumsan Eget. Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam A Lorem Sollicitudin. Pellentesque Habitant Morbi Tristique Senectus Et Netus Et Malesuada Fames Ac Turpis Egestas. Sed Gravida Ac Turpis Sed Maximus.",
    isOpen: true,
  },
  {
    question: "Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam?",
    answer: "Sed Aliquet Mi Orci, Porta Condimentum Nulla Accumsan Eget. Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam A Lorem Sollicitudin.",
    isOpen: false,
  },
  {
    question: "Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam?",
    answer: "Sed Aliquet Mi Orci, Porta Condimentum Nulla Accumsan Eget. Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam A Lorem Sollicitudin.",
    isOpen: false,
  },
  {
    question: "Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam?",
    answer: "Sed Aliquet Mi Orci, Porta Condimentum Nulla Accumsan Eget. Curabitur Vulputate Erat Tellus. Phasellus Facilisis Quam A Lorem Sollicitudin.",
    isOpen: false,
  },
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Construction Site Image */}
          <div className="order-2 lg:order-1">
            <img 
              src={constructionSite} 
              alt="Construction site visualization" 
              className="w-full h-auto rounded-3xl shadow-2xl animate-fade-in"
            />
          </div>

          {/* FAQ Content */}
          <div className="order-1 lg:order-2">
            <p className="text-primary font-semibold tracking-wider text-sm flex items-center gap-2 mb-4">
              <span className="w-12 h-0.5 bg-primary"></span>
              WHO WE ARE
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Customers Ask Us</h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Collapsible
                  key={index}
                  open={openItems.includes(index)}
                  onOpenChange={() => toggleItem(index)}
                >
                  <div className="border-b border-border pb-4">
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-left group">
                      <span className="font-semibold text-lg pr-4">{faq.question}</span>
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        openItems.includes(index) 
                          ? 'bg-foreground text-background' 
                          : 'bg-primary text-primary-foreground'
                      }`}>
                        <ArrowRight className={`w-5 h-5 transition-transform ${
                          openItems.includes(index) ? 'rotate-90' : ''
                        }`} />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
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
