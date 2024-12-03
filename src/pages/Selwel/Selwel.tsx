import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, ChartLine, Shield, Zap } from 'lucide-react';

// Import images
import Image1 from '../../assets/selwell/finance-8154775_1280.jpg';
import Image2 from "../../assets/selwell/robo.webp";
import Image3 from "../../assets/selwell/EndToEnd.webp";
import Image4 from "../../assets/selwell/statistical.webp";

import { ReactNode } from 'react';

const FadeInWhenVisible = ({ children, delay = 0 }: { children: ReactNode, delay?: number }) =>
{
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() =>
  {
    if (inView)
    {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.8, delay }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
    >
      {children}
    </motion.div>
  );
};

const Selwel = () =>
{
  useEffect(() =>
  {
    window.scrollTo(0, 0);
  }, [])

  const features = [
    {
      icon: Brain,
      image: Image2,
      title: 'AI-Powered Intelligence',
      description: 'Advanced machine learning algorithms and statistical analysis provide sophisticated trading strategies, optimizing your portfolio performance with precision.'
    },
    {
      icon: ChartLine,
      image: Image3,
      title: 'Hybrid AI Models',
      description: 'Cutting-edge combination of Statistical Learning, Machine Learning, and Deep Learning models for comprehensive market analysis.'
    },
    {
      icon: Shield,
      image: Image4,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and secure infrastructure powered by Google Cloud, ensuring your trading data remains protected.'
    }
  ];

  return (
    <div className=" bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-950 to-purple-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
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
              
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="block"
                >
                  Next-Gen Trading
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="block"
                >
                  Intelligence
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="text-xl text-gray-100 leading-relaxed max-w-xl"
              >
                Harness the power of advanced AI and machine learning to optimize your trading strategy. Built for institutions, engineered for excellence.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="flex space-x-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl"></div>
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src={Image1}
                alt="Trading Platform Interface"
                className="relative h-96 rounded-2xl shadow-2xl w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Enterprise-Grade Trading Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powered by sophisticated AI models and advanced statistical analysis
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <FadeInWhenVisible key={index} delay={0.2}>
              <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="relative rounded-2xl shadow-lg w-full h-[400px] object-cover"
                  />
                </motion.div>
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center"
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  <motion.button
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700"
                  >
                    <span>Learn more</span>
                    <Zap className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>

      {/* Coming Soon Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        // className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24"
        className="bg-gradient-to-br from-[#003366] via-[#002244] to-[#001a33] py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="text-center">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full mb-8"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                <span>Coming Soon</span>
              </motion.div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Personal Trading Platform
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the power of institutional-grade trading algorithms, now available for individual traders. Join our waitlist to be the first to know when we launch.
              </p>
            </div>
          </FadeInWhenVisible>
        </div>
      </motion.div>
    </div>
  );
};

export default Selwel;