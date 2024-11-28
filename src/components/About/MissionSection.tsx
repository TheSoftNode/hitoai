import { motion, useScroll, useTransform } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Zap, Globe, Shield, ArrowUpRight, Sparkles, ChartBar, Cpu, Network } from 'lucide-react';

const MissionSection = () =>
{
    const { scrollYProgress } = useScroll();
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

    const cardVariants = {
        initial: { opacity: 0, y: 20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.2,
                ease: [0.6, 0.01, 0.05, 0.95],
            },
        },
    };

    const featureVariants = {
        initial: { opacity: 0, y: 10 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const glowVariants = {
        animate: {
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.2, 1],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    return (
        <section className="relative py-16 overflow-hidden bg-gradient-to-b from-white to-gray-50">
            {/* Animated Background Pattern */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 opacity-5"
            >
                <div className="absolute inset-0 bg-[linear-gradient(45deg,#003366_1px,transparent_1px),linear-gradient(-45deg,#003366_1px,transparent_1px)] bg-[length:32px_32px]" />
            </motion.div>

            {/* Content Container */}
            <div className="relative max-w-6xl mx-auto px-4">
                {/* Header Section */}
                {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#003366] to-blue-600 mb-4">
            Transforming Energy Management
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Next-generation AI solutions revolutionizing energy optimization
          </p>
        </motion.div> */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <motion.div
                        variants={glowVariants}
                        animate="animate"
                        className="w-16 h-8 mx-auto mb-8 relative"
                    >
                        <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-2xl" />
                        <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2">
                            <Sparkles className="w-12 h-8 text-white" />
                        </div>
                    </motion.div>

                    <h2 className="text-5xl p-3 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#003366] to-blue-600 mb-4">
                        Transforming Energy Management
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        HItoai delivers next-generation AI solutions that revolutionize how organizations
                        optimize, monitor, and control their energy resources for a sustainable future.
                    </p>
                </motion.div>

                {/* Main Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {[
                        {
                            title: "Our Mission",
                            icon: Zap,
                            gradient: "from-blue-500/10 via-blue-400/5 to-transparent",
                            accent: "blue",
                            description: "Revolutionize energy management through AI-driven solutions for a sustainable future.",
                        },
                        {
                            title: "Our Vision",
                            icon: Globe,
                            gradient: "from-purple-500/10 via-purple-400/5 to-transparent",
                            accent: "purple",
                            description: "Lead the global transition to intelligent energy management with data-driven insights.",
                        },
                        {
                            title: "Our Values",
                            icon: Shield,
                            gradient: "from-indigo-500/10 via-indigo-400/5 to-transparent",
                            accent: "indigo",
                            description: "Excellence in innovation, sustainability, and exceptional value delivery.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        >
                            <Card className="h-full p-6 border-0 shadow-lg relative overflow-hidden bg-white">
                                {/* Sophisticated background pattern */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.8)_0%,transparent_60%)]" />

                                <div className="relative">
                                    <div className={`w-12 h-12 bg-${item.accent}-100 rounded-xl flex items-center justify-center mb-4`}>
                                        <item.icon className={`w-6 h-6 text-${item.accent}-600`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#003366] mb-3">{item.title}</h3>
                                    <p className="text-gray-600 text-base leading-relaxed mb-4">{item.description}</p>
                                    <motion.button
                                        whileHover={{ x: 4 }}
                                        transition={{ duration: 0.2 }}
                                        className={`flex items-center text-${item.accent}-600 text-sm font-medium`}
                                    >
                                        Learn More <ArrowUpRight className="w-4 h-4 ml-1" />
                                    </motion.button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { icon: ChartBar, title: "Advanced Analytics" },
                        { icon: Cpu, title: "AI Optimization" },
                        { icon: Network, title: "Smart Grid" },
                        { icon: Shield, title: "Secure Platform" },
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={featureVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="bg-white/60 flex gap-2 backdrop-blur-sm p-1  rounded-lg hover:bg-white/80 transition-all">
                                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                                    <feature.icon className="w-3 h-3 text-white" />
                                </div>
                                <h4 className="text-sm font-semibold text-[#003366]">{feature.title}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MissionSection;