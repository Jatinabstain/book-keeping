"use client"

import Footer from "@/components/website/Footer"
import Header from "@/components/website/Header"
import Link from "next/link"
import { CheckCircle } from 'lucide-react'

import {
    BookOpenCheck,
    BarChart3,
    RefreshCcw,
    MessageCircle,
    BadgeCheck,
    Globe2,
    Layers3,
    FileUp,
    Video,
    History,
    Star,
    ShieldAlert
} from 'lucide-react';
import HowItWorkServices from "@/components/website/HowItWorkServices"
import PricingSection from "@/components/website/PricingSection"

const services = [
    {
        name: 'Finance & Tax',
        icon: BookOpenCheck,
        services: [
            "CFO-as-a-Service",
            "Budgeting & Forecasts",
            "Transfer Pricing Reports",
            "Tax Advisory"
        ],
    },
    {
        name: 'Legal & Compliance',
        icon: BarChart3,
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
        icon: RefreshCcw,
        services: [
            "Employment Contracts",
            "Payroll Setup & Reporting",
            "HR Policy Drafting",
            "Work Permit Assistance"
        ],
    },
    {
        name: 'Cybersecurity & IT',
        icon: MessageCircle,
        services: [
            "ISO 27001 / ISO 9001 Certification",
            "Cybersecurity Risk Assessments",
            "Penetration Testing",
            "IT Infrastructure Setup"
        ],
    },
    {
        name: 'Strategy & Marketing',
        icon: BadgeCheck,
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
        icon: FileUp,
        title: 'File Upload & Sharing per request'
    },
    {
        icon: Video,
        title: 'Zoom Integration with calendar links'
    },
    {
        icon: History,
        title: 'Audit Trail: Timestamps and full logs'
    },
    {
        icon: Star,
        title: 'Ratings & Reviews after service delivery'
    },
    {
        icon: ShieldAlert,
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

export default function Pricing() {
    return (
        <>
            <Header />
            <main>
                <section className="bg-white py-10">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
                        {/* Heading Section */}
                        <div className="lg:max-w-4/6 w-full">
                            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">Pricing</h1>
                            <p className="mt-4 mb-1 text-neutral-900 font-semibold text-lg">
                                Two Powerful Plans. One Dashboard.
                            </p>
                            <p className="text-neutral-800">Whether you need bookkeeping or full accounting support - Vacei adapts to your business.</p>
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

                <PricingSection />

            </main>
            <Footer />
        </>
    )
}
