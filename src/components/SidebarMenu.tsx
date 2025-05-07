"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuItem } from "@/lib/menuData";

export default function SidebarMenu({ menu }: { menu: MenuItem[] }) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (slug: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }));
  };

  return (
    <ul className="menu">
      {menu.map((item) => {
        const hasChildren = item.children && item.children.length > 0;
        const isOpen = openItems[item.slug];

        return (
          <li key={item.slug}>
            <Link href={item.href} className="flex items-center gap-2 py-2 px-3" onClick={() => hasChildren && toggleItem(item.slug)}>
              <i className={`${item.icon}`} />
              <span className="flex-1">
                {item.label}
              </span>
              {hasChildren && (
                <i
                  className={`${
                    isOpen ? "fi fi-rr-angle-up" : "fi fi-rr-angle-down"
                  } arrows`}
                />
              )}
            </Link>

            {hasChildren && isOpen && (
              <ul className="mt-1 space-y-1">
                {(item.children ?? []).map((child) => (
                  <li key={child.slug}>
                    <Link href={child.href} className="flex items-center gap-2 text-sm text-gray-600 hover:underline">
                      <i className={`${child.icon} text-base`} />
                      <span>{child.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}
