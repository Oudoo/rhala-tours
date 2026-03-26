'use client';

import { useState, useEffect } from 'react';
import { useJournal, Article } from '@/context/JournalContext';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Check, X, Clock, Trash2, Globe } from 'lucide-react';

export default function AdminPage() {
    const { articles, approveArticle, rejectArticle, deleteArticle } = useJournal();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [activeTab, setActiveTab] = useState<'pending' | 'published'>('pending');
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

    // Simple client-side auth
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'Rhala2026') {
            setIsAuthenticated(true);
            localStorage.setItem('rhala_admin_auth', 'true');
        } else {
            alert('Incorrect Password');
        }
    };

    // Check auth on mount
    useEffect(() => {
        const auth = localStorage.getItem('rhala_admin_auth');
        if (auth === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    const pendingArticles = articles.filter(a => a.status === 'pending');
    const publishedArticles = articles.filter(a => a.status === 'approved');

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-cream">
                <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
                    <h1 className="text-2xl font-bold text-navy mb-6 text-center">Rhala Staff Login</h1>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Staff Password"
                        className="w-full p-4 rounded-lg border border-gray-200 mb-4 focus:outline-none focus:ring-2 focus:ring-gold/50"
                    />
                    <button
                        type="submit"
                        className="w-full bg-navy text-gold py-4 rounded-lg font-bold hover:bg-navy/90 transition-colors"
                    >
                        Access Dashboard
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row pt-24">
            {/* Sidebar */}
            <aside className="w-full md:w-64 bg-navy text-cream p-6 flex-shrink-0">
                <h2 className="text-xl font-bold mb-8 tracking-wider">RHALA ADMIN</h2>
                <nav className="space-y-2">
                    <button
                        onClick={() => { setActiveTab('pending'); setSelectedArticle(null); }}
                        className={`w-full text-left p-3 rounded-lg flex justify-between items-center transition-colors ${activeTab === 'pending' ? 'bg-white/10 text-gold' : 'hover:bg-white/5'}`}
                    >
                        <span>Pending Reviews</span>
                        {pendingArticles.length > 0 && (
                            <span className="bg-gold text-navy text-xs font-bold px-2 py-1 rounded-full">{pendingArticles.length}</span>
                        )}
                    </button>
                    <button
                        onClick={() => { setActiveTab('published'); setSelectedArticle(null); }}
                        className={`w-full text-left p-3 rounded-lg flex justify-between items-center transition-colors ${activeTab === 'published' ? 'bg-white/10 text-gold' : 'hover:bg-white/5'}`}
                    >
                        <span>Published Stories</span>
                        <span className="text-xs opacity-50">{publishedArticles.length}</span>
                    </button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 md:p-12 overflow-y-auto h-[calc(100vh-6rem)]">
                <div className="max-w-5xl mx-auto">
                    <header className="mb-8">
                        <h1 className="text-3xl font-bold text-navy">
                            {activeTab === 'pending' ? 'Pending Reviews' : 'Published Stories'}
                        </h1>
                        <p className="text-gray-500 mt-2">
                            {activeTab === 'pending'
                                ? 'Review and approve traveler stories.'
                                : 'Manage stories currently live on the site.'}
                        </p>
                    </header>

                    {selectedArticle ? (
                        // Article Review View
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-2xl shadow-sm overflow-hidden"
                        >
                            <div className="relative h-64 w-full">
                                <Image
                                    src={selectedArticle.image}
                                    alt={selectedArticle.title}
                                    fill
                                    className="object-cover"
                                />
                                <button
                                    onClick={() => setSelectedArticle(null)}
                                    className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white text-navy"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                    <span className="flex items-center"><Clock size={16} className="mr-1" /> {selectedArticle.date}</span>
                                    <span className="bg-gray-100 px-2 py-1 rounded">By {selectedArticle.author}</span>
                                </div>
                                <h2 className="text-3xl font-bold text-navy mb-6">{selectedArticle.title}</h2>
                                <div className="prose prose-lg text-gray-700 max-w-none mb-12 whitespace-pre-wrap">
                                    {selectedArticle.content}
                                </div>
                            </div>

                            {/* Sticky Action Bar */}
                            <div className="sticky bottom-0 bg-white border-t border-gray-100 p-6 flex justify-end gap-4">
                                {activeTab === 'pending' ? (
                                    <>
                                        <button
                                            onClick={() => { rejectArticle(selectedArticle.id); setSelectedArticle(null); }}
                                            className="px-6 py-3 rounded-lg border border-red-200 text-red-600 font-bold hover:bg-red-50 flex items-center"
                                        >
                                            <X size={20} className="mr-2" /> Reject
                                        </button>
                                        <button
                                            onClick={() => { approveArticle(selectedArticle.id); setSelectedArticle(null); }}
                                            className="px-8 py-3 rounded-lg bg-green-600 text-white font-bold hover:bg-green-700 flex items-center shadow-lg shadow-green-200"
                                        >
                                            <Check size={20} className="mr-2" /> Approve & Publish
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        onClick={() => { deleteArticle(selectedArticle.id); setSelectedArticle(null); }}
                                        className="px-6 py-3 rounded-lg border border-red-200 text-red-600 font-bold hover:bg-red-50 flex items-center"
                                    >
                                        <Trash2 size={20} className="mr-2" /> Delete Article
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    ) : (
                        // List View
                        <div className="grid gap-4">
                            {(activeTab === 'pending' ? pendingArticles : publishedArticles).length === 0 ? (
                                <div className="text-center py-24 text-gray-400">
                                    <p>No articles found.</p>
                                </div>
                            ) : (
                                (activeTab === 'pending' ? pendingArticles : publishedArticles).map(article => (
                                    <motion.div
                                        key={article.id}
                                        layoutId={article.id}
                                        onClick={() => setSelectedArticle(article)}
                                        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer flex gap-6 items-center border border-transparent hover:border-gold/30"
                                    >
                                        <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                                            <Image src={article.image} alt={article.title} fill className="object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-navy mb-1">{article.title}</h3>
                                            <p className="text-gray-500 text-sm mb-2">By {article.author} • {article.date}</p>
                                            <p className="text-gray-600 line-clamp-2 text-sm">{article.excerpt}</p>
                                        </div>
                                        <div className="text-gray-400">
                                            <ArrowUpRight size={24} />
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

function ArrowUpRight({ size, className }: { size?: number, className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size || 24}
            height={size || 24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
        </svg>
    )
}
