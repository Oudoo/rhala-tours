import { notFound } from 'next/navigation';
import { getDayTourBySlug } from '@/actions/tours';
import DayTourDetailClient from './DayTourDetailClient';

export default async function DayTourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = await getDayTourBySlug(slug);

  if (!tour) notFound();

  return <DayTourDetailClient tour={tour} />;
}
