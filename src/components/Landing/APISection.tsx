import { Code, Brain, Network, MessageSquare, Eye, Server } from 'lucide-react';

const APISection = () =>
{
    const apiCategories = [
        {
            icon: Server,
            title: 'Web Development APIs',
            description: 'Powerful backend frameworks including Flask, Django REST, FastAPI, and TensorFlow Serving.',
            gradient: 'from-blue-400 to-cyan-500'
        },
        {
            icon: Brain,
            title: 'ML & DL APIs',
            description: 'Advanced prediction, anomaly detection, and recommendation systems powered by cutting-edge algorithms.',
            gradient: 'from-purple-400 to-pink-500'
        },
        {
            icon: Network,
            title: 'Integration APIs',
            description: 'Seamless integration capabilities to connect and enhance your existing systems with AI power.',
            gradient: 'from-green-400 to-emerald-500'
        },
        {
            icon: MessageSquare,
            title: 'NLP APIs',
            description: 'Natural Language Processing solutions for advanced text analysis and understanding.',
            gradient: 'from-orange-400 to-red-500'
        },
        {
            icon: Eye,
            title: 'Visual APIs',
            description: 'Computer vision and image processing capabilities for visual data analysis.',
            gradient: 'from-indigo-400 to-blue-500'
        },
        {
            icon: Code,
            title: 'Interaction APIs',
            description: 'Interactive AI capabilities for enhanced user engagement and dynamic responses.',
            gradient: 'from-pink-400 to-rose-500'
        }
    ];

    return (
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">API Solutions</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Integrate advanced AI capabilities into your applications with our comprehensive suite of APIs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {apiCategories.map((category, index) => (
                        <div
                            key={index}
                            className="group bg-white relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>

                            <div className="relative p-6 space-y-4">
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center`}>
                                    <category.icon className="w-6 h-6 text-white" />
                                </div>

                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                                    {category.title}
                                </h3>

                                <p className="text-gray-600">
                                    {category.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default APISection;