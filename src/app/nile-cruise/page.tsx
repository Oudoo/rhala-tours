import CategoryLayout from "@/components/CategoryLayout";
import { getMockToursForCategory } from "@/data/mockCategoryData";

export default function NileCruisePage() {
  const tours = getMockToursForCategory('Nile Cruise');

  return (
    <CategoryLayout 
      title="Luxury Nile Cruises" 
      description="Sail through the heart of Egypt. Experience unparalleled luxury, ancient temples, and breathtaking views along the world's most famous river."
      tours={tours}
    />
  );
}
