"use client"

import Footer from "@/components/website/Footer"
import Header from "@/components/website/Header"
import Link from "next/link"
import {
    Scale,
    UserCog,
    ShieldCheck,
    Lightbulb,
    Megaphone,
    LayoutDashboard
} from "lucide-react";

const services = [
    {
        name: 'All From Your Dashboard',
        image: "/dashboard-icon.png",
        background: 'bg-[#FFF2F2]',
        services: [
            "Bookkeeping",
            "VAT Returns",
            "Payroll",
            "Tax Return Filing",
            "MBR Filings",
            "Audit Preparation",
            "CFO Services",
            "Incorporations",
            "Residency Scheme Support",
            "ISO Certification",
            "GDPR Audits",
            "Legal Support",
            "Marketing & IT",
            "Strategic Planning"
        ],
    },
    {
        name: 'Legal & Corporate',
        image: '/legal.png',
        background: 'bg-[#FFFCF2]',
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
        image: "/hr.png",
        background: 'bg-[#FAFFF2]',
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
        image: "/it.png",
        background: 'bg-[#F2FFF4]',
        services: [
            "Transfer Pricing Reports",
            "Financial Forecasting",
            "Internal Controls Setup",
            "Budgeting & Management Reports"
        ],
    },
    {
        name: 'Business Strategy & Advisory',
        image: '/business.png',
        background: 'bg-[#F2FCFF]',
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
        image: '/marketing.png',
        background: 'bg-[#F3F2FF]',
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
        name: 'Finance & Compliance',
        image: "/finance-compliance.png",
        background: 'bg-[#FCF2FF]',
        services: [
            "ISO 27001 / 9001 Certification",
            "Data Security Audits",
            "Penetration Testing",
            "IT Infrastructure Setup",
            "Cloud Migration Support",
            "SaaS Application Consulting"
        ],
    },
];

const servicesCore = [
    {
        image: '/bookkeeping.png',
        title: 'Bookkeeping',
        description: 'Daily postings, reconciliations, and monthly reports - audit-ready, always.',
    },
    {
        image: '/vat.png',
        title: 'VAT Returns',
        description: 'We prepare and submit your VAT return on time, with full supporting documentation.',
    },
    {
        image: "/payroll.png",
        title: 'Payroll Processing',
        description: 'Run compliant payroll, generate payslips, and handle tax submissions with ease.',
    },
    {
        image: '/tax.png',
        title: 'Tax Return Filing',
        description: 'Corporate tax return submissions handled by licensed experts.',
    },
    {
        image: '/mbr.png',
        title: 'MBR Filings',
        description: 'We take care of any filing requirements related to the Malta Business Registry.',
    },
    {
        image: '/audit.png',
        title: 'Audit Preparation',
        description: 'We prepare and organize your financials for a smooth audit experience.',
    },
    {
        image: "/cfo.png",
        title: 'CFO Services',
        description: 'On-demand strategic financial guidance, cash flow analysis, investor reporting, and performance insights.',
    },
]

export default function Services() {
    return (
        <>
            <Header />
            <main>
                <section className="bg-white pt-30 pb-14 px-4 relative overflow-hidden">
                    <div className="max-w-[350px] w-1/2 h-[350px] bg-[#AFFFC1] blur-[200px] absolute top-0 left-0 z-[1]"></div>
                    <div className="max-w-[350px] w-1/2 h-[350px] -rotate-180 bg-[#CAAFFF] blur-[200px] absolute bottom-0 right-0 z-[2]"></div>

                    <div className="max-w-7xl mx-auto px-4 md:px-6 text-center gap-10 relative z-[3]">
                        {/* Heading Section */}
                        <div className="lg:max-w-1/2 mx-auto w-full">
                            <h1 className="text-3xl lg:text-[56px] font-medium text-dark text-center mb-4 capitalize">Vacei Services</h1>
                            <p className="mt-4 text-neutral-900 font-normal text-xl mb-2">Everything Your Business Needs - All in One Place</p>
                            <p className="text-[#3D3D3D]">From expert bookkeeping to ISO certification, marketing, legal help, and more — Vacei brings together core financial services and a wide range of verified partners, all managed from one powerful dashboard.</p>
                        </div>
                    </div>
                </section>

                <section id="why-vacei" className="bg-white py-[100px] px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-cream rounded-3xl lg:p-20 py-10 px-4">
                            <h2 className="text-3xl lg:text-5xl font-normal text-dark leading-14 mb-4 text-center">Core Services <span className="text-primary">(Handled by the Vacei Team)</span></h2>
                        <p className="mb-[50px] text-center font-normal">Delivered directly by our in-house professionals.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                            {servicesCore.map(({ title, image, description }) => (
                                <div
                                    key={title}
                                    className="group bg-white border border-[#D9D9D9] transition hover:shadow-xl rounded-2xl p-8 relative overflow-hidden cursor-pointer">
                                    <div className="flex items-start gap-4">
                                        <img src={image} className="w-10 h-10 object-contain" alt="" />
                                        <div>
                                            <h3 className="text-2xl font-medium mb-3 text-[#0A1B04]">{title}</h3>
                                            <p className="text-lg leading-relaxed font-light text-[#3D3D3D]">{description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white pt-5 pb-[120px]">
                    <div className="max-w-7xl mx-auto px-4 md:px-6">
                        <div className="text-center">
                            <h2 className="text-3xl lg:text-5xl font-normal text-dark leading-14 mb-4 text-center">
                                Marketplace Services <span className="text-primary">(Request & Compare Offers)</span>
                            </h2>
                            <p className="text-[#3D3D3D] text-center font-normal mb-[50px]">Request any business service and receive offers from verified partners - all managed securely in your dashboard.</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6 mb-8">
                            {/* First column: large card (spans 2 rows) */}
                            <div className="lg:row-span-2">
                                <div className={`${services[0].background ?? ''} h-full group  transition border border-[#D9D9D9] hover:shadow-xl p-8 relative overflow-hidden flex flex-col rounded-2xl`}>
                                    {(() => {
                                        return (
                                            <div className="flex items-center gap-4">
                                                <img src={services[0].image} alt="" className="w-6 h-6 object-contain" />
                                                <div>
                                                    <h3 className="text-xl font-semibold text-[#0A1B04]">
                                                        {services[0].name}
                                                    </h3>
                                                </div>
                                            </div>
                                        );
                                    })()}
                                    <ul className="list-disc pl-6 mt-4 space-y-2 text-[#3D3D3D]">
                                        {services[0].services.map((service, idx) => (
                                            <li className="flex gap-2.5 items-center text-[#3D3D3D] lg:text-lg text-base" key={idx}><img className="w-4 h-4 object-contain" alt="list" src="/list-point.svg"></img> {service}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Next 3 standard cards */}
                            {services.slice(1, 5).map(({ name, image, background, services: serviceList }) => (
                                <div
                                    key={name}
                                    className={`${background ?? ''} group transition border border-[#D9D9D9]
                                    hover:shadow-xl rounded-2xl p-8 relative overflow-hidden flex flex-col`}
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
                            {services.slice(5, 7).map(({ name, image, background, services: serviceList }) => (
                                <div
                                    key={name}
                                    className={`${background ?? ''} group transition border border-[#D9D9D9] hover:shadow-xl
                                    rounded-2xl p-8 relative  overflow-hidden flex flex-col`}
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
                    </div>
                </section>

                <section className="bg-[#0A1B04] text-white py-[100px] px-4">
                    <div className="lg:max-w-2xl max-w-xl mx-auto px-4">
                        <div className="text-center mb-[50px]">
                            <h2 className="text-3xl lg:text-5xl font-normal leading-14 text-white mb-4">The modern back office for modern businesses.</h2>
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
