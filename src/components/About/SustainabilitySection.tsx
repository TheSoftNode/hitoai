import handshake from "../../assets/about/handshake.png"
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Globe } from 'lucide-react';
import sustain from "../../assets/about/sustain.png"

const SustainabilitySection = () =>
{
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const features = [
    {
      icon: <Leaf className="w-6 h-6 text-emerald-600" />,
      title: "Eco-Friendly Solutions",
      description: "Implementing sustainable practices that reduce environmental impact."
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      title: "Global Impact",
      description: "Making a positive difference in communities worldwide through innovation."
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="w-full lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-12 lg:mb-0 flex flex-col items-center justify-center"
          >
            <motion.div variants={cardVariants} className="max-w-xl">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
                Our Commitment to Sustainability
              </h2>

              <p className="text-lg text-blue-800/80 leading-relaxed mb-8">
                We are committed to promoting sustainability and reducing carbon footprint through our innovative solutions.
                Our team of experts is dedicated to providing smart and efficient energy management solutions.
              </p>

              {/* Feature Cards */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-blue-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-blue-700/70">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* <motion.button
                variants={cardVariants}
                className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </motion.button> */}
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={containerVariants}
            className="relative"
          >
            <motion.div
              variants={cardVariants}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* <p className="p-2 text-lg leading-relaxed">Choose HitoAI and join us in revolutionizing energy management for a better tomorrow.</p> */}
              <p className="p-4 text-xl lg:text-2xl font-semibold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
                Choose HitoAI and join us in revolutionizing energy management for a better tomorrow.
              </p>
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={handshake}
                  alt="Robot handshake human"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200/20 rounded-full filter blur-3xl -z-10" />
            <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-emerald-200/20 rounded-full filter blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-100/30 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-100/30 rounded-full filter blur-3xl -z-10" />
    </section>
  );
};

export default SustainabilitySection;