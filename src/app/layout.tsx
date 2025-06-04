import type { Metadata } from "next";
import { Inter_Tight } from 'next/font/google'
import "@flaticon/flaticon-uicons/css/all/all.css";
import "@flaticon/flaticon-uicons/css/brands/all.css";

import "./globals.css";

const inter_tight = Inter_Tight({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Book Keeping",
  description: "Book Keeping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter_tight.className}>
        {children}
      </body>
    </html>
  );
}
