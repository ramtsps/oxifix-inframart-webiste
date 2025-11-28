import React from "react";
import { ArrowRight, Users, TrendingUp, Target, Shield, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useAOS } from "@/hooks/useAOS";

interface InvestorProposalSectionProps {
    title?: string;
    subtitle?: string;
    description?: string;
}

const InvestorProposalSection: React.FC<InvestorProposalSectionProps> = ({
    title = "Join India’s Fastest-Growing Retail Infrastructure Platform",
    subtitle = "Exclusive Founding Investor Opportunity",
    description = "Be part of our visionary journey to redefine construction and home solutions retail across India. We are offering limited founding investor positions in our rapidly expanding network.",
}) => {
    useAOS();

    const features = [
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Rapid Market Expansion",
            description: "Growing at 200% YoY with proven scalability across regions"
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: "Proven Track Record",
            description: "Consistent profitability and strong customer retention"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Premium Brand Portfolio",
            description: "Trusted partnerships with 48+ leading infrastructure brands"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Sustainable Growth Model",
            description: "Phased expansion with built-in risk management"
        }
    ];

    const performanceMetrics = [
        { metric: "Product Categories", value: "32+", description: "Comprehensive Range" },
        { metric: "Showroom Space", value: "13,000+", description: "Sq.Ft Across Locations" },
        { metric: "Customer Rating", value: "4.6★", description: "Google Reviews" },
        { metric: "Happy Customers", value: "1 Lakh+", description: "Served & Counting" }
    ];

    return (
        <section className="py-10 sm:py-16 lg:py-24 bg-gradient-to-br from-[#F6F6F6] to-[#E8E8E8] relative overflow-hidden">
            {/* Background Pattern matching your existing style */}
            <div className="absolute inset-0 overflow-hidden">



            </div>

            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Header Badge - Matching your existing badge style */}
                        <div
                            className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 "
                            data-aos="fade-right"
                            data-aos-delay="100"
                        >


                            <p className="text-primary font-normal tracking-wider text-sm flex items-center gap-2">
                                <span className="w-8 lg:w-12 h-0.5 bg-white bg-dotted"></span>   INVESTOR OPPORTUNITY

                            </p>
                        </div>

                        {/* Main Title */}
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
                            data-aos="fade-right"
                            data-aos-delay="150"
                        >
                            {title}
                        </h1>

                        {/* Subtitle */}
                        <h2
                            className="text-xl sm:text-2xl md:text-3xl text-primary font-semibold leading-relaxed"
                            data-aos="fade-right"
                            data-aos-delay="200"
                        >
                            {subtitle}
                        </h2>

                        {/* Description */}
                        <p
                            className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
                            data-aos="fade-right"
                            data-aos-delay="250"
                        >
                            {description}
                        </p>



                        {/* CTA Buttons - Matching your existing button style */}
                        <div
                            className="flex flex-col sm:flex-row gap-4"
                            data-aos="fade-right"
                            data-aos-delay="350"
                        >
                            <Link to="/contact" className="block">
                                <button className="flex items-center rounded-full bg-primary text-white font-medium px-4 py-2 sm:px-5 sm:py-3 transition-transform duration-200 hover:scale-105">
                                    <span className="pr-2">CONTACT US</span>
                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-black -mr-1">
                                        <ArrowRight className="w-4 h-4 text-white" />
                                    </span>
                                </button>
                            </Link>


                        </div>
                    </div>

                    {/* Right Content - Features Grid */}
                    <div className="space-y-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1"
                                data-aos="fade-left"
                                data-aos-delay={index * 100 + 200}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                        <div className="text-primary group-hover:text-white">
                                            {feature.icon}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Trust Indicators */}
                        {/* <div
                            className="p-6 bg-primary/5 rounded-2xl border border-primary/10"
                            data-aos="fade-left"
                            data-aos-delay="600"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Award className="w-5 h-5 text-primary" />
                                <h4 className="text-foreground font-bold text-lg">Why Partner With Us?</h4>
                            </div>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex items-center gap-3">
                                    <Star className="w-4 h-4 text-primary fill-primary" />
                                    <span>Global award-winning company with proven excellence</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Star className="w-4 h-4 text-primary fill-primary" />
                                    <span>20+ years of industry expertise and market knowledge</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Star className="w-4 h-4 text-primary fill-primary" />
                                    <span>Comprehensive product portfolio across 32+ categories</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Star className="w-4 h-4 text-primary fill-primary" />
                                    <span>Strong brand recognition and customer trust</span>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>

                {/* Bottom Trust Banner */}
                <div
                    className="mt-16 p-4 lg:p-8 bg-white rounded-3xl border-2 border-dashed border-primary/20 hover:border-primary/40 transition-all duration-500 group"
                    data-aos="fade-up"
                    data-aos-delay="700"
                >
                    <div className="text-center">
                        {/* Simple Elegant Icon */}
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/5 rounded-full border-2 border-primary/10 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-300 mb-6">
                            <Shield className="w-10 h-10 text-primary" />
                        </div>

                        {/* Clean Typography */}
                        <h3 className="text-3xl sm:text-4xl font-light text-foreground mb-4">
                            Trusted by <span className="font-bold text-primary">Industry Leaders</span>
                        </h3>

                        {/* Refined Description */}
                        <p className="text-xl text-muted-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Partner with excellence. Trusted by <span className="font-semibold text-foreground">48+ premium brands</span> and serving <span className="font-semibold text-foreground">1,00,000+ satisfied customers</span> nationwide.
                        </p>

                        {/* Minimal Stats */}
                        <div className="flex justify-center items-center gap-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary">48+</div>
                                <div className="text-sm uppercase tracking-widest text-muted-foreground mt-2">Brands</div>
                            </div>
                            <div className="w-px h-12 bg-primary/20"></div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary">1L+</div>
                                <div className="text-sm uppercase tracking-widest text-muted-foreground mt-2">Customers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InvestorProposalSection;