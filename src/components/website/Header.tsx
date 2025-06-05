"use client";

import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
    { label: "Home", href: "/website/" },
    { label: "Why Vacei?", href: "/website/why-vacei" },
    { label: "Services", href: "/website/services" },
    { label: "Marketplace", href: "/website/marketplace" },
    { label: "Pricing", href: "/website/pricing" },
    { label: "Resources", href: "#" }
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
        <header
      className={`fixed w-full top-0 z-[999] transition-all duration-300 ${
        scrolled ? 'bg-white/60 backdrop-blur-lg' : 'lg:bg-transparent bg-white/80 backdrop-blur-lg'
      }`}
    >
            <div className="max-w-7xl mx-auto px-4 lg:px-6 flex justify-between items-center py-7 text-base">
                {/* Logo */}
                <Link href="/website">
                    <Image
                        src="/logo.svg"
                        alt="Vacei Logo"
                        width={140}
                        height={50}
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex gap-8 items-center">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`flex items-center gap-2 font-normal transition-colors ${isActive ? "text-primary" : "text-dark"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right Actions */}
                <div className="hidden lg:flex items-center gap-4 text-base">
                    <Link
                        href="/signin"
                        className="inline-block bg-transparent border rounded-lg border-color text-primary px-8 py-[11px]"
                    >
                        Sign In
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="lg:hidden text-dark transition"
                >
                    <i className={`fi ${open ? "fi-rr-cross" : "fi-rr-menu-burger"} text-2xl`}></i>
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                
                <div className="lg:hidden shadow-lg px-4 py-4 rounded-b-xl space-y-4 animate-slide-down">
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
                                {item.label}
                            </Link>
                        );
                    })}
                    <hr className="border-gray-200" />
                   <Link
                        href="/signin"
                        className="inline-block bg-transparent border rounded-lg border-color text-primary px-8 py-[11px]"
                    >
                        Sign In
                    </Link>
                </div>
            )}
        </header>
    );
}
