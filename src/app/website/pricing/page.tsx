"use client"

import Footer from "@/components/website/Footer"
import Header from "@/components/website/Header"

import PricingSection from "@/components/website/PricingSection"

export default function Pricing() {
    return (
        <>
            <Header />
            <main>
                <section className="bg-white py-10">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="lg:max-w-4/6 w-full">
                            <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 leading-tight">Pricing</h1>
                            <p className="mt-4 mb-1 text-neutral-900 font-semibold text-lg">
                                Two Powerful Plans. One Dashboard.
                            </p>
                            <p className="text-neutral-800">Whether you need bookkeeping or full accounting support - Vacei adapts to your business.</p>
                        </div>

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
