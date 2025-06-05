"use client"

import Footer from "@/components/website/Footer"
import Header from "@/components/website/Header"
import Link from "next/link"
import {
    Banknote,
    Calculator,
    Percent,
    HandCoins,
    ChartArea,
    Landmark,
    FileText,
    Scale,
    UserCog,
    ShieldCheck,
    Lightbulb,
    Megaphone,
    LayoutDashboard
} from "lucide-react";

const services = [
    {
        name: 'Finance & Compliance',
        icon: FileText,
        services: [
            "Transfer Pricing Reports",
            "Financial Forecasting",
            "Internal Controls Setup",
            "Budgeting & Management Reports"
        ],
    },
    {
        name: 'Legal & Corporate',
        icon: Scale,
        services: [
            "Company Formation (Local & International)",
            "KYC / AML Checks",
            "GDPR Compliance Audits",
            "Trademark Registration",
            "Legal Document Drafting",
            "Shareholder Agreements"
        ],
    },
    {
        name: 'HR & Employer Services',
        icon: UserCog,
        services: [
            "Employment Contracts",
            "HR Policies & Manuals",
            "Work Visa Assistance",
            "Payroll Outsourcing",
            "Remote Hiring Support"
        ],
    },
    {
        name: 'Cybersecurity & IT',
        icon: ShieldCheck,
        services: [
            "ISO 27001 / 9001 Certification",
            "Data Security Audits",
            "Penetration Testing",
            "IT Infrastructure Setup",
            "Cloud Migration Support",
            "SaaS Application Consulting"
        ],
    },
    {
        name: 'Business Strategy & Advisory',
        icon: Lightbulb,
        services: [
            "Pitch Deck Reviews",
            "Business Plan Creation",
            "Investor Reporting",
            "Market Research",
            "Expansion Strategy",
            "Due Diligence Reports"
        ],
    },
    {
        name: 'Marketing & Creative',
        icon: Megaphone,
        services: [
            "Website Development",
            "Social Media Management",
            "Paid Ad Campaigns (Google, Facebook, LinkedIn)",
            "SEO Audits & Content Strategy",
            "Graphic Design & Branding",
            "Video Commercials",
            "Email Marketing Automation"
        ],
    },
    {
        name: 'All From Your Dashboard',
        icon: LayoutDashboard,
        services: [
            "Bookkeeping",
            "VAT Returns",
            "Payroll",
            "Tax Return Filing",
            "MBR Filings",
            "Audit Preparation",
            "CFO Services",
            "Incorporations",
            "ISO Certification",
            "GDPR Audits",
            "Legal Support",
            "Marketing & IT",
            "Strategic Planning"
        ],
    },
];

const servicesCore = [
    {
        icon: Calculator,
        title: 'Bookkeeping',
        description: 'Daily postings, reconciliations, and monthly reports - audit-ready, always.',
    },
    {
        icon: Percent,
        title: 'VAT Returns',
        description: 'We prepare and submit your VAT return on time, with full supporting documentation.',
    },
    {
        icon: HandCoins,
        title: 'Payroll Processing',
        description: 'Run compliant payroll, generate payslips, and handle tax submissions with ease.',
    },
    {
        icon: Banknote,
        title: 'Tax Return Filing',
        description: 'Corporate tax return submissions handled by licensed experts.',
    },
    {
        icon: ChartArea,
        title: 'MBR Filings',
        description: 'We take care of any filing requirements related to the Malta Business Registry.',
    },
    {
        icon: Landmark,
        title: 'Audit Preparation',
        description: 'We prepare and organize your financials for a smooth audit experience.',
    },
    {
        icon: ShieldCheck,
        title: 'CFO Services',
        description: 'On-demand strategic financial guidance, cash flow analysis, investor reporting, and performance insights.',
    },
]

export default function Services() {
    return (
        <>
            <Header />
            <main>
                <section className="bg-white py-10">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
                        {/* Heading Section */}
                        <div className="lg:max-w-4/6 w-full">
                            <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 leading-tight">Vacei Services</h1>
                            <p className="mt-4 mb-1 text-neutral-900 font-semibold text-lg">
                                Everything Your Business Needs - All in One Place
                            </p>
                            <p className="text-neutral-800">From expert bookkeeping to ISO certification, marketing, legal help, and more — Vacei brings together core financial services and a wide range of verified partners, all managed from one powerful dashboard.</p>
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

                <section id="why-vacei" className="bg-gray-800 py-10 px-4">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl lg:text-3xl font-bold text-white text-center">Core Services (Handled by the Vacei Team)</h2>
                        <p className="mb-8 mt-2 text-center font-semibold text-white">Delivered directly by our in-house professionals.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                            {servicesCore.map(({ title, icon: Icon, description }) => (
                                <div
                                    key={title}
                                    className="group bg-white transition hover:shadow-xl rounded-0 p-6 relative overflow-hidden cursor-pointer"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-[#00799c] text-white p-2.5 rounded-full">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-black group-hover:text-[#00799c]">
                                                {title}
                                            </h3>
                                            <p className="text-neutral-500 text-xs leading-relaxed">{description}</p>
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
                            <h2 className="text-3xl lg:text-3xl font-bold text-gray-900 mb-4">
                                Marketplace Services <span className="font-bold text-primary">(Request & Compare Offers)</span>
                            </h2>
                            <p className="mt-2 text-gray-800 mx-auto font-semibold">
                                Request any business service and receive offers from verified partners -
                            </p>
                            <p className="mt-2 text-gray-500 mx-auto font-semibold mb-6">
                                all managed securely in your dashboard.
                            </p>
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
                                    <ul className="list-disc pl-8 mt-6 space-y-3 text-gray-700 text-base">
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
                        <p className="text-black text-center italic text-sm pt-8">Choose to work directly with Vacei or request quotes from verified professionals.</p>
                    </div>
                </section>

                <section className="bg-neutral-900 text-white py-10 px-6">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-6">

                        <div>
                            <h2 className="text-3xl font-extrabold leading-tight tracking-tight">
                                Get Started Now
                            </h2>
                            <p className="text-neutral-400 text-lg mt-3">
                                Let us simplify your finances and streamline your business needs - all from one platform.
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
