import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, Cloud, Database, LineChart, Zap, Shield, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ServiceCardProps
{
  title: string;
  description: string;
  icon: React.ElementType;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, index }) =>
{
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500">
          <Icon className="h-7 w-7 text-white" />
        </div>

        <h3 className="mb-4 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          {title}
        </h3>

        <p className="mb-6 text-gray-600 leading-relaxed">
          {description}
        </p>

        <Button
          variant="ghost"
          className="group/btn flex items-center gap-2 text-blue-600 hover:text-purple-600 transition-colors"
        >
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </motion.div>
  );
};

const Services = () =>
{
  useEffect(() =>
  {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Cpu,
      title: "AI Solutions",
      description: "Custom AI models and machine learning solutions tailored to your business needs, from predictive analytics to computer vision.",
    },
    {
      icon: Code,
      title: "API Integration",
      description: "Robust RESTful APIs with comprehensive documentation, enabling seamless integration with your existing systems and third-party services.",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions with automated deployment pipelines, ensuring high availability and optimal performance.",
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Advanced data processing and storage solutions, featuring real-time analytics and secure data warehousing.",
    },
    {
      icon: LineChart,
      title: "Business Intelligence",
      description: "Transform raw data into actionable insights with our AI-powered analytics and visualization tools.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security protocols and compliance measures to protect your sensitive data and systems.",
    },
    {
      icon: Network,
      title: "IoT Solutions",
      description: "Connect and manage IoT devices with our intelligent edge computing and real-time monitoring systems.",
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Streamline operations with intelligent automation solutions that adapt to your business processes.",
    },
  ];

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with our cutting-edge AI solutions and technical expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={formVariants}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Schedule a Consultation
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Full Name" className="w-full" />
                <Input type="email" placeholder="Email Address" className="w-full" />
                <Input type="tel" placeholder="Phone Number" className="w-full" />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service, index) => (
                      <SelectItem key={index} value={service.title.toLowerCase().replace(/\s+/g, '-')}>
                        {service.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Textarea
                placeholder="Tell us about your project"
                className="w-full min-h-[120px]"
              />

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6"
              >
                Submit Request
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;