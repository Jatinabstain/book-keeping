import {
    LayoutDashboard,
    CloudUpload,
    FileCheck2,
    CircleHelp,
    MessagesSquare,
    FileSliders,
    Share2
} from 'lucide-react'

export default function KeyFeaturesList() {
    const features = [
        {
            image: 'dedicated-server.gif',
            title: 'Drag & Drop Uploads',
            desc: 'Also supports mobile and email.',
        },
        {
            image: 'dedicated-server.gif',
            title: 'Organized File Sharing',
            desc: 'Smart, searchable document hub.',
        },
        {
            image: 'dedicated-server.gif',
            title: 'Service Request System',
            desc: 'Request VAT, payroll, audits, etc. in one click.',
        },
        {
            image: 'dedicated-server.gif',
            title: 'Choose How You Work',
            desc: "Use Vacei's in-house team or receive external proposals",
        },
        {
            image: 'dedicated-server.gif',
            title: 'Document Status Tags',
            desc: "Posted, Pending Review, Needs Correction.",
        },
        {
            image: 'dedicated-server.gif',
            title: 'Zoom + Chat Integration',
            desc: "Chat, share, and schedule meetings in one place.",
        },
        {
            image: 'dedicated-server.gif',
            title: 'Clean Dashboard',
            desc: 'Real-time updates and full visibility.',
        }
    ]

    return (
        <section className="bg-[#0A1B04]">
            <div className="flex lg:flex-row flex-col flex-wrap items-center justify-between">
                <div className="lg:max-h-screen h-full lg:flex-2/5 flex-auto w-full flex justify-center flex-col">
                    <div className="relative">
                        <img
                            src="/desktop-5.png"
                            alt="Why Vacei"
                            className='w-4/5 lg:mb-0 mb-6'
                        />
                    </div>
                </div>
                <div className="lg:flex-3/5 flex-auto w-full xl:p-5 lg:p-8 p-4 pb-12">
                    <h2 className="text-3xl lg:text-5xl mb-[50px] font-normal text-white">Our Key Features</h2>
                    <div className="grid xl:grid-cols-2  lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-[40px]">
                        {features.map(({ image, title, desc }, index) => (
                            <div key={index} className="flex items-center gap-6">
                                <div className="w-[50px] h-[50px] shrink-0">
                                    <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-full object-contain rounded-full"
                                    />
                                </div>
                                <div>
                                    <h3 className="lg:text-2xl text-lg font-normal mb-2.5 leading-6 text-white capitalize">{title}</h3>
                                    <p className="text-[#979797] text-base font-light leading-5 capitalize">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
