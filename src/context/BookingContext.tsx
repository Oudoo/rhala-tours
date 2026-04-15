'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export interface BookingInquiry {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    isWhatsApp: boolean;
    country: string;
    arrivalDate: string;
    adults: number;
    children: number;
    extraInfo: string;
    sourcePage: string;
    createdAt: string;
    status: 'new' | 'contacted' | 'archived';
}

interface BookingContextType {
    inquiries: BookingInquiry[];
    addInquiry: (inquiry: Omit<BookingInquiry, 'id' | 'createdAt' | 'status'>) => void;
    updateStatus: (id: string, status: BookingInquiry['status']) => void;
    deleteInquiry: (id: string) => void;
}

const STORAGE_KEY = 'rhala_booking_inquiries';

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
    const [inquiries, setInquiries] = useState<BookingInquiry[]>([]);
    const [mounted, setMounted] = useState(false);

    // Load from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                setInquiries(JSON.parse(saved));
            } catch {
                // corrupted data — start fresh
                setInquiries([]);
            }
        }
        setMounted(true);
    }, []);

    // Persist to localStorage whenever inquiries change
    useEffect(() => {
        if (mounted) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(inquiries));
        }
    }, [inquiries, mounted]);

    const addInquiry = useCallback(
        (data: Omit<BookingInquiry, 'id' | 'createdAt' | 'status'>) => {
            const inquiry: BookingInquiry = {
                ...data,
                id: Date.now().toString(),
                createdAt: new Date().toISOString(),
                status: 'new',
            };
            setInquiries((prev) => [inquiry, ...prev]);
        },
        []
    );

    const updateStatus = useCallback(
        (id: string, status: BookingInquiry['status']) => {
            setInquiries((prev) =>
                prev.map((inq) => (inq.id === id ? { ...inq, status } : inq))
            );
        },
        []
    );

    const deleteInquiry = useCallback((id: string) => {
        setInquiries((prev) => prev.filter((inq) => inq.id !== id));
    }, []);

    return (
        <BookingContext.Provider value={{ inquiries, addInquiry, updateStatus, deleteInquiry }}>
            {children}
        </BookingContext.Provider>
    );
}

export function useBooking() {
    const context = useContext(BookingContext);
    if (context === undefined) {
        throw new Error('useBooking must be used within a BookingProvider');
    }
    return context;
}
