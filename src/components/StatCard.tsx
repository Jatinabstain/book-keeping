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
      <div className="bg-white rounded-2xl shadow-sm p-5 w-full transition hover:shadow-md hover:scale-[1.02] cursor-pointer">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <i className={`fr fi-rr-${iconMap[title]} text-primary leading-none text-xl`} />
            <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
          </div>
          <span className="text-gray-400 text-lg">&rsaquo;</span>
        </div>
        <div className="mt-3 text-2xl font-bold text-gray-900">
          {amount}
          <span className={`ml-2 text-sm font-semibold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {change}
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-1">{note}</p>
      </div>
    </Link>
  );
}
