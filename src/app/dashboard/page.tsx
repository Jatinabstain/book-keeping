import StatCard from '@/components/StatCard';
import CashFlowChart from '@/components/CashFlowChart';
import PLSummaryChart from '@/components/PLSummaryChart';


export default function DashboardPage() {
    const stats = [
        { title: 'Revenue', amount: '$59,212.52', change: '+12%', note: 'Oct 2024 vs prior month' },
        { title: 'Net income', amount: '$17,560.45', change: '+10%', note: 'Oct 2024 vs prior month' },
        { title: 'Cash balance', amount: '$42,135.75', change: '+8%', note: 'Today vs 30 days ago' },
        { title: 'Card balance', amount: '$5,340.25', change: '-10%', note: 'Today vs 30 days ago' },
    ];

    return (
        <section className="mx-auto max-w-[1400px] px-[15px] w-full pt-8">
            <div className="bg-white p-4 mb-5 shadow">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                    <div className="text-center sm:text-left text-primary">
                        <h1 className="text-xl font-bold mb-1">
                            <span className="text-accent">May books</span> are now available
                        </h1>
                        <p className="text-xs font-medium text-black opacity-80">Next draft by Aug 30, 2025 (20h business day)</p>
                    </div>
                    <div className="flex gap-3 justify-center sm:justify-start">
                        <button className="bg-green-700 text-white px-3 py-1.5 hover:bg-dark-primary hover:text-white transition-all duration-200">
                            Download
                        </button>
                        <button className="bg-primary text-white px-3 py-1.5 hover:bg-dark-primary hover:text-white transition-all duration-200">
                            View books
                        </button>
                    </div>
                </div>
                <hr className="my-2 opacity-0 border-primary" />
                <div className="flex flex-wrap justify-center gap-3 bg-primary px-3 py-1">
                    <div className="flex items-center space-x-2 hover:bg-primary p-1 rounded-md transition-all duration-200">
                        <div className="w-6 h-6 rounded-full bg-white text-primary text-xs font-bold flex items-center justify-center">
                            4
                        </div>
                        <span className="text-xs text-white font-semibold">Manage tasks</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:bg-primary p-1 rounded-md transition-all duration-200">
                        <i className="fi fi-rr-comment-dots text-white text-lg"></i>
                        <span className="text-xs text-white font-medium">Contact your team</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:bg-primary p-1 rounded-md transition-all duration-200">
                        <i className="fi fi-rr-usd-circle text-white text-lg"></i>
                        <span className="text-xs text-white font-medium">Give $500, <span className="font-bold">get $500</span></span>
                    </div>
                </div>
            </div>

            <div className="mb-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                        <StatCard key={index} {...stat} />
                    ))}
                </div>
            </div>

            <CashFlowChart />
            
            <PLSummaryChart />

        </section>
    );
}