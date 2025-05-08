"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "Profit & Loss", href: "/financial-statements" },
  { label: "Balance Sheet", href: "/reports/balance-sheet" },
  { label: "Cash Flow Statement", href: "/reports/cash-flow" },
];

export default function ReportTabs() {
  const pathname = usePathname();

  return (
    <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;

          return (
            <li className="me-2" key={tab.href} role="presentation">
              <Link
                href={tab.href}
                className={`inline-block p-4 border-b-2 rounded-t-lg transition-all ${
                  isActive
                    ? "text-blue-600 border-blue-600 active"
                    : "border-transparent"
                }`}
              >
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
