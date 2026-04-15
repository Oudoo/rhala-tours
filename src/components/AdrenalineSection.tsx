'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Wind, Mountain, Plane, Waves, Cloud, AppWindow } from 'lucide-react';
import Image from 'next/image';
import TourModal from './TourModal';
import { Tour } from '@/data/toursData';

const ADVENTURES = [
    {
        id: 1,
        title: "Desert Safari",
        tag: "4x4 Dune Bashing",
        image: "/tours-packages/Deir-al-Bahri-768x600.png",
        icon: Wind,
        description: "Embark on a heart-pounding 4x4 journey through the Western Desert. Our expert drivers will take you over massive dunes, leading to hidden oases and ancient fossil fields. Experience the thrill of sandboarding and enjoy a traditional Bedouin dinner under the stars.",
        duration: "Full Day",
        highlights: ["Dune bashing in 4x4 vehicles", "Sandboarding on giant dunes", "Visit to ancient fossil valley", "Traditional Bedouin camp dinner"],
    },
    {
        id: 2,
        title: "Mountain Hiking",
        tag: "Sinai Trail",
        image: "/tours-packages/tour-to-temple-of-Karnak-768x600.png",
        icon: Mountain,
        description: "Trek through the majestic mountains of Sinai. Follow ancient Bedouin trails, climb legendary peaks like Mount Moses for sunrise, and visit high-altitude monasteries. A journey of spiritual and physical discovery.",
        duration: "Full Day",
        highlights: ["Guided hike through Sinai mountains", "Sunrise at Mount Sinai peak", "Visit to St. Catherine's Monastery", "Expert local Bedouin guides"],
    },
    {
        id: 3,
        title: "Pyramids Paragliding",
        tag: "Aerial Views",
        image: "/tours-packages/Day-tour-to-Pyramids-768x600.png",
        icon: Cloud,
        description: "Soar like an eagle over the only remaining Wonder of the Ancient World. Experience the Giza Plateau from a perspective few ever see. Our tandem paragliding sessions offer smooth flight and unparalleled photo opportunities.",
        duration: "1 Hour",
        highlights: ["Tandem paragliding with expert pilots", "Direct views over the Great Pyramids", "Professional aerial photography", "Safety equipment and briefing"],
    },
    {
        id: 4,
        title: "Nile Kayaking",
        tag: "River Adventure",
        image: "/tours-packages/nile-cruise-luxor-768x600.png",
        icon: Waves,
        description: "Paddle through the heart of history. Our Nile kayaking tours take you past ancient temples and lush riverbanks in Luxor or Aswan. A peaceful yet active way to see the lifeline of Egypt.",
        duration: "2-3 Hours",
        highlights: ["Guided kayaking on the Nile River", "Views of riverside temples", "Bird watching in the river reeds", "Sunset sessions available"],
    },
    {
        id: 5,
        title: "Sky Diving",
        tag: "The Ultimate Drop",
        image: "/tours-packages/hurghada-beaches-768x600.png",
        icon: Plane,
        description: "The ultimate rush. Leap from thousands of feet above the stunning Red Sea coast. See the contrast between the deep blue water and the golden desert as you freefall with our world-class instructors.",
        duration: "3 Hours",
        highlights: ["Tandem skydive from 13,000 feet", "Unmatched Red Sea coastal views", "Video and photo package available", "International safety standards"],
    },
    {
        id: 6,
        title: "Helicopter Tour",
        tag: "Cairo from Above",
        image: "/tours-packages/visit-Egyptian-Museum-768x600.png",
        icon: AppWindow,
        description: "Beat the traffic and see Cairo's sprawling majesty from the air. From the Citadel of Saladin to the Pyramids of Giza, this helicopter tour provides a rapid and luxurious overview of the capital's landmarks.",
        duration: "30-45 Mins",
        highlights: ["Luxury helicopter flight", "Comprehensive city overview", "Direct fly-over of major landmarks", "Comfortable climate-controlled cabin"],
    }
];

export default function AdrenalineSection() {
    const [selectedAdventure, setSelectedAdventure] = useState<any>(null);

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
                            onClick={() => setSelectedAdventure(adventure)}
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
                                    {adventure.description}
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
                    <button 
                        onClick={() => setSelectedAdventure(ADVENTURES[0])}
                        className="bg-gold text-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-cream transition-colors duration-300 shadow-lg shadow-gold/20"
                    >
                        Book Adventure
                    </button>
                </div>
            </div>

            {/* Modal Integration */}
            <TourModal 
                isOpen={!!selectedAdventure} 
                onClose={() => setSelectedAdventure(null)} 
                tour={selectedAdventure as unknown as Tour} 
            />
        </section>
    );
}
