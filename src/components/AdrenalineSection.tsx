'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Wind, Mountain, Plane, Waves, Cloud, AppWindow } from 'lucide-react';
import Image from 'next/image';

const ADVENTURES = [
    {
        id: 1,
        title: "Desert Safari",
        tag: "4x4 Dune Bashing",
        image: "https://loremflickr.com/800/600/desert,jeep,safari?lock=60",
        icon: Wind
    },
    {
        id: 2,
        title: "Mountain Hiking",
        tag: "Sinai Trail",
        image: "https://loremflickr.com/800/600/hiking,mountain,sunrise?lock=61",
        icon: Mountain
    },
    {
        id: 3,
        title: "Pyramids Paragliding",
        tag: "Aerial Views",
        image: "https://loremflickr.com/800/600/paragliding,pyramids?lock=62",
        icon: Cloud
    },
    {
        id: 4,
        title: "Nile Kayaking",
        tag: "River Adventure",
        image: "https://loremflickr.com/800/600/kayak,nile,river?lock=63",
        icon: Waves
    },
    {
        id: 5,
        title: "Sky Diving",
        tag: "The Ultimate Drop",
        image: "https://loremflickr.com/800/600/skydiving,egypt?lock=64",
        icon: Plane
    },
    {
        id: 6,
        title: "Helicopter Tour",
        tag: "Cairo from Above",
        image: "https://loremflickr.com/800/600/helicopter,cairo,view?lock=65",
        icon: AppWindow
    }
];

export default function AdrenalineSection() {
    return (
        <section className="bg-teal py-24 text-cream relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-gold uppercase tracking-[0.2em] font-bold text-sm block mb-4">For the Bold</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4">Adrenaline Seekers</h2>
                    <p className="text-sage max-w-2xl mx-auto text-lg">
                        Experience Egypt's wild side. From the depths of the Red Sea to the peaks of Sinai.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ADVENTURES.map((adventure, index) => (
                        <motion.div
                            key={adventure.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer group flex flex-col h-full border border-gray-100"
                        >
                            <div className="relative h-64 overflow-hidden shrink-0">
                                <Image
                                    src={adventure.image}
                                    alt={adventure.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                <div className="absolute top-4 left-4 flex flex-col gap-2">
                                    <div className="bg-navy/90 text-gold px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider w-fit box-border backdrop-blur-sm shadow-md flex items-center gap-1">
                                        <adventure.icon size={14} />
                                        {adventure.tag}
                                    </div>
                                </div>
                                {/* Wave Divider to match TourCard */}
                                <div className="absolute -bottom-1 left-0 right-0 h-8 z-10 w-full">
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
                            </div>

                            <div className="p-6 flex flex-col flex-1 bg-white">
                                <h3 className="text-xl font-bold mb-3 text-navy group-hover:text-gold transition-colors">{adventure.title}</h3>
                                <p className="text-navy/60 text-sm mb-4 line-clamp-3 flex-1">
                                    Thrill-seeking adventure featuring {adventure.tag.toLowerCase()} tailored for bold explorers.
                                </p>

                                <div className="flex justify-between items-center mt-auto border-t border-gray-100 pt-4">
                                    <span className="text-sm font-medium text-gray-500">View Adventure</span>
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-cream text-navy group-hover:bg-gold">
                                        <ArrowUpRight size={16} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="bg-gold text-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-cream transition-colors duration-300 shadow-lg shadow-gold/20">
                        Book Adventure
                    </button>
                </div>
            </div>
        </section>
    );
}
