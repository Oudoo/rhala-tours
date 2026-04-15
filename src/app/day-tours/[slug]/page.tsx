import CategoryLayout from "@/components/CategoryLayout";
import { getMockToursForCategory } from "@/data/mockCategoryData";

export function generateStaticParams() {
  return [
    { slug: 'cairo-giza' },
    { slug: 'alexandria' },
    { slug: 'luxor' },
    { slug: 'red-sea-sinai' },
    { slug: 'aswan-nubia' }
  ];
}

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const rawTitle = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const title = slug === 'cairo-giza' ? 'Cairo & Giza' : rawTitle;

  const tours = getMockToursForCategory(title);

  return (
    <CategoryLayout 
      title={`Explore ${title} Tours`} 
      description={`Discover the magic and history of ${title} with our hand-picked curated experiences.`}
      tours={tours}
    />
  );
}
