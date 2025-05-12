'use client';

import { useState } from 'react';
import BankBalanceChart from '@/components/BankBalanceChart';

const bankData = [
    { bank: 'HDFC Bank', opening: 100000, closing: 120000 },
    { bank: 'ICICI Bank', opening: 75000, closing: 65000 },
    { bank: 'SBI', opening: 70000, closing: 125000 },
];

const formatCurrency = (amount: number) =>
    `$${amount.toLocaleString('en-US')}`;

export default function ChangeInBankBalancesPage() {
    const totalOpening = bankData.reduce((sum, b) => sum + b.opening, 0);
    const totalClosing = bankData.reduce((sum, b) => sum + b.closing, 0);
    const netChange = totalClosing - totalOpening;

    return (
        <div className="p-6 space-y-8">
            <div>
                <h1 className="text-2xl font-semibold tracking-tight text-neutral-800">
                    Change in Bank Balances
                </h1>
                <p className="text-sm text-neutral-500">Track opening, closing, and net changes across all bank accounts.</p>
            </div>

            {/* Summary Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-neutral-200 bg-white p-4">
                    <p className="text-xs text-neutral-500 uppercase mb-1">Opening Balance</p>
                    <p className="text-lg font-semibold text-neutral-800">{formatCurrency(totalOpening)}</p>
                </div>
                <div className="border border-neutral-200 bg-white p-4">
                    <p className="text-xs text-neutral-500 uppercase mb-1">Closing Balance</p>
                    <p className="text-lg font-semibold text-neutral-800">{formatCurrency(totalClosing)}</p>
                </div>
                <div className="border border-neutral-200 bg-white p-4">
                    <p className="text-xs text-neutral-500 uppercase mb-1">Net Change</p>
                    <p className={`text-lg font-semibold ${netChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {netChange >= 0 ? '+' : '-'}
                        {formatCurrency(Math.abs(netChange))}
                    </p>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white shadow p-4">
                <div className="border border-neutral-200">
                    <table className="w-full text-sm text-neutral-800">
                        <thead className="bg-neutral-100 text-left uppercase text-xs tracking-wide text-neutral-500">
                            <tr>
                                <th className="px-4 py-3">Bank</th>
                                <th className="px-4 py-3 text-right">Opening</th>
                                <th className="px-4 py-3 text-right">Closing</th>
                                <th className="px-4 py-3 text-right">Net Change</th>
                                <th className="px-4 py-3 text-right">% Change</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bankData.map((b, i) => {
                                const net = b.closing - b.opening;
                                const percent = ((net / b.opening) * 100).toFixed(1);
                                return (
                                    <tr
                                        key={i}
                                        className="border-t border-neutral-200 hover:bg-neutral-50 transition-colors"
                                    >
                                        <td className="px-4 py-3 font-medium text-neutral-700">{b.bank}</td>
                                        <td className="px-4 py-3 text-right">{formatCurrency(b.opening)}</td>
                                        <td className="px-4 py-3 text-right">{formatCurrency(b.closing)}</td>
                                        <td
                                            className={`px-4 py-3 text-right font-semibold ${net >= 0 ? 'text-green-600' : 'text-red-600'
                                                }`}
                                        >
                                            {net >= 0 ? '+' : '-'}
                                            {formatCurrency(Math.abs(net))}
                                        </td>
                                        <td className="px-4 py-3 text-right">{percent}%</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Chart Placeholder */}
            <div className="bg-white shadow p-4">
                <BankBalanceChart />
            </div>
        </div>
    );
}
