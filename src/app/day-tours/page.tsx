'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import DayTourCard from '@/components/DayTourCard';
import { useTours } from '@/context/ToursContext';

// Quick-nav items shown below the hero
const REGION_NAV = [
  { label: 'Cairo', href: '#cairo-day-tours' },
  { label: 'Alexandria', href: '#alexandria-day-tours' },
  { label: 'Luxor', href: '#luxor-day-tours' },
  { label: 'Aswan', href: '#aswan-day-tours' },
  { label: 'Red Sea & Sinai', href: '#red-sea-sinai-day-tours' },
];

export default function DayToursPage() {
  const { dayTourGroups: DAY_TOUR_GROUPS } = useTours();
  return (
    <div className="min-h-screen bg-cream">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-navy min-h-[65vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/tours-packages/Day-tour-to-Pyramids-768x600.png"
            alt="Egypt Day Tours"
            fill
            className="object-cover opacity-35 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-gold uppercase tracking-[0.2em] font-bold text-sm block mb-4">
            Egypt Day Excursions
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Egypt Day Tours
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Hand-picked private day tours across Egypt — from the pyramids of Cairo to the temples of Luxor, the reefs of the Red Sea, and beyond. All guided, all private, all unforgettable.
          </p>
          <a
            href="#cairo-day-tours"
            className="inline-flex items-center gap-2 bg-gold text-navy px-8 py-4 rounded-full font-bold hover:bg-white transition-colors duration-300"
          >
            Browse Tours
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* ── Region Quick-Nav ──────────────────────────────────── */}
      <nav className="bg-white border-b border-cream sticky top-[72px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
          <ul className="flex gap-1 py-1 whitespace-nowrap">
            {REGION_NAV.map((r) => (
              <li key={r.href}>
                <a
                  href={r.href}
                  className="inline-block px-5 py-3 rounded-full text-sm font-bold text-navy/60 hover:text-navy hover:bg-cream transition-colors"
                >
                  {r.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── Tour Groups ───────────────────────────────────────── */}
      {DAY_TOUR_GROUPS.map((group, gi) => (
        <section
          key={group.id}
          id={group.id}
          className={`py-20 px-6 ${gi % 2 === 1 ? 'bg-white' : 'bg-cream'}`}
        >
          <div className="max-w-7xl mx-auto">

            {/* Section header */}
            <div className="mb-12 max-w-2xl">
              <span className="text-gold uppercase tracking-[0.2em] font-bold text-xs block mb-2">
                Day Excursions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                {group.title}
              </h2>
              <p className="text-navy/60 leading-relaxed">
                {group.description}
              </p>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.tours.map((tour, ti) => (
                <DayTourCard key={tour.slug} tour={tour} index={ti} />
              ))}
            </div>

          </div>
        </section>
      ))}

      {/* ── Bottom CTA ────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-navy text-center">
        <span className="text-gold uppercase tracking-[0.2em] font-bold text-xs block mb-4">
          Can&apos;t Find What You&apos;re Looking For?
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Build Your Perfect Day Tour
        </h2>
        <p className="text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
          Every itinerary is fully customisable. Tell us your interests, your hotel, and your available time — we&apos;ll craft the ideal private day tour just for you.
        </p>
        <a
          href={`https://wa.me/201557469694?text=${encodeURIComponent("Hello, I'd like to build a custom day tour in Egypt.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gold text-navy px-8 py-4 rounded-full font-bold hover:bg-white transition-colors duration-300"
        >
          Chat with Us on WhatsApp
          <ArrowRight size={20} />
        </a>
      </section>

    </div>
  );
}
