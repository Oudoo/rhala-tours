'use client';

import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-navy text-cream py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">

                    {/* Brand */}
                    <div className="max-w-md">
                        <img
                            src="/Logo.png"
                            alt="Rhala Logo"
                            className="h-20 w-auto object-contain mb-6"
                        />
                        <p className="text-xl font-light italic text-cream/80 mb-8">
                            "Big Change Starts Small."
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-gold hover:text-navy hover:border-gold transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-gold hover:text-navy hover:border-gold transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-gold hover:text-navy hover:border-gold transition-all">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 gap-12 md:gap-24">
                        <div>
                            <h4 className="text-gold text-sm font-bold uppercase tracking-widest mb-6">Company</h4>
                            <ul className="space-y-4 text-sm text-cream/70">
                                <li><a href="#" className="hover:text-gold transition-colors">Destinations</a></li>
                                <li><a href="#" className="hover:text-gold transition-colors">About Us</a></li>
                                <li><a href="/journal" className="hover:text-gold transition-colors">Our Journal</a></li>
                                <li><a href="/contact" className="hover:text-gold transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-gold text-sm font-bold uppercase tracking-widest mb-6">Contact</h4>
                            <ul className="space-y-4 text-sm text-cream/70">
                                <li className="flex items-start gap-3">
                                    <MapPin size={16} className="mt-1 text-gold" />
                                    <span>Cairo Downtown<br />Egypt</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail size={16} className="text-gold" />
                                    <span>hello@rhala-tours.com</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone size={16} className="text-gold" />
                                    <span>+20 155 746 9694</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-cream/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-cream/40 uppercase tracking-wider">
                    <span>© {new Date().getFullYear()} Rhala Tours. All rights reserved.</span>
                    <a href="/admin" className="mt-4 md:mt-0 hover:text-gold transition-colors">Staff Login</a>
                </div>
            </div>
        </footer>
    );
}
