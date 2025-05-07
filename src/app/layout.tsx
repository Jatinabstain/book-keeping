import type { Metadata } from "next";
import { Open_Sans } from 'next/font/google'
import "@flaticon/flaticon-uicons/css/all/all.css";
import "@flaticon/flaticon-uicons/css/brands/all.css";

import "./globals.css";

const open_Sans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
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
      <body className={open_Sans.className}>
        {children}
      </body>
    </html>
  );
}
