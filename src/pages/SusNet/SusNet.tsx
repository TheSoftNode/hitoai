import { motion } from 'framer-motion';
import Image1 from '../../assets/Sunnet/SusNet_home1.jpg';
import Image2 from '../../assets/Sunnet/artificial-intelligence_15777267.png';
import Image3 from '../../assets/Sunnet/growth-report_5329415.png';
import Image4 from '../../assets/Sunnet/component_14459238.png';
import { useEffect } from 'react';

const SusNet = () =>
{
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6
            }
        }
    };

    const featureCardVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        },
        hover: {
            scale: 1.03,
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            transition: {
                duration: 0.3
            }
        }
    };

    useEffect(() =>
    {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-teal-50/90 to-teal-100">
            {/* Hero Section */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col md:flex-row items-center gap-8 py-16 px-4 md:px-12 lg:px-24"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="absolute top-24 right-8 inline-flex items-center space-x-2 bg-blue-500/50 text-white px-4 py-2 rounded-full z-10"
                >
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                    </span>
                    <span>Coming Soon</span>
                </motion.div>
                <motion.div
                    variants={itemVariants}
                    className="w-full md:w-1/2 space-y-6"
                >
                    <motion.h1
                        className="text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600"
                        animate={{ scale: [0.9, 1] }}
                        transition={{ duration: 0.5 }}
                    >
                        SUSNET™
                    </motion.h1>
                    <motion.h2
                        className="text-2xl lg:text-3xl font-semibold text-gray-700"
                        variants={itemVariants}
                    >
                        Empower Your Efficacy with SusNet
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-600 leading-relaxed"
                        variants={itemVariants}
                    >
                        SusNet is a cutting-edge solution that integrates advanced artificial intelligence with state-of-the-art hardware to provide a comprehensive energy management system.
                    </motion.p>
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 pt-4"
                    >
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                        >
                            Get Started
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all"
                        >
                            Learn More
                        </motion.button>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="w-full md:w-1/2"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    <img
                        src={Image1}
                        alt="SusNet Home"
                        className="rounded-2xl shadow-2xl w-full h-auto max-h-[450px] object-cover"
                    />
                </motion.div>
            </motion.div>

            {/* Features Section */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="py-16 px-4 md:px-12 lg:px-24 bg-white"
            >
                <motion.h2
                    className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600"
                    variants={itemVariants}
                >
                    Why Choose SusNet!
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div variants={itemVariants} className="space-y-6">
                        <p className="text-xl text-gray-700 leading-relaxed">
                            Choose SusNet™ for AI-powered, fully automated energy management, offering a comprehensive suite of solutions designed to revolutionize how businesses and households manage their energy consumption. Our cutting-edge technology combines real-time monitoring, predictive analytics, and intelligent automation to deliver unprecedented control over your energy usage.
                        </p>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            With SusNet™, you're not just getting an energy management system – you're investing in a future-proof solution that grows and adapts with your needs. Our platform leverages machine learning algorithms to continuously improve its performance, ensuring optimal energy efficiency while maintaining comfort and productivity.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        className="space-y-6"
                    >
                        {[
                            {
                                title: "Advanced AI Algorithm",
                                description: "SusNet™ employs sophisticated machine learning algorithms and neural networks to analyze patterns, predict usage trends, and automatically optimize your energy consumption in real-time. Our AI system adapts to your specific needs and preferences, ensuring maximum efficiency without compromising comfort.",
                                image: Image2
                            },
                            {
                                title: "Real-Time Optimization",
                                description: "Experience unprecedented control with our real-time optimization system. SusNet™ continuously monitors and adjusts energy usage through highly accurate IoT sensors, achieving 90% correlation accuracy in usage predictions. Our smart algorithms balance comfort, cost, and environmental impact, delivering optimal performance 24/7.",
                                image: Image3
                            },
                            {
                                title: "Easy Integration and Scalability",
                                description: "Designed with user-friendliness in mind, SusNet™ offers plug-and-play installation and an intuitive interface. Our system seamlessly integrates with existing infrastructure and can scale from single households to large commercial complexes. The user-friendly dashboard provides complete control and insights at your fingertips.",
                                image: Image4
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={featureCardVariants}
                                whileHover="hover"
                                className="bg-white border-2 border-gray-200 p-6 rounded-tl-3xl rounded-br-3xl shadow-lg flex gap-4"
                            >
                                <div className="w-1/4">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-auto rounded-lg"
                                    />
                                </div>
                                <div className="w-3/4">
                                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gradient-to-r from-teal-600 to-teal-700 py-16 px-4 md:px-12 lg:px-24"
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-3xl font-bold text-white text-center mb-12"
                >
                    Unlock Maximum Savings, Efficiency, and Sustainability
                </motion.h2>

                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                >
                    {[
                        { value: "50% - 60%", label: "Energy Cost Reduction" },
                        { value: "25%", label: "Enhance Energy Efficiency" },
                        { value: "Up to 15%", label: "Reduction in Carbon Emissions" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={featureCardVariants}
                            whileHover="hover"
                            className="bg-white rounded-xl p-8 text-center shadow-lg"
                        >
                            <h3 className="text-3xl font-bold text-green-600 mb-2">{stat.value}</h3>
                            <p className="text-gray-600">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Demo Request Section */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="py-16 px-4 md:px-12 lg:px-24 bg-white"
            >
                <motion.div
                    variants={itemVariants}
                    className="max-w-xl mx-auto text-center"
                >
                    <h2 className="text-3xl font-bold mb-8">Request a Demo</h2>
                    <motion.div
                        className="space-y-4"
                        variants={containerVariants}
                    >
                        <motion.input
                            variants={itemVariants}
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                        />
                        <motion.button
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full p-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
                        >
                            Request a Demo
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.div>

        </div>
    );
};

export default SusNet;