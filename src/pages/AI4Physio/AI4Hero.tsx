import { motion } from 'framer-motion';
import hero from "../../assets/AI4physio/hero.png"

const AI4Hero = () =>
{
    return (
        <div className="relative  bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                {/* <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div> */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
            </div>

            {/* Floating particles effect */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full"
                        animate={{
                            y: [-20, -40, -20],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            {/* Main content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="pt-20 pb-16 md:pt-20 md:pb-28">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="absolute top-7 right-8 inline-flex items-center space-x-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full z-10"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                        </span>
                        <span>Coming Soon</span>
                    </motion.div>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left column - Text content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-full"
                            >
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                                </span>
                                <span className="text-sm font-medium">AI-Powered Innovation</span>
                            </motion.div>

                            <div className="space-y-6">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-50"
                                >
                                    AI4Physio
                                </motion.h1>
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                    className="text-2xl md:text-3xl font-semibold text-blue-100"
                                >
                                    Revolutionizing Physiotherapy with AI
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9 }}
                                    className="text-lg text-blue-200/80 max-w-xl"
                                >
                                    AI4Physio is pioneering the future of physiotherapy by harnessing the power of advanced AI technologies to deliver innovative, personalized patient care.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.1 }}
                                    className="flex flex-col sm:flex-row gap-4"
                                >
                                    <button className="px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors">
                                        Get Started
                                    </button>
                                    <button className="px-6 py-3 rounded-lg border border-blue-400/30 text-blue-100 font-semibold hover:bg-blue-400/10 transition-colors">
                                        Learn More
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Right column - 3D visualization */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative lg:h-[400px]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl backdrop-blur-sm"></div>
                            <img
                                src={hero}
                                alt="AI Physiotherapy Visualization"
                                className="relative rounded-3xl shadow-2xl w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent rounded-3xl"></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AI4Hero;