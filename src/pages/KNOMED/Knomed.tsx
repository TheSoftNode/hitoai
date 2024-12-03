import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Activity, Shield, MoveRight, LineChart, Heart, Stethoscope } from 'lucide-react';
import physio from "../../assets/Knomed/hero.png";

const Knomed = () =>
{
    useEffect(() =>
    {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            icon: Brain,
            title: 'AI-Powered Analysis',
            description: 'Advanced algorithms provide real-time analysis and insights for optimized physiotherapy treatments.'
        },
        {
            icon: Activity,
            title: 'Real-Time Monitoring',
            description: 'Continuous monitoring of patient movements and progress with instant feedback mechanisms.'
        },
        {
            icon: Shield,
            title: 'Touchless Operation',
            description: 'Hygienic and comfortable environment through contactless interaction technology.'
        },
        {
            icon: Heart,
            title: 'Child-Friendly',
            description: 'Specially designed interface and approach for pediatric physiotherapy needs.'
        },
        {
            icon: LineChart,
            title: 'Progress Tracking',
            description: 'Comprehensive tracking and visualization of patient improvement over time.'
        },
        {
            icon: Stethoscope,
            title: 'Treatment Planning',
            description: 'Intelligent treatment plan generation based on individual patient needs.'
        }
    ];

    return (
        <div className=" bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="absolute top-4 right-8 inline-flex items-center space-x-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full z-10"
                            >
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                                </span>
                                <span>Coming Soon</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full"
                            >
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                                </span>
                                <span>Revolutionizing Pediatric Care</span>
                            </motion.div>

                            <div className="space-y-6">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-5xl md:text-6xl font-bold text-white"
                                >
                                    KNOMED
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                    className="text-xl text-blue-100 max-w-xl"
                                >
                                    Equipped with intuitive interfaces and real-time feedback mechanisms, KNOMED ensures that physiotherapists can track progress and adjust treatment plans accordingly. The device's touchless operation also promotes a hygienic and comfortable environment for both therapists and children.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9 }}
                                    className="flex space-x-4"
                                >
                                    <button className="px-3 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all flex items-center space-x-2">
                                        <span>Get Started</span>
                                        <MoveRight className="w-4 h-4" />
                                    </button>
                                    <button className="px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all">
                                        Learn More
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={physio}
                                    alt="Child in physiotherapy session"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="relative bg-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Advanced Features
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover how KNOMED is revolutionizing pediatric physiotherapy through cutting-edge technology
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all group cursor-pointer"
                            >
                                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                    <feature.icon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Demo Request Section */}
            <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-24">
                {/* <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
                </div> */}

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-8"
                    >
                        <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-full">
                            <Heart className="w-4 h-4" />
                            <span>Start Your Journey</span>
                        </div>

                        <h2 className="text-4xl font-bold text-white">
                            Transform Your Practice with KNOMED
                        </h2>

                        <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                    />
                                </div>
                                <button className="w-full p-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all flex items-center justify-center space-x-2">
                                    <span>Request Demo</span>
                                    <MoveRight className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Knomed;