import React from "react";
import { useAOS } from "@/hooks/useAOS";
import { MapPin, TrendingUp, Target, Rocket, Store, Users, Award, BarChart } from "lucide-react";
import topBackgroundImage from "@/assets/top.svg";
interface GrowthPhase {
    phase: string;
    title: string;
    stores: string;
    revenue: string;
    description: string;
    timeline: string;
    highlight?: boolean;
    icon?: React.ReactNode;
    regions?: string;
}

interface GrowthStrategySectionProps {
    title?: string;
    subtitle?: string;
    phases?: GrowthPhase[];
}

const GrowthStrategySection: React.FC<GrowthStrategySectionProps> = ({
    title = "Our Visionary Expansion Blueprint",
    subtitle = "A carefully crafted multi-phase journey from regional dominance to national leadership in India's retail infrastructure landscape", phases = [
        {
            phase: "Phase 1",
            title: "Regional Stronghold",
            stores: "10 Stores",
            revenue: "₹100 Crore",
            description: "Establish stores across southern states, targeting deep market penetration and building brand recognition in key initial markets.",
            timeline: "Year 1-2",
            regions: "Southern States",
            highlight: false,
            icon: <MapPin className="w-6 h-6" />
        },
        {
            phase: "Phase 2",
            title: "Accelerated Expansion & IPO Readiness",
            stores: "100 Stores",
            revenue: "₹550 Crore",
            description: "Expand to stores across multiple regions, projecting significant annual revenue. This phase is critical, as we aim for an IPO Listing within 2-3 years.",
            timeline: "Year 2-3",
            regions: "Multiple Regions",
            highlight: false,
            icon: <TrendingUp className="w-6 h-6" />
        },
        {
            phase: "Phase 3",
            title: "National Dominance",
            stores: "1000 Stores",
            revenue: "₹6000 Crore",
            description: "Achieve a complete national footprint, solidifying Infra Mart as a household name in retail and construction supplies across Pan-India.",
            timeline: "Year 4-5",
            regions: "Pan-India",
            highlight: false,
            icon: <Target className="w-6 h-6" />
        }
    ]
}) => {
    useAOS();

    const growthMetrics = [
        { value: "1000+", label: "Stores Target", icon: <Store className="w-5 h-5" /> },
        { value: "₹6000+ Crore", label: "Revenue Target", icon: <BarChart className="w-5 h-5" /> }, // Updated here
        { value: "10M+", label: "Customers Served", icon: <Users className="w-5 h-5" /> },
        { value: "IPO", label: "Exit Strategy", icon: <Award className="w-5 h-5" /> }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-primary/5 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-primary/5 to-transparent"></div>

            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 right-10 w-32 h-32 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary rounded-full animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
                {/* Header Section */}
                <div className="text-center mb-8 sm:mb-10">
                    <div
                        className="text-primary inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <span className="w-8 lg:w-12 h-0.5 bg-white bg-dotted"></span>
                        GROWTH STRATEGY
                        <span className="w-8 lg:w-12 h-0.5 bg-white bg-dotted"></span>
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

                {/* Growth Metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {growthMetrics.map((metric, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/20"
                            data-aos="fade-up"
                            data-aos-delay={index * 100 + 250}
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4">
                                <div className="text-primary">
                                    {metric.icon}
                                </div>
                            </div>
                            <div className="text-2xl font-bold text-foreground mb-2">
                                {metric.value}
                            </div>
                            <div className="text-sm text-muted-foreground">
                                {metric.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Growth Timeline */}
                <div className="relative">
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                    {/* Phases Container */}
                    <div className="grid lg:grid-cols-3 gap-6 relative">
                        {phases.map((phase, index) => (
                            <div
                                key={index}
                                className="group"
                                data-aos="fade-up"
                                data-aos-delay={index * 150 + 300}
                            >
                                <div className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 h-full flex flex-col min-h-[400px] ${phase.highlight
                                    ? 'border-primary bg-gradient-to-br from-primary/5 to-primary/10'
                                    : 'border-gray-100 bg-white hover:border-primary/50'
                                    }`}>

                                    {/* Header */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={`p-3 rounded-xl transition-colors duration-300 ${phase.highlight
                                            ? 'bg-primary text-white'
                                            : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'
                                            }`}>
                                            {phase.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full transition-colors duration-300 ${phase.highlight
                                                ? 'bg-primary text-white'
                                                : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'
                                                }`}>
                                                <span className="w-2 h-2 bg-current rounded-full"></span>
                                                <span className="font-bold text-sm">{phase.phase}</span>
                                            </div>
                                            <p className={`font-semibold text-sm mt-1 transition-colors duration-300 ${phase.highlight ? 'text-primary' : 'text-primary group-hover:text-primary/90'
                                                }`}>
                                                {phase.timeline}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${phase.highlight
                                        ? 'text-primary'
                                        : 'text-foreground group-hover:text-primary'
                                        }`}>
                                        {phase.title}
                                    </h3>

                                    {/* Region */}
                                    <div className="flex items-center gap-2 mb-4">
                                        <MapPin className={`w-4 h-4 transition-colors duration-300 ${phase.highlight ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
                                            }`} />
                                        <span className={`text-sm transition-colors duration-300 ${phase.highlight ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
                                            }`}>
                                            {phase.regions}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className={`text-sm leading-relaxed mb-6 flex-1 transition-colors duration-300 ${phase.highlight
                                        ? 'text-foreground'
                                        : 'text-muted-foreground group-hover:text-foreground'
                                        }`}>
                                        {phase.description}
                                    </p>

                                    {/* Metrics */}
                                    <div className="space-y-3">
                                        <div className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${phase.highlight
                                            ? 'bg-primary/10 border border-primary/20'
                                            : 'bg-gray-50 group-hover:bg-primary/10 group-hover:border group-hover:border-primary/20'
                                            }`}>
                                            <div className="flex items-center gap-2">
                                                <Store className={`w-4 h-4 transition-colors duration-300 ${phase.highlight ? 'text-primary' : 'text-primary group-hover:text-primary'
                                                    }`} />
                                                <span className={`text-sm transition-colors duration-300 ${phase.highlight ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'
                                                    }`}>
                                                    Stores
                                                </span>
                                            </div>
                                            <span className={`font-bold transition-colors duration-300 ${phase.highlight ? 'text-primary' : 'text-foreground group-hover:text-primary'
                                                }`}>
                                                {phase.stores}
                                            </span>
                                        </div>
                                        <div className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${phase.highlight
                                            ? 'bg-primary/10 border border-primary/20'
                                            : 'bg-gray-50 group-hover:bg-primary/10 group-hover:border group-hover:border-primary/20'
                                            }`}>
                                            <div className="flex items-center gap-2">
                                                <TrendingUp className={`w-4 h-4 transition-colors duration-300 ${phase.highlight ? 'text-primary' : 'text-primary group-hover:text-primary'
                                                    }`} />
                                                <span className={`text-sm transition-colors duration-300 ${phase.highlight ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'
                                                    }`}>
                                                    Revenue
                                                </span>
                                            </div>
                                            <span className={`font-bold transition-colors duration-300 ${phase.highlight ? 'text-primary' : 'text-foreground group-hover:text-primary'
                                                }`}>
                                                {phase.revenue}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Highlight Badge */}
                                    {phase.highlight && (
                                        <div className="mt-4 flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 border border-yellow-500 px-3 py-2 rounded-lg shadow-sm">
                                            <Rocket className="w-4 h-4 text-white" />
                                            <span className="text-white font-semibold text-sm">IPO Phase</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>



                {/* Market Leadership Section */}


                {/* Investment Highlights */}
                <div className="mt-16 grid md:grid-cols-2 gap-8">
                    <div
                        className="bg-white rounded-2xl p-6 border border-gray-100 shadow-2xl shadow-primary/20 hover:shadow-3xl hover:shadow-primary/25 transition-all duration-500"
                        data-aos="fade-right"
                        data-aos-delay="700"
                    >
                        <h4 className="text-xl font-bold text-foreground mb-4">Why This Strategy Works</h4>
                        <ul className="space-y-3 text-muted-foreground">
                            <li className="flex items-center gap-3 group">
                                <div className="w-2 h-2 bg-primary rounded-full shadow-sm"></div>
                                <span className="group-hover:text-foreground transition-colors duration-300">Phased approach ensures sustainable growth</span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <div className="w-2 h-2 bg-primary rounded-full shadow-sm"></div>
                                <span className="group-hover:text-foreground transition-colors duration-300">Regional focus before national expansion</span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <div className="w-2 h-2 bg-primary rounded-full shadow-sm"></div>
                                <span className="group-hover:text-foreground transition-colors duration-300">Clear IPO exit strategy for early investors</span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <div className="w-2 h-2 bg-primary rounded-full shadow-sm"></div>
                                <span className="group-hover:text-foreground transition-colors duration-300">Proven business model with scalable operations</span>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="bg-white rounded-2xl p-6 border border-gray-100 shadow-2xl shadow-primary/20 hover:shadow-3xl hover:shadow-primary/25 transition-all duration-500"
                        data-aos="fade-left"
                        data-aos-delay="700"
                    >
                        <h4 className="text-xl font-bold text-foreground mb-4">Investor Benefits</h4>
                        <ul className="space-y-3 text-muted-foreground">
                            <li className="flex items-center gap-3 group">
                                <div className="w-2 h-2 bg-primary rounded-full shadow-sm"></div>
                                <span className="group-hover:text-foreground transition-colors duration-300">Early entry in rapidly expanding market</span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <div className="w-2 h-2 bg-primary rounded-full shadow-sm"></div>
                                <span className="group-hover:text-foreground transition-colors duration-300">Clear growth milestones and targets</span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <div className="w-2 h-2 bg-primary rounded-full shadow-sm"></div>
                                <span className="group-hover:text-foreground transition-colors duration-300">IPO liquidity event within 3-4 years</span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <div className="w-2 h-2 bg-primary rounded-full shadow-sm"></div>
                                <span className="group-hover:text-foreground transition-colors duration-300">Proven leadership with industry expertise</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div
                className="absolute bottom-0 left-0 w-full h-5 sm:h-12  bg-cover bg-center bg-repeat-x animate-move-bg-l-r"
                style={{
                    backgroundImage: `url(${topBackgroundImage})`,
                }}
            />

        </section>
    );
};

export default GrowthStrategySection;