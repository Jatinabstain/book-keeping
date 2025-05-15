"use client";

import Image from "next/image";
import Link from "next/link";

export default function FeatureSection() {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-18 items-center">
                {/* Text Content */}
                <div className="lg:order-1 order-2">
                    <p className="text-primary text-sm font-bold uppercase mb-2">Vacei</p>
                    <h2 className="text-3xl lg:text-3xl font-bold text-gray-900 mb-4">Your All-In-One Bookkeeping & Accounting Dashboard</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">Simplify your finances. Automate your books. Connect with expert accountants — all from one smart dashboard.</p>
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
