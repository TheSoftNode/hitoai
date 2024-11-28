import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CTASection = () =>
{
    const navigate = useNavigate();

    return (
        <div className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-950 to-indigo-900">
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-96 h-96 -top-48 -right-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}>
            </div>

            <div className="relative container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Ready to Transform Your Business with{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                            AI Solutions?
                        </span>
                    </h2>

                    <p className="text-lg text-blue-200/90">
                        Whether you're looking to implement AI solutions or invest in the future of technology,
                        we're here to help you take the next step.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={() => navigate('/contact')}
                            className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2"
                        >
                            Contact Us
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => navigate('/contact?type=investor')}
                            className="px-8 py-4 bg-white/10 rounded-lg text-white font-medium hover:bg-white/20 transition-colors border border-white/20"
                        >
                            Investment Opportunities
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTASection;