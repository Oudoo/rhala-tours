import CategoryLayout from "@/components/CategoryLayout";
import { ALL_CRUISE_PACKAGES } from "@/data/nileCruiseData";

export default function NileCruisePage() {
  return (
    <CategoryLayout
      title="Luxury Nile Cruises"
      description="Sail through the heart of Egypt. Experience unparalleled luxury, ancient temples, and breathtaking views along the world's most famous river."
      tours={ALL_CRUISE_PACKAGES}
    />
  );
}
