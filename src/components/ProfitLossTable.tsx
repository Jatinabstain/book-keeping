// components/ProfitLossTable.tsx

import React from 'react';

interface FinancialData {
  category: string;
  july: number;
  august: number;
  september: number;
  october: number;
  november: number;
  december: number;
  january: number;
  total: number;
}

const financialData: FinancialData[] = [
  { category: 'Consulting Revenue', july: 15000, august: 14500, september: 14800, october: 15100, november: 14900, december: 15200, january: 15000, total: 89400 },
  { category: 'Product Sales', july: 5000, august: 4700, september: 5200, october: 5100, november: 4900, december: 5200, january: 5300, total: 31400 },
  { category: 'Returns, Allowances, and Discounts', july: -200, august: -180, september: -190, october: -200, november: -210, december: -230, january: -220, total: -1430 },
  { category: 'Total Product Sales', july: 4800, august: 4520, september: 5010, october: 4900, november: 4690, december: 4970, january: 5080, total: 29470 },
  { category: 'Total Income', july: 19800, august: 19200, september: 20010, october: 20000, november: 19800, december: 20200, january: 20300, total: 119310 },
  { category: 'COGS Labor', july: -4000, august: -3800, september: -3900, october: -4000, november: -4100, december: -4200, january: -4300, total: -27300 },
  { category: 'Cost of Goods Sold', july: -12000, august: -11800, september: -12200, october: -12300, november: -12100, december: -12400, january: -12600, total: -73600 },
];

const ProfitLossTable: React.FC = () => {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg border border-gray-200">
      <table className="min-w-full text-sm text-left text-gray-500">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 font-medium text-gray-700">Category</th>
            <th className="px-4 py-2 font-medium text-gray-700">Jul '24</th>
            <th className="px-4 py-2 font-medium text-gray-700">Aug '24</th>
            <th className="px-4 py-2 font-medium text-gray-700">Sep '24</th>
            <th className="px-4 py-2 font-medium text-gray-700">Oct '24</th>
            <th className="px-4 py-2 font-medium text-gray-700">Nov '24</th>
            <th className="px-4 py-2 font-medium text-gray-700">Dec '24</th>
            <th className="px-4 py-2 font-medium text-gray-700">Jan '25</th>
            <th className="px-4 py-2 font-medium text-gray-700">Total</th>
          </tr>
        </thead>
        <tbody>
          {financialData.map((data, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 font-medium text-gray-800">{data.category}</td>
              {Object.values(data)
                .slice(1)
                .map((value, idx) => (
                  <td key={idx} className={`px-4 py-2 ${value < 0 ? 'text-red-500' : ''}`}>
                    {value.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfitLossTable;
