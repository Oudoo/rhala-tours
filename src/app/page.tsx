import Hero from "@/components/Hero";
import FeaturedTours from "@/components/FeaturedTours";
import WhyRhala from "@/components/WhyRhala";
import TravelEssentials from "@/components/TravelEssentials";
import JournalSection from "@/components/JournalSection";
import InstagramFeed from "@/components/InstagramFeed";
import TripAdvisorReviews from "@/components/TripAdvisorReviews";
import BookingForm from "@/components/BookingForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedTours />
      <WhyRhala />
      <TravelEssentials />
      <JournalSection />
      <TripAdvisorReviews />

      {/* Booking Inquiry Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold uppercase tracking-[0.2em] font-bold text-xs block mb-4">
                Start Planning
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6 leading-tight">
                Ready to Experience
                <br />
                <span className="text-gold">the Real Egypt?</span>
              </h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-6">
                Tell us about your dream trip and our travel experts will craft a personalized itinerary just for you. No cookie-cutter tours — every journey is uniquely yours.
              </p>
              <ul className="space-y-3 text-navy/70">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  100% customized to your interests & schedule
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  Expert Egyptologist guides on every tour
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  Private transportation & premium hotels
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  ¡Hablamos Español! — Spanish-speaking guides available
                </li>
              </ul>
            </div>
            <BookingForm sourcePage="Homepage" variant="full" />
          </div>
        </div>
      </section>

      <InstagramFeed />
    </div>
  );
}
