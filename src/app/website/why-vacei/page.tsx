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
        name: 'One Platform, Endless Value',
        image: '/platform.png',
        services: [
            "Bookkeeping",
            "VAT Returns",
            "MBR Filings",
            "Payroll & Tax Returns",
            "Incorporations",
            "Cybersecurity Audits",
            "ISO Certifications",
            "CFO & Business Advisory",
            "Residency Scheme Support",
            "And more - all visible, tracked, and organized in one dashboard."
        ],
    },
    {
        name: 'Total Visibility',
        image: '/visibility.png',
        services: [
            "Instantly view what's posted, pending, or needs review.",
            "Raise queries directly in your dashboard.",
            "Download audit-ready reports anytime."
        ],
    },
    {
        name: 'QuickBooks Sync',
        image: "/sync.png",
        services: [
            "We set up QuickBooks for you (included in every plan).",
            "All your documents and transactions sync automatically.",
            "No more switching between tools."
        ],
    },
    {
        name: 'Talk to a Real Accountant, Anytime',
        image: "/talk.png",
        services: [
            "Built-in live chat inside your dashboard.",
            "Book a Zoom call when you need it - no ticketing, no delays.",
            "Get answers in plain English, not accounting jargon."
        ],
    },
    {
        name: 'Real Bookkeeping, Done For You',
        image: "/real-booking.png",
        services: [
            "We don't just give you software - we do the work.",
            "Your books are managed by real professionals and updated monthly.",
            "No need to learn accounting or manage spreadsheets again."
        ],
    },
    {
        name: 'Built for Modern, Global Businesses',
        image: "/global-business.png",
        services: [
            "Whether you're a solo founder or managing multiple entities — Vacei grows with you.",
            "Handle filings, compliance, and service requests across countries.",
            "Expand faster, with everything centralized in your portal."
        ],
    },
    {
        name: 'Request Any Business Service',
        image: "/request-any.png",
        services: [
            "Need payroll, VAT returns, audits, or ISO certification?",
            "Request from your dashboard with one click.",
            "Choose to work with Vacei's internal team or get offers from verified partners."
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
                <section className="bg-white pt-30 pb-14 px-4 relative overflow-hidden">
                    <div className="max-w-[350px] w-1/2 h-[350px] bg-[#CAAFFF] blur-[200px] absolute top-0 left-0 z-[1]"></div>
                    <div className="max-w-[350px] w-1/2 h-[350px] -rotate-180 bg-[#AFD2FF] blur-[200px] absolute bottom-0 right-0 z-[2]"></div>

                    <div className="max-w-7xl mx-auto px-4 md:px-6 text-center gap-10 relative z-[3]">
                        {/* Heading Section */}
                        <div className="lg:max-w-1/2 mx-auto w-full">
                            <h1 className="text-3xl lg:text-[56px] font-medium text-dark text-center mb-4 capitalize">Why Vacei?</h1>
                            <p className="mt-4 text-neutral-900 font-normal text-xl mb-2">The smarter way to manage your business — all in one place.</p>
                            <p className="text-[#3D3D3D]">Vacei is more than just a bookkeeping tool. It's a centralized platform for financial clarity, compliance, and business growth. Built for founders, teams, and businesses ready to simplify operations and scale faster.</p>
                        </div>
                    </div>
                </section>
                <div className="bg-white pb-[100px]"></div>
                <section className="bg-cream py-20">
                    <div className="max-w-7xl mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6 mb-8">
                            {/* First column: large card (spans 2 rows) */}
                            <div className="lg:row-span-2">
                                <div className="h-full group bg-white hover:bg-white transition border border-[#D9D9D9] hover:shadow-xl p-8 relative overflow-hidden flex flex-col rounded-2xl">
                                    {(() => {
                                        return (
                                            <div className="flex items-center gap-4">
                                                <img src={services[0].image} alt="" className="w-6 h-6 object-contain" />
                                                <div>
                                                    <h3 className="text-xl font-semibold text-black">
                                                        {services[0].name}
                                                    </h3>
                                                </div>
                                            </div>
                                        );
                                    })()}
                                    <ul className="list-disc pl-8 mt-6 space-y-3 text-gray-700">
                                        {services[0].services.map((service, idx) => (
                                            <li className="flex gap-2.5 items-center text-[#3D3D3D] lg:text-lg text-base" key={idx}> <img className="w-4 h-4 object-contain" alt="list" src="/list-point.svg"></img> {service}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Next 3 standard cards */}
                            {services.slice(1, 5).map(({ name, image, services: serviceList }) => (
                                <div
                                    key={name}
                                    className="group bg-white hover:bg-white transition border border-[#D9D9D9]
                                    hover:shadow-xl rounded-2xl p-8 relative overflow-hidden flex flex-col"
                                >
                                    <div className="flex items-center gap-4">
                                        <img src={image} alt="" className="w-6 h-6 object-contain" />
                                        <div>
                                            <h3 className="text-xl font-semibold text-[#0A1B04]">
                                                {name}
                                            </h3>
                                        </div>
                                    </div>
                                    <ul className="list-disc pl-6 mt-4 space-y-2 text-[#3D3D3D]">
                                        {serviceList.map((service, idx) => (
                                            <li className="flex gap-2.5 items-center text-[#3D3D3D] lg:text-lg text-base" key={idx}><img className="w-4 h-4 object-contain" alt="list" src="/list-point.svg"></img> {service}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Last row with 2 cards side-by-side on desktop, stacked on mobile */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {services.slice(5, 7).map(({ name, image, services: serviceList }) => (
                                <div
                                    key={name}
                                    className="group bg-white hover:bg-white transition border border-[#D9D9D9] hover:shadow-xl
                                    rounded-2xl p-8 relative  overflow-hidden flex flex-col"
                                >
                                    <div className="flex items-center gap-4">
                                        <img src={image} alt="" className="w-6 h-6 object-contain" />
                                        <div>
                                            <h3 className="text-xl font-semibold text-black">
                                                {name}
                                            </h3>
                                        </div>
                                    </div>
                                    <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                                        {serviceList.map((service, idx) => (
                                            <li className="flex gap-2.5 items-center text-[#3D3D3D] lg:text-lg text-base" key={idx}><img className="w-4 h-4 object-contain" alt="list" src="/list-point.svg"></img>  {service}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                <section className="py-[120px] bg-white">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <div className="lg:px-[60px] px-4 lg:py-[50px] py-5 rounded-3xl" style={{ boxShadow: '0px 0px 44px 0px #00000014' }}>
                            <h3 className="text-3xl lg:text-5xl font-normal text-dark lg:mb-[60px] leading-14">Why Our Clients Choose Vacei</h3>
                            <div className="lg:mt-12 mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-6xl mx-auto">
                                {features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <img src="/check.svg" className="w-4 h-4 object-contain" alt="" />
                                        <p className="text-black text-base font-normal">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[#0A1B04] text-white py-[100px] px-4">
                    <div className="lg:max-w-2xl max-w-xl mx-auto px-4">
                        <div className="text-center mb-[50px]">
                            <h2 className="text-3xl lg:text-5xl font-normal leading-14 text-white mb-4">
                                The modern back office for modern businesses.
                            </h2>
                            <p className="text-base text-[#979797] font-light mb-[50px]">Ready to focus on growth instead of admin?</p>
                        </div>

                        <div className="flex flex-col sm:flex-row lg:flex-row gap-6 justify-center lg:px-0 px-5">
                        <Link
                            href="javascript:void(0)"
                            className="bg-primary text-white font-normal px-8 py-3.5 text-lg rounded-lg capitalize text-center"
                        >
                            Create Free Account
                        </Link>
                        <Link
                            href="javascript:void(0)"
                            className="bg-transparent text-white font-normal px-8 py-3 text-lg rounded-lg capitalize border border-white text-center"
                        >
                            Request a Demo
                        </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}
