import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
    output: 'standalone', // Change from 'export' to 'standalone'
    eslint: {
      ignoreDuringBuilds: true, // Ignore ESLint errors during the build process
  },
  async rewrites() {
    return [
        {
            source: '/todo-list',
            destination: '/dashboard/todo-list'
        },
        {
            source: '/financial-statements',
            destination: '/dashboard/financial-statements'
        },
        {
            source: '/insights',
            destination: '/dashboard/insights'
        },
        {
            source: '/transaction-requests',
            destination: '/dashboard/transaction-requests'
        },
        {
            source: '/change-in-bank-balances',
            destination: '/dashboard/change-in-bank-balances'
        },
        {
            source: '/cash',
            destination: '/dashboard/cash'
        },
        {
            source: '/cash/accounts',
            destination: '/dashboard/cash/accounts'
        },
        {
            source: '/cash/change-in-cash',
            destination: '/dashboard/cash/change-in-cash'
        },
        {
            source: '/bank-transactions',
            destination: '/dashboard/bank-transactions'
        },
        {
            source: '/tax',
            destination: '/dashboard/tax'
        },
        {
            source: '/document-organizer',
            destination: '/dashboard/document-organizer'
        },
        {
            source: '/settings',
            destination: '/dashboard/settings'
        },
    ]
},
};

export default nextConfig;
