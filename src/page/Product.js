import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import product1 from '../assets/imagess/1.webp';
import product2 from '../assets/imagess/3.webp';
import product3 from '../assets/imagess/2.webp';
import footer from '../assets/imagess/footer.webp';

const Product = ({ translations, currentLang }) => {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedOffer, setSelectedOffer] = useState(0);
    const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 });
    const [currency, setCurrency] = useState('INR');
    const [stockCount, setStockCount] = useState(12);
    const productPrice = currency === 'USD' ? 120 : 3990;
    const originalPrice = currency === 'USD' ? 180 : 6990;

    // Auto-slide offers every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedOffer((prev) => (prev + 1) % 3);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

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

    // Add stock decrease simulation
    useEffect(() => {
        const stockTimer = setInterval(() => {
            setStockCount(prev => {
                if (prev > 5) {
                    return Math.max(5, prev - Math.floor(Math.random() * 2));
                }
                return prev;
            });
        }, 45000);

        return () => clearInterval(stockTimer);
    }, []);

    const handleCheckout = () => {
        const currentProductPrice = currency === 'USD' ? 120 : 3990;
        navigate('/checkout', {
            state: {
                quantity,
                totalAmount: quantity * currentProductPrice,
                productName: 'Mother Noni Power Plus',
                unitPrice: currentProductPrice,
                currency: currency
            }
        });
    };

    const productImages = [product1, product2, product3];

    return (
        <div className="w-full min-h-screen overflow-hidden flex flex-col items-center justify-center">
            <Helmet>
                <title>Mother Noni Power Plus - Complete Herbal Wellness Tonic | Natural Health Supplement</title>
                <meta name="description" content="Mother Noni Power Plus is a powerful herbal wellness tonic featuring noni fruit extract and traditional Ayurvedic herbs. Supports energy, immunity, digestion, and overall vitality. 100% natural formula." />
                <meta name="keywords" content="noni supplement, herbal wellness tonic, natural health supplement, immunity booster, energy enhancer, digestive support, Mother Noni Power Plus" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://mothernonipower.com/products/mother-noni-power-plus" />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Mother Noni Power Plus - Complete Herbal Wellness Tonic",
                        "alternateName": "Mother Noni Power Plus Multi-Benefit Ayurvedic Formula",
                        "image": [
                            "https://mothernonipower.com${product1}",
                            "https://mothernonipower.com${product2}",
                            "https://mothernonipower.com${product3}"
                        ],
                        "description": "Mother Noni Power Plus is a comprehensive Ayurvedic herbal formula featuring noni fruit extract and traditional herbs. Supports energy, immunity, digestion, joint health, and overall vitality. Just 10ml daily provide complete wellness support—100% natural and AYUSH certified.",
                        "brand": {
                            "@type": "Brand",
                            "name": "Mother Noni Power Plus"
                        },
                        "manufacturer": {
                            "@type": "Organization",
                            "name": "Mother Noni Health Solutions"
                        },
                        "category": "Health & Personal Care > Herbal Supplements > Wellness Support",
                        "gtin": "8901234567892",
                        "mpn": "MNPP-WS-60CAP",
                        "sku": "MNPP001",
                        "weight": {
                            "@type": "QuantitativeValue",
                            "value": "150",
                            "unitCode": "GRM"
                        },
                        "offers": {
                            "@type": "Offer",
                            "url": "https://mothernonipower.com/products/mother-noni-power-plus",
                            "priceCurrency": "INR",
                            "price": "3990",
                            "priceValidUntil": "2025-12-31",
                            "itemCondition": "https://schema.org/NewCondition",
                            "availability": "https://schema.org/InStock",
                            "shippingDetails": {
                                "@type": "OfferShippingDetails",
                                "shippingRate": {
                                    "@type": "MonetaryAmount",
                                    "value": "0",
                                    "currency": "INR"
                                },
                                "deliveryTime": {
                                    "@type": "ShippingDeliveryTime",
                                    "handlingTime": {
                                        "@type": "QuantitativeValue",
                                        "minValue": "1",
                                        "maxValue": "2",
                                        "unitCode": "DAY"
                                    },
                                    "transitTime": {
                                        "@type": "QuantitativeValue",
                                        "minValue": "3",
                                        "maxValue": "7",
                                        "unitCode": "DAY"
                                    }
                                }
                            },
                            "seller": {
                                "@type": "Organization",
                                "name": "Mother Noni Power Plus",
                                "url": "https://mothernonipower.com"
                            }
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": "5000",
                            "bestRating": "5",
                            "worstRating": "1"
                        },
                        "additionalProperty": [
                            {
                                "@type": "PropertyValue",
                                "name": "Dosage",
                                "value": "5ml twice daily with water"
                            },
                            {
                                "@type": "PropertyValue",
                                "name": "Pack Size",
                                "value": "500ml syrup bottle"
                            },
                            {
                                "@type": "PropertyValue",
                                "name": "Form",
                                "value": "Liquid Syrup"
                            },
                            {
                                "@type": "PropertyValue",
                                "name": "Certification",
                                "value": "AYUSH Certified"
                            },
                            {
                                "@type": "PropertyValue",
                                "name": "Primary Benefit",
                                "value": "Complete wellness support"
                            },
                            {
                                "@type": "PropertyValue",
                                "name": "Secondary Benefits",
                                "value": "Energy, immunity, digestion, joint health"
                            },
                            {
                                "@type": "PropertyValue",
                                "name": "Usage Duration",
                                "value": "30 days supply"
                            },
                            {
                                "@type": "PropertyValue",
                                "name": "Side Effects",
                                "value": "None reported"
                            }
                        ],
                        "audience": {
                            "@type": "PeopleAudience",
                            "suggestedMinAge": "18"
                        },
                        "potentialAction": {
                            "@type": "BuyAction",
                            "target": "https://mothernonipower.com/checkout"
                        },
                        "isRelatedTo": [
                            {
                                "@type": "MedicalCondition",
                                "name": "General Wellness"
                            },
                            {
                                "@type": "MedicalCondition",
                                "name": "Energy Deficiency"
                            },
                            {
                                "@type": "MedicalCondition",
                                "name": "Digestive Issues"
                            }
                        ],
                        "hasMedicalIndication": [
                            {
                                "@type": "MedicalIndication",
                                "name": "Complete wellness support"
                            },
                            {
                                "@type": "MedicalIndication",
                                "name": "Energy and vitality enhancement"
                            }
                        ],
                        "activeIngredient": [
                            {
                                "@type": "ChemicalSubstance",
                                "name": "Noni fruit extract and Ayurvedic herbal blend"
                            }
                        ]
                    }
                    `}
                </script>
            </Helmet>
            
            {/* Sticky CTA Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-[#22c55e] shadow-2xl z-50 p-3 md:hidden">
                <div className="flex items-center justify-between gap-3">
                    {/* Product Thumbnail */}
                    <div className="flex-shrink-0">
                        <img 
                            src={productImages[0]} 
                            alt="Mother Noni Power Plus Product" 
                            className="w-12 h-12 object-contain rounded-lg border border-gray-200"
                        />
                    </div>
                    
                    {/* Price Info */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-gray-400 line-through">₹5,990</span>
                            <span className="text-lg font-extrabold text-[#22c55e]">₹3,990</span>
                        </div>
                        <div className="text-xs text-[#fcb000] font-medium">
                            Only {stockCount} left!
                        </div>
                    </div>
                    
                    {/* Order Button */}
                    <button
                        onClick={handleCheckout}
                        className="bg-gradient-to-r from-[#22c55e] to-[#22c55e] text-white font-bold py-2 px-4 rounded-lg hover:from-[#fcb000] hover:to-[#fcb000] transition-all duration-300 shadow-lg text-sm whitespace-nowrap"
                    >
                        Order Now
                    </button>
                </div>
            </div>

            {/* Desktop Sticky CTA (hidden on mobile) */}
            <div className="fixed bottom-6 right-6 bg-white rounded-xl shadow-2xl border-2 border-[#22c55e] p-4 z-50 hidden md:block max-w-sm">
                <div className="flex items-center gap-3">
                    <img 
                        src={productImages[0]} 
                        alt="Mother Noni Power Plus Product" 
                        className="w-16 h-16 object-contain rounded-lg border border-gray-200"
                    />
                    <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900 mb-1">Mother Noni Power Plus</div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-bold text-gray-400 line-through">₹5,990</span>
                            <span className="text-xl font-extrabold text-[#22c55e]">₹3,990</span>
                        </div>
                        <button
                            onClick={handleCheckout}
                            className="w-full bg-gradient-to-r from-[#22c55e] to-[#22c55e] text-white font-bold py-2 px-4 rounded-lg hover:from-[#fcb000] hover:to-[#fcb000] transition-all duration-300 shadow-lg text-sm"
                        >
                            Order Now
                        </button>
                    </div>
                </div>
                <div className="text-xs text-[#fcb000] font-medium text-center mt-2">
                    Only {stockCount} boxes left at this price!
                </div>
            </div>

            <div className="w-full bg-white flex flex-col md:flex-row overflow-hidden">
                {/* Wellness Hero Image */}
                <div className="md:w-1/2 w-full flex flex-col items-center justify-start p-8">
                    <img src={productImages[selectedImage]} alt="Complete Herbal Wellness Tonic" className=" object-contain rounded-xl shadow-md border border-gray-100 bg-white" />
                    {/* Thumbnails */}
                    <div className="flex gap-2 mt-4">
                        {productImages.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedImage(idx)}
                                className={`w-10 h-10 rounded border-2 ${selectedImage === idx ? 'border-[#22c55e]' : 'border-gray-200'} overflow-hidden bg-white`}
                            >
                                <img src={img} alt={`Product view ${idx + 1}`} className="w-full h-full object-contain" />
                            </button>
                        ))}
                    </div>
                </div>
                
                {/* Product Info */}
                <div className="md:w-1/2 w-full flex flex-col justify-center p-8 gap-4">
                    {/* Title */}
                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 leading-tight">
                        Mother Noni Power Plus — Complete Herbal Wellness Tonic
                    </h1>

                    {/* Description */}
                    <p className="text-base text-gray-700 mb-2">
                        Mother Noni Power Plus is a comprehensive Ayurvedic herbal formula featuring noni fruit extract and traditional herbs. Just 10ml daily support energy, immunity, digestion, joint health, and overall vitality—a complete wellness solution without any side effects.
                    </p>

                    {/* Key Benefits */}
                    <ul className="list-disc pl-5 text-sm mb-2">
                        <li>Supports energy levels and daily vitality</li>
                        <li>Boosts immunity and natural defenses</li>
                        <li>Promotes healthy digestion and metabolism</li>
                        <li>Supports joint health and flexibility</li>
                        <li>100% herbal, safe, and non-habit forming</li>
                    </ul>

                    {/* Ratings */}
                    <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-[#fcb000] text-xl">★</span>
                        ))}
                        </div>
                        <span className="text-gray-600 font-medium text-sm">4.9/5 (5,000+ verified users)</span>
                    </div>

                    {/* Urgency Alert - Enhanced */}
                    <div className="mb-4 bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-[#fcb000] rounded-xl p-4">
                        <div className="text-center mb-3">
                            <span className="text-[#fcb000] font-bold text-lg animate-pulse">HURRY! LIMITED STOCK</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                            <div
                                className="bg-gradient-to-r from-[#fcb000] to-[#fcb000] h-3 rounded-full transition-all duration-1000 animate-pulse"
                                style={{ width: `${Math.max(10, (stockCount / 50) * 100)}%` }}
                            ></div>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-700 font-bold text-sm">
                                Only {stockCount} boxes left at this price!
                            </span>
                            <div className="bg-[#fcb000] text-white px-3 py-1 rounded-lg font-mono font-bold text-sm">
                                {String(timeLeft.hours).padStart(2, '0')}:
                                {String(timeLeft.minutes).padStart(2, '0')}:
                                {String(timeLeft.seconds).padStart(2, '0')}
                            </div>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-end gap-3 mb-2">
                        <span className="text-xl font-bold text-gray-400 line-through">₹5,990</span>
                        <span className="text-3xl font-extrabold text-[#22c55e]">₹3,990</span>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2 mb-4">
                        <label className="text-gray-700 font-medium text-sm">Qty:</label>
                        <div className="flex items-center bg-white rounded border border-gray-200">
                        <button 
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="text-[#22c55e] px-2 py-1 font-bold hover:bg-gray-50 rounded-l"
                        >-</button>
                        <input
                            type="number"
                            min="1"
                            max={stockCount}
                            value={quantity}
                            onChange={(e) => setQuantity(Math.min(stockCount, parseInt(e.target.value) || 1))}
                            className="w-10 text-center py-1 text-[#22c55e] font-bold border-0 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <button 
                            onClick={() => setQuantity(Math.min(stockCount, quantity + 1))}
                            className="text-[#22c55e] px-2 py-1 font-bold hover:bg-gray-50 rounded-r"
                        >+</button>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <button onClick={handleCheckout} className="w-full bg-gradient-to-r from-[#22c55e] to-[#22c55e] text-white font-bold py-3 rounded-xl hover:from-[#fcb000] hover:to-[#fcb000] transform hover:scale-105 transition-all duration-300 shadow-lg text-lg mb-2 relative" >
                        <span className="relative z-10">Order Now</span>
                    </button>

                    {/* Shipping & Guarantee */}
                    <div className="flex flex-wrap gap-4 mt-4 text-xs font-semibold">
                        <div className="flex items-center gap-2"> Free Shipping</div>
                        <div className="flex items-center gap-2"> 15 Days Return</div>
                        <div className="flex items-center gap-2"> Secure Payment</div>
                        <div className="flex items-center gap-2"> 100% Herbal Formula</div>
                    </div>
                </div>
            </div>
            <div className="promo-slider relative z-10">
                <span className="text-md font-bold flex items-center space-x-16 tracking-wide">
                    <span className="text-black  ">
                        This product is based on traditional Ayurvedic knowledge and does not replace medical advice. Results may vary. Approved by relevant regulatory authorities wherever applicable.
                    </span>
                    <span className="text-black">
                        This product is based on traditional Ayurvedic knowledge and does not replace medical advice. Results may vary. Approved by relevant regulatory authorities wherever applicable.
                    </span>
                </span>
            </div>

           {/* Three Problems, One Solution Section */}
            <div className="w-full mt-8 rounded-2xl shadow-lg overflow-hidden">
                <div className="max-w-6xl mx-auto p-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                            Common Health Challenges Affecting Daily Life
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            These interconnected wellness issues can impact your energy, comfort, and overall quality of life, making it harder to enjoy everyday activities.
                        </p>
                    </div>

                    {/* Three Problems Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {/* Problem 1: Low Energy */}
                        <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#fcb000] hover:shadow-xl transition-shadow duration-300">
                            <div className="text-center mb-4">
                                <h3 className="text-xl font-bold text-[#fcb000] mb-3">Low Energy & Fatigue</h3>
                            </div>
                            <div className="space-y-3 text-gray-600">
                                <div className="flex items-start gap-2">
                                    <span className="text-[#fcb000] mt-1">•</span>
                                    <span>Constant tiredness throughout the day</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-[#fcb000] mt-1">•</span>
                                    <span>Feeling sluggish and unmotivated</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-[#fcb000] mt-1">•</span>
                                    <span>Difficulty concentrating on tasks</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-[#fcb000] mt-1">•</span>
                                    <span>Lack of enthusiasm for activities</span>
                                </div>
                            </div>
                            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                                <p className="text-sm text-gray-700 font-medium text-center">
                                    Impacts productivity and life enjoyment
                                </p>
                            </div>
                        </div>

                        {/* Problem 2: Joint Pain */}
                        <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#fcb000] hover:shadow-xl transition-shadow duration-300">
                            <div className="text-center mb-4">
                                <h3 className="text-xl font-bold text-[#fcb000] mb-3">Joint Pain & Stiffness</h3>
                            </div>
                            <div className="space-y-3 text-gray-600">
                                <div className="flex items-start gap-2">
                                    <span className="text-[#fcb000] mt-1">•</span>
                                    <span>Morning stiffness and pain</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-[#fcb000] mt-1">•</span>
                                    <span>Reduced mobility and flexibility</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-[#fcb000] mt-1">•</span>
                                    <span>Inflammation in joints</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-[#fcb000] mt-1">•</span>
                                    <span>Difficulty with daily activities</span>
                                </div>
                            </div>
                            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                                <p className="text-sm text-gray-700 font-medium text-center">
                                    Limits independence and quality of life
                                </p>
                            </div>
                        </div>

                        {/* Problem 3: Weak Immunity */}
                        <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#22c55e] hover:shadow-xl transition-shadow duration-300">
                            <div className="text-center mb-4">
                                <h3 className="text-xl font-bold text-[#22c55e] mb-3">Weak Immunity</h3>
                            </div>
                            <div className="space-y-3 text-gray-600">
                                <div className="flex items-start gap-2">
                                    <span className="text-[#22c55e] mt-1">•</span>
                                    <span>Frequent colds and infections</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-[#22c55e] mt-1">•</span>
                                    <span>Slow recovery from illness</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-[#22c55e] mt-1">•</span>
                                    <span>Seasonal allergies and sensitivities</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-[#22c55e] mt-1">•</span>
                                    <span>General feeling of being run down</span>
                                </div>
                            </div>
                            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                                <p className="text-sm text-gray-700 font-medium text-center">
                                    Leaves you vulnerable and compromised
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* One Solution Section */}
                    <div className="rounded-2xl p-8 border-2 border-[#22c55e]">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-bold mb-4">
                                Mother Noni Power Plus: One Complete Wellness Solution
                            </h3>
                            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                                Unlike single-purpose supplements, Mother Noni Power Plus is a comprehensive herbal formula that addresses multiple wellness needs simultaneously for complete vitality support.
                            </p>
                        </div>
                        
                        {/* Solution Benefits Grid */}
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="text-center bg-white/70 rounded-xl p-6 border border-[#22c55e]">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-[#22c55e] text-xl">✓</span>
                                </div>
                                <h4 className="font-bold mb-2">Boosts Energy</h4>
                                <p className="text-sm">Natural energy enhancement for sustained vitality throughout the day</p>
                            </div>
                            <div className="text-center bg-white/70 rounded-xl p-6 border border-[#22c55e]">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-[#22c55e] text-xl">✓</span>
                                </div>
                                <h4 className="font-bold mb-2">Supports Joint Health</h4>
                                <p className="text-sm">Natural ingredients that promote joint comfort and flexibility</p>
                            </div>
                            <div className="text-center bg-white/70 rounded-xl p-6 border border-[#22c55e]">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-[#22c55e] text-xl">✓</span>
                                </div>
                                <h4 className="font-bold mb-2">Strengthens Immunity</h4>
                                <p className="text-sm">Powerful antioxidants that boost natural defenses and overall wellness</p>
                            </div>
                        </div>

                        {/* How It Works */}
                        <div className="bg-white rounded-xl p-6 shadow-md">
                            <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Simple Yet Effective</h4>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 bg-[#22c55e] text-white rounded-full flex items-center justify-center font-bold">1</div>
                                    <div>
                                        <h5 className="font-semibold text-gray-800">Morning Dose</h5>
                                        <p className="text-sm text-gray-600">5ml with water after breakfast</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 bg-[#22c55e] text-white rounded-full flex items-center justify-center font-bold">2</div>
                                    <div>
                                        <h5 className="font-semibold text-gray-800">Evening Dose</h5>
                                        <p className="text-sm text-gray-600">5ml with water after dinner</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 text-center">
                                <p className="font-medium">
                                    Just 10ml daily for complete wellness support
                                </p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        {/* <div className="text-center mt-8">
                            <button className="bg-gradient-to-r from-[#22c55e] to-[#22c55e] text-white font-bold py-4 px-8 rounded-xl hover:from-[#fcb000] hover:to-[#fcb000] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                                Get Mother Noni Power Plus Now - Complete Wellness Support
                            </button>
                            <p className="text-sm text-gray-600 mt-2">Free shipping • 15-day money-back guarantee</p>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Video Section */}
            <div className="w-full overflow-hidden">
                <div className="">
                    <div className="grid items-center">
                        {/* Video Player */}
                        <div className="relative">
                            <div className="relative bg-gray-900 overflow-hidden">
                                {/* YouTube Video Embed */}
                                <div className="aspect-video">
                                    <iframe
                                        className="w-full h-full rounded-2xl"
                                        src="https://www.youtube.com/embed/vzFkoofd6sY?si=example&controls=1&modestbranding=1&rel=0"
                                        title="Mother Noni Power Plus Success Story - Real User Testimonial"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={footer} alt='Footer' className='w-screen' />
        </div>
    );
};

export default Product;