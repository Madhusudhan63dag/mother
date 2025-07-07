import React, { useState } from 'react';
import ten from '../assets/imagess/2.webp';

const FAQItem = ({ question, answer, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="group bg-gradient-to-r from-white to-blue-50 rounded-2xl mb-4 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
            <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                    </div>
                    <span className="font-semibold text-gray-900 text-lg">{question}</span>
                </div>
                <span className={`transform transition-all duration-300 ${isOpen ? 'rotate-180 text-blue-600' : 'text-gray-400 group-hover:text-blue-500'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                </span>
            </button>
            {isOpen && (
                <div className="px-6 pb-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-t border-blue-100">
                    <div className="pt-4 pl-12">
                        <p className="text-gray-700 leading-relaxed text-base">{answer}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

const FAQ = ({ translations }) => {
    const faqData = translations.en.faq.faqData;

    return (
        <div className='w-full py-20 px-4 sm:px-8 relative overflow-hidden'>
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">                    
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="">
                            Frequently Asked Questions
                        </span>
                    </h1>
                    
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Everything you need to know about Mother Noni Power Plus and how it can transform your health journey
                    </p>
                </div>
                
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
                    {/* FAQ Questions Section */}
                    <div className="order-2 lg:order-1">
                        <div className="space-y-4">
                            {faqData.map((faq, index) => (
                                <FAQItem
                                    key={index}
                                    index={index}
                                    question={faq.question}
                                    answer={faq.answer}
                                />
                            ))}
                        </div>
                    </div>
                    
                    {/* Image Section */}
                    <div className="order-1 lg:order-2 flex justify-center">
                        <div className="relative">

                            {/* Main image container */}
                            <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-gray-100">
                                <img 
                                    src={ten} 
                                    alt="Mother Noni Power Plus Product Information" 
                                    className="w-full h-auto object-contain rounded-2xl transform hover:scale-105 transition-transform duration-500" 
                                />
                                
                                {/* Image overlay badge */}
                                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-2 rounded-full shadow-lg">
                                    <span className="font-bold text-xs">✓ Trusted</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Section */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 shadow-2xl">
                        <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                            Ready to Start Your Health Transformation?
                        </h3>
                        <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
                            Join thousands of satisfied customers who have already improved their health with Mother Noni Power Plus
                        </p>
                        
                        <a href="/product" className="inline-block">
                            <button className="bg-white text-blue-600 font-bold text-xl py-4 px-8 rounded-2xl hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                                Order Now
                            </button>
                        </a>
                        
                        <div className="mt-4 text-blue-100 text-sm">
                            15-Day Money Back Guarantee | Free Shipping | Expert Support
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;