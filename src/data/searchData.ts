import {
  DURATION_GROUPS,
  DAY_TOUR_CATEGORIES,
  NILE_CRUISE_CATEGORIES,
  CUSTOM_TRIP_CATEGORIES,
} from './toursData';

export interface SearchResult {
  title: string;
  subtitle: string;
  href: string;
  keywords: string[];
}

// ── Destinations ─────────────────────────────────────────────────────────────

const DESTINATIONS: SearchResult[] = [
  {
    title: 'Cairo',
    subtitle: 'Destination',
    href: '/destinations',
    keywords: ['pyramids', 'sphinx', 'giza', 'museum', 'egyptian'],
  },
  {
    title: 'Luxor',
    subtitle: 'Destination',
    href: '/destinations',
    keywords: ['karnak', 'valley of kings', 'temple', 'pharaoh'],
  },
  {
    title: 'Aswan',
    subtitle: 'Destination',
    href: '/destinations',
    keywords: ['philae', 'nubian', 'nile', 'dam', 'abu simbel'],
  },
  {
    title: 'Alexandria',
    subtitle: 'Destination',
    href: '/destinations',
    keywords: ['mediterranean', 'library', 'alex', 'citadel', 'qaitbay'],
  },
  {
    title: 'Siwa Oasis',
    subtitle: 'Destination',
    href: '/destinations',
    keywords: ['oasis', 'desert', 'western', 'salt lake', 'berber'],
  },
  {
    title: 'Hurghada',
    subtitle: 'Destination',
    href: '/destinations',
    keywords: ['red sea', 'diving', 'beach', 'resort', 'snorkeling', 'coral'],
  },
  {
    title: 'Dahab',
    subtitle: 'Destination',
    href: '/destinations',
    keywords: ['sinai', 'diving', 'windsurfing', 'backpacker', 'blue hole'],
  },
  {
    title: 'White Desert',
    subtitle: 'Destination',
    href: '/destinations',
    keywords: ['chalk', 'formations', 'western desert', 'camping', 'surreal'],
  },
];

// ── Tour Packages ─────────────────────────────────────────────────────────────

const TOUR_PACKAGES: SearchResult[] = DURATION_GROUPS.flatMap((group) =>
  group.tours.map((tour) => ({
    title: tour.title,
    subtitle: `Tour Package — ${tour.duration}`,
    href: `/tours-packages#duration-${group.durationDays}`,
    keywords: [
      ...tour.tags.map((t) => t.toLowerCase()),
      (tour.category ?? '').toLowerCase(),
      tour.duration.toLowerCase(),
      tour.description.toLowerCase(),
      `${group.durationDays} days`,
      `${group.durationDays} nights`,
    ].filter(Boolean),
  }))
);

// ── Day Tours ─────────────────────────────────────────────────────────────────

const DAY_TOURS: SearchResult[] = DAY_TOUR_CATEGORIES.map((cat) => ({
  title: cat.label,
  subtitle: 'Day Tour',
  href: cat.href === '#' ? '/tours' : cat.href,
  keywords: [cat.label.toLowerCase(), 'day trip', 'excursion'],
}));

// ── Nile Cruises ──────────────────────────────────────────────────────────────

const NILE_CRUISES: SearchResult[] = NILE_CRUISE_CATEGORIES.map((cat) => ({
  title: cat.label,
  subtitle: 'Nile Cruise',
  href: cat.href === '#' ? '/tours' : cat.href,
  keywords: [cat.label.toLowerCase(), 'cruise', 'nile', 'boat', 'felucca'],
}));

// ── Personal Experiences ──────────────────────────────────────────────────────

const PERSONAL_EXPERIENCES: SearchResult[] = [
  {
    title: 'Desert Safari',
    subtitle: 'Adrenaline Experience',
    href: '/#adrenaline',
    keywords: ['safari', 'dune bashing', '4x4', 'desert', 'adventure'],
  },
  {
    title: 'Mountain Hiking',
    subtitle: 'Adrenaline Experience',
    href: '/#adrenaline',
    keywords: ['hiking', 'sinai trail', 'mountain', 'trekking', 'nature'],
  },
  {
    title: 'Pyramids Paragliding',
    subtitle: 'Adrenaline Experience',
    href: '/#adrenaline',
    keywords: ['paragliding', 'pyramids', 'aerial', 'flying', 'giza'],
  },
  {
    title: 'Nile Kayaking',
    subtitle: 'Adrenaline Experience',
    href: '/#adrenaline',
    keywords: ['kayak', 'kayaking', 'nile', 'river', 'water sports', 'paddle'],
  },
  {
    title: 'Sky Diving',
    subtitle: 'Adrenaline Experience',
    href: '/#adrenaline',
    keywords: ['skydiving', 'sky', 'jump', 'freefall', 'extreme'],
  },
  {
    title: 'Helicopter Tour',
    subtitle: 'Adrenaline Experience',
    href: '/#adrenaline',
    keywords: ['helicopter', 'aerial view', 'cairo', 'flying', 'sightseeing'],
  },
  {
    title: 'Honeymoon Tours',
    subtitle: 'Personal Experience',
    href: '/tours-packages',
    keywords: ['honeymoon', 'romantic', 'couple', 'love', 'wedding', 'anniversary'],
  },
  {
    title: 'Local Experiences',
    subtitle: 'Personal Experience',
    href: '/tours',
    keywords: ['local', 'authentic', 'culture', 'immersive', 'community'],
  },
];

// ── Custom Trips ──────────────────────────────────────────────────────────────

const CUSTOM_TRIPS: SearchResult[] = CUSTOM_TRIP_CATEGORIES.map((cat) => ({
  title: cat.label,
  subtitle: 'Custom Trip',
  href:
    cat.href === '#'
      ? '/tours-packages'
      : cat.href.startsWith('#')
      ? `/tours-packages${cat.href}`
      : cat.href,
  keywords: [cat.label.toLowerCase(), 'custom', 'tailored', 'private'],
}));

// ── Master Index ──────────────────────────────────────────────────────────────

export const SEARCH_INDEX: SearchResult[] = [
  ...DESTINATIONS,
  ...TOUR_PACKAGES,
  ...DAY_TOURS,
  ...NILE_CRUISES,
  ...PERSONAL_EXPERIENCES,
  ...CUSTOM_TRIPS,
];

// ── Search Function ───────────────────────────────────────────────────────────

/**
 * Partial/fuzzy search across title, subtitle, and keyword fields.
 * Returns up to 8 ranked results (title/subtitle matches ranked higher).
 */
export function searchItems(query: string): SearchResult[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  type Scored = { result: SearchResult; score: number };

  const scored: Scored[] = SEARCH_INDEX.reduce<Scored[]>((acc, item) => {
    const titleMatch = item.title.toLowerCase().includes(q);
    const subtitleMatch = item.subtitle.toLowerCase().includes(q);
    const keywordMatch = item.keywords.some((k) => k.includes(q));

    if (titleMatch || subtitleMatch || keywordMatch) {
      acc.push({
        result: item,
        score: (titleMatch ? 3 : 0) + (subtitleMatch ? 1 : 0) + (keywordMatch ? 1 : 0),
      });
    }
    return acc;
  }, []);

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map((s) => s.result);
}
