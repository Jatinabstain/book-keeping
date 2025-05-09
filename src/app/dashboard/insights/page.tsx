import InsightsTabs from "@/components/InsightsTabs";
import Image from "next/image";

export default function Insights() {
    return (
        <section className="mx-auto max-w-[1400px] px-[15px] w-full pt-8">
            <h1 className="text-xl font-semibold mb-4">Insights</h1>

            <InsightsTabs />

            <div className="bg-white p-6 mb-5 shadow">
                <div className="flex gap-4 items-center">
                    <div className="image flex-1/6">
                        <Image
                            src="recurring.svg"
                            alt="Recurring Expenses"
                            width={180}
                            height={180}
                        />
                    </div>
                    <div className="content">
                        <h2 className="text-xl font-bold text-primary mb-2">About Recurring Expenses</h2>
                        <p>The report contains the prepaid subscriptions and recurring expenses we've detected on your books. Click a vendor below to see more details about the monthly trend ana payment nistory.</p>
                    </div>
                </div>
            </div>

            <div className="bg-white p-4 mb-5 shadow">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">Subscriptions & Recurring Expenses</h2>
                    <select className="border border-gray-300 rounded-md p-2">
                        <option value="all">All Categories</option>
                        <option value="subscriptions">Subscriptions</option>
                        <option value="recurring-expenses">Recurring Expenses</option>
                    </select>
                </div>

                {/* table vender, Monthly trend, %change, january amount */}


                <div className="relative overflow-x-auto shadow-md">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                
                                <th scope="col" className="px-6 py-3">
                                    Vendor
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Monthly Trend
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    % Change
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    January Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50">
                                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image" />
                                        <div className="ps-3">
                                            <div className="text-base font-semibold">Neil Sims</div>
                                            <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                        </div>
                                </th>
                                <td className="px-6 py-4">
                                    React Developer
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                
                                <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image" />
                                        <div className="ps-3">
                                            <div className="text-base font-semibold">Bonnie Green</div>
                                            <div className="font-normal text-gray-500">bonnie@flowbite.com</div>
                                        </div>
                                </th>
                                <td className="px-6 py-4">
                                    Designer
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    );
}