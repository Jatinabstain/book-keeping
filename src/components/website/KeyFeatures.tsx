import {
    LayoutDashboard,
    Upload,
    FileCheck,
    CalendarCheck,
    Bot,
    MessageCircle,
    Archive,
    FolderKanban,
} from 'lucide-react'

export default function KeyFeaturesList() {
    const features = [
        {
            icon: LayoutDashboard,
            title: 'Clean Dashboard',
            desc: 'Real-time updates and full visibility.',
        },
        {
            icon: Upload,
            title: 'Drag & Drop Uploads',
            desc: 'Also supports mobile and email.',
        },
        {
            icon: FileCheck,
            title: 'Document Status Tags',
            desc: 'Posted, Pending Review, Needs Correction.',
        },
        {
            icon: FolderKanban,
            title: 'Service Request System',
            desc: 'Request VAT, payroll, audits, etc. in one click.',
        },
        {
            icon: CalendarCheck,
            title: 'Organized File Sharing',
            desc: 'Smart, searchable document hub.',
        },
        {
            icon: Bot,
            title: 'Choose How You Work',
            desc: "Use Vacei's in-house team or receive external proposals.",
        },
        {
            icon: MessageCircle,
            title: 'Zoom + Chat Integration',
            desc: 'Chat, share, and schedule meetings in one place.',
        }
    ]

    return (
        <section className="bg-gray-50">
            <div className="flex lg:flex-row flex-col flex-wrap items-center justify-between">
                <div className="bg-gray-50 lg:max-h-screen h-full lg:flex-1/2 flex-auto w-full lg:mb-0 p-10 flex justify-center flex-col">
                    {/* Image */}
                    <div className="relative">
                        <img
                            src="/key-features.svg"
                            alt="Why Vacei"
                            className='w-3/4 mx-auto'
                        />
                    </div>
                </div>
                <div className="bg-primary lg:flex-1/2 flex-auto w-full lg:mb-0 p-10 lg:px-18">
                    <h2 className="text-3xl lg:text-3xl mb-6 font-bold text-center text-white">Key Features</h2>
                    {/* Text Content */}
                    <div className="space-y-8 text-left">
                        {features.map(({ icon: Icon, title, desc }, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-primary shadow-lg">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                                    <p className="text-white/70 text-sm">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
