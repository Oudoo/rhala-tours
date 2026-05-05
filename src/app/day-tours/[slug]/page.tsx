import { notFound } from 'next/navigation';
import { getDayTourBySlug, ALL_DAY_TOUR_SLUGS } from '@/data/dayToursData';
import DayTourDetailClient from './DayTourDetailClient';

export function generateStaticParams() {
  return ALL_DAY_TOUR_SLUGS.map((slug) => ({ slug }));
}

export default async function DayTourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = getDayTourBySlug(slug);

  if (!tour) notFound();

  // Pass static data as fallback; the client component will prefer context data
  return <DayTourDetailClient slug={slug} fallbackTour={tour} />;
}
