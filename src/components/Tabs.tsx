"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "Profit & Loss", href: "/financial-statements" },
  { label: "Balance Sheet", href: "#" },
  { label: "Cash Flow Statement", href: "#" },
];

export default function ReportTabs() {
  const pathname = usePathname();

  return (
    <div className="mb-6 border-b border-gray-200 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <li className="me-5" key={tab.href} role="presentation">
              <Link
                href={tab.href}
                className={`inline-block px-2 py-3 border-b-2 text-[15px] transition-all ${isActive
                    ? "text-primary border-color active"
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
