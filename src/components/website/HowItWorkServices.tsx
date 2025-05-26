import {
    FileEdit,
    Clock,
    BadgeCheck,
    MessageCircleMore,
    UserCheck
} from 'lucide-react';

export default function HowItWorkServices() {
    const features = [
        {
            icon: FileEdit,
            title: 'Post a Requirement',
            desc: 'Describe the service you need (e.g., ISO certification, VAT returns, residency application).',
        },
        {
            icon: Clock,
            title: 'Set Deadline & Upload Files',
            desc: 'Set your timeline, priority, and upload supporting documents.',
        },
        {
            icon: BadgeCheck,
            title: 'Receive Verified Offers',
            desc: 'Get proposals with timelines, pricing, and credentials from verified professionals.',
        },
        {
            icon: MessageCircleMore,
            title: 'Chat & Meet',
            desc: 'Use our secure in-platform messaging and schedule Zoom meetings without sharing personal contact details.',
        },
        {
            icon: UserCheck,
            title: 'Choose the Best Fit',
            desc: 'Accept an offer, track progress, and leave a review after completion. All files and chats are archived for future reference.',
        }
    ]

    return (
        <section className="bg-gray-50">
            <div className="flex lg:flex-row flex-col flex-wrap items-center justify-between">
                <div className="bg-gray-50 lg:max-h-screen h-full lg:flex-1/2 flex-auto w-full lg:mb-0 p-10 flex justify-center flex-col">
                    {/* Image */}
                    <div className="relative">
                        <img
                            src="/service-page-banner.svg"
                            alt="Why Vacei"
                            className='w-3/4 mx-auto'
                        />
                    </div>
                </div>
                <div className="bg-primary lg:flex-1/2 flex-auto w-full lg:mb-0 px-5 py-10 lg:px-10">
                    <h2 className="text-3xl lg:text-3xl mb-6 font-bold text-center text-white">How It Works</h2>
                    {/* Text Content */}
                    <div className="space-y-10 text-left">
                        {features.map(({ icon: Icon, title, desc }, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="flex items-center justify-center min-w-10 min-h-10 rounded-full bg-white text-primary shadow-lg">
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
