// ─────────────────────────────────────────────────────────────────
//  Nile Cruise Data — grouped by cruise type
// ─────────────────────────────────────────────────────────────────

export interface NileCruise {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
  isPremium?: boolean;
  reviews?: { rating: number; count: number };
  overview: string;
  shipName: string;
  shipFacilities: string[];
  cabinTypes: { name: string; description: string }[];
  itinerary: { day: number; title: string; route: string; details: string }[];
  included: string[];
  excluded: string[];
  pricingOptions: { title: string; price: number; description: string }[];
  importantNotes: string[];
  cancellationPolicy: string;
}

export interface NileCruiseGroup {
  id: string;
  title: string;
  description: string;
  cruises: NileCruise[];
}

// ─────────────────────────────────────────────────────────────────
//  LUXOR & ASWAN
// ─────────────────────────────────────────────────────────────────

const LUXOR_ASWAN_CRUISES: NileCruise[] = [
  {
    slug: 'luxor-aswan-4-day',
    title: '4-Day Luxor to Aswan Nile Cruise',
    subtitle: 'Sail the legendary Nile past the Valley of the Kings, Karnak, Edfu & Kom Ombo',
    duration: '4 Days / 3 Nights',
    price: 399,
    image: '/tours-packages/nile-cruise-luxor-768x600.png',
    category: 'Luxor & Aswan',
    tags: ['Best Seller'],
    isPremium: true,
    reviews: { rating: 4.9, count: 284 },
    overview:
      'Embark on Egypt\'s most iconic journey — a private cruise from Luxor to Aswan aboard a luxury 5-star Nile river ship. Glide past golden desert banks, lush sugarcane fields, and ancient feluccas as your Egyptologist guide unlocks the mysteries of history\'s greatest civilisation. From the towering columns of Karnak to the perfectly preserved Temple of Horus at Edfu, every stop reveals a new wonder. Full-board meals, air-conditioned cabins with panoramic Nile-view windows, and a dedicated crew create an experience that feels timeless from the moment you step aboard.',
    shipName: 'MS Rahala Luxor',
    shipFacilities: [
      'Sun deck with panoramic Nile views',
      'Outdoor swimming pool',
      'Fully-equipped gymnasium',
      'Panoramic restaurant with full-board dining',
      'Nile-view bar & lounge',
      'Spa & massage centre',
      'Gift shop',
      'Wi-Fi throughout the ship',
      'Daily housekeeping & turndown service',
      '24-hour front desk',
    ],
    cabinTypes: [
      {
        name: 'Standard Cabin (Twin / Double)',
        description:
          'Spacious 21 m² air-conditioned cabin with large panoramic windows, private en-suite bathroom, satellite TV, mini-bar, and a full-length wardrobe. Available in twin or double configuration.',
      },
      {
        name: 'Superior Cabin',
        description:
          '28 m² upper-deck cabin with floor-to-ceiling panoramic windows offering unobstructed Nile views, king-size bed, deep-soak bathtub, and premium toiletries.',
      },
      {
        name: 'Presidential Suite',
        description:
          'Our flagship 52 m² suite featuring a private sun terrace, separate living room, king-size bed, oversized bathtub with Nile views, butler service, and a complimentary welcome bottle of wine.',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive Luxor — Board & Karnak Temple',
        route: 'Luxor',
        details:
          'Transfer from Luxor airport or hotel to the pier. After embarkation and a welcome lunch aboard, your Egyptologist leads an afternoon visit to the awe-inspiring Karnak Temple Complex — home to the Great Hypostyle Hall with its forest of 134 colossal columns. In the evening, walk through Luxor Temple illuminated under floodlights before returning for dinner and an overnight stay at the Luxor pier.',
      },
      {
        day: 2,
        title: 'Luxor West Bank — Valley of the Kings & Hatshepsut',
        route: 'Luxor',
        details:
          'Rise early for the West Bank. Cross the Nile by felucca to explore the Valley of the Kings — final resting place of pharaohs including Tutankhamun, Ramesses II, and Seti I. Continue to the mortuary Temple of Hatshepsut at Deir el-Bahari, dramatically carved into the limestone cliffs. See the twin Colossi of Memnon before returning to the ship for lunch. Sail south towards Esna in the afternoon; enjoy a gala dinner on board as the Nile landscape darkens.',
      },
      {
        day: 3,
        title: 'Edfu & Kom Ombo Temples',
        route: 'Esna → Edfu → Kom Ombo',
        details:
          'Pass through the Esna Lock — a fascinating engineering spectacle — before docking at Edfu, home to the most complete ancient temple in Egypt. The Temple of Horus dates to the Ptolemaic period and stands almost entirely intact; your guide reveals the mythological battle between Horus and Set through stunning carved reliefs. Continue cruising to Kom Ombo, perched on a Nile bend, to visit the unique double temple dedicated to both Sobek (the crocodile god) and Haroeris (Horus the Elder). Sail on to Aswan as the sun sets over the desert hills.',
      },
      {
        day: 4,
        title: 'Aswan — Philae Temple & High Dam',
        route: 'Aswan',
        details:
          'Morning visit to the famous Philae Temple, dedicated to the goddess Isis, beautifully situated on an island in the Nile. Take a short motorboat to reach the island. Explore the island\'s reliefs and sanctuaries with your guide. Visit the Aswan High Dam — an engineering marvel that created Lake Nasser. Optional excursion to the unfinished Obelisk in Aswan\'s quarries. Farewell lunch on board followed by disembarkation at Aswan pier. Transfer to Aswan airport or hotel.',
      },
    ],
    included: [
      'All accommodation aboard the ship (3 nights)',
      'Full-board meals (breakfast, lunch, dinner)',
      'Welcome drink on arrival',
      'Licensed Egyptologist guide throughout',
      'Private air-conditioned coach transfers',
      'All entrance fees to temples and sites mentioned',
      'Felucca crossing at Luxor West Bank',
      'Motorboat to Philae Temple island',
      'Esna Lock transit',
      'Bottled water on board and during tours',
    ],
    excluded: [
      'International flights to/from Egypt',
      'Egypt entry visa',
      'Optional Abu Simbel day trip from Aswan',
      'Personal expenses & tipping (recommended: $5–8/day for crew)',
      'Travel insurance',
      'Beverages from the bar (alcoholic & soft drinks)',
      'Optional hot-air balloon over Luxor',
      'Inside individual tomb tickets (optional, extra charge)',
    ],
    pricingOptions: [
      { title: 'Solo Traveler', price: 699, description: 'Private cabin for 1 person' },
      { title: 'Per Person (Double)', price: 399, description: 'Shared double cabin for 2' },
      { title: 'Superior Cabin', price: 549, description: 'Per person in superior cabin' },
      { title: 'Presidential Suite', price: 1299, description: 'Full suite rate per person' },
    ],
    importantNotes: [
      'Minimum age for the cruise is 2 years. Children under 12 sharing parents\' cabin at 50% discount.',
      'The cruise is operated in Arabic and English; French, Spanish & German guides available on request with advance booking.',
      'Dress modestly when visiting temples — shoulders and knees should be covered.',
      'The Esna Lock crossing can take 1–3 hours depending on river traffic.',
      'Tipping is customary and welcomed but never mandatory.',
      'Optional Abu Simbel day trip (by plane from Aswan) must be booked in advance.',
    ],
    cancellationPolicy:
      'Free cancellation up to 30 days before departure. 50% refund between 15–29 days. No refund within 14 days of departure.',
  },

  {
    slug: 'luxor-aswan-5-day',
    title: '5-Day Aswan to Luxor Nile Cruise',
    subtitle: 'Reverse the great river — start from Abu Simbel country and sail north through every marvel',
    duration: '5 Days / 4 Nights',
    price: 499,
    image: '/tours-packages/nile-cruise-luxor-2-768x600.png',
    category: 'Luxor & Aswan',
    tags: ['Most Complete'],
    isPremium: true,
    reviews: { rating: 4.8, count: 196 },
    overview:
      'Begin your Nile journey in Aswan — gateway to Nubia and Lake Nasser — and sail northward through Egypt\'s greatest open-air museum. With an extra day compared to the standard cruise, this itinerary lets you slow down, linger longer at Edfu and Karnak, and include the atmospheric Aswan Botanical Garden and a private felucca sunset sail around Elephantine Island. Five-star accommodation, gourmet full-board dining, and a private Egyptologist guide make every hour on the river memorable.',
    shipName: 'MS Rahala Aswan',
    shipFacilities: [
      'Sun deck with panoramic Nile views',
      'Outdoor heated swimming pool',
      'Panoramic restaurant with international buffet',
      'Nile-view bar & cigar lounge',
      'Spa, sauna & Jacuzzi',
      'Fitness centre',
      'Library & reading room',
      'Wi-Fi throughout the ship',
      'Gift shop & pharmacy',
      '24-hour room service',
    ],
    cabinTypes: [
      {
        name: 'Standard Cabin (Twin / Double)',
        description:
          '22 m² air-conditioned cabin with panoramic windows overlooking the Nile, en-suite bathroom, satellite TV, and mini-bar. Convertible twin or double configuration.',
      },
      {
        name: 'Deluxe Suite',
        description:
          '38 m² mid-ship suite with private balcony, king-size bed, living area, and premium bath amenities. Ideal location minimises engine vibration for the smoothest ride.',
      },
      {
        name: 'Royal Suite',
        description:
          '60 m² upper-deck Royal Suite with wraparound Nile-view balcony, separate living room, Jacuzzi, butler service, and a private check-in/check-out procedure.',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive Aswan — Board & Philae Temple',
        route: 'Aswan',
        details:
          'Transfer from Aswan airport or hotel to the pier. After welcome formalities and a champagne reception on the sun deck, head by motorboat to Philae Island for an early-evening guided tour of the Temple of Isis — one of Egypt\'s most romantic archaeological sites. Return aboard for a welcome dinner featuring authentic Egyptian cuisine.',
      },
      {
        day: 2,
        title: 'Aswan High Dam, Botanical Garden & Felucca Sail',
        route: 'Aswan',
        details:
          'Morning visit to the Aswan High Dam and the nearby Unfinished Obelisk — a colossal monument abandoned in the quarry 3,500 years ago, still attached to the bedrock. Afternoon transfer to Elephantine Island\'s Botanical Garden, established by Lord Kitchener in the 19th century with exotic plants from across the British Empire. Sunset felucca sail around the islands before returning aboard for dinner as the ship begins sailing north.',
      },
      {
        day: 3,
        title: 'Kom Ombo & Edfu',
        route: 'Aswan → Kom Ombo → Edfu',
        details:
          'Dock at Kom Ombo in the early morning to explore the twin temple of Sobek and Haroeris overlooking the river. Your Egyptologist explains the dual worship system and the unique crocodile mummies displayed in the adjoining museum. Continue to Edfu for a comprehensive tour of the Temple of Horus — the best-preserved temple in Egypt — before sailing north towards Esna. Evening cocktail hour on the sun deck with Nile views.',
      },
      {
        day: 4,
        title: 'Esna Lock & Luxor West Bank',
        route: 'Edfu → Esna → Luxor',
        details:
          'Transit the Esna Lock in the morning — a spectacle in itself — before arriving in Luxor. Cross to the West Bank to visit the Valley of the Kings (three tombs included), the Temple of Hatshepsut at Deir el-Bahari, and the Colossi of Memnon. Return to the ship for lunch. Optional afternoon hot-air balloon booking. Evening at leisure; overnight at the Luxor pier.',
      },
      {
        day: 5,
        title: 'Karnak & Luxor Temples — Farewell',
        route: 'Luxor',
        details:
          'Final morning dedicated to the East Bank — visit the vast Karnak Temple Complex, including the Sacred Lake and the Avenue of Sphinxes, followed by the graceful Luxor Temple in the heart of the city. Farewell lunch aboard the ship before disembarkation. Transfer to Luxor airport or hotel.',
      },
    ],
    included: [
      'All accommodation aboard the ship (4 nights)',
      'Full-board meals (breakfast, lunch, dinner) with welcome champagne',
      'Licensed Egyptologist guide throughout',
      'Private air-conditioned coach and boat transfers',
      'All entrance fees to temples and sites mentioned',
      'Felucca sunset sail around Elephantine Island',
      'Motorboat to Philae Temple island',
      'Esna Lock transit',
      'Bottled water on board and during tours',
      'Farewell dinner on the final evening',
    ],
    excluded: [
      'International flights to/from Egypt',
      'Egypt entry visa',
      'Optional Abu Simbel excursion',
      'Beverages from the bar',
      'Personal expenses & tipping',
      'Travel insurance',
      'Optional hot-air balloon over Luxor',
    ],
    pricingOptions: [
      { title: 'Solo Traveler', price: 899, description: 'Private cabin for 1 person' },
      { title: 'Per Person (Double)', price: 499, description: 'Shared double cabin for 2' },
      { title: 'Deluxe Suite', price: 699, description: 'Per person in deluxe suite' },
      { title: 'Royal Suite', price: 1499, description: 'Full suite rate per person' },
    ],
    importantNotes: [
      'This cruise departs from Aswan — allow for a transfer night in Aswan before Day 1 if flying in.',
      'The Aswan to Luxor route avoids the busier south-bound traffic, resulting in quieter docking berths.',
      'Dress codes apply in the main restaurant at dinner (smart casual).',
      'Unfinished Obelisk visit involves a short walk on uneven granite — wear sturdy shoes.',
      'Abu Simbel excursion (not included) departs at 04:00 AM from Aswan and takes a full day.',
    ],
    cancellationPolicy:
      'Free cancellation up to 30 days before departure. 50% refund between 15–29 days. No refund within 14 days of departure.',
  },
];

// ─────────────────────────────────────────────────────────────────
//  LAKE NASSER
// ─────────────────────────────────────────────────────────────────

const LAKE_NASSER_CRUISES: NileCruise[] = [
  {
    slug: 'lake-nasser-4-day',
    title: '4-Day Lake Nasser Cruise',
    subtitle: 'Sail the world\'s largest man-made lake — Abu Simbel, Kalabsha & the temples of ancient Nubia',
    duration: '4 Days / 3 Nights',
    price: 599,
    image: '/tours-packages/Kalabsha-Temple-768x600.png',
    category: 'Lake Nasser',
    tags: ['Exclusive'],
    isPremium: true,
    reviews: { rating: 4.9, count: 112 },
    overview:
      'Lake Nasser is one of Egypt\'s best-kept secrets. Stretching 550 km into the Nubian desert, the lake was created by the Aswan High Dam and shelters a string of extraordinary temples that were rescued from the rising waters in a UNESCO-led operation in the 1960s. A Lake Nasser cruise is the only way to reach many of these sites, and with just a handful of ships permitted on the lake, each journey is intimate and exclusive. The crown jewel is Abu Simbel — Ramesses II\'s colossal rock-cut monument — best experienced at dawn when the first light enters the inner sanctuary.',
    shipName: 'MS Nubian Sea',
    shipFacilities: [
      'Open sun deck with unobstructed 360° lake views',
      'Plunge pool',
      'Panoramic dining room with window tables',
      'Lounge bar & evening entertainment',
      'Lecture room with daily Egyptology presentations',
      'Boutique spa & massage',
      'Library stocked with Egyptology and Nubian history books',
      'Wi-Fi in public areas',
      'Sundeck telescope for stargazing',
    ],
    cabinTypes: [
      {
        name: 'Lake-View Cabin',
        description:
          '20 m² cabin with large picture windows overlooking the lake, twin or double beds, private en-suite bathroom with shower, air conditioning, and mini-bar.',
      },
      {
        name: 'Junior Suite',
        description:
          '32 m² suite on the upper deck with a private seating area, panoramic lake-view windows, king-size bed, and a bathtub with rain shower.',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive Aswan — Board & Kalabsha Temple',
        route: 'Aswan / Lake Nasser North',
        details:
          'Transfer from Aswan airport to the High Dam pier. After boarding and a welcome lunch, sail onto Lake Nasser for an afternoon visit to the Kalabsha Temple — the largest free-standing temple in Nubia, dedicated to the Nubian sun-god Mandulis. Also visit the nearby rock-cut Beit el-Wali temple, decorated with colourful battle reliefs of Ramesses II. Return aboard as the ship anchors in the vast open lake for your first desert-lake sunset. Dinner and evening stargazing on the sun deck.',
      },
      {
        day: 2,
        title: 'Wadi el-Seboua & Amada Temples',
        route: 'Lake Nasser Central',
        details:
          'Sail south overnight to dock near Wadi el-Seboua — "Valley of the Lions" — named for the sphinx-lined avenue leading to a temple of Ramesses II. Continue by coach to the Temple of Dakka and the Temple of Maharraqa, all relocated here during the UNESCO rescue mission. Afternoon excursion to the Temple of Amada, the oldest surviving temple on Lake Nasser (18th Dynasty), with the finest preserved colour reliefs in Nubia. Return to the ship for dinner and a lecture on Nubian civilisation.',
      },
      {
        day: 3,
        title: 'Abu Simbel — Sunrise & Sound & Light Show',
        route: 'Abu Simbel',
        details:
          'Rise before dawn for the most dramatic experience in Egypt. Dock at Abu Simbel and approach the two colossal temples of Ramesses II and Nefertari in the early morning light. Your Egyptologist provides a detailed guided tour of both temples — the Great Temple guarded by four 20-metre statues and the smaller Temple of Nefertari, one of only two temples ever built by an Egyptian pharaoh for his queen. Spend the full morning at the site, then return to the ship for lunch. Optional evening Sound & Light Show at Abu Simbel (included). Overnight moored at Abu Simbel.',
      },
      {
        day: 4,
        title: 'Return North — Disembark Aswan',
        route: 'Abu Simbel → Aswan',
        details:
          'Optional second morning visit to Abu Simbel at sunrise (for the phenomenon of solar alignment — the inner sanctuary is illuminated twice a year in February and October). Sail north across the full length of Lake Nasser back to the High Dam pier. Farewell lunch on board. Disembarkation and transfer to Aswan airport or hotel.',
      },
    ],
    included: [
      'All accommodation aboard the ship (3 nights on the lake)',
      'Full-board meals throughout',
      'Licensed Egyptologist guide',
      'Private air-conditioned transfers to/from Aswan',
      'All entrance fees to all temples visited',
      'Abu Simbel Sound & Light Show (evening, Day 3)',
      'Coach transfers for inland temples',
      'Bottled water on board and during tours',
      'Daily Egyptology lectures',
    ],
    excluded: [
      'International flights or domestic flights to Aswan',
      'Egypt entry visa',
      'Beverages from the bar',
      'Personal expenses & tipping',
      'Travel insurance',
      'Optional photography permits inside temples',
    ],
    pricingOptions: [
      { title: 'Solo Traveler', price: 999, description: 'Private cabin for 1 person' },
      { title: 'Per Person (Double)', price: 599, description: 'Shared double cabin for 2' },
      { title: 'Junior Suite', price: 849, description: 'Per person in junior suite' },
    ],
    importantNotes: [
      'Lake Nasser cruises operate October–April; the lake can be too hot and rough in summer months.',
      'This cruise is deliberately small — maximum 40 guests — to preserve the exclusive experience.',
      'The Abu Simbel solar alignment phenomenon occurs on 22 February and 22 October each year.',
      'Bring binoculars for birdwatching — the lake is home to Nile crocodiles and hundreds of migratory species.',
      'There is no mobile phone signal for large stretches of the lake.',
    ],
    cancellationPolicy:
      'Free cancellation up to 45 days before departure. 50% refund between 20–44 days. No refund within 19 days of departure.',
  },

  {
    slug: 'lake-nasser-5-day',
    title: '5-Day Lake Nasser Explorer Cruise',
    subtitle: 'The ultimate Nubian odyssey — every rescued temple, Abu Simbel at sunrise, and open-sky camping',
    duration: '5 Days / 4 Nights',
    price: 749,
    image: '/tours-packages/nile-cruise-768x600.png',
    category: 'Lake Nasser',
    tags: ['Premium', 'Small Group'],
    isPremium: true,
    reviews: { rating: 5.0, count: 67 },
    overview:
      'The most comprehensive Lake Nasser itinerary available. Over five days, visit every accessible Nubian temple rescued from the rising waters, including the rarely visited temples of Qasr Ibrim — the only site never relocated, still perched on its original cliff. With just 24 guests maximum, this expedition-style cruise offers unmatched access, flexibility, and a genuine sense of discovery.',
    shipName: 'MS Nubian Explorer',
    shipFacilities: [
      'Large open sun deck with padded loungers',
      'Infinity-edge plunge pool',
      'Gourmet dining room — à la carte evenings',
      'Wine cellar & cocktail bar',
      'Expedition lecture theatre',
      'Dive platform for swimming off the ship',
      'Kayak & paddleboard hire',
      'Wi-Fi via satellite',
      'Stargazing deck with professional telescope',
    ],
    cabinTypes: [
      {
        name: 'Explorer Cabin',
        description:
          '24 m² en-suite cabin with wrap-around windows, twin or double beds, private bathroom with rainfall shower, and a dedicated storage area for expedition equipment.',
      },
      {
        name: 'Explorer Suite',
        description:
          '40 m² suite with private sun terrace over the water, separate lounge, king-size bed, full butler service, and a Nile-facing bathtub.',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Aswan — Board & High Dam Orientation',
        route: 'Aswan',
        details:
          'Board at the Aswan High Dam pier in the afternoon. Orientation briefing on Lake Nasser geography, Nubian history, and the UNESCO temple rescue mission. Welcome dinner with the expedition team and fellow guests. Sail onto the lake as darkness falls and the Milky Way reveals itself above the desert.',
      },
      {
        day: 2,
        title: 'Kalabsha, Beit el-Wali & Gerf Hussein',
        route: 'Lake Nasser North',
        details:
          'Early morning visit to the stunning Kalabsha Temple before other boats arrive. Continue to Beit el-Wali, Ramesses II\'s earliest Nubian temple, rich with painted battle scenes. Afternoon exploration of the partially reconstructed Temple of Gerf Hussein — one of the most recently restored Nubian temples. Swim off the dive platform as the afternoon heat softens. Sunset lecture on Nubian civilisation and its relationship with Pharaonic Egypt.',
      },
      {
        day: 3,
        title: 'Wadi el-Seboua, Dakka & Amada',
        route: 'Lake Nasser Central',
        details:
          'Full day at the central lake temple complex. Sphinx-lined avenue of Wadi el-Seboua leads to a perfectly preserved Ramesside temple. Dakka Temple, originally built by a Nubian king, modified by the Ptolemies and Romans. Amada — the oldest temple on the lake with the most vivid original paint. Optional afternoon kayak on the glassy surface of the lake. Barbecue dinner on the sun deck.',
      },
      {
        day: 4,
        title: 'Qasr Ibrim & Abu Simbel',
        route: 'Lake Nasser South',
        details:
          'Morning sail past Qasr Ibrim, the only ancient site never relocated — a dramatic fortress still on its original cliff above the lake, now accessible by boat only. Photograph and observe the site from the water with your guide\'s commentary. Afternoon arrival at Abu Simbel. Private guided tour of both temples with the crowds thinning toward late afternoon. Overnight moored at Abu Simbel for the famous sunrise experience.',
      },
      {
        day: 5,
        title: 'Abu Simbel Sunrise — Sail Home',
        route: 'Abu Simbel → Aswan',
        details:
          'Wake before dawn for the transcendent Abu Simbel sunrise experience — watching the first light strike the four colossal statues before anyone else arrives. Second guided walk through the Great Temple with fresh eyes. Farewell breakfast on the sun deck as the ship turns north for the long lake crossing back to Aswan. Arrive at the High Dam pier in the late afternoon; transfer to Aswan airport or hotel.',
      },
    ],
    included: [
      'All accommodation aboard the ship (4 nights)',
      'Full-board gourmet meals including à la carte dinners',
      'Premium welcome bar package (house wines, beers, soft drinks)',
      'Licensed Egyptologist Expedition Leader',
      'All entrance fees to all sites including Qasr Ibrim boat access',
      'Kayak & paddleboard use',
      'Daily expedition briefings and lectures',
      'Private transfers to/from Aswan',
      'Bottled water throughout',
    ],
    excluded: [
      'International or domestic flights to Aswan',
      'Egypt entry visa',
      'Premium spirits and wine beyond the included package',
      'Personal expenses & tipping',
      'Travel insurance',
      'Professional underwater photography equipment',
    ],
    pricingOptions: [
      { title: 'Solo Traveler', price: 1249, description: 'Private cabin for 1 person' },
      { title: 'Per Person (Double)', price: 749, description: 'Shared double cabin for 2' },
      { title: 'Explorer Suite', price: 1099, description: 'Per person in explorer suite' },
    ],
    importantNotes: [
      'Maximum 24 guests ensures an expedition-style, not a mass-market, experience.',
      'This itinerary requires a moderate fitness level — temple walks involve uneven terrain.',
      'Qasr Ibrim is approached by boat only; no landing is permitted — bring a good telephoto lens.',
      'All swimming and kayaking is at the guest\'s own risk; the lake is freshwater and crocodile habitats are clearly mapped and avoided.',
      'Seasonal availability: October through April only.',
    ],
    cancellationPolicy:
      'Free cancellation up to 45 days before departure. 50% refund between 20–44 days. No refund within 19 days.',
  },
];

// ─────────────────────────────────────────────────────────────────
//  DAHABIYA
// ─────────────────────────────────────────────────────────────────

const DAHABIYA_CRUISES: NileCruise[] = [
  {
    slug: 'dahabiya-8-day',
    title: '8-Day Dahabiya Nile Sailing Experience',
    subtitle: 'Drift through ancient Egypt on a private traditional sailing houseboat — the most romantic way to see the Nile',
    duration: '8 Days / 7 Nights',
    price: 1099,
    image: '/tours-packages/nile-cruise-luxor-768x600.png',
    category: 'Dahabiya',
    tags: ['Ultra Luxury', 'Private'],
    isPremium: true,
    reviews: { rating: 5.0, count: 48 },
    overview:
      'A dahabiya is a traditional Egyptian Nile houseboat, sail-powered and slow by design — the way 19th-century explorers like Agatha Christie and Flaubert first experienced Egypt. Our purpose-built dahabiya carries only 16 guests, offering an extraordinarily private and unhurried journey from Luxor to Aswan. With no motorised rush, you anchor overnight at remote riverbanks, walk through villages unchanged for centuries, and visit temples as the only visitors. The dahabiya is not just a mode of transport — it is the experience itself.',
    shipName: 'Rahala Dahabiya',
    shipFacilities: [
      'Full-length open upper deck with canopied lounge area',
      'Traditional wood-panelled salon with antique furnishings',
      'Sundeck dining table for all meals al fresco',
      'Private library of Egyptology and travel literature',
      'Swimming platform at the stern',
      'Traditional brass bath in superior cabins',
      'Cocktail bar & wine cellar',
      'Crew of 12 for 16 guests',
      'Bicycles available for village explorations',
    ],
    cabinTypes: [
      {
        name: 'Nile View Cabin',
        description:
          '18 m² double cabin with large opening windows, hand-carved wooden furnishings, double bed, private en-suite with shower, and air conditioning. Located on the main deck.',
      },
      {
        name: 'Upper Deck Suite',
        description:
          '26 m² suite on the upper deck with a private sitting area, king-size bed, antique brass bathtub, and a private wraparound window view of the river. The most coveted cabin on the boat.',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Embark at Luxor — Welcome & Karnak at Dusk',
        route: 'Luxor',
        details:
          'Board the Rahala Dahabiya at the Luxor Corniche in the late afternoon. Meet the captain, crew, and your private Egyptologist guide over sundowner cocktails on the upper deck. At dusk, walk to the floodlit Luxor Temple — a short stroll from the pier — for an evening visit before the crowds return. Dinner aboard and overnight at Luxor.',
      },
      {
        day: 2,
        title: 'Valley of the Kings & West Bank',
        route: 'Luxor',
        details:
          'Spend the full day on Luxor\'s West Bank. Begin at the Valley of the Kings with 3–4 tombs (chosen to avoid crowding), including optional entry to Tutankhamun\'s tomb. Visit Deir el-Medina — the village of the tomb-builders — rarely included on standard tours, offering insight into the lives of ordinary Egyptians who created the royal tombs. See the Ramesseum, Ramesses II\'s mortuary temple. Return aboard for lunch and afternoon sailing south. Overnight at anchor near Esna.',
      },
      {
        day: 3,
        title: 'Esna — Lock & Local Market',
        route: 'Esna',
        details:
          'Morning transit of the Esna Lock. While waiting (often 1–2 hours), the crew deploys bicycles for a ride through the farmland beside the river. Explore Esna\'s lively bazaar with your guide — a completely authentic market town rarely visited by tourists. Visit the Temple of Khnum, a Ptolemaic temple buried beneath the modern town until excavation began. Afternoon sailing through lush agricultural landscape. Overnight near Edfu.',
      },
      {
        day: 4,
        title: 'Edfu Temple & Village Life',
        route: 'Edfu',
        details:
          'Arrive at Edfu early for a private visit to the Temple of Horus before tourist boats arrive. The dahabiya\'s slower pace means you often have major sites to yourselves. Afternoon walk through the Edfu souk and a visit to a local Nubian family home (arranged by the crew). Return to the ship for a cooking demonstration with the chef. Overnight moored at a remote riverbank south of Edfu.',
      },
      {
        day: 5,
        title: 'Silsila Sandstone Quarries & Kom Ombo',
        route: 'Gebel el-Silsila → Kom Ombo',
        details:
          'A dahabiya-exclusive stop at Gebel el-Silsila — the ancient sandstone quarries that supplied material for most of Egypt\'s great temples. Walk through carved chapels and commemorative stelae with your guide. Afternoon stop at Kom Ombo\'s scenic double temple. Sunset cocktails on the upper deck as the Nile meanders past Nubian villages. Overnight at anchor south of Kom Ombo.',
      },
      {
        day: 6,
        title: 'Aswan Arrival — Elephantine & Felucca',
        route: 'Aswan',
        details:
          'Sail into Aswan — the most beautiful stretch of the Nile, with pink granite rocks and green islands. Morning exploration of Elephantine Island: the Nilometer (one of the oldest in Egypt), the Aswan Museum, and the excavated ruins of ancient Yebu. Afternoon sail by private felucca to Kitchener\'s Island Botanical Garden. Evening on the Aswan Corniche with your guide.',
      },
      {
        day: 7,
        title: 'Philae Temple, High Dam & Nubian Village',
        route: 'Aswan',
        details:
          'Motorboat excursion to Philae Island for a comprehensive tour of the Temple of Isis, the last temple built in the classical Egyptian style. Visit the Aswan High Dam. Afternoon excursion to a traditional Nubian village on the west bank of Aswan — visit a local family, hear about Nubian culture and the displacement caused by the dam\'s construction. Farewell dinner aboard with the full crew.',
      },
      {
        day: 8,
        title: 'Sunrise on the Nile — Disembark Aswan',
        route: 'Aswan',
        details:
          'Final morning: rise early for a quiet hour on the upper deck watching the Aswan sunrise — fishermen, birds, and the granite islands in the golden light. Farewell breakfast at anchor. Disembarkation from Aswan pier and transfer to the airport or hotel.',
      },
    ],
    included: [
      'All accommodation aboard (7 nights in private cabin)',
      'Full-board meals — all served al fresco on the sun deck',
      'Private Egyptologist guide for the entire journey',
      'All entrance fees to temples and sites',
      'Bicycle hire for Esna and village explorations',
      'Private felucca to Kitchener\'s Island',
      'Motorboat to Philae Temple island',
      'Aswan Nubian village visit',
      'Gebel el-Silsila quarry access (exclusive dahabiya stop)',
      'Deir el-Medina village tour (rarely included elsewhere)',
      'Cooking demonstration with the ship\'s chef',
      'Welcome and farewell cocktail receptions',
      'Bottled water and soft drinks throughout',
    ],
    excluded: [
      'International flights or domestic flights to Luxor',
      'Egypt entry visa',
      'Optional Tutankhamun\'s tomb inner entry ticket',
      'Optional Abu Simbel excursion by air',
      'Alcoholic beverages beyond the welcome/farewell reception',
      'Personal expenses & tipping (crew gratuity highly encouraged)',
      'Travel insurance',
      'Optional hot-air balloon over Luxor',
    ],
    pricingOptions: [
      { title: 'Solo Traveler', price: 1899, description: 'Private cabin for 1 person' },
      { title: 'Per Person (Double)', price: 1099, description: 'Shared double cabin for 2' },
      { title: 'Upper Deck Suite', price: 1499, description: 'Per person in upper deck suite' },
      { title: 'Full Dahabiya Charter', price: 14999, description: 'Exclusive use of the entire vessel (up to 8 cabins)' },
    ],
    importantNotes: [
      'The dahabiya experience is sail-powered; progress is slower by design and subject to Nile wind conditions.',
      'Maximum 16 guests creates an atmosphere closer to a private house party than a cruise.',
      'This is not suitable for guests requiring mobility assistance — the dahabiya has stairs and gangplanks.',
      'The Gebel el-Silsila stop is only accessible by smaller vessels; it cannot be visited from standard cruise ships.',
      'Village visits are arranged with community consent and include a small contribution to local schools.',
    ],
    cancellationPolicy:
      'Free cancellation up to 60 days before departure. 50% refund between 30–59 days. No refund within 29 days.',
  },

  {
    slug: 'dahabiya-5-day',
    title: '5-Day Dahabiya Private Nile Cruise',
    subtitle: 'All the magic of a dahabiya in a shorter, sharper itinerary — Luxor to Aswan highlights, privately',
    duration: '5 Days / 4 Nights',
    price: 749,
    image: '/tours-packages/nile-cruise-768x600.png',
    category: 'Dahabiya',
    tags: ['Private', 'Boutique'],
    isPremium: true,
    reviews: { rating: 4.9, count: 73 },
    overview:
      'If eight days feels long but you still want the intimate dahabiya experience, this five-day version hits all the highlights without rushing. Four nights aboard the traditional sailing houseboat — from Luxor\'s Valley of the Kings to Aswan\'s granite islands — with the same exclusive feel, the same private Egyptologist guide, and the same quiet anchorages far from the standard cruise ship berths.',
    shipName: 'Rahala Dahabiya',
    shipFacilities: [
      'Open upper deck with canopied lounge and dining area',
      'Traditional wood-panelled salon',
      'Swimming platform at the stern',
      'Cocktail bar with curated Egyptian wine list',
      'Private library',
      'Bicycles for shore excursions',
      'Crew of 12 for 16 guests',
    ],
    cabinTypes: [
      {
        name: 'Nile View Cabin',
        description:
          '18 m² double cabin with hand-carved furnishings, large opening windows, private en-suite shower, and air conditioning.',
      },
      {
        name: 'Upper Deck Suite',
        description:
          '26 m² suite with private sitting nook, king-size bed, antique brass bath, and a wraparound river view from the top deck.',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Embark Luxor — Karnak & Evening Sail',
        route: 'Luxor',
        details:
          'Board the Rahala Dahabiya at Luxor in the late morning. Welcome lunch on the sun deck. Afternoon guided tour of the Karnak Temple Complex. Return to the ship for sundowner cocktails as the dahabiya raises its sails and begins the slow drift south. Dinner aboard overnight near Esna.',
      },
      {
        day: 2,
        title: 'Luxor West Bank & Esna Lock',
        route: 'Luxor West Bank → Esna',
        details:
          'Early morning transfer back to Luxor for the West Bank — Valley of the Kings and the Colossi of Memnon. Return to the ship for lunch as the dahabiya transits the Esna Lock. Afternoon bicycle ride through the Esna farmland. Overnight near Edfu.',
      },
      {
        day: 3,
        title: 'Edfu & Kom Ombo',
        route: 'Edfu → Kom Ombo',
        details:
          'Private morning visit to the Temple of Horus at Edfu. Afternoon visit to the scenic twin temple at Kom Ombo. Sail into the wider stretches of the Nile south of Kom Ombo as dusk colours the desert cliffs. Overnight at anchor — the quietest spot on the journey.',
      },
      {
        day: 4,
        title: 'Sail into Aswan — Elephantine & Felucca',
        route: 'Aswan',
        details:
          'Arrive in Aswan through the pink granite landscape. Morning exploration of Elephantine Island. Afternoon felucca to Kitchener\'s Botanical Garden. Evening on the Aswan Corniche and the famous Nubian souk.',
      },
      {
        day: 5,
        title: 'Philae Temple & Farewell',
        route: 'Aswan',
        details:
          'Final morning motorboat to Philae Island for the Temple of Isis. Farewell brunch aboard. Disembark at Aswan pier with transfer to the airport or hotel.',
      },
    ],
    included: [
      'All accommodation aboard (4 nights)',
      'Full-board meals — all al fresco',
      'Private Egyptologist guide',
      'All entrance fees to temples and sites',
      'Felucca to Kitchener\'s Island',
      'Motorboat to Philae Temple',
      'Bicycle hire at Esna',
      'Welcome cocktail reception',
      'Bottled water throughout',
    ],
    excluded: [
      'International or domestic flights',
      'Egypt entry visa',
      'Beverages from the bar',
      'Personal expenses & tipping',
      'Travel insurance',
      'Optional hot-air balloon',
    ],
    pricingOptions: [
      { title: 'Solo Traveler', price: 1249, description: 'Private cabin for 1 person' },
      { title: 'Per Person (Double)', price: 749, description: 'Shared double cabin for 2' },
      { title: 'Upper Deck Suite', price: 999, description: 'Per person in upper deck suite' },
    ],
    importantNotes: [
      'Departure is from Luxor; guests flying into Aswan should book the reverse itinerary or arrange a private transfer.',
      'Wind conditions on the Nile are best October–March; summer sailings use the motor more frequently.',
      'Maximum 16 guests aboard.',
    ],
    cancellationPolicy:
      'Free cancellation up to 45 days before departure. 50% refund between 20–44 days. No refund within 19 days.',
  },
];

// ─────────────────────────────────────────────────────────────────
//  GROUPS EXPORT
// ─────────────────────────────────────────────────────────────────

export const NILE_CRUISE_GROUPS: NileCruiseGroup[] = [
  {
    id: 'luxor-aswan-cruises',
    title: 'Luxor & Aswan Nile Cruises',
    description:
      'The classic Nile cruise route — sail between the two greatest temple cities in Egypt aboard a 5-star river ship. The 300 km stretch between Luxor and Aswan packs the Valley of the Kings, Karnak, Edfu, Kom Ombo, and Philae into one unforgettable journey.',
    cruises: LUXOR_ASWAN_CRUISES,
  },
  {
    id: 'lake-nasser-cruises',
    title: 'Lake Nasser Nile Cruises',
    description:
      'Sail the world\'s largest man-made lake to reach the Nubian temples rescued by UNESCO — including the colossal Abu Simbel. With only a handful of ships permitted on Lake Nasser, every cruise is an exclusive expedition through one of Egypt\'s most remote and spectacular regions.',
    cruises: LAKE_NASSER_CRUISES,
  },
  {
    id: 'dahabiya-cruises',
    title: 'Dahabiya Nile Cruises',
    description:
      'Travel the Nile the way 19th-century explorers did — aboard a traditional wind-powered dahabiya houseboat. With a maximum of 16 guests, a private Egyptologist, and unhurried days at anchor, a dahabiya cruise is the most intimate and romantic way to experience Ancient Egypt.',
    cruises: DAHABIYA_CRUISES,
  },
];

// ─────────────────────────────────────────────────────────────────
//  HELPER FUNCTIONS
// ─────────────────────────────────────────────────────────────────

export const ALL_NILE_CRUISES: NileCruise[] = NILE_CRUISE_GROUPS.flatMap((g) => g.cruises);

export const ALL_NILE_CRUISE_SLUGS: string[] = ALL_NILE_CRUISES.map((c) => c.slug);

export function getNileCruiseBySlug(slug: string): NileCruise | undefined {
  return ALL_NILE_CRUISES.find((c) => c.slug === slug);
}
