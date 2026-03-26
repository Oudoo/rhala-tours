'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle, AlertCircle, Globe, Plane } from 'lucide-react';
import clsx from 'clsx';

type AccordionItemProps = {
    title: string;
    isOpen: boolean;
    onClick: () => void;
    children: React.ReactNode;
};

const AccordionItem = ({ title, isOpen, onClick, children }: AccordionItemProps) => {
    return (
        <div className="border-b border-gray-200 last:border-none">
            <button
                onClick={onClick}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
            >
                <span className={clsx(
                    "text-xl md:text-2xl font-bold transition-colors duration-300",
                    isOpen ? "text-gold" : "text-teal"
                )}>
                    {title}
                </span>
                <ChevronDown
                    className={clsx(
                        "w-6 h-6 text-teal transition-transform duration-300",
                        isOpen ? "transform rotate-180 text-gold" : ""
                    )}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 text-navy/80 leading-relaxed">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function TravelEssentials() {
    const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

    const handleToggle = (index: number) => {
        setOpenIndexes(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-gold uppercase tracking-[0.2em] text-sm font-bold">Good to Know</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3 mb-6">Travel Essentials</h2>
                    <p className="text-navy/60 max-w-2xl mx-auto">
                        Everything you need to know before your journey to Egypt.
                    </p>
                </motion.div>

                <div className="bg-cream/30 rounded-3xl p-8 md:p-12 shadow-sm border border-navy/5">
                    <AccordionItem
                        title="Visa Requirements"
                        isOpen={openIndexes.includes(0)}
                        onClick={() => handleToggle(0)}
                    >
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-sage/20 p-2 rounded-full mt-1">
                                    <CheckCircle className="w-5 h-5 text-teal" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-teal mb-1">Visa-Free Entry</h4>
                                    <p className="text-sm">Available for citizens of 9 countries including Bahrain, Kuwait, UAE, Saudi Arabia, and others.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-sage/20 p-2 rounded-full mt-1">
                                    <Plane className="w-5 h-5 text-teal" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-teal mb-1">Visa On Arrival</h4>
                                    <p className="text-sm mb-2">Available for ~100 countries (USA, UK, EU, Canada, Australia, etc.).</p>
                                    <ul className="list-disc list-inside text-sm space-y-1 ml-1">
                                        <li>Cost: <span className="font-bold text-sage">$25 USD</span> for Single Entry</li>
                                        <li>Cost: <span className="font-bold text-sage">$60 USD</span> for Multiple Entry</li>
                                        <li>Payable in cash (USD/EUR) at airport bank kiosks before immigration.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-sage/20 p-2 rounded-full mt-1">
                                    <Globe className="w-5 h-5 text-teal" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-teal mb-1">E-Visa</h4>
                                    <p className="text-sm">Recommended for 180+ countries to skip queues. Apply at least 7 days in advance via the official visa portal.</p>
                                </div>
                            </div>

                            <div className="bg-white p-4 rounded-xl border border-navy/5 flex items-start gap-3 mt-4">
                                <AlertCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                <p className="text-xs text-navy/70">
                                    <strong>Note:</strong> As of 2022, there are no COVID-19 vaccination or PCR test requirements for entry into Egypt.
                                </p>
                            </div>
                        </div>
                    </AccordionItem>

                    {/* Placeholder for future essential items */}
                    <AccordionItem
                        title="Best Time to Visit"
                        isOpen={openIndexes.includes(1)}
                        onClick={() => handleToggle(1)}
                    >
                        <p>October to April is generally considered the best time to visit Egypt, when temperatures are cooler and more comfortable for exploring the outdoor ancient sites.</p>
                    </AccordionItem>
                    <AccordionItem
                        title="Currency & Tipping"
                        isOpen={openIndexes.includes(2)}
                        onClick={() => handleToggle(2)}
                    >
                        <p>The currency is the Egyptian Pound (EGP). Tipping (baksheesh) is customary and expected for most services.</p>
                    </AccordionItem>
                </div>
            </div>
        </section>
    );
}
