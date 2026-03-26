export interface Tour {
  title: string;
  duration: string;
  durationDays: number;
  image: string;
  description: string;
  tags: string[];
  category?: string;
  isPremium: boolean;
}

export interface DurationGroup {
  label: string;
  durationDays: number;
  intro: string;
  tours: Tour[];
}

// ──────────────────────────────────────────────
// All tour packages extracted from the standalone page
// ──────────────────────────────────────────────

export const DURATION_GROUPS: DurationGroup[] = [
  {
    label: "Egypt 2 Days Tour Packages",
    durationDays: 2,
    intro:
      "Experience Egypt's living history with our choice of affordable Egypt 2 days tour packages. Browse options such as exploring iconic landmarks and immersing in age-old cultures while staying in carefully selected accommodations.",
    tours: [
      {
        title: "2 Days 1 Night",
        duration: "2 Days",
        durationDays: 2,
        image: "/tours-packages/Day-tour-to-Pyramids-768x600.png",
        description:
          "Explore iconic Pyramids of Giza, Sphinx and Step Pyramid in a compact 2-day adventure from Cairo.",
        tags: ["Cairo", "Giza", "Museums"],
        category: "Best Seller",
        isPremium: true,
      },
      {
        title: "2 Days Cairo & Alexandria Tour Package",
        duration: "2 Days",
        durationDays: 2,
        image: "/tours-packages/alex-Citadel-of-Qaitbay-egypt-768x600.png",
        description:
          "2 days Cairo and Alexandria tour — See the Pyramids, Sphinx and explore Alexandria's Mediterranean charm.",
        tags: ["Cairo", "Alexandria"],
        category: "Cultural",
        isPremium: false,
      },
      {
        title: "Overnight 2 Days Trip to Luxor from Cairo",
        duration: "2 Days",
        durationDays: 2,
        image: "/tours-packages/Luxor-Temple-egypt-768x600.png",
        description:
          "Visit Karnak and Luxor Temples, tour the Valley of the Kings and discover Luxor's ancient treasures.",
        tags: ["Luxor", "Valley of Kings"],
        category: "Heritage",
        isPremium: false,
      },
      {
        title: "2 Days Cairo & Luxor by flight Round trip",
        duration: "2 Days",
        durationDays: 2,
        image: "/tours-packages/Karnak-Temple-768x600.png",
        description:
          "Discover Cairo and Luxor's ancient treasures in 2 days! Fly round-trip for a time-efficient exploration.",
        tags: ["Cairo", "Luxor", "Flight"],
        isPremium: true,
      },
      {
        title: "2 Days Aswan, Abu Simbel & Luxor from Cairo",
        duration: "2 Days",
        durationDays: 2,
        image: "/tours-packages/Island-of-Agilika-egypt-768x600.png",
        description:
          "Explore iconic sites of Aswan, Abu Simbel and Luxor in an action-packed 2-day adventure from Cairo.",
        tags: ["Aswan", "Abu Simbel", "Luxor"],
        category: "Adventure",
        isPremium: true,
      },
    ],
  },
  {
    label: "3 Days Trip To Egypt",
    durationDays: 3,
    intro:
      "Immerse yourself in Egypt's wonders over 3 days through our selection of affordable Egypt packages. Browse options encompassing iconic sites like the Pyramids and Sphinx combined with the treasures of Luxor and Alexandria.",
    tours: [
      {
        title: "3 Days 2 Nights Cairo-Alex Tour Package",
        duration: "3 Days",
        durationDays: 3,
        image: "/tours-packages/visit-Egyptian-Museum-768x600.png",
        description:
          "Explore Egypt's iconic sites in a 3-day tour: Visit the Pyramids, Sphinx, Egyptian Museum and Alexandria's highlights.",
        tags: ["Cairo", "Alexandria"],
        category: "Luxury",
        isPremium: true,
      },
      {
        title: "3 Days Cairo City Tour",
        duration: "3 Days",
        durationDays: 3,
        image: "/tours-packages/Hanging-Church-in-Egypt-768x600.png",
        description:
          "Explore the Pyramids of Giza, Sphinx and Egyptian Museum. Discover Old Cairo's Coptic quarter and Khan el-Khalili bazaar.",
        tags: ["Cairo", "Guided Tour"],
        category: "Cultural",
        isPremium: false,
      },
    ],
  },
  {
    label: "Egypt 4 Days Tour Packages",
    durationDays: 4,
    intro:
      "Our 4-day Egypt tour packages offer the perfect balance of exploration and relaxation, covering Cairo's iconic monuments while giving you time to soak in the atmosphere of this ancient civilization.",
    tours: [
      {
        title: "4 Days 3 Nights Cairo-Alex Tour Package",
        duration: "4 Days",
        durationDays: 4,
        image: "/tours-packages/The-Great-Pyramids-768x600.png",
        description:
          "Discover Cairo's timeless treasures — This four-day guided tour covers the Pyramids, Egyptian Museum, Old Cairo and Alexandria.",
        tags: ["Cairo", "Alexandria", "Guided Tour"],
        category: "Cultural",
        isPremium: false,
      },
    ],
  },
  {
    label: "Egypt 5 Days Tour Packages",
    durationDays: 5,
    intro:
      "Our 5-day Egypt tours strike the ideal balance between comprehensive sightseeing and comfortable pacing, letting you explore Cairo, Luxor and more without feeling rushed.",
    tours: [
      {
        title: "Egypt Budget 5 Days Tour Package",
        duration: "5 Days",
        durationDays: 5,
        image: "/tours-packages/Temple-of-Hatshepsut-768x600.png",
        description:
          "Discover ancient Egypt's heritage — This comprehensive tour visits pyramids, temples and tombs across Cairo and Luxor.",
        tags: ["Luxor", "Valley of Kings"],
        category: "Budget",
        isPremium: true,
      },
    ],
  },
  {
    label: "Egypt 6 Days Tour Packages",
    durationDays: 6,
    intro:
      "Six days gives you the freedom to go deeper. Combine Cairo's treasures with the temples of Upper Egypt, Red Sea relaxation, or a Nile cruise for the complete Egyptian experience.",
    tours: [
      {
        title: "Egypt 6 Days Affordable Excursions",
        duration: "6 Days",
        durationDays: 6,
        image: "/tours-packages/Karnak-Temple-in-egypt-768x600.png",
        description:
          "Experience Egypt's iconic sights in 6 days. Visit the Pyramids, Sphinx, Luxor temples and cruise the Nile.",
        tags: ["Aswan", "Culture"],
        category: "Heritage",
        isPremium: true,
      },
      {
        title: "6 Days Cairo, Luxor and Hurghada Tour",
        duration: "6 Days",
        durationDays: 6,
        image: "/tours-packages/Beach-in-Hurghada-egypt-768x600.png",
        description:
          "This 6-day tour visits Giza Pyramids, Luxor's temples and finishes with relaxation at Hurghada's Red Sea beaches.",
        tags: ["Beach", "Snorkeling", "Resort"],
        category: "Relaxation",
        isPremium: false,
      },
      {
        title: "6 Days Cairo and Nile Cruise Tour Package",
        duration: "6 Days",
        durationDays: 6,
        image: "/tours-packages/nile-cruise-luxor-768x600.png",
        description:
          "6 days Cairo and Nile cruise tour visiting the Pyramids, temples of Luxor and Aswan with a luxury cruise experience.",
        tags: ["Nile Cruise", "Cairo"],
        category: "Adventure",
        isPremium: true,
      },
    ],
  },
  {
    label: "Egypt 7 Days Tour Packages",
    durationDays: 7,
    intro:
      "A full week in Egypt lets you experience the country's diverse wonders at a relaxed pace — from Cairo's bustling markets to Upper Egypt's ancient temples and serene Nile cruises.",
    tours: [
      {
        title: "Egypt Budget 7 Days Tour Package",
        duration: "7 Days",
        durationDays: 7,
        image: "/tours-packages/visit-Philae-Temple-768x600.png",
        description:
          "Journey through history on this 7-day tour visiting iconic pyramids, temples, tombs and the treasures of the Nile Valley.",
        tags: ["Cairo", "Luxor", "Aswan"],
        category: "Budget",
        isPremium: false,
      },
      {
        title: "7 Days Cairo, Flight to Aswan, Luxor & Nile Cruise",
        duration: "7 Days",
        durationDays: 7,
        image: "/tours-packages/nile-cruise-luxor-2-768x600.png",
        description:
          "This comprehensive tour combines Cairo landmarks with a Nile cruise from Aswan to Luxor, visiting temples and tombs along the way.",
        tags: ["Nile Cruise", "Aswan"],
        category: "Exclusive",
        isPremium: true,
      },
    ],
  },
  {
    label: "Egypt 8 Days Tour Packages",
    durationDays: 8,
    intro:
      "Eight days unlocks the full breadth of Egypt — combine the iconic Cairo sights with an extended Nile cruise and visits to Luxor, Aswan and the remarkable temples of Abu Simbel.",
    tours: [
      {
        title: "Egypt 8 Days Tour Package",
        duration: "8 Days",
        durationDays: 8,
        image: "/tours-packages/temple-of-Luxo-egypt-768x600.png",
        description:
          "Luxor-Cairo journey through Egypt's past — explore temples, cruise the Nile and discover pharaonic treasures.",
        tags: ["Cairo", "Luxor", "Nile Cruise"],
        category: "Premium",
        isPremium: true,
      },
      {
        title: "8 Days Cairo, Luxor, Aswan & Abu Simbel",
        duration: "8 Days",
        durationDays: 8,
        image: "/tours-packages/visit-temple-of-Edfu-768x600.png",
        description:
          "An extensive tour covering Cairo's Pyramids, Luxor's Valley of Kings, Aswan's Philae Temple and the majestic Abu Simbel.",
        tags: ["Abu Simbel", "Aswan", "Full Tour"],
        category: "Adventure",
        isPremium: true,
      },
    ],
  },
  {
    label: "Egypt 9 Days Tour Packages",
    durationDays: 9,
    intro:
      "Nine days lets you savour Egypt without hurrying. Explore Cairo's markets, cruise the Nile in style, relax at the Red Sea and stand before the colossi at Abu Simbel.",
    tours: [
      {
        title: "Egypt 9 Days Tour Package",
        duration: "9 Days",
        durationDays: 9,
        image: "/tours-packages/statue-of-Memnon-768x600.png",
        description:
          "Discover Egypt's iconic sites in luxury on this 9-day journey across Cairo, Luxor, Aswan and the Red Sea coast.",
        tags: ["Luxury", "Full Tour"],
        category: "Luxury",
        isPremium: true,
      },
      {
        title: "9 Days Egypt & Nile Cruise Adventure",
        duration: "9 Days",
        durationDays: 9,
        image: "/tours-packages/nile-cruise-768x600.png",
        description:
          "A grand 9-day adventure combining Cairo's highlights with a 4-night Nile cruise and Red Sea relaxation.",
        tags: ["Nile Cruise", "Red Sea"],
        category: "Premium",
        isPremium: true,
      },
    ],
  },
  {
    label: "Egypt 10 Days Tour Packages",
    durationDays: 10,
    intro:
      "Ten days gives you the complete picture — from the Mediterranean coast of Alexandria to the desert temples of Abu Simbel, experience everything Egypt has to offer.",
    tours: [
      {
        title: "Egypt 10 Days Tour Package",
        duration: "10 Days",
        durationDays: 10,
        image: "/tours-packages/Deir-al-Bahri-768x600.png",
        description:
          "Discover Egypt's ancient landmarks — visit pyramids and temples, cruise the Nile, explore deserts and relax by the sea.",
        tags: ["Cairo", "Luxor", "Aswan", "Red Sea"],
        category: "Exclusive",
        isPremium: true,
      },
      {
        title: "10 Days Cairo, Nile Cruise & Hurghada",
        duration: "10 Days",
        durationDays: 10,
        image: "/tours-packages/hurghada-beaches-768x600.png",
        description:
          "The ultimate Egypt escape — Cairo sightseeing, a Nile cruise between Luxor and Aswan, and beachside relaxation in Hurghada.",
        tags: ["Nile Cruise", "Hurghada", "Beach"],
        category: "Relaxation",
        isPremium: true,
      },
    ],
  },
  {
    label: "Egypt 11 Days Tour Packages",
    durationDays: 11,
    intro:
      "Eleven days allows for deeper cultural immersion — spend extra time in each destination, add desert adventures, and enjoy Egypt at a truly relaxed pace.",
    tours: [
      {
        title: "Egypt 11 Days Tour Package",
        duration: "11 Days",
        durationDays: 11,
        image: "/tours-packages/Deir-el-Bahri-768x600.png",
        description:
          "Explore iconic pyramids, temples and ancient artifacts with an expert guide over 11 immersive days across Egypt.",
        tags: ["Full Tour", "Expert Guide"],
        category: "Premium",
        isPremium: true,
      },
    ],
  },
  {
    label: "Egypt 12+ Days Tour Packages",
    durationDays: 12,
    intro:
      "Our longest tours cover every highlight and hidden gem. Combine Egypt with Jordan, add desert safaris, or simply take your time at each remarkable site.",
    tours: [
      {
        title: "Egypt 12 Days Tour Package",
        duration: "12 Days",
        durationDays: 12,
        image: "/tours-packages/tour-to-temple-of-Karnak-768x600.png",
        description:
          "Explore iconic sites in Cairo, Alexandria, Luxor, Aswan and the Western Desert on this grand 12-day odyssey.",
        tags: ["Cairo", "Alexandria", "Luxor", "Aswan"],
        category: "Exclusive",
        isPremium: true,
      },
      {
        title: "Egypt & Jordan Combined Tour",
        duration: "14 Days",
        durationDays: 14,
        image: "/tours-packages/visit-Jerash-Artemis-768x600.png",
        description:
          "The ultimate two-country adventure — explore Egypt's pyramids and temples before crossing to Jordan for Petra, Wadi Rum and the Dead Sea.",
        tags: ["Egypt", "Jordan", "Petra"],
        category: "Exclusive",
        isPremium: true,
      },
    ],
  },
];

// Flat list of all tours (convenience export)
export const ALL_TOURS: Tour[] = DURATION_GROUPS.flatMap((g) => g.tours);

// Duration tab labels for the explorer
export const DURATION_TABS = DURATION_GROUPS.map((g) => ({
  label: `${g.durationDays}${g.durationDays >= 12 ? "+" : ""} Days`,
  durationDays: g.durationDays,
  anchorId: `duration-${g.durationDays}`,
}));

// Day tour categories (links to future pages — currently disabled)
export const DAY_TOUR_CATEGORIES = [
  { label: "Pyramids Day Tours", href: "#" },
  { label: "Cairo Day Tours", href: "#" },
  { label: "Alexandria Day Tours", href: "#" },
  { label: "Luxor Day Tours", href: "#" },
  { label: "Aswan Day Tours", href: "#" },
  { label: "Sinai & Red Sea Tours", href: "#" },
];

// Nile cruise categories
export const NILE_CRUISE_CATEGORIES = [
  { label: "Luxor & Aswan", href: "#" },
  { label: "Lake Nasser", href: "#" },
  { label: "Dahabiya", href: "#" },
  { label: "Customized Cruises", href: "#" },
];

// Custom trip categories
export const CUSTOM_TRIP_CATEGORIES = [
  { label: "Safari & Camping", href: "#" },
  { label: "Small Groups", href: "#" },
  { label: "Private Tours", href: "#" },
  { label: "Last Minute Tours", href: "#" },
  { label: "Tailor-Made Tours", href: "#tailor-made" },
  { label: "Couple Tours", href: "#" },
  { label: "Luxury Tours", href: "#" },
  { label: "Budget Tours", href: "#" },
  { label: "Shore Excursions", href: "#" },
];
