import { CheckCircle } from 'lucide-react'

export default function TrustSecurity() {
    const items = [
        'GDPR Compliant',
        '24/7 Support',
        'Verified Partners',
        'Audit-Ready Logs',
        'End-to-End Encryption',
    ]

    return (
        <section className="bg-white py-10 px-4">
            <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-start gap-10">
                {/* Left Heading: width auto, no shrinking */}
                <div className="flex-shrink-0 text-center lg:w-fit w-full">
                    <h2 className="text-3xl font-bold text-gray-900 leading-snug whitespace-nowrap">
                        Trust & Security
                    </h2>
                </div>

                {/* Right Features: grow to fill space */}
                <div className="flex-grow grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 border-b border-gray-200 pb-3 last:border-none w-full"
                        >
                            <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                            <span className="text-gray-900 text-base font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
