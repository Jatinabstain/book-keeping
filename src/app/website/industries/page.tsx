"use client"

import Footer from "@/components/website/Footer"
import Header from "@/components/website/Header"
import Link from "next/link"
import {
    Rocket,
    Banknote,
    ShoppingCart,
    Scale,
    Building2,
    Globe,
    HeartPulse,
    GraduationCap
} from "lucide-react";

const services = [
    {
        name: 'Startups & Tech',
        icon: Rocket,
        services: [
            "Fast onboarding and real-time bookkeeping",
            "Pitch deck and business plan services",
            "Budgeting, forecasting, and investor-ready reports",
            "Cap table support and financial modeling"
        ],
    },
    {
        name: 'Financial Services',
        icon: Banknote,
        services: [
            "Accurate accounting for regulated entities",
            "Tax return support and compliance reporting",
            "Transfer pricing and CFO-level advisory",
            "KYC/AML checks and regulatory filings"
        ],
    },
    {
        name: 'E-commerce & Retail',
        icon: ShoppingCart,
        services: [
            "Sales tax / VAT return submissions",
            "Integration with POS & payment platforms",
            "Inventory reconciliation",
            "Multi-currency support"
        ],
    },
    {
        name: 'Legal & Corporate Services',
        icon: Scale,
        services: [
            "Company setup and MBR filings",
            "Cross-border structuring support",
            "Ongoing compliance and documentation management",
            "GDPR and ISO certification handling"
        ],
    },
    {
        name: 'Construction & Real Estate',
        icon: Building2,
        services: [
            "Project-based accounting",
            "Payroll and subcontractor management",
            "VAT recovery and reporting",
            "Investment structuring & property SPVs"
        ],
    },
    {
        name: 'International Businesses',
        icon: Globe,
        services: [
            "Localized compliance with international expansion support",
            "Incorporation, residency schemes, and tax filing in multiple jurisdictions",
            "Currency conversions and cross-border bookkeeping"
        ],
    },
    {
        name: 'Health & Wellness',
        icon: HeartPulse,
        services: [
            "Employee payroll and HR policy support",
            "VAT exemptions and special scheme compliance",
            "Business licensing and audit support"
        ],
    },
    {
        name: 'Education & NGOs',
        icon: GraduationCap,
        services: [
            "Donor reporting and fund tracking",
            "Financial statements and audit-ready books",
            "Budgeting, grant accounting, and regulatory filing"
        ],
    },
];


export default function Industries() {
    return (
        <>
            <Header />
            <main>
                <section className="bg-white py-10">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
                        {/* Heading Section */}
                        <div className="lg:max-w-4/6 w-full">
                            <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 leading-tight">Industries We Serve</h1>
                            <p className="mt-4 mb-1 text-neutral-900 font-semibold text-lg">
                                Vacei is built for businesses of all sizes - across every industry.
                            </p>
                            <p className="text-neutral-800">Whether you're a solo founder, a growing startup, or a multinational, our smart bookkeeping and business services platform adapts to your needs.</p>
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
                        <div className="text-center hidden">
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
                                    <ul className="list-disc pl-8 mt-6 space-y-3 text-gray-700">
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
                            {services.slice(5, 8).map(({ name, icon: Icon, services: serviceList }) => (
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

                <section className="bg-neutral-900 text-white py-10 px-6">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-6">

                        <div>
                            <h2 className="text-3xl font-extrabold leading-tight tracking-tight">
                                Need help with a different sector?
                            </h2>
                            <p className="text-neutral-400 text-lg mt-3">
                                Vacei supports any business, and our verified partner marketplace ensures you get the right experts — no matter your industry.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 md:justify-end">
                            <Link
                                href="#"
                                className="bg-white text-black font-medium px-6 py-3 shadow hover:bg-neutral-200 transition"
                            >
                                Create Free Account
                            </Link>
                            <Link
                                href="#"
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
