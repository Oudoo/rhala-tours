'use client';

import JournalSection from '@/components/JournalSection';
import { motion } from 'framer-motion';

export default function JournalPage() {
    return (
        <div className="bg-cream min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <div className="text-center">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-gold uppercase tracking-[0.2em] font-bold text-sm block mb-4"
                    >
                        Our Journal
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-navy mb-6"
                    >
                        Stories From The Nile
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-navy/60 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        Dive into the rich history, vibrant culture, and hidden gems of Egypt through the eyes of our travelers and experts.
                    </motion.p>
                </div>
            </div>

            {/* Reusing JournalSection which contains the feed and submission form */}
            <JournalSection />
        </div>
    );
}
