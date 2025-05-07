import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import Image from "next/image";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <header className="lg:hidden sticky top-0 bg-white flex justify-between items-center px-4 py-2 shadow z-50  w-full">
                <Link href="/dashboard">
                    <Image
                        src="next.svg"
                        alt="Logo"
                        width={120}
                        height={100}
                    />
                </Link>
                <button
                    className="text-black text-2xl"
                    aria-label="Open sidebar"
                >
                    <i className="fi fi-rr-menu-burger"></i>
                </button>
            </header>
            <div className="flex">
                <Sidebar />
                <main className="flex-1">
                    {children}
                </main>
            </div>
        </>
    );
}
