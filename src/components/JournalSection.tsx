'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, PenTool, X, Upload, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { useJournal, Article } from '@/context/JournalContext';

export default function JournalSection() {
    const { articles, addArticle } = useJournal();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        content: '',
        image: ''
    });

    const approvedArticles = articles.filter(a => a.status === 'approved');

    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        addArticle({
            title: formData.title,
            author: formData.author,
            content: formData.content,
            excerpt: formData.content.substring(0, 100) + '...',
            image: formData.image || `https://loremflickr.com/600/400/travel,nature?random=${Date.now()}`
        });

        setIsSubmitting(false);
        setShowSuccess(true);
        setTimeout(() => {
            setShowSuccess(false);
            setIsModalOpen(false);
            setFormData({ title: '', author: '', content: '', image: '' });
        }, 3000);
    };

    return (
        <section className="py-24 bg-cream/50 relative" id="journal">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-gold uppercase tracking-[0.2em] font-bold text-sm block mb-2">Traveler Stories</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-navy">Real Experiences</h2>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-navy text-gold px-6 py-3 rounded-full font-bold flex items-center hover:bg-navy/90 transition-colors"
                    >
                        <PenTool size={18} className="mr-2" />
                        Write an Article
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-navy p-8 rounded-2xl shadow-xl flex flex-col justify-center items-center text-center text-cream md:col-span-3 lg:col-span-1 lg:row-span-1"
                    >
                        <PenTool size={48} className="text-gold mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Share Your Journey</h3>
                        <p className="text-cream/80 mb-8 max-w-sm">
                            Inspire others by sharing your Rhala experience. Your story could be featured here.
                        </p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-gold text-navy px-8 py-3 rounded-full font-bold hover:bg-gold/90 transition-colors w-full sm:w-auto"
                        >
                            Start Writing
                        </button>
                    </motion.div>

                    {approvedArticles.length === 0 ? (
                        <div className="col-span-1 md:col-span-2 flex items-center justify-center p-12 text-center text-navy/50 italic border-2 border-dashed border-navy/10 rounded-2xl">
                            Be the first to share your journey.
                        </div>
                    ) : (
                        approvedArticles.map((article, index) => (
                            <JournalCard key={article.id} article={article} index={index} />
                        ))
                    )}
                </div>
            </div>

            {/* Submission Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden relative z-10"
                        >
                            {showSuccess ? (
                                <div className="p-16 flex flex-col items-center text-center">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle size={40} className="text-green-600" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-navy mb-4">Story Submitted!</h3>
                                    <p className="text-gray-500 max-w-md">
                                        Thank you for sharing your experience. Your story is pending review and will appear in the feed once approved.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col h-full max-h-[90vh]">
                                    <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-cream/30">
                                        <h3 className="text-xl font-bold text-navy">Share Your Story</h3>
                                        <button
                                            type="button"
                                            onClick={() => setIsModalOpen(false)}
                                            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>

                                    <div className="p-8 overflow-y-auto space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-bold text-navy mb-2">Your Name</label>
                                                <input
                                                    type="text"
                                                    name="author"
                                                    required
                                                    value={formData.author}
                                                    onChange={handleInput}
                                                    className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all"
                                                    placeholder="Jane Doe"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-navy mb-2">Destination / Topic</label>
                                                <input
                                                    type="text"
                                                    required
                                                    className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all"
                                                    placeholder="e.g. Siwa Oasis"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-navy mb-2">Story Title</label>
                                            <input
                                                type="text"
                                                name="title"
                                                required
                                                value={formData.title}
                                                onChange={handleInput}
                                                className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all"
                                                placeholder="My Unforgettable Sunset in..."
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-navy mb-2">Your Story</label>
                                            <textarea
                                                name="content"
                                                required
                                                value={formData.content}
                                                onChange={handleInput}
                                                rows={6}
                                                className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all resize-none"
                                                placeholder="Tell us about your experience..."
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-navy mb-2">Cover Image URL (Optional)</label>
                                            <div className="flex gap-2">
                                                <input
                                                    type="url"
                                                    name="image"
                                                    value={formData.image}
                                                    onChange={handleInput}
                                                    className="flex-1 p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all"
                                                    placeholder="https://..."
                                                />
                                                <div className="flex items-center justify-center w-12 bg-gray-100 rounded-lg text-gray-400">
                                                    <Upload size={20} />
                                                </div>
                                            </div>
                                            <p className="text-xs text-gray-400 mt-1">Leave empty for a random placeholder.</p>
                                        </div>
                                    </div>

                                    <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
                                        <button
                                            type="button"
                                            onClick={() => setIsModalOpen(false)}
                                            className="px-6 py-3 rounded-lg font-bold text-navy hover:bg-gray-200 transition-colors"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="px-8 py-3 rounded-lg bg-gold text-navy font-bold hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <span className="w-4 h-4 border-2 border-navy/30 border-t-navy rounded-full animate-spin mr-2" />
                                                    Submitting...
                                                </>
                                            ) : 'Submit Story'}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}

function JournalCard({ article, index }: { article: Article, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group h-full flex flex-col"
        >
            <div className="relative h-48 overflow-hidden shrink-0">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Wave Divider */}
                <div className="absolute -bottom-1 left-0 right-0 h-6 z-10 w-full">
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
            </div>
            <div className="p-8 flex flex-col flex-1">
                <div className="text-xs font-bold text-sage mb-2 uppercase tracking-wider">{article.date}</div>
                <h3 className="text-xl font-bold text-navy mb-3 line-clamp-2">
                    {article.title}
                </h3>
                <p className="text-navy/60 text-sm leading-relaxed mb-6 line-clamp-3">
                    {article.excerpt}
                </p>

                <div className="mt-auto flex items-center justify-between">
                    <span className="text-xs text-navy/40 font-bold">By {article.author}</span>
                    <button className="text-sage font-bold text-sm flex items-center group/btn hover:text-navy transition-colors">
                        Read Story
                        <ArrowRight size={16} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
