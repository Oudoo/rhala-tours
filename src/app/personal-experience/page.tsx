'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Zap, MapPin, ArrowRight } from "lucide-react";

export default function PersonalExperienceHub() {
    const experiences = [
        {
            title: "Adrenaline Seekers",
            description: "From desert safaris to deep sea diving, push your limits across Egypt's most extreme landscapes.",
            href: "/personal-experience/adrenaline-seekers",
            image: "/tours-packages/desert-camping-768x600.png",
            icon: <Zap className="text-gold" size={24} />,
            color: "from-orange-500/20 to-transparent",
            tag: "High Energy"
        },
        {
            title: "Honeymoon",
            description: "Romantic escapes designed for two. Discover luxury cruises and private coastal retreats in the land of Pharaohs.",
            href: "/personal-experience/honeymoon",
            image: "/tours-packages/nile-cruise-luxor-2-768x600.png",
            icon: <Heart className="text-gold" size={24} />,
            color: "from-pink-500/20 to-transparent",
            tag: "Romantic"
        },
        {
            title: "Local Experiences",
            description: "Step off the beaten path and immerse yourself in the authentic rhythms of Egyptian life, markets, and traditions.",
            href: "/personal-experience/local-experiences",
            image: "/tours-packages/Hanging-Church-in-Egypt-768x600.png",
            icon: <MapPin className="text-gold" size={24} />,
            color: "from-green-500/20 to-transparent",
            tag: "Authentic"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#FDFBF7]">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <Image
                    src="/tours-packages/The-Great-Pyramids-768x600.png"
                    alt="Breathtaking Egyptian landscape"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/30 to-[#FDFBF7]"></div>
                
                <div className="relative z-10 text-center px-6 mt-20">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block text-gold uppercase tracking-[0.3em] font-bold text-xs mb-4"
                    >
                        Tailored Collections
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-cream drop-shadow-lg mb-6 tracking-tight"
                    >
                        Personal Experiences
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-cream/90 max-w-2xl mx-auto font-medium drop-shadow-md"
                    >
                        Choose your rhythm. Whether seeking thrills, romance, or authentic culture, we've curated the perfect journey for you.
                    </motion.p>
                </div>
            </section>

            {/* Experience Selection Grid */}
            <section className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.title}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15 + 0.3 }}
                                className="group relative"
                            >
                                <Link href={exp.href} className="block relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                    {/* Background Image */}
                                    <Image
                                        src={exp.image}
                                        alt={exp.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    
                                    {/* Overlays */}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent transition-opacity duration-500 group-hover:opacity-90`}></div>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                                    {/* Content */}
                                    <div className="absolute inset-0 p-10 flex flex-col justify-end">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 bg-cream/10 backdrop-blur-md rounded-lg">
                                                {exp.icon}
                                            </div>
                                            <span className="text-gold/80 text-xs font-bold uppercase tracking-widest leading-none">
                                                {exp.tag}
                                            </span>
                                        </div>
                                        
                                        <h2 className="text-3xl font-bold text-cream mb-4 group-hover:text-gold transition-colors duration-300">
                                            {exp.title}
                                        </h2>
                                        
                                        <p className="text-cream/70 text-sm leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                            {exp.description}
                                        </p>

                                        <div className="flex items-center gap-2 text-gold font-bold text-sm tracking-wider uppercase group-hover:gap-4 transition-all duration-300">
                                            Explore Section
                                            <ArrowRight size={18} />
                                        </div>
                                    </div>

                                    {/* Decorative border */}
                                    <div className="absolute inset-0 border border-white/10 rounded-3xl group-hover:border-gold/30 transition-colors duration-500"></div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom Section - Customization */}
            <section className="py-20 bg-navy text-cream overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 -skew-x-12 transform translate-x-1/2"></div>
                
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">
                        Can't decide? Let us <span className="text-gold italic">tailor</span> it.
                    </h2>
                    <p className="text-cream/60 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
                        Mix and match experiences from any category. Our travel specialists can design a unique itinerary that covers everything you're looking for.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-gold text-navy px-10 py-5 rounded-full font-bold hover:bg-cream transition-all duration-300 shadow-xl shadow-gold/10"
                    >
                        Contact Travel Specialist
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
