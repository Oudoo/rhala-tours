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
      id={
        group.durationDays === 2 ? "2-days-1-night" :
        group.durationDays === 3 ? "3-days-2-nights" :
        group.durationDays === 4 ? "4-days-3-nights" :
        group.durationDays === 5 ? "5-days-4-nights" :
        group.durationDays === 6 ? "6-days-5-nights" :
        group.durationDays === 7 ? "7-days-6-nights" :
        group.durationDays === 8 ? "8-days-7-nights" :
        group.durationDays === 9 ? "9-days-tours-egypt" :
        group.durationDays === 10 ? "10-days-9-nights" :
        group.durationDays === 11 ? "11-days-10-nights" :
        group.durationDays === 12 ? "12-days-tours-egypt" :
        "more-than-12-days"
      }
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

      {/* Tour cards grid — 2-col at lg (when sidebar appears), 3-col at xl+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
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
              fluid
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
