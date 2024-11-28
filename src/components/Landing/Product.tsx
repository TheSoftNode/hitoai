import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const products = [
    {
        title: "SUSNET™",
        description:
            "HitoAI's flagship AI-powered sustainable energy management system designed to optimize energy usage, ensuring efficiency and sustainability.",
        image: "/api/placeholder/800/400",
        tags: ["Energy Efficient", "AI-Powered", "Green Tech"],
        stats: {
            efficiency: "98%",
            satisfaction: "4.9/5",
            installations: "10K+"
        },
        bgColor: "#009688",
        link: "/susnet",
    },
    {
        title: "SELWEL",
        description:
            "An advanced trading platform designed for financial institutions to optimize profits and reduce risks in global share trading.",
        image: "/api/placeholder/800/400",
        tags: ["FinTech", "Real-time Analytics", "AI Trading"],
        stats: {
            accuracy: "99.9%",
            transactions: "$2B+",
            users: "50K+"
        },
        bgColor: "#007ACC",
        link: "/selwell",
    },
    {
        title: "SECUALL",
        description:
            "AI-powered dashcams and home security cameras designed to enhance security using AI and computer vision.",
        image: "/api/placeholder/800/400",
        tags: ["Security", "AI Vision", "Smart Home"],
        stats: {
            detection: "99.8%",
            response: "<1s",
            installations: "100K+"
        },
        bgColor: "#6A5ACD",
        link: "/secuall",
    },
    {
        title: "AIMARCOM",
        description:
            "AI-driven personalization and recommendations to boost engagement and sales.",
        image: "/api/placeholder/800/400",
        tags: ["Marketing", "AI", "Analytics"],
        stats: {
            engagement: "+280%",
            conversion: "+75%",
            roi: "12x"
        },
        bgColor: "#FF6F61",
        link: "/aimarcom",
    },
    {
        title: "223D",
        description:
            "Generates 3D assets using AI for gaming and VR applications, offering limitless creativity.",
        image: "/api/placeholder/800/400",
        tags: ["3D Generation", "Gaming", "VR"],
        stats: {
            quality: "4.8/5",
            speed: "2min",
            assets: "1M+"
        },
        bgColor: "#4CAF50",
        link: "/223d",
    },
    {
        title: "KNOMED",
        description:
            "An AI tool for enhancing patient care and outcomes through data-driven insights.",
        image: "/api/placeholder/800/400",
        tags: ["Healthcare", "AI", "Analytics"],
        stats: {
            accuracy: "99.7%",
            hospitals: "500+",
            patients: "1M+"
        },
        bgColor: "#FF5722",
        link: "/knomed",
    },
    {
        title: "AI4Physio",
        description:
            "A revolutionary solution for physiotherapy, utilizing AI for personalized rehabilitation.",
        image: "/api/placeholder/800/400",
        tags: ["Healthcare", "AI", "Rehabilitation"],
        stats: {
            recovery: "+65%",
            satisfaction: "4.9/5",
            clinics: "2000+"
        },
        bgColor: "#9C27B0",
        link: "/ai4physio",
    },
];

const Product = () =>
{
    const [currentIndex, setCurrentIndex] = useState(0);
    const productsPerPage = 3;
    const totalPages = Math.ceil(products.length / productsPerPage);

    const nextSlide = () =>
    {
        setCurrentIndex((prevIndex) =>
            prevIndex + productsPerPage >= products.length ? 0 : prevIndex + productsPerPage
        );
    };

    const prevSlide = () =>
    {
        setCurrentIndex((prevIndex) =>
            prevIndex - productsPerPage < 0 ?
                products.length - (products.length % productsPerPage || productsPerPage) :
                prevIndex - productsPerPage
        );
    };

    const goToPage = (pageIndex: number) =>
    {
        setCurrentIndex(pageIndex * productsPerPage);
    };

    const visibleProducts = products.slice(currentIndex, currentIndex + productsPerPage);

    return (
        <div className="bg-gradient-to-br from-blue-900 to-indigo-800 flex flex-col items-center justify-center py-16 px-4">
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
            >
                Our Products
            </motion.h2>

            <div className="relative w-full max-w-7xl">
                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 lg:left-8 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 bg-white rounded-full p-1 md:p-3 shadow-lg hover:bg-gray-100 transition-all"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-800" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 lg:right-8 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 bg-white rounded-full p-1 md:p-3 shadow-lg hover:bg-gray-100 transition-all"
                >
                    <ChevronRight className="w-6 h-6 text-gray-800" />
                </button>

                {/* Products Container */}
                <div className="overflow-hidden px-4 py-10">
                    <motion.div
                        className="flex gap-6 justify-center"
                        initial={false}
                        animate={{ x: 0 }}
                    >
                        <AnimatePresence mode="wait">
                            {visibleProducts.map((product, index) => (
                                <motion.div
                                    key={currentIndex + index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.4 }}
                                    className="w-full lg:w-80 flex-shrink-0 flex"
                                >
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:transform hover:scale-105 transition-all duration-300 flex flex-col w-full">
                                        {/* Image Section */}
                                        <div className="relative h-48 w-full overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                                                {product.title}
                                            </h3>
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-6 flex flex-col flex-grow">
                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {product.tags.map((tag, i) => (
                                                    <Badge
                                                        key={i}
                                                        variant="secondary"
                                                        className="bg-blue-100 text-blue-800 hover:bg-blue-200"
                                                    >
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>

                                            <p className="text-gray-600 text-sm mb-6 flex-grow">
                                                {product.description}
                                            </p>

                                            {/* Stats Grid */}
                                            <div className="grid grid-cols-3 gap-4 mb-6">
                                                {Object.entries(product.stats).map(([key, value]) => (
                                                    <div key={key} className="text-center">
                                                        <div className="text-lg font-bold text-blue-600">
                                                            {value}
                                                        </div>
                                                        <div className="text-xs text-gray-500 capitalize">
                                                            {key}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-all duration-300"
                                            >
                                                Learn More
                                            </motion.button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToPage(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${Math.floor(currentIndex / productsPerPage) === index
                                ? 'bg-white scale-125'
                                : 'bg-white/40 hover:bg-white/60'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Product;