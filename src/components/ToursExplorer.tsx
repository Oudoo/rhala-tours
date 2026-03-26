'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Sun, Ship, Sparkles } from 'lucide-react';
import {
  DURATION_TABS,
  DAY_TOUR_CATEGORIES,
  NILE_CRUISE_CATEGORIES,
  CUSTOM_TRIP_CATEGORIES,
} from '@/data/toursData';

const TABS = [
  { key: 'multiday', label: 'Multi-Day Tours', icon: Compass },
  { key: 'daytrips', label: 'Day Tours', icon: Sun },
  { key: 'cruises', label: 'Nile Cruises', icon: Ship },
  { key: 'custom', label: 'Custom Trips', icon: Sparkles },
] as const;

type TabKey = (typeof TABS)[number]['key'];

export default function ToursExplorer() {
  const [activeTab, setActiveTab] = useState<TabKey>('multiday');

  const pillClasses =
    'px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer border whitespace-nowrap';
  const pillActive = 'bg-gold text-navy border-gold';
  const pillDefault =
    'bg-white text-navy/70 border-navy/10 hover:border-gold hover:text-navy';
  const pillDisabled =
    'bg-white text-navy/30 border-navy/5 cursor-default';

  function scrollTo(anchorId: string) {
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <section id="explore-tours" className="scroll-mt-24">
      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-navy text-cream shadow-lg'
                  : 'bg-white text-navy/60 hover:bg-cream hover:text-navy border border-navy/10'
              }`}
            >
              <Icon size={16} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Sub-options */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="mt-6"
        >
          {activeTab === 'multiday' && (
            <div className="flex flex-wrap gap-2">
              {DURATION_TABS.map((tab) => (
                <button
                  key={tab.durationDays}
                  onClick={() => scrollTo(tab.anchorId)}
                  className={`${pillClasses} ${pillDefault}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}

          {activeTab === 'daytrips' && (
            <div className="flex flex-wrap gap-2">
              {DAY_TOUR_CATEGORIES.map((cat) => (
                <span
                  key={cat.label}
                  className={`${pillClasses} ${cat.href === '#' ? pillDisabled : pillDefault}`}
                  title={cat.href === '#' ? 'Coming soon' : undefined}
                >
                  {cat.label}
                  {cat.href === '#' && (
                    <span className="ml-1 text-[10px] uppercase tracking-wider text-gold">soon</span>
                  )}
                </span>
              ))}
            </div>
          )}

          {activeTab === 'cruises' && (
            <div className="flex flex-wrap gap-2">
              {NILE_CRUISE_CATEGORIES.map((cat) => (
                <span
                  key={cat.label}
                  className={`${pillClasses} ${cat.href === '#' ? pillDisabled : pillDefault}`}
                  title={cat.href === '#' ? 'Coming soon' : undefined}
                >
                  {cat.label}
                  {cat.href === '#' && (
                    <span className="ml-1 text-[10px] uppercase tracking-wider text-gold">soon</span>
                  )}
                </span>
              ))}
            </div>
          )}

          {activeTab === 'custom' && (
            <div className="flex flex-wrap gap-2">
              {CUSTOM_TRIP_CATEGORIES.map((cat) => {
                const isActive = cat.href !== '#';
                return (
                  <button
                    key={cat.label}
                    onClick={() => {
                      if (isActive && cat.href.startsWith('#')) {
                        scrollTo(cat.href.slice(1));
                      }
                    }}
                    className={`${pillClasses} ${isActive ? pillDefault : pillDisabled}`}
                    title={!isActive ? 'Coming soon' : undefined}
                  >
                    {cat.label}
                    {!isActive && (
                      <span className="ml-1 text-[10px] uppercase tracking-wider text-gold">soon</span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
