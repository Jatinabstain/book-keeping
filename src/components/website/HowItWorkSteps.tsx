export default function HowItWorksSteps() {
    const steps = [
        {
            title: "Sign Up",
            description: "Create your free account in under 2 minutes.",
        },
        {
            title: "Upload Your Documents",
            description: "Drag & drop receipts, invoices, bank statements - or email them to us.",
        },
        {
            title: "We Handle the Bookkeeping",
            description: "We post, organize, and update your books. You always see the live view.",
        },
        {
            title: "Track Everything",
            description: "See what's posted, pending, or needs review. Raise questions instantly.",
        },
        {
            title: "Request Extra Services (Optional)",
            description: "Need VAT, audit, incorporation, or ISO support? Request directly from your dashboard.",
        },
    ]

    return (
        <section className="bg-white pb-10" id="how-it-works-steps">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl lg:text-3xl font-bold text-gray-900 mb-8">Steps <i className="fi fi-rr-hand-back-point-right text-xl text-primary"></i></h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
