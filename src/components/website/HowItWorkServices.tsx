import {
    ClipboardEdit,
    CalendarClock,
    ShieldCheck,
    MessagesSquare,
    UserCheck
} from "lucide-react";

export default function HowItWorkServices() {
    const features = [
        {
            image: "/post.png",
            title: 'Post a Requirement',
            desc: 'Describe the service you need (e.g., ISO certification, VAT returns, residency application).',
        },
        {
            image: "/files.png",
            title: 'Set Deadline & Upload Files',
            desc: 'Set your timeline, priority, and upload supporting documents.',
        },
        {
            image: "/offer.png",
            title: 'Receive Verified Offers',
            desc: 'Get proposals with timelines, pricing, and credentials from verified professionals.',
        },
        {
            image: "/chat.png",
            title: 'Chat & Meet',
            desc: 'Use our secure in-platform messaging and schedule Zoom meetings without sharing personal contact details.',
        },
        {
            image: "/choose.png",
            title: 'Choose the Best Fit',
            desc: 'Accept an offer, track progress, and leave a review after completion. All files and chats are archived for future reference.',
        }
    ]

    return (
        <section className="bg-[#0A1B04]">
            <div className="flex lg:flex-row flex-col flex-wrap items-center justify-between">
                <div className="lg:max-h-screen h-full lg:flex-2/5 flex-auto w-full flex justify-center flex-col">
                    {/* Image */}
                    <div className="relative">
                        <img
                            src="/how-it-work.png"
                            alt="How It Works"
                            className='w-4/5 lg:mb-0 mb-6 mt-[80px]'
                        />
                    </div>
                </div>
                <div className="lg:flex-3/5 flex-auto w-full xl:p-5 lg:p-8 p-4 pb-12">
                    <h2 className="text-3xl lg:text-5xl mb-[50px] font-normal text-white">How It Works</h2>
                    {/* Text Content */}
                    <div className="space-y-8 text-left">
                        {features.map(({ image, title, desc }, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="flex items-center justify-center min-w-[50px] min-h-[50px] rounded-[4px] bg-white text-primary">
                                    <img src={image} className="w-8 h-8 object-contain" alt="" />
                                </div>
                                <div>
                                    <h3 className="lg:text-2xl text-lg font-medium text-white">{title}</h3>
                                    <p className="text-[#979797] lg:text-base text-sm">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
