export default function HowItWorksSteps() {
    const steps = [
        {
            title: "Sign Up",
            description: "Sign up for free in 2 minutes and access your personalized dashboard.",
        },
        {
            title: "Upload Documents",
            description: "Upload your documents via drag & drop, email, or scanner.",
        },
        {
            title: "Request Services",
            description: "Request VAT returns, payroll, MBR filings, or audits easily.",
        },
        {
            title: "Expert Response",
            description: "We connect you to our expert team, who responds within 24 hours.",
        },
        {
            title: "Track & Review",
            description: "Review posted items, download reports, or raise queries - all from your portal.",
        },
    ]

    return (
        <section className="bg-white py-10" id="how-it-works-steps">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl lg:text-3xl font-bold text-gray-900 text-center mb-6">How It Works Steps</h2>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group bg-gray hover:bg-white transition border border-gray-200 hover:shadow-xl rounded-0 p-6 relative overflow-hidden hover:border-[#00799c]"
                        >
                            <div className="absolute top-4 right-4 text-gray-400 text-6xl font-black opacity-0 group-hover:opacity-30 transition">
                                {index + 1}
                            </div>
                            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-xl font-semibold mb-4">
                                {index + 1}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
