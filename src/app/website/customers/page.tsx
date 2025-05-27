"use client"

import Footer from "@/components/website/Footer"
import Header from "@/components/website/Header"
import Link from "next/link"

import {
  NotebookText,
  Building2,
  Rocket,
  Globe,
  Users,
  LayoutDashboard
} from "lucide-react";

const services = [
    {
        name: 'Solo Entrepreneurs & Freelancers',
        subTitle: "You focus on the work. We'll handle the books.",
        icon: NotebookText,
        services: [
            "No spreadsheets, no stress",
            "Simple monthly plans",
            "Access to expert services on demand",
            "Easy VAT & tax support"
        ],
        description: '“I finally stopped wasting Sundays doing bookkeeping. Vacei is my back office.” - Clara V., Consultant'
    },
    {
        name: 'Small & Medium Businesses',
        subTitle: "Smarter systems for scaling businesses.",
        icon: Building2,
        services: [
            "Accurate monthly financials",
            "VAT returns, payroll, and filings in one portal",
            "Dedicated accountant + live support",
            "Audit-ready records always on file"
        ],
        description: 'Our whole team uses the dashboard — finance has never been this clear.” — Jake R., Retail Owner'
    },
    {
        name: 'Startups & Growth Companies',
        subTitle: "Back your growth with better numbers.",
        icon: Rocket,
        services: [
            "Investor-ready reports and forecasts",
            "Monthly bookkeeping and real-time dashboards",
            "CFO services, market research, and pitch support",
            "Business modeling and compliance tracking"
        ],
        description: '“As a founder, I needed one place for books, reports, and support — Vacei delivered.” — Liam D., SaaS Founder'
    },
    {
        name: 'International Clients',
        subTitle: "Global-ready, local-compliant.",
        icon: Globe,
        services: [
            "Multi-currency, VAT zones, and compliance support",
            "Cross-border filings, incorporations, and expansion services",
            "Access verified local partners for legal, audit, and licensing",
            "Residency & visa support available via partner network"
        ],
        description: '“We handle 3 entities across 2 continents — and all our documents, returns, and filings are in Vacei.” — Anna K., COO of Intl Trade Firm'
    },
    {
        name: 'Agencies, Firms & Advisors',
        subTitle: "Partner with Vacei - or use it to scale your own services.",
        icon: Users,
        services: [
            "Use Vacei's dashboard to manage clients efficiently",
            "Outsource your own accounting back office",
            "Refer clients to verified experts through our marketplace",
            "Unlock white-label options for your firm"
        ],
        description: '“We integrated our clients into Vacei and reduced reporting time by over 60%.” — Stephen G., Accounting Firm Partner'
    },
    {
        name: 'Every Customer Gets',
        subTitle: "",
        icon: LayoutDashboard,
        services: [
            "A clean and live financial dashboard",
            "Monthly bookkeeping handled by real accountants",
            "Optional add-ons for VAT, MBR, audits & more",
            "Access to verified business service partners",
            "All services & documents stored in one portal"
        ],
        description: ''
    }
];


export default function customers() {
    return (
        <>
            <Header />
            <main>
                <section className="bg-white py-10">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
                        {/* Heading Section */}
                        <div className="lg:max-w-4/6 w-full">
                            <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 leading-tight">Who We Help</h1>
                            <p className="mt-4 mb-1 text-neutral-900 font-semibold text-lg">
                                Vacei Customers
                            </p>
                            <p className="text-neutral-800">Vacei is trusted by ambitious founders, established businesses, and fast-growing teams across industries. Whether you're just getting started or scaling globally, we simplify your financial operations — so you can focus on growth.</p>
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
                                Solo Entrepreneurs & Freelancers
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
                                    <p className="mt-3  text-gray-700">{services[0].subTitle}</p>
                                    <ul className="list-disc pl-8 mt-3 space-y-3 text-gray-700">
                                        {services[0].services.map((service, idx) => (
                                            <li key={idx}>{service}</li>
                                        ))}
                                    </ul>
                                    <p className="mt-3 text-lg text-gray-700">{services[0].description}</p>
                                </div>
                            </div>

                            {/* Next 3 standard cards */}
                            {services.slice(1, 5).map(({ name, subTitle, description, icon: Icon, services: serviceList }) => (
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
                                    <p className="mt-3">{subTitle}</p>
                                    <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                                        {serviceList.map((service, idx) => (
                                            <li key={idx}>{service}</li>
                                        ))}
                                    </ul>
                                    <p className="mt-3  text-gray-700">{description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Last row with 2 cards side-by-side on desktop, stacked on mobile */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {services.slice(5, 8).map(({ name, subTitle, description,icon: Icon, services: serviceList }) => (
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
                                    <p className="mt-3">{subTitle}</p>
                                    <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                                        {serviceList.map((service, idx) => (
                                            <li key={idx}>{service}</li>
                                        ))}
                                    </ul>
                                    <p className="mt-3  text-gray-700">{description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-neutral-900 text-white py-10 px-6">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-6">

                        <div>
                            <h2 className="text-3xl font-extrabold leading-tight tracking-tight">
                                Ready to simplify your back office?
                            </h2>
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
