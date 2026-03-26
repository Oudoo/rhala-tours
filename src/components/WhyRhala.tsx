'use client';

import { Compass, Shield, UserCheck } from 'lucide-react';

export default function WhyRhala() {
    const features = [
        {
            icon: <Compass className="w-10 h-10 text-gold" />,
            title: "Local Architects",
            description: "Crafted by experts with 15+ years of experience in Egyptian tourism."
        },
        {
            icon: <Shield className="w-10 h-10 text-gold" />,
            title: "Safety First",
            description: "24/7 dedicated support team ensuring your peace of mind."
        },
        {
            icon: <UserCheck className="w-10 h-10 text-gold" />,
            title: "Tailored for You",
            description: "Every itinerary is customized to match your pace and preferences."
        }
    ];

    return (
        <section className="bg-teal py-24 text-cream">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="mb-6 bg-navy/30 p-4 rounded-full border border-gold/20">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">{feature.title}</h3>
                            <p className="text-cream/80 leading-relaxed max-w-xs">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
