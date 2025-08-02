import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import banner1 from '../assets/imagess/banner1.webp';
import banner1Mobile from '../assets/imagess/banner1.webp';
import banner3 from '../assets/imagess/banner2.webp';
import banner3Mobile from '../assets/imagess/banner2.webp';
import banner2 from '../assets/imagess/banner3.webp';
import product from '../assets/imagess/3.webp';
import FAQ from '../components/FAQ';
import home2 from '../assets/imagess/home2.webp';
import pr1 from '../assets/pr/1.webp';
import pr2 from '../assets/pr/2.webp';
import pr3 from '../assets/pr/3.webp';
import pr4 from '../assets/pr/4.webp';
import pr5 from '../assets/pr/5.webp';
import pr6 from '../assets/pr/6.webp';
import pr7 from '../assets/pr/7.webp';
import pr8 from '../assets/pr/8.webp';
import pr9 from '../assets/pr/9.webp';
import pr10 from '../assets/pr/10.webp';
import pr11 from '../assets/pr/11.webp';
import pr12 from '../assets/pr/12.webp';
import pr13 from '../assets/pr/13.webp';

const logoCarouselStyles = `
    @keyframes scrollx {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-100% / 4)); /* Adjust based on number of logos */
    }
    }

    .logo-carousel {
    width: 100%;
    overflow: hidden;
    padding: 20px 0;
    background: linear-gradient(90deg, white 0%, rgba(255,255,255,0) 5%, rgba(255,255,255,0) 95%, white 100%);
    }

    .animate-scrollx {
    animation: scrollx 20s linear infinite;
    width: fit-content;
    }

    /* Make sure there's enough content for seamless looping */
    .animate-scrollx:hover {
    animation-play-state: paused;
    }
`;

if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = logoCarouselStyles;
  document.head.appendChild(styleElement);
}

const Hero = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const banners = [
        {
            desktop: banner1,
            mobile: banner1Mobile,
        },
        {
            desktop: banner2,
            mobile: banner2,
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % banners.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        setIsLoaded(true);
        
        // Handle screen resize
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        window.addEventListener('resize', handleResize);

        // Auto-slide timer
        const slideTimer = setInterval(() => {
            nextSlide();
        }, 5000);
        
        return () => {
            window.removeEventListener('resize', handleResize);
            clearInterval(slideTimer);
        };
    }, []);

    return (
        <div className="w-full relative bg-gradient-to-b from-gray-50 to-white">
            <div className="relative">
                {/* Hero Content Container */}
                <div className="">
                    {/* Hero Card */}
                    <div className={`hero-card overflow-hidden ${isLoaded ? 'fade-in-scale' : 'opacity-0'}`}>
                        {/* Banner Images */}
                        <div className="relative w-full h-[200px] md:h-[550px]">
                            <div className="w-full h-full image-container image-shimmer relative">
                                {banners.map((banner, index) => (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 w-full h-full transition-all duration-500 transform ${
                                            index === currentSlide 
                                                ? 'opacity-100 translate-x-0' 
                                                : index < currentSlide 
                                                    ? 'opacity-0 -translate-x-full' 
                                                    : 'opacity-0 translate-x-full'
                                        }`}
                                    >
                                        <img
                                            src={isMobile ? banner.mobile : banner.desktop}
                                            alt={`Banner ${index + 1}`}
                                            className="w-full h-full"
                                        />
                                    </div>
                                ))}

                                {/* Navigation Arrows */}
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
                                >
                                    <ChevronLeft className="w-6 h-6 text-gray-800" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
                                >
                                    <ChevronRight className="w-6 h-6 text-gray-800" />
                                </button>

                                {/* Dots Navigation */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                                    {banners.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToSlide(index)}
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                currentSlide === index 
                                                    ? 'bg-white w-4' 
                                                    : 'bg-white/50 hover:bg-white/80'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Lifestyle Section */}
                    <div className={`mt-12 grid md:grid-cols-2 gap-8 items-center px-4 ${isLoaded ? 'fade-in-scale' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
                        {/* Image Container */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#fcb000]/20 to-[#fcb000]/20 mix-blend-overlay"></div>
                            <img
                                src={home2}
                                alt="Happy senior couple enjoying healthy lifestyle"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                <span className="text-[#fcb000]">
                                    Transform Your Life with Mother Noni Power Plus
                                </span>
                            </h2>
                            
                            <div className="space-y-6">
                                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-sm">
                                    <h3 className="text-xl font-semibold text-[#fcb000] mb-2">Complete Herbal Wellness Tonic</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Experience a life of vitality and wellness with Mother Noni Power Plus. Our scientifically formulated 100% herbal health supplement contains over 25 time-tested Ayurvedic ingredients that work in harmony to support multiple aspects of your well-being.
                                    </p>
                                </div>

                                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-sm">
                                    <h3 className="text-xl font-semibold text-[#fcb000] mb-2">All-in-One Health Solution</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        From blood sugar management to weight loss, joint pain relief to digestive health - this powerful herbal juice addresses multiple health concerns naturally, without any side effects.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Benefits:</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center space-x-3">
                                        <span className="flex-shrink-0 w-6 h-6 bg-gray-50 text-[#22c55e] rounded-full flex items-center justify-center shadow-sm border border-[#22c55e]/20">✓</span>
                                        <span className="text-gray-700">Helps lower and control blood sugar levels</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <span className="flex-shrink-0 w-6 h-6 bg-gray-50 text-[#fcb000] rounded-full flex items-center justify-center shadow-sm border border-[#fcb000]/20">✓</span>
                                        <span className="text-gray-700">Aids natural weight loss without appetite suppression</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <span className="flex-shrink-0 w-6 h-6 bg-gray-50 text-[#22c55e] rounded-full flex items-center justify-center shadow-sm border border-[#22c55e]/20">✓</span>
                                        <span className="text-gray-700">Provides joint pain relief and reduces inflammation</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <span className="flex-shrink-0 w-6 h-6 bg-gray-50 text-[#fcb000] rounded-full flex items-center justify-center shadow-sm border border-[#fcb000]/20">✓</span>
                                        <span className="text-gray-700">Enhances liver function and digestive health</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <span className="flex-shrink-0 w-6 h-6 bg-gray-50 text-[#22c55e] rounded-full flex items-center justify-center shadow-sm border border-[#22c55e]/20">✓</span>
                                        <span className="text-gray-700">Supports thyroid function and hormone balance</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <span className="flex-shrink-0 w-6 h-6 bg-gray-50 text-[#fcb000] rounded-full flex items-center justify-center shadow-sm border border-[#fcb000]/20">✓</span>
                                        <span className="text-gray-700">Relieves gastric problems and improves gut health</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProductSection = () => {
    return (
        <div className="w-full">
            <div className="w-full">
                {/* <img src={stamp} alt="Stamp" className="w-screen h-auto" /> */}
                {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center items-center mx-auto">
                    <div>
                        <img src={one} alt="Customer Trusted Brand 1" className="max-w-full h-auto" />
                    </div>
                    <div>
                        <img src={two} alt="Customer Trusted Brand 2" className="max-w-full h-auto" />
                    </div>
                    <div>
                        <img src={three} alt="Customer Trusted Brand 3" className="max-w-full h-auto" />
                    </div>
                    <div>
                        <img src={four} alt="Customer Trusted Brand 4" className="w-[8.5rem] h-auto" />
                    </div>
                </div> */}
            </div>
        </div>
    );
};

const Product = ({ currentLang, translations }) => {
    const productRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
            title: "100% Natural Formula",
            description: "Made with pure herbal extracts and ayurvedic ingredients",
            color: "from-[#22c55e] to-[#22c55e]"
        },
        {
            title: "Scientifically Proven",
            description: "Clinically tested and research-backed effectiveness",
            color: "from-[#fcb000] to-[#fcb000]"
        },
        {
            title: "Safe & Gentle",
            description: "No harmful side effects, suitable for long-term use",
            color: "from-gray-500 to-gray-600"
        },
        {
            title: "Fast Results",
            description: "Notice improvements within the first few weeks",
            color: "from-[#22c55e] to-[#fcb000]"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature(prev => (prev + 1) % features.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div ref={productRef} className="relative py-20 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-[#22c55e]/10 to-[#fcb000]/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-gray-200/30 to-[#22c55e]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#fcb000]/10 to-gray-100/20 rounded-full blur-3xl"></div>
            </div>

            <div className="px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Enhanced Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="text-gray-800">
                            {translations[currentLang]?.product?.title || "Mother Noni Power Plus"}
                        </span>
                    </h1>
                    
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#fcb000]">
                        {translations[currentLang]?.product?.subtitle || "Your Complete Herbal Wellness Tonic"}
                    </h2>
                </div>

                {/* Main Product Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Product Image Side */}
                    <div className="relative">
                        <div 
                            className="relative group cursor-pointer"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {/* Floating Background Card */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl shadow-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-3xl shadow-xl transform -rotate-2 group-hover:-rotate-3 transition-transform duration-500"></div>
                            
                            {/* Main Product Image */}
                            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 overflow-hidden">
                                {/* Shimmer Effect */}
                                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer group-hover:translate-x-full transition-transform duration-1000"></div>
                                
                                <img
                                    src={product}
                                    alt="Mother Noni Power Plus - Complete Herbal Wellness Tonic"
                                    className={`w-full h-auto transform transition-all duration-500 ${isHovered ? 'scale-105 rotate-2' : 'scale-100'}`}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h4 className="text-xl font-semibold text-gray-700 text-center">
                                Mother Noni Power Plus contains over 25 time-tested Ayurvedic
                            </h4>
                            
                            <div className="text-center mb-8">
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    ingredients that work together to address multiple health concerns naturally and effectively.
                                </p>
                            </div>

                            {/* Solution Section */}
                            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-[#22c55e] mt-8">
                                <div className="text-center mb-6">
                                    <h4 className="text-2xl font-bold text-[#22c55e] mb-3">Mother Noni Power Plus: Your Complete Health Solution</h4>
                                    <p className="text-lg text-gray-700">One powerful herbal formula that naturally addresses multiple health challenges simultaneously</p>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {/* First Row */}
                                    <div className="text-center bg-white/70 rounded-lg p-4">
                                        <h5 className="font-semibold text-[#fcb000] mb-2">Blood Sugar & Weight Management</h5>
                                        <p className="text-sm text-gray-600">Controls glucose levels and aids natural weight loss</p>
                                    </div>
                                    <div className="text-center bg-white/70 rounded-lg p-4">
                                        <h5 className="font-semibold text-[#fcb000] mb-2">Joint Pain & Inflammation Relief</h5>
                                        <p className="text-sm text-gray-600">Reduces pain and inflammation for better mobility</p>
                                    </div>
                                    <div className="text-center bg-white/70 rounded-lg p-4">
                                        <h5 className="font-semibold text-[#fcb000] mb-2">Liver & Digestive Health</h5>
                                        <p className="text-sm text-gray-600">Enhances liver function and digestive wellness</p>
                                    </div>
                                    
                                    {/* Second Row */}
                                    <div className="text-center bg-white/70 rounded-lg p-4 md:col-start-1 lg:col-start-1">
                                        <h5 className="font-semibold text-[#fcb000] mb-2">Thyroid Function Support</h5>
                                        <p className="text-sm text-gray-600">Helps regulate thyroid hormones and metabolism</p>
                                    </div>
                                    <div className="text-center bg-white/70 rounded-lg p-4">
                                        <h5 className="font-semibold text-[#fcb000] mb-2">Gastric Problem Relief</h5>
                                        <p className="text-sm text-gray-600">Soothes acidity, gastritis and improves gut health</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="/product" className="flex-1">                                    
                                <button className="w-full bg-gradient-to-r from-[#22c55e] to-[#22c55e] text-white font-bold py-4 px-8 rounded-xl hover:from-[#fcb000] hover:to-[#fcb000] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                                    Order Now - Start Your Journey
                                </button>
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex items-center justify-center space-x-8 pt-6 border-t border-gray-200">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-[#22c55e]">10,000+</div>
                                <div className="text-sm text-gray-600">Happy Customers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-[#fcb000]">4.8/5</div>
                                <div className="text-sm text-gray-600">Customer Rating</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-[#22c55e]">95%</div>
                                <div className="text-sm text-gray-600">Success Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-shimmer {
                    animation: shimmer 2s infinite;
                }
            `}</style>
        </div>
    );
};

const Testimonials = ({ currentLang, translations }) => {
    const testimonials = translations[currentLang]?.testimonials?.testimonial || [];
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-slide functionality
    useEffect(() => {
        if (!isHovered && testimonials.length > 0) {
            const interval = setInterval(() => {
                setCurrentSlide((prevSlide) => {
                    const nextSlide = prevSlide + 1;
                    if (nextSlide >= testimonials.length) {
                        return 0;
                    }
                    return nextSlide;
                });
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [testimonials.length, isHovered]);

    // Helper function to render star ratings
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < rating ? 'text-[#fcb000]' : 'text-gray-300'}`}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            );
        }
        return stars;
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => 
            prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
        );
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => 
            prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
        );
    };

    if (!testimonials || testimonials.length === 0) {
        return null;
    }

    // Carousel logic: show 3 cards at a time with sliding effect
    const getCarouselTestimonials = () => {
        if (testimonials.length <= 3) return testimonials;
        const result = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentSlide + i) % testimonials.length;
            result.push(testimonials[index]);
        }
        return result;
    };
    const carouselTestimonials = getCarouselTestimonials();

    return (
        <div className="bg-gradient-to-br from-gray-50 via-gray-100 to-white py-20 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 bg-[#22c55e]/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#fcb000]/10 rounded-full blur-2xl"></div>
            </div>
            <div className="px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                        <span className="text-gray-800">Real Success Stories</span>
                    </h2>
                </div>
                {/* Carousel Showcase */}
                <div className="flex items-start justify-center gap-2 md:gap-4 mb-12 select-none">
                    {/* Prev Arrow */}
                    <button 
                        onClick={goToPrevSlide}
                        className="w-10 h-10 md:w-12 md:h-12 bg-white/80 hover:bg-[#22c55e] hover:text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 border-2 border-[#22c55e] hover:scale-110 flex-shrink-0 mt-4"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-7 md:h-7 text-[#22c55e] hover:text-white" />
                    </button>

                    {/* Cards Container with Sliding Effect */}
                    <div className="w-full max-w-6xl overflow-hidden px-2 md:px-0">
                        <div className="flex gap-0 md:gap-8 w-full justify-center items-center relative">
                            {carouselTestimonials.map((testimonial, idx) => {
                                const isActive = idx === 1; // Center card is active
                                return (
                                    <div
                                        key={testimonial.name + testimonial.text + idx}
                                        className={`relative transition-all duration-500 flex-1 mx-[-1rem] md:mx-0 ${isActive ? 'z-20 scale-105' : 'z-10 scale-95 opacity-70'}`}
                                        style={{
                                            boxShadow: isActive ? '0 8px 32px 0 rgba(34,197,94,0.18)' : '0 2px 8px 0 rgba(34,197,94,0.08)',
                                        }}
                                    >
                                        <div className={`backdrop-blur-lg bg-white/60 border-2 ${isActive ? 'border-[#22c55e] shadow-xl' : 'border-gray-200'} rounded-2xl md:rounded-3xl p-4 md:p-6 flex flex-col h-full transition-all duration-500 min-h-[280px] md:min-h-[300px]`}> 
                                            {/* Stars */}
                                            <div className="flex items-center mb-3 md:mb-4 justify-center">
                                                {renderStars(testimonial.rating || 5)}
                                            </div>
                                            {/* Review Text */}
                                            <p className="text-gray-800 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 italic font-medium flex-grow text-center line-clamp-4">
                                                "{testimonial.text}"
                                            </p>
                                            {/* Customer Info */}
                                            <div className="flex flex-col items-center gap-2 md:gap-3 mt-auto">
                                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center">
                                                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full rounded-full object-cover" />
                                                </div>
                                                <div className="text-center">
                                                    <h4 className="font-bold text-gray-900 text-sm md:text-base">{testimonial.name}</h4>
                                                    <p className="text-xs text-[#22c55e] font-medium">{testimonial.location}</p>
                                                </div>
                                                {/* Verified badge */}
                                                <div className="flex items-center gap-1 bg-[#22c55e] text-white px-2 py-1 rounded-full text-xs font-bold shadow-sm">
                                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    <span>Verified</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Next Arrow */}
                    <button 
                        onClick={goToNextSlide}
                        className="w-10 h-10 md:w-12 md:h-12 bg-white/80 hover:bg-[#22c55e] hover:text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 border-2 border-[#22c55e] hover:scale-110 flex-shrink-0 mt-4"
                    >
                        <ChevronRight className="w-5 h-5 md:w-7 md:h-7 text-[#22c55e] hover:text-white" />
                    </button>
                </div>
                {/* Slide Indicators */}
                <div className="flex justify-center gap-2 mb-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentSlide 
                                    ? 'bg-[#22c55e] scale-125' 
                                    : 'bg-gray-300 hover:bg-[#fcb000]'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const ImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Sample images - you can replace these with your actual images
    const images = [
        {
            src: pr1,
            alt: "Mother Noni Power Plus Product 1"
        },
        {
            src: pr2,
            alt: "Mother Noni Power Plus Product 2"
        },
        {
            src: pr3,
            alt: "Mother Noni Power Plus Product 3"
        },
        {
            src: pr4,
            alt: "Mother Noni Power Plus Product 4"
        },
        {
            src: pr5,
            alt: "Mother Noni Power Plus Product 5"
        },
        {
            src: pr6,
            alt: "Mother Noni Power Plus Product 6"
        },
        {
            src: pr7,
            alt: "Mother Noni Power Plus Product 7"
        },
        {
            src: pr8,
            alt: "Mother Noni Power Plus Product 8"
        },
        {
            src: pr9,
            alt: "Mother Noni Power Plus Product 9"
        },
        {
            src: pr10,
            alt: "Mother Noni Power Plus Product 10"
        },
        {
            src: pr11,
            alt: "Mother Noni Power Plus Product 11"
        },
        {
            src: pr12,
            alt: "Mother Noni Power Plus Product 12"
        },
        {
            src: pr13,
            alt: "Mother Noni Power Plus Product 13"
        }
    ];

    // Auto-slide functionality
    useEffect(() => {
        if (!isHovered && images.length > 0) {
            const interval = setInterval(() => {
                setCurrentSlide((prevSlide) => {
                    const nextSlide = prevSlide + 1;
                    if (nextSlide >= images.length) {
                        return 0;
                    }
                    return nextSlide;
                });
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [images.length, isHovered]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => 
            prevSlide === 0 ? images.length - 1 : prevSlide - 1
        );
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => 
            prevSlide === images.length - 1 ? 0 : prevSlide + 1
        );
    };

    if (!images || images.length === 0) {
        return null;
    }

    // Carousel logic: show 3 cards, center is active
    const getCarouselImages = () => {
        if (images.length <= 3) return images;
        const prev = (currentSlide - 1 + images.length) % images.length;
        const next = (currentSlide + 1) % images.length;
        return [images[prev], images[currentSlide], images[next]];
    };
    const carouselImages = getCarouselImages();

    return (
        <div className="relative overflow-hidden">
            <div className="px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Carousel Showcase */}
                <div 
                    className="flex items-center justify-center gap-4 mb-12 select-none"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Prev Arrow */}
                    <button 
                        onClick={goToPrevSlide}
                        className="w-12 h-12 bg-white/80 hover:bg-[#22c55e] hover:text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 border-2 border-[#22c55e] hover:scale-110"
                    >
                        <ChevronLeft className="w-7 h-7 text-[#22c55e] hover:text-white" />
                    </button>
                    {/* Cards */}
                    <div className="flex gap-0 md:gap-8 w-full max-w-3xl justify-center items-center relative">
                        {carouselImages.map((image, idx) => {
                            // Center card is active
                            const isActive = idx === 1;
                            return (
                                <div
                                    key={image.src + idx}
                                    className={`relative transition-all duration-500 flex-1 mx-[-1rem] md:mx-0 ${isActive ? 'z-20 scale-105' : 'z-10 scale-95 opacity-70'} `}
                                    style={{
                                        boxShadow: isActive ? '0 8px 32px 0 rgba(34,197,94,0.18)' : '0 2px 8px 0 rgba(34,197,94,0.08)',
                                        filter: isActive ? 'blur(0)' : 'blur(0.5px)',
                                    }}
                                >
                                    <div className={`backdrop-blur-lg rounded-3xl p-4 flex flex-col h-full transition-all duration-500`}> 
                                        {/* Image */}
                                        <div className="relative rounded-2xl overflow-hidden aspect-square">
                                            <img 
                                                src={image.src} 
                                                alt={image.alt} 
                                                className="w-full h-full object-cover"
                                            />
                                            {/* Overlay effect */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {/* Next Arrow */}
                    <button 
                        onClick={goToNextSlide}
                        className="w-12 h-12 bg-white/80 hover:bg-[#22c55e] hover:text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 border-2 border-[#22c55e] hover:scale-110"
                    >
                        <ChevronRight className="w-7 h-7 text-[#22c55e] hover:text-white" />
                    </button>
                </div>
                {/* Slide Indicators */}
                <div className="flex justify-center gap-2 mb-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentSlide 
                                    ? 'bg-[#22c55e] scale-125' 
                                    : 'bg-gray-300 hover:bg-[#fcb000]'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const UrgencyAndVideoSection = () => {
    const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 });
    const [stockCount, setStockCount] = useState(12);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    // Countdown timer effect
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
                } else {
                    return { hours: 23, minutes: 59, seconds: 59 }; // Reset
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Simulate stock decrease
    useEffect(() => {
        const stockTimer = setInterval(() => {
            setStockCount(prev => Math.max(15, prev - Math.floor(Math.random() * 2)));
        }, 30000);

        return () => clearInterval(stockTimer);
    }, []);

    return (
        <div className="py-20 relative overflow-hidden">
            <div className="px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Urgency Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-gray-800">
                            Your Health Journey Begins Now – Don’t Delay!
                        </span>
                    </h2>
                    
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Join thousands of people who have already taken control of their health with Mother Noni Power Plus. 
                        Watch real results and secure your supply before it's too late.
                    </p>
                </div>

                {/* Countdown Timer */}
                <div className="bg-gradient-to-r from-[#fcb000] to-[#fcb000] rounded-3xl p-8 text-center mb-12 shadow-2xl">
                    <h3 className="text-white text-2xl font-bold mb-4">Special Discount Ends In:</h3>
                    <div className="flex justify-center gap-4 md:gap-8">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 min-w-[80px]">
                            <div className="text-3xl md:text-4xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
                            <div className="text-sm text-gray-100">Hours</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 min-w-[80px]">
                            <div className="text-3xl md:text-4xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
                            <div className="text-sm text-gray-100">Minutes</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 min-w-[80px]">
                            <div className="text-3xl md:text-4xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</div>
                            <div className="text-sm text-gray-100">Seconds</div>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
                    {/* Video Section */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-3xl p-6 shadow-2xl border-4 border-[#fcb000]">
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-gray-200" onLoad={() => setIsVideoLoaded(true)}>
                                {!isVideoLoaded && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200">
                                        <div className="text-center">
                                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#fcb000] mx-auto mb-4"></div>
                                            <p className="text-gray-600">Loading video...</p>
                                        </div>
                                    </div>
                                )}
                                
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/zcc52zju4tU?rel=0&modestbranding=1&showinfo=0"
                                    title="Mother Noni Power Plus - Real Customer Success Stories"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    onLoad={() => setIsVideoLoaded(true)}
                                ></iframe>
                            </div>
                        </div>

                        {/* Video Benefits */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                            <h4 className="font-bold text-gray-800 mb-3">🌟 What You'll Learn:</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-center gap-3">
                                    <span className="text-[#22c55e]">✓</span>
                                    Real before/after health transformations
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-[#22c55e]">✓</span>
                                    How Mother Noni Power Plus works in just 30 days
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-[#22c55e]">✓</span>
                                    Doctor-approved testimonials and results
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Results & Social Proof */}
                    <div className="space-y-6">
                        {/* Stock Alert */}
                        <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-[#fcb000] rounded-3xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-3 h-3 bg-[#fcb000] rounded-full animate-pulse"></div>
                                <h3 className="text-xl font-bold text-gray-800">Stock Alert</h3>
                            </div>
                            <p className="text-lg mb-3 text-gray-700">
                                Only <span className="font-bold text-2xl text-[#fcb000]">{stockCount}</span> bottles left in stock!
                            </p>
                            <div className="bg-gray-200 rounded-full h-4 mb-3">
                                <div 
                                    className="bg-[#fcb000] h-4 rounded-full transition-all duration-1000" 
                                    style={{width: `${(stockCount / 100) * 100}%`}}
                                ></div>
                            </div>
                            <p className="text-sm text-gray-600">Next shipment not expected for 1-2 weeks</p>
                        </div>

                        {/* Customer Reviews */}
                        <div className="space-y-4">
                            {/* Review 1 - Ramesh Kumar */}
                            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-full bg-[#22c55e] flex items-center justify-center text-white font-bold">
                                        R
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Ramesh Kumar</h4>
                                        <p className="text-sm text-gray-600">Verified Customer</p>
                                    </div>
                                    <div className="ml-auto text-[#fcb000] text-sm">★★★★★</div>
                                </div>
                                <blockquote className="text-gray-700 italic">
                                    "I was skeptical at first, but Mother Noni Power Plus completely changed my life. My blood sugar is now stable, 
                                    Best investment I've made for my health!"
                                </blockquote>
                            </div>

                            {/* Review 2 - Priya Sharma */}
                            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-full bg-[#22c55e] flex items-center justify-center text-white font-bold">
                                        P
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Priya Sharma</h4>
                                        <p className="text-sm text-gray-600">Type 2 Diabetes</p>
                                    </div>
                                    <div className="ml-auto text-[#fcb000] text-sm">★★★★★</div>
                                </div>
                                <blockquote className="text-gray-700 italic">
                                    "After 3 months with Mother Noni Power Plus, my HbA1c dropped from 9.2 to 6.8! My doctor was amazed."
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={banner3} alt='banner' className='w-screen' />
                {/* Final CTA */}
                {/* <div className="text-center">
                    <div className="bg-gradient-to-r from-[#22c55e] to-[#22c55e] rounded-3xl p-8 shadow-2xl">
                        <h3 className="text-white text-3xl font-bold mb-4">Ready to Transform Your Health?</h3>
                        <p className="text-gray-100 text-lg mb-6">
                            Don't let this opportunity slip away. Your future self will thank you.
                        </p>
                        
                        <a href="/product" className="inline-block">
                            <button className="bg-white text-[#22c55e] font-bold text-xl py-4 px-12 rounded-2xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                                Order Mother Noni Power Plus - 30% OFF
                            </button>
                        </a>
                        
                        <div className="mt-4 text-gray-100 text-sm">
                            15-Day Money Back Guarantee | Free Shipping | Secure Checkout
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

const Home = ({ currentLang, translations }) => {
    return (
            <div>
                <div className='overflow-x-hidden'>
                    <Hero currentLang={currentLang} />
                    <Product currentLang={currentLang} translations={translations} />
                    <ProductSection currentLang={currentLang} />
                    <ImageSlider />
                    <UrgencyAndVideoSection />
                    <FAQ currentLang={currentLang} translations={translations} />
                    <Testimonials currentLang={currentLang} translations={translations} />
                </div>
            </div>
    );
};

export default Home;