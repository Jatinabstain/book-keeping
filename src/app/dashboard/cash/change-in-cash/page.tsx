'use client';

import { useState } from 'react';
import BankBalanceChart from '@/components/BankBalanceChart';
import CashFlowChart from '@/components/CashFlowChart';

const bankData = [
    { bank: 'Changes in Cash', opening: 100000, closing: 120000 },
    { bank: 'ICICI Bank', opening: 75000, closing: 65000 },
    { bank: 'SBI', opening: 70000, closing: 125000 },
];

const formatCurrency = (amount: number) =>
    `€${amount.toLocaleString('en-US')}`;

export default function ChangeInCashPage() {
    const totalOpening = bankData.reduce((sum, b) => sum + b.opening, 0);
    const totalClosing = bankData.reduce((sum, b) => sum + b.closing, 0);
    const netChange = totalClosing - totalOpening;

    return (
        <div className="p-6 space-y-8">
            <div>
                <h1 className="text-2xl font-semibold tracking-tight text-neutral-800">
                    Change in Cash
                </h1>
                <p className="text-sm text-neutral-500">Current bank balance & cash in / cash out based on transactions from your bank accounts.</p>
            </div>

            {/* Summary Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-neutral-200 bg-white p-4">
                    <p className="text-xs text-neutral-500 uppercase mb-1">Current Bank Balance</p>
                    <p className="text-lg font-semibold text-neutral-800">{formatCurrency(totalOpening)}<span className="ms-3 items-end px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-primary text-white">Estimated</span></p>
                </div>
                <div className="border border-neutral-200 bg-white p-4">
                    <p className="text-xs text-neutral-500 uppercase mb-1">Change in Cash (Month-to-Date)</p>
                    <p className="text-lg font-semibold text-neutral-800">€0.00
                        <span className="ms-3 items-end px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-primary text-white">Estimated</span>
                    </p>
                </div>
            </div>

            <CashFlowChart />

            <div className="bg-white p-3">
                <div className="w-full overflow-x-auto">
                    <div className="min-w-[200px]">
                        <table className="w-full text-sm text-black border-collapse table_custom1">
                            <thead className="text-xs text-black uppercase bg-gray-50">
                                <tr>
                                    <th className="bg-gray-100 z-10 p-2 px-8 w-60 text-left font-semibold border-gray-200"></th>
                                    <th className="bg-gray-100 z-10 p-2 px-8 w-60 text-left font-semibold border-gray-200">Nov 2024</th>
                                    <th className="bg-gray-100 z-10 p-2 px-8 w-60 text-left font-semibold border-gray-200">Dec 2024</th>
                                    <th className="bg-gray-100 z-10 p-2 px-8 w-60 text-left font-semibold border-gray-200">Jan 2025</th>
                                    <th className="bg-gray-100 z-10 p-2 px-8 w-60 text-left font-semibold border-gray-200">Feb 2025</th>
                                    <th className="bg-gray-100 z-10 p-2 px-8 w-60 text-left font-semibold border-gray-200">Mar 2025</th>
                                    <th className="bg-gray-100 z-10 p-2 px-8 w-60 text-left font-semibold border-gray-200">Apr 2025</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="px-4 py-3 text-center">Change in Cash</th>
                                    <td className="px-4 py-3 text-center">€25, 031</td>
                                    <td className="px-4 py-3 text-center text-red-800">-€94, 842</td>
                                    <td className="px-4 py-3 text-center">€16, 136</td>
                                    <td className="px-4 py-3 text-center">€17, 871</td>
                                    <td className="px-4 py-3 text-center">€14, 646</td>
                                    <td className="px-4 py-3 text-center">-</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-center">Cash in</td>
                                    <td className="px-4 py-3 text-center">€56, 448</td>
                                    <td className="px-4 py-3 text-center">€85, 966</td>
                                    <td className="px-4 py-3 text-center">€94, 383</td>
                                    <td className="px-4 py-3 text-center">€120, 283</td>
                                    <td className="px-4 py-3 text-center">€124, 438</td>
                                    <td className="px-4 py-3 text-center">-</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-center">Cash out</td>
                                    <td className="px-4 py-3 text-center text-red-800">-€31, 416</td>
                                    <td className="px-4 py-3 text-center text-red-800">-€180, 818</td>
                                    <td className="px-4 py-3 text-center text-red-800">-€78, 247</td>
                                    <td className="px-4 py-3 text-center text-red-800">-€120, 421</td>
                                    <td className="px-4 py-3 text-center text-red-800">-€109, 792</td>
                                    <td className="px-4 py-3 text-center">-</td>
                                </tr>
                                <tr>
                                    <th className="px-4 py-3 text-center text-black">Ending Bank Balance</th>
                                    <th className="px-4 py-3 text-center text-black">€505, 261.18</th>
                                    <th className="px-4 py-3 text-center text-black">€410, 408.73</th>
                                    <th className="px-4 py-3 text-center text-black">€426, 545.21</th>
                                    <th className="px-4 py-3 text-center text-black">€444, 416.25</th>
                                    <th className="px-4 py-3 text-center text-black">€459, 062.49</th>
                                    <th className="px-4 py-3 text-center text-black">€459, 062.49</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
