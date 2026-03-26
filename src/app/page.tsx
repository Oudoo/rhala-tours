import Hero from "@/components/Hero";
import FeaturedTours from "@/components/FeaturedTours";
import AdrenalineSection from "@/components/AdrenalineSection";
import WhyRhala from "@/components/WhyRhala";
import TravelEssentials from "@/components/TravelEssentials";
import JournalSection from "@/components/JournalSection";
import InstagramFeed from "@/components/InstagramFeed";
import TripAdvisorReviews from "@/components/TripAdvisorReviews";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedTours />
      <AdrenalineSection />
      <WhyRhala />
      <TravelEssentials />
      <JournalSection />
      <TripAdvisorReviews />
      <InstagramFeed />
    </div>
  );
}
