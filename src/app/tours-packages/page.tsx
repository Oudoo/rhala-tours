'use client';

import ToursExplorer from "@/components/ToursExplorer";
import TourDurationSection from "@/components/TourDurationSection";
import TourCard from "@/components/TourCard";
import { ArrowRight, DollarSign, ShieldCheck, Eye, MessageCircle, Users } from "lucide-react";
import Image from "next/image";
import BookingForm from "@/components/BookingForm";
import { useTours } from "@/context/ToursContext";

const BENEFITS = [
  { icon: DollarSign, title: "Competitive Prices", desc: "Best value without compromising quality" },
  { icon: ShieldCheck, title: "Certified Partners", desc: "Trusted and verified local operators" },
  { icon: Eye, title: "No Hidden Fees", desc: "Transparent pricing on every tour" },
  { icon: MessageCircle, title: "Quick Response", desc: "We reply within hours, not days" },
  { icon: Users, title: "Friendly Tour Guides", desc: "Expert Egyptologists who bring history alive" },
];

export default function ToursPackagesPage() {
  const { durationGroups: DURATION_GROUPS, allTours: ALL_TOURS } = useTours();
  const FEATURED_TOURS = ALL_TOURS.filter((t) => t.isPremium).slice(0, 8);
  return (
    <div className="flex flex-col min-h-screen bg-cream">

      {/* ══════════ Hero Section ══════════ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-navy min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/tours-packages/egypt-Great-Pyramid-768x600.png"
            alt="Egypt Tours"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="text-gold uppercase tracking-[0.2em] font-bold text-sm md:text-base block mb-4">
            Discover Egypt Your Way
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Egypt Tour Packages
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Everything Is Tailored To Your Comfort! From the bustling streets of Cairo to the serene temples of Luxor, explore our carefully curated itineraries.
          </p>
          <a
            href="#explore-tours"
            className="inline-flex items-center gap-2 bg-gold text-navy px-8 py-4 rounded-full font-bold hover:bg-white transition-colors duration-300"
          >
            Explore Tours
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* ══════════ Why Choose Us ══════════ */}
      <section className="py-16 bg-white border-b border-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-gold uppercase tracking-[0.2em] font-bold text-xs block mb-2">
              Why Choose Rhala Tours
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Your Trusted Egypt Travel Partner
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {BENEFITS.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="flex flex-col items-center text-center gap-3 p-4 rounded-2xl bg-cream/50 hover:bg-cream transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <h3 className="font-bold text-navy text-sm">{b.title}</h3>
                  <p className="text-navy/50 text-xs leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="https://wa.me/201000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-sm hover:opacity-90 transition"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
            <a
              href="#tailor-made"
              className="inline-flex items-center gap-2 border-2 border-navy text-navy px-6 py-3 rounded-full font-bold text-sm hover:bg-navy hover:text-cream transition-colors"
            >
              Send an Inquiry
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════ Best Egypt Tour Packages intro ══════════ */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-gold uppercase tracking-[0.2em] font-bold text-xs block mb-4">
            Best Egypt Tour Packages
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8">
            Find Your Perfect Journey
          </h2>
          <p className="text-navy/60 text-lg leading-relaxed mb-4">
            Looking for the best Egypt tour packages? Our expertly crafted itineraries cover every corner of this ancient land — from the Great Pyramids of Giza to the temples of Luxor and the shores of the Red Sea.
          </p>
          <p className="text-navy/60 text-lg leading-relaxed">
            Whether you want a quick 2-day escape or an immersive 12-day odyssey, each package includes comfortable accommodation, knowledgeable guides, reliable transportation, and unforgettable experiences.
          </p>
        </div>
      </section>

      {/* ══════════ Featured Tours (horizontal scroll) ══════════ */}
      <section className="py-16 bg-white border-y border-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-gold uppercase tracking-[0.2em] font-bold text-xs block mb-2">
                Handpicked for You
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">Featured Tours</h2>
            </div>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide -mx-6 px-6 snap-x snap-mandatory">
            {FEATURED_TOURS.map((tour, i) => (
              <div key={tour.title} className="snap-start shrink-0">
                <TourCard tour={tour} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ Tours Explorer Tabs ══════════ */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <span className="text-gold uppercase tracking-[0.2em] font-bold text-xs block mb-2">
              Explore All Egypt Tours
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Browse by Category
            </h2>
          </div>
          <ToursExplorer />
        </div>
      </section>

      {/* ══════════ Tailor-Made Tours ══════════ */}
      <section id="tailor-made" className="py-20 bg-cream text-navy scroll-mt-24 border-y border-navy/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-gold uppercase tracking-[0.2em] font-bold text-xs block mb-4">
            Your Dream Egypt Trip
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8">
            Egypt Tailor Made Tours
          </h2>
          <p className="text-navy/70 text-lg leading-relaxed mb-6">
            As a leading Tour Company in Egypt, Rhala Tours is dedicated to crafting exceptional, tailor-made tours that showcase the best of this ancient, captivating land. Our team of knowledgeable travel experts work closely with each client to design a personalized itinerary that caters to your unique interests and preferences.
          </p>
          <p className="text-navy/70 text-lg leading-relaxed mb-10">
            Whether you&apos;re seeking a deeper connection with Egypt&apos;s rich history and culture, or simply want to immerse yourself in the country&apos;s breathtaking natural beauty, our custom tours are designed to exceed your expectations.
          </p>
          <a
            href="https://wa.me/201000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-navy px-8 py-4 rounded-full font-bold hover:bg-navy hover:text-white transition-colors duration-300"
          >
            Start Planning Your Trip
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* ══════════ Duration-grouped Sections + Booking Sidebar ══════════ */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
          {/* Tour Sections — main column */}
          <div className="flex-1 flex flex-col gap-24 min-w-0">
            {DURATION_GROUPS.map((group, gi) => (
              <TourDurationSection key={group.durationDays} group={group} groupIndex={gi} />
            ))}
          </div>

          {/* Sticky Booking Sidebar — desktop only */}
          <aside className="hidden lg:block w-[380px] shrink-0">
            <div className="sticky top-28">
              <BookingForm sourcePage="Tour Packages" variant="sidebar" />
            </div>
          </aside>
        </div>

        {/* Mobile Booking Form — below duration sections */}
        <div className="lg:hidden max-w-xl mx-auto px-6 mt-16">
          <BookingForm sourcePage="Tour Packages" variant="sidebar" />
        </div>
      </section>

      {/* ══════════ CTA Footer ══════════ */}
      <section className="py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Explore Egypt?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Looking for a custom experience tailored specifically to your needs? Our travel experts are here to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/201000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-navy px-8 py-4 rounded-full font-bold hover:bg-white transition-colors duration-300"
            >
              Contact Our Travel Experts
              <ArrowRight size={20} />
            </a>
            <a
              href="#explore-tours"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:border-gold hover:text-gold transition-colors duration-300"
            >
              Browse Tours
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
