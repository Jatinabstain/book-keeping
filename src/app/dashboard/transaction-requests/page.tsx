import TodoListTabs from "@/components/TodoListTabs";
import Image from "next/image";
import Link from "next/link";

export default function TransactionRequests() {
    return (
        <section className="mx-auto max-w-[1400px] px-[15px] w-full pt-8">
            {/* task heading */}
            <h1 className="text-xl font-semibold mb-4">To-Do List</h1>
            <TodoListTabs />

            <div className="bg-white p-6 mb-5 shadow">
                <div className="flex gap-12 items-center justify-start">
                    <div className="image">
                        <Image
                            src="recurring.svg"
                            alt="Recurring Expenses"
                            width={180}
                            height={180}
                        />
                    </div>
                    <div className="content">
                        <h2 className="text-xl font-bold text-primary mb-2">Transactions</h2>
                        <p>Book Keeping need your input or approval for the categorization or service period details of the following transactions</p>
                    </div>
                </div>
            </div>

            <div className="bg-white p-4 mb-5 shadow">
                <div className="flex justify-between items-center">
                    <h2 className="text-base font-semibold text-gray-800 mb-4">How would you like to categorize these transactions?</h2>
                </div>

                <div className="flex lg:flex-row flex-col gap-5 lg:items-center border-b pb-4 border-gray-300">
                    <div className="flex items-center">
                        <h2 className="w-10 h-10 rounded-full mr-3 bg-primary flex items-center justify-center flex-col text-white font-semibold">JD</h2>
                        <div>
                            <h2 className="font-bold text-primary uppercase">John Doe</h2>
                            <p className="text-xs text-gray-600">2 months ago</p>
                        </div>
                    </div>
                    {/* select input */}
                    <form className="min-w-1/4 max-w-lg w-full lg:mx-auto">
                        <select id="countries" className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm block w-full p-2.5">
                            <option selected>Please Select</option>
                            <option value="US">Engineering, Product & Design</option>
                        </select>
                    </form>
                    {/* price */}
                    <p className="font-bold text-lg text-primary">$5,600</p>
                </div>
                <div className="p-6">
                    <div className="overflow-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                            <tr>
                                <td>
                                    <span className="block text-black font-semibold">John Doe (Contractor)</span>
                                    <small className="font-sm">Mar 4, 2024 - Brex Card</small>
                                </td>
                                <td>
                                    <span className="block text-black font-semibold">John Doe</span>
                                    <small>Engineering, Product & Design</small>
                                </td>
                                <td className="text-end">
                                    <div className="flex gap-4 justify-end items-center">
                                        <div>
                                            <span className="block text-black font-semibold">$5,600</span>
                                            <small className="text-primary">Expense</small>
                                        </div>
                                        <Link href="#">
                                            <i className="fi fi-br-menu-dots text-lg"></i>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="border-t border-gray-300 py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="link-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-0" />
                            <label htmlFor="link-checkbox"
                                className="ms-2 text-sm font-medium text-gray-900">Categorize <span className="font-bold">Jone Doe</span>
                                <i className="fi fi-br-arrow-right leading-0 align-middle"></i>
                                <span className="font-bold">Engineering, Product & Design</span> going forward</label>
                        </div>

                        <button type="button" className="inline-flex items-center py-2 px-4 font-medium text-center text-white bg-primary text-sm">
                            <i className="fi fi-rr-paper-plane text-base leading-0 text-white"></i>
                            <span className="ms-2">Submit</span>
                        </button>
                    </div>
                </div>

            </div>

        </section>
    );
}