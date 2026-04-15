'use client';

import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import BookingForm from '@/components/BookingForm';

export default function ContactPage() {
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
                        Ready to start your Egyptian adventure? Reach out to us today and let&apos;s craft your perfect personalized itinerary.
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
                                <p className="text-navy/60 mb-4 text-sm">We&apos;ll reply within 12 hours</p>
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

                    {/* Booking Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <BookingForm sourcePage="Contact Page" variant="full" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
