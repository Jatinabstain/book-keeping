"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function UserMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropUp, setDropUp] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLUListElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

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
                    className={`absolute right-4 bg-gray-800 text-white rounded-md shadow-lg z-50 w-48 text-sm overflow-hidden transition-all ${
                        dropUp ? "bottom-full mb-2" : "top-full mt-2"
                    }`}
                >
                    <li>
                        <Link
                            href="/dashboard/profile"
                            className="dropdown-item block px-4 py-2 hover:bg-gray-700"
                        >
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/"
                            className="dropdown-item block px-4 py-2 hover:bg-gray-700"
                        >
                            Logout
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    );
}
