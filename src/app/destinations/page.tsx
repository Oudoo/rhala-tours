'use client';

import { motion } from 'framer-motion';
import DestinationCard from '@/components/DestinationCard';

const DESTINATIONS = [
    {
        name: "Cairo",
        image: "/tours-packages/The-Great-Pyramids-768x600.png",
        description: "The city of a thousand minarets, home to the Great Pyramids and the Sphinx."
    },
    {
        name: "Luxor",
        image: "/tours-packages/Luxor-Temple-egypt-768x600.png",
        description: "The world's greatest open-air museum, featuring Karnak and the Valley of the Kings."
    },
    {
        name: "Aswan",
        image: "/tours-packages/nile-cruise-768x600.png",
        description: "A serene city on the Nile, famous for its Nubian culture and the Philae Temple."
    },
    {
        name: "Alexandria",
        image: "/tours-packages/alex-Citadel-of-Qaitbay-egypt-768x600.png",
        description: "The Pearl of the Mediterranean, founded by Alexander the Great."
    },
    {
        name: "Siwa Oasis",
        image: "/tours-packages/Deir-el-Bahri-768x600.png",
        description: "An urban oasis in the Western Desert, known for its distinct culture and salt lakes."
    },
    {
        name: "Hurghada",
        image: "/tours-packages/hurghada-beaches-768x600.png",
        description: "A premier red sea resort town with stunning coral reefs and sandy beaches."
    },
    {
        name: "Dahab",
        image: "/tours-packages/Beach-in-Hurghada-egypt-768x600.png",
        description: "A laid-back coastal town, a diver's paradise and a hub for windsurfing."
    },
    {
        name: "White Desert",
        image: "/tours-packages/Island-of-Agilika-egypt-768x600.png",
        description: "A surreal landscape of chalk rock formations created by sandstorms."
    }
];

export default function DestinationsPage() {
    return (
        <div className="pt-20 bg-cream min-h-screen">
            {/* Mini Hero */}
            <section className="bg-navy text-cream py-20 px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold uppercase tracking-widest mb-4"
                >
                    Explore Egypt
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gold tracking-[0.2em] uppercase font-bold text-sm"
                >
                    Curated Destinations for the Discerning Traveler
                </motion.p>
            </section>

            {/* Grid */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {DESTINATIONS.map((dest, index) => (
                        <motion.div
                            key={dest.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <DestinationCard destination={dest} index={index} />
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
