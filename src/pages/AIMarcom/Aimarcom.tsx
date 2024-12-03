import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import
    {
        Sparkles,
        BrainCircuit,
        Target,
        Rocket,
        Settings,
        Users,
        ChartBar,
        ArrowRight,
        Lock
    } from 'lucide-react';

const Aimarcom = () =>
{
    const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

    useEffect(() =>
    {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            icon: Target,
            title: 'Precision Targeting',
            description: 'Leverage AI-driven insights to reach your ideal audience with personalized messaging.'
        },
        {
            icon: BrainCircuit,
            title: 'Smart Automation',
            description: 'Streamline marketing workflows with intelligent automation and predictive analytics.'
        },
        {
            icon: Users,
            title: 'Customer Engagement',
            description: 'Build meaningful relationships through AI-powered personalization and interactions.'
        },
        {
            icon: ChartBar,
            title: 'Advanced Analytics',
            description: 'Gain deep insights into campaign performance with real-time data analysis.'
        },
        {
            icon: Lock,
            title: 'Enterprise Security',
            description: 'Protect your data with enterprise-grade security and compliance measures.'
        },
        {
            icon: Settings,
            title: 'Custom Integration',
            description: 'Seamlessly integrate with your existing marketing technology stack.'
        }
    ];

    const solutions = [
        {
            title: 'Marketing Automation',
            description: 'Automate repetitive tasks and campaign workflows',
            color: 'from-blue-500 to-indigo-600'
        },
        {
            title: 'Predictive Analytics',
            description: 'Forecast trends and optimize campaign performance',
            color: 'from-purple-500 to-pink-600'
        },
        {
            title: 'Customer Segmentation',
            description: 'Target audiences with precision and relevance',
            color: 'from-emerald-500 to-teal-600'
        },
        {
            title: 'Content Optimization',
            description: 'AI-powered content recommendations and optimization',
            color: 'from-orange-500 to-red-600'
        }
    ];

    return (
        <div className="bg-gray-950">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gray-950">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10"></div>

                    {/* Animated Elements */}
                    <div className="absolute inset-0">
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 45, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute top-40 right-1/4 w-16 h-16 border border-blue-500/30 transform rotate-45"
                        />

                        <motion.div
                            animate={{
                                y: [0, 20, 0],
                                rotate: [0, -45, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute bottom-40 left-1/4 w-12 h-12 border border-purple-500/30 transform -rotate-45"
                        />
                    </div>
                </div>

                {/* Hero Content */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center space-y-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>AI-Powered Marketing Revolution</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-5xl sm:text-6xl md:text-8xl font-bold"
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">
                                AIMARCOM
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                        >
                            Transform your marketing strategy with AI-powered automation, personalization, and predictive analytics. AIMARCOM delivers cutting-edge solutions for modern marketing challenges.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all flex items-center space-x-2 transform hover:-translate-y-1">
                                <span>Get Started</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 bg-gray-800/50 text-white rounded-lg font-semibold hover:bg-gray-700/50 transition-all backdrop-blur-sm border border-white/10 transform hover:-translate-y-1">
                                Watch Demo
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="relative py-24 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Powerful Features
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Discover how AIMARCOM is revolutionizing digital marketing through advanced AI technology
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 bg-gray-800 rounded-xl hover:bg-gray-750 transition-all group cursor-pointer border border-gray-700"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                                    <feature.icon className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Solutions Section */}
            <div className="relative py-24 bg-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Marketing Solutions
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Comprehensive AI-powered solutions for modern marketing challenges
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onMouseEnter={() => setHoveredFeature(index)}
                                onMouseLeave={() => setHoveredFeature(null)}
                                className="relative p-6 rounded-xl overflow-hidden group cursor-pointer"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                                <div className="absolute inset-0 bg-gray-800 -z-10"></div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-semibold text-white mb-2">{solution.title}</h3>
                                    <p className="text-gray-400 group-hover:text-white/90 transition-colors">{solution.description}</p>
                                    <div className={`h-1 w-12 bg-gradient-to-r ${solution.color} mt-4 transition-all duration-300 ${hoveredFeature === index ? 'w-full' : 'w-12'}`}></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-8"
                    >
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 px-4 py-2 rounded-full">
                            <Rocket className="w-4 h-4" />
                            <span>Start Your Journey</span>
                        </div>

                        <h2 className="text-4xl font-bold text-white">
                            Transform Your Marketing Strategy
                        </h2>

                        <div className="bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700">
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                    />
                                </div>
                                <button className="w-full p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all flex items-center justify-center space-x-2">
                                    <span>Request Demo</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Aimarcom;