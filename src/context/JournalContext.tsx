'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Article {
    id: string;
    title: string;
    author: string;
    date: string;
    image: string; // URL or placeholder
    content: string;
    excerpt: string;
    status: 'pending' | 'approved' | 'rejected';
}

interface JournalContextType {
    articles: Article[];
    addArticle: (article: Omit<Article, 'id' | 'date' | 'status'>) => void;
    approveArticle: (id: string) => void;
    rejectArticle: (id: string) => void;
    deleteArticle: (id: string) => void;
}

const JournalContext = createContext<JournalContextType | undefined>(undefined);

export function JournalProvider({ children }: { children: React.ReactNode }) {
    const [articles, setArticles] = useState<Article[]>([]);

    // Load from LocalStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('rhala_journal_articles');
        if (saved) {
            setArticles(JSON.parse(saved));
        } else {
            // Initial seed data if empty
            setArticles([
                {
                    id: '1',
                    title: "Best Time to Visit Egypt (2026 Guide)",
                    author: "Sarah Jenkins",
                    date: "October 12, 2025",
                    image: "https://loremflickr.com/600/400/egypt,luxor,temple?lock=40",
                    content: "Full content here...",
                    excerpt: "From the cool winter breezes of Luxor to the summer heat of Aswan. Find out when to book your trip based on weather and crowds.",
                    status: 'approved'
                },
                {
                    id: '2',
                    title: "Red Sea Snorkeling: A Beginner's Guide",
                    author: "Mike Waters",
                    date: "November 5, 2025",
                    image: "https://loremflickr.com/600/400/redsea,underwater,coral?lock=41",
                    content: "Full content here...",
                    excerpt: "Discover the hidden reefs of Hurghada. What to pack, where to go, and why the Red Sea is a diver's paradise.",
                    status: 'approved'
                },
                {
                    id: '3',
                    title: "Cairo Tour Operators: How to Choose",
                    author: "Amira Sayed",
                    date: "December 1, 2025",
                    image: "https://loremflickr.com/600/400/cairo,museum,guide?lock=42",
                    content: "Full content here...",
                    excerpt: "Not all tours are created equal. Here is what to look for in a guide, a vehicle, and an itinerary to ensure a safe and memorable trip.",
                    status: 'approved'
                }
            ]);
        }
    }, []);

    // Save to LocalStorage whenever articles change
    useEffect(() => {
        if (articles.length > 0) {
            localStorage.setItem('rhala_journal_articles', JSON.stringify(articles));
        }
    }, [articles]);

    const addArticle = (newArticle: Omit<Article, 'id' | 'date' | 'status'>) => {
        const article: Article = {
            ...newArticle,
            id: Date.now().toString(),
            date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            status: 'pending'
        };
        setArticles(prev => [article, ...prev]);
    };

    const approveArticle = (id: string) => {
        setArticles(prev => prev.map(a => a.id === id ? { ...a, status: 'approved' } : a));
    };

    const rejectArticle = (id: string) => {
        setArticles(prev => prev.map(a => a.id === id ? { ...a, status: 'rejected' } : a));
    };

    const deleteArticle = (id: string) => {
        setArticles(prev => prev.filter(a => a.id !== id));
    };

    return (
        <JournalContext.Provider value={{ articles, addArticle, approveArticle, rejectArticle, deleteArticle }}>
            {children}
        </JournalContext.Provider>
    );
}

export function useJournal() {
    const context = useContext(JournalContext);
    if (context === undefined) {
        throw new Error('useJournal must be used within a JournalProvider');
    }
    return context;
}
