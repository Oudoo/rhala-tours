'use client';

import { motion } from 'framer-motion';
import { Clock, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { CategoryTour } from '@/data/mockCategoryData';

const WHATSAPP_NUMBER = "201557469694";

export default function CategoryTourCard({ tour, index = 0 }: { tour: CategoryTour, index?: number }) {
    const defaultMessage = `Hello, I am interested in the ${tour.title}`;
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultMessage)}`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-navy/5"
        >
            {/* Image Section */}
            <div className="relative h-56 overflow-hidden shrink-0 group">
                <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-60" />
                
                {/* Duration Badge */}
                <div className="absolute bottom-4 left-4 bg-navy/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
                    <Clock size={14} className="text-gold" />
                    {tour.duration}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-navy mb-2 line-clamp-2">
                    {tour.title}
                </h3>
                
                <p className="text-navy/60 text-sm mb-4 line-clamp-2 flex-1 leading-relaxed">
                    {tour.shortDescription}
                </p>

                <div className="flex justify-between items-center mb-5">
                    <div>
                        <span className="text-navy/50 text-[10px] uppercase font-bold tracking-wider block mb-0.5">Starts from</span>
                        <span className="text-lg font-black text-navy">${tour.price}</span>
                    </div>
                </div>

                {/* WhatsApp Button */}
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-bold hover:bg-[#20bd5a] transition-colors shadow-sm shadow-[#25D366]/20"
                >
                    <MessageCircle size={18} />
                    Inquire on WhatsApp
                </a>
            </div>
        </motion.div>
    );
}
