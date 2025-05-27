"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // <-- import this

const navItems = [
    { label: "Why Vacei?", icon: "fi fi-rr-comment-question", href: "/website/why-vacei" },
    { label: "Services", icon: "fi fi-rr-apps", href: "/website/services" },
    { label: "Marketplace", icon: "fi fi-rr-shopping-cart", href: "/website/marketplace" },
    { label: "Pricing", icon: "fi fi-rr-tags", href: "/website/pricing" },
    { label: "Resources", icon: "fi fi-rr-layers", href: "#" }
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname(); // <-- get current path

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
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`flex items-center gap-2 text-[15px] font-medium transition-colors ${isActive ? "text-primary" : "text-gray-700"
                                    }`}
                            >
                                <i className={`${item.icon} text-sm`}></i>
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right Actions */}
                <div className="hidden lg:flex items-center gap-4 text-base">
                    <Link
                        href="/signin"
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
                    className="lg:hidden text-gray-700 transition"
                >
                    <i className={`fi ${open ? "fi-rr-cross" : "fi-rr-menu-burger"} text-lg`}></i>
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="lg:hidden bg-white/90 backdrop-blur-md shadow-lg px-4 py-4 rounded-b-xl space-y-4 animate-slide-down">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`flex items-center gap-2 font-medium transition-colors ${isActive ? "text-primary" : "text-gray-700"
                                    }`}
                                onClick={() => setOpen(false)}
                            >
                                <i className={`${item.icon} text-base`}></i>
                                {item.label}
                            </Link>
                        );
                    })}
                    <hr className="border-gray-200" />
                    <div className="flex gap-4">
                        <Link
                            href="/signin"
                            className="inline-block bg-gray-800 text-white text-[15px] px-3 py-1.5"
                            onClick={() => setOpen(false)}
                        >
                            Sign In
                        </Link>
                        <Link
                            href="#"
                            className="inline-block bg-primary text-white text-[15px] px-3 py-1.5"
                            onClick={() => setOpen(false)}
                        >
                            Get Started Free
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
