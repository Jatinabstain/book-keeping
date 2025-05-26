"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
    { label: "Why Vacei?", icon: "fi fi-rr-star", href: "/website/why-vacei" },
    { label: "Services", icon: "fi fi-rr-apps", href: "/website/services" },
    { label: "Marketplace", icon: "fi fi-rr-briefcase", href: "/website/marketplace" },
    { label: "Pricing", icon: "fi fi-rr-users-alt", href: "/website/pricing" },
    { label: "Resources", icon: "fi fi-rr-coins", href: "#" },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 lg:px-6 flex justify-between items-center h-16 text-base">
                {/* Logo */}
                <Link href="/website">
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
                            className="flex items-center gap-2 text-gray-700 text-[15px]"
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
                        className="inline-block bg-gray-800 text-white text-[15px] px-3 py-1.5"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="#"
                        className="inline-block bg-primary text-white text-[15px] px-3 py-1.5"
                    >
                        Get Started Free
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="lg:hidden text-gray-700  transition"
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
                            className="flex items-center gap-2 text-gray-700  font-medium transition-colors"
                            onClick={() => setOpen(false)}
                        >
                            <i className={`${item.icon} text-base`}></i>
                            {item.label}
                        </Link>
                    ))}
                    <hr className="border-gray-200" />
                    <Link
                        href="/signin"
                        className="block text-gray-600  font-medium transition"
                        onClick={() => setOpen(false)}
                    >
                        Sign In
                    </Link>
                    <Link
                        href="#"
                        className="block text-gray-600  font-medium transition"
                        onClick={() => setOpen(false)}
                    >
                        Get Started Free
                    </Link>
                </div>
            )}
        </header>
    );
}
