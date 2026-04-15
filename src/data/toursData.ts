export interface Tour {
  title: string;
  duration: string;
  durationDays: number;
  image: string;
  description: string;
  tags: string[];
  category?: string;
  isPremium: boolean;
  price?: number;
  buttonText?: string;
  itinerary?: {
    day: number;
    title: string;
    details: string;
  }[];
  tourType?: string;
  availability?: string;
  pickupLocation?: string;
  dropoffLocation?: string;
  pickupTime?: string;
  guideLanguages?: string[];
  highlights?: string[];
  included?: string[];
  excluded?: string[];
  accommodation?: string;
  meals?: string[];
  importantNotes?: string[];
  cancellationPolicy?: string;
  pricingOptions?: { title: string; price: number; description?: string }[];
  reviews?: { rating: number; count: number };
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
        itinerary: [
          { day: 1, title: "Arrival & Giza Pyramids", details: "Arrive in Cairo and head straight to the Giza Plateau. Marvel at the Great Pyramids and the enigmatic Sphinx. Later, visit Sakkara to see the Step Pyramid of Djoser." },
          { day: 2, title: "Egyptian Museum & Departure", details: "Explore the vast collection of artifacts at the Egyptian Museum in Tahrir Square, including the treasures of King Tutankhamun, before your departure." }
        ],
        tourType: "Private & Guided Tour",
        availability: "Runs Everyday",
        pickupLocation: "Your Hotel or Arrival Terminal",
        dropoffLocation: "Your Hotel or Departure Terminal",
        pickupTime: "Flexible (Typically 08:00 AM)",
        guideLanguages: ["English", "Spanish", "French", "German"],
        highlights: [
          "Marvel at iconic ancient monuments and landmarks",
          "Learn from a professional Egyptologist guide",
          "Enjoy seamless, hassle-free transfers in A/C vehicles",
          "Experience the true culture and history of Egypt"
        ],
        included: [
          "Expert Tour Guide (Egyptologist)",
          "All Transfers by Private A/C Vehicle",
          "Hotel/Airport Pickup & Drop-off",
          "Entrance Fees to Sites",
          "Bottled Water & Snacks"
        ],
        excluded: [
          "International Flights & Airfare",
          "Entry Visa to Egypt",
          "Tipping (Gratuities)",
          "Optional Tours & Activities"
        ],
        accommodation: "4 or 5-Star Hotel / Premium Cruise (if overnight)",
        meals: ["Breakfast", "Lunch"],
        importantNotes: [
          "Valid Passport required",
          "Comfortable walking shoes highly recommended",
          "Conservative dress code for religious sites",
          "Check visa requirements before traveling"
        ],
        cancellationPolicy: "Free cancellation up to 48 hours before the tour start time. Secure your spot with a flexible deposit.",
        pricingOptions: [
          { title: "Standard (4-Star)", price: 379, description: "Comfortable standard accommodation and priority group transfers." },
          { title: "Premium (5-Star)", price: 729, description: "Luxury accommodation and exclusive private transfers." }
        ],
        reviews: { rating: 4.6, count: 184 }
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
        itinerary: [
          { day: 1, title: "Cairo Highlights", details: "Visit the Pyramids of Giza and the Sphinx in the morning. Transfer to Alexandria in the afternoon and check into your seaside hotel." },
          { day: 2, title: "Alexandria City Tour", details: "Visit the stunning Library of Alexandria, the Catacombs of Kom El Shoqafa, and the Citadel of Qaitbay. Return to Cairo in the evening." }
        ],
        tourType: "Private & Guided Tour",
        availability: "Runs Everyday",
        pickupLocation: "Your Hotel or Arrival Terminal",
        dropoffLocation: "Your Hotel or Departure Terminal",
        pickupTime: "Flexible (Typically 08:00 AM)",
        guideLanguages: ["English", "Spanish", "French", "German"],
        highlights: [
          "Marvel at iconic ancient monuments and landmarks",
          "Learn from a professional Egyptologist guide",
          "Enjoy seamless, hassle-free transfers in A/C vehicles",
          "Experience the true culture and history of Egypt"
        ],
        included: [
          "Expert Tour Guide (Egyptologist)",
          "All Transfers by Private A/C Vehicle",
          "Hotel/Airport Pickup & Drop-off",
          "Entrance Fees to Sites",
          "Bottled Water & Snacks"
        ],
        excluded: [
          "International Flights & Airfare",
          "Entry Visa to Egypt",
          "Tipping (Gratuities)",
          "Optional Tours & Activities"
        ],
        accommodation: "4 or 5-Star Hotel / Premium Cruise (if overnight)",
        meals: ["Breakfast", "Lunch"],
        importantNotes: [
          "Valid Passport required",
          "Comfortable walking shoes highly recommended",
          "Conservative dress code for religious sites",
          "Check visa requirements before traveling"
        ],
        cancellationPolicy: "Free cancellation up to 48 hours before the tour start time. Secure your spot with a flexible deposit.",
        pricingOptions: [
          { title: "Standard (4-Star)", price: 461, description: "Comfortable standard accommodation and priority group transfers." },
          { title: "Premium (5-Star)", price: 811, description: "Luxury accommodation and exclusive private transfers." }
        ],
        reviews: { rating: 4.7, count: 86 }
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
        itinerary: [
          { day: 1, title: "Flight to Luxor & East Bank", details: "Fly from Cairo to Luxor. Visit the massive Karnak Temple Complex and the majestic Luxor Temple illuminated in the evening." },
          { day: 2, title: "West Bank & Return Flight", details: "Cross to the West Bank to explore the Valley of the Kings, the Temple of Hatshepsut, and the Colossi of Memnon. Fly back to Cairo." }
        ],
        tourType: "Private & Guided Tour",
        availability: "Runs Everyday",
        pickupLocation: "Your Hotel or Arrival Terminal",
        dropoffLocation: "Your Hotel or Departure Terminal",
        pickupTime: "Flexible (Typically 08:00 AM)",
        guideLanguages: ["English", "Spanish", "French", "German"],
        highlights: [
          "Marvel at iconic ancient monuments and landmarks",
          "Learn from a professional Egyptologist guide",
          "Enjoy seamless, hassle-free transfers in A/C vehicles",
          "Experience the true culture and history of Egypt"
        ],
        included: [
          "Expert Tour Guide (Egyptologist)",
          "All Transfers by Private A/C Vehicle",
          "Hotel/Airport Pickup & Drop-off",
          "Entrance Fees to Sites",
          "Bottled Water & Snacks"
        ],
        excluded: [
          "International Flights & Airfare",
          "Entry Visa to Egypt",
          "Tipping (Gratuities)",
          "Optional Tours & Activities"
        ],
        accommodation: "4 or 5-Star Hotel / Premium Cruise (if overnight)",
        meals: ["Breakfast", "Lunch"],
        importantNotes: [
          "Valid Passport required",
          "Comfortable walking shoes highly recommended",
          "Conservative dress code for religious sites",
          "Check visa requirements before traveling"
        ],
        cancellationPolicy: "Free cancellation up to 48 hours before the tour start time. Secure your spot with a flexible deposit.",
        pricingOptions: [
          { title: "Standard (4-Star)", price: 368, description: "Comfortable standard accommodation and priority group transfers." },
          { title: "Premium (5-Star)", price: 718, description: "Luxury accommodation and exclusive private transfers." }
        ],
        reviews: { rating: 4.6, count: 96 }
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
        itinerary: [
          { day: 1, title: "Giza Pyramids & Cairo Flight", details: "Tour the Giza Pyramids and Sphinx in the morning. Take an evening flight to Luxor and check into your hotel." },
          { day: 2, title: "Luxor Highlights & Return", details: "Visit the Valley of the Kings and Karnak Temple. Conclude the tour with an evening flight back to Cairo." }
        ],
        tourType: "Private & Guided Tour",
        availability: "Runs Everyday",
        pickupLocation: "Your Hotel or Arrival Terminal",
        dropoffLocation: "Your Hotel or Departure Terminal",
        pickupTime: "Flexible (Typically 08:00 AM)",
        guideLanguages: ["English", "Spanish", "French", "German"],
        highlights: [
          "Marvel at iconic ancient monuments and landmarks",
          "Learn from a professional Egyptologist guide",
          "Enjoy seamless, hassle-free transfers in A/C vehicles",
          "Experience the true culture and history of Egypt"
        ],
        included: [
          "Expert Tour Guide (Egyptologist)",
          "All Transfers by Private A/C Vehicle",
          "Hotel/Airport Pickup & Drop-off",
          "Entrance Fees to Sites",
          "Bottled Water & Snacks"
        ],
        excluded: [
          "International Flights & Airfare",
          "Entry Visa to Egypt",
          "Tipping (Gratuities)",
          "Optional Tours & Activities"
        ],
        accommodation: "4 or 5-Star Hotel / Premium Cruise (if overnight)",
        meals: ["Breakfast", "Lunch"],
        importantNotes: [
          "Valid Passport required",
          "Comfortable walking shoes highly recommended",
          "Conservative dress code for religious sites",
          "Check visa requirements before traveling"
        ],
        cancellationPolicy: "Free cancellation up to 48 hours before the tour start time. Secure your spot with a flexible deposit.",
        pricingOptions: [
          { title: "Standard (4-Star)", price: 447, description: "Comfortable standard accommodation and priority group transfers." },
          { title: "Premium (5-Star)", price: 797, description: "Luxury accommodation and exclusive private transfers." }
        ],
        reviews: { rating: 4.5, count: 205 }
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
        itinerary: [
          { day: 1, title: "Flight to Aswan & Abu Simbel", details: "Fly to Aswan. Optional early trip to the magnificent temples of Abu Simbel. Return to Aswan to visit the Philae Temple." },
          { day: 2, title: "Luxor Temples & Return Flight", details: "Travel to Luxor by train. Visit the Valley of the Kings and Karnak Temple before catching your flight back to Cairo." }
        ],
        tourType: "Private & Guided Tour",
        availability: "Runs Everyday",
        pickupLocation: "Your Hotel or Arrival Terminal",
        dropoffLocation: "Your Hotel or Departure Terminal",
        pickupTime: "Flexible (Typically 08:00 AM)",
        guideLanguages: ["English", "Spanish", "French", "German"],
        highlights: [
          "Marvel at iconic ancient monuments and landmarks",
          "Learn from a professional Egyptologist guide",
          "Enjoy seamless, hassle-free transfers in A/C vehicles",
          "Experience the true culture and history of Egypt"
        ],
        included: [
          "Expert Tour Guide (Egyptologist)",
          "All Transfers by Private A/C Vehicle",
          "Hotel/Airport Pickup & Drop-off",
          "Entrance Fees to Sites",
          "Bottled Water & Snacks"
        ],
        excluded: [
          "International Flights & Airfare",
          "Entry Visa to Egypt",
          "Tipping (Gratuities)",
          "Optional Tours & Activities"
        ],
        accommodation: "4 or 5-Star Hotel / Premium Cruise (if overnight)",
        meals: ["Breakfast", "Lunch"],
        importantNotes: [
          "Valid Passport required",
          "Comfortable walking shoes highly recommended",
          "Conservative dress code for religious sites",
          "Check visa requirements before traveling"
        ],
        cancellationPolicy: "Free cancellation up to 48 hours before the tour start time. Secure your spot with a flexible deposit.",
        pricingOptions: [
          { title: "Standard (4-Star)", price: 340, description: "Comfortable standard accommodation and priority group transfers." },
          { title: "Premium (5-Star)", price: 690, description: "Luxury accommodation and exclusive private transfers." }
        ],
        reviews: { rating: 4.8, count: 172 }
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
        itinerary: [
          { day: 1, title: "Welcome to Cairo", details: "Arrival in Cairo. Transfer to your hotel and enjoy a free evening." },
          { day: 2, title: "Giza Pyramids & Egyptian Museum", details: "Full-day tour covering the Giza Pyramids, Sphinx, and the treasures of the Egyptian Museum. Evening at leisure." },
          { day: 3, title: "Alexandria Day Trip", details: "Drive to Alexandria. Visit the Catacombs, Qaitbay Citadel, and the Bibliotheca Alexandrina. Return to Cairo for departure." }
        ],
        tourType: "Private & Guided Tour",
        availability: "Runs Everyday",
        pickupLocation: "Your Hotel or Arrival Terminal",
        dropoffLocation: "Your Hotel or Departure Terminal",
        pickupTime: "Flexible (Typically 08:00 AM)",
        guideLanguages: ["English", "Spanish", "French", "German"],
        highlights: [
          "Marvel at iconic ancient monuments and landmarks",
          "Learn from a professional Egyptologist guide",
          "Enjoy seamless, hassle-free transfers in A/C vehicles",
          "Experience the true culture and history of Egypt"
        ],
        included: [
          "Expert Tour Guide (Egyptologist)",
          "All Transfers by Private A/C Vehicle",
          "Hotel/Airport Pickup & Drop-off",
          "Entrance Fees to Sites",
          "Bottled Water & Snacks"
        ],
        excluded: [
          "International Flights & Airfare",
          "Entry Visa to Egypt",
          "Tipping (Gratuities)",
          "Optional Tours & Activities"
        ],
        accommodation: "4 or 5-Star Hotel / Premium Cruise (if overnight)",
        meals: ["Breakfast", "Lunch"],
        importantNotes: [
          "Valid Passport required",
          "Comfortable walking shoes highly recommended",
          "Conservative dress code for religious sites",
          "Check visa requirements before traveling"
        ],
        cancellationPolicy: "Free cancellation up to 48 hours before the tour start time. Secure your spot with a flexible deposit.",
        pricingOptions: [
          { title: "Standard (4-Star)", price: 493, description: "Comfortable standard accommodation and priority group transfers." },
          { title: "Premium (5-Star)", price: 843, description: "Luxury accommodation and exclusive private transfers." }
        ],
        reviews: { rating: 4.8, count: 129 }
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
        itinerary: [
          { day: 1, title: "Arrival & Leisure", details: "Arrive at Cairo International Airport. Transfer to your hotel and settle in." },
          { day: 2, title: "Giza Pyramids & Egyptian Museum", details: "Guided tour of the Giza Pyramids, Sphinx, and the Egyptian Museum in Tahrir Square." },
          { day: 3, title: "Old Cairo & Khan el-Khalili", details: "Visit the Hanging Church, Saladin Citadel, and shop at the historic Khan el-Khalili bazaar. Transfer to airport for departure." }
        ],
        tourType: "Private & Guided Tour",
        availability: "Runs Everyday",
        pickupLocation: "Your Hotel or Arrival Terminal",
        dropoffLocation: "Your Hotel or Departure Terminal",
        pickupTime: "Flexible (Typically 08:00 AM)",
        guideLanguages: ["English", "Spanish", "French", "German"],
        highlights: [
          "Marvel at iconic ancient monuments and landmarks",
          "Learn from a professional Egyptologist guide",
          "Enjoy seamless, hassle-free transfers in A/C vehicles",
          "Experience the true culture and history of Egypt"
        ],
        included: [
          "Expert Tour Guide (Egyptologist)",
          "All Transfers by Private A/C Vehicle",
          "Hotel/Airport Pickup & Drop-off",
          "Entrance Fees to Sites",
          "Bottled Water & Snacks"
        ],
        excluded: [
          "International Flights & Airfare",
          "Entry Visa to Egypt",
          "Tipping (Gratuities)",
          "Optional Tours & Activities"
        ],
        accommodation: "4 or 5-Star Hotel / Premium Cruise (if overnight)",
        meals: ["Breakfast", "Lunch"],
        importantNotes: [
          "Valid Passport required",
          "Comfortable walking shoes highly recommended",
          "Conservative dress code for religious sites",
          "Check visa requirements before traveling"
        ],
        cancellationPolicy: "Free cancellation up to 48 hours before the tour start time. Secure your spot with a flexible deposit.",
        pricingOptions: [
          { title: "Standard (4-Star)", price: 576, description: "Comfortable standard accommodation and priority group transfers." },
          { title: "Premium (5-Star)", price: 926, description: "Luxury accommodation and exclusive private transfers." }
        ],
        reviews: { rating: 4.8, count: 107 }
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
        itinerary: [
          { day: 1, title: "Arrival in Cairo", details: "Meet and assist at Cairo Airport. Transfer to the hotel for check-in and an evening of relaxation." },
          { day: 2, title: "Pyramids & Egyptian Museum", details: "Visit the Great Pyramids, Sphinx, and explore the ancient artifacts at the Egyptian Museum." },
          { day: 3, title: "Alexandria Coastal Trip", details: "Head to Alexandria to see the Catacombs, Qaitbay Citadel, and the modern Library. Return to Cairo." },
          { day: 4, title: "Old Cairo & Departure", details: "Tour Coptic Cairo and the Citadel. Stroll through Khan el-Khalili before your final departure." }
        ],
        tourType: "Private & Guided Tour",
        availability: "Runs Everyday",
        pickupLocation: "Your Hotel or Arrival Terminal",
        dropoffLocation: "Your Hotel or Departure Terminal",
        pickupTime: "Flexible (Typically 08:00 AM)",
        guideLanguages: ["English", "Spanish", "French", "German"],
        highlights: [
          "Marvel at iconic ancient monuments and landmarks",
          "Learn from a professional Egyptologist guide",
          "Enjoy seamless, hassle-free transfers in A/C vehicles",
          "Experience the true culture and history of Egypt"
        ],
        included: [
          "Expert Tour Guide (Egyptologist)",
          "All Transfers by Private A/C Vehicle",
          "Hotel/Airport Pickup & Drop-off",
          "Entrance Fees to Sites",
          "Bottled Water & Snacks"
        ],
        excluded: [
          "International Flights & Airfare",
          "Entry Visa to Egypt",
          "Tipping (Gratuities)",
          "Optional Tours & Activities"
        ],
        accommodation: "4 or 5-Star Hotel / Premium Cruise (if overnight)",
        meals: ["Breakfast", "Lunch"],
        importantNotes: [
          "Valid Passport required",
          "Comfortable walking shoes highly recommended",
          "Conservative dress code for religious sites",
          "Check visa requirements before traveling"
        ],
        cancellationPolicy: "Free cancellation up to 48 hours before the tour start time. Secure your spot with a flexible deposit.",
        pricingOptions: [
          { title: "Standard (4-Star)", price: 351, description: "Comfortable standard accommodation and priority group transfers." },
          { title: "Premium (5-Star)", price: 701, description: "Luxury accommodation and exclusive private transfers." }
        ],
        reviews: { rating: 4.9, count: 120 }
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
        itinerary: [
          { day: 1, title: "Arrival in Cairo", details: "Welcome to Egypt! Transfer to your hotel in Cairo to rest." },
          { day: 2, title: "Giza Pyramids & Saqqara", details: "Explore the Giza Plateau, the Sphinx, and the ancient Step Pyramid at Saqqara." },
          { day: 3, title: "Flight to Luxor & East Bank", details: "Fly to Luxor. Visit the massive Karnak Temple Complex and the beautifully illuminated Luxor Temple." },
          { day: 4, title: "Luxor West Bank & Return", details: "Cross to the West Bank: Valley of the Kings, Hatshepsut Temple, and Colossi of Memnon. Fly back to Cairo." },
          { day: 5, title: "Departure", details: "Transfer to Cairo Airport for your onward journey." }
        ],
        tourType: "Private & Guided Tour",
        availability: "Runs Everyday",
        pickupLocation: "Your Hotel or Arrival Terminal",
        dropoffLocation: "Your Hotel or Departure Terminal",
        pickupTime: "Flexible (Typically 08:00 AM)",
        guideLanguages: ["English", "Spanish", "French", "German"],
        highlights: [
          "Marvel at iconic ancient monuments and landmarks",
          "Learn from a professional Egyptologist guide",
          "Enjoy seamless, hassle-free transfers in A/C vehicles",
          "Experience the true culture and history of Egypt"
        ],
        included: [
          "Expert Tour Guide (Egyptologist)",
          "All Transfers by Private A/C Vehicle",
          "Hotel/Airport Pickup & Drop-off",
          "Entrance Fees to Sites",
          "Bottled Water & Snacks"
        ],
        excluded: [
          "International Flights & Airfare",
          "Entry Visa to Egypt",
          "Tipping (Gratuities)",
          "Optional Tours & Activities"
        ],
        accommodation: "4 or 5-Star Hotel / Premium Cruise (if overnight)",
        meals: ["Breakfast", "Lunch"],
        importantNotes: [
          "Valid Passport required",
          "Comfortable walking shoes highly recommended",
          "Conservative dress code for religious sites",
          "Check visa requirements before traveling"
        ],
        cancellationPolicy: "Free cancellation up to 48 hours before the tour start time. Secure your spot with a flexible deposit.",
        pricingOptions: [
          { title: "Standard (4-Star)", price: 481, description: "Comfortable standard accommodation and priority group transfers." },
          { title: "Premium (5-Star)", price: 831, description: "Luxury accommodation and exclusive private transfers." }
        ],
        reviews: { rating: 4.8, count: 150 }
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
        itinerary: [
          { day: 1, title: "Arrival in Cairo", details: "Transfer to your hotel. Optional evening sound and light show at the Pyramids." },
          { day: 2, title: "Pyramids & Egyptian Museum", details: "Full day exploring the Giza Pyramids, Sphinx, and the Egyptian Museum." },
          { day: 3, title: "Train/Flight to Aswan", details: "Travel to Aswan. Check into your Nile Cruise and visit the High Dam and Philae Temple." },
          { day: 4, title: "Kom Ombo & Edfu", details: "Sail to Kom Ombo to visit the double temple. Continue sailing to Edfu." },
          { day: 5, title: "Luxor East Bank", details: "Arrive in Luxor. Visit Karnak and Luxor Temples. Overnight on cruise." },
          { day: 6, title: "West Bank & Departure", details: "Disembark and visit the Valley of the Kings and Hatshepsut Temple before your departure flight." }
        ],
        tourType: "Private & Guided Tour",
        availability: "Runs Everyday",
        pickupLocation: "Your Hotel or Arrival Terminal",
        dropoffLocation: "Your Hotel or Departure Terminal",
        pickupTime: "Flexible (Typically 08:00 AM)",
        guideLanguages: ["English", "Spanish", "French", "German"],
        highlights: [
          "Marvel at iconic ancient monuments and landmarks",
          "Learn from a professional Egyptologist guide",
          "Enjoy seamless, hassle-free transfers in A/C vehicles",
          "Experience the true culture and history of Egypt"
        ],
        included: [
          "Expert Tour Guide (Egyptologist)",
          "All Transfers by Private A/C Vehicle",
          "Hotel/Airport Pickup & Drop-off",
          "Entrance Fees to Sites",
          "Bottled Water & Snacks"
        ],
        excluded: [
          "International Flights & Airfare",
          "Entry Visa to Egypt",
          "Tipping (Gratuities)",
          "Optional Tours & Activities"
        ],
        accommodation: "4 or 5-Star Hotel / Premium Cruise (if overnight)",
        meals: ["Breakfast", "Lunch"],
        importantNotes: [
          "Valid Passport required",
          "Comfortable walking shoes highly recommended",
          "Conservative dress code for religious sites",
          "Check visa requirements before traveling"
        ],
        cancellationPolicy: "Free cancellation up to 48 hours before the tour start time. Secure your spot with a flexible deposit.",
        pricingOptions: [
          { title: "Standard (4-Star)", price: 538, description: "Comfortable standard accommodation and priority group transfers." },
          { title: "Premium (5-Star)", price: 888, description: "Luxury accommodation and exclusive private transfers." }
        ],
        reviews: { rating: 4.6, count: 122 }
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
        itinerary: [
          { day: 1, title: "Cairo Arrival", details: "Arrive in Cairo and transfer to hotel." },
          { day: 2, title: "Giza Pyramids", details: "Morning tour of the Pyramids and Sphinx. Evening flight to Luxor." },
          { day: 3, title: "Luxor Temples", details: "Full day tour of Luxor East and West Banks. Evening transfer to Hurghada by private vehicle." },
          { day: 4, title: "Hurghada Relaxation", details: "Free day in Hurghada to enjoy the Red Sea beaches or optional snorkeling trip." },
          { day: 5, title: "Free Day in Hurghada", details: "Another day in paradise. Relax, swim, or dive." },
          { day: 6, title: "Return to Cairo & Departure", details: "Flight back to Cairo for your final departure." }
        ],
        tourType: "Private & Guided Tour",
        availability: "Runs Everyday",
        pickupLocation: "Your Hotel or Arrival Terminal",
        dropoffLocation: "Your Hotel or Departure Terminal",
        pickupTime: "Flexible (Typically 08:00 AM)",
        guideLanguages: ["English", "Spanish", "French", "German"],
        highlights: [
          "Marvel at iconic ancient monuments and landmarks",
          "Learn from a professional Egyptologist guide",
          "Enjoy seamless, hassle-free transfers in A/C vehicles",
          "Experience the true culture and history of Egypt"
        ],
        included: [
          "Expert Tour Guide (Egyptologist)",
          "All Transfers by Private A/C Vehicle",
          "Hotel/Airport Pickup & Drop-off",
          "Entrance Fees to Sites",
          "Bottled Water & Snacks"
        ],
        excluded: [
          "International Flights & Airfare",
          "Entry Visa to Egypt",
          "Tipping (Gratuities)",
          "Optional Tours & Activities"
        ],
        accommodation: "4 or 5-Star Hotel / Premium Cruise (if overnight)",
        meals: ["Breakfast", "Lunch"],
        importantNotes: [
          "Valid Passport required",
          "Comfortable walking shoes highly recommended",
          "Conservative dress code for religious sites",
          "Check visa requirements before traveling"
        ],
        cancellationPolicy: "Free cancellation up to 48 hours before the tour start time. Secure your spot with a flexible deposit.",
        pricingOptions: [
          { title: "Standard (4-Star)", price: 389, description: "Comfortable standard accommodation and priority group transfers." },
          { title: "Premium (5-Star)", price: 739, description: "Luxury accommodation and exclusive private transfers." }
        ],
        reviews: { rating: 4.9, count: 234 }
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
        itinerary: [
          { day: 1, title: "Welcome to Cairo", details: "Arrive and transfer to hotel." },
          { day: 2, title: "Cairo Tour & Flight to Aswan", details: "Visit Giza Pyramids and the Museum. Fly to Aswan and board your Nile Cruise." },
          { day: 3, title: "Sailing to Kom Ombo", details: "Visit Philae Temple. Sail to Kom Ombo and visit the Temple of Sobek and Haroeris." },
          { day: 4, title: "Edfu & Luxor Arrival", details: "Visit Edfu Temple by horse carriage. Sail to Luxor and explore Luxor Temple in the evening." },
          { day: 5, title: "Luxor West Bank & Return Flight", details: "Disembark. Visit Valley of the Kings. Evening flight back to Cairo." },
          { day: 6, title: "Final Departure", details: "Transfer to Cairo Airport." }
        ],
        tourType: "Private & Guided Tour",
        availability: "Runs Everyday",
        pickupLocation: "Your Hotel or Arrival Terminal",
        dropoffLocation: "Your Hotel or Departure Terminal",
        pickupTime: "Flexible (Typically 08:00 AM)",
        guideLanguages: ["English", "Spanish", "French", "German"],
        highlights: [
          "Marvel at iconic ancient monuments and landmarks",
          "Learn from a professional Egyptologist guide",
          "Enjoy seamless, hassle-free transfers in A/C vehicles",
          "Experience the true culture and history of Egypt"
        ],
        included: [
          "Expert Tour Guide (Egyptologist)",
          "All Transfers by Private A/C Vehicle",
          "Hotel/Airport Pickup & Drop-off",
          "Entrance Fees to Sites",
          "Bottled Water & Snacks"
        ],
        excluded: [
          "International Flights & Airfare",
          "Entry Visa to Egypt",
          "Tipping (Gratuities)",
          "Optional Tours & Activities"
        ],
        accommodation: "4 or 5-Star Hotel / Premium Cruise (if overnight)",
        meals: ["Breakfast", "Lunch"],
        importantNotes: [
          "Valid Passport required",
          "Comfortable walking shoes highly recommended",
          "Conservative dress code for religious sites",
          "Check visa requirements before traveling"
        ],
        cancellationPolicy: "Free cancellation up to 48 hours before the tour start time. Secure your spot with a flexible deposit.",
        pricingOptions: [
          { title: "Standard (4-Star)", price: 455, description: "Comfortable standard accommodation and priority group transfers." },
          { title: "Premium (5-Star)", price: 805, description: "Luxury accommodation and exclusive private transfers." }
        ],
        reviews: { rating: 4.9, count: 194 }
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
        itinerary: [
          { day: 1, title: "Arrival in Cairo", details: "Transfer to your hotel." },
          { day: 2, title: "Giza Pyramids", details: "Visit the Pyramids, Sphinx, and the Egyptian Museum. Take the overnight sleeper train to Aswan." },
          { day: 3, title: "Aswan Tour", details: "Arrive in Aswan. Check into hotel. Visit the High Dam, Unfinished Obelisk, and Philae Temple." },
          { day: 4, title: "Abu Simbel & Travel to Luxor", details: "Optional early morning to Abu Simbel. Travel by train or bus to Luxor." },
          { day: 5, title: "Luxor West Bank", details: "Explore Valley of the Kings, Hatshepsut Temple, and Colossi of Memnon." },
          { day: 6, title: "Karnak Temple & Train to Cairo", details: "Visit Karnak Temple. Overnight sleeper train back to Cairo." },
          { day: 7, title: "Departure", details: "Arrive in Cairo and transfer to the airport." }
        ],
        tourType: "Private & Guided Tour",
        availability: "Runs Everyday",
        pickupLocation: "Your Hotel or Arrival Terminal",
        dropoffLocation: "Your Hotel or Departure Terminal",
        pickupTime: "Flexible (Typically 08:00 AM)",
        guideLanguages: ["English", "Spanish", "French", "German"],
        highlights: [
          "Marvel at iconic ancient monuments and landmarks",
          "Learn from a professional Egyptologist guide",
          "Enjoy seamless, hassle-free transfers in A/C vehicles",
          "Experience the true culture and history of Egypt"
        ],
        included: [
          "Expert Tour Guide (Egyptologist)",
          "All Transfers by Private A/C Vehicle",
          "Hotel/Airport Pickup & Drop-off",
          "Entrance Fees to Sites",
          "Bottled Water & Snacks"
        ],
        excluded: [
          "International Flights & Airfare",
          "Entry Visa to Egypt",
          "Tipping (Gratuities)",
          "Optional Tours & Activities"
        ],
        accommodation: "4 or 5-Star Hotel / Premium Cruise (if overnight)",
        meals: ["Breakfast", "Lunch"],
        importantNotes: [
          "Valid Passport required",
          "Comfortable walking shoes highly recommended",
          "Conservative dress code for religious sites",
          "Check visa requirements before traveling"
        ],
        cancellationPolicy: "Free cancellation up to 48 hours before the tour start time. Secure your spot with a flexible deposit.",
        pricingOptions: [
          { title: "Standard (4-Star)", price: 492, description: "Comfortable standard accommodation and priority group transfers." },
          { title: "Premium (5-Star)", price: 842, description: "Luxury accommodation and exclusive private transfers." }
        ],
        reviews: { rating: 4.8, count: 236 }
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
        itinerary: [
          { day: 1, title: "Arrival", details: "Welcome to Cairo!" },
          { day: 2, title: "Cairo Landmarks", details: "Tour the Giza Pyramids and the Egyptian Museum. Overnight in Cairo." },
          { day: 3, title: "Flight to Aswan & Cruise Embarkation", details: "Fly to Aswan. Board your 5-star cruise and visit the Aswan High Dam and Philae Temple." },
          { day: 4, title: "Kom Ombo & Edfu", details: "Sail down the Nile, visiting the temples at Kom Ombo and Edfu." },
          { day: 5, title: "Luxor East Bank", details: "Arrive in Luxor. Visit Karnak and Luxor Temples." },
          { day: 6, title: "West Bank & Flight to Cairo", details: "Morning tour of the Valley of the Kings. Disembark and fly back to Cairo for your final night." },
          { day: 7, title: "Departure", details: "Transfer to the airport." }
        ],
        tourType: "Private & Guided Tour",
        availability: "Runs Everyday",
        pickupLocation: "Your Hotel or Arrival Terminal",
        dropoffLocation: "Your Hotel or Departure Terminal",
        pickupTime: "Flexible (Typically 08:00 AM)",
        guideLanguages: ["English", "Spanish", "French", "German"],
        highlights: [
          "Marvel at iconic ancient monuments and landmarks",
          "Learn from a professional Egyptologist guide",
          "Enjoy seamless, hassle-free transfers in A/C vehicles",
          "Experience the true culture and history of Egypt"
        ],
        included: [
          "Expert Tour Guide (Egyptologist)",
          "All Transfers by Private A/C Vehicle",
          "Hotel/Airport Pickup & Drop-off",
          "Entrance Fees to Sites",
          "Bottled Water & Snacks"
        ],
        excluded: [
          "International Flights & Airfare",
          "Entry Visa to Egypt",
          "Tipping (Gratuities)",
          "Optional Tours & Activities"
        ],
        accommodation: "4 or 5-Star Hotel / Premium Cruise (if overnight)",
        meals: ["Breakfast", "Lunch"],
        importantNotes: [
          "Valid Passport required",
          "Comfortable walking shoes highly recommended",
          "Conservative dress code for religious sites",
          "Check visa requirements before traveling"
        ],
        cancellationPolicy: "Free cancellation up to 48 hours before the tour start time. Secure your spot with a flexible deposit.",
        pricingOptions: [
          { title: "Standard (4-Star)", price: 597, description: "Comfortable standard accommodation and priority group transfers." },
          { title: "Premium (5-Star)", price: 947, description: "Luxury accommodation and exclusive private transfers." }
        ],
        reviews: { rating: 4.5, count: 223 }
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
        itinerary: [
          { day: 1, title: "Arrival in Cairo", details: "Transfer to your hotel and rest." },
          { day: 2, title: "Pyramids & Museum", details: "Visit the Pyramids, Sphinx, and the Egyptian Museum." },
          { day: 3, title: "Fly to Luxor & Cruise", details: "Fly to Luxor, board your cruise, and visit Karnak & Luxor Temples." },
          { day: 4, title: "Valley of the Kings", details: "Explore the West Bank, then sail to Edfu." },
          { day: 5, title: "Edfu & Kom Ombo", details: "Visit the Temple of Horus in Edfu and the twin temple in Kom Ombo." },
          { day: 6, title: "Aswan Sightseeing", details: "Arrive in Aswan. Visit Philae Temple and the High Dam." },
          { day: 7, title: "Abu Simbel & Fly to Cairo", details: "Optional Abu Simbel trip. Fly back to Cairo." },
          { day: 8, title: "Departure", details: "Transfer to Cairo Airport." }
        ],
        tourType: "Private & Guided Tour",
        availability: "Runs Everyday",
        pickupLocation: "Your Hotel or Arrival Terminal",
        dropoffLocation: "Your Hotel or Departure Terminal",
        pickupTime: "Flexible (Typically 08:00 AM)",
        guideLanguages: ["English", "Spanish", "French", "German"],
        highlights: [
          "Marvel at iconic ancient monuments and landmarks",
          "Learn from a professional Egyptologist guide",
          "Enjoy seamless, hassle-free transfers in A/C vehicles",
          "Experience the true culture and history of Egypt"
        ],
        included: [
          "Expert Tour Guide (Egyptologist)",
          "All Transfers by Private A/C Vehicle",
          "Hotel/Airport Pickup & Drop-off",
          "Entrance Fees to Sites",
          "Bottled Water & Snacks"
        ],
        excluded: [
          "International Flights & Airfare",
          "Entry Visa to Egypt",
          "Tipping (Gratuities)",
          "Optional Tours & Activities"
        ],
        accommodation: "4 or 5-Star Hotel / Premium Cruise (if overnight)",
        meals: ["Breakfast", "Lunch"],
        importantNotes: [
          "Valid Passport required",
          "Comfortable walking shoes highly recommended",
          "Conservative dress code for religious sites",
          "Check visa requirements before traveling"
        ],
        cancellationPolicy: "Free cancellation up to 48 hours before the tour start time. Secure your spot with a flexible deposit.",
        pricingOptions: [
          { title: "Standard (4-Star)", price: 486, description: "Comfortable standard accommodation and priority group transfers." },
          { title: "Premium (5-Star)", price: 836, description: "Luxury accommodation and exclusive private transfers." }
        ],
        reviews: { rating: 4.9, count: 83 }
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
        itinerary: [
          { day: 1, title: "Arrival in Cairo", details: "Arrive and transfer to hotel." },
          { day: 2, title: "Cairo Highlights", details: "Giza Pyramids and Egyptian Museum." },
          { day: 3, title: "Fly to Aswan", details: "Fly to Aswan. Check into hotel and visit Philae Temple." },
          { day: 4, title: "Abu Simbel Trip", details: "Early morning drive or flight to Abu Simbel. Return to Aswan." },
          { day: 5, title: "Travel to Luxor", details: "Travel to Luxor via train/vehicle. Visit Luxor Temple." },
          { day: 6, title: "Luxor West Bank", details: "Valley of the Kings, Hatshepsut Temple. Fly back to Cairo." },
          { day: 7, title: "Old Cairo Tour", details: "Explore Islamic and Coptic Cairo and Khan El Khalili market." },
          { day: 8, title: "Departure", details: "Transfer to the airport." }
        ],
        tourType: "Private & Guided Tour",
        availability: "Runs Everyday",
        pickupLocation: "Your Hotel or Arrival Terminal",
        dropoffLocation: "Your Hotel or Departure Terminal",
        pickupTime: "Flexible (Typically 08:00 AM)",
        guideLanguages: ["English", "Spanish", "French", "German"],
        highlights: [
          "Marvel at iconic ancient monuments and landmarks",
          "Learn from a professional Egyptologist guide",
          "Enjoy seamless, hassle-free transfers in A/C vehicles",
          "Experience the true culture and history of Egypt"
        ],
        included: [
          "Expert Tour Guide (Egyptologist)",
          "All Transfers by Private A/C Vehicle",
          "Hotel/Airport Pickup & Drop-off",
          "Entrance Fees to Sites",
          "Bottled Water & Snacks"
        ],
        excluded: [
          "International Flights & Airfare",
          "Entry Visa to Egypt",
          "Tipping (Gratuities)",
          "Optional Tours & Activities"
        ],
        accommodation: "4 or 5-Star Hotel / Premium Cruise (if overnight)",
        meals: ["Breakfast", "Lunch"],
        importantNotes: [
          "Valid Passport required",
          "Comfortable walking shoes highly recommended",
          "Conservative dress code for religious sites",
          "Check visa requirements before traveling"
        ],
        cancellationPolicy: "Free cancellation up to 48 hours before the tour start time. Secure your spot with a flexible deposit.",
        pricingOptions: [
          { title: "Standard (4-Star)", price: 313, description: "Comfortable standard accommodation and priority group transfers." },
          { title: "Premium (5-Star)", price: 663, description: "Luxury accommodation and exclusive private transfers." }
        ],
        reviews: { rating: 4.8, count: 103 }
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
        itinerary: [
          { day: 1, title: "Cairo Arrival", details: "VIP meet and greet at the airport." },
          { day: 2, title: "Giza & Sakkara", details: "Private tour of the Pyramids and the Step Pyramid of Djoser." },
          { day: 3, title: "Cairo Museum & Citadel", details: "Discover the Egyptian Museum and Saladin Citadel." },
          { day: 4, title: "Fly to Luxor & Cruise", details: "Fly to Luxor, board luxury cruise, visit East Bank." },
          { day: 5, title: "Luxor West Bank", details: "Explore the Valley of the Kings. Sail to Edfu." },
          { day: 6, title: "Edfu & Kom Ombo", details: "Explore historical temples along the Nile." },
          { day: 7, title: "Aswan & Philae", details: "Arrive in Aswan, visit Philae Temple." },
          { day: 8, title: "Abu Simbel & Fly to Cairo", details: "Visit Abu Simbel, then take a late flight back to Cairo." },
          { day: 9, title: "Departure", details: "Private transfer to the airport." }
        ],
        tourType: "Private & Guided Tour",
        availability: "Runs Everyday",
        pickupLocation: "Your Hotel or Arrival Terminal",
        dropoffLocation: "Your Hotel or Departure Terminal",
        pickupTime: "Flexible (Typically 08:00 AM)",
        guideLanguages: ["English", "Spanish", "French", "German"],
        highlights: [
          "Marvel at iconic ancient monuments and landmarks",
          "Learn from a professional Egyptologist guide",
          "Enjoy seamless, hassle-free transfers in A/C vehicles",
          "Experience the true culture and history of Egypt"
        ],
        included: [
          "Expert Tour Guide (Egyptologist)",
          "All Transfers by Private A/C Vehicle",
          "Hotel/Airport Pickup & Drop-off",
          "Entrance Fees to Sites",
          "Bottled Water & Snacks"
        ],
        excluded: [
          "International Flights & Airfare",
          "Entry Visa to Egypt",
          "Tipping (Gratuities)",
          "Optional Tours & Activities"
        ],
        accommodation: "4 or 5-Star Hotel / Premium Cruise (if overnight)",
        meals: ["Breakfast", "Lunch"],
        importantNotes: [
          "Valid Passport required",
          "Comfortable walking shoes highly recommended",
          "Conservative dress code for religious sites",
          "Check visa requirements before traveling"
        ],
        cancellationPolicy: "Free cancellation up to 48 hours before the tour start time. Secure your spot with a flexible deposit.",
        pricingOptions: [
          { title: "Standard (4-Star)", price: 519, description: "Comfortable standard accommodation and priority group transfers." },
          { title: "Premium (5-Star)", price: 869, description: "Luxury accommodation and exclusive private transfers." }
        ],
        reviews: { rating: 4.6, count: 79 }
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
        itinerary: [
           { day: 1, title: "Cairo Arrival", details: "Arrive in Cairo and transfer to hotel." },
           { day: 2, title: "Cairo Highlights", details: "Pyramids and Egyptian Museum." },
           { day: 3, title: "Fly to Luxor - Embark Cruise", details: "Board your Nile cruise ship in Luxor." },
           { day: 4, title: "Luxor West Bank to Edfu", details: "Valley of the Kings, sail to Edfu." },
           { day: 5, title: "Edfu to Kom Ombo", details: "Visit Edfu and Kom Ombo temples, sail to Aswan." },
           { day: 6, title: "Aswan Highlights", details: "Philae Temple and High Dam." },
           { day: 7, title: "Disembark - Travel to Red Sea", details: "Disembark and drive to Hurghada or Marsa Alam." },
           { day: 8, title: "Red Sea Relaxation", details: "Free day at the beach." },
           { day: 9, title: "Fly to Cairo & Depart", details: "Morning flight to Cairo to connect with your international departure." }
        ],
        tourType: "Private & Guided Tour",
        availability: "Runs Everyday",
        pickupLocation: "Your Hotel or Arrival Terminal",
        dropoffLocation: "Your Hotel or Departure Terminal",
        pickupTime: "Flexible (Typically 08:00 AM)",
        guideLanguages: ["English", "Spanish", "French", "German"],
        highlights: [
          "Marvel at iconic ancient monuments and landmarks",
          "Learn from a professional Egyptologist guide",
          "Enjoy seamless, hassle-free transfers in A/C vehicles",
          "Experience the true culture and history of Egypt"
        ],
        included: [
          "Expert Tour Guide (Egyptologist)",
          "All Transfers by Private A/C Vehicle",
          "Hotel/Airport Pickup & Drop-off",
          "Entrance Fees to Sites",
          "Bottled Water & Snacks"
        ],
        excluded: [
          "International Flights & Airfare",
          "Entry Visa to Egypt",
          "Tipping (Gratuities)",
          "Optional Tours & Activities"
        ],
        accommodation: "4 or 5-Star Hotel / Premium Cruise (if overnight)",
        meals: ["Breakfast", "Lunch"],
        importantNotes: [
          "Valid Passport required",
          "Comfortable walking shoes highly recommended",
          "Conservative dress code for religious sites",
          "Check visa requirements before traveling"
        ],
        cancellationPolicy: "Free cancellation up to 48 hours before the tour start time. Secure your spot with a flexible deposit.",
        pricingOptions: [
          { title: "Standard (4-Star)", price: 536, description: "Comfortable standard accommodation and priority group transfers." },
          { title: "Premium (5-Star)", price: 886, description: "Luxury accommodation and exclusive private transfers." }
        ],
        reviews: { rating: 4.5, count: 143 }
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
        itinerary: [
          { day: 1, title: "Arrival", details: "Welcome to Cairo!" },
          { day: 2, title: "Cairo Tour", details: "Giza Pyramids and Sphinx." },
          { day: 3, title: "Alexandria Trip", details: "Day trip to the Mediterranean city of Alexandria." },
          { day: 4, title: "Fly to Aswan", details: "Fly to Aswan, board your Nile Cruise." },
          { day: 5, title: "Kom Ombo & Edfu", details: "Sail down the Nile visiting ancient temples." },
          { day: 6, title: "Luxor East Bank", details: "Arrive in Luxor, visit Karnak." },
          { day: 7, title: "Luxor West Bank & Hurghada", details: "Valley of the Kings, then drive to Hurghada." },
          { day: 8, title: "Hurghada Relaxation", details: "Free day." },
          { day: 9, title: "Hurghada Relaxation", details: "Free day." },
          { day: 10, title: "Fly to Cairo & Depart", details: "Fly back to Cairo for departure." }
        ],
        tourType: "Private & Guided Tour",
        availability: "Runs Everyday",
        pickupLocation: "Your Hotel or Arrival Terminal",
        dropoffLocation: "Your Hotel or Departure Terminal",
        pickupTime: "Flexible (Typically 08:00 AM)",
        guideLanguages: ["English", "Spanish", "French", "German"],
        highlights: [
          "Marvel at iconic ancient monuments and landmarks",
          "Learn from a professional Egyptologist guide",
          "Enjoy seamless, hassle-free transfers in A/C vehicles",
          "Experience the true culture and history of Egypt"
        ],
        included: [
          "Expert Tour Guide (Egyptologist)",
          "All Transfers by Private A/C Vehicle",
          "Hotel/Airport Pickup & Drop-off",
          "Entrance Fees to Sites",
          "Bottled Water & Snacks"
        ],
        excluded: [
          "International Flights & Airfare",
          "Entry Visa to Egypt",
          "Tipping (Gratuities)",
          "Optional Tours & Activities"
        ],
        accommodation: "4 or 5-Star Hotel / Premium Cruise (if overnight)",
        meals: ["Breakfast", "Lunch"],
        importantNotes: [
          "Valid Passport required",
          "Comfortable walking shoes highly recommended",
          "Conservative dress code for religious sites",
          "Check visa requirements before traveling"
        ],
        cancellationPolicy: "Free cancellation up to 48 hours before the tour start time. Secure your spot with a flexible deposit.",
        pricingOptions: [
          { title: "Standard (4-Star)", price: 378, description: "Comfortable standard accommodation and priority group transfers." },
          { title: "Premium (5-Star)", price: 728, description: "Luxury accommodation and exclusive private transfers." }
        ],
        reviews: { rating: 4.9, count: 91 }
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
        itinerary: [
           { day: 1, title: "Cairo Arrival", details: "Transfer to your hotel." },
           { day: 2, title: "Pyramids & Egyptian Museum", details: "Guided Cairo tour." },
           { day: 3, title: "Fly to Luxor - Cruise Embarkation", details: "Fly to Luxor, visit East Bank." },
           { day: 4, title: "West Bank", details: "Valley of the Kings, sail to Edfu." },
           { day: 5, title: "Edfu & Kom Ombo", details: "Temple visits, sail to Aswan." },
           { day: 6, title: "Aswan Tour", details: "Philae Temple, High Dam." },
           { day: 7, title: "Disembark - Transfer to Hurghada", details: "Drive across the Eastern Desert to Hurghada." },
           { day: 8, title: "Hurghada", details: "Beach and snorkeling." },
           { day: 9, title: "Hurghada", details: "Beach and snorkeling." },
           { day: 10, title: "Fly to Cairo & Departure", details: "Transfer to the airport." }
        ],
        tourType: "Private & Guided Tour",
        availability: "Runs Everyday",
        pickupLocation: "Your Hotel or Arrival Terminal",
        dropoffLocation: "Your Hotel or Departure Terminal",
        pickupTime: "Flexible (Typically 08:00 AM)",
        guideLanguages: ["English", "Spanish", "French", "German"],
        highlights: [
          "Marvel at iconic ancient monuments and landmarks",
          "Learn from a professional Egyptologist guide",
          "Enjoy seamless, hassle-free transfers in A/C vehicles",
          "Experience the true culture and history of Egypt"
        ],
        included: [
          "Expert Tour Guide (Egyptologist)",
          "All Transfers by Private A/C Vehicle",
          "Hotel/Airport Pickup & Drop-off",
          "Entrance Fees to Sites",
          "Bottled Water & Snacks"
        ],
        excluded: [
          "International Flights & Airfare",
          "Entry Visa to Egypt",
          "Tipping (Gratuities)",
          "Optional Tours & Activities"
        ],
        accommodation: "4 or 5-Star Hotel / Premium Cruise (if overnight)",
        meals: ["Breakfast", "Lunch"],
        importantNotes: [
          "Valid Passport required",
          "Comfortable walking shoes highly recommended",
          "Conservative dress code for religious sites",
          "Check visa requirements before traveling"
        ],
        cancellationPolicy: "Free cancellation up to 48 hours before the tour start time. Secure your spot with a flexible deposit.",
        pricingOptions: [
          { title: "Standard (4-Star)", price: 532, description: "Comfortable standard accommodation and priority group transfers." },
          { title: "Premium (5-Star)", price: 882, description: "Luxury accommodation and exclusive private transfers." }
        ],
        reviews: { rating: 4.7, count: 236 }
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
        itinerary: [
          { day: 1, title: "Arrival", details: "Arrive in Cairo." },
          { day: 2, title: "Cairo Tour", details: "Giza Pyramids and the Egyptian Museum." },
          { day: 3, title: "Old Cairo", details: "Citadel, Coptic Cairo, Khan el-Khalili." },
          { day: 4, title: "Fly to Aswan", details: "Board Cruise, visit Philae." },
          { day: 5, title: "Abu Simbel", details: "Trip to Abu Simbel, afternoon sailing." },
          { day: 6, title: "Kom Ombo & Edfu", details: "Classic Nile temples." },
          { day: 7, title: "Luxor East Bank", details: "Arrive in Luxor, Karnak & Luxor Temples." },
          { day: 8, title: "Luxor West Bank & Hurghada", details: "Valley of the Kings, drive to Red Sea." },
          { day: 9, title: "Red Sea", details: "Relax in Hurghada." },
          { day: 10, title: "Red Sea", details: "Relax in Hurghada." },
          { day: 11, title: "Departure", details: "Fly to Cairo and connect to your departing flight." }
        ],
        tourType: "Private & Guided Tour",
        availability: "Runs Everyday",
        pickupLocation: "Your Hotel or Arrival Terminal",
        dropoffLocation: "Your Hotel or Departure Terminal",
        pickupTime: "Flexible (Typically 08:00 AM)",
        guideLanguages: ["English", "Spanish", "French", "German"],
        highlights: [
          "Marvel at iconic ancient monuments and landmarks",
          "Learn from a professional Egyptologist guide",
          "Enjoy seamless, hassle-free transfers in A/C vehicles",
          "Experience the true culture and history of Egypt"
        ],
        included: [
          "Expert Tour Guide (Egyptologist)",
          "All Transfers by Private A/C Vehicle",
          "Hotel/Airport Pickup & Drop-off",
          "Entrance Fees to Sites",
          "Bottled Water & Snacks"
        ],
        excluded: [
          "International Flights & Airfare",
          "Entry Visa to Egypt",
          "Tipping (Gratuities)",
          "Optional Tours & Activities"
        ],
        accommodation: "4 or 5-Star Hotel / Premium Cruise (if overnight)",
        meals: ["Breakfast", "Lunch"],
        importantNotes: [
          "Valid Passport required",
          "Comfortable walking shoes highly recommended",
          "Conservative dress code for religious sites",
          "Check visa requirements before traveling"
        ],
        cancellationPolicy: "Free cancellation up to 48 hours before the tour start time. Secure your spot with a flexible deposit.",
        pricingOptions: [
          { title: "Standard (4-Star)", price: 523, description: "Comfortable standard accommodation and priority group transfers." },
          { title: "Premium (5-Star)", price: 873, description: "Luxury accommodation and exclusive private transfers." }
        ],
        reviews: { rating: 4.5, count: 113 }
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
        itinerary: [
            { day: 1, title: "Arrival", details: "Arrive in Cairo." },
            { day: 2, title: "Cairo Tour", details: "Pyramids and Sphinx." },
            { day: 3, title: "Alexandria", details: "Full day tour to Alexandria, return to Cairo." },
            { day: 4, title: "Islamic & Coptic Cairo", details: "Deep dive into Cairo's history." },
            { day: 5, title: "Fly to Aswan", details: "Board Nile Cruise, visit Philae." },
            { day: 6, title: "Abu Simbel", details: "Excursion to Abu Simbel." },
            { day: 7, title: "Kom Ombo & Edfu", details: "Sail and visit temples." },
            { day: 8, title: "Luxor East Bank", details: "Karnak & Luxor temples." },
            { day: 9, title: "Luxor West Bank", details: "Valley of the Kings. Stay in Luxor." },
            { day: 10, title: "Red Sea / Hurghada", details: "Drive to Hurghada by the Red Sea." },
            { day: 11, title: "Relaxation", details: "Free day in Hurghada." },
            { day: 12, title: "Departure", details: "Fly back to Cairo and depart." }
        ],
        tourType: "Private & Guided Tour",
        availability: "Runs Everyday",
        pickupLocation: "Your Hotel or Arrival Terminal",
        dropoffLocation: "Your Hotel or Departure Terminal",
        pickupTime: "Flexible (Typically 08:00 AM)",
        guideLanguages: ["English", "Spanish", "French", "German"],
        highlights: [
          "Marvel at iconic ancient monuments and landmarks",
          "Learn from a professional Egyptologist guide",
          "Enjoy seamless, hassle-free transfers in A/C vehicles",
          "Experience the true culture and history of Egypt"
        ],
        included: [
          "Expert Tour Guide (Egyptologist)",
          "All Transfers by Private A/C Vehicle",
          "Hotel/Airport Pickup & Drop-off",
          "Entrance Fees to Sites",
          "Bottled Water & Snacks"
        ],
        excluded: [
          "International Flights & Airfare",
          "Entry Visa to Egypt",
          "Tipping (Gratuities)",
          "Optional Tours & Activities"
        ],
        accommodation: "4 or 5-Star Hotel / Premium Cruise (if overnight)",
        meals: ["Breakfast", "Lunch"],
        importantNotes: [
          "Valid Passport required",
          "Comfortable walking shoes highly recommended",
          "Conservative dress code for religious sites",
          "Check visa requirements before traveling"
        ],
        cancellationPolicy: "Free cancellation up to 48 hours before the tour start time. Secure your spot with a flexible deposit.",
        pricingOptions: [
          { title: "Standard (4-Star)", price: 406, description: "Comfortable standard accommodation and priority group transfers." },
          { title: "Premium (5-Star)", price: 756, description: "Luxury accommodation and exclusive private transfers." }
        ],
        reviews: { rating: 4.7, count: 72 }
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
        itinerary: [
           { day: 1, title: "Arrival in Cairo", details: "Welcome to Egypt." },
           { day: 2, title: "Pyramids & Sphinx", details: "Giza plateau tour." },
           { day: 3, title: "Fly to Luxor & Cruise", details: "Start your Nile Cruise in Luxor." },
           { day: 4, title: "Luxor to Edfu", details: "Valley of the Kings, sail up the Nile." },
           { day: 5, title: "Edfu to Aswan", details: "Visit temples, arrive in Aswan." },
           { day: 6, title: "Aswan Highlights", details: "Philae Temple, fly back to Cairo." },
           { day: 7, title: "Fly to Amman, Jordan", details: "Arrive in Amman, transfer to hotel." },
           { day: 8, title: "Jerash & Amman City Tour", details: "Explore Roman ruins and the capital." },
           { day: 9, title: "Mt Nebo & Madaba", details: "Travel the King's Highway to Petra." },
           { day: 10, title: "Petra Full Day", details: "Explore the Rose Red City." },
           { day: 11, title: "Wadi Rum", details: "4x4 desert safari in Wadi Rum." },
           { day: 12, title: "Aqaba", details: "Relax by the Red Sea in Jordan." },
           { day: 13, title: "The Dead Sea", details: "Float in the salty waters of the Dead Sea." },
           { day: 14, title: "Departure", details: "Transfer to Amman airport for departure." }
        ],
        tourType: "Private & Guided Tour",
        availability: "Runs Everyday",
        pickupLocation: "Your Hotel or Arrival Terminal",
        dropoffLocation: "Your Hotel or Departure Terminal",
        pickupTime: "Flexible (Typically 08:00 AM)",
        guideLanguages: ["English", "Spanish", "French", "German"],
        highlights: [
          "Marvel at iconic ancient monuments and landmarks",
          "Learn from a professional Egyptologist guide",
          "Enjoy seamless, hassle-free transfers in A/C vehicles",
          "Experience the true culture and history of Egypt"
        ],
        included: [
          "Expert Tour Guide (Egyptologist)",
          "All Transfers by Private A/C Vehicle",
          "Hotel/Airport Pickup & Drop-off",
          "Entrance Fees to Sites",
          "Bottled Water & Snacks"
        ],
        excluded: [
          "International Flights & Airfare",
          "Entry Visa to Egypt",
          "Tipping (Gratuities)",
          "Optional Tours & Activities"
        ],
        accommodation: "4 or 5-Star Hotel / Premium Cruise (if overnight)",
        meals: ["Breakfast", "Lunch"],
        importantNotes: [
          "Valid Passport required",
          "Comfortable walking shoes highly recommended",
          "Conservative dress code for religious sites",
          "Check visa requirements before traveling"
        ],
        cancellationPolicy: "Free cancellation up to 48 hours before the tour start time. Secure your spot with a flexible deposit.",
        pricingOptions: [
          { title: "Standard (4-Star)", price: 393, description: "Comfortable standard accommodation and priority group transfers." },
          { title: "Premium (5-Star)", price: 743, description: "Luxury accommodation and exclusive private transfers." }
        ],
        reviews: { rating: 4.5, count: 211 }
      },
      {
        title: "Egypt Romantic Holiday- Nile Cruise & Sharm El Sheikh",
        duration: "12 Days / 11 Nights",
        durationDays: 12,
        image: "https://images.unsplash.com/photo-1544413647-79f04ca38247?q=80&w=1470&auto=format&fit=crop",
        description: "Experience the ultimate romantic getaway with a magical Nile cruise combined with the sun-drenched beaches of Sharm El Sheikh.",
        tags: ["Honeymoon", "Nile Cruise", "Beach", "Romantic"],
        category: "Honeymoon",
        isPremium: true,
        price: 3140,
        itinerary: [
          { day: 1, title: "Arrival in Cairo", details: "Welcome to Egypt! Transfer to your luxury hotel and enjoy a romantic welcome dinner." },
          { day: 2, title: "Giza Pyramids & Sphinx", details: "Visit the Great Pyramids and the Sphinx. Optional sunset camel ride for two." },
          { day: 3, title: "Cairo Museums", details: "Explore the Egyptian Museum and the treasures of King Tutankhamun." },
          { day: 4, title: "Fly to Aswan - Board Cruise", details: "Fly to Aswan and board your 5-star Nile cruise. Visit Philae Temple." },
          { day: 5, title: "Kom Ombo & Edfu", details: "Sail to Kom Ombo and Edfu, exploring the riverbank temples." },
          { day: 6, title: "Luxor East Bank", details: "Arrive in Luxor. Visit Karnak and Luxor Temples in the evening." },
          { day: 7, title: "Luxor West Bank", details: "Explore the Valley of the Kings and Hatshepsut Temple." },
          { day: 8, title: "Fly to Sharm El Sheikh", details: "Disembark and fly to the beautiful resort city of Sharm El Sheikh." },
          { day: 9, title: "Relaxation in Sharm", details: "Free day to enjoy the beaches or a professional couple's spa treatment." },
          { day: 10, title: "Red Sea Adventure", details: "Optional snorkeling or glass-bottom boat tour to see vibrant coral reefs." },
          { day: 11, title: "Free Day", details: "Enjoy the luxury of your resort or explore the Naama Bay promenade." },
          { day: 12, title: "Departure", details: "Fly back to Cairo for your international departure." }
        ],
        tourType: "Private & Romantic Tour",
        availability: "Runs Everyday",
        pickupLocation: "Cairo International Airport",
        highlights: [
          "5-Star luxury Nile cruise experience",
          "Private tours of ancient Egyptian landmarks",
          "Romantic beach stay in Sharm El Sheikh",
          "VIP transfers and special honeymoon amenities"
        ],
        included: ["5-Star Hotel & Cruise", "Domestic Flights", "Private Egyptologist Guide", "Honeymoon special setup"],
        excluded: ["International airfare", "Tipping", "Optional excursions"],
        cancellationPolicy: "Free cancellation up to 30 days before departure.",
        reviews: { rating: 5.0, count: 48 }
      },
      {
        title: "Egypt Romantic Vacation- Nile & The Red Sea",
        duration: "15 Days / 14 Nights",
        durationDays: 15,
        image: "https://images.unsplash.com/photo-1512100356132-d3224d4586d3?q=80&w=1470&auto=format&fit=crop",
        description: "A grand 15-day romantic odyssey covering the best of Egypt, from the ancient wonders of Cairo to the serenity of a Nile cruise and the tropical paradise of the Red Sea.",
        tags: ["Grand Tour", "Red Sea", "Nile Cruise", "Honeymoon", "Romantic"],
        category: "Honeymoon",
        isPremium: true,
        price: 3895,
        itinerary: [
          { day: 1, title: "Cairo Arrival", details: "Transfer to your luxury Nile-view hotel." },
          { day: 2, title: "Pyramids of Giza", details: "Full day tour including Great Pyramids and Sphinx." },
          { day: 3, title: "Old Cairo & Bazaar", details: "Visit the Citadel and Khan El Khalili market." },
          { day: 4, title: "Fly to Aswan", details: "Visit Philae Temple and board the cruise." },
          { day: 5, title: "Abu Simbel Excursion", details: "Optional trip to the magnificent temples of Ramses II." },
          { day: 6, title: "Kom Ombo & Edfu", details: "Explore unique temples along the Nile." },
          { day: 7, title: "Luxor East Bank", details: "Karnak Temple and Luxor Temple." },
          { day: 8, title: "Luxor West Bank", details: "Valley of the Kings and Hatshepsut Temple." },
          { day: 9, title: "Drive to Hurghada", details: "Private transfer to your Red Sea resort." },
          { day: 10, title: "Red Sea Relaxation", details: "Enjoy the beach and resort facilities." },
          { day: 11, title: "Red Sea Relaxation", details: "Free time or optional water sports." },
          { day: 12, title: "Red Sea Relaxation", details: "Optional boat trip to Giftun Island." },
          { day: 13, title: "Red Sea Relaxation", details: "Free time for spa or beach activities." },
          { day: 14, title: "Fly to Cairo", details: "Late flight to Cairo for your final night." },
          { day: 15, title: "Departure", details: "Transfer to the airport for departure." }
        ],
        tourType: "Private & Guided Tour",
        availability: "Runs Everyday",
        pickupLocation: "Cairo International Airport",
        highlights: [
          "Comprehensive 15-day itinerary",
          "Luxury 5-star accommodations throughout",
          "Balanced mix of history and relaxation",
          "Expert private Egyptologist guides"
        ],
        included: ["All accommodations", "Domestic flights", "Nile Cruise", "Private transfers", "Most meals"],
        excluded: ["Visa", "International travel", "Tipping"],
        cancellationPolicy: "Flexible cancellation up to 45 days before departure.",
        reviews: { rating: 4.9, count: 62 }
      },
      {
        title: "Beauty of The Nile Tour",
        duration: "12 Days / 11 Nights",
        durationDays: 12,
        image: "https://images.unsplash.com/photo-1544413647-79f04ca38247?q=80&w=1470&auto=format&fit=crop",
        description: "An elegant and culturally rich journey focusing on the timeless beauty of the Nile River and the monumental history that lines its banks.",
        tags: ["Culture", "Nile", "History", "Classic", "Honeymoon", "Romantic"],
        category: "Honeymoon",
        isPremium: false,
        price: 2690,
        itinerary: [
          { day: 1, title: "Arrive Cairo", details: "Transfer to your hotel." },
          { day: 2, title: "Giza Plateau", details: "Visit the Pyramids, Sphinx, and the solar boat museum." },
          { day: 3, title: "Memphis & Saqqara", details: "Explore the ancient capital and the Step Pyramid." },
          { day: 4, title: "Fly to Luxor", details: "Check into your hotel and visit Luxor Temple at night." },
          { day: 5, title: "Karnak & East Bank", details: "Explore the vast Karnak Temple complex." },
          { day: 6, title: "West Bank Wonders", details: "Valley of the Kings and Valley of the Queens." },
          { day: 7, title: "Drive to Aswan", details: "Stop at Edfu and Kom Ombo temples en route." },
          { day: 8, title: "Aswan Highlights", details: "Visit Philae Temple, the High Dam, and take a felucca ride." },
          { day: 9, title: "Free Day in Aswan", details: "Optional trip to Abu Simbel." },
          { day: 10, title: "Fly to Cairo", details: "Evening flight back to the capital." },
          { day: 11, title: "Museums of Cairo", details: "National Museum of Egyptian Civilization and Egyptian Museum." },
          { day: 12, title: "Departure", details: "Transfer to Cairo Airport." }
        ],
        tourType: "Guided Tour",
        availability: "Weekly Departures",
        pickupLocation: "Your Cairo Hotel",
        highlights: [
          "In-depth exploration of Nile valley heritage",
          "Expert guided tours of both East and West Banks",
          "Scenic felucca ride at sunset",
          "Visits to multiple UNESCO World Heritage sites"
        ],
        included: ["Boutique hotels", "Domestic airfare", "Private guide", "Entrance fees"],
        excluded: ["Tipping", "Personal items", "Lunches and dinners in cities"],
        cancellationPolicy: "Standard cancellation policy applies.",
        reviews: { rating: 4.8, count: 34 }
      },
      {
        title: "Egypt Luxury Honeymoon Holiday",
        duration: "14 Days / 13 Nights",
        durationDays: 14,
        image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1471&auto=format&fit=crop",
        description: "Indulge in pure luxury with this 14-day dedicated honeymoon experience, featuring only the finest resorts and a private cruise section.",
        tags: ["Luxury", "Honeymoon", "Private", "Elite", "Romantic"],
        category: "Honeymoon",
        isPremium: true,
        price: 2960,
        itinerary: [
          { day: 1, title: "VIP Arrival", details: "Fast-track airport clearance and private limousine transfer." },
          { day: 2, title: "Pyramids Private Viewing", details: "Sunset access to a private area overlooking the pyramids." },
          { day: 3, title: "Gourmet Cairo", details: "Luxury morning tour followed by a sunset dinner on a private boat." },
          { day: 4, title: "Luxury Nile Cruise", details: "Board a high-end small ship or Dahabiya for a private experience." },
          { day: 5, title: "Nile Discovery", details: "Visit exclusive archaeological sites away from the crowds." },
          { day: 6, title: "River Bliss", details: "Relax on deck as you sail towards Aswan." },
          { day: 7, title: "Aswan Romance", details: "Stay at the legendary Old Cataract Hotel." },
          { day: 8, title: "Fly to the Coast", details: "Private transfer for your flight to the Red Sea." },
          { day: 9, title: "Coastal Luxury", details: "Enjoy your private overwater bungalow or sea-view suite." },
          { day: 10, title: "Private Yacht Charter", details: "Full day on a private yacht with a dedicated chef." },
          { day: 11, title: "Spa & Wellness", details: "Full day of couple's wellness treatments." },
          { day: 12, title: "Beach Relaxation", details: "Unwind on the private crystalline shores." },
          { day: 13, title: "Fly to Cairo", details: "Return to Cairo for a final luxury celebratory dinner." },
          { day: 14, title: "Departure", details: "Private transfer to the airport." }
        ],
        tourType: "Ultra-Luxury Private Tour",
        availability: "On-Request Only",
        pickupLocation: "Cairo Airport (VIP)",
        highlights: [
          "Stay at legendary and boutique luxury properties",
          "Private experiences and exclusive site access",
          "Dedicated 24/7 concierge service",
          "Private yacht and limousine transfers"
        ],
        included: ["All inclusive luxury stay", "Private yacht", "VIP airport services", "Special photography session"],
        excluded: ["International travel", "Personal shopping"],
        cancellationPolicy: "Strict but fair - please inquire for details.",
        reviews: { rating: 5.0, count: 21 }
      },
      {
        title: "Long Nile Cruise from Cairo to Aswan",
        duration: "15 Days / 14 Nights",
        durationDays: 15,
        image: "https://images.unsplash.com/photo-1544413647-79f04ca38247?q=80&w=1470&auto=format&fit=crop",
        description: "The rarest of Egyptian experiences: a full 15-day cruise starting from Cairo and sailing all the way south to Aswan, visiting the rarely seen sites of Middle Egypt.",
        tags: ["Rare", "Epic", "Nile Cruise", "Deep History", "Honeymoon", "Romantic"],
        category: "Honeymoon",
        isPremium: true,
        price: 3735,
        itinerary: [
          { day: 1, title: "Cairo Embarkation", details: "Board your vessel in Cairo for this unique journey." },
          { day: 2, title: "Cairo Sites", details: "Visit the Pyramids while your ship is docked in the capital." },
          { day: 3, title: "Sailing South", details: "Begin the journey south through the lush Nile valley." },
          { day: 4, title: "Beni Suef", details: "Visit the Meidum Pyramid, a rarely visited gem." },
          { day: 5, title: "Minia Sites", details: "Explore the rock-cut tombs of Beni Hassan." },
          { day: 6, title: "Tell El Amarna", details: "Visit the capital of the heretic king Akhenaten." },
          { day: 7, title: "Assiut", details: "Enjoy the scenic beauty of the middle Nile region." },
          { day: 8, title: "Abydos & Denderah", details: "Visit the remarkably preserved temples of Abydos." },
          { day: 9, title: "Arrival in Luxor", details: "Moor in Luxor and visit the East Bank temples." },
          { day: 10, title: "Luxor West Bank", details: "Valley of the Kings and Queens." },
          { day: 11, title: "Esna & Edfu", details: "Pass through the Esna lock and visit Edfu Temple." },
          { day: 12, title: "Kom Ombo", details: "The unique double temple of Sobek and Haroeris." },
          { day: 13, title: "Arrival in Aswan", details: "Visit Philae Temple and the Aswan High Dam." },
          { day: 14, title: "Abu Simbel", details: "Final excursion to the Great Temples of Abu Simbel." },
          { day: 15, title: "Disembarkation", details: "Transfer to Aswan airport for departure." }
        ],
        tourType: "Grand River Expedition",
        availability: "Once Monthly",
        pickupLocation: "Your Cairo Hotel",
        highlights: [
          "Unique 'Long Cruise' itinerary rarely offered",
          "Visit remote sites in Middle Egypt like Amarna",
          "The most relaxed and immersive way to see the Nile",
          "Includes the full Nile valley from north to south"
        ],
        included: ["Full board on cruise", "All shore excursions", "Expert Egyptologist", "Airport transfers"],
        excluded: ["Drinks on board", "Tipping", "Optional activities"],
        cancellationPolicy: "60-day notice for full refund due to limited availability.",
        reviews: { rating: 4.7, count: 56 }
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
