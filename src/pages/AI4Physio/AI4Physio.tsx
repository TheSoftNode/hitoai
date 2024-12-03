
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Import all original images
import Image1 from '../../assets/AI4physio/prescription_9340158.png';
import Image2 from '../../assets/AI4physio/timeline_9303793.png';
import Image3 from '../../assets/AI4physio/diagram_1018716.png';
import Image4 from '../../assets/AI4physio/order-tracking_8378149.png';
import Image5 from '../../assets/AI4physio/chatbot_6667598.png';
import Image6 from '../../assets/AI4physio/hospital_4639208.png';
import Image7 from '../../assets/AI4physio/chatbot_6667598.png';
import Image8 from '../../assets/AI4physio/headache_16779854.png';
import Image9 from '../../assets/AI4physio/tuning_2254573.png';
import Image10 from '../../assets/AI4physio/monitoring_8756660.png';
import Image11 from '../../assets/AI4physio/smartwatch.png';
import AI4Hero from './AI4Hero';



export default function AI4Physio()
{
    const [activeCard, setActiveCard] = useState<number | null>(null);

    useEffect(() =>
    {
        window.scrollTo(0, 0);
    }, [])


    const toggleCard = (index: number) =>
    {
        setActiveCard(activeCard === index ? null : index);
    };



    // Keeping all original card contents
    const cardContents = [
        {
            title: "Personalized Treatment Plans",
            description: "AI4Physio creates tailored treatment programs that adapt dynamically to the specific needs and progress of each patient, ensuring individualized care.",
            image: Image1,
        },
        {
            title: "Real-Time Monitoring",
            description: "Continuous monitoring and assessment of patient activities allow for precise data collection and timely interventions, improving the effectiveness of treatments.",
            image: Image2,
        },
        {
            title: "Predictive Analytics",
            description: "Utilizing AI-driven predictive analytics, AI4Physio forecasts patient outcomes and optimizes rehabilitation processes for more efficient",
            image: Image3,
        },
        {
            title: "Automated Progress Tracking",
            description: "Streamlined progress tracking simplifies the evaluation of patient improvement, enabling therapists to adjust treatment plans based on real-time data.",
            image: Image4,
        },
        {
            title: "Virtual Assistants and Chatbots",
            description: "AI4Physio provides 24/7 support through virtual assistants and chatbots, assisting patients with their queries and guiding them through exercises, enhancing patient engagement.",
            image: Image5,
        },
        {
            title: "Remote Rehabilitation",
            description: "Patients can undergo effective rehabilitation from the comfort of their homes, with AI4Physio supporting remote treatment through real-time monitoring and guided therapy",
            image: Image6,
        },
        {
            title: "Motion Analysis",
            description: "AI-powered motion analysis identifies movement patterns and areas of concern, offering precise recovery strategies for optimized results.",
            image: Image7,
        },
        {
            title: "Pain Management",
            description: "AI4Physio introduces innovative, targeted interventions designed to alleviate pain and promote healing, improving overall patient wellbeing",
            image: Image8,
        },
        {
            title: "Adaptive Learning",
            description: "Advanced AI algorithms adapt to each patient's progress, ensuring that care remains personalized and continually optimized for better outcomes.",
            image: Image9,
        },
        {
            title: "Enhanced Diagnostics",
            description: "With machine learning powered diagnostics, AI4Physio improves the identification of symptoms and recommends the most effective treatment",
            image: Image10,
        },
        {
            title: "Integration with Wearables",
            description: "AI4Physio seamlessly integrates with wearable devices, allowing for comprehensive monitoring and data collection to support more informed treatment decisions.",
            image: Image11,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <AI4Hero />

            <div className="relative bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                    <div className="absolute right-0 top-1/2 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
                    <div className="absolute left-0 bottom-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left column - Visual element */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10">
                                {/* Stats grid */}
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <div className="text-3xl font-bold text-blue-400">95%</div>
                                        <div className="text-sm text-blue-200/80">Improved Mobility</div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-3xl font-bold text-purple-400">2x</div>
                                        <div className="text-sm text-blue-200/80">Faster Recovery</div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-3xl font-bold text-blue-400">24/7</div>
                                        <div className="text-sm text-blue-200/80">AI Monitoring</div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-3xl font-bold text-purple-400">100+</div>
                                        <div className="text-sm text-blue-200/80">Exercise Plans</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right column - Text content */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-full"
                            >
                                <span className="text-sm font-medium">Advanced Rehabilitation Technology</span>
                            </motion.div>

                            <div className="space-y-6">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-3xl font-bold text-blue-100"
                                >
                                    Transforming Pediatric Rehabilitation
                                </motion.h2>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                    className="space-y-4"
                                >
                                    <p className="text-lg text-blue-200/80">
                                        AI4Physio leverages cutting-edge technology combined with artificial intelligence to revolutionize rehabilitation for children with physical incapacities, particularly those affected by cerebral palsy.
                                    </p>
                                    <p className="text-lg text-blue-200/80">
                                        This innovative platform offers tailored, data-driven therapy plans that adapt to individual needs, enhancing motor function and fostering independence.
                                    </p>
                                    <p className="text-lg text-blue-200/80">
                                        By integrating advanced AI algorithms with physiotherapy tools, AI4Physio monitors progress, predicts challenges, and provides real-time feedback, ensuring effective and engaging rehabilitation in the early stages.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="relative bg-gradient-to-b from-white to-blue-50/50 overflow-hidden">
                {/* Subtle grid overlay */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
                </div>

                {/* Decorative blurred shapes */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 mb-16"
                    >
                        Our Key Features
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cardContents.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="backdrop-blur-sm bg-white/70 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-white/80"
                                onClick={() => toggleCard(index)}
                            >
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center backdrop-blur-sm">
                                        <img src={card.image} alt={card.title} className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
                                </div>
                                <p className="text-gray-600">{card.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 overflow-hidden">
                {/* Grid background overlay */}
                <div className="absolute inset-0">
                    {/* <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div> */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0">
                    {[...Array(15)].map((_, i) => (
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
                    <div className="max-w-2xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center space-y-8"
                        >
                            {/* Decorative badge */}
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
                                <span className="text-sm font-medium">Get Early Access</span>
                            </motion.div>

                            {/* Title */}
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-50"
                            >
                                Request a Demo
                            </motion.h2>

                            {/* Form container */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="relative p-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10"
                            >
                                <div className="space-y-6">
                                    <div className="relative">
                                        <input
                                            type="email"
                                            placeholder="Enter your email address"
                                            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                                        />
                                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl rounded-xl"></div>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
                                    >
                                        <span className="flex items-center justify-center space-x-2">
                                            <span>Request Demo</span>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </span>
                                    </motion.button>
                                </div>
                            </motion.div>

                            {/* Trust indicators */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.9 }}
                                className="text-blue-200/60 text-sm"
                            >
                                Join 1000+ healthcare professionals already using AI4Physio
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}