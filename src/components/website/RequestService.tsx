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
        <section id="request-service" className="bg-white lg:pb-[120px] pb-[60px]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="bg-[#FBF8F3] rounded-2xl border border-[#D9D9D9] lg:px-8 px-4 lg:pt-20 py-10">
                    <div className="text-center mb-12 pb-0.5">
                        <h2 className="text-3xl lg:text-5xl font-normal text-dark mb-4">Everything in One Dashboard</h2>
                        <p className="text-[#3D3D3D] text-base font-light leading-5">
                            Access all services in one place:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map(({ name, icon: Icon }) => (
                            <div
                                key={name}
                                className="rounded-2xl border border-[#D9D9D9] p-6 bg-white cursor-pointer"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="rounded-full">
                                        <img src="/dedicated-server.gif" className='w-[50px] h-[50px] object-contain' alt="{name}" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-normal capitalize text-dark">
                                            {name}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
