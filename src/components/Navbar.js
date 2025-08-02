import React, { useState, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/imagess/logo.webp';
import icons_three from '../assets/imagess/icon2.webp';
import icons_four from '../assets/imagess/icon1.webp';

const Navbar = ({ currentLang, setCurrentLang, translations, languages }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    console.log('Current Language:', currentLang);
    console.log('Translations:', translations);

    const nav = translations[currentLang]?.nav;

    console.log('Nav:', nav);

    if (!nav) {
        return null; // or some fallback UI
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isLangMenuOpen) setIsLangMenuOpen(false);
    };


    return (
        <>
            {/* Enhanced Promotional Banner */}
            <div className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white py-3 relative overflow-hidden z-50 border-b-2 border-gradient-to-r from-orange-500/30 to-green-500/30">
                <style jsx>
                    {`
                    @keyframes smoothSlide {
                        0% { transform: translateX(100%); }
                        100% { transform: translateX(-100%); }
                    }
                    
                    @keyframes colorShift {
                        0%, 100% { 
                            background: linear-gradient(135deg, #d94326, #ff6b4a);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            background-clip: text;
                        }
                        25% { 
                            background: linear-gradient(135deg, #0b6e1f, #22c55e);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            background-clip: text;
                        }
                        50% { 
                            background: linear-gradient(135deg, #d94326, #f97316);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            background-clip: text;
                        }
                        75% { 
                            background: linear-gradient(135deg, #0b6e1f, #16a34a);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            background-clip: text;
                        }
                    }
                    
                    @keyframes sparkle {
                        0%, 100% { opacity: 0.4; transform: scale(1); }
                        50% { opacity: 1; transform: scale(1.2); }
                    }
                    
                    .promo-slider {
                        animation: smoothSlide 25s linear infinite;
                        white-space: nowrap;
                    }
                    
                    .promo-slider:hover {
                        animation-play-state: paused;
                    }
                    
                    .promo-item {
                        position: relative;
                        padding: 0 2.5rem;
                        background: linear-gradient(135deg, #d94326, #0b6e1f);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        font-weight: 700;
                        letter-spacing: 0.5px;
                        transition: all 0.3s ease;
                    }
                    
                    .promo-item:hover {
                        animation: colorShift 2s ease-in-out infinite;
                    }
                    
                    .promo-item::before {
                        content: '✨';
                        margin-right: 10px;
                        color: #d94326;
                        animation: sparkle 3s ease-in-out infinite;
                        filter: drop-shadow(0 0 4px rgba(217, 67, 38, 0.5));
                    }
                    
                    .promo-item:nth-child(2)::before {
                        color: #0b6e1f;
                        filter: drop-shadow(0 0 4px rgba(11, 110, 31, 0.5));
                    }
                    
                    .promo-item:nth-child(3)::before {
                        color: #d94326;
                        filter: drop-shadow(0 0 4px rgba(217, 67, 38, 0.5));
                    }
                    
                    .promo-item:nth-child(4)::before {
                        color: #0b6e1f;
                        filter: drop-shadow(0 0 4px rgba(11, 110, 31, 0.5));
                    }
                    
                    .banner-gradient {
                        background: linear-gradient(90deg, 
                            rgba(217, 67, 38, 0.1) 0%, 
                            rgba(11, 110, 31, 0.1) 25%, 
                            rgba(217, 67, 38, 0.1) 50%, 
                            rgba(11, 110, 31, 0.1) 75%, 
                            rgba(217, 67, 38, 0.1) 100%
                        );
                        animation: smoothSlide 30s linear infinite reverse;
                    }
                    `}
                </style>
                
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 banner-gradient opacity-20"></div>
                
                {/* Enhanced Labels */}
                <div className="promo-slider relative z-10">
                    <span className="text-sm font-bold flex items-center space-x-16 tracking-wide">
                        <span className="promo-item">
                            LIMITED TIME OFFER - 33% OFF
                        </span>
                        <span className="promo-item">
                            100% SATISFACTION GUARANTEED
                        </span>
                        <span className="promo-item">
                            FAST & SECURE DELIVERY
                        </span>
                        <span className="promo-item">
                            LIMITED TIME OFFER - 33% OFF
                        </span>
                        <span className="promo-item">
                            100% SATISFACTION GUARANTEED
                        </span>
                        <span className="promo-item">
                            FAST & SECURE DELIVERY
                        </span>
                        <span className="promo-item">
                            LIMITED TIME OFFER - 33% OFF
                        </span>
                        <span className="promo-item">
                            100% SATISFACTION GUARANTEED
                        </span>
                        <span className="promo-item">
                            FAST & SECURE DELIVERY
                        </span>
                    </span>
                </div>
            </div>

            <nav className={`relative z-50 transition-all duration-700 ${
                scrolled 
                    ? 'bg-white/98 backdrop-blur-2xl shadow-xl border-b border-orange-100' 
                    : 'bg-gradient-to-r from-white/95 via-orange-50/30 to-green-50/30 backdrop-blur-xl'
            }`}>
                {/* Modern Animation Keyframes */}
                <style jsx>{`
                    @keyframes fadeInUp {
                        0% { transform: translateY(20px); opacity: 0; }
                        100% { transform: translateY(0); opacity: 1; }
                    }
                    
                    @keyframes smoothFloat {
                        0%, 100% { transform: translateY(0px) rotate(0deg); }
                        50% { transform: translateY(-2px) rotate(1deg); }
                    }
                    
                    @keyframes premiumGlow {
                        0%, 100% { 
                            box-shadow: 0 4px 20px rgba(217, 67, 38, 0.1), 0 0 0 1px rgba(217, 67, 38, 0.1);
                            transform: scale(1);
                        }
                        50% { 
                            box-shadow: 0 8px 30px rgba(217, 67, 38, 0.2), 0 0 0 1px rgba(217, 67, 38, 0.2);
                            transform: scale(1.01);
                        }
                    }
                    
                    @keyframes shimmer {
                        0% { background-position: -200% 0; }
                        100% { background-position: 200% 0; }
                    }
                    
                    .fade-in-up { animation: fadeInUp 0.6s ease-out forwards; }
                    .smooth-float { animation: smoothFloat 4s ease-in-out infinite; }
                    .premium-glow { animation: premiumGlow 3s ease-in-out infinite; }
                    
                    .nav-item {
                        position: relative;
                        background: linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,250,245,0.8));
                        border: 1px solid rgba(217, 67, 38, 0.1);
                        backdrop-filter: blur(20px);
                        border-radius: 16px;
                        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                        overflow: hidden;
                    }
                    
                    .nav-item::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: -100%;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(
                            90deg,
                            transparent,
                            rgba(217, 67, 38, 0.05),
                            transparent
                        );
                        transition: left 0.6s ease;
                    }
                    
                    .nav-item:hover::before {
                        left: 100%;
                    }
                    
                    .nav-item:hover {
                        transform: translateY(-3px) scale(1.02);
                        box-shadow: 
                            0 12px 40px rgba(217, 67, 38, 0.12),
                            0 4px 12px rgba(0, 0, 0, 0.1);
                        border-color: rgba(217, 67, 38, 0.3);
                    }
                    
                    .nav-item.product-special {
                        background: linear-gradient(135deg, 
                            rgba(11, 110, 31, 0.05), 
                            rgba(255,255,255,0.95)
                        );
                        border: 1px solid rgba(11, 110, 31, 0.2);
                    }
                    
                    .nav-item.product-special::before {
                        background: linear-gradient(
                            90deg,
                            transparent,
                            rgba(11, 110, 31, 0.08),
                            transparent
                        );
                    }
                    
                    .nav-item.product-special:hover {
                        box-shadow: 
                            0 12px 40px rgba(11, 110, 31, 0.15),
                            0 4px 12px rgba(0, 0, 0, 0.1);
                        border-color: rgba(11, 110, 31, 0.4);
                    }
                    
                    .brand-logo {
                        filter: drop-shadow(0 4px 12px rgba(217, 67, 38, 0.2));
                        transition: all 0.4s ease;
                    }
                    
                    .brand-logo:hover {
                        filter: drop-shadow(0 8px 20px rgba(217, 67, 38, 0.3));
                        transform: scale(1.05) rotate(2deg);
                    }
                    
                    .mobile-menu-backdrop {
                        background: linear-gradient(135deg, 
                            rgba(255,255,255,0.98), 
                            rgba(255,245,240,0.95)
                        );
                        backdrop-filter: blur(25px);
                        border: 1px solid rgba(217, 67, 38, 0.1);
                        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
                    }
                    
                    .interactive-ripple {
                        position: relative;
                        overflow: hidden;
                    }
                    
                    .interactive-ripple::after {
                        content: '';
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        width: 0;
                        height: 0;
                        border-radius: 50%;
                        background: radial-gradient(circle, rgba(217, 67, 38, 0.2) 0%, transparent 70%);
                        transform: translate(-50%, -50%);
                        transition: width 0.4s ease, height 0.4s ease;
                    }
                    
                    .interactive-ripple:active::after {
                        width: 200px;
                        height: 200px;
                    }
                    
                    @keyframes slideInFromTop {
                        0% { transform: translateY(-20px); opacity: 0; }
                        100% { transform: translateY(0); opacity: 1; }
                    }
                    
                    .slide-in-top { animation: slideInFromTop 0.5s ease-out; }
                    
                    .nav-text {
                        background: linear-gradient(135deg, #374151, #d94326);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        font-weight: 600;
                        transition: all 0.3s ease;
                    }
                    
                    .nav-text:hover {
                        background: linear-gradient(135deg, #d94326, #0b6e1f);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                    }
                    
                    .product-text {
                        background: linear-gradient(135deg, #0b6e1f, #166534);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        font-weight: 600;
                    }
                `}</style>

                <div className="h-18 sm:h-22 px-6">
                    <div className="flex items-center justify-between max-w-7xl mx-auto">
                        {/* Premium Logo Section */}
                        <div className={`flex-shrink-0`}>
                            <a href={nav.homelink || "#"} className="">
                                <div className="relative">
                                    <div className="relative">
                                        <img 
                                            src={logo} 
                                            alt="Mother Noni Power Plus Premium Logo" 
                                            className="h-24 sm:h-24 md:h-24" 
                                        />
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* Right-aligned Navigation */}
                        <div className="hidden lg:flex items-center ml-auto">
                            <div className="flex items-center space-x-6">
                                <a href={nav.homelink || "#"} className={`py-4 flex items-center`}>
                                    <div className="">
                                        <img src={icons_four} alt="Home" className="h-5 w-5" />
                                    </div>
                                    <span className="text-lg font-bold text-[#1F7818]">{nav.home}</span>
                                </a>

                                <a href={nav.aboutUslink || "#"} className={`py-4 flex items-center space-x-3`}>
                                    <div className="p-2">
                                        <svg className="h-5 w-5 text-[#1F7818]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <span className="text-lg font-bold text-[#1F7818]">{nav.aboutUs}</span>
                                </a>

                                <a href={nav.productlink || "#"}
                                    className={`product-special py-4 flex items-center space-x-3`}>
                                    <div className="p-2 bg-green-50 rounded-lg">
                                        <img src={icons_three} alt="Products" className="h-5 w-5" />
                                    </div>
                                    <span className="text-lg font-bold text-[#1F7818]">{nav.product}</span>
                                </a>

                                <a href={nav.contactUslink || "#"} className={`py-4 flex items-center space-x-3`}>
                                    <div className="p-2">
                                        <svg className="h-5 w-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <span className="text-lg font-bold text-[#1F7818]">{nav.contactUs}</span>
                                </a>
                            </div>
                        </div>

                        {/* Modern Mobile Menu */}
                        <div className="flex items-center lg:hidden">
                            <div>
                                <button 
                                    onClick={toggleMenu} 
                                    className="p-4" 
                                >
                                    <div className="relative">
                                        {isMenuOpen ? (
                                            <X size={24} className="text-orange-600 transition-all duration-500 group-hover:rotate-180" />
                                        ) : (
                                            <Menu size={24} className="text-orange-600 transition-all duration-300 group-hover:scale-110" />
                                        )}
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modern Mobile Navigation Menu */}
                {isMenuOpen && (
                    <>
                        <div className="lg:hidden fixed inset-0 bg-gradient-to-br from-black/40 via-gray-900/30 to-black/40 backdrop-blur-md z-40" onClick={toggleMenu}></div>
                        <div className="lg:hidden fixed top-20 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl z-50 overflow-hidden shadow-2xl border border-orange-200/30 slide-in-top">
                            <div className="p-6">
                                {/* Modern Menu Header */}
                                <div className="text-center mb-6 relative">
                                    <div className="relative py-4">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                                            Navigation
                                        </h3>
                                    </div>
                                </div>

                                {/* Sleek Menu Items */}
                                <div className="space-y-2">
                                    <a href={nav.homelink || "#"}
                                        className="group flex items-center px-4 py-4 "
                                        onClick={toggleMenu}>
                                        <div className="flex items-center space-x-4 w-full">
                                            <div className="p-2 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-all duration-300">
                                                <img src={icons_four} alt="Home" className="h-5 w-5" />
                                            </div>
                                            <span className="text-base font-semibold text-[#1F7818] group-hover:text-orange-700 transition-colors duration-300">
                                                {nav.home}
                                            </span>
                                            <div className="ml-auto">
                                                <svg className="h-4 w-4 text-orange-600 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </a>

                                    <a href={nav.aboutUslink || "#"}
                                        className="group flex items-center px-4 py-4"
                                        onClick={toggleMenu}>
                                        <div className="flex items-center space-x-4 w-full">
                                            <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-all duration-300">
                                                <svg className="h-5 w-5 text-[#1F7818]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <span className="text-base font-semibold text-[#1F7818] group-hover:text-blue-700 transition-colors duration-300">
                                                {nav.aboutUs}
                                            </span>
                                            <div className="ml-auto">
                                                <svg className="h-4 w-4 text-blue-600 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </a>

                                    <a href={nav.productlink || "#"}
                                        className="group flex items-center px-4 py-4"
                                        onClick={toggleMenu}>
                                        <div className="flex items-center space-x-4 w-full">
                                            <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-all duration-300">
                                                <img src={icons_three} alt="Products" className="h-5 w-5" />
                                            </div>
                                            <span className="text-base font-semibold text-[#1F7818] group-hover:text-green-700 transition-colors duration-300">
                                                {nav.product}
                                            </span>
                                            <div className="ml-auto">
                                                <svg className="h-4 w-4 text-green-600 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </a>

                                    <a href={nav.contactUslink || "#"}
                                        className="group flex items-center px-4 py-4 "
                                        onClick={toggleMenu}>
                                        <div className="flex items-center space-x-4 w-full">
                                            <div className="p-2 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-all duration-300">
                                                <svg className="h-5 w-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <span className="text-base font-semibold text-[#1F7818] group-hover:text-orange-700 transition-colors duration-300">
                                                {nav.contactUs}
                                            </span>
                                            <div className="ml-auto">
                                                <svg className="h-4 w-4 text-orange-600 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                {/* Bottom Action Area */}
                                <div className="mt-6 pt-4 border-t border-gray-200/50">
                                    <button 
                                        onClick={toggleMenu}
                                        className="w-full py-3 px-4 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 rounded-lg text-gray-700 font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                                    >
                                        <X size={18} />
                                        <span>Close Menu</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </nav>
        </>
    );
};

export default Navbar;