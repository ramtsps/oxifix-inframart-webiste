import React from "react";
import { useAOS } from "@/hooks/useAOS";
import { TrendingUp, Target, PieChart, Map, Award, Users, Building2, Rocket } from "lucide-react";

interface MarketSegment {
    segment: string;
    size: string;
    growth: string;
    description: string;
}

interface CompetitiveAdvantage {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface MarketOpportunitySectionProps {
    title?: string;
    subtitle?: string;
    marketSegments?: MarketSegment[];
    advantages?: CompetitiveAdvantage[];
}

const MarketOpportunitySection: React.FC<MarketOpportunitySectionProps> = ({
    title = "Massive Market Opportunity",
    subtitle = "Positioned to capture significant share in India's rapidly growing construction retail market",
    marketSegments = [
        {
            segment: "Residential Construction",
            size: "₹15,000 Crore",
            growth: "12% CAGR",
            description: "Rising urbanization and housing demand driving growth"
        },
        {
            segment: "Commercial & Infrastructure",
            size: "₹12,000 Crore",
            growth: "15% CAGR",
            description: "Government initiatives and private investments"
        },
        {
            segment: "Home Improvement & Renovation",
            size: "₹8,000 Crore",
            growth: "18% CAGR",
            description: "Increasing disposable income and lifestyle upgrades"
        }
    ],
    advantages = [
        {
            icon: <Building2 className="w-6 h-6" />,
            title: "Omni-Channel Presence",
            description: "Combining physical retail with digital platform for maximum reach"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Customer-Centric Approach",
            description: "Focus on service quality and customer satisfaction"
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: "Premium Brand Portfolio",
            description: "Exclusive partnerships with 48+ leading brands"
        },
        {
            icon: <Rocket className="w-6 h-6" />,
            title: "Technology Integration",
            description: "Digital platforms enhancing customer experience"
        }
    ]
}) => {
    useAOS();

    const marketStats = [
        { value: "₹35,000+", label: "Total Addressable Market", icon: <PieChart className="w-5 h-5" /> },
        { value: "15%", label: "Annual Market Growth", icon: <TrendingUp className="w-5 h-5" /> },
        { value: "<5%", label: "Organized Retail Penetration", icon: <Map className="w-5 h-5" /> },
        { value: "3x", label: "Growth Potential", icon: <Target className="w-5 h-5" /> }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                            MARKET INSIGHTS
                        </span>
                    </div>
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
                        data-aos="fade-up"
                        data-aos-delay="150"
                    >
                        {title}
                    </h2>
                    <p
                        className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        {subtitle}
                    </p>
                </div>

                {/* Market Statistics */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {marketStats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                            data-aos="fade-up"
                            data-aos-delay={index * 100 + 250}
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4">
                                <div className="text-primary">
                                    {stat.icon}
                                </div>
                            </div>
                            <div className="text-2xl font-bold text-foreground mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-muted-foreground">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Market Segments */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {marketSegments.map((segment, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/20"
                            data-aos="fade-up"
                            data-aos-delay={index * 100 + 350}
                        >
                            <h3 className="text-xl font-bold text-foreground mb-4">
                                {segment.segment}
                            </h3>
                            <div className="space-y-3 mb-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-muted-foreground">Market Size</span>
                                    <span className="font-semibold text-foreground">{segment.size}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-muted-foreground">Growth Rate</span>
                                    <span className="font-semibold text-green-600">{segment.growth}</span>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {segment.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Competitive Advantages */}
                <div
                    className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl p-8 sm:p-12 border border-primary/20"
                    data-aos="fade-up"
                    data-aos-delay="450"
                >
                    <div className="text-center mb-8">
                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                            Our Competitive Edge
                        </h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Differentiated positioning in a fragmented market through unique value propositions
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {advantages.map((advantage, index) => (
                            <div
                                key={index}
                                className="text-center group"
                                data-aos="fade-up"
                                data-aos-delay={index * 100 + 550}
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <div className="text-primary">
                                        {advantage.icon}
                                    </div>
                                </div>
                                <h4 className="font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                    {advantage.title}
                                </h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {advantage.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketOpportunitySection;