import Link from 'next/link';

const iconMap: { [key: string]: string } = {
  Revenue: 'growth-chart-invest',
  'Net income': 'sack-dollar',
  'Cash balance': 'money-bill-wave',
  'Card balance': 'equality',
};

export default function StatCard({
  title,
  amount,
  change,
  note,
  link = '#',
}: {
  title: string;
  amount: string;
  change: string;
  note: string;
  link?: string;
}) {
  const isPositive = change.startsWith('+');

  return (
    <Link href={link}>
      <div className="bg-white border border-gray-200 p-4 w-full hover:shadow-md hover:ring-1 hover:ring-primary transition-all duration-200 cursor-pointer dashboard_card">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
            <p className="text-xs text-gray-400 mt-0.5">{note}</p>
          </div>
          <div className="bg-primary/10 text-primary p-2 rounded-md">
            <i className={`fr fi-rr-${iconMap[title]} text-base`} />
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div className="text-xl font-bold text-gray-900">{amount}</div>
          <span className={`text-xs font-semibold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {change}
          </span>
        </div>
      </div>
    </Link>
  );
}
