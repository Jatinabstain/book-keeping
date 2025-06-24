"use client"

import Footer from "@/components/website/Footer"
import Header from "@/components/website/Header"

import PricingSection from "@/components/website/PricingSection"

export default function Pricing() {
    return (
        <>
            <Header />
            <main>
                <section className="bg-white pt-30 pb-14 px-4 relative overflow-hidden">
                    <div className="max-w-[350px] w-1/2 h-[350px] bg-[#AFFFC1] blur-[200px] absolute top-0 left-0 z-[1]"></div>
                    <div className="max-w-[350px] w-1/2 h-[350px] -rotate-180 bg-[#AFD2FF] blur-[200px] absolute bottom-0 right-0 z-[2]"></div>

                    <div className="max-w-5xl mx-auto px-4 md:px-6 text-center gap-10 relative z-[3]">
                        {/* Heading Section */}
                        <div className="lg:max-w-1/2 mx-auto w-full">
                            <h1 className="text-3xl lg:text-[56px] font-medium text-dark text-center mb-4 capitalize">Pricing</h1>
                            <p className="mt-4 text-neutral-900 font-normal text-xl mb-2">Two Powerful Plans. One Dashboard.</p>
                            <p className="capitalize text-[#3D3D3D]">Whether you need bookkeeping or full accounting support - Vacei adapts to your business.</p>
                        </div>
                    </div>
                </section>

                <PricingSection />

            </main>
            <Footer />
        </>
    )
}
