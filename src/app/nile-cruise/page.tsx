import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import NileCruiseCard from '@/components/NileCruiseCard';
import { NILE_CRUISE_GROUPS } from '@/data/nileCruiseData';

const CATEGORY_NAV = [
  { label: 'Luxor & Aswan', href: '#luxor-aswan-cruises' },
  { label: 'Lake Nasser', href: '#lake-nasser-cruises' },
  { label: 'Dahabiya', href: '#dahabiya-cruises' },
];

export default function NileCruisePage() {
  return (
    <div className="min-h-screen bg-cream">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-navy min-h-[65vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/tours-packages/nile-cruise-luxor-768x600.png"
            alt="Nile Cruise Egypt"
            fill
            className="object-cover opacity-35 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-gold uppercase tracking-[0.2em] font-bold text-sm block mb-4">
            Sail the World&apos;s Greatest River
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Nile Cruises
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            From the towering temples of Luxor and Aswan to the remote Nubian shores of Lake Nasser and the intimate sailing tradition of the dahabiya — find the perfect Nile cruise for your Egypt journey.
          </p>
          <a
            href="#luxor-aswan-cruises"
            className="inline-flex items-center gap-2 bg-gold text-navy px-8 py-4 rounded-full font-bold hover:bg-white transition-colors duration-300"
          >
            Explore Cruises
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* ── Category Quick-Nav ────────────────────────────────── */}
      <nav className="bg-white border-b border-cream sticky top-[72px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
          <ul className="flex gap-1 py-1 whitespace-nowrap">
            {CATEGORY_NAV.map((c) => (
              <li key={c.href}>
                <a
                  href={c.href}
                  className="inline-block px-5 py-3 rounded-full text-sm font-bold text-navy/60 hover:text-navy hover:bg-cream transition-colors"
                >
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── Cruise Groups ─────────────────────────────────────── */}
      {NILE_CRUISE_GROUPS.map((group, gi) => (
        <section
          key={group.id}
          id={group.id}
          className={`py-20 px-6 ${gi % 2 === 1 ? 'bg-white' : 'bg-cream'}`}
        >
          <div className="max-w-7xl mx-auto">

            {/* Section header */}
            <div className="mb-12 max-w-2xl">
              <span className="text-gold uppercase tracking-[0.2em] font-bold text-xs block mb-2">
                Nile Cruises
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
              {group.cruises.map((cruise, ci) => (
                <NileCruiseCard key={cruise.slug} cruise={cruise} index={ci} />
              ))}
            </div>

          </div>
        </section>
      ))}

      {/* ── Bottom CTA ────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-navy text-center">
        <span className="text-gold uppercase tracking-[0.2em] font-bold text-xs block mb-4">
          Can&apos;t Find the Right Cruise?
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Build Your Custom Nile Cruise
        </h2>
        <p className="text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
          Every cruise can be tailored to your travel dates, cabin preferences, and budget. Tell us what you&apos;re looking for and we&apos;ll design the perfect Nile itinerary for you.
        </p>
        <a
          href={`https://wa.me/201557469694?text=${encodeURIComponent("Hello, I'd like to plan a custom Nile cruise. Please send me more details.")}`}
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
