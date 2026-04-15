'use client';

import { motion } from 'framer-motion';
import { CategoryTour } from '@/data/mockCategoryData';
import CategoryTourCard from './CategoryTourCard';

interface CategoryLayoutProps {
    title: string;
    description: string;
    tours: CategoryTour[];
}

export default function CategoryLayout({ title, description, tours }: CategoryLayoutProps) {
    return (
        <div className="min-h-screen bg-cream">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center pt-20 bg-navy">
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-wider mb-4 drop-shadow-md"
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-cream/90 font-medium leading-relaxed drop-shadow-sm max-w-2xl mx-auto"
                    >
                        {description}
                    </motion.p>
                </div>
            </section>

            {/* Tours Grid Section */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-gold uppercase tracking-[0.2em] font-bold text-sm block mb-2">Our Selection</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-navy">Featured Experiences</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tours.map((tour, idx) => (
                            <CategoryTourCard key={tour.id} tour={tour} index={idx} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
