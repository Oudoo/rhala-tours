import { notFound } from 'next/navigation';
import DayTourDetailClient from './DayTourDetailClient';
import { DAY_TOUR_GROUPS } from '@/data/dayToursData';

// Pre-generate all slug pages at build time for static export
const ALL_DAY_TOURS = DAY_TOUR_GROUPS.flatMap(g => g.tours);

export function generateStaticParams() {
  return ALL_DAY_TOURS.map(tour => ({ slug: tour.slug }));
}

export default async function DayTourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = ALL_DAY_TOURS.find(t => t.slug === slug);

  if (!tour) notFound();

  return <DayTourDetailClient tour={tour} />;
}
