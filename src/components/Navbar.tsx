'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Destinations', href: '/destinations' },
        { name: 'Tours', href: '/tours' },
        { name: 'Tours Packages', href: '/tours-packages' },
        { name: 'Honeymoon tours', href: '/tours-packages' },
        { name: 'About', href: '/about' },
        { name: 'Journal', href: '#' },
        { name: 'Contact', href: '#' },
    ];

    return (
        <nav
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
                isScrolled || isMobileMenuOpen ? 'bg-[#F3ECDA] shadow-sm py-4' : 'bg-transparent py-6'
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <img
                        src={isScrolled ? "/R Logo Icon.ico" : "/Logo.png"}
                        alt="Rhala Logo"
                        className="h-16 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-navy hover:text-gold transition-colors font-medium text-sm tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="https://wa.me/+201557469694"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gold text-navy px-6 py-2.5 rounded-full font-bold text-sm tracking-wide hover:bg-gold/90 transition-transform transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                        Start Journey
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-navy"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-[#F3ECDA] z-50 shadow-lg md:hidden p-6 flex flex-col gap-4 border-t border-navy/10 h-screen"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-navy text-lg font-medium hover:text-gold"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://wa.me/+201557469694"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gold text-navy w-full py-3 rounded-full font-bold mt-2 text-center block"
                        >
                            Start Journey
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
