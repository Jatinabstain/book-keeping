'use client';

import { useState } from 'react';

const transactions = [
    { id: 1, date: '2025-05-01', description: 'Deposit - Salary', amount: 5000, type: 'income' },
    { id: 2, date: '2025-05-05', description: 'Payment - Rent', amount: -1200, type: 'expense' },
    { id: 3, date: '2025-05-07', description: 'Transfer - PayPal', amount: 1500, type: 'income' },
    { id: 4, date: '2025-05-09', description: 'Payment - Credit Card', amount: -200, type: 'expense' },
    { id: 5, date: '2025-05-10', description: 'Deposit - Freelance', amount: 2500, type: 'income' },
];

export default function TopTransactions() {
    return (
        <div className="space-y-3">
    {transactions.map((transaction) => (
        <div
            key={transaction.id}
            className={`flex justify-between items-center p-4 border-l-2  shadow-sm transition-transform duration-300 hover:scale-[1.01] ${
                transaction.type === 'income'
                    ? 'bg-white border-[#00799c]'
                    : 'bg-white border-[#b11107]'
            }`}
        >
            <div className="flex items-center gap-4">
                <div
                    className={`w-10 h-10 flex items-center justify-center shadow-sm ${
                        transaction.type === 'income'
                            ? 'bg-[#e0f3f7] text-[#00799c]'
                            : 'bg-[#fce8e7] text-[#b11107]'
                    }`}
                    style={{
                        fontSize: '1.25rem',
                    }}
                >
                    <i
                        className={`leading-0 fi ${
                            transaction.type === 'income'
                                ? 'fi-rr-arrow-trend-up'
                                : 'fi-rr-arrow-trend-down'
                        }`}
                    ></i>
                </div>

                <div className="flex flex-col">
                    <span className="text-xs text-gray-500">{transaction.date}</span>
                    <span className="text-sm font-medium text-gray-800">{transaction.description}</span>
                </div>
            </div>

            <div
                className={`text-sm font-semibold ${
                    transaction.amount < 0 ? 'text-[#b11107]' : 'text-[#00799c]'
                }`}
            >
                €{Math.abs(transaction.amount).toLocaleString()}
            </div>
        </div>
    ))}
</div>

    );
}
