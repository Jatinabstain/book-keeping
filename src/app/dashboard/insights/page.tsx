"use client";

import { useEffect, useRef } from "react";
import { useState } from "react";
import InsightsTabs from "@/components/InsightsTabs";
import MonthlyAmountChart from "@/components/MonthlyAmountChart";
import Image from "next/image";

export default function Insights() {
    const modalRef = useRef<HTMLDivElement>(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVendor, setSelectedVendor] = useState<any>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsModalOpen(false);
            }
        };

        if (isModalOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isModalOpen]);

    const handleRowClick = (vendor: any) => {
        setSelectedVendor(vendor);
        setIsModalOpen(true);
    };

    const vendors = [
        {
            name: "Pamela Chavez",
            tag: "COGS Labor",
            logo: "stripe.svg",
            change: "+12%",
            changeColor: "green",
            amount: "$30,000",
        },
        {
            name: "Pamela Chavez",
            tag: "COGS Labor",
            logo: "next.svg",
            change: "-2%",
            changeColor: "red",
            amount: "$10,000",
        },
    ];

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
                        <p>
                            The report contains the prepaid subscriptions and recurring expenses we've detected on your books.
                            Click a vendor below to see more details about the monthly trend and payment history.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white p-4 mb-5 shadow">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">Subscriptions & Recurring Expenses</h2>
                    <select className="border border-gray-300 p-2">
                        <option value="all">All Categories</option>
                        <option value="subscriptions">Subscriptions</option>
                        <option value="recurring-expenses">Recurring Expenses</option>
                    </select>
                </div>

                <div className="relative overflow-x-auto shadow-md">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 w-1/2">Vendor</th>
                                <th className="px-6 py-3">Monthly Trend</th>
                                <th className="px-6 py-3">% Change</th>
                                <th className="px-6 py-3">January Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vendors.map((vendor, index) => (
                                <tr
                                    key={index}
                                    className="bg-white border-b border-gray-200 cursor-pointer hover:bg-gray-50"
                                    onClick={() => handleRowClick(vendor)}
                                >
                                    <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        <Image src={vendor.logo} width={40} height={40} alt={vendor.name} />
                                        <div className="ps-3">
                                            <div className="text-base font-semibold">{vendor.name}</div>
                                            <div className="font-normal text-gray-500">{vendor.tag}</div>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4 font-medium text-black">
                                        <MonthlyAmountChart />
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <span className={`text-sm font-semibold text-${vendor.changeColor}-600`}>
                                                <i className={`fi fi-rr-arrow-small-${vendor.changeColor === "green" ? "up" : "down"} text-xl align-sub`} />
                                                {" "}{vendor.change}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="font-medium text-black">{vendor.amount}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && selectedVendor && (
                <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 transition-all">
                    <div ref={modalRef} className="relative bg-white shadow-xl p-5 w-full max-w-lg animate-fade-in border border-gray-300">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer transition"
                            aria-label="Close"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Modal Content */}
                        <div>
                            <div className="flex gap-3 pb-3">
                                <Image src={selectedVendor.logo} alt={selectedVendor.name} width={50} height={50} />
                                <div>
                                    <h2 className="text-base font-bold text-gray-800">{selectedVendor.name}</h2>
                                    <p className="text-xs text-gray-500">{selectedVendor.tag}</p>
                                </div>
                            </div>
                            
                            <div className="border-t pt-4 text-left space-y-2 border-gray-300">
                                {/* <MonthlyAmountChart /> */}
                                <p><span className="font-medium">January Amount:</span> {selectedVendor.amount}</p>
                                <p><span className="font-medium">Trend:</span> <span className={`text-${selectedVendor.changeColor}-600`}>{selectedVendor.change}</span></p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
