import { CategoryTour } from './mockCategoryData';

// ─────────────────────────────────────────────────────────────────
//  Nile Cruise Data — grouped by route
// ─────────────────────────────────────────────────────────────────

export interface NileCruiseRoute {
  slug: string;
  title: string;
  description: string;
  packages: CategoryTour[];
}

export const NILE_CRUISE_ROUTES: NileCruiseRoute[] = [
  // ── LUXOR TO ASWAN ─────────────────────────────────────────────
  {
    slug: 'luxor-aswan',
    title: 'Luxor to Aswan',
    description:
      'The classic Nile journey. Sail between Egypt\'s two greatest open-air museums, stopping at Karnak, the Valley of the Kings, Edfu, Kom Ombo and Philae. This is the crown jewel of any Egypt itinerary.',
    packages: [
      {
        id: 'la-1',
        title: '4-Day Luxury Luxor–Aswan Nile Cruise',
        shortDescription:
          'The most popular route on the Nile. Includes Karnak Temple, Valley of the Kings, Edfu, Kom Ombo and Philae, all from a 5-star floating hotel.',
        price: 480,
        image: '/tours-packages/nile-cruise-luxor-768x600.png',
        duration: '4 Days / 3 Nights',
      },
      {
        id: 'la-2',
        title: '5-Day Classic Luxor–Aswan Nile Cruise',
        shortDescription:
          'More time, more temples. An extra day allows a relaxed visit to Luxor\'s West Bank — Valley of the Kings, Hatshepsut Temple and Colossi of Memnon — before you set sail.',
        price: 560,
        image: '/tours-packages/nile-cruise-768x600.png',
        duration: '5 Days / 4 Nights',
      },
      {
        id: 'la-3',
        title: '7-Day Premium Luxor–Aswan Nile Cruise',
        shortDescription:
          'The ultimate upper-Egypt experience. Combines the full Luxor–Aswan route with optional Abu Simbel excursion, private guided shore excursions and premium onboard dining.',
        price: 890,
        image: '/tours-packages/nile-cruise-luxor-2-768x600.png',
        duration: '7 Days / 6 Nights',
      },
    ],
  },
  // ── LAKE NASSER ─────────────────────────────────────────────────
  {
    slug: 'lake-nasser',
    title: 'Lake Nasser',
    description:
      'One of the most remote and rewarding cruise experiences on Earth. Sail across the world\'s largest man-made lake to the colossal temples of Abu Simbel, Kalabsha and Amada — places most travelers never reach.',
    packages: [
      {
        id: 'ln-1',
        title: '4-Day Lake Nasser Cruise — Abu Simbel Discovery',
        shortDescription:
          'Board in Aswan and sail south on the pristine lake. Visit the relocated temples of Kalabsha and Beit el-Wali before anchoring below the mighty Abu Simbel temples at sunrise.',
        price: 720,
        image: '/tours-packages/Kalabsha-Temple-768x600.png',
        duration: '4 Days / 3 Nights',
      },
      {
        id: 'ln-2',
        title: '5-Day Lake Nasser Explorer — Temples & Wilderness',
        shortDescription:
          'The most comprehensive Lake Nasser itinerary. Covers every significant Nubian temple along the shoreline — Wadi el-Seboua, Amada, Derr and Abu Simbel — in remote, uncrowded serenity.',
        price: 950,
        image: '/tours-packages/nile-cruise-luxor-768x600.png',
        duration: '5 Days / 4 Nights',
      },
    ],
  },
  // ── DAHABIYA ──────────────────────────────────────────────────
  {
    slug: 'dahabiya',
    title: 'Dahabiya',
    description:
      'Revive the golden age of Nile travel aboard a traditional wooden dahabiya. With just a handful of guests, your private sailboat glides past villages, feluccas and sunset-lit temples at the gentle pace Egypt deserves.',
    packages: [
      {
        id: 'dh-1',
        title: '5-Day Private Dahabiya Nile Cruise',
        shortDescription:
          'An intimate, boutique alternative to large cruise ships. Sail Luxor to Aswan on a restored traditional wooden dahabiya with private en-suite cabins, a personal chef and exclusive shore excursions.',
        price: 1100,
        image: '/tours-packages/nile-cruise-768x600.png',
        duration: '5 Days / 4 Nights',
      },
      {
        id: 'dh-2',
        title: '7-Day Exclusive Dahabiya Experience',
        shortDescription:
          'The most leisurely and personal way to travel the Nile. Seven days of slow sailing, private temple visits at dawn, yoga on deck and gourmet Nubian cuisine — a true escape from the world.',
        price: 1650,
        image: '/tours-packages/nile-cruise-luxor-2-768x600.png',
        duration: '7 Days / 6 Nights',
      },
      {
        id: 'dh-3',
        title: '4-Day Dahabiya Weekend Escape',
        shortDescription:
          'Short on time but not on luxury. This compact 4-day dahabiya cruise covers the Esna to Aswan stretch — less-visited temples, quieter moorings and the same intimate onboard experience.',
        price: 850,
        image: '/tours-packages/nile-cruise-luxor-768x600.png',
        duration: '4 Days / 3 Nights',
      },
    ],
  },
];

export const ALL_CRUISE_PACKAGES: CategoryTour[] = NILE_CRUISE_ROUTES.flatMap(
  (route) => route.packages
);

export function getCruisePackagesBySlug(slug: string): CategoryTour[] {
  const route = NILE_CRUISE_ROUTES.find((r) => r.slug === slug);
  return route ? route.packages : [];
}

export function getCruiseRouteBySlug(slug: string): NileCruiseRoute | undefined {
  return NILE_CRUISE_ROUTES.find((r) => r.slug === slug);
}
