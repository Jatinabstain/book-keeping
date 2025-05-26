"use client";

import Image from "next/image";
import Link from "next/link";

export default function FeatureSection() {
    return (
        <section className="bg-white pt-16 pb-10">
            <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-18 items-center">
                {/* Text Content */}
                <div className="lg:order-1 order-2">
                    <p className="text-primary text-sm font-bold mb-2">vacei</p>
                    <h2 className="text-3xl lg:text-3xl font-bold text-gray-900 mb-4">Your All-In-One Bookkeeping & Business Services Dashboard</h2>
                    <p className="text-gray-700 font-bold leading-relaxed">Power your business with smarter bookkeeping and on-demand expert services.</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">One platform. One dashboard. Endless growth.</p>
                    <div className="flex gap-4 flex-wrap">
                        <Link
                            href="/contact"
                            className="inline-block bg-primary text-white font-medium px-6 py-2.5"
                        >
                            Get Started Free
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-block bg-gray-800 text-white font-medium px-6 py-2.5"
                        >
                            Watch How It Works
                        </Link>
                    </div>
                </div>

                {/* Image */}
                <div className="relative w-full h-72 md:h-96 lg:order-2 order-1">
                    <Image
                        src="/hero-img.svg" // replace with your image path
                        alt="Why Vacei"
                        fill
                    />
                </div>
            </div>
        </section>
    );
}
