'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Star } from 'lucide-react';
import Image from 'next/image';
import TourModal from './TourModal';
import { Tour } from '@/data/toursData';

export interface TourProps extends Partial<Tour> {
    title: string;
    price?: number;
    duration: string;
    image: string;
    category?: string;
    tags?: string[];
    description?: string;
    isPremium?: boolean;
    buttonText?: string;
    customStyles?: {
        tagBg?: string;
        tagText?: string;
        buttonBg?: string;
        buttonText?: string;
    }
}

export default function TourCard({ tour, index = 0 }: { tour: TourProps, index?: number }) {
    const { customStyles } = tour;
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <motion.div
                onClick={() => setIsModalOpen(true)}
                whileHover={{ y: -10 }}
                className={`min-w-[300px] w-[350px] bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer group flex flex-col h-full ${tour.isPremium ? 'border-2 border-gold/20' : ''}`}
            >
            <div className="relative h-64 overflow-hidden shrink-0">
                <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Wave Divider */}
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

                <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {tour.category && (
                        <div className="bg-soft-blue text-navy px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider w-fit">
                            {tour.category}
                        </div>
                    )}
                    {tour.tags?.map((tag, i) => (
                        <div
                            key={i}
                            className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider w-fit box-border backdrop-blur-sm ${customStyles?.tagBg || 'bg-navy/90'} ${customStyles?.tagText || 'text-gold'}`}
                        >
                            {tag}
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center text-sage text-sm font-medium mb-1">
                        <Clock size={16} className="mr-1" />
                        {tour.duration}
                    </div>
                    {(tour.pricingOptions?.[0]?.price || tour.price) != null && (
                        <div className="text-right leading-none">
                            <span className="text-navy/50 text-[10px] uppercase font-bold tracking-wider block mb-1">From</span>
                            <span className="text-navy font-bold text-lg">
                                ${(tour.pricingOptions?.[0]?.price || tour.price)?.toLocaleString()}
                            </span>
                        </div>
                    )}
                </div>

                <h3 className={`text-xl font-bold mb-3 transition-colors line-clamp-2 ${tour.isPremium ? 'text-gold' : 'text-navy group-hover:text-gold'}`}>
                    {tour.title}
                </h3>
                
                {tour.reviews && (
                    <div className="flex items-center mb-3">
                        <Star size={14} className="text-gold fill-gold mr-1" />
                        <span className="text-sm font-bold text-navy">{tour.reviews.rating}</span>
                        <span className="text-xs text-navy/50 ml-1">({tour.reviews.count} reviews)</span>
                    </div>
                )}

                {tour.description && (
                    <p className="text-navy/60 text-sm mb-4 line-clamp-3 flex-1">
                        {tour.description}
                    </p>
                )}

                <div className="flex justify-between items-center mt-auto border-t border-gray-100 pt-4">
                    <span className="text-sm font-medium text-gray-500">
                        {tour.buttonText || "View Itinerary"}
                    </span>
                    <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${tour.isPremium
                                ? 'bg-gold text-navy'
                                : customStyles?.buttonBg
                                    ? `${customStyles.buttonBg} ${customStyles.buttonText || 'text-white'}`
                                    : 'bg-cream text-navy group-hover:bg-gold'
                            }`}
                    >
                        <ArrowUpRight size={16} />
                    </div>
                </div>
            </div>
        </motion.div>

            <TourModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                tour={tour as Tour} 
            />
        </>
    );
}
