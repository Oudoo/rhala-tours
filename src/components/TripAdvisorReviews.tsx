'use client';

import { motion } from 'framer-motion';
import { Star, ExternalLink, Award } from 'lucide-react';

const REVIEWS = [
    {
        id: 1,
        user: "Sarah & Mark (UK)",
        title: "Unforgettable Honeymoon!",
        body: "We booked the Pharaonic Romance package and it was flawless. The private dinner on the felucca was magic. Our guide Ahmed knew exactly where to take photos away from the crowds. Highly recommend Rhala!",
        date: "Reviewed 2 days ago",
        rating: 5
    },
    {
        id: 2,
        user: "Javier M. (Spain)",
        title: "Safety & Adrenaline",
        body: "I was nervous about the Paragliding over the Pyramids, but the team made me feel 100% safe. The view is insane. If you want real adventure in Egypt, this is the agency to use.",
        date: "Reviewed 1 week ago",
        rating: 5
    },
    {
        id: 3,
        user: "Elena R. (Italy)",
        title: "Deep knowledge, not just a tour",
        body: "I've been to Egypt twice, but this time was different. The detailed history of the Baron Palace and the hidden spots in Old Cairo were amazing. No tourist traps, just real culture.",
        date: "Reviewed 3 weeks ago",
        rating: 5
    }
];

export default function TripAdvisorReviews() {
    return (
        <section className="bg-[#F2F2F2] py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-navy mb-4 font-sans">TripAdvisor</h2>
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-navy">Excellent</span>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-6 h-6 rounded-full bg-[#00AA6C] border-2 border-[#00AA6C]"></div>
                                ))}
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">Based on 142 reviews</p>
                    </div>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {REVIEWS.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-lg shadow-sm relative flex flex-col h-full"
                        >
                            {/* Badge */}
                            <div className="absolute top-4 right-4 bg-[#FFEB3B] text-[10px] font-bold px-2 py-1 rounded border border-[#FBC02D] flex items-center gap-1">
                                <Award size={12} className="text-navy" />
                                Travelers' Choice 2026
                            </div>

                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <div key={i} className="w-4 h-4 rounded-full bg-[#00AA6C]"></div>
                                ))}
                            </div>

                            <h3 className="font-bold text-navy text-lg mb-2 line-clamp-1">{review.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                                "{review.body}"
                            </p>

                            <div className="mt-auto pt-4 border-t border-gray-100 text-xs text-gray-500 flex justify-between items-center">
                                <span className="font-bold text-navy">{review.user}</span>
                                <span>{review.date}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Action */}
                <div className="text-center mt-12">
                    <button className="bg-white text-navy border border-navy px-8 py-3 rounded-full font-bold hover:bg-navy hover:text-white transition-colors flex items-center mx-auto gap-2">
                        Read More Reviews on TripAdvisor
                        <ExternalLink size={16} />
                    </button>
                </div>

            </div>
        </section>
    );
}
