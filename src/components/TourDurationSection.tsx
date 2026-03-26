'use client';

import { motion } from 'framer-motion';
import TourCard from './TourCard';
import type { DurationGroup } from '@/data/toursData';

interface Props {
  group: DurationGroup;
  groupIndex: number;
}

export default function TourDurationSection({ group, groupIndex }: Props) {
  return (
    <section
      id={`duration-${group.durationDays}`}
      className="scroll-mt-32"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-[2px] bg-gold" />
          <span className="text-gold font-semibold uppercase tracking-widest text-xs">
            {group.durationDays}{group.durationDays >= 12 ? '+' : ''} Days
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
          {group.label}
        </h2>
        <p className="text-navy/60 max-w-3xl leading-relaxed">
          {group.intro}
        </p>
      </motion.div>

      {/* Tour cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {group.tours.map((tour, i) => (
          <motion.div
            key={tour.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <TourCard
              tour={tour}
              index={groupIndex * 10 + i}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
