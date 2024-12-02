import { useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import homeai from "../../assets/Landing/img.png"

const HeroSection = () =>
{
  useEffect(() =>
  {

    const elements = document.querySelectorAll('.animate-on-scroll');
    setTimeout(() =>
    {
      elements.forEach(el => el.classList.add('show'));
    }, 100);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-950 to-indigo-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-700"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950/50"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}>
      </div>

      {/* Content container */}
      <div className="relative container mx-auto px-6 py-16 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12">
        {/* Text content */}
        <div className="w-full lg:w-1/2 space-y-8 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8 [&.show]:opacity-100 [&.show]:translate-y-0">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full border border-blue-400/20 text-blue-300 mb-6">
              <span className="text-sm text-center font-medium">AI-Powered Solutions</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>

            <h1 className="text-4xl md:text-6xl mb-2 font-bold text-white leading-tight">
              From Human Intelligence to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Artificial Intelligence
              </span>
            </h1>

            <p className="text-lg text-blue-200/90 max-w-xl mb-4">
              HItoAI Limited is transforming business operations through innovative AI solutions that enhance efficiency, productivity, and growth across various sectors.
            </p>
          </div>

          <div className="flex flex-col sm:justify-center sm:items-center sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:opacity-90 transition-opacity">
              Get Started
            </button>
            <button className="px-8 py-4 bg-white/10 rounded-lg text-white font-medium hover:bg-white/20 transition-colors border border-white/20">
              Learn More
            </button>
          </div>
        </div>

        {/* Visual element */}
        <div style={{
          backgroundImage: `url(${homeai})`
        }} className="w-full bg-cover bg-center lg:w-1/2 animate-on-scroll opacity-0 transition-all duration-1000 translate-x-8 [&.show]:opacity-100 [&.show]:translate-x-0">
          <div className="relative aspect-square max-w-lg mx-auto">
            {/* Placeholder for AI visualization */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-4 bg-gradient-to-l from-blue-500/20 to-purple-500/20 rounded-full animate-spin-slow animation-delay-500"></div>
            <div className="absolute inset-8 bg-gradient-to-t from-blue-500/20 to-purple-500/20 rounded-full animate-spin-slow animation-delay-1000"></div>
            <div className="absolute inset-0 bg-blue-950/50 backdrop-blur-sm rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 animate-pulse"></div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-blue-300" />
      </div>
    </div>
  );
};

export default HeroSection;