"use client";

import Link from "next/link";
import Image from "next/image";
import SidebarMenu from "@/components/SidebarMenu";
import { menuData } from "@/lib/menuData";
import UserMenu from "@/components/UserMenu";

export default function Sidebar() {

    return (
        <>
            <section className="sidebar sticky top-0 flex-col shrink-0 hidden lg:flex w-64 bg-white">
                <div className="navigation logo p-4">
                    <Link href="/dashboard">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={120}
                            height={100}
                        />
                    </Link>
                </div>
                
                <div className="scrollarea grow pt-3">
                    <SidebarMenu menu={menuData} />
                    <hr className="divider mt-2" />
                </div>

                <UserMenu />
            </section>
        </>
    );
}
