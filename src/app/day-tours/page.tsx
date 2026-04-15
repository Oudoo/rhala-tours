import CategoryLayout from "@/components/CategoryLayout";
import { getMockToursForCategory } from "@/data/mockCategoryData";

export default function DayToursPage() {
  const tours = getMockToursForCategory('Day Tours');

  return (
    <CategoryLayout 
      title="Explore Our Day Tours" 
      description="Immerse yourself in Egypt's rich history. From the ancient pyramids to bustling bazaars, our expertly guided day tours offer the perfect mix of adventure, culture, and relaxation."
      tours={tours}
    />
  );
}
