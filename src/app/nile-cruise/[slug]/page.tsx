import CategoryLayout from "@/components/CategoryLayout";
import { NILE_CRUISE_ROUTES, getCruiseRouteBySlug } from "@/data/nileCruiseData";

export function generateStaticParams() {
  return NILE_CRUISE_ROUTES.map((route) => ({ slug: route.slug }));
}

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const route = getCruiseRouteBySlug(slug);

  if (!route) {
    return <div>Route not found</div>;
  }

  return (
    <CategoryLayout
      title={`${route.title} Nile Cruises`}
      description={route.description}
      tours={route.packages}
    />
  );
}
