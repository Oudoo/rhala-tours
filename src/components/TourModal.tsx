'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, MapPin, CheckCircle, XCircle, Star, Info, List, Map, Calendar } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { TourProps } from './TourCard';

interface TourModalProps {
    isOpen: boolean;
    onClose: () => void;
    tour: TourProps;
}

export default function TourModal({ isOpen, onClose, tour }: TourModalProps) {
    const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'inclusions' | 'info'>('overview');

    if (!isOpen) return null;

    const tabs = [
        { id: 'overview', label: 'Overview', icon: Map },
        { id: 'itinerary', label: 'Itinerary', icon: List },
        { id: 'inclusions', label: 'Inclusions', icon: CheckCircle },
        { id: 'info', label: 'Information', icon: Info },
    ] as const;

    // Use minimum price from pricingOptions if available, otherwise fallback to standard tour price or default
    const displayPrice = tour.pricingOptions?.[0]?.price || tour.price || 350;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
                    />
                    
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden relative z-10 flex flex-col"
                    >
                        {/* Header Section */}
                        <div className="relative h-64 md:h-80 shrink-0">
                            <Image
                                src={tour.image || ''}
                                alt={tour.title || 'Tour Image'}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
                            
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-2 text-2xl rounded-full transition-colors font-bold z-20"
                            >
                                <X size={24} />
                            </button>

                            <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {tour.category && (
                                            <span className="bg-gold text-navy px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                                {tour.category}
                                            </span>
                                        )}
                                        {tour.tourType && (
                                            <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                                {tour.tourType}
                                            </span>
                                        )}
                                        <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center">
                                            <Clock size={14} className="mr-1 inline" />
                                            {tour.duration}
                                        </span>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                        {tour.title}
                                    </h2>
                                    {tour.reviews && (
                                        <div className="flex items-center mt-3 text-white/90 text-sm font-medium">
                                            <Star size={16} className="text-gold mr-1 fill-gold" />
                                            <span className="mr-2">{tour.reviews.rating}</span>
                                            <span className="text-white/60">({tour.reviews.count} Reviews)</span>
                                        </div>
                                    )}
                                </div>
                                
                                {/* Dynamic Pricing Header */}
                                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shrink-0 text-right hidden md:block">
                                    <p className="text-white/70 text-sm uppercase tracking-wider mb-1 font-bold">Starting from</p>
                                    <p className="text-white text-3xl font-bold">${displayPrice}</p>
                                </div>
                            </div>
                        </div>

                        {/* Tab Navigation */}
                        <div className="bg-white border-b border-navy/10 px-6 flex overflow-x-auto custom-scrollbar shrink-0">
                            {tabs.map((tab) => {
                                const Icon = tab.icon;
                                const isActive = activeTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center px-6 py-4 font-bold text-sm transition-colors relative whitespace-nowrap ${
                                            isActive ? 'text-navy' : 'text-navy/50 hover:text-navy/80'
                                        }`}
                                    >
                                        <Icon size={18} className="mr-2" />
                                        {tab.label}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeTabIndicator"
                                                className="absolute bottom-0 left-0 right-0 h-1 bg-gold rounded-t-full"
                                            />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Scrollable Content Area */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-cream/30 custom-scrollbar relative">
                            <div className="flex flex-col lg:flex-row gap-10 min-h-0">
                                
                                {/* Main Tab Content */}
                                <div className="flex-1 min-h-[400px]">
                                    <AnimatePresence mode="wait">
                                        {/* OVERVIEW TAB */}
                                        {activeTab === 'overview' && (
                                            <motion.div
                                                key="overview"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="space-y-8"
                                            >
                                                <div>
                                                    <h3 className="text-2xl font-bold text-navy mb-4">Tour Overview</h3>
                                                    <p className="text-navy/80 leading-relaxed text-lg">
                                                        {tour.description || "Detailed overview coming soon."}
                                                    </p>
                                                </div>

                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-navy/5 flex items-start">
                                                        <MapPin className="text-gold mr-3 shrink-0" size={24} />
                                                        <div>
                                                            <h5 className="font-bold text-navy text-sm">Pickup</h5>
                                                            <p className="text-navy/70 text-sm mt-1">{tour.pickupLocation}</p>
                                                            <p className="text-navy/50 text-xs mt-1">{tour.pickupTime}</p>
                                                        </div>
                                                    </div>
                                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-navy/5 flex items-start">
                                                        <Calendar className="text-gold mr-3 shrink-0" size={24} />
                                                        <div>
                                                            <h5 className="font-bold text-navy text-sm">Availability</h5>
                                                            <p className="text-navy/70 text-sm mt-1">{tour.availability}</p>
                                                            <p className="text-navy/50 text-xs mt-1">Available in: {tour.guideLanguages?.join(', ')}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {tour.highlights && tour.highlights.length > 0 && (
                                                    <div>
                                                        <h3 className="text-xl font-bold text-navy mb-4">Main Highlights</h3>
                                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                            {tour.highlights.map((highlight, idx) => (
                                                                <li key={idx} className="flex items-start text-navy/80">
                                                                    <div className="w-2 h-2 mt-2 bg-gold rounded-full mr-3 shrink-0" />
                                                                    <span className="leading-snug">{highlight}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </motion.div>
                                        )}

                                        {/* ITINERARY TAB */}
                                        {activeTab === 'itinerary' && (
                                            <motion.div
                                                key="itinerary"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                            >
                                                <h3 className="text-2xl font-bold text-navy mb-6">Detailed Itinerary</h3>
                                                
                                                {!tour.itinerary || tour.itinerary.length === 0 ? (
                                                    <p className="text-navy/50 italic py-4">Detailed itinerary coming soon.</p>
                                                ) : (
                                                    <div className="space-y-6 pb-8">
                                                        {tour.itinerary.map((day) => (
                                                            <div key={day.day} className="flex gap-4 group">
                                                                <div className="flex flex-col items-center">
                                                                    <div className="w-10 h-10 rounded-full bg-navy text-gold font-bold flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-navy transition-colors">
                                                                        {day.day}
                                                                    </div>
                                                                    <div className="w-0.5 h-full bg-navy/10 my-2 group-last:hidden" />
                                                                </div>
                                                                <div className="pb-6">
                                                                    <h4 className="text-lg font-bold text-navy mb-2">{day.title}</h4>
                                                                    <p className="text-navy/70 leading-relaxed text-sm md:text-base">
                                                                        {day.details}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </motion.div>
                                        )}

                                        {/* INCLUSIONS TAB */}
                                        {activeTab === 'inclusions' && (
                                            <motion.div
                                                key="inclusions"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8"
                                            >
                                                <div>
                                                    <h3 className="text-xl font-bold text-navy mb-4 flex items-center">
                                                        <CheckCircle className="text-[#25D366] mr-2" /> What's Included
                                                    </h3>
                                                    <ul className="space-y-3 bg-white p-6 rounded-2xl shadow-sm border border-navy/5">
                                                        {(tour.included || []).map((item, i) => (
                                                            <li key={i} className="flex items-start text-sm text-navy/80">
                                                                <CheckCircle size={16} className="text-[#25D366] mr-3 mt-0.5 shrink-0" />
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    
                                                    <div className="mt-6 space-y-3 bg-white p-6 rounded-2xl shadow-sm border border-navy/5">
                                                        <h4 className="font-bold text-navy text-sm uppercase tracking-wider mb-2">Meals & Accommodation</h4>
                                                        <p className="text-sm text-navy/80"><span className="font-bold mr-2 text-navy">Stays:</span> {tour.accommodation}</p>
                                                        <p className="text-sm text-navy/80"><span className="font-bold mr-2 text-navy">Dining:</span> {tour.meals?.join(', ')}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-navy mb-4 flex items-center">
                                                        <XCircle className="text-red-500 mr-2" /> What's Excluded
                                                    </h3>
                                                    <ul className="space-y-3 bg-white p-6 rounded-2xl shadow-sm border border-navy/5">
                                                        {(tour.excluded || []).map((item, i) => (
                                                            <li key={i} className="flex items-start text-sm text-navy/80">
                                                                <XCircle size={16} className="text-red-500 mr-3 mt-0.5 shrink-0" />
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* INFO TAB */}
                                        {activeTab === 'info' && (
                                            <motion.div
                                                key="info"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="space-y-8 pb-8"
                                            >
                                                {/* Pricing Options */}
                                                <div>
                                                    <h3 className="text-xl font-bold text-navy mb-4">Pricing Options</h3>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                        {(tour.pricingOptions || []).map((tier, idx) => (
                                                            <div key={idx} className="bg-white border-2 border-transparent hover:border-gold/30 transition-colors p-5 rounded-2xl shadow-sm">
                                                                <h4 className="font-bold text-navy text-lg">{tier.title}</h4>
                                                                <p className="text-2xl font-bold text-gold my-2">${tier.price}</p>
                                                                <p className="text-sm text-navy/60">{tier.description}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Important Notes */}
                                                <div>
                                                    <h3 className="text-xl font-bold text-navy mb-4">Important Notes</h3>
                                                    <ul className="bg-white border border-navy/5 p-6 rounded-2xl list-disc list-inside space-y-3 text-navy/80 text-sm shadow-sm">
                                                        {(tour.importantNotes || []).map((note, i) => (
                                                            <li key={i}>{note}</li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Cancellation */}
                                                <div>
                                                    <h3 className="text-xl font-bold text-navy mb-4">Cancellation Policy</h3>
                                                    <p className="text-navy/70 bg-white p-5 rounded-xl border-l-4 border-gold shadow-sm">
                                                        {tour.cancellationPolicy}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}

                                    </AnimatePresence>
                                </div>

                                {/* Sidebar Content */}
                                <div className="w-full lg:w-80 shrink-0 space-y-6">
                                    <div className="bg-navy p-6 md:p-8 rounded-3xl text-cream shadow-2xl relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl -mr-10 -mt-10" />
                                        
                                        <h4 className="font-bold text-white mb-2 text-2xl relative">Ready to book?</h4>
                                        <p className="text-cream/70 text-sm mb-8 relative">Connect with our travel experts to secure your spot or customize this itinerary entirely.</p>
                                        
                                        <div className="space-y-4 relative bg-navy/50 rounded-xl p-4 mb-6 border border-white/5">
                                            <div className="flex items-center justify-between text-white/90 border-b border-white/10 pb-3">
                                                <span className="text-sm">Days</span>
                                                <span className="font-bold">{tour.duration}</span>
                                            </div>
                                            <div className="flex items-center justify-between text-white/90 pt-3">
                                                <span className="text-sm">Tour Type</span>
                                                <span className="font-bold text-right ml-4 text-sm">{tour.tourType || 'Private'}</span>
                                            </div>
                                        </div>
                                        
                                        <a 
                                            href="https://wa.me/201000000000" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="block text-center w-full bg-[#25D366] text-white py-4 rounded-xl font-bold hover:bg-[#20bd5a] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
                                        >
                                            Chat on WhatsApp
                                        </a>
                                    </div>
                                    
                                    {/* Sidebar Extras (Guarantees) */}
                                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-navy/5">
                                        <ul className="space-y-4">
                                            <li className="flex items-center text-sm font-bold text-navy/80">
                                                <Calendar className="text-gold mr-3" size={20} />
                                                Flexible Booking
                                            </li>
                                            <li className="flex items-center text-sm font-bold text-navy/80">
                                                <CheckCircle className="text-gold mr-3" size={20} />
                                                No Hidden Fees
                                            </li>
                                            <li className="flex items-center text-sm font-bold text-navy/80">
                                                <MapPin className="text-gold mr-3" size={20} />
                                                Local Expert Guides
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
