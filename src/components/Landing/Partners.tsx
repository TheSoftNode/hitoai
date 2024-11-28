import { easeOut, motion } from 'framer-motion';
import PartnersData from '../../assets/data/partners.json';
import Investors from '../../assets/data/investors.json';

export default function Partners()
{
    // Animation variants for the headings - increased initial x offset
    const headingVariants = {
        hidden: {
            x: '-200%', // Start from viewport width to ensure it comes from far left
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
            y: 100,  // Increased offset for more dramatic animation
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
        <div className="flex flex-col items-center justify-center bg-gray-100 px-2 pt-20 pb-28">
            <motion.h1
                variants={headingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }} // Set once to false to repeat animations
                className="mb-6 text-center text-base md:text-2xl lg:text-3xl font-sans font-bold leading-tight text-gray-800"
            >
                Our Partners
            </motion.h1>

            <motion.div
                className="hard-skills flex flex-wrap items-center justify-center mb-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }} // Set once to false to repeat animations
            >
                {PartnersData.map((slide, index) => (
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
                                alt="Partner"
                                className="w-24 h-24 object-contain"
                            />
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            {/* <div className="w-full overflow-hidden"> {/* Add this wrapper div  */}
            {/* <motion.h1
                variants={headingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="mb-6 text-center text-4xl md:text-3xl lg:text-4xl font-sans font-bold leading-tight text-gray-800"
            >
                Our Investors and Accelerators
            </motion.h1> */}
            {/* </div> */}

            <motion.h1
                variants={headingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }} // Set once to false to repeat animations
                className="mb-6 text-center text-base md:text-3xl lg:text-4xl font-sans font-bold leading-tight text-gray-800"
            >
                Our Investors
            </motion.h1>

            <motion.div
                className="hard-skills flex flex-wrap items-center justify-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }} // Set once to false to repeat animations
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
                                className="w-24 h-24 object-contain"
                            />
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}