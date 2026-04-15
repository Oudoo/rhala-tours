export interface CategoryTour {
    id: string;
    title: string;
    shortDescription: string;
    price: number;
    image: string;
    duration: string;
}

// Function to generate realistic looking variations based on the location/slug
export const getMockToursForCategory = (categoryTitle: string): CategoryTour[] => {
    // If it's a cruise type
    if (categoryTitle.toLowerCase().includes('cruise') || categoryTitle.toLowerCase().includes('dahabiya')) {
        return [
            {
                id: 'cruise-1',
                title: `4-Day Luxury ${categoryTitle} Experience`,
                shortDescription: 'Experience the magic of the Nile with 5-star accommodations, guided temple visits, and gourmet dining onboard.',
                price: 450,
                image: '/tours-packages/nile-cruise-luxor-768x600.png',
                duration: '4 Days / 3 Nights'
            },
            {
                id: 'cruise-2',
                title: `Standard 5-Day ${categoryTitle} Itinerary`,
                shortDescription: 'A classic sailing experience exploring iconic historical sites along the river banks with expert Egyptologists.',
                price: 320,
                image: '/tours-packages/nile-cruise-768x600.png',
                duration: '5 Days / 4 Nights'
            },
            {
                id: 'cruise-3',
                title: `Exclusive 8-Day ${categoryTitle} Adventure`,
                shortDescription: 'The ultimate immersive journey. Enjoy unparalleled luxury, private tours, and complete relaxation on the water.',
                price: 890,
                image: '/tours-packages/nile-cruise-luxor-2-768x600.png',
                duration: '8 Days / 7 Nights'
            }
        ];
    }

    // Default to Day Tours
    return [
        {
            id: 'tour-1',
            title: `Full Day ${categoryTitle} Highlights Tour`,
            shortDescription: 'Discover the most famous archaeological landmarks and local secrets, complete with private transport and an expert guide.',
            price: 85,
            image: '/tours-packages/Day-tour-to-Pyramids-768x600.png',
            duration: '8 Hours'
        },
        {
            id: 'tour-2',
            title: `Half-Day ${categoryTitle} Morning Excursion`,
            shortDescription: 'A perfect compact tour to see the main attractions before lunch. Ideal for travelers tight on time.',
            price: 45,
            image: '/tours-packages/Luxor-Temple-egypt-768x600.png',
            duration: '4 Hours'
        },
        {
            id: 'tour-3',
            title: `${categoryTitle} by Night: Culture & Dinner`,
            shortDescription: 'Experience the city as it comes alive at night. Includes a traditional dinner and a spectacular cultural performance.',
            price: 65,
            image: '/tours-packages/Karnak-Temple-in-egypt-768x600.png',
            duration: '5 Hours'
        }
    ];
};
