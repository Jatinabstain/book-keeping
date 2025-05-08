// components/FinancialTable.tsx

const months = [
  "Jan 2024", "Feb 2024", "Mar 2024", "Apr 2024", "May 2024", "Jun 2024",
  "Jul 2024", "Aug 2024", "Sep 2024", "Oct 2024", "Nov 2024", "Dec 2024",
  "Jan 2025", "Feb 2025", "Mar 2025", "Apr 2025", "May 2025", "Jun 2025",
  "Jul 2025", "Aug 2025", "Sep 2025", "Oct 2025", "Nov 2025", "Dec 2025",
];

const metricsData: { [key: string]: number[] } = {
  "Consulting Revenue": Array(24).fill(0).map(() => Math.floor(Math.random() * 10000 + 5000)),
  "Product Sales": Array(24).fill(0).map(() => Math.floor(Math.random() * 15000 + 8000)),
  "Returns": Array(24).fill(0).map(() => Math.floor(Math.random() * 1000)),
  "Allowances and Discounts": Array(24).fill(0).map(() => Math.floor(Math.random() * 800)),
  "Total Products": [],
  "Total Income": [],
  "Cost of Goods Sold": Array(24).fill(0).map(() => Math.floor(Math.random() * 7000 + 3000)),
  "Merchant Fees": Array(24).fill(0).map(() => Math.floor(Math.random() * 400 + 200)),
  "Total Cost of Goods Sold": [],
  "Gross Profit": [],
  "Expenses": Array(24).fill(0).map(() => Math.floor(Math.random() * 5000 + 2000)),
  "Health Insurance": Array(24).fill(800),
  "Other Employee Benefits": Array(24).fill(600),
  "Payroll": Array(24).fill(0).map(() => Math.floor(Math.random() * 7000 + 3000)),
};

// Derived fields
for (let i = 0; i < 24; i++) {
  const sales = metricsData["Product Sales"][i];
  const returns = metricsData["Returns"][i];
  const discounts = metricsData["Allowances and Discounts"][i];
  const consulting = metricsData["Consulting Revenue"][i];
  const products = sales - returns - discounts;
  const totalIncome = consulting + products;
  const cogs = metricsData["Cost of Goods Sold"][i];
  const fees = metricsData["Merchant Fees"][i];
  const totalCost = cogs + fees;
  const grossProfit = totalIncome - totalCost;

  metricsData["Total Products"].push(products);
  metricsData["Total Income"].push(totalIncome);
  metricsData["Total Cost of Goods Sold"].push(totalCost);
  metricsData["Gross Profit"].push(grossProfit);
}

const FinancialTable = () => {
  return (
    <div className="overflow-auto bg-white">
      <table className="min-w-[1000px] w-full text-sm text-gray-700 border-collapse table_custom">
        <thead className="bg-white text-gray-500">
          <tr>
            <th className="sticky left-0 z-20 bg-white px-4 py-3 text-left font-semibold border-r border-gray-200"></th>
            {months.map((month) => (
              <th key={month} className="px-4 py-3 text-right font-medium">{month}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(metricsData).map(([metric, values], rowIdx) => (
            <tr key={metric} className="hover:bg-gray-50 transition">
              <td className="sticky left-0 z-10 bg-gray-300 px-4 py-2 font-medium">{metric}</td>
              {values.map((val, colIdx) => (
                <td key={colIdx} className="px-4 py-2 text-right tabular-nums">
                  ${val.toLocaleString()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinancialTable;
