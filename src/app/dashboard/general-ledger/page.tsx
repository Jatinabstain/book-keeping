"use client";

import { useEffect, useMemo, useState } from "react";
// import { saveAs } from "file-saver";

const ledgerData = [
    {
        date: "2025-04-17",
        account: "Notes Payable",
        ref: "Opening Balance",
        desc: "Opening Balance",
        type: "Credit",
        amount: 25000,
        balance: 25000,
    },
    {
        date: "2025-04-07",
        account: "Opening Balance Equity",
        ref: "Opening Balance",
        desc: "Opening Balance",
        type: "Debit",
        amount: 25000,
        balance: 0,
    },
    // Add more items for pagination testing
];

export default function GeneralLedgerPage() {
    const [search, setSearch] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [sortKey, setSortKey] = useState<keyof typeof ledgerData[0]>("date");
    const [sortAsc, setSortAsc] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const itemsPerPage = 10;

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 1000); // fake loading
        return () => clearTimeout(timer);
    }, []);

    const filtered = useMemo(() => {
        return ledgerData
            .filter(
                (txn) =>
                    txn.desc.toLowerCase().includes(search.toLowerCase()) ||
                    txn.ref.toLowerCase().includes(search.toLowerCase())
            )
            .filter((txn) => {
                const date = new Date(txn.date);
                const from = fromDate ? new Date(fromDate) : null;
                const to = toDate ? new Date(toDate) : null;
                return (
                    (!from || date >= from) &&
                    (!to || date <= to)
                );
            })
            .sort((a, b) => {
                if (a[sortKey] < b[sortKey]) return sortAsc ? -1 : 1;
                if (a[sortKey] > b[sortKey]) return sortAsc ? 1 : -1;
                return 0;
            });
    }, [search, fromDate, toDate, sortKey, sortAsc]);

    const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const totalPages = Math.ceil(filtered.length / itemsPerPage);

    const exportCSV = () => {
        const rows = [
            ["Date", "Account", "Reference", "Description", "Type", "Amount", "Balance"],
            ...filtered.map((txn) => [
                txn.date,
                txn.account,
                txn.ref,
                txn.desc,
                txn.type,
                txn.amount,
                txn.balance,
            ]),
        ];
        const csvContent = rows.map((r) => r.join(",")).join("\n");
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        // saveAs(blob, "general_ledger.csv");
    };

    return (
        <div className="p-6 space-y-8">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-800">General Ledger</h2>
                <button onClick={exportCSV} className="bg-primary text-white px-3 py-1.5 cursor-pointer">
                    Export CSV
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-neutral-200 bg-white p-4">
                    <p className="text-xs text-neutral-500 uppercase mb-1">Total Debit</p>
                    <p className="text-lg font-semibold text-red-600">€25,000</p>
                </div>
                <div className="border border-neutral-200 bg-white p-4">
                    <p className="text-xs text-neutral-500 uppercase mb-1">Total Credit</p>
                    <p className="text-lg font-semibold text-green-600">€25,000</p>
                </div>
                <div className="border border-neutral-200 bg-white p-4">
                    <p className="text-xs text-neutral-500 uppercase mb-1">Closing Balance</p>
                    <p className="text-lg font-semibold text-gray-800">€0</p>
                </div>
            </div>

            <div className="bg-white shadow p-6 mt-5">
                <div className="grid md:grid-cols-4 gap-6 mb-5">
                    <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} className="w-full border p-2 text-sm border-gray-300 rounded-0 focus:outline-none" />
                    <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} className="w-full border p-2 text-sm border-gray-300 rounded-0 focus:outline-none" />
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full border p-2 text-sm border-gray-300 rounded-0 focus:outline-none" placeholder="Search by reference or description" />
                    <button className="bg-primary text-white px-3 py-1.5 cursor-pointer">Apply Filters</button>
                </div>

                {loading ? (
                    <div className="space-y-3">
                        {Array(5).fill(0).map((_, i) => (
                            <div key={i} className="h-5 bg-gray-100 animate-pulse rounded" />
                        ))}
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-gray-500 border-collapse table_custom1">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    {["date", "account", "ref", "desc", "type", "amount", "balance"].map((key) => (
                                        <th
                                            key={key}
                                            onClick={() => {
                                                if (sortKey === key) setSortAsc(!sortAsc);
                                                else {
                                                    setSortKey(key as keyof typeof ledgerData[0]);
                                                    setSortAsc(true);
                                                }
                                            }}
                                            className="text-left px-6 py-3 cursor-pointer hover:underline"
                                        >
                                            {key.charAt(0).toUpperCase() + key.slice(1)} {sortKey === key ? (sortAsc ? "↑" : "↓") : ""}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {paginated.map((txn, i) => (
                                    <tr
                                        key={i}
                                        className="hover:bg-gray-50 transition cursor-pointer"
                                        onClick={() => alert(`Open detail view for: ${txn.ref}`)}
                                    >
                                        <td className="px-6 py-3 text-gray-700">{txn.date}</td>
                                        <td className="px-6 py-3 text-gray-700">{txn.account}</td>
                                        <td className="px-6 py-3 text-gray-500">{txn.ref}</td>
                                        <td className="px-6 py-3 text-gray-700">{txn.desc}</td>
                                        <td className="px-6 py-3">
                                            <span className={`inline-block text-xs font-medium px-2 py-1 ${txn.type === "Debit" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
                                                {txn.type}
                                            </span>
                                        </td>
                                        <td className="px-6 py-3 text-right text-gray-800">€{txn.amount.toLocaleString()}</td>
                                        <td className="px-6 py-3 text-right font-medium text-gray-900">€{txn.balance.toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Pagination */}
                {/* Fancy Pagination */}
                <nav aria-label="Page navigation" className="mt-6">
                    <ul className="flex items-center justify-end  -space-x-px h-8 text-sm">
                        <li>
                            <button
                                onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                                disabled={currentPage === 1}
                                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
                            >
                                <span className="sr-only">Previous</span>
                                <svg className="w-2.5 h-2.5 rtl:rotate-180" fill="none" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 1 1 5l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </li>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <li key={i}>
                                <button
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 
            ${currentPage === i + 1
                                            ? "z-10 text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                                            : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            </li>
                        ))}
                        <li>
                            <button
                                onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
                            >
                                <span className="sr-only">Next</span>
                                <svg className="w-2.5 h-2.5 rtl:rotate-180" fill="none" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m1 9 4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </li>
                    </ul>
                </nav>

            </div>
        </div>
    );
}
