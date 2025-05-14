"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import Image from "next/image";
import SidebarMenu from "@/components/SidebarMenu";
import { menuData } from "@/lib/menuData";
import UserMenu from "@/components/UserMenu";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            {/* Header for mobile */}
            <header className="lg:hidden sticky top-0 bg-white flex justify-between items-center px-4 py-2 shadow z-10 w-full">
                <Link href="/dashboard">
                    <Image
                        src="/logo-main.png"
                        alt="Logo"
                        width={120}
                        height={100}
                    />
                </Link>
                <button
                    className="text-black text-2xl"
                    aria-label="Open sidebar"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <i className="fi fi-rr-menu-burger"></i>
                </button>
            </header>

            {/* Offcanvas Sidebar for mobile */}
            <div
                className={`fixed inset-y-0 right-0 z-50 w-4/6 bg-black shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center p-4 bg-white">
                    <Link href="/dashboard">
                        <Image
                            src="/logo-main.png"
                            alt="Logo"
                            width={120}
                            height={100}
                        />
                    </Link>
                    <button
                        className="text-black text-xl"
                        aria-label="Close sidebar"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <i className="fi fi-rr-cross"></i>
                    </button>
                </div>

                <div className="flex flex-col shrink-0 min-h-[95vh]">
                    <div className="scrollarea grow pt-3 px-4">
                        <SidebarMenu menu={menuData} />
                        <hr className="divider mt-2" />
                    </div>
                    <UserMenu />
                </div>
                
            </div>

            {/* Desktop layout */}
            <div className="flex">
                <Sidebar />
                <main className="flex-1 flex flex-col">
                    <div className="flex-1 pb-8 min-h-screen">
                        {children}
                    </div>

                    <footer className="mt-auto bg-primary text-white text-center py-2 text-[14px]">
                        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                    </footer>
                </main>
            </div>

            {/* Backdrop for mobile */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-overlay z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)}></div>
            )}

            
        </>
    );
}
