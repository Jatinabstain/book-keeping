export default function HowItWorksSteps() {
    const steps = [
        {
            title: "Sign Up",
            image: "/signup.svg",
            bgcolor: "bg-[#FFF8AF]",
            description: "Create your free account in under 2 minutes.",
        },
        {
            title: "Upload Your Documents",
            image: "/upload-doc.svg",
            bgcolor: "bg-[#B6FFAF]",
            description: "Drag & drop receipts, invoices, bank statements - or email them to us.",
        },
        {
            title: "We Handle the Bookkeeping",
            image: "/handle-book.svg",
            bgcolor: "bg-[#FFF8AF]",
            description: "We post, organize, and update your books. You always see the live view.",
        },
        {
            title: "Track Everything",
            image: "/track.svg",
            bgcolor: "bg-[#B6FFAF]",
            description: "See what's posted, pending, or needs review. Raise questions instantly.",
        },
        {
            title: "Request Extra Services (Optional)",
            image: "/extra-service.svg",
            bgcolor: "bg-[#FFF8AF]",
            description: "Need VAT, audit, incorporation, or ISO support? Request directly from your dashboard.",
        },
    ]

    return (
        <section className="bg-white pt-[120px] pb-10" id="how-it-works-steps">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <h2 className="text-3xl lg:text-5xl font-normal text-dark mb-8 leading-14">Let's Take This Step by Step</h2>
                        <img src="big-arrow.svg" alt="arrow" className="hidden sm:block mx-auto pl-22" />
                    </div>
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group bg-gray transition border border-[#D9D9D9] rounded-0 p-6 relative overflow-hidden rounded-2xl"
                        >
                            <div className={`${step.bgcolor ?? ''} shadow absolute max-w-[250px] w-full h-[125px] top-0 mx-auto left-0 right-0  blur-[90px]`}></div>
                            <div className="relative z-[1]">    
                                {step.image && <img src={step.image} className="w-full" />}
                                <h3 className="text-lg font-semibold mb-2 text-center">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
