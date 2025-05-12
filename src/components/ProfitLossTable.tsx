'use client';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const months = [
  "Jan 2024", "Feb 2024", "Mar 2024", "Apr 2024", "May 2024", "Jun 2024",
  "Jul 2024", "Aug 2024", "Sep 2024", "Oct 2024", "Nov 2024", "Dec 2024",
  "Jan 2025", "Feb 2025", "Mar 2025", "Apr 2025", "May 2025", "Jun 2025",
  "Jul 2025", "Aug 2025", "Sep 2025", "Oct 2025", "Nov 2025", "Dec 2025",
];

const monthDates = months.map((label) => {
  const [mon, year] = label.split(' ');
  return new Date(`${mon} .4, ${year}`);
});

const baseData: { [key: string]: number[] } = {
  "Consulting Revenue": Array(24).fill(0).map(() => Math.floor(Math.random() * 10000 + 5000)),
  "Product Sales": Array(24).fill(0).map(() => Math.floor(Math.random() * 15000 + 8000)),
  "Returns": Array(24).fill(0).map(() => Math.floor(Math.random() * 1000)),
  "Allowances and Discounts": Array(24).fill(0).map(() => Math.floor(Math.random() * 800)),
  "Cost of Goods Sold": Array(24).fill(0).map(() => Math.floor(Math.random() * 7000 + 3000)),
  "Merchant Fees": Array(24).fill(0).map(() => Math.floor(Math.random() * 400 + 200)),
  "Expenses": Array(24).fill(0).map(() => Math.floor(Math.random() * 5000 + 2000)),
  "Health Insurance": Array(24).fill(800),
  "Other Employee Benefits": Array(24).fill(600),
  "Payroll": Array(24).fill(0).map(() => Math.floor(Math.random() * 7000 + 3000)),
};

const metricsData: { [key: string]: number[] } = {
  ...baseData,
  "Total Products": baseData["Product Sales"].map((v, i) => v - baseData["Returns"][i] - baseData["Allowances and Discounts"][i]),
  "Total Income": baseData["Consulting Revenue"].map((v, i) => v + baseData["Product Sales"][i]),
  "Total Cost of Goods Sold": baseData["Cost of Goods Sold"].map((v, i) => v + baseData["Merchant Fees"][i]),
  "Gross Profit": baseData["Consulting Revenue"].map((v, i) =>
    v + baseData["Product Sales"][i]
    - baseData["Returns"][i]
    - baseData["Allowances and Discounts"][i]
    - baseData["Cost of Goods Sold"][i]
    - baseData["Merchant Fees"][i]
  ),
};

export default function MetricsTable() {
  const [filterType, setFilterType] = useState<'12month' | 'custom'>('12month');
  const [startDate, setStartDate] = useState<Date | null>(monthDates[0]);
  const [endDate, setEndDate] = useState<Date | null>(monthDates[11]);
  const [selectedMonth, setSelectedMonth] = useState(monthDates[0]);

  const filteredMonths = filterType === '12month'
    ? months.slice(monthDates.indexOf(selectedMonth), monthDates.indexOf(selectedMonth) + 12)
    : months.filter((_, i) => {
      const date = monthDates[i];
      return startDate && endDate && date >= startDate && date <= endDate;
    });

  const filteredIndexes = filteredMonths.map(m => months.indexOf(m));
  const metrics = Object.keys(metricsData);

  return (
    <section className="p-6">
      {/* Filters Section */}
      <div className="flex justify-between items-center gap-4 mb-6">
        {/* Filter Type Toggle */}
        <div className="flex gap-4">
          <button
            onClick={() => setFilterType('12month')}
            className={`p-2 px-4 text-sm ${filterType === '12month' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            12-Month View
          </button>
          <button
            onClick={() => setFilterType('custom')}
            className={`p-2 text-sm ${filterType === 'custom' ? 'bg-primary  text-white' : 'bg-gray-200'}`}
          >
            Custom Date Range
          </button>
        </div>

        {/* 12-Month Dropdown */}
        {filterType === '12month' && (
          <div className="flex gap-4">
            <select
              id="month-dropdown"
              value={selectedMonth.toISOString()}
              onChange={(e) => setSelectedMonth(monthDates.find(date => date.toISOString() === e.target.value) || monthDates[0])}
              className="border border-gray-300 p-2 px-4 text-sm"
            >
              {monthDates.map((date, idx) => (
                <option key={idx} value={date.toISOString()}>{months[idx]}</option>
              ))}
            </select>
          </div>
        )}

        {/* Date Filter Section */}
        {filterType === 'custom' && (
          <div className="flex gap-4">
            <div>
              <DatePicker
                selected={startDate}
                onChange={setStartDate}
                dateFormat="MMM yyyy"
                showMonthYearPicker
                className="border border-gray-300 p-2 px-4 text-sm"
              />
            </div>
            <div>
              <DatePicker
                selected={endDate}
                onChange={setEndDate}
                dateFormat="MMM yyyy"
                showMonthYearPicker
                className="border border-gray-300 p-2 px-4 text-sm"
              />
            </div>
          </div>
        )}
      </div>

      {/* Table Section */}
      <div className="w-full overflow-x-auto">
        <div className="max-w-[200px]">
          <table className=" w-full text-sm text-gray-500 border-collapse table_custom1">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="sticky left-0 whitespace-nowrap bg-gray-100 z-10 p-2 px-8 w-60 text-left font-semibold border-gray-200"></th>
                {filteredMonths.map((month) => (
                  <th key={month} className="p-2.5 border-r border-gray-200 whitespace-nowrap text-center font-medium">
                    {month}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {metrics.map((metric, rowIdx) => (
                <tr key={metric} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-white'}>
                  <td className="sticky left-0 whitespace-nowrap bg-white z-10 p-3 px-8 border-r border-gray-100 font-medium text-gray-800  border-b">
                    {metric}
                  </td>
                  {filteredIndexes.map((i) => (
                    <td key={i} className="p-3 px-8 text-right border-gray-100 text-gray-700 border-b">
                      ${metricsData[metric][i]?.toLocaleString() || '—'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
