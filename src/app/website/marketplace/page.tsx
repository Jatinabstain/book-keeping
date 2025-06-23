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
        image: '/file-share.png',
        title: 'File Upload & Sharing per request'
    },
    {
        image: '/audit-trail.png',
        title: 'Audit Trail: Timestamps and full logs'
    },
    {
        image: '/zoom.png',
        title: 'Zoom Integration with calendar links'
    },
    {
        image: '/rating.png',
        title: 'Ratings & Reviews after service delivery'
    },
    {
        image: '/safety.png',
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

                <section className="bg-white pt-30 pb-14 px-4 relative overflow-hidden">
                    <div className="max-w-[350px] w-1/2 h-[350px] bg-[#FFF8AF] blur-[200px] absolute top-0 left-0 z-[1]"></div>
                    <div className="max-w-[350px] w-1/2 h-[350px] -rotate-180 bg-[#AFD2FF] blur-[200px] absolute bottom-0 right-0 z-[2]"></div>

                    <div className="max-w-5xl mx-auto px-4 md:px-6 text-center gap-10 relative z-[3]">
                        {/* Heading Section */}
                        <div className="lg:max-w-1/2 mx-auto w-full">
                            <h1 className="text-3xl lg:text-[56px] font-medium text-dark text-center mb-4 capitalize">Vacei Marketplace</h1>
                            <p className="mt-4 text-neutral-900 font-normal text-xl mb-2">Your Gateway to Verified Business Services</p>
                            <p className="capitalize text-[#3D3D3D]">Post your requirements. Get offers. Choose the best - all from your Vacei dashboard.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-white py-[100px] px-4 mb-5">
                    <div className="max-w-7xl mx-auto px-4 md:px-6">
                        <div className="bg-cream pt-[60px] lg:px-20 px-4 pb-[110px] rounded-3xl ">
                            <div className="text-center max-w-5xl mx-auto">
                                <h2 className="text-3xl lg:text-3xl font-medium mb-4">What Is the Vacei Marketplace?</h2>
                                <p className="mb-8 text-black mx-auto">The Vacei Marketplace connects businesses with trusted, verified service providers. Whether you need an ISO certification, company formation, residency guidance, legal drafting, or marketing support - simply post your requirement, set your deadline, and review proposals from vetted experts. Everything is handled securely, transparently, and professionally.</p>
                                
                                <div className="bg-[#0A1B04] rounded-lg px-12 py-[60px]">
                                    <p className="text-white text-[32px] leading-10 capitalize">Every request and completed service remains saved and trackable <span className="text-[#D0D0D0]">within your dashboard - with full documentation, chat history, and audit trail.</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <HowItWorkServices />

                <section className="bg-white py-[120px] px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-cream lg:py-20 py-10 lg:px-[50px] rounded-3xl">
                            <h2 className="text-3xl lg:text-5xl font-normal text-dark lg:mb-[50px] text-[#0A1B04] text-center">Services You Can Request</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                                {servicesCore.map(({ title, image }) => (
                                    <div
                                        key={title}
                                        className="group bg-white border border-[#D9D9D9] transition hover:shadow-xl rounded-2xl px-8 py-[30px] relative overflow-hidden cursor-pointer"
                                    >
                                        <div className="flex items-center gap-4">
                                            <img src={image} className="w-10 h-10" alt="" />
                                            <div>
                                                <h3 className="lg:text-2xl text-lg font-medium text-[#0A1B04]">
                                                    {title}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white">
                    <div className="max-w-7xl mx-auto px-4 md:px-6">
                        <div className="text-center">
                            <h2 className="text-3xl lg:text-5xl font-normal text-dark lg:mb-[50px] text-[#0A1B04] text-center">Services You Can Request</h2>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6 mb-8">
                            {/* First column: large card (spans 2 rows) */}
                            <div className="lg:row-span-2">
                                <div className="h-full group bg-white hover:bg-white transition border border-[#D9D9D9] hover:shadow-xl p-8 relative overflow-hidden flex flex-col rounded-2xl">
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
                                    className="group bg-white hover:bg-white transition border border-[#D9D9D9]
                                    hover:shadow-xl rounded-2xl p-8 relative overflow-hidden flex flex-col"
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
                                    className="group bg-white hover:bg-white transition border border-[#D9D9D9] hover:shadow-xl
                                    rounded-2xl p-8 relative  overflow-hidden flex flex-col"
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

                <section className="py-[120px] bg-white">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <div className="lg:px-[60px] px-4 lg:py-[50px] py-5 rounded-3xl" style={{ boxShadow: '0px 0px 44px 0px #00000014' }}>
                            <h3 className="text-3xl lg:text-5xl font-normal text-dark lg:mb-[60px] leading-14">Why Use the Vacei Marketplace?</h3>
                            <div className="lg:mt-12 mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-6xl mx-auto">
                                {marketplaces.map((marketplace, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <img src="/check.svg" className="w-4 h-4 object-contain" alt="" />
                                        <p className="text-black text-base font-normal">{marketplace}</p>
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
                                Are You a Service Provider?
                            </h2>
                            <p className="text-base text-[#979797] font-light mb-[50px]">Join our network of verified experts. Receive matched requests and grow your business.</p>
                        </div>

                        <div className="flex flex-col sm:flex-row lg:flex-row gap-6 justify-center lg:px-0 px-5">
                        <Link
                            href="javascript:void(0)"
                            className="bg-primary text-white font-normal px-8 py-3.5 text-lg rounded-lg capitalize text-center"
                        >
                            Apply as a Verified Partner
                        </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}
