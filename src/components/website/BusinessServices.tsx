'use client'

import {
    HandCoins,
    Handshake,
    Shield,
    Calculator,
    Scale,
} from 'lucide-react'

const services = [
    {
        name: 'Accounting & Finance',
        icon: Calculator,
        services: [
            'CFO-as-a-Service',
            'Transfer Pricing',
            'Forecasting & Budgeting',
            'Tax Advisory',
        ],
    },
    {
        name: 'Legal & Compliance',
        icon: Scale,
        services: [
            'Local & International Incorporation',
            'GDPR & AML Compliance',
            'KYC Verification',
            'Trademark & IP Filing',
        ],
    },
    {
        name: 'HR & Payroll',
        icon: HandCoins,
        services: [
            'HR Documentation',
            'Payroll Services',
            'Work Visa Assistance',
            'Company Policies',
        ],
    },
    {
        name: 'Cybersecurity & IT',
        icon: Shield,
        services: [
            'ISO Certifications',
            'Risk & Security Audits',
            'Penetration Testing',
            'IT Governance',
        ],
    },
    {
        name: 'Strategy & Operations',
        icon: Handshake,
        services: [
            'Business Plans',
            'Financial Models',
            'Pitch Deck Reviews',
            'Market Research',
        ],
    }
]

export default function BusinessServices() {
    return (
        <section id="request-service" className="bg-white py-10 px-4">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-3xl lg:text-3xl font-bold text-gray-900 mb-4">
                        Business Services Marketplace <span className="font-bold text-primary">(NEW!)</span>
                    </h2>
                    <p className="mt-2 text-gray-800 mx-auto font-semibold">
                        Post a request. Get matched. Approve the best offer. From accounting to cybersecurity - everything your business needs.
                    </p>
                    <p className="mt-2 text-gray-500 mx-auto font-semibold mb-6">
                        Popular Marketplace Services:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6 mb-8">
                    {/* First column: large card (spans 2 rows) */}
                    <div className="lg:row-span-2">
                        <div className="h-full group bg-gray hover:bg-white transition border
                        border-gray-200 hover:shadow-xl rounded-0 p-7 relative overflow-hidden hover:border-[#00799c] flex flex-col">
                            {(() => {
                                const Icon = services[0].icon;
                                return (
                                    <div className="flex items-center gap-4">
                                        <div className="bg-[#00799c] text-white p-2.5 rounded-full">
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <h3 className="text-g font-semibold text-black text-lg group-hover:text-[#00799c]">
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

                    {/* Second column top row */}
                    {services.slice(1, 5).map(({ name, icon: Icon, services: serviceList }, i) => (
                        <div
                            key={name}
                            className="group bg-gray hover:bg-white transition border
                            border-gray-200 hover:shadow-xl rounded-0 p-6 relative overflow-hidden hover:border-[#00799c] flex flex-col"
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
    )
}
