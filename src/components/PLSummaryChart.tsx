'use client';

import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';
import { useState } from 'react';
import Link from 'next/link';

const data = [
    { month: 'Jan', income: 100000, expense: 50000, profitLoss: 50000, change: 0 },
    { month: 'Feb', income: 120000, expense: 60000, profitLoss: 60000, change: 0.2 },
    { month: 'Mar', income: 140000, expense: 70000, profitLoss: 70000, change: 0.17 },
    { month: 'Apr', income: 130000, expense: 75000, profitLoss: 55000, change: -0.07 },
    { month: 'May', income: 150000, expense: 80000, profitLoss: 70000, change: 0.27 },
    { month: 'Jun', income: 160000, expense: 85000, profitLoss: 75000, change: 0.07 },
    { month: 'Jul', income: 170000, expense: 90000, profitLoss: 80000, change: 0.07 },
];

export default function PnLChart() {
    return (
        <div className="bg-white px-6 py-4 shadow w-full mx-auto mt-5">
            <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
                <Link href="#" className='flex justify-baseline items-center gap-3'>
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">P&amp;L Summary</h2>
                        <p className="text-xs text-gray-400">Last 12 months</p>
                    </div>
                    <div>
                        <i className="fi fi-rr-angle-small-right text-2xl opacity-100"></i>
                    </div>
                </Link>
            </div>

            <hr className="mt-3 mb-4 opacity-10" />

            <ResponsiveContainer width="100%" height={350}>
                <ComposedChart data={data}>
                    <defs>
                        <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#00799c" stopOpacity={0.9} />
                            <stop offset="95%" stopColor="#00799c" stopOpacity={0.2} />
                        </linearGradient>
                        <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#b11107" stopOpacity={0.9} />
                            <stop offset="95%" stopColor="#b11107" stopOpacity={0.2} />
                        </linearGradient>
                        <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#b11107" stopOpacity={0.9} />
                            <stop offset="95%" stopColor="#b11107" stopOpacity={0.2} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid strokeDasharray="4 4" stroke="#f3f4f6" />
                    <XAxis dataKey="month" tickLine={false} />
                    <YAxis yAxisId="left" tickLine={false} axisLine={false} />
                    <YAxis
                        yAxisId="right"
                        orientation="right"
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(val) => `${(val * 100).toFixed(0)}%`}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#ffffff',
                            borderRadius: '0',
                            border: '1px solid #e5e7eb',
                            fontSize: '0.85rem',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                        }}
                        formatter={(value, name) => {
                            const safeValue = value ?? 0;  // Default to 0 if undefined
                            if (name === 'change') {
                                return `${(Number(safeValue) * 100).toFixed(1)}%`;
                            } else {
                                return `₹${safeValue.toLocaleString()}`;
                            }
                        }}
                    />
                    <Legend
                        iconType="circle"
                        iconSize={10}
                        wrapperStyle={{ padding: '0 10px', marginTop: '10px' }}
                        formatter={(value, entry) => (
                            <span className="text-sm text-gray-600">
                                {value}
                            </span>
                        )}
                        payload={[
                            { value: 'Income', type: 'circle', color: '#00799c' },
                            { value: 'Expense', type: 'circle', color: '#b11107' },
                            { value: 'Change (%)', type: 'circle', color: '#10b981' },
                        ]}
                        layout="horizontal"
                        align="center"
                        verticalAlign="bottom"
                    />
                    
                    <Bar
                        yAxisId="left"
                        dataKey="income"
                        fill="url(#incomeGradient)"
                        name="Income"
                        radius={[8, 8, 0, 0]}
                        barSize={16}
                        animationDuration={800}
                        animationEasing="ease-out"
                    />
                    <Bar
                        yAxisId="left"
                        dataKey="expense"
                        fill="url(#expenseGradient)"
                        name="Expense"
                        radius={[8, 8, 0, 0]}
                        barSize={16}
                        animationDuration={800}
                        animationEasing="ease-out"
                    />
                    <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="change"
                        stroke="#10b981"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        name="Change (%)"
                        animationDuration={800}
                        animationEasing="ease-out"
                    />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
}
