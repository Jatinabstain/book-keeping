import Link from "next/link";

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

            <div className="grid grid-cols-1 md:grid-cols-10 gap-6">

                <div className="md:col-span-4 bg-white shadow p-5">
                    {/* Header */}
                    <div className="flex flex-col space-y-1 mb-5">
                        <h2 className="text-lg font-semibold text-gray-800">My Accounts</h2>
                    </div>

                    {/* Total Balance */}
                    <div className="flex justify-between items-center">
                        <h3 className="text-base font-semibold text-gray-800">Total Balance</h3>
                        <span className="text-xl font-semibold text-green-600">$472,375.48</span>
                    </div>

                    <hr className="my-4 opacity-15" />

                    {/* Bank Accounts */}
                    <div className="mb-6">
                        <h3 className="text-sm font-semibold text-gray-500 mb-3">Bank Accounts</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-between py-3">
                                <div className="flex items-center gap-2">
                                    <div className="icon">
                                        <i className="fi fi-rr-bank text-gray-600 flex align-middle border px-3 py-2 rounded border-gray-300 text-xl leading-0"></i>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">Brex Bank</p>
                                        <p className="text-xs text-gray-400 m-0">Updated 14 days ago</p>
                                    </div>
                                </div>
                                <span className="text-base font-semibold text-primary">$459,062.49</span>
                            </li>
                            <li className="flex items-center justify-between py-3 ">
                                <div>
                                    <p className="font-medium text-blue-700">Stripe Merchant</p>
                                    <p className="text-xs text-gray-400">Updated 12 days ago</p>
                                </div>
                                <span className="text-base font-semibold text-primary">$13,312.99</span>
                            </li>
                        </ul>
                    </div>

                    {/* Credit Cards */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-500 mb-3">Credit Cards</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-between py-3">
                                <div className="flex items-center gap-2">
                                    <div className="icon">
                                        <i className="fi fi-rr-bank text-gray-600 flex align-middle border px-3 py-2 rounded border-gray-300 text-xl leading-0"></i>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">Brex Card</p>
                                        <p className="text-xs text-gray-400">Updated 14 days ago</p>
                                    </div>
                                </div>
                                <span className="text-base font-semibold text-primary">$0.00</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="md:col-span-6">
                    <div className=" bg-white shadow p-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold mb-0">Accounts</h2>
                            <button className="bg-primary flex gap-2 items-center text-white px-3 py-2.5 hover:bg-dark-primary hover:text-white transition-all duration-200">
                                <i className="fi fi-rr-settings leading-0"></i> Chart Settings
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
