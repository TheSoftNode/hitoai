import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Copy, Check, Code, BookOpen, Cpu, Key, ChevronRight, ArrowRight, ExternalLink, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface Section {
    id: string;
    name: string;
    icon: React.ComponentType<React.ComponentProps<'svg'>>;
    beta?: boolean;
    new?: boolean;
}

interface Sections {
    gettingStarted: Section[];
    products: Section[];
    api: Section[];
    [key: string]: Section[];
}

interface NavItemProps {
    item: Section;
    section: string;
}

interface NavSectionProps {
    title: string;
    items: Section[];
    isExpandable?: boolean;
}

const DocsPage: React.FC = () => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>('introduction');
    const [copied, setCopied] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [scrollProgress, setScrollProgress] = useState<number>(0);
    const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
        'Products': false,
        'API Reference': false
    });

    useEffect(() => {
        const handleScroll = () => {
            const container = document.getElementById('docs-content');
            if (container) {
                const scrolled = (container.scrollTop / (container.scrollHeight - container.clientHeight)) * 100;
                setScrollProgress(scrolled);
            }
        };

        const container = document.getElementById('docs-content');
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const sections: Sections = {
        gettingStarted: [
            { id: 'introduction', name: 'Introduction', icon: BookOpen },
            { id: 'quickstart', name: 'Quick Start', icon: ArrowRight },
            { id: 'installation', name: 'Installation', icon: Code },
        ],
        products: [
            { id: 'susnet', name: 'SUSNET™', icon: Cpu, beta: true },
            { id: 'selwel', name: 'SELWEL', icon: Cpu },
            { id: 'secuall', name: 'SECUALL', icon: Cpu, new: true },
            { id: 'aimarcom', name: 'AIMARCOM', icon: Cpu },
            { id: '223d', name: '223D', icon: Cpu },
            { id: 'knomed', name: 'KNOMED', icon: Cpu },
            { id: 'ai4physio', name: 'AI4Physio', icon: Cpu, beta: true },
        ],
        api: [
            { id: 'api-overview', name: 'API Overview', icon: Code },
            { id: 'authentication', name: 'Authentication', icon: Key },
            { id: 'endpoints', name: 'Endpoints', icon: Code },
            { id: 'rate-limits', name: 'Rate Limits', icon: Code },
            { id: 'errors', name: 'Error Handling', icon: Code },
            { id: 'webhooks', name: 'Webhooks', icon: Code },
        ]
    };

    const toggleSection = (sectionTitle: string) => {
        setExpandedSections(prev => ({
            ...prev,
            [sectionTitle]: !prev[sectionTitle]
        }));
    };

    const NavItem: React.FC<NavItemProps> = ({ item, section }) => (
        <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
        >
            <button
                onClick={() => {
                    setActiveSection(item.id);
                    setIsNavOpen(false);
                }}
                className={`flex items-center w-full px-3 py-2 text-sm rounded-lg transition-all group relative ${
                    activeSection === item.id
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
            >
                <item.icon className="w-4 h-4 mr-2" />
                <span>{item.name}</span>
                {item.beta && (
                    <span className="ml-2 px-1.5 py-0.5 text-xs rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200">
                        Beta
                    </span>
                )}
                {item.new && (
                    <span className="ml-2 px-1.5 py-0.5 text-xs rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                        New
                    </span>
                )}
                <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
        </motion.li>
    );

    const NavSection: React.FC<NavSectionProps> = ({ title, items, isExpandable = false }) => {
        const isExpanded = expandedSections[title];
        
        return (
            <div className="mb-8">
                <button
                    onClick={() => isExpandable && toggleSection(title)}
                    className={`flex items-center justify-between w-full text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 group ${
                        isExpandable ? 'cursor-pointer hover:text-gray-300' : ''
                    }`}
                >
                    <span>{title}</span>
                    {isExpandable && (
                        <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                                isExpanded ? 'transform rotate-180' : ''
                            }`}
                        />
                    )}
                </button>
                <AnimatePresence initial={false}>
                    {(!isExpandable || isExpanded) && (
                        <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-2 overflow-hidden"
                        >
                            {items.map((item) => (
                                <NavItem key={item.id} item={item} section={title} />
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        );
    };

    return (
        <div className="h-screen w-full bg-white dark:bg-gray-900 overflow-hidden">
            {/* Progress bar */}
            <div
                className="fixed top-0 left-0 h-1 bg-blue-500 z-50 transition-all duration-300"
                style={{ width: `${scrollProgress}%` }}
            />

            <div className="flex h-full">
                {/* Navigation Sidebar */}
                <aside
                    className={`fixed lg:relative inset-y-0 left-0 z-0 w-72 transform transition-transform duration-300 ease-in-out
                    ${isNavOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                    bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800
                    flex flex-col h-full`}
                >
                    <div className="sticky top-0 bg-white dark:bg-gray-900 z-10 p-6 border-b border-gray-200 dark:border-gray-800">
                        <motion.h1
                            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            HitoAI Docs
                        </motion.h1>

                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search documentation..."
                                className="w-full px-4 py-2 pl-10 bg-gray-100 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                        </div>
                    </div>

                    <nav className="flex-1 overflow-y-auto px-6 py-6">
                        <div className="space-y-2">
                            <NavSection
                                title="Getting Started"
                                items={sections.gettingStarted}
                            />
                            <NavSection
                                title="Products"
                                items={sections.products}
                                isExpandable={true}
                            />
                            <NavSection
                                title="API Reference"
                                items={sections.api}
                                isExpandable={true}
                            />
                        </div>
                    </nav>
                </aside>

                {/* Mobile Navigation Toggle */}
                <button
                    className="fixed top-16 left-4 z-50 lg:hidden bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg"
                    onClick={() => setIsNavOpen(!isNavOpen)}
                >
                    <Menu size={24} className="text-gray-600 dark:text-gray-300" />
                </button>

                {/* Overlay for mobile nav */}
                {isNavOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                        onClick={() => setIsNavOpen(false)}
                    />
                )}

                {/* Main Content */}
                <main
                    id="docs-content"
                    className="flex-1 overflow-y-auto relative w-full"
                >
                    <div className="max-w-4xl mx-auto px-4 py-8 lg:px-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSection}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="prose dark:prose-invert max-w-none"
                            >
                                {activeSection === 'introduction' && (
                                    <div className="space-y-6">
                                        <h1>Welcome to HitoAI Documentation</h1>

                                        <Alert>
                                            <AlertDescription>
                                                This documentation is currently in beta. Some features might change without notice.
                                            </AlertDescription>
                                        </Alert>

                                        <p className="text-lg text-gray-600 dark:text-gray-300">
                                            Learn how to integrate and leverage HitoAI's powerful AI solutions for your applications.
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            {['Quick Start', 'API Reference', 'Tutorials', 'Examples'].map((item) => (
                                                <motion.div
                                                    key={item}
                                                    className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors cursor-pointer group"
                                                    whileHover={{ y: -2 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <h3 className="flex items-center text-lg font-semibold mb-2">
                                                        {item}
                                                        <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    </h3>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                                        Everything you need to know about {item.toLowerCase()}.
                                                    </p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DocsPage;