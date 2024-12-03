import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image2 from '../../assets/Secuall/web-cam_12078628.png';
import Image3 from '../../assets/Secuall/reliability_15441499.png';
import Image4 from '../../assets/Secuall/video-marketing_1643991.png';
import Image5 from '../../assets/Secuall/prototype_3852809.png';
import Image6 from '../../assets/Secuall/camera-3376230_1280.jpg';
import { Shield, Bell, Lock, Eye } from 'lucide-react';

export default function Secuall()
{
    const [activeCard, setActiveCard] = useState<number | null>(null);

    useEffect(() =>
    {
        window.scrollTo(0, 0);
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 }
        }
    };

    const features = [
        {
            title: "AI-Powered Surveillance",
            description: "Advanced computer vision algorithms provide real-time threat detection with 98% accuracy, continuously learning and adapting to new security challenges.",
            icon: Image2,
            lucideIcon: Eye,
            color: "border-blue-500",
            gradient: "from-blue-500/20 to-transparent",
            extendedDescription: "Our AI surveillance system uses deep learning algorithms to analyze video feeds in real-time, detecting and categorizing potential threats with unprecedented accuracy. The system adapts to your environment over time, reducing false alarms while ensuring no security breach goes unnoticed."
        },
        {
            title: "98% Recall Rate",
            description: "Industry-leading accuracy in threat detection and suspicious behavior identification, minimizing false alarms while ensuring no security breach goes unnoticed.",
            icon: Image3,
            lucideIcon: Shield,
            color: "border-teal-500",
            gradient: "from-teal-500/20 to-transparent",
            extendedDescription: "Through extensive testing and validation, our system has achieved a 98% recall rate in identifying security threats. This exceptional accuracy is maintained across diverse environments and lighting conditions, making it reliable for both residential and commercial applications."
        },
        {
            title: "Advanced Video Processing",
            description: "State-of-the-art video processing with real-time analytics and predictive modeling for proactive threat prevention and rapid response.",
            icon: Image4,
            lucideIcon: Bell,
            color: "border-purple-500",
            gradient: "from-purple-500/20 to-transparent",
            extendedDescription: "Our video processing engine employs cutting-edge compression algorithms and edge computing to deliver real-time analysis with minimal latency. The system can process multiple video streams simultaneously while maintaining high accuracy in threat detection."
        },
        {
            title: "Continuous Innovation",
            description: "Regular updates and improvements ensure your security system evolves with emerging threats, providing cutting-edge protection today and tomorrow.",
            icon: Image5,
            lucideIcon: Lock,
            color: "border-pink-500",
            gradient: "from-pink-500/20 to-transparent",
            extendedDescription: "Our commitment to innovation drives continuous improvements through regular software updates and feature enhancements. The system learns from new security scenarios and adapts its detection algorithms to counter evolving threats effectively."
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Enhanced Hero Section */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="relative h-screen flex items-center overflow-hidden"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="absolute top-8 right-8 inline-flex items-center space-x-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full z-10"
                >
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                    </span>
                    <span>Coming Soon</span>
                </motion.div>
                {/* Improved background with overlay gradient */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('../../assets/Secuall/camera-3376230_1280.jpg')] bg-cover bg-center" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
                    {/* Dynamic particles effect */}
                    <div className="absolute inset-0 bg-black/30" />
                </div>

                <div className="relative container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <motion.div
                            variants={itemVariants}
                            className="flex-1 space-y-8"
                        >
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-6"
                            >
                                <div className="inline-block">
                                    <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">
                                        Next-Gen Security Solutions
                                    </span>
                                </div>
                                <h1 className="text-7xl md:text-8xl font-bold">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400 animate-gradient">
                                        Secuall
                                    </span>
                                </h1>
                                <h2 className="text-3xl md:text-4xl font-light text-gray-300">
                                    Revolutionizing Security with AI
                                </h2>
                            </motion.div>

                            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                                Harness the power of advanced AI and computer vision technology to protect what matters most. Secuall delivers enterprise-grade security solutions for both vehicles and properties, featuring real-time threat detection and predictive analytics.
                            </p>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row gap-4 pt-6"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg font-semibold shadow-lg transition-all flex items-center justify-center gap-2 group"
                                >
                                    <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                    Get Protected Now
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2 group"
                                >
                                    <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    Watch Demo
                                </motion.button>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="flex-1 hidden md:block"
                        >
                            <motion.div
                                className="relative"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.img
                                    src={Image6}
                                    alt="Secuall Security System"
                                    className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
                                />
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-teal-500/20 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Features Section with enhanced contrast */}
            <div className="bg-gradient-to-b from-gray-900 to-black">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="container mx-auto px-4 py-32"
                >
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 mb-6">
                            Advanced Security Features
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Experience next-generation security with our comprehensive suite of AI-powered features designed to provide maximum protection and peace of mind.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                onClick={() => setActiveCard(activeCard === index ? null : index)}
                                className={`p-8 rounded-2xl border-2 ${feature.color} bg-gradient-to-br ${feature.gradient} backdrop-blur-sm cursor-pointer transition-all duration-300 ${activeCard === index ? 'ring-2 ring-offset-2 ring-offset-gray-900 ring-white/50' : ''
                                    }`}
                            >
                                <div className="flex items-start gap-6">
                                    <div className="flex flex-col items-center gap-2">
                                        <img src={feature.icon} alt={feature.title} className="w-12 h-12" />
                                        <feature.lucideIcon className="w-6 h-6 text-gray-300" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                                        <AnimatePresence mode="wait">
                                            {activeCard === index ? (
                                                <motion.p
                                                    key="extended"
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="text-gray-300 leading-relaxed"
                                                >
                                                    {feature.extendedDescription}
                                                </motion.p>
                                            ) : (
                                                <motion.p
                                                    key="default"
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="text-gray-300 leading-relaxed"
                                                >
                                                    {feature.description}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Stats Section with enhanced styling */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="bg-gradient-to-r from-blue-900/20 via-black to-teal-900/20 py-32"
            >
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: "98%", label: "Accuracy Rate" },
                            { value: "24/7", label: "Active Monitoring" },
                            { value: "<1s", label: "Response Time" },
                            { value: "100%", label: "Customer Satisfaction" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-300 text-lg">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}