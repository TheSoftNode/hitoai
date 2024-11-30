import { Brain, Network, MessageSquare, Eye, Server, ArrowRight } from 'lucide-react';

const APIsPage = () =>
{
  const apiCategories = [
    {
      icon: Server,
      title: 'Web Development APIs',
      description: 'Enterprise-grade backend frameworks for scalable AI applications.',
      apis: [
        {
          name: 'Flask',
          description: 'Lightweight and flexible Python web framework for rapid API development.'
        },
        {
          name: 'Django REST Framework',
          description: 'Powerful and sophisticated framework for building Web APIs.'
        },
        {
          name: 'FastAPI',
          description: 'Modern, fast web framework for building APIs with Python.'
        },
        {
          name: 'TensorFlow Serving',
          description: 'Flexible, high-performance serving system for machine learning models.'
        }
      ]
    },
    {
      icon: Brain,
      title: 'Statistical, ML & AI APIs',
      description: 'Advanced machine learning and statistical analysis capabilities.',
      apis: [
        {
          name: 'Multi-Step Ahead Prediction',
          description: 'Advanced forecasting algorithms for complex time series data.'
        },
        {
          name: 'Anomalies Detector',
          description: 'Sophisticated anomaly detection for pattern and outlier identification.'
        },
        {
          name: 'Recommender System',
          description: 'Personalized recommendation engines powered by machine learning.'
        }
      ]
    },
    {
      icon: Network,
      title: 'HitoAI Integration APIs',
      description: 'Seamless integration capabilities for existing systems.',
      apis: [
        {
          name: 'System Integration',
          description: 'Connect your existing infrastructure with HitoAI services.'
        },
        {
          name: 'Data Pipeline Integration',
          description: 'Streamline data flow between systems and AI models.'
        }
      ]
    },
    {
      icon: MessageSquare,
      title: 'HitoAI NLP APIs',
      description: 'Natural Language Processing solutions for text analysis.',
      apis: [
        {
          name: 'Text Analysis',
          description: 'Advanced text processing and understanding capabilities.'
        },
        {
          name: 'Sentiment Analysis',
          description: 'Emotion and sentiment detection in text content.'
        }
      ]
    },
    {
      icon: Eye,
      title: 'HitoAI Visual APIs',
      description: 'Computer vision and image processing capabilities.',
      apis: [
        {
          name: 'Image Recognition',
          description: 'Advanced image classification and object detection.'
        },
        {
          name: 'Visual Search',
          description: 'Image-based search and similarity detection.'
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            HitoAI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">APIs</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive suite of APIs designed to empower your applications with advanced AI capabilities.
          </p>
        </div>

        <div className="space-y-12">
          {apiCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{category.title}</h2>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.apis.map((api, apiIndex) => (
                    <div
                      key={apiIndex}
                      className="group p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300 hover:shadow-md"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center justify-between">
                        {api.name}
                        <ArrowRight className="w-5 h-5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-gray-600">{api.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default APIsPage;