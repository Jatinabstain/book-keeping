import TopTransactions from "@/components/TopTransactions";

export default function BankTransactions() {
    return ( 
        <section className="mx-auto max-w-[1400px] px-[15px] w-full pt-8">
            <h1 className="text-xl font-semibold mb-0">Bank Transactions</h1>

            <div className="bg-white shadow p-6 mt-5">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Top Transactions</h3>
                    <button className="font-semibold text-primary transition duration-200 flex items-center gap-2">
                        View All <i className="fi fi-br-arrow-right leading-0 "></i>
                    </button>
                </div>
                <div className="mt-4">
                    {/* Add your top transactions chart here */}
                    <TopTransactions />
                </div>
            </div>
        </section>
     );
}