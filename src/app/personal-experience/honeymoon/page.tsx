import Image from "next/image";
import { MessageCircle, Heart } from "lucide-react";
import TourCard from "@/components/TourCard";
import { ALL_TOURS } from "@/data/toursData";

export const metadata = {
    title: "Egypt Romantic Holiday & Honeymoon | Rhala Tours",
    description: "Discover the best couple holiday in Egypt: romantic escapes, stunning landscapes, luxurious stays, and unforgettable adventures in the land of the Pharaohs.",
};

const HONEYMOON_TOURS = ALL_TOURS.filter((t) => t.category === "Honeymoon" || t.tags?.includes("Honeymoon"));

export default function HoneymoonPage() {
    const whatsappMsg = `Hello Rhala Tours, I am interested in planning a customized Egypt Honeymoon!`;
    const whatsappUrl = `https://wa.me/201557469694?text=${encodeURIComponent(whatsappMsg)}`;

    return (
        <div className="flex flex-col min-h-screen bg-[#FDFBF7]">
            {/* Romantic Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1548685913-68d2ca38de4f?q=80&w=2000&auto=format&fit=crop"
                    alt="Couple enjoying a romantic trip in Egypt"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/20 to-[#FDFBF7]"></div>
                
                <div className="relative z-10 text-center px-6 mt-24">
                    <span className="inline-flex items-center gap-2 text-gold bg-navy/80 px-4 py-1.5 rounded-full text-sm tracking-widest uppercase font-bold mb-6 backdrop-blur-sm shadow-xl">
                        <Heart size={16} className="fill-gold" />
                        Signature Experience
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-cream drop-shadow-lg mb-6 tracking-tight">
                        Egypt Honeymoon Holidays
                    </h1>
                    <p className="text-xl text-cream/90 max-w-2xl mx-auto font-medium drop-shadow-md">
                        Discover the perfect blend of romance, history, and luxury.
                    </p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 bg-[#FDFBF7]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="text-gold uppercase tracking-[0.2em] font-bold text-xs block mb-4">
                        A Journey of Love
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8">
                        The Ultimate Couple's Retreat
                    </h2>
                    <p className="text-navy/70 text-lg leading-relaxed mb-6">
                        The mysteries and beauty of ancient Egyptian landscapes await you and your loved one. From the timeless Nile valley to the pristine coastal beaches, we have carefully selected the best hotels, luxury cruises, and intimate resorts to set your hearts aflame.
                    </p>
                </div>
            </section>

            {/* Tour Grid Section */}
            <section className="pb-24 bg-[#FDFBF7]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                        {HONEYMOON_TOURS.map((tour, index) => (
                            <div key={tour.title} className="w-full h-full flex justify-center">
                                <TourCard tour={tour} index={index} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="tailor-made" className="py-20 bg-cream text-navy border-y border-navy/5">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <Heart size={48} className="text-gold mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
                        Plan Your Dream Honeymoon
                    </h2>
                    <p className="text-navy/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                        Every romance is unique. Experience a memorable getaway customized specifically to your desires. Contact our travel specialists to tailor an itinerary just for you on your special occasion.
                    </p>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#1DA851] transition-colors duration-300 shadow-xl shadow-[#25D366]/20"
                    >
                        <MessageCircle size={20} />
                        Contact Us to Customize
                    </a>
                    <p className="mt-4 text-xs text-navy/40 uppercase tracking-widest font-bold">100% Tailor-made</p>
                </div>
            </section>
        </div>
    );
}
