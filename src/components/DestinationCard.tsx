'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface DestinationProps {
    name: string;
    image: string;
    description: string;
}

export default function DestinationCard({ destination }: { destination: DestinationProps }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
        >
            <Image
                src={destination.image}
                alt={destination.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-cream mb-2">{destination.name}</h3>
                <p className="text-cream/80 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {destination.description}
                </p>
                <div className="flex items-center text-gold font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    Explore <ArrowRight size={16} className="ml-2" />
                </div>
            </div>
        </motion.div>
    );
}
