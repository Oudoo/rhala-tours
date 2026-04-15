'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface DestinationProps {
    name: string;
    image: string;
    description: string;
}

export default function DestinationCard({ destination, index = 0 }: { destination: DestinationProps, index?: number }) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl overflow-hidden shadow-lg cursor-pointer group flex flex-col h-full border border-navy/5 transition-all duration-300 hover:shadow-xl"
        >
            <div className="relative h-64 overflow-hidden shrink-0">
                <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Wave Divider */}
                <div className="absolute -bottom-1 left-0 right-0 h-10 z-10 w-full transform">
                    <svg
                        viewBox="0 0 100 20"
                        className="w-full h-full text-white fill-current"
                        preserveAspectRatio="none"
                    >
                        {index % 2 === 0 ? (
                            <path d="M0 20 Q50 20 100 0 V20 H0 Z" />
                        ) : (
                            <path d="M0 0 Q50 20 100 20 V20 H0 Z" />
                        )}
                    </svg>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-300">
                    {destination.name}
                </h3>
                <p className="text-navy/60 text-sm mb-6 line-clamp-3 leading-relaxed flex-1">
                    {destination.description}
                </p>

                <div className="flex justify-between items-center mt-auto border-t border-navy/5 pt-6">
                    <span className="text-sm font-bold text-navy/40 uppercase tracking-widest group-hover:text-gold transition-colors">
                        Explore
                    </span>
                    <div className="w-10 h-10 rounded-full bg-cream text-navy flex items-center justify-center transition-all duration-300 group-hover:bg-gold group-hover:-rotate-12 group-hover:scale-110">
                        <ArrowUpRight size={20} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
