'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { DayTour } from '@/data/dayToursData';

export default function DayTourCard({ tour, index = 0 }: { tour: DayTour; index?: number }) {
  return (
    <Link href={`/day-tours/${tour.slug}`} className="block h-full">
      <motion.div
        whileHover={{ y: -10 }}
        className={`min-w-[300px] bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer group flex flex-col h-full ${tour.isPremium ? 'border-2 border-gold/20' : ''}`}
      >
        {/* Image */}
        <div className="relative h-64 overflow-hidden shrink-0">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Wave divider */}
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

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {tour.tags?.map((tag, i) => (
              <div
                key={i}
                className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider w-fit backdrop-blur-sm bg-navy/90 text-gold"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center text-sage text-sm font-medium">
              <Clock size={16} className="mr-1" />
              {tour.duration}
            </div>
            <div className="text-right leading-none bg-gold rounded-lg px-3 py-2 shadow-sm">
              <span className="text-navy/80 text-[10px] uppercase font-black tracking-wider block mb-1">From</span>
              <span className="text-navy font-black text-lg">${tour.price}</span>
            </div>
          </div>

          <h3 className={`text-xl font-bold mb-2 transition-colors line-clamp-2 ${tour.isPremium ? 'text-gold' : 'text-navy group-hover:text-gold'}`}>
            {tour.title}
          </h3>

          {tour.reviews && (
            <div className="flex items-center mb-3">
              <Star size={14} className="text-gold fill-gold mr-1" />
              <span className="text-sm font-bold text-navy">{tour.reviews.rating}</span>
              <span className="text-xs text-navy/50 ml-1">({tour.reviews.count} reviews)</span>
            </div>
          )}

          <p className="text-navy/60 text-sm mb-4 line-clamp-3 flex-1 leading-relaxed">
            {tour.subtitle}
          </p>

          <div className="flex justify-between items-center mt-auto border-t border-gray-100 pt-4">
            <span className="text-sm font-medium text-gray-500">View Itinerary</span>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${tour.isPremium ? 'bg-gold text-navy' : 'bg-cream text-navy group-hover:bg-gold'}`}>
              <ArrowUpRight size={16} />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
