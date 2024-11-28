import { motion } from 'framer-motion';

const HeroSection = () =>
{
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden min-h-[50vh] flex items-center justify-center"
    >
      {/* Enhanced layered background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#003366] via-[#002244] to-[#001a33]" />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 animate-gradient" />

        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:24px_24px]" />
        </div>

        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-float-${i}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 2}s`,
                transform: `scale(${1 + Math.random() * 0.5})`,
              }}
            />
          ))}
        </div>

        {/* Enhanced light beam effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-blue-400/20 via-purple-400/10 to-transparent transform rotate-45 blur-sm" />
          <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-purple-400/20 via-blue-400/10 to-transparent transform -rotate-45 blur-sm" />
        </div>
      </div>

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto text-center px-4 z-10">
        <motion.h1
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="text-3xl md:text-4xl font-bold mb-8 text-white"
        >
          Shaping the Future of
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-2">
            AI-Driven Energy
          </span>
        </motion.h1>
        <motion.p
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300"
        >
          Leading the revolution in sustainable energy management through cutting-edge artificial intelligence.
        </motion.p>
      </div>

      {/* Smooth curved bottom with gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-72 overflow-hidden">
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
      </div>
    </motion.section>
  );
};

// Add required keyframes for animations
const style = document.createElement('style');
style.textContent = `
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 15s ease infinite;
  }
  
  @keyframes float {
    0% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, -30px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0, 0) scale(1); }
  }
  
  ${[...Array(6)].map((_, i) => `
    .animate-float-${i} {
      animation: float ${15 + i * 2}s infinite;
      animation-delay: ${i * 2}s;
    }
  `).join('\n')}
`;
document.head.appendChild(style);

export default HeroSection;