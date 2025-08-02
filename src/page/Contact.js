import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = ({ translations, currentLang }) => {
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('');

        const form = e.target;
        const formData = new FormData(form);
        
        const contactData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            subject: formData.get('subject'),
            message: formData.get('message'),
            domain: 'DrJoints.in',
            productName: 'Dr Joints'
        };

        try {
            const response = await fetch("https://mother-api-756t.onrender.com/send-email", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactData)
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
                console.error('Email sending failed:', result);
            }
        } catch (error) {
            setStatus('error');
            console.error('Error submitting contact form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        {translations[currentLang].contact.title}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {translations[currentLang].contact.pagesectitle}
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Information Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex items-center mb-6">
                                <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-full">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 ml-4">Address</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                {translations[currentLang].contact.address}
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex items-center mb-6">
                                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-full">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 ml-4">Phone</h3>
                            </div>
                            <a 
                                href="tel:+919908016333" 
                                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-lg font-medium"
                            >
                                {translations[currentLang].contact.phone}
                            </a>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex items-center mb-6">
                                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-full">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 ml-4">Email</h3>
                            </div>
                            <a 
                                href="mailto:hello@drjoints.in" 
                                className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-lg font-medium"
                            >
                                {translations[currentLang].contact.email}
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                    {translations[currentLang].contact.pagetitle}
                                </h2>
                                <p className="text-gray-600 text-lg">
                                    Send us a message and we'll respond as soon as possible.
                                </p>
                            </div>

                            {/* Status Messages */}
                            {status === 'success' && (
                                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center">
                                    <CheckCircle className="w-5 h-5 mr-3" />
                                    <span>Thank you for your message. We'll get back to you soon!</span>
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center">
                                    <AlertCircle className="w-5 h-5 mr-3" />
                                    <span>There was an error sending your message. Please try again.</span>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="group">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder={translations[currentLang].contact.pageinname}
                                            required
                                            disabled={isSubmitting}
                                            className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group-hover:border-gray-400"
                                        />
                                    </div>

                                    <div className="group">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder={translations[currentLang].contact.pageinemail}
                                            required
                                            disabled={isSubmitting}
                                            className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group-hover:border-gray-400"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="group">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder={translations[currentLang].contact.pageinphone}
                                            disabled={isSubmitting}
                                            className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group-hover:border-gray-400"
                                        />
                                    </div>

                                    <div className="group">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            placeholder={translations[currentLang].contact.pageinsubject}
                                            required
                                            disabled={isSubmitting}
                                            className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group-hover:border-gray-400"
                                        />
                                    </div>
                                </div>

                                <div className="group">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        placeholder={translations[currentLang].contact.pageinmessage}
                                        rows={6}
                                        required
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group-hover:border-gray-400 resize-none"
                                    />
                                </div>

                                <div className="flex justify-center pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 flex items-center gap-3 shadow-lg"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                <span>{translations[currentLang].contact.pagesubbutton}</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;