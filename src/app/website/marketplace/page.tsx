"use client"

import Footer from "@/components/website/Footer"
import Header from "@/components/website/Header"
import Link from "next/link"
import { CheckCircle } from 'lucide-react'

import {
    FileText,
    Scale,
    UserCog,
    Lightbulb,
    UploadCloud,
    CalendarCheck2,
    FileClock,
    ThumbsUp,
    ShieldCheck
} from "lucide-react";

import HowItWorkServices from "@/components/website/HowItWorkServices"

const services = [
    {
        name: 'Finance & Tax',
        icon: FileText,
        services: [
            "CFO-as-a-Service",
            "Budgeting & Forecasts",
            "Transfer Pricing Reports",
            "Tax Advisory"
        ],
    },
    {
        name: 'Legal & Compliance',
        icon: Scale,
        services: [
            "Company Formations",
            "GDPR & AML Compliance",
            "KYC/UBO Checks",
            "Legal Drafting & Shareholder Agreements",
            "Residency & Citizenship by Investment",
            "Visa & Immigration Support",
            "Regulatory Filings"
        ],
    },
    {
        name: 'HR & Payroll',
        icon: UserCog,
        services: [
            "Employment Contracts",
            "Payroll Setup & Reporting",
            "HR Policy Drafting",
            "Work Permit Assistance"
        ],
    },
    {
        name: 'Cybersecurity & IT',
        icon: ShieldCheck,
        services: [
            "ISO 27001 / ISO 9001 Certification",
            "Cybersecurity Risk Assessments",
            "Penetration Testing",
            "IT Infrastructure Setup"
        ],
    },
    {
        name: 'Strategy & Marketing',
        icon: Lightbulb,
        services: [
            "Business Plans & Pitch Decks",
            "Digital Marketing & SEO",
            "Market Research",
            "Branding & Creative Services",
            "Website & App Development"
        ],
    }
];

const servicesCore = [
    {
        icon: UploadCloud,
        title: 'File Upload & Sharing per request'
    },
    {
        icon: CalendarCheck2,
        title: 'Zoom Integration with calendar links'
    },
    {
        icon: FileClock,
        title: 'Audit Trail: Timestamps and full logs'
    },
    {
        icon: ThumbsUp,
        title: 'Ratings & Reviews after service delivery'
    },
    {
        icon: ShieldCheck,
        title: 'Safety Tools: Auto-suspend on abuse or flagged behavior'
    },
];

const marketplaces = [
    'Central Dashboard: Post, chat, share documents, and track status - all in one place.',
    'Documented Workflow: Keep all quotes, deliverables, and messages for future reference.',
    'Verified Professionals: Every provider is screened and approved.',
    'Easy Follow-Up: Ongoing service history at your fingertips.',
    'No Back & Forth: Get matched fast and manage everything in-platform.'
];

export default function Marketplace() {
    return (
        <>
            <Header />
            <main>
                <section className="bg-white py-10">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
                        {/* Heading Section */}
                        <div className="lg:max-w-4/6 w-full">
                            <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 leading-tight">Vacei Marketplace</h1>
                            <p className="mt-4 mb-1 text-neutral-900 font-semibold text-lg">
                                Your Gateway to Verified Business Services
                            </p>
                            <p className="text-neutral-800">Post your requirements. Get offers. Choose the best - all from your Vacei dashboard.</p>
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

                <section className="bg-gray-50 py-10">
                    <div className="max-w-7xl mx-auto px-4 md:px-6">
                        <div className="text-center max-w-5xl mx-auto">
                            <h2 className="text-3xl lg:text-3xl font-bold text-primary mb-4">What Is the Vacei Marketplace?</h2>
                            <p className="mt-2 text-black mx-auto">The Vacei Marketplace connects businesses with trusted, verified service providers. Whether you need an ISO certification, company formation, residency guidance, legal drafting, or marketing support - simply post your requirement, set your deadline, and review proposals from vetted experts.</p>
                            <p className="mt-2 text-black mx-auto mb-6">Everything is handled securely, transparently, and professionally.</p>
                        </div>
                        <div className="max-w-3xl mx-auto bg-white rounded-0 shadow-2xl p-5 border-s-5 border-color">
                            <p className="font-bold text-black">Every request and completed service remains saved and trackable
                                <span className="font-normal">within your dashboard - with full documentation, chat history, and audit trail.</span>
                            </p>
                        </div>
                    </div>
                </section>

                <HowItWorkServices />

                <section id="why-vacei" className="bg-gray-800 py-10 px-4">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl lg:text-3xl font-bold text-white text-center mb-8">Services You Can Request</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                            {servicesCore.map(({ title, icon: Icon }) => (
                                <div
                                    key={title}
                                    className="group bg-white transition hover:shadow-xl rounded-0 p-6 relative overflow-hidden cursor-pointer"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="bg-[#00799c] text-white p-2.5 rounded-full">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-black group-hover:text-[#00799c]">
                                                {title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-gray-50 py-10">
                    <div className="max-w-7xl mx-auto px-4 md:px-6">
                        <div className="text-center">
                            <h2 className="text-3xl lg:text-3xl font-bold text-gray-900 mb-6">Services You Can Request</h2>
                        </div>
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
                        <h3 className="text-3xl lg:text-3xl font-bold text-gray-900">Why Use the Vacei Marketplace?</h3>

                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-7xl mx-auto">
                            {marketplaces.map((marketplace, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary mt-1" />
                                    <p className="text-black text-[15px]">{marketplace}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-10 bg-primary">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h3 className="text-3xl lg:text-3xl font-bold text-white mb-4">Are You a Service Provider?</h3>
                        <p className="mt-2 text-white text-base text-center mb-6">Join our network of verified experts. Receive matched requests and grow your business.</p>
                        <Link href="javascript:void(0)" className="bg-white px-4 py-2.5 font-medium">Apply as a Verified Partner</Link>
                    </div>
                </section>

                <section className="bg-neutral-900 text-white py-10 px-6">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-6">

                        <div>
                            <h2 className="text-3xl font-extrabold leading-tight tracking-tight">
                                Get Started
                            </h2>
                            <p className="text-neutral-400 text-lg mt-3">
                                Ready to request your first service? Whether it's bookkeeping, incorporation, cybersecurity, or a residency scheme - it's all here.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 md:justify-end">
                            <Link
                                href="javascript:void(0)"
                                className="bg-white text-black font-medium px-6 py-3 shadow hover:bg-neutral-200 transition"
                            >
                                Create Free Account
                            </Link>
                            <Link
                                href="javascript:void(0)"
                                className="border border-white/20 text-white font-medium px-6 py-3 hover:bg-white/10 transition"
                            >
                                Post a Requirement
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}
