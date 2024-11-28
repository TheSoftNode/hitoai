import { Zap, Target, Rocket, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Zap,
      title: 'Cutting-Edge AI Solutions',
      description: 'Leverage advanced machine learning algorithms that transform complex challenges into streamlined, intelligent workflows.',
      gradient: 'from-blue-400 to-purple-500'
    },
    {
      icon: Target,
      title: 'Precision-Driven Strategies',
      description: 'Our AI models deliver hyper-targeted insights, enabling data-driven decision-making with unparalleled accuracy.',
      gradient: 'from-green-400 to-teal-500'
    },
    {
      icon: Rocket,
      title: 'Accelerated Innovation',
      description: 'Rapidly prototype and deploy AI solutions that propel your business ahead of the competition with unprecedented speed.',
      gradient: 'from-orange-400 to-red-500'
    },
    {
      icon: Shield,
      title: 'Robust Security Framework',
      description: 'Enterprise-grade AI solutions with advanced security protocols, ensuring your data remains protected and confidential.',
      gradient: 'from-indigo-400 to-blue-500'
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">HItoAI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business potential with AI-driven solutions that blend innovative technology, strategic insights, and unparalleled performance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
              
              <div className="relative p-6 z-10 space-y-4 flex flex-col items-center justify-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 transition-colors group-hover:text-blue-600">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600">
                  {feature.description}
                </p>
                
                <div className="h-[2px] w-16 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 transition-all group-hover:w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;