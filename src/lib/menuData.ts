export interface MenuItem {
    slug: string;
    icon: string;
    label: string;
    href: string;
    children?: MenuItem[];
}

export const menuData: MenuItem[] = [
    {
        slug: "dashboard",
        icon: "fi fi-rr-dashboard",
        label: "Dashboard",
        href: "/dashboard",
        children: [
            {
                slug: "overview",
                icon: "fi fi-rr-angle-double-small-right",
                label: "Overview",
                href: "/dashboard/overview",
            },
            {
                slug: "reports",
                icon: "fi fi-rr-angle-double-small-right",
                label: "Reports",
                href: "/dashboard/reports",
            },
        ],
    },
    {
        slug: "task",
        icon: "fi fi-rr-list-check",
        label: "Task",
        href: "/task",
        children: [],
    },
    {
        slug: "books",
        icon: "fi fi-rr-diary-clasp",
        label: "Books",
        href: "/books",
        children: [],
    },
    {
        slug: "cash",
        icon: "fi fi-rr-chart-histogram",
        label: "Cash",
        href: "/settings",
        children: [],
    },
    {
        slug: "bank-transactions",
        icon: "fi fi-rr-money-bill-transfer",
        label: "Bank Transactions",
        href: "/bank-transactions",
        children: [],
    },
    {
        slug: "tax",
        icon: "fi fi-rr-calculator-math-tax",
        label: "Tax",
        href: "/tax",
        children: [],
    },
    {
        slug: "settings",
        icon: "fi fi-rr-settings-sliders",
        label: "Settings",
        href: "/settings",
        children: [],
    }
];
