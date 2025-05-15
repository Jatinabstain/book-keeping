export default function WhyChooseUs() {
    const points = [
        'Smart bookkeeping meets real accountant support',
        'Global-ready platform with local compliance built-in',
        'Transparent pricing, no hidden fees',
        'Always secure – with document history and audit trail',
        'Scales with your business (solo to enterprise)',
    ]

    return (
        <section id="why-choose-us" className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-semibold">Why Choose Us</h2>
                <p className="mt-4 text-lg text-gray-500">
                    Designed for modern businesses that value clarity, control, and expert support.
                </p>

                <ul className="mt-12 space-y-5 text-left max-w-2xl mx-auto">
                    {points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="mt-1 w-2.5 h-2.5 bg-blue-600 rounded-full shrink-0" />
                            <span className="text-gray-700 text-base">{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
