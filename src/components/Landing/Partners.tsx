

import { easeOut, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import PartnersData from '../../assets/data/partners.json';
import Investors from '../../assets/data/investors.json';

export default function Partners() {
    const [duplicatedPartners, setDuplicatedPartners] = useState<{ image: string }[]>([]);
    
    useEffect(() => {
        // Duplicate the partners array to create a seamless loop
        setDuplicatedPartners([...PartnersData, ...PartnersData]);
    }, []);

    // Animation variants for the headings
    const headingVariants = {
        hidden: {
            x: '-200%',
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.2,
                bounce: 0.3,
                ease: easeOut
            }
        }
    };

    // Animation variants for the grid items
    const itemVariants = {
        hidden: {
            y: 100,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 0.8,
                bounce: 0.2
            }
        }
    };

    // Container variants for staggered children animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 px-2 pt-20 pb-24">
            <motion.h1
                variants={headingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                className="mb-6 text-center text-base md:text-2xl lg:text-3xl font-sans font-bold leading-tight text-gray-800"
            >
                Our Partners
            </motion.h1>

            {/* Partners Carousel */}
            <div className="w-full overflow-hidden mb-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="relative w-full"
                >
                    <motion.div
                        className="flex"
                        animate={{
                            x: [0, -50 * duplicatedPartners.length],
                        }}
                        transition={{
                            x: {
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear",
                            },
                        }}
                    >
                        {duplicatedPartners.map((partner, index) => (
                            <motion.div
                                key={index}
                                className="flex-shrink-0 mx-2"
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <div className="bg-white p-2 rounded-lg shadow-lg min-w-12 h-20 flex items-center justify-center">
                                    <img
                                        src={partner.image}
                                        alt="Partner"
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            <motion.h1
                variants={headingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                className="mb-5 text-center text-base md:text-3xl lg:text-4xl font-sans font-bold leading-tight text-gray-800"
            >
                Our Investors
            </motion.h1>

            <motion.div
                className="hard-skills flex flex-wrap items-center justify-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
            >
                {Investors.map((slide, index) => (
                    <motion.div
                        className="hability mx-2 mb-4"
                        key={index}
                        variants={itemVariants}
                    >
                        <motion.div
                            className="p-2 bg-white rounded-lg shadow-lg"
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <img
                                src={slide.image}
                                alt="Investor"
                                className="min-w-12 h-20 object-fit"
                            />
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

