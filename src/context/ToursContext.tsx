'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { Tour, DurationGroup, DURATION_GROUPS as DEFAULT_DURATION_GROUPS } from '@/data/toursData';
import { DayTour, DayTourGroup, DAY_TOUR_GROUPS as DEFAULT_DAY_TOUR_GROUPS } from '@/data/dayToursData';

// ─────────────────────────────────────────────────────────────────
//  LocalStorage keys
// ─────────────────────────────────────────────────────────────────
const LS_TOUR_PACKAGES = 'rhala_cms_tour_packages';
const LS_DAY_TOURS = 'rhala_cms_day_tours';

// ─────────────────────────────────────────────────────────────────
//  Context Shape
// ─────────────────────────────────────────────────────────────────
interface ToursContextValue {
  // Tour Packages
  durationGroups: DurationGroup[];
  allTours: Tour[];
  updateTourPackage: (groupIndex: number, tourIndex: number, updated: Tour) => void;
  addTourPackage: (groupIndex: number, tour: Tour) => void;
  deleteTourPackage: (groupIndex: number, tourIndex: number) => void;

  // Day Tours
  dayTourGroups: DayTourGroup[];
  allDayTours: DayTour[];
  updateDayTour: (groupIndex: number, tourIndex: number, updated: DayTour) => void;
  addDayTour: (groupIndex: number, tour: DayTour) => void;
  deleteDayTour: (groupIndex: number, tourIndex: number) => void;

  // Utility
  getDayTourBySlug: (slug: string) => DayTour | undefined;
  resetToDefaults: () => void;
}

const ToursContext = createContext<ToursContextValue | null>(null);

// ─────────────────────────────────────────────────────────────────
//  Provider
// ─────────────────────────────────────────────────────────────────
export function ToursProvider({ children }: { children: ReactNode }) {
  const [durationGroups, setDurationGroups] = useState<DurationGroup[]>(DEFAULT_DURATION_GROUPS);
  const [dayTourGroups, setDayTourGroups] = useState<DayTourGroup[]>(DEFAULT_DAY_TOUR_GROUPS);
  const [hydrated, setHydrated] = useState(false);

  // ── Hydrate from localStorage on mount ──────────────────────
  useEffect(() => {
    try {
      const storedPackages = localStorage.getItem(LS_TOUR_PACKAGES);
      if (storedPackages) {
        const parsed = JSON.parse(storedPackages) as DurationGroup[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          setDurationGroups(parsed);
        }
      }

      const storedDayTours = localStorage.getItem(LS_DAY_TOURS);
      if (storedDayTours) {
        const parsed = JSON.parse(storedDayTours) as DayTourGroup[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          setDayTourGroups(parsed);
        }
      }
    } catch {
      // Corrupted storage → fall back to defaults
    }
    setHydrated(true);
  }, []);

  // ── Persist to localStorage on change (after hydration) ─────
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(LS_TOUR_PACKAGES, JSON.stringify(durationGroups));
    } catch { /* quota exceeded — ignore */ }
  }, [durationGroups, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(LS_DAY_TOURS, JSON.stringify(dayTourGroups));
    } catch { /* quota exceeded — ignore */ }
  }, [dayTourGroups, hydrated]);

  // ── CRUD: Tour Packages ─────────────────────────────────────
  const updateTourPackage = useCallback((groupIndex: number, tourIndex: number, updated: Tour) => {
    setDurationGroups(prev => {
      const next = prev.map((g, gi) => {
        if (gi !== groupIndex) return g;
        const tours = g.tours.map((t, ti) => (ti === tourIndex ? updated : t));
        return { ...g, tours };
      });
      return next;
    });
  }, []);

  const addTourPackage = useCallback((groupIndex: number, tour: Tour) => {
    setDurationGroups(prev => {
      const next = prev.map((g, gi) => {
        if (gi !== groupIndex) return g;
        return { ...g, tours: [...g.tours, tour] };
      });
      return next;
    });
  }, []);

  const deleteTourPackage = useCallback((groupIndex: number, tourIndex: number) => {
    setDurationGroups(prev => {
      const next = prev.map((g, gi) => {
        if (gi !== groupIndex) return g;
        return { ...g, tours: g.tours.filter((_, ti) => ti !== tourIndex) };
      });
      return next;
    });
  }, []);

  // ── CRUD: Day Tours ─────────────────────────────────────────
  const updateDayTour = useCallback((groupIndex: number, tourIndex: number, updated: DayTour) => {
    setDayTourGroups(prev => {
      const next = prev.map((g, gi) => {
        if (gi !== groupIndex) return g;
        const tours = g.tours.map((t, ti) => (ti === tourIndex ? updated : t));
        return { ...g, tours };
      });
      return next;
    });
  }, []);

  const addDayTour = useCallback((groupIndex: number, tour: DayTour) => {
    setDayTourGroups(prev => {
      const next = prev.map((g, gi) => {
        if (gi !== groupIndex) return g;
        return { ...g, tours: [...g.tours, tour] };
      });
      return next;
    });
  }, []);

  const deleteDayTour = useCallback((groupIndex: number, tourIndex: number) => {
    setDayTourGroups(prev => {
      const next = prev.map((g, gi) => {
        if (gi !== groupIndex) return g;
        return { ...g, tours: g.tours.filter((_, ti) => ti !== tourIndex) };
      });
      return next;
    });
  }, []);

  // ── Derived data ────────────────────────────────────────────
  const allTours = durationGroups.flatMap(g => g.tours);
  const allDayTours = dayTourGroups.flatMap(g => g.tours);

  const getDayTourBySlug = useCallback(
    (slug: string) => allDayTours.find(t => t.slug === slug),
    [allDayTours]
  );

  const resetToDefaults = useCallback(() => {
    setDurationGroups(DEFAULT_DURATION_GROUPS);
    setDayTourGroups(DEFAULT_DAY_TOUR_GROUPS);
    localStorage.removeItem(LS_TOUR_PACKAGES);
    localStorage.removeItem(LS_DAY_TOURS);
  }, []);

  return (
    <ToursContext.Provider
      value={{
        durationGroups,
        allTours,
        updateTourPackage,
        addTourPackage,
        deleteTourPackage,
        dayTourGroups,
        allDayTours,
        updateDayTour,
        addDayTour,
        deleteDayTour,
        getDayTourBySlug,
        resetToDefaults,
      }}
    >
      {children}
    </ToursContext.Provider>
  );
}

// ─────────────────────────────────────────────────────────────────
//  Hook
// ─────────────────────────────────────────────────────────────────
export function useTours() {
  const ctx = useContext(ToursContext);
  if (!ctx) throw new Error('useTours must be used within <ToursProvider>');
  return ctx;
}
