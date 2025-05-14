"use client";

import { useState, useRef } from "react";

const categories = ["Sales", "Purchases", "Invoices", "Payroll", "Tax"];
const tags = ["Urgent", "Reviewed", "Pending", "Archived"];

export default function DocumentForm() {
    const [file, setFile] = useState<File | null>(null);
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const [category, setCategory] = useState("");
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [notes, setNotes] = useState("");

    const dropRef = useRef<HTMLDivElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files?.[0];
        if (droppedFile) setFile(droppedFile);
    };

    const handleSubmit = () => {
        // Submit logic here (API call or state management)
        console.log({
            file,
            year,
            month,
            category,
            selectedTags,
            notes,
        });
        alert("Document submitted.");
    };

    return (
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-5">
            {/* Selects: Year / Month / Category */}
            <div className="grid md:grid-cols-3 gap-6">
                <div>
                    <label className="block text-sm mb-1">Year</label>
                    <select
                        value={year}
                        onChange={(e) => setYear(+e.target.value)}
                        className="w-full border p-2 text-sm border-gray-300 rounded-0 focus:outline-none"
                    >
                        {[2024, 2025, 2026].map((y) => (
                            <option key={y}>{y}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm mb-1">Month</label>
                    <select
                        value={month}
                        onChange={(e) => setMonth(+e.target.value)}
                        className="w-full border p-2 text-sm border-gray-300 rounded-0 focus:outline-none"
                    >
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i} value={i + 1}>
                                {new Date(0, i).toLocaleString("default", { month: "long" })}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm mb-1">Category</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full border p-2 text-sm border-gray-300 rounded-0 focus:outline-none"
                    >
                        <option value="">Select</option>
                        {categories.map((c) => (
                            <option key={c}>{c}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* File Upload */}
            <div
                ref={dropRef}
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                className="text-center text-sm text-gray-500 "
            >
                <label className="w-full border-2 border-dashed block border-gray-300 p-15">
                    {file ? (
                        <span className="text-black">Selected File: {file.name}</span>
                    ) : (
                        <>
                            <i className="fi fi-rs-cloud-upload block text-2xl"></i>
                            Drag & drop file here or{" "}
                            <div className="cursor-pointer text-primary font-semibold">
                                Browse
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                            </div>
                        </>
                    )}
                </label>
            </div>

            {/* Tags */}
            <div>
                <label className="block text-sm mb-1">Tags (optional)</label>
                <select
                    multiple
                    value={selectedTags}
                    onChange={(e) =>
                        setSelectedTags(Array.from(e.target.selectedOptions, (opt) => opt.value))
                    }
                    className="w-full border p-2 text-sm border-gray-300 rounded-0 focus:outline-none"
                >
                    {tags.map((tag) => (
                        <option key={tag}>{tag}</option>
                    ))}
                </select>
            </div>

            {/* Notes */}
            <div>
                <label className="block text-sm mb-1">Notes (optional)</label>
                <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full border p-2 text-sm border-gray-300 rounded-0 focus:outline-none"
                />
            </div>

            {/* Submit */}
            <div>
                <button
                    type="submit"
                    className="bg-primary text-white px-3 py-1.5 mb-4"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}
