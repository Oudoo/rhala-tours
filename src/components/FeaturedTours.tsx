'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import TourCard from './TourCard';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const TOURS = [
    {
        title: "Grand Egyptian Discovery",
        price: 2090,
        duration: "9 Days",
        image: "/tours-packages/Day-tour-to-Pyramids-768x600.png",
        category: "Best Seller",
        tags: ["Private Guide", "Nile Cruise"],
        description: "The ultimate introduction to Egypt. Explore the Giza Pyramids, cruise the Nile from Luxor to Aswan, and discover the treasures of King Tutankhamun in Cairo.",
        isPremium: true
    },
    {
        title: "Nubian Soul",
        price: 870,
        duration: "5 Days",
        image: "/tours-packages/nile-cruise-luxor-768x600.png",
        category: "Budget",
        tags: ["Cultural Immersion", "Small Group"],
        description: "Immerse yourself in the vibrant culture of Aswan. Sail on a Felucca, visit a Nubian village, and experience the colorful heritage of southern Egypt.",
        isPremium: true
    },
    {
        title: "Royal Dahabiya",
        price: 1500,
        duration: "4 Days",
        image: "/tours-packages/nile-cruise-luxor-2-768x600.png",
        category: "Luxury",
        tags: ["Private Boat", "All Inclusive"],
        description: "Sail the Nile in style aboard a traditional Dahabiya. Enjoy private service, gourmet dining, and exclusive access to sites often missed by large cruise ships.",
        isPremium: true
    },
    {
        title: "Siwa Oasis Retreat",
        price: 1200,
        duration: "6 Days",
        image: "/tours-packages/Island-of-Agilika-egypt-768x600.png",
        category: "Adventure",
        tags: ["Desert Safari", "Eco-Lodge"],
        description: "Escape to the mystical Siwa Oasis. Float in salt lakes, camp under the stars in the Great Sand Sea, and explore the ancient Oracle Temple of Amun.",
        isPremium: true
    },
    {
        title: "Pharaonic Romance: The Honeymoon Edition",
        price: 2200,
        duration: "9 Days",
        image: "/tours-packages/The-Great-Pyramids-768x600.png", // Warm, golden-hour
        tags: ["Private Transfer", "5-Star Luxury"],
        description: "A romantic journey designed for two. Includes a private photo session at the Pyramids, a candlelight dinner on a private Felucca, and a 3-night relaxation stay at an adults-only Red Sea resort.",
        isPremium: true
    },
    {
        title: "Siwa: The Healing Retreat",
        price: 1800,
        duration: "5 Days",
        image: "/tours-packages/alex-Citadel-of-Qaitbay-egypt-768x600.png",
        tags: ["Therapeutic", "Eco-Luxury", "All-Inclusive"],
        description: "A journey for the body and soul in the heart of the oasis. Float in crystal salt lakes, experience traditional sand bath therapy at Dakrour Mountain, and disconnect in a candle-lit eco-lodge.",
        isPremium: true,
        buttonText: "Book Retreat",
        customStyles: {
            tagBg: "bg-sage",
            tagText: "text-teal",
            buttonBg: "bg-cream",
            buttonText: "text-teal"
        }
    }
];

export default function FeaturedTours() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 bg-cream overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
                <div>
                    <span className="text-gold uppercase tracking-[0.2em] font-bold text-sm block mb-2">Curated Journeys</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-navy">Signature Tours</h2>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex gap-2">
                        <button
                            onClick={scrollLeft}
                            className="w-10 h-10 rounded-full border border-navy/20 flex items-center justify-center text-navy hover:bg-gold hover:text-white hover:border-gold transition-all"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={scrollRight}
                            className="w-10 h-10 rounded-full border border-navy/20 flex items-center justify-center text-navy hover:bg-gold hover:text-white hover:border-gold transition-all"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-navy hover:text-gold transition-colors font-medium group">
                        View All Tours
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            <div
                ref={scrollContainerRef}
                className="flex gap-8 overflow-x-auto px-6 pb-12 snap-x scrollbar-hide no-scrollbar"
                style={{ scrollBehavior: 'smooth' }}
            >
                {TOURS.map((tour, index) => (
                    <div key={index} className="snap-center">
                        <TourCard tour={tour} index={index} />
                    </div>
                ))}
            </div>
        </section>
    );
}
