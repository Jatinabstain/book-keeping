"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function UserMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropUp, setDropUp] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLUListElement>(null);

    const toggleDropdown = () => setIsOpen((prev) => !prev);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node) &&
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("pointerdown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("pointerdown", handleClickOutside);
        };
    }, [isOpen]);

    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, []);

    // Determine dropdown direction
    useEffect(() => {
        if (isOpen && buttonRef.current && menuRef.current) {
            const buttonRect = buttonRef.current.getBoundingClientRect();
            const menuHeight = menuRef.current.offsetHeight;
            const spaceBelow = window.innerHeight - buttonRect.bottom;

            setDropUp(spaceBelow < menuHeight + 10);
        }
    }, [isOpen]);

    return (
        <div className="relative inline-block text-left px-4 pb-4">
            <hr className="divider" />
            <button
                ref={buttonRef}
                onClick={toggleDropdown}
                className="dropdown-toggle user_setting_menu flex items-center gap-2 py-2 w-full"
            >
                <i className="fi fi-rr-user"></i> John Doe
            </button>

            {isOpen && (
                <ul
                    ref={menuRef}
                    className={`absolute right-4 bg-gray-800 text-white rounded-md shadow-lg z-50 w-48 text-sm overflow-hidden transition-all ${dropUp ? "bottom-full mb-2" : "top-full mt-2"
                        }`}
                >
                    <li>
                        <Link
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-700"
                        >
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/"
                            className="block px-4 py-2 hover:bg-gray-700"
                        >
                            Logout
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    );
}
