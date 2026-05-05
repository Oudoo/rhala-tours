import { notFound } from 'next/navigation';
import { getNileCruiseBySlug, ALL_NILE_CRUISE_SLUGS } from '@/data/nileCruiseData';
import NileCruiseDetail from '@/components/NileCruiseDetail';

export function generateStaticParams() {
  return ALL_NILE_CRUISE_SLUGS.map((slug) => ({ slug }));
}

export default async function NileCruiseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cruise = getNileCruiseBySlug(slug);

  if (!cruise) notFound();

  return <NileCruiseDetail cruise={cruise} />;
}
