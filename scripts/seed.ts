import { PrismaClient } from '@prisma/client';
const { DURATION_GROUPS } = require('../src/data/toursData');
const { DAY_TOUR_GROUPS } = require('../src/data/dayToursData');
// Ensure these paths resolve correctly when running ts-node.

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Tour Packages...');
  for (const group of DURATION_GROUPS) {
    for (const tourObj of group.tours) {
      const tour = tourObj as any;
      const slug = tour.slug || tour.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
      
      await prisma.tourPackage.upsert({
        where: { slug: slug },
        update: {},
        create: {
          slug: slug,
          title: tour.title,
          subtitle: tour.subtitle || null,
          duration: tour.duration,
          price: tour.price || 0,
          image: tour.image,
          category: tour.category || null,
          tags: JSON.stringify(tour.tags || []),
          isPremium: tour.isPremium || false,
          rating: tour.reviews?.rating || null,
          reviewCount: tour.reviews?.count || null,
          overview: tour.description || '',
          itinerary: JSON.stringify(tour.itinerary || []),
          included: JSON.stringify(tour.included || []),
          excluded: JSON.stringify(tour.excluded || []),
          highlights: JSON.stringify(tour.highlights || []),
          pricingOptions: JSON.stringify(tour.pricingOptions || []),
          accommodation: tour.accommodation || null,
          meals: JSON.stringify(tour.meals || []),
          importantNotes: JSON.stringify(tour.importantNotes || []),
          cancellationPolicy: tour.cancellationPolicy || null,
          groupId: group.label,
        },
      });
    }
  }

  console.log('Seeding Day Tours...');
  for (const group of DAY_TOUR_GROUPS) {
    for (const tourObj of group.tours) {
      const tour = tourObj as any;
      await prisma.dayTour.upsert({
        where: { slug: tour.slug },
        update: {},
        create: {
          slug: tour.slug,
          title: tour.title,
          subtitle: tour.subtitle || null,
          duration: tour.duration,
          price: tour.price,
          image: tour.image,
          category: tour.category || null,
          tags: JSON.stringify(tour.tags || []),
          isPremium: tour.isPremium || false,
          rating: tour.reviews?.rating || null,
          reviewCount: tour.reviews?.count || null,
          overview: tour.overview,
          itinerary: JSON.stringify(tour.itinerary || []),
          included: JSON.stringify(tour.included || []),
          excluded: JSON.stringify(tour.excluded || []),
          highlights: JSON.stringify(tour.highlights || []),
          pricingOptions: JSON.stringify(tour.pricingOptions || []),
          pickupLocation: tour.pickupLocation || null,
          pickupTime: tour.pickupTime || null,
          availability: tour.availability || null,
          guideLanguages: JSON.stringify(tour.guideLanguages || []),
          importantNotes: JSON.stringify(tour.importantNotes || []),
          cancellationPolicy: tour.cancellationPolicy || null,
          groupId: group.id,
        },
      });
    }
  }

  console.log('Seeding done.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
