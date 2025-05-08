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
        children: [],
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
        href: "/financial-statements",
        children: [
            {
                slug: "financial-statements",
                icon: "fi fi-rr-angle-double-small-right",
                label: "Financial Statements",
                href: '/financial-statements',
            },
            {
                slug: "profile",
                icon: "fi fi-rr-angle-double-small-right",
                label: "Insights",
                href: "/profile",
            },
            {
                slug: "#",
                icon: "fi fi-rr-angle-double-small-right",
                label: "AP/AR Aging",
                href: "#",
            },
            {
                slug: "#",
                icon: "fi fi-rr-angle-double-small-right",
                label: "Revenue Waterfall",
                href: "#"
            }
        ],
    },
    {
        slug: "cash",
        icon: "fi fi-rr-chart-histogram",
        label: "Cash",
        href: "/cash",
        children: [
            {
                slug: "#",
                icon: "fi fi-rr-angle-double-small-right",
                label: "Accounts",
                href: "#",
            },
            {
                slug: "#",
                icon: "fi fi-rr-angle-double-small-right",
                label: "Change in Cash",
                href: "#",
            },
            {
                slug: "#",
                icon: "fi fi-rr-angle-double-small-right",
                label: "Cash Spend",
                href: "#"
            }
        ],
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
