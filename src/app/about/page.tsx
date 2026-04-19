'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Car,
  Compass,
  Hotel,
  Eye,
  Tent,
  Heart,
  ArrowRight,
  Globe,
} from 'lucide-react';

// ── Services grid data ───────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: Car,
    title: 'Private Transportation & Domestic Flights',
    description:
      'Comfortable, air-conditioned transfers and seamless internal flights across Egypt.',
  },
  {
    icon: Compass,
    title: 'Expert Tour Guidance',
    description:
      'Licensed Egyptologists and local specialists who bring history to life.',
  },
  {
    icon: Hotel,
    title: 'Premium Accommodation & Nile Cruises',
    description:
      'Hand-picked hotels, boutique riads and luxury floating stays on the Nile.',
  },
  {
    icon: Eye,
    title: 'Sightseeing & Activities',
    description:
      'From sunrise balloon rides to ancient temple explorations — every day is an adventure.',
  },
  {
    icon: Tent,
    title: 'Desert Camping & Coastal Trips',
    description:
      'Sleep under Saharan stars or dive the Red Sea coral reefs with expert guides.',
  },
  {
    icon: Heart,
    title: 'Honeymoon Vacations',
    description:
      'Romantic, bespoke itineraries crafted for once-in-a-lifetime celebrations.',
  },
];

// ── Animation helpers ────────────────────────────────────────────────────────

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: EASE },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

// ══════════════════════════════════════════════════════════════════════════════
// About Page
// ══════════════════════════════════════════════════════════════════════════════

export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen pt-20">
      {/* ════════════ 1. HERO (clean cream background) ════════════ */}
      <section className="bg-cream py-24 md:py-32 flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-6"
          >
            <span className="inline-block text-gold tracking-[0.3em] uppercase font-bold text-xs mb-0">
              Since 2010
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-navy mb-8 leading-[1.1] tracking-tight"
          >
            See Egypt not as a visitor,
            <br />
            <span className="text-gold italic">but as a guest.</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-lg md:text-xl text-navy/70 leading-relaxed max-w-2xl mx-auto font-light"
          >
            We don&apos;t just guide tours — we create meaningful experiences
            that connect you to the soul of Egypt.
          </motion.p>
        </div>
      </section>

      {/* ════════════ 2. THE STORY (Split-Screen) ════════════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="text-gold uppercase tracking-[0.25em] font-bold text-xs block mb-4"
            >
              Our Story
            </motion.span>

            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight"
            >
              Designed by Nature,
              <br />
              Culture, and{' '}
              <span className="text-gold italic">Storytelling.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-navy/75 text-lg leading-relaxed mb-6"
            >
              At Rhala Tours Egypt, we believe that travel is more than visiting
              landmarks — it&apos;s about experiencing a place through the eyes of
              the locals, as they live it. Founded in the heart of downtown Cairo
              by two architects and friends, Rhala Tours was created to offer a
              different perspective for a vacation. Our background in
              architecture shapes how we see the world — not just as
              destinations, but as living spaces filled with history, character,
              and human connection.
            </motion.p>

            <motion.p
              variants={fadeUp}
              custom={3}
              className="text-navy/75 text-lg leading-relaxed"
            >
              While the iconic sites are undeniably breathtaking, we go beyond
              the expected. We invite you to explore hidden streets, discover
              everyday rituals, meet local artisans, taste authentic flavors, and
              experience the rhythm of life as it naturally unfolds. We design
              each journey to feel personal, immersive, and real — far from the
              typical tourist path.
            </motion.p>

            {/* Decorative line */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="mt-10 flex items-center gap-3"
            >
              <div className="w-12 h-[2px] bg-gold" />
              <span className="text-gold text-sm font-semibold tracking-wider uppercase">
                Founded in Cairo
              </span>
            </motion.div>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/tours-packages/Karnak-Temple-in-egypt-768x600.png"
                alt="Egyptian architecture and local culture"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-6 bg-navy text-white p-6 rounded-2xl shadow-xl max-w-[200px]">
              <p className="text-3xl font-bold text-gold mb-1">15+</p>
              <p className="text-sm text-white/80 leading-snug">
                Years crafting authentic Egyptian journeys
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════ 3. SERVICES (Icon Grid) ════════════ */}
      <section className="py-24 md:py-32 bg-[#EDE7D5]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="text-gold uppercase tracking-[0.25em] font-bold text-xs block mb-4"
            >
              What We Offer
            </motion.span>

            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl md:text-5xl font-bold text-navy mb-6 leading-tight"
            >
              Seamless, Tailormade
              <br />
              <span className="text-gold">Egyptian Journeys.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-navy/70 text-lg leading-relaxed"
            >
              We are a premier inbound travel agency specializing in fully
              customized Egypt vacations. From the moment your feet touch
              Egyptian soil until your departure flight, we take care of
              absolutely everything.
            </motion.p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={fadeUp}
                  custom={idx}
                  className="group bg-white/60 backdrop-blur-sm p-8 rounded-2xl
                             border border-navy/5 hover:border-gold/30
                             hover:shadow-lg hover:-translate-y-1
                             transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                    <Icon size={26} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-navy font-bold text-lg mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-navy/60 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════ 4. CTA BANNER — 100% Private ════════════ */}
      <section className="py-28 md:py-36 bg-[#EDE7D5]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="inline-block text-gold uppercase tracking-[0.3em] font-bold text-xs mb-6"
            >
              Tailormade for You
            </motion.span>

            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-6xl font-bold text-navy mb-6 leading-tight"
            >
              100% Private.{' '}
              <span className="text-gold italic">100% Yours.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-navy/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Whether you have a few hours to spare on a layover or two months
              to explore every corner of Egypt, we craft a plan specifically for
              your needs. Every itinerary is tailormade.
            </motion.p>

            {/* Spanish-speaking badge */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="inline-flex items-center gap-2.5 bg-navy/5
                         border border-navy/10 rounded-full px-5 py-2.5 mb-10"
            >
              <Globe size={16} className="text-gold" />
              <span className="text-navy/80 text-sm font-medium">
                Proudly catering to our Spanish-speaking guests from across the
                globe.{' '}
                <span className="text-gold font-bold">¡Hablamos Español!</span>
              </span>
            </motion.div>

            <motion.div variants={fadeUp} custom={4}>
              <a
                href="https://wa.me/+201557469694"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gold text-navy
                           px-10 py-4 rounded-full font-bold text-lg
                           hover:bg-navy hover:text-cream transition-colors duration-300
                           shadow-lg hover:shadow-xl
                           transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Plan Your Custom Journey
                <ArrowRight size={20} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
