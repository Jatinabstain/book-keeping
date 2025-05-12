'use client';

import {
    ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend,
} from 'recharts';
import { useState } from 'react';
import Link from 'next/link';

const monthlyData = [
    { month: 'Jan', inflow: 12000, outflow: 8000 },
    { month: 'Feb', inflow: 15000, outflow: 9000 },
    { month: 'Mar', inflow: 18000, outflow: 9500 },
    { month: 'Apr', inflow: 14000, outflow: 11000 },
    { month: 'May', inflow: 17000, outflow: 12000 },
    { month: 'Jun', inflow: 16000, outflow: 10500 },
    { month: 'Jul', inflow: 19000, outflow: 11500 },
];

const ytdData = [
    { label: 'Q1', inflow: 45000, outflow: 27000 },
    { label: 'Q2', inflow: 47000, outflow: 33500 },
];

const rolling12Data = [
    { month: 'Aug', inflow: 13000, outflow: 9000 },
    { month: 'Sep', inflow: 14500, outflow: 9500 },
    { month: 'Oct', inflow: 16000, outflow: 11000 },
    { month: 'Nov', inflow: 17000, outflow: 11500 },
    { month: 'Dec', inflow: 15500, outflow: 10000 },
    { month: 'Jan', inflow: 12000, outflow: 8000 },
    { month: 'Feb', inflow: 15000, outflow: 9000 },
    { month: 'Mar', inflow: 18000, outflow: 9500 },
    { month: 'Apr', inflow: 14000, outflow: 11000 },
    { month: 'May', inflow: 17000, outflow: 12000 },
    { month: 'Jun', inflow: 16000, outflow: 10500 },
    { month: 'Jul', inflow: 19000, outflow: 11500 },
];

const viewOptions = {
    Monthly: monthlyData,
    YTD: ytdData,
    '12-Month': rolling12Data,
};

export default function CashFlowChart() {
    const [view, setView] = useState<'Monthly' | 'YTD' | '12-Month'>('Monthly');

    const data = viewOptions[view];
    const labelKey = view === 'YTD' ? 'label' : 'month';

    return (
        <div className="bg-white px-6 py-4 shadow w-full mx-auto">
            <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
                <Link href="#" className='flex justify-baseline items-center gap-3'>
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">Cash Flow - {view}</h2>
                        <p className="text-xs text-gray-400">Based on latest entries</p>
                    </div>
                    <div>
                        <i className="fi fi-rr-angle-small-right text-2xl opacity-100"></i>
                    </div>
                </Link>
                <div className="flex space-x-2">
                    {(['Monthly', 'YTD', '12-Month'] as const).map((option) => (
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
            </div>

            <hr className='mt-3 mb-4 opacity-10' />

            <ResponsiveContainer width="100%" height={350}>
                <BarChart data={data}>
                    <defs>
                        <linearGradient id="inflowGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#00799c" stopOpacity={1} />
                            <stop offset="95%" stopColor="#00799c" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="outflowGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#b11107" stopOpacity={0.7} />
                            <stop offset="95%" stopColor="#b11107" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey={labelKey} tickLine={false} />
                    <YAxis tickLine={false} />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#ffffff',
                            borderRadius: '0',
                            border: '1px solid #e5e7eb',
                            fontSize: '0.85rem',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                        }}
                    />
                    <CartesianGrid strokeDasharray="4 4" stroke="#f3f4f6" />
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
                            { value: 'Cash In', type: 'circle', color: '#00799c' },
                            { value: 'Cash Out', type: 'circle', color: '#b11107' },
                        ]}
                        layout="horizontal"
                        align="center"
                        verticalAlign="bottom"
                    />
                    <Bar
                        dataKey="inflow"
                        fill="url(#inflowGradient)"
                        name="Cash In"
                        radius={[8, 8, 0, 0]}
                        animationDuration={800}
                        animationEasing="ease-out"
                        barSize={16}
                    />
                    <Bar
                        dataKey="outflow"
                        fill="url(#outflowGradient)"
                        name="Cash Out"
                        radius={[8, 8, 0, 0]}
                        animationDuration={800}
                        animationEasing="ease-out"
                        barSize={16}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
