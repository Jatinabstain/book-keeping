import Image from "next/image";
import TotalBalanceChart from '@/components/TotalBalanceChart';
import TopTransactions from "@/components/TopTransactions";

export default function Accounts() {
    const banks = [
        { name: "HDFC Bank", balance: 14500 },
        { name: "SBI", balance: 8920 },
        { name: "ICICI", balance: 23000 },
    ];

    const creditCards = [
        { name: "HDFC Credit", balance: -2300 },
        { name: "Amazon Pay ICICI", balance: -1100 },
    ];

    const totalBalance = banks.reduce((acc, b) => acc + b.balance, 0);

    return (
        <section className="mx-auto max-w-[1400px] px-[15px] w-full pt-8">
            <h1 className="text-xl font-semibold mb-5">Accounts</h1>

            <div className="flex lg:flex-row flex-col gap-5">
                <div className="flex-2/5 bg-white shadow p-5 h-max">
                    {/* Header */}
                    <div className="flex flex-col space-y-1 mb-5">
                        <h2 className="text-lg font-semibold text-gray-800">My Accounts</h2>
                    </div>

                    {/* Total Balance */}
                    <div className="flex justify-between items-center">
                        <h3 className="text-base font-semibold text-gray-800">Total Balance</h3>
                        <span className="text-xl font-semibold text-green-600">€472,375.48</span>
                    </div>

                    <hr className="my-4 opacity-15" />

                    {/* Bank Accounts */}
                    <div className="mb-6">
                        <h3 className="text-sm font-semibold text-gray-500 mb-3">Bank Accounts</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-between py-3">
                                <div className="flex items-center gap-2">
                                    <div className="icon flex align-middle border px-3 border-gray-300 py-2 rounded leading-0">
                                        <i className="fi fi-rr-bank text-gray-600 text-xl leading-0 pb-0.5"></i>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">Brex Bank</p>
                                        <p className="text-xs text-gray-400 m-0">Updated 14 days ago</p>
                                    </div>
                                </div>
                                <span className="text-base font-semibold text-primary">€459,062.49</span>
                            </li>
                            <li className="flex items-center justify-between py-3 ">
                                <div className="flex items-center gap-2">
                                    <div className="icon">
                                        <Image
                                            src="/stripe.svg"
                                            alt="Bank"
                                            width={45}
                                            height={45}
                                        />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">Stripe Merchant</p>
                                        <p className="text-xs text-gray-400 m-0">Updated 12 days ago</p>
                                    </div>
                                </div>
                                <span className="text-base font-semibold text-primary">€13,312.99</span>
                            </li>
                        </ul>
                    </div>

                    {/* Credit Cards */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-500 mb-3">Credit Cards</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-between py-3">
                                <div className="flex items-center gap-2">
                                    <div className="icon flex align-middle border px-3 border-gray-300 py-2 rounded  leading-0">
                                        <i className="fi fi-rr-bank text-gray-600 text-xl leading-0 pb-0.5"></i>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">Brex Card</p>
                                        <p className="text-xs text-gray-400">Updated 14 days ago</p>
                                    </div>
                                </div>
                                <span className="text-base font-semibold text-primary">€0.00</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex-3/5">
                    <div className="bg-white shadow p-6 mb-5">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold mb-0">Accounts</h2>
                            <button className="bg-primary flex gap-2 items-center text-white px-3 py-2.5">
                                <i className="fi fi-rr-settings leading-0"></i> Chart Settings
                            </button>
                        </div>
                    </div>
                    <div className="bg-white shadow p-6">
                        <div className="flex justify-between">
                            <h3 className="text-xl font-semibold">Total Balance</h3>
                            <div className="text-end">
                                <span className="text-xl block font-semibold">€472,375.48</span>
                                <span className="items-end px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary text-white">
                                    Estimated
                                </span>
                            </div>
                        </div>
                        <TotalBalanceChart />
                    </div>
                    {/* create top transactions section */}
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
                </div>
            </div>
        </section>
    );
}
