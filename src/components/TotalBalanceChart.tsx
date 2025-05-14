'use client';

import {
    ResponsiveContainer, ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import { useState } from 'react';
import Link from 'next/link';

const monthlyData = [
    { month: 'Jan', bankAccount: 12000, creditCard: 8000, change: 0.10 },
    { month: 'Feb', bankAccount: 15000, creditCard: 9000, change: 0.12 },
    { month: 'Mar', bankAccount: 18000, creditCard: 9500, change: 0.15 },
    { month: 'Apr', bankAccount: 14000, creditCard: 11000, change: 0.05 },
    { month: 'May', bankAccount: 17000, creditCard: 12000, change: 0.08 },
    { month: 'Jun', bankAccount: 16000, creditCard: 10500, change: 0.12 },
    { month: 'Jul', bankAccount: 19000, creditCard: 11500, change: 0.13 },
];

const weeklyData = [
    { week: 'Week 1', bankAccount: 3000, creditCard: 2000, change: 0.08 },
    { week: 'Week 2', bankAccount: 3500, creditCard: 2500, change: 0.10 },
    { week: 'Week 3', bankAccount: 4000, creditCard: 3000, change: 0.12 },
    { week: 'Week 4', bankAccount: 3200, creditCard: 2800, change: 0.09 },
];

const viewOptions = {
    Monthly: monthlyData,
    Weekly: weeklyData,
};

export default function CashFlowChart() {
    const [view, setView] = useState<'Monthly' | 'Weekly'>('Monthly');

    const data = viewOptions[view];
    const labelKey = view === 'Weekly' ? 'week' : 'month';

    return (
        <>
            <div className="flex space-x-2 justify-start">
                {(['Monthly', 'Weekly'] as const).map((option) => (
                    <button
                        key={option}
                        className={`px-3 py-1.5 text-sm border transition focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary ${view === option
                            ? 'bg-primary text-white border-primary'
                            : 'text-gray-700 border-gray-300 hover:bg-gray-100'
                            }`}
                        onClick={() => setView(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>

            <hr className='mt-3 mb-4 opacity-10' />

            <ResponsiveContainer width="100%" height={350}>
                <ComposedChart data={data}>
                    <defs>
                        <linearGradient id="bankAccountGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#00799c" stopOpacity={0.9} />
                            <stop offset="95%" stopColor="#00799c" stopOpacity={0.2} />
                        </linearGradient>
                        <linearGradient id="creditCardGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#b11107" stopOpacity={0.9} />
                            <stop offset="95%" stopColor="#b11107" stopOpacity={0.2} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid strokeDasharray="4 4" stroke="#f3f4f6" />
                    <XAxis dataKey={labelKey} tickLine={false} />
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
                                return `€${safeValue.toLocaleString()}`;
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
                            { value: 'Bank Account', type: 'circle', color: '#00799c' },
                            { value: 'Credit Card', type: 'circle', color: '#b11107' },
                        ]}
                        layout="horizontal"
                        align="center"
                        verticalAlign="bottom"
                    />

                    <Bar
                        yAxisId="left"
                        dataKey="bankAccount"
                        fill="url(#bankAccountGradient)"
                        name="Bank Account"
                        radius={[8, 8, 0, 0]}
                        barSize={16}
                        animationDuration={800}
                        animationEasing="ease-out"
                    />
                    <Bar
                        yAxisId="left"
                        dataKey="creditCard"
                        fill="url(#creditCardGradient)"
                        name="Credit Card"
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
        </>
    );
}
