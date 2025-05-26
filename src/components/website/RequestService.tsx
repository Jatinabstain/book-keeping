'use client'

import { useState } from 'react'
import {
    Banknote,
    ShieldCheck,
    Calculator,
    Percent,
    HandCoins,
    ChartArea,
    Landmark,
    UserCheck,
    Ellipsis,
} from 'lucide-react'

const services = [
    { name: 'Bookkeeping', icon: Calculator },
    { name: 'VAT Returns', icon: Percent },
    { name: 'Payroll', icon: HandCoins },
    { name: 'Tax Filings', icon: Banknote },
    { name: 'Audits', icon: ChartArea },
    { name: 'Incorporations', icon: Landmark },
    { name: 'ISO Certifications', icon: ShieldCheck },
    { name: 'GDPR/KYC', icon: UserCheck },
    { name: 'And much more…', icon: Ellipsis },
]

export default function RequestService() {
    const [selected, setSelected] = useState<string | null>(null)

    return (
        <section id="request-service" className="bg-primary py-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-3xl font-bold text-white">Everything in One Dashboard</h2>
                    <p className="mt-2 text-white mx-auto">
                        Access all services in one place:
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map(({ name, icon: Icon }) => (
                        <div
                            key={name}
                            className="group bg-white transition hover:shadow-xl rounded-0 p-6 relative overflow-hidden cursor-pointer"
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
                        </div>
                    ))}
                </div>
                <p className="text-white text-center italic text-sm pt-8">Use our team or accept offers from verified Aproviders.</p>
            </div>
        </section>
    )
}
