import React from 'react';
import logo from '../assets/imagess/logo.webp';
import { Facebook, Instagram, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

const Footer = ({ currentLang, translations }) => {
    return (
        <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        
                        {/* Company Info Section */}
                        <div className="lg:col-span-1">
                            <div className="mb-6">
                                <a href={translations[currentLang].nav.homelink || "#"} className="inline-block">
                                    <img src={logo} alt="Mother Noni Power Plus Logo" className="w-40 h-auto filter brightness-0 invert transition-transform duration-300 hover:scale-105" />
                                </a>
                            </div>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                {translations[currentLang].nav.natural || "Your trusted partner in natural health solutions. Transforming lives through science-backed wellness products."}
                            </p>
                            
                            {/* Social Media */}
                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold text-white">Follow Us</h4>
                                <div className="flex space-x-4">
                                    <a 
                                        href="https://www.facebook.com/profile.php?id=61577720910672" 
                                        className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Facebook size={20} />
                                    </a>
                                    <a 
                                        href="https://www.instagram.com/mothernoni_offical" 
                                        className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        <Instagram size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-white border-b border-blue-400/30 pb-2">
                                {translations[currentLang].contact.title || "Contact Info"}
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 group">
                                    <MapPin size={18} className="text-blue-400 mt-1 group-hover:text-blue-300 transition-colors" />
                                    <span className="text-gray-300 group-hover:text-white transition-colors">
                                        {translations[currentLang].contact.address || "123 Health Street, Wellness City"}
                                    </span>
                                </li>
                                <li className="flex items-center gap-3 group">
                                    <Phone size={18} className="text-green-400 group-hover:text-green-300 transition-colors" />
                                    <a href={`tel:${translations[currentLang].contact.phone}`} className="text-gray-300 hover:text-white transition-colors">
                                        {translations[currentLang].contact.phone || "+1 (555) 123-4567"}
                                    </a>
                                </li>
                                <li className="flex items-center gap-3 group">
                                    <Mail size={18} className="text-purple-400 group-hover:text-purple-300 transition-colors" />
                                    <a href={`mailto:${translations[currentLang].contact.email}`} className="text-gray-300 hover:text-white transition-colors">
                                        {translations[currentLang].contact.email || "info@mothernonipower.com"}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-white border-b border-blue-400/30 pb-2">
                                {translations[currentLang].contact.info || "Quick Links"}
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <a 
                                        href={translations[currentLang].nav.homelink} 
                                        className="flex items-center gap-2 text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 group"
                                    >
                                        <ChevronRight size={16} className="text-blue-400 group-hover:text-blue-300" />
                                        {translations[currentLang].nav.home || "Home"}
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href={translations[currentLang].nav.productlink} 
                                        className="flex items-center gap-2 text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 group"
                                    >
                                        <ChevronRight size={16} className="text-blue-400 group-hover:text-blue-300" />
                                        {translations[currentLang].nav.product || "Products"}
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href={translations[currentLang].nav.contactUslink} 
                                        className="flex items-center gap-2 text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 group"
                                    >
                                        <ChevronRight size={16} className="text-blue-400 group-hover:text-blue-300" />
                                        {translations[currentLang].nav.contactUs || "Contact Us"}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Legal & Policies */}
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-white border-b border-blue-400/30 pb-2">
                                {translations[currentLang].contact.det || "Legal & Policies"}
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <a 
                                        href={translations[currentLang].nav.privacyPolicylink} 
                                        className="flex items-center gap-2 text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 group"
                                    >
                                        <ChevronRight size={16} className="text-purple-400 group-hover:text-purple-300" />
                                        {translations[currentLang].nav.privacyPolicy || "Privacy Policy"}
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href={translations[currentLang].nav.termslink} 
                                        className="flex items-center gap-2 text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 group"
                                    >
                                        <ChevronRight size={16} className="text-purple-400 group-hover:text-purple-300" />
                                        {translations[currentLang].nav.terms || "Terms of Service"}
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href={translations[currentLang].nav.returnPolicylink} 
                                        className="flex items-center gap-2 text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 group"
                                    >
                                        <ChevronRight size={16} className="text-purple-400 group-hover:text-purple-300" />
                                        {translations[currentLang].nav.returnPolicy || "Return Policy"}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="border-t border-gray-700/50 bg-black/30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="text-gray-400 text-center md:text-left">
                                {translations[currentLang].nav.lastone || "© 2025 Mother Noni Power Plus. All rights reserved."}
                            </div>
                            <div className="flex items-center gap-6 text-sm text-gray-400">
                                <span>Made with care for your health</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <span>Trusted by 10,000+ customers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;