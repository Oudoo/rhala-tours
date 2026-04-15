import Image from "next/image";
import { MessageCircle, Coffee, Map, Compass } from "lucide-react";

export const metadata = {
    title: "Local Experiences | Rhala Tours",
    description: "Live like a local. Discover hidden cafes, authentic walking tours, and thrilling motorcycle rides through the heart of Egypt.",
};

const EXPERIENCES = [
    {
        id: "cafes",
        title: "Hidden Local Cafes",
        icon: Coffee,
        description: "Escape the tourist traps and sip traditional Egyptian coffee (Ahwa) or mint tea in centuries-old cafes hidden in the bustling alleys of Islamic Cairo or historic Alexandria. Mix with the locals, play backgammon, and soak in the authentic atmosphere.",
        image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: "walking",
        title: "Authentic Walking Tours",
        icon: Map,
        description: "Wander through vibrant local markets, historical neighborhoods, and secret passageways with our expert local guides. From the aromatic spice markets of Khan el-Khalili to the vivid streets of Aswan, experience the colors and sounds of everyday Egyptian life.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: "motorcycle",
        title: "Motorcycle City Rides",
        icon: Compass,
        description: "Feel the pulse of the city on a guided motorcycle tour. Safely navigate the energetic streets of Cairo at dusk, coast along the Alexandrian corniche, or weave through the relaxed vibes of Dahab for an unmatched perspective.",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1000&auto=format&fit=crop",
    }
];

export default function LocalExperiencesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#F3ECDA]">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1539655823528-76ad895311e3?q=80&w=2000&auto=format&fit=crop"
                    alt="Authentic Egyptian Local Market"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-navy/60"></div>
                
                <div className="relative z-10 text-center px-6 mt-16">
                    <span className="text-gold uppercase tracking-[0.3em] font-bold text-sm block mb-4">Beyond the Guidebook</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-cream mb-6">
                        Live Like a Local
                    </h1>
                    <p className="text-xl text-cream/80 max-w-2xl mx-auto">
                        Experience the genuine heartbeat of Egypt through immersive, unfiltered street-level adventures.
                    </p>
                </div>
            </section>

            {/* Content Sections */}
            <section className="max-w-7xl mx-auto px-6 py-24 space-y-32">
                {EXPERIENCES.map((exp, index) => {
                    const isEven = index % 2 === 0;
                    const whatsappMsg = `Hello Rhala Tours, I want to book the ${exp.title} experience!`;
                    const whatsappUrl = `https://wa.me/201557469694?text=${encodeURIComponent(whatsappMsg)}`;

                    return (
                        <div key={exp.id} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16`}>
                            
                            {/* Image Side */}
                            <div className="w-full md:w-1/2 relative">
                                <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src={exp.image}
                                        alt={exp.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                {/* Decorative elements */}
                                <div className={`absolute -z-10 w-full h-full border-2 border-gold/30 rounded-3xl ${isEven ? 'top-6 -left-6' : 'top-6 -right-6'}`}></div>
                            </div>

                            {/* Text Side */}
                            <div className="w-full md:w-1/2 space-y-6">
                                <div className="w-16 h-16 bg-navy text-gold rounded-full flex items-center justify-center mb-8 shadow-lg">
                                    <exp.icon size={32} />
                                </div>
                                <h2 className="text-4xl font-bold text-navy">{exp.title}</h2>
                                <p className="text-lg text-navy/70 leading-relaxed">
                                    {exp.description}
                                </p>
                                
                                <div className="pt-8">
                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-[#25D366]/20 transition-transform hover:-translate-y-1"
                                    >
                                        <MessageCircle size={24} />
                                        Inquire via WhatsApp
                                    </a>
                                </div>
                            </div>

                        </div>
                    );
                })}
            </section>
            
            {/* Bottom CTA */}
            <section className="bg-navy py-24 text-center px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-cream mb-6">Want a completely custom experience?</h2>
                <p className="text-sage mb-10 max-w-xl mx-auto">
                    Let us know what you're passionate about, and our local experts will craft a day tailored entirely to your interests.
                </p>
                <a
                    href="https://wa.me/201557469694?text=Hello Rhala Tours, I'd like to plan a custom local experience."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gold hover:bg-cream text-navy px-10 py-4 rounded-full font-bold text-lg transition-colors"
                >
                    <MessageCircle size={24} />
                    Chat with a Local Expert
                </a>
            </section>
        </div>
    );
}
