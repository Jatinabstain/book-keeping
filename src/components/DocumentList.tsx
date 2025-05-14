"use client";

import { useState } from "react";

const documents = [
  {
    id: 1,
    name: "Invoice_Jan2025.pdf",
    category: "Invoices",
    tags: ["Reviewed"],
    status: "Approved",
    uploaded: "2025-01-10",
  },
  {
    id: 2,
    name: "Payroll_March2025.xlsx",
    category: "Payroll",
    tags: ["Pending"],
    status: "Awaiting Review",
    uploaded: "2025-03-04",
  },
  {
    id: 3,
    name: "TaxReport2024.pdf",
    category: "Tax",
    tags: ["Urgent"],
    status: "Rejected",
    uploaded: "2024-12-20",
  },
];

const tagColors: Record<string, string> = {
  Reviewed: "bg-green-500",
  Pending: "bg-yellow-400",
  Urgent: "bg-red-600",
};

const statusStyles: Record<string, string> = {
  Approved: "bg-green-100 text-green-800 border border-green-300 rounded",
  "Awaiting Review": "bg-yellow-100 text-yellow-800 border border-yellow-300 rounded",
  Rejected: "bg-red-100 text-red-800 border border-red-300 rounded",
};

export default function DocumentList() {
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterYear, setFilterYear] = useState("");
  const [filterMonth, setFilterMonth] = useState("");

  const filtered = documents.filter((doc) => {
    const matchSearch =
      search === "" ||
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));

    const matchCategory = filterCategory === "" || doc.category === filterCategory;
    const matchYear = filterYear === "" || doc.uploaded.startsWith(filterYear);
    const matchMonth =
      filterMonth === "" || new Date(doc.uploaded).getMonth() + 1 === Number(filterMonth);

    return matchSearch && matchCategory && matchYear && matchMonth;
  });

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="grid md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Search by name or tag..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border p-2 text-sm focus:outline-none border-gray-300 rounded-0"
        />
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="w-full border p-2 text-sm focus:outline-none border-gray-300 rounded-0"
        >
          <option value="">All Categories</option>
          <option>Invoices</option>
          <option>Payroll</option>
          <option>Tax</option>
          <option>Sales</option>
          <option>Purchases</option>
        </select>
        <select
          value={filterYear}
          onChange={(e) => setFilterYear(e.target.value)}
          className="w-full border p-2 text-sm focus:outline-none border-gray-300 rounded-0"
        >
          <option value="">All Years</option>
          <option>2024</option>
          <option>2025</option>
        </select>
        <select
          value={filterMonth}
          onChange={(e) => setFilterMonth(e.target.value)}
          className="w-full border p-2 text-sm focus:outline-none border-gray-300 rounded-0"
        >
          <option value="">All Months</option>
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {new Date(0, i).toLocaleString("default", { month: "long" })}
            </option>
          ))}
        </select>
      </div>

      {/* Document Table */}
      <div className="w-full overflow-x-auto">
        <div className="lg:max-w-[1400px]">
          <table className="w-full text-sm">
            <thead className="border-b border-gray-300 bg-gray-50">
              <tr>
                <th className="p-2.5 border-r border-gray-200 font-medium text-start px-8">File Name</th>
                <th className="p-2.5 border-r border-gray-200 font-medium text-start px-8">Category</th>
                <th className="p-2.5 border-r border-gray-200 font-medium text-start px-8">Tags</th>
                <th className="p-2.5 border-r border-gray-200 font-medium text-start px-8">Status</th>
                <th className="p-2.5 font-medium text-start px-8">Uploaded</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length > 0 ? (
                filtered.map((doc) => (
                  <tr key={doc.id} className="border-b border-gray-300">
                    <td className="p-3 px-8 border-gray-300 text-gray-700">{doc.name}</td>
                    <td className="p-3 px-8 border-gray-300 text-gray-700">{doc.category}</td>

                    {/* Tags with dot */}
                    <td className="p-3 px-8 border-gray-300 text-gray-700">
                      <div className="flex flex-wrap gap-2">
                        {doc.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-2 text-xs font-medium text-gray-800"
                          >
                            <span
                              className={`w-2 h-2 rounded-full inline-block ${
                                tagColors[tag] || "bg-gray-400"
                              }`}
                            ></span>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>

                    {/* Status badge */}
                    <td className="p-3 px-8 border-gray-300 text-gray-700">
                      <span
                        className={`inline-block text-[10px] font-medium px-2 py-0.5 ${
                          statusStyles[doc.status] || "bg-gray-200 text-gray-800 border border-gray-300"
                        }`}
                      >
                        {doc.status}
                      </span>
                    </td>

                    <td className="p-3 px-8 border-gray-300 text-gray-700">{doc.uploaded}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="p-4 text-center text-gray-400">
                    No documents found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
