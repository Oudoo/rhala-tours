'use client';

import { useState } from 'react';
import { useBooking } from '@/context/BookingContext';
import { CheckCircle, Loader2, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookingFormProps {
    /** Which page the form lives on — tracked as the inquiry source */
    sourcePage?: string;
    /** 'sidebar' = compact for sticky sidebar | 'full' = wider for contact page */
    variant?: 'sidebar' | 'full';
}

export default function BookingForm({
    sourcePage = 'Unknown',
    variant = 'full',
}: BookingFormProps) {
    const { addInquiry } = useBooking();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Form state
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isWhatsApp, setIsWhatsApp] = useState(false);
    const [country, setCountry] = useState('');
    const [arrivalDate, setArrivalDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [extraInfo, setExtraInfo] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Small delay to show spinner
        await new Promise((r) => setTimeout(r, 800));

        addInquiry({
            fullName,
            email,
            phone,
            isWhatsApp,
            country,
            arrivalDate,
            adults,
            children,
            extraInfo,
            sourcePage,
        });

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const resetForm = () => {
        setFullName('');
        setEmail('');
        setPhone('');
        setIsWhatsApp(false);
        setCountry('');
        setArrivalDate('');
        setAdults(1);
        setChildren(0);
        setExtraInfo('');
        setIsSubmitted(false);
    };

    const isSidebar = variant === 'sidebar';

    const inputClasses =
        'w-full px-4 py-3 bg-cream/30 border border-navy/10 rounded-xl focus:ring-2 focus:ring-gold/50 outline-none transition-all text-navy placeholder:text-navy/30';

    return (
        <div
            className={`bg-white rounded-3xl shadow-xl border border-navy/5 ${
                isSidebar
                    ? 'p-6 max-h-[calc(100vh-8rem)] overflow-y-auto overflow-x-hidden'
                    : 'p-8 md:p-12 overflow-hidden'
            }`}
        >
            <AnimatePresence mode="wait">
                {isSubmitted ? (
                    /* ───── Success State ───── */
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="py-16 text-center"
                    >
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle size={40} className="text-green-600" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                            Thank You!
                        </h2>
                        <p className="text-navy/60 mb-8 max-w-sm mx-auto leading-relaxed">
                            Your inquiry has been received. Our travel experts
                            will contact you shortly.
                        </p>
                        <button
                            onClick={resetForm}
                            className="text-gold font-bold hover:underline"
                        >
                            Submit another inquiry
                        </button>
                    </motion.div>
                ) : (
                    /* ───── Form ───── */
                    <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >
                        {/* Headline */}
                        <div className="text-center mb-6">
                            <div className="inline-flex items-center gap-1.5 text-gold text-xs uppercase tracking-[0.2em] font-bold mb-3">
                                <Sparkles size={14} />
                                <span>Special Offer</span>
                            </div>
                            <h3
                                className={`font-bold text-navy leading-tight ${
                                    isSidebar
                                        ? 'text-xl'
                                        : 'text-2xl md:text-3xl'
                                }`}
                            >
                                And Enjoy Your Vacation
                                <br />
                                <span className="text-gold">
                                    At The Offer Price!
                                </span>
                            </h3>
                        </div>

                        {/* Full Name */}
                        <div>
                            <label className="block text-xs font-bold text-navy mb-1.5 uppercase tracking-wider">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                required
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className={inputClasses}
                                placeholder="John Doe"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-xs font-bold text-navy mb-1.5 uppercase tracking-wider">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={inputClasses}
                                placeholder="john@example.com"
                            />
                        </div>

                        {/* Phone + WhatsApp */}
                        <div>
                            <label className="block text-xs font-bold text-navy mb-1.5 uppercase tracking-wider">
                                Phone <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className={inputClasses}
                                placeholder="+1 (234) 567-890"
                            />
                            <label className="flex items-center gap-2 mt-2 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={isWhatsApp}
                                    onChange={(e) =>
                                        setIsWhatsApp(e.target.checked)
                                    }
                                    className="w-4 h-4 rounded border-navy/20 text-gold focus:ring-gold/50 accent-[#C8A55B]"
                                />
                                <span className="text-sm text-navy/60 group-hover:text-navy transition-colors">
                                    This is my preferred WhatsApp number
                                </span>
                            </label>
                        </div>

                        {/* Country */}
                        <div>
                            <label className="block text-xs font-bold text-navy mb-1.5 uppercase tracking-wider">
                                Country <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                required
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                className={inputClasses}
                                placeholder="United States"
                            />
                        </div>

                        {/* Arrival Date */}
                        <div>
                            <label className="block text-xs font-bold text-navy mb-1.5 uppercase tracking-wider">
                                Arrival Date
                            </label>
                            <input
                                type="date"
                                value={arrivalDate}
                                onChange={(e) => setArrivalDate(e.target.value)}
                                className={inputClasses}
                            />
                        </div>

                        {/* Adults + Children row */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-navy mb-1.5 uppercase tracking-wider">
                                    Adults{' '}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    required
                                    min={1}
                                    value={adults}
                                    onChange={(e) =>
                                        setAdults(Number(e.target.value))
                                    }
                                    className={inputClasses}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-navy mb-1.5 uppercase tracking-wider">
                                    Children{' '}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    required
                                    min={0}
                                    value={children}
                                    onChange={(e) =>
                                        setChildren(Number(e.target.value))
                                    }
                                    className={inputClasses}
                                />
                            </div>
                        </div>

                        {/* Extra Info */}
                        <div>
                            <label className="block text-xs font-bold text-navy mb-1.5 uppercase tracking-wider">
                                Extra Information
                            </label>
                            <textarea
                                rows={4}
                                value={extraInfo}
                                onChange={(e) => setExtraInfo(e.target.value)}
                                className={`${inputClasses} resize-none`}
                                placeholder="Tell us about your dream trip, any special requirements..."
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gold text-navy py-4 rounded-xl font-bold flex items-center justify-center gap-2.5
                                       hover:bg-navy hover:text-white transition-all transform active:scale-[0.98]
                                       disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-gold/20"
                        >
                            {isSubmitting ? (
                                <Loader2
                                    size={20}
                                    className="animate-spin"
                                />
                            ) : (
                                <>
                                    Get Offer
                                    <Send size={18} />
                                </>
                            )}
                        </button>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
}
