'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';
import BookingForm from './BookingForm';

interface Props {
    sourcePage?: string;
}

export default function FloatingOfferButton({ sourcePage = 'Tour Packages' }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent body scroll while drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <>
            {/* Floating compact button — mobile/tablet only */}
            <motion.button
                onClick={() => setIsOpen(true)}
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                aria-label="Open Special Offer form"
                className="lg:hidden fixed right-0 top-1/2 -translate-y-1/2 z-40
                           flex flex-col items-center gap-1
                           bg-gold text-navy
                           px-2 pt-3 pb-2
                           rounded-l-xl
                           shadow-lg shadow-gold/30"
            >
                {/* Subtle pulsing dot */}
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-white animate-ping opacity-60 pointer-events-none" />

                {/* Icon */}
                <motion.span
                    animate={{ rotate: [0, 12, -12, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}
                >
                    <Sparkles size={18} className="text-navy" />
                </motion.span>

                {/* Label — vertical text */}
                <span className="text-[9px] font-bold uppercase tracking-widest text-navy leading-none text-center" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                    Special Offer
                </span>
            </motion.button>

            {/* Drawer / Modal */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="lg:hidden fixed inset-0 z-[100] bg-navy/80 backdrop-blur-sm"
                        />

                        {/* Drawer panel — slides from bottom on mobile */}
                        <motion.div
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                            className="lg:hidden fixed bottom-0 left-0 right-0 z-[101]
                                       max-h-[92vh] overflow-y-auto
                                       bg-cream rounded-t-3xl shadow-2xl"
                        >
                            {/* Sticky close bar */}
                            <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-3 bg-cream/95 backdrop-blur-sm border-b border-navy/10">
                                <div className="flex items-center gap-2">
                                    <Sparkles size={18} className="text-gold" />
                                    <span className="text-navy font-bold text-sm uppercase tracking-wider">
                                        Special Offer
                                    </span>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    aria-label="Close form"
                                    className="w-9 h-9 rounded-full bg-navy/5 hover:bg-navy/10 flex items-center justify-center transition-colors"
                                >
                                    <X size={18} className="text-navy" />
                                </button>
                            </div>

                            {/* Form body */}
                            <div className="px-4 py-5">
                                <BookingForm sourcePage={sourcePage} variant="sidebar" />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
