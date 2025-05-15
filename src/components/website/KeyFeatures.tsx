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
            desc: 'An intuitive interface that keeps you updated in real-time.',
        },
        {
            icon: Upload,
            title: 'Flexible Uploads',
            desc: 'Drag & drop, mobile upload, or forward via email.',
        },
        {
            icon: FileCheck,
            title: 'Request Services',
            desc: 'Request VAT, payroll, MBR, tax returns, or audits in one click.',
        },
        {
            icon: FolderKanban,
            title: 'Organized Docs',
            desc: 'Auto-tagged statuses like Posted, Pending Review, or Flagged.',
        },
        {
            icon: CalendarCheck,
            title: 'Smart Reminders',
            desc: 'Never miss a submission with automatic deadline alerts.',
        },
        {
            icon: Bot,
            title: 'AI Audit Assistant',
            desc: 'AI suggestions to streamline audits (coming soon).',
        },
        {
            icon: MessageCircle,
            title: 'Live Chat',
            desc: 'Message your accountant or raise document-specific queries.',
        },
        {
            icon: Archive,
            title: 'Cloud Archive',
            desc: 'All your files, safely stored and audit-ready forever.',
        },
    ]

    return (
        <section className="bg-gray-50">
            <div className="flex lg:flex-row flex-col flex-wrap items-center justify-between">
                <div className="bg-gray-50 lg:min-h-screen h-full lg:flex-1/2 flex-auto w-full lg:mb-0 p-10 flex justify-center flex-col">
                    {/* Image */}
                    <div className="relative">
                        <img
                            src="/key-features.svg"
                            alt="Why Vacei"
                            className='w-full'
                        />
                    </div>
                </div>
                <div className="bg-primary lg:flex-1/2 flex-auto w-full lg:mb-0 p-10 lg:px-18">
                    <h2 className="text-3xl lg:text-3xl font-bold mb-12 text-center text-white">Key Features</h2>
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
