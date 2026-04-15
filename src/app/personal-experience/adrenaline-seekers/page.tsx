'use client';

import { useState } from 'react';
import AdrenalineSection from "@/components/AdrenalineSection";
import Image from "next/image";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import TourModal from '@/components/TourModal';
import { Tour } from '@/data/toursData';

// Moving EXPERIENCES inside the component or keeping it outside but adding more detail
const EXPERIENCES: Tour[] = [
    {
        title: "ATV Adventures",
        duration: "2-4 Hours",
        durationDays: 0.5,
        image: "https://images.unsplash.com/photo-1577700201588-69dfbf8816c2?q=80&w=1000&auto=format&fit=crop",
        description: "Feel the rush as you navigate through vast desert dunes or race towards the epic backdrop of the Pyramids on a powerful ATV. Available in Egypt's most iconic landscapes including the Giza Pyramids, the rugged terrains of Dahab, the coastal sands of Hurghada and Sharm, and the magical dunes of Fayoum.",
        tags: ["Adventure", "Desert", "Fast-Paced"],
        category: "Extreme",
        isPremium: true,
        price: 45,
        pickupLocation: "Your Hotel",
        availability: "Every Day",
        itinerary: [
            { day: 1, title: "Briefing & Safety", details: "Meet your guide for a safety briefing and equipment fitting." },
            { day: 2, title: "The Ride", details: "Set off across the sands. Choose from sunrise, midday, or sunset sessions." },
            { day: 3, title: "Photo Stop", details: "Halt at a scenic viewpoint for incredible photos with the Giza Pyramids or Red Sea coast." }
        ],
        highlights: [
            "Locations: Pyramids, Dahab, Hurghada, Sharm, and Fayoum",
            "High-performance ATVs ensured",
            "Expert safety guides included",
            "Breathtaking scenery and photo ops"
        ],
        included: ["Safety equipment", "Professional guide", "Water and refreshments", "Pick-up and drop-off"],
        excluded: ["Tipping", "GoPro rentals (available)", "Scarf for dust (available for purchase)"],
        importantNotes: ["Wear comfortable clothes and shoes", "Age limit: 16+ to drive", "Bring sunglasses and sunscreen"],
        cancellationPolicy: "Free cancellation up to 24 hours before the tour start time."
    },
    {
        title: "Horse Riding",
        duration: "1-3 Hours",
        durationDays: 0.5,
        image: "https://images.unsplash.com/photo-1553482705-ebad05f2fed3?q=80&w=1000&auto=format&fit=crop",
        description: "Saddle up for an unforgettable ride across sun-drenched beaches or along the ancient trails under the shadow of the Pyramids. We offer professional riding experiences in the Pyramids area, Dahab, Hurghada, Sharm, and Fayoum, catering to all experience levels from beginners to advanced riders.",
        tags: ["Romantic", "Nature", "Heritage"],
        category: "Scenic",
        isPremium: false,
        price: 35,
        pickupLocation: "Your Hotel",
        availability: "Every Day",
        itinerary: [
            { day: 1, title: "Saddle Up", details: "Meet your majestic companion and receive basic riding instructions." },
            { day: 2, title: "The Journey", details: "Ride through scenic desert trails or along the shoreline depending on location." },
            { day: 3, title: "Relaxation", details: "Short break at a local spot for tea and reflection." }
        ],
        highlights: [
            "Locations: Pyramids, Dahab, Hurghada, Sharm, and Fayoum",
            "Beautifully trained Egyptian horses",
            "Perfect for all skill levels",
            "Sunset rides available for a magical experience"
        ],
        included: ["Horse rental", "Professional instructor", "Water", "Hotel transfers"],
        excluded: ["Tipping", "Personal expenses"],
        importantNotes: ["Weight limit may apply", "Wear long pants for comfort", "Helmets provided and recommended"],
        cancellationPolicy: "Free cancellation up to 24 hours before the tour start time."
    },
    {
        title: "Diving Expeditions",
        duration: "Full Day",
        durationDays: 1,
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop",
        description: "Plunge into the vibrant underwater world of the Red Sea to discover shipwrecks, coral reefs, and exotic marine life. Explore the world's most famous dive sites in Dahab (Blue Hole), Hurghada, Sharm El Sheikh (Ras Mohammed), and the untouched reefs of Marsa Alam.",
        tags: ["Red Sea", "Underwater", "Certification Available"],
        category: "Extreme",
        isPremium: true,
        price: 95,
        pickupLocation: "Your Hotel",
        availability: "Every Day",
        itinerary: [
            { day: 1, title: "Boat Departure", details: "Board our professional diving vessel and head to the first site." },
            { day: 2, title: "First Dive", details: "Explore the deep blue with our certified dive masters." },
            { day: 3, title: "Lunch on Board", details: "Freshly cooked meal served on the boat deck." },
            { day: 4, title: "Second Dive", details: "Discover a different reef or shipwreck site." }
        ],
        highlights: [
            "Locations: Dahab, Hurghada, Sharm, and Marsa Alam",
            "World-class coral reefs and shipwrecks",
            "High-quality diving gear provided",
            "Certified PADI instructors"
        ],
        included: ["Diving gear", "Lunch and drinks", "Boat fees", "Pick-up and drop-off"],
        excluded: ["National Park fees (local)", "PADI Certification fees", "Underwater photography"],
        importantNotes: ["Must be medically fit to dive", "Bring a towel and swimwear", "No flying for 24 hours after diving"],
        cancellationPolicy: "Free cancellation up to 48 hours before the tour start time."
    },
    {
        title: "4x4 Desert Safari",
        duration: "Full Day",
        durationDays: 1,
        image: "https://images.unsplash.com/photo-1533560904424-a0c61dc306fc?q=80&w=1000&auto=format&fit=crop",
        description: "Leave civilization behind and venture into the heart of the Great Sand Sea or the mystical canyons of Sinai. Our 4x4 deep-desert experience takes you where the road ends and adventure begins. Experience high-octane dune bashing, visit hidden oases, and witness a sunset that turns the desert into liquid gold before dining under a canopy of stars.",
        tags: ["Deep Desert", "Dune Bashing", "Stargazing"],
        category: "Adventure",
        isPremium: true,
        price: 120,
        pickupLocation: "Your Hotel",
        availability: "Every Day",
        itinerary: [
            { day: 1, title: "Off-Road Kickoff", details: "Start with heart-pounding dune bashing in a specialist 4x4 vehicle." },
            { day: 2, title: "Ancient Fossils & Hidden Oases", details: "Visit geological wonders or hidden desert springs." },
            { day: 3, title: "Sunset at the Peak", details: "Climb a high dune to watch the sun dip below the horizon." },
            { day: 4, title: "Bedouin Dinner", details: "Authentic meal cooked over coal with traditional music." }
        ],
        highlights: [
            "Deep desert exploration far from tourist trails",
            "Expert Bedouin guides and navigators",
            "Private desert camp experience",
            "Perfect stargazing conditions with zero light pollution"
        ],
        included: ["4x4 Specialist vehicle", "Bedouin dinner", "Tea and snacks", "Sandboarding equipment"],
        excluded: ["Alcoholic beverages", "Personal souvenirs"],
        importantNotes: ["Wear layers (deserts get cold at night)", "Not recommended for people with back issues", "Bring a power bank"],
        cancellationPolicy: "Free cancellation up to 48 hours before the tour start time."
    },
    {
        title: "Kite Surfing",
        duration: "Half Day",
        durationDays: 0.5,
        image: "https://images.unsplash.com/photo-1526848707818-825595304a08?q=80&w=1000&auto=format&fit=crop",
        description: "Harness the power of the wind and glide across crystal-clear waters in Egypt's world-renowned kite surfing spots. El Gouna and Soma Bay offer perfect conditions for beginners and experts alike.",
        tags: ["Water Sports", "Wind Powered", "Coastal"],
        category: "Extreme",
        isPremium: false,
        price: 75,
        pickupLocation: "Your Hotel",
        availability: "Wind Dependent",
        itinerary: [
            { day: 1, title: "Theory & Setup", details: "Learn the basics of wind window and kite handling." },
            { day: 2, title: "Enter the Water", details: "Practice body dragging and board control." },
            { day: 3, title: "Ride the Wind", details: "Full session on the water under expert supervision." }
        ],
        highlights: [
            "Top-tier kite surfing equipment",
            "Locations: El Gouna, Soma Bay, Ras Sudr",
            "Beginner-friendly shallow waters",
            "Professional IKO instructors"
        ],
        included: ["Equipment rental", "In-water instruction", "Safety boat cover"],
        excluded: ["Food and extra drinks", "Photographs"],
        importantNotes: ["Moderate fitness level required", "Sunscreen is a must", "Dependent on weather conditions"],
        cancellationPolicy: "Full refund if cancelled due to lack of wind."
    },
    {
        title: "Hot Air Ballooning",
        duration: "3-4 Hours",
        durationDays: 0.5,
        image: "https://images.unsplash.com/photo-1522851147-3bd44b0451e2?q=80&w=1000&auto=format&fit=crop",
        description: "Float above the Valley of the Kings at sunrise for a breathtaking, adrenaline-tinged view of ancient history from the sky. Watch as the temples turn gold in the morning light.",
        tags: ["Luxor", "Sky High", "Breathtaking"],
        category: "Scenic",
        isPremium: true,
        price: 150,
        pickupLocation: "Your Hotel",
        availability: "Daily at Sunrise",
        itinerary: [
            { day: 1, title: "Early Morning Start", details: "4:00 AM pickup and boat crossing to the West Bank." },
            { day: 2, title: "Balloon Inflation", details: "Watch the massive balloons come to life at the launch site." },
            { day: 3, title: "Takeoff & Flight", details: "45-60 minutes in the air above Luxor's ancient wonders." },
            { day: 4, title: "Landing & Celebration", details: "Receive your flying certificate and return to hotel." }
        ],
        highlights: [
            "Panoramic views of Luxor's landmarks",
            "Once-in-a-lifetime sunrise perspective",
            "Safe and professional operations",
            "Flight certificate included"
        ],
        included: ["Balloon flight", "Expert pilot", "Coffee and snacks", "Pick-up and drop-off"],
        excluded: ["Video/photos of your flight", "Tipping"],
        importantNotes: ["Must be at launch site early", "Children under 6 not allowed", "Weight restrictions apply"],
        cancellationPolicy: "Full refund if cancelled due to weather."
    }
];

export default function AdrenalineSeekersPage() {
    const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

    return (
        <div className="flex flex-col min-h-screen bg-[#F3ECDA] pt-24">
            {/* The existing component */}
            <AdrenalineSection />

            {/* New specific experience cards */}
            <section className="py-24 px-6 max-w-7xl mx-auto w-full">
                <div className="text-center mb-16">
                    <span className="text-gold uppercase tracking-[0.2em] font-bold text-sm block mb-4">Unleash Your Spirit</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">More Wild Experiences</h2>
                    <p className="text-navy/60 max-w-2xl mx-auto text-lg">
                        Dive deeper into our curated list of extreme and adventurous activities across Egypt's most dramatic landscapes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {EXPERIENCES.map((exp, idx) => {
                        const whatsappMsg = `Hello Rhala Tours, I am interested in booking the ${exp.title} experience!`;
                        const whatsappUrl = `https://wa.me/201557469694?text=${encodeURIComponent(whatsappMsg)}`;

                        return (
                            <div 
                                key={idx} 
                                onClick={() => setSelectedTour(exp)}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group border border-navy/5 cursor-pointer transform hover:-translate-y-1"
                            >
                                <div className="relative h-60 overflow-hidden">
                                    <Image
                                        src={exp.image}
                                        alt={exp.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 right-4 text-white">
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <h3 className="text-2xl font-bold text-cream drop-shadow-sm">{exp.title}</h3>
                                                <span className="text-xs font-medium text-gold bg-navy/80 px-2 py-0.5 rounded backdrop-blur-md inline-block mt-1">
                                                    {exp.tags?.[0]}
                                                </span>
                                            </div>
                                            <div className="bg-white/20 backdrop-blur-md rounded-full p-2 text-white">
                                                <ArrowUpRight size={18} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow bg-white">
                                    <p className="text-navy/70 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {exp.description}
                                    </p>
                                    
                                    <div className="mt-auto pt-4 border-t border-navy/5 flex items-center justify-between">
                                        <span className="text-xs font-bold text-navy/40 uppercase tracking-widest flex items-center gap-1">
                                            View Details
                                        </span>
                                        <a
                                            href={whatsappUrl}
                                            onClick={(e) => e.stopPropagation()}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white py-2 px-4 rounded-lg font-bold text-xs transition-colors"
                                        >
                                            <MessageCircle size={14} fill="currentColor" />
                                            Book Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Modal integration */}
            <TourModal 
                isOpen={!!selectedTour} 
                onClose={() => setSelectedTour(null)} 
                tour={selectedTour as Tour} 
            />
        </div>
    );
}
