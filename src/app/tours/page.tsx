'use client';

import { motion } from 'framer-motion';
import TourCard from '@/components/TourCard';
import { SlidersHorizontal } from 'lucide-react';

import { ALL_TOURS } from '@/data/toursData';

export default function ToursPage() {
    return (
        <div className="pt-20 bg-cream min-h-screen">
            {/* Header */}
            <section className="bg-navy text-cream py-20 px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold uppercase tracking-widest mb-4"
                >
                    Our Journeys
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gold tracking-[0.2em] uppercase font-bold text-sm"
                >
                    Curated Experiences for Every Traveler
                </motion.p>
            </section>

            {/* Filter Bar */}
            <section className="sticky top-20 z-40 bg-cream/95 backdrop-blur-sm border-b border-navy/10 py-4 px-6">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
                    <div className="flex items-center gap-2 text-navy font-bold text-sm uppercase tracking-wide">
                        <SlidersHorizontal size={18} />
                        <span>Filter</span>
                    </div>

                    <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                        {['All', 'Adventure', 'Luxury', 'Cruise', 'Budget'].map((filter, idx) => (
                            <button
                                key={filter}
                                className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${idx === 0 ? 'bg-navy text-cream' : 'bg-white text-navy hover:bg-navy/10'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {ALL_TOURS.map((tour, index) => (
                        <motion.div
                            key={tour.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <TourCard tour={tour} />
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
