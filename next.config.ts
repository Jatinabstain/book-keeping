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
            source: '/task',
            destination: '/dashboard/task'
        },
        {
            source: '/books',
            destination: '/dashboard/books'
        },
        {
            source: '/cash',
            destination: '/dashboard/cash'
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
            source: '/settings',
            destination: '/dashboard/settings'
        },
    ]
},
};

export default nextConfig;
