import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Building2, Mail, MessageSquare, User, Briefcase, DollarSign } from 'lucide-react';

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const [isInvestor, setIsInvestor] = useState(false);

  useEffect(() => {
    setIsInvestor(searchParams.get('type') === 'investor');
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-indigo-900">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              {isInvestor ? 'Investment Inquiries' : 'Get in Touch'}
            </h1>
            <p className="text-blue-200/90">
              {isInvestor 
                ? "Interested in being part of the AI revolution? Let\'s discuss investment opportunities."
                : "Have questions about our AI solutions? We're here to help you transform your business."}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-200">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-300" />
                    <input 
                      type="text" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-200">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-300" />
                    <input 
                      type="email" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-200">Company Name</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-300" />
                    <input 
                      type="text" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Company Inc."
                    />
                  </div>
                </div>

                {/* Conditional fields based on type */}
                {isInvestor ? (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-200">Investment Range</label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-300" />
                      <select 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                      >
                        <option value="" className="bg-blue-900">Select range</option>
                        <option value="50k-250k" className="bg-blue-900">$50,000 - $250,000</option>
                        <option value="250k-1m" className="bg-blue-900">$250,000 - $1,000,000</option>
                        <option value="1m+" className="bg-blue-900">$1,000,000+</option>
                      </select>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-200">Industry</label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-300" />
                      <select 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                      >
                        <option value="" className="bg-blue-900">Select industry</option>
                        <option value="technology" className="bg-blue-900">Technology</option>
                        <option value="healthcare" className="bg-blue-900">Healthcare</option>
                        <option value="finance" className="bg-blue-900">Finance</option>
                        <option value="retail" className="bg-blue-900">Retail</option>
                        <option value="other" className="bg-blue-900">Other</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-blue-200">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-blue-300" />
                  <textarea 
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder={isInvestor ? "Tell us about your investment interests and background..." : "How can we help you with AI solutions?"}
                  ></textarea>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
              >
                {isInvestor ? 'Submit Investment Inquiry' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;