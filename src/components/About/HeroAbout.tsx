
// import { motion } from 'framer-motion';

// const HeroSection = () =>
// {
//   // Enhanced animation variants with smoother transitions
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 1.2,
//         ease: "easeOut",
//         // Stagger children animations
//         staggerChildren: 0.2,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const fadeUpVariants = {
//     hidden: {
//       opacity: 0,
//       y: 30
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <motion.section
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//       className="relative overflow-hidden min-h-[50vh] flex items-center justify-center"
//     >
//       {/* Enhanced layered background with smoother transitions */}
//       <div className="absolute inset-0">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           className="absolute inset-0 bg-gradient-to-br from-[#003366] via-[#002244] to-[#001a33]"
//         />

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.3 }}
//           transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
//           className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 animate-gradient"
//         />

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.1 }}
//           transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
//           className="absolute inset-0"
//         >
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:24px_24px]" />
//         </motion.div>

//         {/* Floating orbs with smoother animations */}
//         <div className="absolute inset-0 overflow-hidden">
//           {[...Array(6)].map((_, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 0.2, scale: 1 }}
//               transition={{
//                 duration: 2,
//                 delay: i * 0.2,
//                 ease: "easeOut"
//               }}
//               className={`absolute w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-float-${i}`}
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${i * 2}s`,
//               }}
//             />
//           ))}
//         </div>

//         {/* Light beams with smoother fade-in */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 2, delay: 1, ease: "easeOut" }}
//           className="absolute inset-0"
//         >
//           <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-blue-400/20 via-purple-400/10 to-transparent transform rotate-45 blur-sm" />
//           <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-purple-400/20 via-blue-400/10 to-transparent transform -rotate-45 blur-sm" />
//         </motion.div>
//       </div>

//       {/* Content container with staggered animations */}
//       <div className="relative max-w-7xl mx-auto text-center px-4 z-10">
//         <motion.h1
//           variants={fadeUpVariants}
//           className="text-3xl md:text-4xl font-bold mb-8 text-white"
//         >
//           Shaping the Future of
//           <motion.span
//             variants={fadeUpVariants}
//             className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-2"
//           >
//             AI-Driven Energy
//           </motion.span>
//         </motion.h1>
//         <motion.p
//           variants={fadeUpVariants}
//           className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300"
//         >
//           Leading the revolution in sustainable energy management through cutting-edge artificial intelligence.
//         </motion.p>
//       </div>

//       {/* Curved bottom with smoother transition */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
//         className="absolute bottom-0 left-0 right-0 h-72 overflow-hidden"
//       >
//         <svg
//           className="absolute bottom-0 w-full h-full"
//           viewBox="0 0 100 100"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M0,100 C30,90 70,90 100,100 L100,100 L0,100 Z"
//             fill="rgb(255, 255, 255)"
//             className="opacity-100"
//           />
//           <path
//             d="M0,100 C30,90 70,90 100,100 L100,100 L0,100 Z"
//             fill="url(#gradient)"
//             className="opacity-30"
//           />
//           <defs>
//             <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="0">
//               <stop offset="0%" stopColor="#3B82F6" />
//               <stop offset="50%" stopColor="#8B5CF6" />
//               <stop offset="100%" stopColor="#3B82F6" />
//             </linearGradient>
//           </defs>
//         </svg>
//       </motion.div>
//     </motion.section>
//   );
// };

// // Smoother keyframe animations
// const style = document.createElement('style');
// style.textContent = `
//   @keyframes gradient {
//     0% { background-position: 0% 50%; }
//     50% { background-position: 100% 50%; }
//     100% { background-position: 0% 50%; }
//   }

//   .animate-gradient {
//     background-size: 200% 200%;
//     animation: gradient 15s ease infinite;
//   }

//   @keyframes float {
//     0% { transform: translate(0, 0) scale(1); }
//     33% { transform: translate(30px, -30px) scale(1.05); }
//     66% { transform: translate(-20px, 20px) scale(0.95); }
//     100% { transform: translate(0, 0) scale(1); }
//   }

//   ${[...Array(6)].map((_, i) => `
//     .animate-float-${i} {
//       animation: float ${20 + i * 2}s ease-in-out infinite;
//       animation-delay: ${i * 2}s;
//     }
//   `).join('\n')}
// `;
// document.head.appendChild(style);

// export default HeroSection;

import { motion } from 'framer-motion';
import abouthero from "../../assets/about/abouthero.png";

const HeroSection = () =>
{
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const fadeUpVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden flex items-center justify-center"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-br from-[#003366] via-[#002244] to-[#001a33]"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 animate-gradient"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:24px_24px]" />
        </motion.div>
      </div>

      {/* Content container with image and text */}
      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-6 z-10 pt-16 md:pt-2 pb-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text content */}
          <div className="lg:w-1/2 text-left">
            <motion.h1
              variants={fadeUpVariants}
              className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6 text-white leading-tight"
            >
              Pioneering the Future with
              <motion.span
                variants={fadeUpVariants}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-2"
              >
                HitoAI
              </motion.span>
            </motion.h1>
            <motion.p
              variants={fadeUpVariants}
              className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed"
            >
              Transforming industries through innovative AI solutions:
            </motion.p>
            <motion.div
              variants={fadeUpVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-gray-300"
            >
              {[
                "Energy Management",
                "Fintech",
                "Sustainable EdTech",
                "Security Networks",
                "Healthcare & Rehabilitation",
                "3D Printing & Film"
              ].map((domain, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span className="text-lg">{domain}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image container */}
          <motion.div
            variants={imageVariants}
            className="lg:w-1/2 flex justify-center items-center"
          >
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 1 }}
              />
              <motion.img
                src={abouthero}
                alt="HitoAI Innovation"
                className="relative z-10 w-full h-auto object-cover"
                variants={imageVariants}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Curved bottom */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 h-72 overflow-hidden"
      >
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C30,90 70,90 100,100 L100,100 L0,100 Z"
            fill="rgb(255, 255, 255)"
            className="opacity-100"
          />
          <path
            d="M0,100 C30,90 70,90 100,100 L100,100 L0,100 Z"
            fill="url(#gradient)"
            className="opacity-30"
          />
          <defs>
            <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;