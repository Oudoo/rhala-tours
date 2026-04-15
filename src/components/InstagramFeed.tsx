'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Heart, ExternalLink } from 'lucide-react';
import Image from 'next/image';

// MOCK DATA (Fallback)
const MOCK_POSTS = [
    {
        id: '1',
        media_url: "/tours-packages/Island-of-Agilika-egypt-768x600.png",
        permalink: "https://instagram.com",
        like_count: 1200,
        caption: "Egyptian tea by the Nile"
    },
    {
        id: '2',
        media_url: "/tours-packages/Hanging-Church-in-Egypt-768x600.png",
        permalink: "https://instagram.com",
        like_count: 2400,
        caption: "White Desert sunset"
    },
    {
        id: '3',
        media_url: "/tours-packages/The-Great-Pyramids-768x600.png",
        permalink: "https://instagram.com",
        like_count: 3100,
        caption: "Camel ride at Pyramids"
    },
    {
        id: '4',
        media_url: "/tours-packages/Luxor-Temple-egypt-768x600.png",
        permalink: "https://instagram.com",
        like_count: 950,
        caption: "Luxor Temple hieroglyphics"
    },
    {
        id: '5',
        media_url: "/tours-packages/Beach-in-Hurghada-egypt-768x600.png",
        permalink: "https://instagram.com",
        like_count: 1800,
        caption: "Relaxing by the pool"
    }
];

export default function InstagramFeed() {
    const [posts, setPosts] = useState(MOCK_POSTS);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInstagramPosts = async () => {
            const token = process.env.NEXT_PUBLIC_IG_TOKEN;
            if (!token) {
                console.log("No Instagram Token found. Using mock data.");
                setLoading(false);
                return;
            }

            try {
                const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,like_count&access_token=${token}&limit=5`;
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Failed to fetch from Instagram');
                }

                const data = await response.json();

                // Filter and map data (handle Carousel albums vs Images)
                const realPosts = data.data.map((post: any) => ({
                    id: post.id,
                    media_url: post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url,
                    permalink: post.permalink,
                    like_count: post.like_count || 0,
                    caption: post.caption || 'Rhala Moments'
                }));

                setPosts(realPosts.slice(0, 5));
            } catch (error) {
                console.error("Instagram Fetch Error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchInstagramPosts();
    }, []);

    // Helper to format likes (e.g. 1200 -> 1.2k)
    const formatLikes = (count: number) => {
        if (count >= 1000) {
            return (count / 1000).toFixed(1) + 'k';
        }
        return count.toString();
    };

    return (
        <section className="bg-white py-16">
            <div className="text-center mb-10 px-6">
                <a
                    href="https://instagram.com/rhalatoursegypt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal font-bold text-2xl md:text-3xl hover:text-navy transition-colors inline-block mb-2"
                >
                    @rhalatoursegypt
                </a>
                <p className="text-sage font-medium tracking-wide">
                    Tag us to be featured <span className="font-bold">#RhalaMoments</span>
                </p>
            </div>

            {/* Flush Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 bg-gray-100">
                {posts.map((post) => (
                    <a
                        key={post.id}
                        href={post.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group aspect-square block overflow-hidden bg-gray-200"
                    >
                        <Image
                            src={post.media_url}
                            alt={post.caption || "Instagram Post"}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            unoptimized={true} // Important for external CDN images sometimes
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white backdrop-blur-[2px]">
                            <Instagram size={32} className="mb-2" />
                            <span className="font-bold flex items-center gap-1">
                                <Heart size={16} fill="white" /> {formatLikes(post.like_count)}
                            </span>
                        </div>
                    </a>
                ))}
            </div>

            <div className="text-center mt-12 px-6">
                <a
                    href="https://instagram.com/rhalatoursegypt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-teal text-teal font-bold hover:bg-teal hover:text-white transition-all duration-300"
                >
                    Follow on Instagram
                </a>
            </div>
        </section>
    );
}
