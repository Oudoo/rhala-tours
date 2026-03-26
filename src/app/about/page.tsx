'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, Globe, Shield, Leaf } from 'lucide-react';

const VALUES = [
    {
        icon: Heart,
        title: "Passion for Egypt",
        description: "We don't just show you Egypt; we share our deep love for its history, culture, and people."
    },
    {
        icon: Globe,
        title: "Authentic Connections",
        description: "We bridge the gap between traveler and local, fostering meaningful interactions and understanding."
    },
    {
        icon: Shield,
        title: "Safety & Trust",
        description: "Your safety is paramount. We partner with trusted local experts to ensure a worry-free journey."
    },
    {
        icon: Leaf,
        title: "Sustainable Travel",
        description: "We believe in responsible tourism that preserves heritage and benefits local communities."
    }
];

export default function AboutPage() {
    return (
        <div className="bg-cream min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://loremflickr.com/1920/1080/egypt,temple?lock=40"
                        alt="RHALA Team"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-navy/60" />
                </div>

                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-gold tracking-[0.2em] uppercase font-bold text-sm mb-4 block"
                    >
                        Since 2010
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-8 uppercase tracking-widest"
                    >
                        Our Story
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg md:text-xl text-cream/90 leading-relaxed max-w-2xl mx-auto"
                    >
                        RHALA was born from a desire to show the world the true soul of Egypt—beyond the guidebooks, into the heart of its living history.
                    </motion.p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-gold uppercase tracking-[0.2em] font-bold text-sm block mb-4">Our Mission</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                        Big Change Starts <span className="text-gold">Small.</span>
                    </h2>
                    <p className="text-navy/80 text-lg leading-relaxed mb-6">
                        We believe that travel has the power to transform—not just the traveler, but the destinations they visit. By focusing on small groups, intimate experiences, and local partnerships, we ensure that our footprint is light but our impact is profound.
                    </p>
                    <p className="text-navy/80 text-lg leading-relaxed">
                        Every journey with RHALA contributes to the preservation of Egypt's monuments and the prosperity of its artisans, storytellers, and guardians.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                >
                    <Image
                        src="https://loremflickr.com/800/1000/egypt,people?lock=41"
                        alt="Local Guide"
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </section>

            {/* Values Section */}
            <section className="bg-navy py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-gold uppercase tracking-[0.2em] font-bold text-sm block mb-2">Philosophy</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-cream">Our Core Values</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {VALUES.map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors"
                            >
                                <value.icon className="text-gold w-10 h-10 mb-6" />
                                <h3 className="text-xl font-bold text-cream mb-4">{value.title}</h3>
                                <p className="text-cream/70 leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-navy mb-8">Ready to start your journey?</h2>
                    <button className="bg-gold text-navy px-10 py-4 rounded-full font-bold text-lg tracking-wide hover:bg-gold/90 transition-transform transform hover:-translate-y-1 shadow-lg">
                        Plan Your Trip
                    </button>
                </motion.div>
            </section>
        </div>
    );
}
