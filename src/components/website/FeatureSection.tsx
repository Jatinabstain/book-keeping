"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FeatureSection() {
    return (
        <section className="bg-transparent md:pt-[140px] pt-30 pb-10">
            <div className="max-w-5xl mx-auto px-4">
                {/* Text Content */}
                <div>
                    <h2 className="text-3xl lg:text-[56px] font-medium text-dark text-center mb-4">Your All-In-One Book keeping & Business Services Dashboard</h2>
                    <p className="text-center text-dark font-normal md:text-lg leading-[24px] mb-8">Power your business with smarter bookkeeping and on-demand <br /> expert services. One platform. One dashboard. Endless growth.</p>
                    <Link href="/contact" className="flex gap-2 rounded-lg mx-auto w-fit bg-primary text-white font-medium px-10 py-[18px] font-normal text-lg leading-5">Get Started Free <img src="/arrow-right.svg" alt="" /></Link>
                </div>

                {/* Image */}
                <div className="relative w-full">
                    <img
                        src="/dashboard.png"
                        alt="dashboard"
                    />
                </div>
            </div>
        </section>
    );
}
