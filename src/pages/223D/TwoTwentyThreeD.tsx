import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Building2, Gamepad2, Stethoscope, Factory, Shield, Sparkles, ArrowRight, Code, Settings } from 'lucide-react';
import { FaCube } from 'react-icons/fa';
import hero223d from "../../assets/223D/hero223d.png";

const TwoTwentyThreeD = () =>
{
  const [hoveredIndustry, setHoveredIndustry] = useState<null | number>(null);

  useEffect(() =>
  {
    window.scrollTo(0, 0);
  }, [])

  const industries = [
    { icon: Building2, name: 'Architecture', color: 'from-emerald-500 to-teal-600' },
    { icon: Gamepad2, name: 'Gaming', color: 'from-purple-500 to-indigo-600' },
    { icon: Stethoscope, name: 'Healthcare', color: 'from-blue-500 to-cyan-600' },
    { icon: Factory, name: 'Manufacturing', color: 'from-orange-500 to-red-600' }
  ];

  const features = [
    {
      icon: FaCube,
      title: 'Advanced 3D Generation',
      description: 'Create intricate 3D models automatically using cutting-edge generative AI techniques.'
    },
    {
      icon: Layers,
      title: 'Precision Modeling',
      description: 'Maintain high accuracy and detail in automated model generation while reducing manual effort.'
    },
    {
      icon: Zap,
      title: 'Real-time Adaptation',
      description: 'Instantly modify and customize designs to meet specific requirements and use cases.'
    },
    {
      icon: Code,
      title: 'API Integration',
      description: 'Seamlessly integrate with existing workflows through our robust API infrastructure.'
    },
    {
      icon: Settings,
      title: 'Customization',
      description: 'Fine-tune generation parameters to achieve exactly the output you need.'
    },
    {
      icon: Shield,
      title: 'Enterprise Ready',
      description: 'Built with security and scalability in mind for enterprise deployment.'
    }
  ];


  return (
    <div className="bg-gray-950">
      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden bg-gray-950">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-emerald-500/10"></div>

          {/* Grid Pattern */}
          {/* <div className="absolute inset-y-0 w-full h-full bg-[url('/grid.svg')] opacity-10"></div> */}

          {/* Geometric Shapes */}
          <div className="absolute inset-0">
            {/* Large Skewed Rectangle */}
            <div className="absolute top-5 -right-1/4 w-3/4 h-full bg-gradient-to-br from-violet-800/20 to-emerald-800/20 transform -skew-x-12"></div>

            {/* Additional Decorative Elements */}
            <div className="absolute top-20 left-10 w-32 h-32 border border-violet-500/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 border border-emerald-500/20 rounded-full animate-pulse"></div>

            {/* Floating 3D Cubes */}
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
              className="absolute top-40 right-1/4 w-16 h-16 border border-violet-500/30 transform rotate-45"
            ></motion.div>

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
              className="absolute bottom-40 left-1/4 w-12 h-12 border border-emerald-500/30 transform -rotate-45"
            ></motion.div>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-violet-500/20 to-emerald-500/20 text-emerald-400 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10"
              >
                <Sparkles className="w-4 h-4" />
                <span>Next-Gen 3D Generation</span>
              </motion.div>

              <div className="space-y-6 relative">
                {/* Decorative Line */}
                <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-500/50 to-emerald-500/50"></div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-7xl md:text-8xl font-bold"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-emerald-500">
                    223D
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-xl text-gray-300 max-w-xl leading-relaxed backdrop-blur-sm bg-gray-900/30 p-6 rounded-lg border border-white/10"
                >
                  223D has revolutionized the 3D facilities landscape, enabling the automated generation of highly detailed 3D assets. By integrating generative AI techniques with sophisticated modeling frameworks, these facilities are able to produce intricate and customizable 3D designs far beyond the capabilities of traditional methods.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="flex flex-wrap gap-4"
                >
                  <button className="group px-8 py-4 bg-gradient-to-r from-violet-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-violet-600 hover:to-emerald-600 transition-all flex items-center space-x-2 transform hover:-translate-y-1">
                    <span>Try Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 bg-gray-800/50 text-white rounded-lg font-semibold hover:bg-gray-700/50 transition-all backdrop-blur-sm border border-white/10 transform hover:-translate-y-1">
                    Documentation
                  </button>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Content - 3D Model Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative h-[600px] transform -rotate-6 hover:rotate-0 transition-all duration-500">
                {/* Main Image Container */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src={hero223d}
                    alt="3D Model Generation"
                    className="w-full h-full object-cover transform scale-110 hover:scale-100 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/50 to-transparent"></div>
                </div>

                {/* Floating Stats */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="absolute -right-8 top-10 p-4 bg-gray-800/90 backdrop-blur-md rounded-lg border border-white/10 transform hover:-translate-y-1 transition-transform"
                >
                  <div className="flex items-center space-x-2">
                    <FaCube className="w-5 h-5 text-emerald-400" />
                    <span className="text-white font-semibold">4K+ Models Generated</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="absolute -left-8 bottom-10 p-4 bg-gray-800/90 backdrop-blur-md rounded-lg border border-white/10 transform hover:-translate-y-1 transition-transform"
                >
                  <div className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-violet-400" />
                    <span className="text-white font-semibold">Real-time Generation</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Rest of the sections remain the same... */}
      {/* Features Section */}
      <div className="relative py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how 223D is transforming 3D asset generation through cutting-edge AI technology
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
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="relative py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Facilitating innovation across multiple sectors through adaptive design and real-time customization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndustry(index)}
                onMouseLeave={() => setHoveredIndustry(null)}
                className="relative p-6 rounded-xl overflow-hidden group cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                <div className="absolute inset-0 bg-gray-800 -z-10"></div>
                <div className="relative z-10">
                  <industry.icon className={`w-8 h-8 mb-4 text-gray-400 group-hover:text-white transition-colors`} />
                  <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                  <div className={`h-1 w-12 bg-gradient-to-r ${industry.color} mt-4 transition-all duration-300 ${hoveredIndustry === index ? 'w-full' : 'w-12'}`}></div>
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
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-violet-500/20 to-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span>Get Started Today</span>
            </div>

            <h2 className="text-4xl font-bold text-white">
              Transform Your 3D Workflow
            </h2>

            <div className="bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  />
                </div>
                <button className="w-full p-4 bg-gradient-to-r from-violet-500 to-emerald-500 text-white rounded-xl font-semibold hover:from-violet-600 hover:to-emerald-600 transition-all flex items-center justify-center space-x-2">
                  <span>Start Free Trial</span>
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

export default TwoTwentyThreeD;