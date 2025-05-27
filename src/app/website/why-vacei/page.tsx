"use client"

import Footer from "@/components/website/Footer"
import Header from "@/components/website/Header"
import { CheckCircle } from 'lucide-react'
import Link from "next/link"

import {
    BookOpenCheck,
    BarChart3,
    RefreshCcw,
    MessageCircle,
    BadgeCheck,
    Globe2,
    Layers3,
} from 'lucide-react';

const services = [
    {
        name: 'Real Bookkeeping, Done For You',
        icon: BookOpenCheck,
        services: [
            "We don't just give you software - we do the work.",
            'Your books are managed by real professionals and updated monthly.',
            'No need to learn accounting or manage spreadsheets again.',
        ],
    },
    {
        name: 'Total Visibility',
        icon: BarChart3,
        services: [
            "Instantly view what's posted, pending, or needs review.",
            'Raise queries directly in your dashboard.',
            'Download audit-ready reports anytime.'
        ],
    },
    {
        name: 'QuickBooks Sync',
        icon: RefreshCcw,
        services: [
            'We set up QuickBooks for you (included in every plan).',
            'All your documents and transactions sync automatically.',
            'No more switching between tools.'
        ],
    },
    {
        name: 'Talk to a Real Accountant, Anytime',
        icon: MessageCircle,
        services: [
            'Built-in live chat inside your dashboard.',
            'Book a Zoom call when you need it - no ticketing, no delays.',
            'Get answers in plain English, not accounting jargon.'
        ],
    },
    {
        name: 'Request Any Business Service',
        icon: BadgeCheck,
        services: [
            'Need payroll, VAT returns, audits, or ISO certification?',
            'Request from your dashboard with one click.',
            "Choose to work with Vacei's internal team or get offers from verified partners."
        ],
    },
    {
        name: 'Built for Modern, Global Businesses',
        icon: Globe2,
        services: [
            "Whether you're a solo founder or managing multiple entities — Vacei grows with you.",
            'Handle filings, compliance, and service requests across countries.',
            'Expand faster, with everything centralized in your portal.'
        ],
    },
    {
        name: 'One Platform, Endless Value',
        icon: Layers3,
        services: [
            "Bookkeeping",
            'VAT Returns',
            'MBR Filings',
            "Payroll & Tax Returns",
            "Incorporations",
            'Cybersecurity Audits',
            "ISO Certifications",
            "CFO & Business Advisory",
            "Residency Scheme Support",
            "And more - all visible, tracked, and organized in one dashboard."
        ],
    },
];

const features = [
    'Faster setup - live in under 2 minutes',
    'Human support - expert help, always included.',
    'Scales with you - from freelancer to international business.',
    'Secure & compliant - GDPR-ready, with audit trails built in.',
    'Verified partner network - legal, tax, ISO, and more'
];

export default function WhyVacei() {
    return (
        <>
            <Header />
            <main>
                <section className="bg-white py-10 px-4">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
                        {/* Heading Section */}
                        <div className="lg:max-w-4/6 w-full">
                            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">Why Vacei?</h1>
                            <p className="mt-4 mb-1 text-neutral-900 font-semibold text-lg">
                                The smarter way to manage your business — all in one place.
                            </p>
                            <p className="text-neutral-800">Vacei is more than just a bookkeeping tool. It's a centralized platform for financial clarity, compliance, and business growth. Built for founders, teams, and businesses ready to simplify operations and scale faster.</p>
                        </div>

                        {/* Optional: Add image or illustration here */}
                        <div className="lg:block lg:max-w-1/3 w-full">
                            <img
                                src="/page-banner1.svg"
                                alt="Vacei dashboard illustration"
                                className="w-full max-w-md"
                            />
                        </div>
                    </div>
                </section>
                <section className="bg-gray-50 py-16">
                    <div className="max-w-7xl mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6 mb-8">
                            {/* First column: large card (spans 2 rows) */}
                            <div className="lg:row-span-2">
                                <div className="h-full group bg-white hover:bg-white transition border border-gray-200 hover:shadow-xl rounded-0 p-7 relative overflow-hidden hover:border-[#00799c] flex flex-col">
                                    {(() => {
                                        const Icon = services[0].icon;
                                        return (
                                            <div className="flex items-center gap-4">
                                                <div className="bg-[#00799c] text-white p-2.5 rounded-full">
                                                    <Icon className="w-7 h-7" />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-black group-hover:text-[#00799c]">
                                                        {services[0].name}
                                                    </h3>
                                                </div>
                                            </div>
                                        );
                                    })()}
                                    <ul className="list-disc pl-8 mt-6 space-y-3 text-gray-700 text-lg">
                                        {services[0].services.map((service, idx) => (
                                            <li key={idx}>{service}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Next 3 standard cards */}
                            {services.slice(1, 5).map(({ name, icon: Icon, services: serviceList }) => (
                                <div
                                    key={name}
                                    className="group bg-white hover:bg-white transition border border-gray-200
                                    hover:shadow-xl rounded-0 p-6 relative overflow-hidden hover:border-[#00799c] flex flex-col"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="bg-[#00799c] text-white p-2.5 rounded-full">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-black group-hover:text-[#00799c]">
                                                {name}
                                            </h3>
                                        </div>
                                    </div>
                                    <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                                        {serviceList.map((service, idx) => (
                                            <li key={idx}>{service}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Last row with 2 cards side-by-side on desktop, stacked on mobile */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {services.slice(5, 7).map(({ name, icon: Icon, services: serviceList }) => (
                                <div
                                    key={name}
                                    className="group bg-white hover:bg-white transition border border-gray-200 hover:shadow-xl
                                    rounded-0 p-6 relative overflow-hidden hover:border-[#00799c] flex flex-col"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="bg-[#00799c] text-white p-2.5 rounded-full">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-black group-hover:text-[#00799c]">
                                                {name}
                                            </h3>
                                        </div>
                                    </div>
                                    <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                                        {serviceList.map((service, idx) => (
                                            <li key={idx}>{service}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                <section className="py-10 bg-white">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h3 className="text-3xl lg:text-3xl font-bold text-gray-900">Why Our Clients Choose Vacei</h3>

                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-6xl mx-auto">
                            {features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary mt-1" />
                                    <p className="text-black text-base">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-neutral-900 text-white py-10 px-6">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-6">

                        <div>
                            <h2 className="text-3xl font-extrabold leading-tight tracking-tight">
                                The modern back office for modern businesses.
                            </h2>
                            <p className="text-neutral-400 text-lg mt-3">
                                Ready to focus on growth instead of admin?
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 md:justify-end">
                            <Link
                                href="#"
                                className="bg-white text-black font-medium px-6 py-3 shadow hover:bg-neutral-200 transition"
                            >
                                Get Started Free
                            </Link>
                            <Link
                                href="#"
                                className="border border-white/20 text-white font-medium px-6 py-3 hover:bg-white/10 transition"
                            >
                                Book a Demo
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}
