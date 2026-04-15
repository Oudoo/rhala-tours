'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { DesktopSearch, MobileSearch } from './SearchBar';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Destinations', href: '/destinations' },
        {
            name: 'Day Tours',
            href: '/day-tours',
            dropdown: [
                { name: 'Cairo & Giza Day Tours', href: '/day-tours/cairo-giza' },
                { name: 'Alexandria Day Tours', href: '/day-tours/alexandria' },
                { name: 'Luxor Day Tours', href: '/day-tours/luxor' },
                { name: 'Red Sea & Sinai Tours', href: '/day-tours/red-sea-sinai' },
                { name: 'Aswan & Nubia Day Tours', href: '/day-tours/aswan-nubia' }
            ]
        },
        {
            name: 'Tour Packages',
            href: '/tours-packages',
            isMegaMenu: true,
            dropdown: [
                { name: '2 Days 1 Night', href: '/tours-packages#2-days-1-night' },
                { name: '3 Days 2 Nights', href: '/tours-packages#3-days-2-nights' },
                { name: '4 Days 3 Nights', href: '/tours-packages#4-days-3-nights' },
                { name: '5 Days 4 Nights', href: '/tours-packages#5-days-4-nights' },
                { name: '6 Days 5 Nights', href: '/tours-packages#6-days-5-nights' },
                { name: '7 Days 6 Nights', href: '/tours-packages#7-days-6-nights' },
                { name: '8 Days 7 Nights', href: '/tours-packages#8-days-7-nights' },
                { name: '9 Days Tours Egypt', href: '/tours-packages#9-days-tours-egypt' },
                { name: '10 Days 9 Nights', href: '/tours-packages#10-days-9-nights' },
                { name: '11 Days 10 Nights', href: '/tours-packages#11-days-10-nights' },
                { name: '12 Days Tours Egypt', href: '/tours-packages#12-days-tours-egypt' },
                { name: 'More Than 12 Days', href: '/tours-packages#more-than-12-days' }
            ]
        },
        {
            name: 'Nile Cruise',
            href: '/nile-cruise',
            dropdown: [
                { name: 'Luxor & Aswan Nile Cruises', href: '/nile-cruise/luxor-aswan' },
                { name: 'Lake Nasser Nile Cruises', href: '/nile-cruise/lake-nasser' },
                { name: 'Dahabiya Nile Cruises', href: '/nile-cruise/dahabiya' }
            ]
        },
        {
            name: 'Personal Experience',
            href: '/personal-experience',
            dropdown: [
                { name: 'Adrenaline Seekers', href: '/personal-experience/adrenaline-seekers' },
                { name: 'Honeymoon', href: '/personal-experience/honeymoon' },
                { name: 'Local Experiences', href: '/personal-experience/local-experiences' }
            ]
        },
        { name: 'About', href: '/about' },
        { name: 'Journal', href: '/journal' },
        { name: 'Contact', href: '/contact' },
    ];

    const toggleMobileDropdown = (name: string) => {
        setOpenMobileDropdown(prev => (prev === name ? null : name));
    };

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
                        <div key={link.name} className="relative group">
                            <Link
                                href={link.href}
                                className="text-navy hover:text-gold transition-colors font-medium text-sm tracking-wide flex items-center gap-1 py-4 whitespace-nowrap"
                            >
                                {link.name}
                                {link.dropdown && (
                                    <ChevronDown
                                        size={14}
                                        className="group-hover:rotate-180 transition-transform duration-300 ease-out flex-shrink-0"
                                    />
                                )}
                            </Link>

                            {link.dropdown && (
                                <div
                                    className={clsx(
                                        "absolute left-0 top-[100%] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform translate-y-2 group-hover:translate-y-0",
                                        link.isMegaMenu ? "w-[420px]" : "w-[260px]"
                                    )}
                                >
                                    <div className={clsx(
                                        "bg-white shadow-2xl rounded-xl p-5 border border-navy/5",
                                        link.isMegaMenu ? "grid grid-cols-2 gap-x-6 gap-y-2" : "flex flex-col gap-2"
                                    )}>
                                        {link.dropdown.map((subLink) => (
                                            <Link
                                                key={subLink.name}
                                                href={subLink.href}
                                                className="block text-navy hover:text-gold hover:bg-gold/10 px-4 py-2.5 rounded-lg transition-colors text-sm font-medium"
                                            >
                                                {subLink.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <DesktopSearch />
                    <a
                        href="https://wa.me/+201557469694"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gold text-navy px-6 py-2.5 rounded-full font-bold text-sm tracking-wide hover:bg-gold/90 transition-transform transform hover:-translate-y-0.5 active:translate-y-0 mt-0"
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
                        initial={{ opacity: 0, y: -20, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: '100vh' }}
                        exit={{ opacity: 0, y: -20, height: 0 }}
                        className="absolute top-full left-0 right-0 bg-[#F3ECDA] z-50 shadow-lg md:hidden overflow-y-auto"
                    >
                        <div className="p-6 flex flex-col gap-2 pb-24 border-t border-navy/10">
                            <div className="mb-3">
                                <MobileSearch onNavigate={() => setIsMobileMenuOpen(false)} />
                            </div>
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex flex-col">
                                    {link.dropdown ? (
                                        <>
                                            <div className="flex items-center w-full">
                                                <Link
                                                    href={link.href}
                                                    className="text-navy text-lg font-medium hover:text-gold py-3 text-left"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {link.name}
                                                </Link>
                                                <button
                                                    onClick={() => toggleMobileDropdown(link.name)}
                                                    className="p-3 ml-auto md:ml-2 text-navy hover:text-gold"
                                                    aria-label={`Toggle ${link.name} dropdown`}
                                                >
                                                    <ChevronDown
                                                        size={22}
                                                        className={clsx(
                                                            "transition-transform duration-300",
                                                            openMobileDropdown === link.name ? "rotate-180" : ""
                                                        )}
                                                    />
                                                </button>
                                            </div>
                                            <AnimatePresence>
                                                {openMobileDropdown === link.name && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden flex flex-col pl-4 border-l-2 border-gold/30 mt-1 mb-2 gap-1"
                                                    >
                                                        {link.dropdown.map((subLink) => (
                                                            <Link
                                                                key={subLink.name}
                                                                href={subLink.href}
                                                                className="text-navy/80 hover:text-gold py-2 text-base font-medium"
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                            >
                                                                {subLink.name}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="text-navy text-lg font-medium hover:text-gold py-3"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <a
                                href="https://wa.me/+201557469694"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gold text-navy w-full py-4 rounded-full font-bold mt-6 text-center block text-lg shadow-md"
                            >
                                Start Journey
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
