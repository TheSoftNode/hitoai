import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, User } from 'lucide-react';
import { Link } from 'react-router-dom';
// import hitoai from "../../assets/logo.jpeg"
import hitoai from "../../assets/newlogo.png"

const Navbar = () =>
{
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Replace with your auth state

    const products = [
        { name: 'SUSNET™', path: '/susnet' },
        { name: 'SELWEL', path: '/selwell' },
        { name: 'SECUALL', path: '/secuall' },
        { name: 'KNOMED', path: '/knomed' },
        { name: 'Aimarcom', path: '/aimarcom' },
        { name: 'Ai4Physio', path: '/ai4physio' },
    ];

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Documentations', path: '/documentation' },
        { name: 'Products', path: '', hasDropdown: true },
        { name: 'Services', path: '/services' },
        { name: 'APIs', path: '/apis' },
    ];

    useEffect(() =>
    {
        const handleScroll = () =>
        {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) =>
    {
        e.preventDefault();
        console.log('Search Query:', searchQuery);
    };

    const handleDropdownClick = (dropdownName: string) =>
    {
        setActiveDropdown(activeDropdown === dropdownName ? '' : dropdownName);
    };

    const handleClickOutside = (e: MouseEvent) =>
    {
        if (e.target && !(e.target as Element).closest('.dropdown-container'))
        {
            setActiveDropdown('');
        }
    };

    useEffect(() =>
    {
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-blue-950/90 backdrop-blur-md shadow-lg' : 'bg-gradient-to-br from-blue-950 to-indigo-900'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center space-x-4">
                        <img
                            className="h-12 w-12 rounded-full object-cover transition-all hover:scale-110 hover:rotate-6"
                            src={hitoai}
                            alt="HitoAI"
                        />
                        <span className="text-white text-2xl font-bold tracking-wider">HitoAI</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {/* Search Bar */}
                        <form onSubmit={handleSearch} className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-64 px-4 py-2 rounded-full bg-white/10 border border-blue-400/20 text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                            />
                            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-300 hover:text-white transition-colors">
                                <Search size={18} />
                            </button>
                        </form>

                        {/* Navigation Links */}
                        <div className="flex items-center space-x-6">
                            {navItems.map((item) => (
                                <div key={item.name} className="relative dropdown-container">
                                    <Link
                                        to={item.path}
                                        className="text-blue-200 hover:text-white transition-colors flex items-center space-x-1"
                                        onClick={() => item.hasDropdown && handleDropdownClick(item.name)}
                                        onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                                    >
                                        <span>{item.name}</span>
                                        {item.hasDropdown && (
                                            <ChevronDown
                                                size={16}
                                                className={`transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        )}
                                    </Link>

                                    {item.hasDropdown && activeDropdown === item.name && (
                                        <div
                                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-lg bg-blue-900/90 backdrop-blur-lg border border-blue-400/20 shadow-xl"
                                            onMouseLeave={() => setActiveDropdown('')}
                                        >
                                            <div className="py-2">
                                                {products.map((product) => (
                                                    <Link
                                                        key={product.path}
                                                        to={product.path}
                                                        className="block w-full px-4 py-2 text-sm text-blue-200 hover:bg-blue-500/20 hover:text-white transition-colors text-left"
                                                    >
                                                        {product.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* User Avatar Dropdown */}
                            <div className="relative dropdown-container">
                                <button
                                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                    onClick={() => handleDropdownClick('user')}
                                >
                                    <User size={20} className="text-blue-200" />
                                </button>

                                {activeDropdown === 'user' && (
                                    <div className="absolute top-full right-0 mt-3 w-48 rounded-lg bg-blue-900/90 backdrop-blur-lg border border-blue-400/20 shadow-xl">
                                        <div className="py-2">
                                            {isAuthenticated ? (
                                                <>
                                                    <Link
                                                        to="/profile"
                                                        className="block px-4 py-2 text-sm text-blue-200 hover:bg-blue-500/20 hover:text-white transition-colors"
                                                    >
                                                        Profile
                                                    </Link>
                                                    <button
                                                        onClick={() =>
                                                        {
                                                            setIsAuthenticated(false);
                                                            setActiveDropdown('');
                                                        }}
                                                        className="block w-full px-4 py-2 text-sm text-blue-200 hover:bg-blue-500/20 hover:text-white transition-colors text-left"
                                                    >
                                                        Logout
                                                    </button>
                                                </>
                                            ) : (
                                                <>
                                                    <Link
                                                        to="/login"
                                                        className="block px-4 py-2 text-sm text-blue-200 hover:bg-blue-500/20 hover:text-white transition-colors"
                                                    >
                                                        Login
                                                    </Link>
                                                    <Link
                                                        to="/register"
                                                        className="block px-4 py-2 text-sm text-blue-200 hover:bg-blue-500/20 hover:text-white transition-colors"
                                                    >
                                                        Register
                                                    </Link>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden text-blue-300 hover:text-white transition-colors"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden bg-blue-950/95 backdrop-blur-md`}
            >
                <div className="px-4 pt-2 pb-6 space-y-4">
                    <form onSubmit={handleSearch} className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-2 rounded-full bg-white/10 border border-blue-400/20 text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                        />
                        <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-300 hover:text-white">
                            <Search size={18} />
                        </button>
                    </form>

                    <div className="space-y-1">
                        {navItems.map((item) => (
                            <div key={item.name}>
                                <Link
                                    to={item.path}
                                    onClick={() => item.hasDropdown ? handleDropdownClick(item.name) : setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-between w-full px-4 py-2 text-left text-blue-200 hover:bg-blue-500/20 hover:text-white rounded-lg transition-colors"
                                >
                                    <span>{item.name}</span>
                                    {item.hasDropdown && (
                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''
                                                }`}
                                        />
                                    )}
                                </Link>

                                {item.hasDropdown && activeDropdown === item.name && (
                                    <div className="pl-4 space-y-1 mt-1">
                                        {products.map((product) => (
                                            <Link
                                                key={product.path}
                                                to={product.path}
                                                className="block px-4 py-2 text-sm text-blue-200 hover:bg-blue-500/20 hover:text-white rounded-lg transition-colors"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {product.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Mobile Auth Links */}
                        <div className="border-t border-blue-800 mt-2 pt-2">
                            {isAuthenticated ? (
                                <>
                                    <Link
                                        to="/profile"
                                        className="block px-4 py-2 text-blue-200 hover:bg-blue-500/20 hover:text-white rounded-lg transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Profile
                                    </Link>
                                    <button
                                        onClick={() =>
                                        {
                                            setIsAuthenticated(false);
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className="block w-full px-4 py-2 text-left text-blue-200 hover:bg-blue-500/20 hover:text-white rounded-lg transition-colors"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        className="block px-4 py-2 text-blue-200 hover:bg-blue-500/20 hover:text-white rounded-lg transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="block px-4 py-2 text-blue-200 hover:bg-blue-500/20 hover:text-white rounded-lg transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;