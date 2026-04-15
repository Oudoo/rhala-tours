'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    return (
        <div className="bg-cream min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-gold uppercase tracking-[0.2em] font-bold text-sm block mb-4"
                    >
                        Get In Touch
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-navy mb-6"
                    >
                        Contact Our Experts
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-navy/60 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        Ready to start your Egyptian adventure? Reach out to us today and let's craft your perfect personalized itinerary.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-12"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-navy/5">
                                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-6 text-gold">
                                    <Phone size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-2">Call Us</h3>
                                <p className="text-navy/60 mb-4 text-sm">Mon-Sun, 24/7 Support</p>
                                <a href="tel:+201557469694" className="text-navy font-bold hover:text-gold transition-colors">
                                    +20 155 746 9694
                                </a>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-navy/5">
                                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-6 text-gold">
                                    <Mail size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-2">Email Us</h3>
                                <p className="text-navy/60 mb-4 text-sm">We'll reply within 12 hours</p>
                                <a href="mailto:hello@rhala-tours.com" className="text-navy font-bold hover:text-gold transition-colors">
                                    hello@rhala-tours.com
                                </a>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-navy/5 md:col-span-2">
                                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-6 text-gold">
                                    <MapPin size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-2">Our Office</h3>
                                <p className="text-navy/60 text-sm mb-4">Visit us in the heart of the capital</p>
                                <p className="text-navy font-bold">
                                    Cairo Downtown, Egypt
                                </p>
                            </div>
                        </div>

                        {/* WhatsApp CTA */}
                        <div className="bg-navy p-10 rounded-3xl text-cream relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold mb-4">Prefer Instant Chat?</h3>
                                <p className="text-cream/70 mb-8 max-w-sm">
                                    Connect with our travel advisors instantly on WhatsApp for quick inquiries and bookings.
                                </p>
                                <a 
                                    href="https://wa.me/+201557469694" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity"
                                >
                                    <MessageCircle size={20} />
                                    Chat on WhatsApp
                                </a>
                            </div>
                            <MessageCircle size={200} className="absolute -bottom-10 -right-10 text-cream/5 rotate-12" />
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-navy/5"
                    >
                        {isSubmitted ? (
                            <div className="py-20 text-center">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                                    <CheckCircle size={40} />
                                </div>
                                <h2 className="text-3xl font-bold text-navy mb-4">Message Sent!</h2>
                                <p className="text-navy/60 mb-8">
                                    Thank you for reaching out. One of our travel experts will contact you shortly to discuss your adventure.
                                </p>
                                <button 
                                    onClick={() => setIsSubmitted(false)}
                                    className="text-gold font-bold hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-navy mb-2">Full Name</label>
                                        <input 
                                            type="text" 
                                            required 
                                            className="w-full px-4 py-3 bg-cream/30 border border-navy/10 rounded-xl focus:ring-2 focus:ring-gold/50 outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-navy mb-2">Email Address</label>
                                        <input 
                                            type="email" 
                                            required 
                                            className="w-full px-4 py-3 bg-cream/30 border border-navy/10 rounded-xl focus:ring-2 focus:ring-gold/50 outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-navy mb-2">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        className="w-full px-4 py-3 bg-cream/30 border border-navy/10 rounded-xl focus:ring-2 focus:ring-gold/50 outline-none transition-all"
                                        placeholder="+1 (234) 567-890"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-navy mb-2">Subject</label>
                                    <select className="w-full px-4 py-3 bg-cream/30 border border-navy/10 rounded-xl focus:ring-2 focus:ring-gold/50 outline-none transition-all appearance-none">
                                        <option>Custom Tour Inquiry</option>
                                        <option>Package Booking</option>
                                        <option>General Question</option>
                                        <option>Partnership</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-navy mb-2">Your Message</label>
                                    <textarea 
                                        required 
                                        rows={5}
                                        className="w-full px-4 py-3 bg-cream/30 border border-navy/10 rounded-xl focus:ring-2 focus:ring-gold/50 outline-none transition-all resize-none"
                                        placeholder="Tell us about your dream trip..."
                                    />
                                </div>
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full bg-gold text-navy py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-navy hover:text-white transition-all transform active:scale-[0.98] disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <span className="w-5 h-5 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
