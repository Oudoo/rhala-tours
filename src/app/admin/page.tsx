'use client';

import { useState, useEffect } from 'react';
import { useJournal, Article } from '@/context/JournalContext';
import { useBooking, BookingInquiry } from '@/context/BookingContext';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
    Check,
    X,
    Clock,
    Trash2,
    Phone,
    Mail,
    MapPin,
    Calendar,
    Users,
    MessageSquare,
    Inbox,
} from 'lucide-react';

type AdminTab = 'pending' | 'published' | 'inquiries';

export default function AdminPage() {
    const { articles, approveArticle, rejectArticle, deleteArticle } = useJournal();
    const { inquiries, deleteInquiry, updateStatus } = useBooking();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [activeTab, setActiveTab] = useState<AdminTab>('inquiries');
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
    const [selectedInquiry, setSelectedInquiry] = useState<BookingInquiry | null>(null);

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
                        onClick={() => { setActiveTab('inquiries'); setSelectedArticle(null); setSelectedInquiry(null); }}
                        className={`w-full text-left p-3 rounded-lg flex justify-between items-center transition-colors ${activeTab === 'inquiries' ? 'bg-white/10 text-gold' : 'hover:bg-white/5'}`}
                    >
                        <span className="flex items-center gap-2">
                            <Inbox size={16} />
                            Booking Inquiries
                        </span>
                        {inquiries.length > 0 && (
                            <span className="bg-gold text-navy text-xs font-bold px-2 py-1 rounded-full">{inquiries.length}</span>
                        )}
                    </button>
                    <button
                        onClick={() => { setActiveTab('pending'); setSelectedArticle(null); setSelectedInquiry(null); }}
                        className={`w-full text-left p-3 rounded-lg flex justify-between items-center transition-colors ${activeTab === 'pending' ? 'bg-white/10 text-gold' : 'hover:bg-white/5'}`}
                    >
                        <span>Pending Reviews</span>
                        {pendingArticles.length > 0 && (
                            <span className="bg-gold text-navy text-xs font-bold px-2 py-1 rounded-full">{pendingArticles.length}</span>
                        )}
                    </button>
                    <button
                        onClick={() => { setActiveTab('published'); setSelectedArticle(null); setSelectedInquiry(null); }}
                        className={`w-full text-left p-3 rounded-lg flex justify-between items-center transition-colors ${activeTab === 'published' ? 'bg-white/10 text-gold' : 'hover:bg-white/5'}`}
                    >
                        <span>Published Stories</span>
                        <span className="text-xs opacity-50">{publishedArticles.length}</span>
                    </button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 md:p-12 overflow-y-auto h-[calc(100vh-6rem)]">
                <div className="max-w-6xl mx-auto">
                    {activeTab === 'inquiries' ? (
                        <InquiriesView
                            inquiries={inquiries}
                            selectedInquiry={selectedInquiry}
                            onSelect={setSelectedInquiry}
                            onDelete={deleteInquiry}
                            onUpdateStatus={updateStatus}
                        />
                    ) : (
                        <ArticlesView
                            activeTab={activeTab}
                            pendingArticles={pendingArticles}
                            publishedArticles={publishedArticles}
                            selectedArticle={selectedArticle}
                            onSelect={setSelectedArticle}
                            onApprove={approveArticle}
                            onReject={rejectArticle}
                            onDelete={deleteArticle}
                        />
                    )}
                </div>
            </main>

            {/* Inquiry Detail Modal */}
            <AnimatePresence>
                {selectedInquiry && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6"
                        onClick={() => setSelectedInquiry(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-8">
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <h2 className="text-2xl font-bold text-navy">{selectedInquiry.fullName}</h2>
                                        <p className="text-navy/50 text-sm mt-1">
                                            {new Date(selectedInquiry.createdAt).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setSelectedInquiry(null)}
                                        className="text-navy/40 hover:text-navy p-1"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    <DetailRow icon={Phone} label="Phone" value={selectedInquiry.phone} />
                                    {selectedInquiry.isWhatsApp && (
                                        <div className="flex items-center gap-2 ml-8">
                                            <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">
                                                ✓ WhatsApp Preferred
                                            </span>
                                        </div>
                                    )}
                                    {selectedInquiry.email && (
                                        <DetailRow icon={Mail} label="Email" value={selectedInquiry.email} />
                                    )}
                                    <DetailRow icon={MapPin} label="Country" value={selectedInquiry.country} />
                                    {selectedInquiry.arrivalDate && (
                                        <DetailRow icon={Calendar} label="Arrival" value={selectedInquiry.arrivalDate} />
                                    )}
                                    <DetailRow
                                        icon={Users}
                                        label="Travelers"
                                        value={`${selectedInquiry.adults} Adult${selectedInquiry.adults !== 1 ? 's' : ''}${selectedInquiry.children > 0 ? `, ${selectedInquiry.children} Child${selectedInquiry.children !== 1 ? 'ren' : ''}` : ''}`}
                                    />
                                    <DetailRow icon={MessageSquare} label="Source" value={selectedInquiry.sourcePage} />
                                </div>

                                {selectedInquiry.extraInfo && (
                                    <div className="mt-6 p-4 bg-cream/60 rounded-xl">
                                        <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2">
                                            Extra Information
                                        </h4>
                                        <p className="text-navy/70 text-sm leading-relaxed whitespace-pre-wrap">
                                            {selectedInquiry.extraInfo}
                                        </p>
                                    </div>
                                )}

                                {/* Actions */}
                                <div className="flex gap-3 mt-8 pt-6 border-t border-gray-100">
                                    <select
                                        value={selectedInquiry.status}
                                        onChange={(e) => {
                                            updateStatus(selectedInquiry.id, e.target.value as BookingInquiry['status']);
                                            setSelectedInquiry({ ...selectedInquiry, status: e.target.value as BookingInquiry['status'] });
                                        }}
                                        className="flex-1 px-4 py-2.5 rounded-lg border border-navy/10 text-sm font-medium text-navy focus:outline-none focus:ring-2 focus:ring-gold/50"
                                    >
                                        <option value="new">🟡 New</option>
                                        <option value="contacted">🟢 Contacted</option>
                                        <option value="archived">⚪ Archived</option>
                                    </select>
                                    <button
                                        onClick={() => {
                                            deleteInquiry(selectedInquiry.id);
                                            setSelectedInquiry(null);
                                        }}
                                        className="px-4 py-2.5 rounded-lg border border-red-200 text-red-600 text-sm font-bold hover:bg-red-50 flex items-center gap-1.5"
                                    >
                                        <Trash2 size={14} /> Delete
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// ── Helper Components ────────────────────────────────────────────────────

function DetailRow({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
    return (
        <div className="flex items-center gap-3">
            <Icon size={16} className="text-gold shrink-0" />
            <span className="text-navy/50 text-sm w-20 shrink-0">{label}</span>
            <span className="text-navy font-medium text-sm">{value}</span>
        </div>
    );
}

function StatusBadge({ status }: { status: BookingInquiry['status'] }) {
    const styles = {
        new: 'bg-yellow-100 text-yellow-800',
        contacted: 'bg-green-100 text-green-800',
        archived: 'bg-gray-100 text-gray-600',
    };
    return (
        <span className={`text-xs font-bold px-2 py-1 rounded-full ${styles[status]}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
    );
}

// ── Inquiries View ───────────────────────────────────────────────────────

function InquiriesView({
    inquiries,
    selectedInquiry,
    onSelect,
    onDelete,
    onUpdateStatus,
}: {
    inquiries: BookingInquiry[];
    selectedInquiry: BookingInquiry | null;
    onSelect: (inq: BookingInquiry | null) => void;
    onDelete: (id: string) => void;
    onUpdateStatus: (id: string, status: BookingInquiry['status']) => void;
}) {
    return (
        <>
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-navy">Booking Inquiries</h1>
                <p className="text-gray-500 mt-2">
                    View and manage customer booking requests. ({inquiries.length} total)
                </p>
            </header>

            {inquiries.length === 0 ? (
                <div className="text-center py-24 text-gray-400">
                    <Inbox size={48} className="mx-auto mb-4 opacity-30" />
                    <p className="text-lg">No booking inquiries yet.</p>
                    <p className="text-sm mt-1">Inquiries will appear here when customers submit the booking form.</p>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
                        <thead>
                            <tr className="bg-cream/50 border-b border-navy/5">
                                <th className="text-left px-5 py-4 text-xs font-bold text-navy/60 uppercase tracking-wider">Name</th>
                                <th className="text-left px-5 py-4 text-xs font-bold text-navy/60 uppercase tracking-wider">Phone</th>
                                <th className="text-left px-5 py-4 text-xs font-bold text-navy/60 uppercase tracking-wider hidden md:table-cell">WhatsApp</th>
                                <th className="text-left px-5 py-4 text-xs font-bold text-navy/60 uppercase tracking-wider hidden lg:table-cell">Source</th>
                                <th className="text-left px-5 py-4 text-xs font-bold text-navy/60 uppercase tracking-wider hidden xl:table-cell">Extra Info</th>
                                <th className="text-left px-5 py-4 text-xs font-bold text-navy/60 uppercase tracking-wider">Status</th>
                                <th className="text-right px-5 py-4 text-xs font-bold text-navy/60 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-navy/5">
                            {inquiries.map((inq) => (
                                <tr key={inq.id} className="hover:bg-cream/30 transition-colors">
                                    <td className="px-5 py-4">
                                        <div>
                                            <p className="font-bold text-navy text-sm">{inq.fullName}</p>
                                            <p className="text-navy/40 text-xs mt-0.5">
                                                {new Date(inq.createdAt).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                })}
                                            </p>
                                        </div>
                                    </td>
                                    <td className="px-5 py-4 text-sm text-navy">{inq.phone}</td>
                                    <td className="px-5 py-4 hidden md:table-cell">
                                        {inq.isWhatsApp ? (
                                            <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">Yes</span>
                                        ) : (
                                            <span className="text-navy/30 text-xs">No</span>
                                        )}
                                    </td>
                                    <td className="px-5 py-4 text-sm text-navy/60 hidden lg:table-cell">{inq.sourcePage}</td>
                                    <td className="px-5 py-4 hidden xl:table-cell max-w-[200px]">
                                        {inq.extraInfo ? (
                                            <p className="text-navy/50 text-xs line-clamp-2">{inq.extraInfo}</p>
                                        ) : (
                                            <span className="text-navy/20 text-xs italic">None</span>
                                        )}
                                    </td>
                                    <td className="px-5 py-4">
                                        <StatusBadge status={inq.status} />
                                    </td>
                                    <td className="px-5 py-4 text-right">
                                        <button
                                            onClick={() => onSelect(inq)}
                                            className="text-gold font-bold text-sm hover:underline"
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
}

// ── Articles View (Pending / Published) ──────────────────────────────────

function ArticlesView({
    activeTab,
    pendingArticles,
    publishedArticles,
    selectedArticle,
    onSelect,
    onApprove,
    onReject,
    onDelete,
}: {
    activeTab: 'pending' | 'published';
    pendingArticles: Article[];
    publishedArticles: Article[];
    selectedArticle: Article | null;
    onSelect: (a: Article | null) => void;
    onApprove: (id: string) => void;
    onReject: (id: string) => void;
    onDelete: (id: string) => void;
}) {
    const currentArticles = activeTab === 'pending' ? pendingArticles : publishedArticles;

    return (
        <>
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
                /* Article Review View */
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
                            onClick={() => onSelect(null)}
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
                                    onClick={() => { onReject(selectedArticle.id); onSelect(null); }}
                                    className="px-6 py-3 rounded-lg border border-red-200 text-red-600 font-bold hover:bg-red-50 flex items-center"
                                >
                                    <X size={20} className="mr-2" /> Reject
                                </button>
                                <button
                                    onClick={() => { onApprove(selectedArticle.id); onSelect(null); }}
                                    className="px-8 py-3 rounded-lg bg-green-600 text-white font-bold hover:bg-green-700 flex items-center shadow-lg shadow-green-200"
                                >
                                    <Check size={20} className="mr-2" /> Approve & Publish
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={() => { onDelete(selectedArticle.id); onSelect(null); }}
                                className="px-6 py-3 rounded-lg border border-red-200 text-red-600 font-bold hover:bg-red-50 flex items-center"
                            >
                                <Trash2 size={20} className="mr-2" /> Delete Article
                            </button>
                        )}
                    </div>
                </motion.div>
            ) : (
                /* List View */
                <div className="grid gap-4">
                    {currentArticles.length === 0 ? (
                        <div className="text-center py-24 text-gray-400">
                            <p>No articles found.</p>
                        </div>
                    ) : (
                        currentArticles.map(article => (
                            <motion.div
                                key={article.id}
                                layoutId={article.id}
                                onClick={() => onSelect(article)}
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
        </>
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
