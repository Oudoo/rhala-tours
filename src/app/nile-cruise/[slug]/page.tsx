import CategoryLayout from "@/components/CategoryLayout";
import { getMockToursForCategory } from "@/data/mockCategoryData";

export function generateStaticParams() {
  return [
    { slug: 'luxor-aswan' },
    { slug: 'lake-nasser' },
    { slug: 'dahabiya' }
  ];
}

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const rawTitle = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const title = slug === 'luxor-aswan' ? 'Luxor to Aswan' : rawTitle;

  const tours = getMockToursForCategory(title);

  return (
    <CategoryLayout 
      title={`${title} Nile Cruises`} 
      description={`Sail the legendary river with our exclusive ${title} cruise packages. Intimate, luxurious, and historic.`}
      tours={tours}
    />
  );
}
