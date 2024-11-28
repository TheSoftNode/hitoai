import f6sLogo from "../../assets/f6s-logo.png";
import footerBanner from "../../assets/footer3.png";


import { useState } from 'react';
import { FaEnvelope, FaFacebook, FaLinkedin, FaPhone, FaChevronDown } from 'react-icons/fa';

const Footer = () =>
{
    const [activeAccordion, setActiveAccordion] = useState('');

    const AccordionHeader = ({ title, section }: { title: string; section: string }) => (
        <button
            className="w-full flex items-center justify-between py-2 text-left md:hidden"
            onClick={() => setActiveAccordion(activeAccordion === section ? '' : section)}
        >
            <span className="text-lg font-semibold">{title}</span>
            <FaChevronDown
                className={`transform transition-transform duration-200 ${activeAccordion === section ? 'rotate-180' : ''
                    }`}
            />
        </button>
    );

    return (
        <footer className="relative bg-gradient-to-br z-50 from-gray-900 to-blue-900 text-white">
            {/* Newsletter Section */}
            {/* <div className="absolute py-8 -top-10 w-full">
                <div className="max-w-7xl mx-auto px-4 py-6 transform -translate-y-1/2 bg-blue-600 rounded-lg shadow-xl">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="text-center md:text-left">
                            <h3 className="text-xl font-bold">Subscribe to Our Newsletter</h3>
                            <p className="text-blue-100">Stay updated with our latest news and updates</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-blue-200"
                            />
                            <Button
                                className="bg-white text-blue-600 hover:bg-blue-50 transition-colors"
                            >
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Main Footer Content */}
            <div className="container mx-auto px-4 pt-32 pb-8 bg-cover bg-center" style={{
                backgroundImage: `url(${footerBanner})`
            }} >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h4 className="text-2xl font-bold text-white">HITOAI</h4>
                        <p className="text-blue-200 leading-relaxed">
                            Pioneering the future of AI technology with innovative solutions for businesses and individuals.
                        </p>
                        <div className="flex items-center space-x-2 text-blue-200">
                            <FaPhone className="flex-shrink-0" />
                            <a href="tel:+353899832147" className="hover:text-white transition-colors">
                                +353 89 983 2147
                            </a>
                        </div>
                        <div className="flex items-center space-x-2 text-blue-200">
                            <FaEnvelope className="flex-shrink-0" />
                            <a href="mailto:info@hitoai.com" className="hover:text-white transition-colors">
                                info@hitoai.com
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <AccordionHeader title="Our Services" section="services" />
                        <div className={`space-y-3 ${activeAccordion === 'services' || 'hidden md:block'
                            }`}>
                            <h4 className="text-xl font-bold text-white hidden md:block">Our Services</h4>
                            {['AI Solutions', 'Machine Learning', 'Data Analytics', 'Consulting'].map(service => (
                                <a
                                    key={service}
                                    href={`#${service.toLowerCase().replace(' ', '-')}`}
                                    className="block text-blue-200 hover:text-white transition-colors"
                                >
                                    {service}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <AccordionHeader title="Quick Links" section="links" />
                        <div className={`space-y-3 ${activeAccordion === 'links' || 'hidden md:block'
                            }`}>
                            <h4 className="text-xl font-bold text-white hidden md:block">Quick Links</h4>
                            {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service'].map(link => (
                                <a
                                    key={link}
                                    href={`/${link.toLowerCase().replace(' ', '-')}`}
                                    className="block text-blue-200 hover:text-white transition-colors"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Office */}
                    <div>
                        <AccordionHeader title="Our Office" section="office" />
                        <div className={`space-y-3 ${activeAccordion === 'office' || 'hidden md:block'
                            }`}>
                            <h4 className="text-xl font-bold text-white hidden md:block">Our Office</h4>
                            <p className="text-blue-200">
                                HITOAI Limited<br />
                                Sandyford, Dublin 18<br />
                                Dublin, Ireland
                            </p>
                            <div className="pt-4">
                                <div className="flex space-x-4">
                                    <a
                                        href="https://www.linkedin.com/company/hitoai-limited/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-200 hover:text-white transition-colors"
                                    >
                                        <FaLinkedin size={24} />
                                    </a>
                                    <img src={f6sLogo} alt="F6S" className="w-6 h-6" />

                                    <a
                                        href="https://facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-200 hover:text-white transition-colors"
                                    >
                                        <FaFacebook size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-blue-800">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-blue-200 text-sm">
                            &copy; 2024 HitoAI - All Rights Reserved.
                        </p>
                        <div className="flex space-x-6 text-sm text-blue-200">
                            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="/terms" className="hover:text-white transition-colors">Terms of Use</a>
                            <a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                    <p className="mt-4 text-xs text-blue-300 text-center">
                        INTELLECTUAL PROPERTY RIGHTS: All The Videos, Demos, Drawings, Graphics And Text Are The Works Of HitoAI Limited And Are Protected By Copyright.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;