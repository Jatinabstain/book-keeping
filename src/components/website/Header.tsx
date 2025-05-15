"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
    { label: "Why Vacei?", icon: "fi fi-rr-star", href: "#" },
    { label: "Services", icon: "fi fi-rr-apps", href: "#" },
    { label: "Industries", icon: "fi fi-rr-briefcase", href: "#" },
    { label: "Customers", icon: "fi fi-rr-users-alt", href: "#" },
    { label: "Pricing", icon: "fi fi-rr-coins", href: "#" },
    { label: "Resources", icon: "fi fi-rr-book", href: "#" },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 lg:px-6 flex justify-between items-center h-16 text-base">
                {/* Logo */}
                <Link href="#">
                    <Image
                        src="/logo-main.png"
                        alt="Vacei Logo"
                        width={100}
                        height={50}
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex space-x-8 items-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="flex items-center gap-2 text-gray-700"
                        >
                            {/* <i className={`${item.icon} text-base`}></i> */}
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="hidden lg:flex items-center gap-4  text-base">
                    <Link
                        href="#"
                        className="text-gray-600"
                    >
                        Sign In
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="lg:hidden text-gray-700 hover:text-blue-600 transition"
                >
                    <i className={`fi ${open ? "fi-rr-cross" : "fi-rr-menu-burger"} text-2xl`}></i>
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="lg:hidden bg-white/90 backdrop-blur-md shadow-lg px-4 py-4 rounded-b-xl space-y-4 animate-slide-down">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                            onClick={() => setOpen(false)}
                        >
                            <i className={`${item.icon} text-base`}></i>
                            {item.label}
                        </Link>
                    ))}
                    <hr className="border-gray-200" />
                    <Link
                        href="/signin"
                        className="block text-gray-600 hover:text-blue-600 font-medium transition"
                        onClick={() => setOpen(false)}
                    >
                        Sign In
                    </Link>
                </div>
            )}
        </header>
    );
}
