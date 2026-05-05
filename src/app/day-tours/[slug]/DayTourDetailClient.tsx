'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle,
  XCircle,
  Clock,
  MapPin,
  Calendar,
  Globe,
  Star,
  ArrowLeft,
  MessageCircle,
  ChevronRight,
} from 'lucide-react';
import { useTours } from '@/context/ToursContext';
import { DayTour } from '@/data/dayToursData';

const WHATSAPP_NUMBER = '201557469694';

export default function DayTourDetailClient({ slug, fallbackTour }: { slug: string; fallbackTour: DayTour }) {
  // Prefer context data (CMS-editable) over the static fallback
  const { getDayTourBySlug } = useTours();
  const tour = getDayTourBySlug(slug) ?? fallbackTour;

  const whatsappMessage = encodeURIComponent(
    `Hello, I am interested in the "${tour.title}" day tour. Please send me more details.`
  );
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;
  const displayPrice = tour.pricingOptions?.[0]?.price ?? tour.price;

  return (
    <div className="min-h-screen bg-cream">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[480px] flex items-end">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />

        <Link
          href="/day-tours"
          className="absolute top-28 left-6 md:left-12 z-10 flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors"
        >
          <ArrowLeft size={16} />
          All Day Tours
        </Link>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gold text-navy px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {tour.category}
            </span>
            {tour.tags.map((tag) => (
              <span
                key={tag}
                className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
            <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Clock size={12} />
              {tour.duration}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-3 max-w-3xl">
            {tour.title}
          </h1>
          <p className="text-white/75 text-lg md:text-xl max-w-2xl leading-relaxed mb-5">
            {tour.subtitle}
          </p>

          {tour.reviews && (
            <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
              <Star size={16} className="text-gold fill-gold" />
              <span className="font-bold text-white">{tour.reviews.rating}</span>
              <span>({tour.reviews.count} verified reviews)</span>
            </div>
          )}
        </div>
      </section>

      {/* ── Body ──────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* ── Main column ─────────────────────────────────── */}
          <div className="flex-1 min-w-0 space-y-16">

            {/* Overview */}
            <section>
              <SectionLabel>Tour Overview</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-5">
                About This Experience
              </h2>
              <p className="text-navy/75 leading-relaxed text-lg">
                {tour.overview}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <InfoPill icon={<MapPin size={20} className="text-gold" />} label="Pickup" value={tour.pickupLocation} sub={tour.pickupTime} />
                <InfoPill icon={<Calendar size={20} className="text-gold" />} label="Availability" value={tour.availability} sub={`Guides: ${tour.guideLanguages.join(', ')}`} />
              </div>
            </section>

            {/* Highlights */}
            {tour.highlights.length > 0 && (
              <section>
                <SectionLabel>Highlights</SectionLabel>
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
                  What Makes This Tour Special
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {tour.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-navy/5">
                      <ChevronRight size={18} className="text-gold shrink-0 mt-0.5" />
                      <span className="text-navy/80 text-sm leading-snug">{h}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Itinerary */}
            <section>
              <SectionLabel>Itinerary</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">
                Step-by-Step Tour Flow
              </h2>

              <div className="space-y-0">
                {tour.itinerary.map((stop, i) => (
                  <div key={stop.stop} className="flex gap-5 group">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-11 h-11 rounded-full bg-navy text-gold font-bold flex items-center justify-center text-sm group-hover:bg-gold group-hover:text-navy transition-colors shadow-sm">
                        {stop.stop}
                      </div>
                      {i < tour.itinerary.length - 1 && (
                        <div className="w-0.5 flex-1 bg-navy/10 my-2" />
                      )}
                    </div>
                    <div className="pb-8 pt-1 min-w-0">
                      <h3 className="text-lg font-bold text-navy mb-2">{stop.title}</h3>
                      <p className="text-navy/65 leading-relaxed text-sm md:text-base">
                        {stop.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <section>
              <SectionLabel>What&apos;s Included</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">
                Inclusions &amp; Exclusions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-navy/5">
                  <h3 className="flex items-center gap-2 text-base font-bold text-navy mb-4">
                    <CheckCircle size={20} className="text-emerald-500" />
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-3">
                    {tour.included.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-navy/80">
                        <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-navy/5">
                  <h3 className="flex items-center gap-2 text-base font-bold text-navy mb-4">
                    <XCircle size={20} className="text-red-400" />
                    Not Included
                  </h3>
                  <ul className="space-y-3">
                    {tour.excluded.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-navy/80">
                        <XCircle size={15} className="text-red-400 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Important notes */}
            {tour.importantNotes.length > 0 && (
              <section>
                <SectionLabel>Good to Know</SectionLabel>
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
                  Important Information
                </h2>
                <ul className="bg-white rounded-2xl p-6 shadow-sm border border-navy/5 space-y-3">
                  {tour.importantNotes.map((note, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-navy/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                      {note}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-navy/50 border-l-4 border-gold pl-4 py-1">
                  {tour.cancellationPolicy}
                </p>
              </section>
            )}

          </div>

          {/* ── Sticky sidebar ──────────────────────────────── */}
          <aside className="w-full lg:w-80 shrink-0">
            <div className="lg:sticky lg:top-32 space-y-5">

              <div className="bg-navy rounded-3xl p-7 text-cream shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />

                <p className="text-white/60 text-xs uppercase tracking-widest font-bold mb-1 relative">
                  Starting from
                </p>
                <p className="text-4xl font-bold text-white mb-6 relative">
                  ${displayPrice}
                  <span className="text-sm font-normal text-white/50 ml-1">/ person</span>
                </p>

                <div className="bg-white/5 rounded-xl p-4 mb-6 space-y-3 text-sm border border-white/10 relative">
                  <SpecRow icon={<Clock size={15} />} label="Duration" value={tour.duration} />
                  <SpecRow icon={<MapPin size={15} />} label="Pickup" value={tour.pickupLocation} />
                  <SpecRow icon={<Calendar size={15} />} label="Availability" value={tour.availability} />
                  <SpecRow icon={<Globe size={15} />} label="Languages" value={tour.guideLanguages.slice(0, 3).join(', ')} />
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-4 rounded-xl font-bold text-base hover:bg-[#20bd5a] transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-200"
                >
                  <MessageCircle size={20} />
                  Book on WhatsApp
                </a>
                <p className="text-center text-white/40 text-xs mt-3 relative">
                  Free cancellation · Instant reply
                </p>
              </div>

              {tour.pricingOptions.length > 0 && (
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-navy/5">
                  <h4 className="font-bold text-navy text-sm uppercase tracking-wider mb-4">
                    Pricing Breakdown
                  </h4>
                  <div className="space-y-3">
                    {tour.pricingOptions.map((opt, i) => (
                      <div key={i} className="flex justify-between items-start">
                        <div>
                          <p className="text-sm font-bold text-navy">{opt.title}</p>
                          <p className="text-xs text-navy/50">{opt.description}</p>
                        </div>
                        <span className="text-gold font-bold text-lg shrink-0 ml-3">
                          ${opt.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-navy/5">
                <ul className="space-y-4">
                  {[
                    { icon: <CheckCircle size={18} className="text-gold" />, text: 'No hidden fees — transparent pricing' },
                    { icon: <Calendar size={18} className="text-gold" />, text: 'Free cancellation up to 48 hrs' },
                    { icon: <MapPin size={18} className="text-gold" />, text: 'Door-to-door hotel pickup' },
                    { icon: <Globe size={18} className="text-gold" />, text: 'Certified Egyptologist guides' },
                  ].map((b, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-navy/80">
                      {b.icon}
                      {b.text}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </aside>

        </div>
      </div>

      {/* ── Floating mobile WhatsApp bar ─────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-navy/10 p-4 flex items-center gap-4">
        <div className="flex-1">
          <p className="text-xs text-navy/50 font-bold uppercase tracking-wider">From</p>
          <p className="text-2xl font-bold text-navy">${displayPrice}<span className="text-sm font-normal text-navy/50"> / person</span></p>
        </div>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#20bd5a] transition-colors shadow-md"
        >
          <MessageCircle size={18} />
          Book Now
        </a>
      </div>

    </div>
  );
}

// ── Small helper sub-components ───────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-gold uppercase tracking-[0.2em] font-bold text-xs block mb-2">
      {children}
    </span>
  );
}

function InfoPill({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-navy/5">
      <div className="shrink-0 mt-0.5">{icon}</div>
      <div>
        <p className="text-xs font-bold text-navy/50 uppercase tracking-wider mb-0.5">{label}</p>
        <p className="text-sm font-bold text-navy">{value}</p>
        {sub && <p className="text-xs text-navy/50 mt-0.5">{sub}</p>}
      </div>
    </div>
  );
}

function SpecRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div className="flex items-center gap-2 text-white/50 shrink-0">
        {icon}
        <span>{label}</span>
      </div>
      <span className="text-white font-bold text-right text-xs">{value}</span>
    </div>
  );
}
