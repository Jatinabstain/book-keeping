import StatCard from '@/components/StatCard';

export default function DashboardPage() {
    const stats = [
        { title: 'Revenue', amount: '$59,212.52', change: '+12%', note: 'Oct 2024 vs prior month' },
        { title: 'Net income', amount: '$17,560.45', change: '+10%', note: 'Oct 2024 vs prior month' },
        { title: 'Cash balance', amount: '$42,135.75', change: '+8%', note: 'Today vs 30 days ago' },
        { title: 'Card balance', amount: '$5,340.25', change: '-10%', note: 'Today vs 30 days ago' },
    ];

    return (
        <section className="mx-auto max-w-[1200px] px-[15px] w-full pt-8">
            <div className="jumbotron rounded-2xl">
                <div className="flex items-center justify-between text-center md:flex-row flex-col gap-y-4">
                    <div className="text-start">
                        <h1 className="text-xl font-semibold mb-0"><span className="text-primary">May books</span> are now available </h1>
                        <p>Next draft by  Aug 30, 2025 (20h business day)</p>
                    </div>
                    <div className="flex space-x-4">
                        <button className="bg-transparent text-primary font-semibold px-4 py-2 rounded">Download</button>
                        <button className="bg-primary text-white px-6 py-2.5 rounded">View books</button>
                    </div>
                </div>
                <hr className="opacity-30 my-6" />
                <div className="flex items-center space-x-6 bg-white text-primary">
                    <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-full bg-primary text-white text-sm flex items-center justify-center font-semibold">
                            4
                        </div>
                        <span className="text-sm font-medium">Manage tasks</span>
                    </div>

                    <div className="flex items-center space-x-2">
                        <i className="fi fi-rr-comment-dots"></i>
                        <span className="text-sm font-medium">Contact your team</span>
                    </div>

                    <div className="flex items-center space-x-2">
                        <i className="fi fi-rr-usd-circle text-base align-middle"></i>
                        <span className="text-sm font-medium">
                            Give $500, <span className="font-bold">get $500</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* cards */}
            <div className="mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <StatCard key={index} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
}