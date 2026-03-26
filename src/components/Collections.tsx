'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const COLLECTIONS = [
    {
        title: "Sahara Expeditions",
        description: "Traverse the Great Sand Sea and witness the surreal White Desert.",
        image: "https://loremflickr.com/800/1000/egypt,desert?lock=10",
        className: "md:col-span-2 md:row-span-2 h-96 md:h-full" // Large Square (Left)
    },
    {
        title: "Ancient Wonders",
        description: "Walk in the footsteps of Pharaohs.",
        image: "https://loremflickr.com/800/600/egypt,museum?lock=11",
        className: "md:col-span-1 md:row-span-1 h-64 md:h-auto" // Small Square (Top Mid)
    },
    {
        title: "Nile serenity",
        description: "Sail into the sunset on a Felucca.",
        image: "https://loremflickr.com/800/600/nile,boat?lock=12",
        className: "md:col-span-1 md:row-span-1 h-64 md:h-auto" // Small Square (Top Right)
    },
    {
        title: "Coastal Escapes",
        description: "Dive into the Red Sea's vibrant coral reefs.",
        image: "https://loremflickr.com/800/600/egypt,sea?lock=13",
        className: "md:col-span-2 md:row-span-1 h-64 md:h-auto" // Wide Rectangle (Bottom Right)
    }
];

export default function Collections() {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="text-center md:text-left">
                    <span className="text-gold uppercase tracking-[0.2em] font-bold text-sm block mb-2">Discover</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-navy">Curated Collections</h2>
                </div>
                <button className="hidden md:flex items-center gap-2 text-navy hover:text-gold transition-colors font-medium group">
                    View All Collections
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
                {COLLECTIONS.map((item, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ y: -5 }}
                        className={`relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg bg-navy ${item.className}`}
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-30"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent opacity-80 transition-opacity duration-300" />

                        <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                            <h3 className="text-2xl font-bold text-cream mb-2">{item.title}</h3>
                            <p className="text-cream/90 text-sm md:text-base line-clamp-2 mb-4">
                                {item.description}
                            </p>
                            <div className="flex items-center text-gold text-xs font-bold uppercase tracking-widest">
                                Explore <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <button className="md:hidden w-full mt-8 flex items-center justify-center gap-2 bg-navy text-cream py-4 rounded-full font-bold">
                View All Collections
                <ArrowRight size={20} />
            </button>
        </section>
    );
}
