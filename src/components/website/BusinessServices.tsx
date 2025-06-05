'use client'

const services = [
    {
        name: 'Accounting & Finance',
        bgcolor: "bg-[#DBFFD8]",
        services: [
            'CFO-as-a-Service',
            'Transfer Pricing',
            'Forecasting & Budgeting',
            'Tax Advisory',
        ],
    },
    {
        name: 'Legal & Compliance',
        bgcolor: "bg-[#FAFFD8]",
        services: [
            'Local & International Incorporation',
            'GDPR & AML Compliance',
            'KYC Verification',
            'Trademark & IP Filing',
        ],
    },
    {
        name: 'Cybersecurity & IT',
        bgcolor: "bg-[#D8F5FF]",
        services: [
            'ISO Certifications',
            'Risk & Security Audits',
            'Penetration Testing',
            'IT Governance',
        ],
    },
    {
        name: 'HR & Payroll',
        bgcolor: "bg-[#D8DDFF]",
        services: [
            'HR Documentation',
            "Payroll Services",
            "Work Visa Assistance",
            "Company Policies"
        ],
    },
    {
        name: 'Strategy & Operations',
        bgcolor: "bg-[#FFD8D8]",
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
        <section id="request-service" className="bg-white lg:py-[120px] py-[60px]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-[50px]">
                    <h2 className="text-3xl lg:text-5xl font-normal mb-4 text-dark capitalize">
                        Business Services Marketplace (NEW!)
                    </h2>
                    <p className="text-[#3D3D3D] font-normal leading-5 capitalize">
                        Post a request. Get matched. Approve the best offer. From accounting to cybersecurity - everything your business needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    {/* Top row: 2 cards */}
                    {services.slice(0, 2).map(({ name, bgcolor, services: serviceList }, i) => (
                        <div
                            key={name}
                            className={`${bgcolor ?? ''} transition border border-[#979797] rounded-2xl lg:p-10 p-4 relative overflow-hidden flex flex-col lg:pb-[73px]`}>
                            <h3 className="lg:text-2xl text-xl font-semibold lg:mb-6 mb-4 text-dark">{name}</h3>
                            <ul className="space-y-3 text-gray-700 text-lg">
                                {serviceList.map((service, idx) => (
                                    <li className='flex gap-2.5 items-center text-[#3D3D3D] lg:text-lg text-base' key={idx}><img src="/list-point.svg" className='w-4 h-4 object-contain' alt="list" /> {service}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                {/* Bottom row: 3 cards */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6 mt-0">
                    {services.slice(2, 5).map(({ name, bgcolor, services: serviceList }) => (
                        <div
                            key={name}
                            className={`${bgcolor ?? ''} transition border border-[#979797] rounded-2xl lg:p-10 p-4 relative overflow-hidden flex flex-col lg:pb-[73px]`}>
                            <h3 className="lg:text-2xl text-xl font-semibold lg:mb-6 mb-4 text-dark">{name}</h3>
                            <ul className="space-y-3 text-gray-700 text-lg">
                                {serviceList.map((service, idx) => (
                                   <li className='flex gap-2.5 items-center text-[#3D3D3D] lg:text-lg text-base' key={idx}><img src="/list-point.svg" className='w-4 h-4 object-contain' alt="list" /> {service}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
