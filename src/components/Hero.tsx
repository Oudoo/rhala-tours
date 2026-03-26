'use client';

import { useState } from 'react';
import { Search, Calendar, Users, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    const [destination, setDestination] = useState<string[]>([]);
    const [isDestOpen, setIsDestOpen] = useState(false);
    const [date, setDate] = useState('');
    const [guests, setGuests] = useState('2 Adults');

    const handleSearch = () => {
        const destStr = destination.length > 0 ? destination.join(', ') : 'All Destinations';
        const message = `i want to go ${destStr} on the ${date || 'undecided date'} and the number of travelers are ${guests}`;
        const phoneNumber = '+201557469694'; // Using the same placeholder as WhatsAppButton
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    const toggleDest = (dest: string) => {
        setDestination(prev =>
            prev.includes(dest) ? prev.filter(d => d !== dest) : [...prev, dest]
        );
    };

    const destOptions = ['Cairo', 'Luxor', 'Aswan', 'Alexandria', 'Siwa', 'Hurghada'];

    return (
        <section className="relative h-[90vh] min-h-[700px] w-full flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?lock=300)', // Bright Drone Shot of Pyramids
                    backgroundPosition: 'center center'
                }}
            >
                {/* No overlay for maximum brightness */}
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center pt-20">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-gold tracking-[0.2em] uppercase font-bold text-sm mb-4 bg-white/80 px-4 py-1 rounded-full backdrop-blur-sm shadow-sm"
                >
                    Your Travel Guidance to the soul of Egypt
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-navy mb-12 tracking-tight uppercase drop-shadow-sm"
                >
                    Travel More,<br />Dream Big
                </motion.h1>

                {/* Search Widget */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="w-full max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-4 flex flex-col md:flex-row items-center gap-2 md:gap-4 shadow-2xl"
                >
                    <div className="flex-1 w-full md:w-auto flex items-center px-6 py-4 md:py-2 border-b md:border-b-0 md:border-r border-white/20">
                        <MapPin className="text-gold w-5 h-5 mr-3" />
                        <div className="flex flex-col text-left w-full relative">
                            <button type="button" onClick={() => setIsDestOpen(!isDestOpen)} className="flex flex-col text-left w-full focus:outline-none">
                                <label className="text-xs text-soft-blue uppercase tracking-wider font-bold cursor-pointer">Where to?</label>
                                <span className="bg-transparent text-white font-medium cursor-pointer w-full truncate border-none outline-none">
                                    {destination.length > 0 ? destination.join(', ') : 'All Destinations'}
                                </span>
                            </button>

                            {isDestOpen && (
                                <div className="absolute top-12 left-0 w-48 bg-white text-navy rounded-lg shadow-xl overflow-hidden z-50 py-2 border border-black/10">
                                    {destOptions.map(dest => (
                                        <label key={dest} className="flex items-center px-4 py-2 hover:bg-gold/10 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={destination.includes(dest)}
                                                onChange={() => toggleDest(dest)}
                                                className="mr-3 w-4 h-4 text-gold border-gray-300 rounded focus:ring-gold"
                                            />
                                            <span className="text-sm font-medium">{dest}</span>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex-1 w-full md:w-auto flex items-center px-6 py-4 md:py-2 border-b md:border-b-0 md:border-r border-white/20">
                        <Calendar className="text-gold w-5 h-5 mr-3" />
                        <div className="flex flex-col text-left w-full">
                            <label className="text-xs text-soft-blue uppercase tracking-wider font-bold">When?</label>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="bg-transparent text-white font-medium focus:outline-none cursor-pointer appearance-none w-full placeholder-white"
                                placeholder="Select Date"
                            />
                        </div>
                    </div>

                    <div className="flex-1 w-full md:w-auto flex items-center px-6 py-4 md:py-2">
                        <Users className="text-gold w-5 h-5 mr-3" />
                        <div className="flex flex-col text-left w-full">
                            <label className="text-xs text-soft-blue uppercase tracking-wider font-bold">Guests</label>
                            <select
                                value={guests}
                                onChange={(e) => setGuests(e.target.value)}
                                className="bg-transparent text-white font-medium focus:outline-none cursor-pointer appearance-none w-full"
                            >
                                <option className="text-navy" value="2 Adults">2 Adults</option>
                                <option className="text-navy" value="1 Adult">1 Adult</option>
                                <option className="text-navy" value="Family (3)">Family (3)</option>
                                <option className="text-navy" value="Family (4)">Family (4)</option>
                                <option className="text-navy" value="Group (5+)">Group (5+)</option>
                            </select>
                        </div>
                    </div>

                    <button
                        onClick={handleSearch}
                        className="w-full md:w-auto bg-gold hover:bg-gold/90 text-navy p-4 rounded-full transition-all flex items-center justify-center transform active:scale-95"
                    >
                        <Search className="w-6 h-6" />
                    </button>
                </motion.div>
            </div>

            {/* Decorative Sun Element */}
            <div className="absolute top-1/4 right-10 w-64 h-64 bg-gold/10 blur-[100px] rounded-full hidden lg:block" />
        </section>
    );
}
