'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function getTourPackages() {
  const tours = await prisma.tourPackage.findMany();
  return tours.map(tour => ({
    ...tour,
    tags: JSON.parse(tour.tags),
    itinerary: JSON.parse(tour.itinerary),
    included: JSON.parse(tour.included),
    excluded: JSON.parse(tour.excluded),
    highlights: JSON.parse(tour.highlights),
    pricingOptions: JSON.parse(tour.pricingOptions),
    meals: tour.meals ? JSON.parse(tour.meals) : [],
    importantNotes: tour.importantNotes ? JSON.parse(tour.importantNotes) : []
  }));
}

export async function updateTourPackage(slug: string, data: any) {
  await prisma.tourPackage.update({
    where: { slug },
    data: {
      title: data.title,
      subtitle: data.subtitle,
      duration: data.duration,
      price: data.price,
      image: data.image,
      category: data.category,
      tags: JSON.stringify(data.tags || []),
      isPremium: data.isPremium,
      overview: data.overview,
      itinerary: JSON.stringify(data.itinerary || []),
      included: JSON.stringify(data.included || []),
      excluded: JSON.stringify(data.excluded || []),
      highlights: JSON.stringify(data.highlights || []),
      pricingOptions: JSON.stringify(data.pricingOptions || []),
      accommodation: data.accommodation,
      meals: JSON.stringify(data.meals || []),
      importantNotes: JSON.stringify(data.importantNotes || []),
      cancellationPolicy: data.cancellationPolicy,
    }
  });
  revalidatePath('/tours-packages');
  revalidatePath('/tours-packages/[slug]', 'page');
  revalidatePath('/admin');
}

export async function deleteTourPackage(slug: string) {
  await prisma.tourPackage.delete({ where: { slug } });
  revalidatePath('/tours-packages');
  revalidatePath('/admin');
}

export async function getDayTours() {
  const tours = await prisma.dayTour.findMany();
  return tours.map(tour => ({
    ...tour,
    tags: JSON.parse(tour.tags),
    itinerary: JSON.parse(tour.itinerary),
    included: JSON.parse(tour.included),
    excluded: JSON.parse(tour.excluded),
    highlights: JSON.parse(tour.highlights),
    pricingOptions: JSON.parse(tour.pricingOptions),
    guideLanguages: tour.guideLanguages ? JSON.parse(tour.guideLanguages) : [],
    importantNotes: tour.importantNotes ? JSON.parse(tour.importantNotes) : []
  }));
}

export async function getDayTourBySlug(slug: string) {
  const tour = await prisma.dayTour.findUnique({ where: { slug } });
  if (!tour) return null;
  return {
    ...tour,
    tags: JSON.parse(tour.tags),
    itinerary: JSON.parse(tour.itinerary),
    included: JSON.parse(tour.included),
    excluded: JSON.parse(tour.excluded),
    highlights: JSON.parse(tour.highlights),
    pricingOptions: JSON.parse(tour.pricingOptions),
    guideLanguages: tour.guideLanguages ? JSON.parse(tour.guideLanguages) : [],
    importantNotes: tour.importantNotes ? JSON.parse(tour.importantNotes) : []
  };
}

export async function updateDayTour(slug: string, data: any) {
  await prisma.dayTour.update({
    where: { slug },
    data: {
      title: data.title,
      subtitle: data.subtitle,
      duration: data.duration,
      price: data.price,
      image: data.image,
      category: data.category,
      tags: JSON.stringify(data.tags || []),
      isPremium: data.isPremium,
      overview: data.overview,
      itinerary: JSON.stringify(data.itinerary || []),
      included: JSON.stringify(data.included || []),
      excluded: JSON.stringify(data.excluded || []),
      highlights: JSON.stringify(data.highlights || []),
      pricingOptions: JSON.stringify(data.pricingOptions || []),
      pickupLocation: data.pickupLocation,
      pickupTime: data.pickupTime,
      availability: data.availability,
      guideLanguages: JSON.stringify(data.guideLanguages || []),
      importantNotes: JSON.stringify(data.importantNotes || []),
      cancellationPolicy: data.cancellationPolicy,
    }
  });
  revalidatePath('/day-tours');
  revalidatePath('/day-tours/[slug]', 'page');
  revalidatePath('/admin');
}

export async function deleteDayTour(slug: string) {
  await prisma.dayTour.delete({ where: { slug } });
  revalidatePath('/day-tours');
  revalidatePath('/admin');
}

export async function addTourPackage(data: any) {
  const newSlug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  await prisma.tourPackage.create({
    data: {
      slug: newSlug,
      title: data.title,
      subtitle: data.subtitle || '',
      duration: data.duration,
      price: data.price || 0,
      image: data.image,
      groupId: data.durationDays <= 5 ? "Quick Getaways (1-5 Days)" : data.durationDays <= 9 ? "Classic Egypt (6-9 Days)" : "Extensive Explorations (10+ Days)",
      category: data.category,
      tags: JSON.stringify(data.tags || []),
      isPremium: data.isPremium,
      overview: data.overview || '',
      itinerary: JSON.stringify(data.itinerary || []),
      included: JSON.stringify(data.included || []),
      excluded: JSON.stringify(data.excluded || []),
      highlights: JSON.stringify(data.highlights || []),
      pricingOptions: JSON.stringify(data.pricingOptions || []),
      accommodation: data.accommodation,
      meals: JSON.stringify(data.meals || []),
      importantNotes: JSON.stringify(data.importantNotes || []),
      cancellationPolicy: data.cancellationPolicy,
    }
  });
  revalidatePath('/tours-packages');
  revalidatePath('/admin');
}

export async function addDayTour(data: any) {
  const newSlug = data.slug || data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  await prisma.dayTour.create({
    data: {
      slug: newSlug,
      title: data.title,
      subtitle: data.subtitle || '',
      duration: data.duration,
      price: data.price,
      image: data.image,
      groupId: data.category.toLowerCase().includes('cairo') ? 'cairo-day-tours' : data.category.toLowerCase().includes('luxor') ? 'luxor-day-tours' : 'other-day-tours',
      category: data.category,
      tags: JSON.stringify(data.tags || []),
      isPremium: data.isPremium || false,
      overview: data.overview,
      itinerary: JSON.stringify(data.itinerary || []),
      included: JSON.stringify(data.included || []),
      excluded: JSON.stringify(data.excluded || []),
      highlights: JSON.stringify(data.highlights || []),
      pricingOptions: JSON.stringify(data.pricingOptions || []),
      pickupLocation: data.pickupLocation,
      pickupTime: data.pickupTime,
      availability: data.availability,
      guideLanguages: JSON.stringify(data.guideLanguages || []),
      importantNotes: JSON.stringify(data.importantNotes || []),
      cancellationPolicy: data.cancellationPolicy,
    }
  });
  revalidatePath('/day-tours');
  revalidatePath('/admin');
}
