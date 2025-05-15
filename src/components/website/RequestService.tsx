'use client'

import { useState } from 'react'
import {
    FileCheck,
    Users,
    Banknote,
    ShieldCheck,
    Book,
    X,
} from 'lucide-react'

const services = [
    { name: 'VAT Return', icon: FileCheck },
    { name: 'Payroll', icon: Users },
    { name: 'MBR Filing', icon: ShieldCheck },
    { name: 'Tax Return', icon: Banknote },
    { name: 'Audit', icon: Book },
]

export default function RequestService() {
    const [selected, setSelected] = useState<string | null>(null)

    return (
        <section id="request-service" className="bg-white py-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-14">
                    <h2 className="text-3xl lg:text-3xl font-bold text-gray-900">Request a Service</h2>
                    <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
                        Get expert help with tax returns, audits, payroll, and more - all managed from your portal.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map(({ name, icon: Icon }) => (
                        <div
                            key={name}
                            onClick={() => setSelected(name)}
                            className="group bg-gray hover:bg-white transition border border-gray-200 hover:shadow-xl rounded-0 p-6 relative overflow-hidden hover:border-[#00799c]"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-[#00799c] text-white p-2.5 rounded-full">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-black group-hover:text-[#00799c]">
                                        {name}
                                    </h3>
                                    <p className="text-xs text-gray-400">Tap to request service</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Slide-over panel */}
            {selected && (
                <div className="fixed inset-0 z-50 flex justify-end">
                    <div
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
                        onClick={() => setSelected(null)}
                    />
                    <div className="relative w-full max-w-md h-full bg-white shadow-xl px-6 py-8 animate-slideIn overflow-y-auto">
                        <button
                            onClick={() => setSelected(null)}
                            className="absolute top-5 right-6 text-gray-400 hover:text-gray-600"
                            aria-label="Close"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <h3 className="text-2xl font-semibold mb-2">Request {selected}</h3>
                        <p className="text-sm text-gray-500 mb-6">
                            Once submitted, our team will contact you within 24 hours and connect you with an expert.
                        </p>

                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full border rounded-lg px-4 py-2 text-sm focus:ring-blue-500 focus:outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full border rounded-lg px-4 py-2 text-sm focus:ring-blue-500 focus:outline-none"
                            />
                            <textarea
                                placeholder="Details or questions (optional)"
                                className="w-full border rounded-lg px-4 py-2 text-sm h-24 resize-none focus:ring-blue-500 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white rounded-lg py-2 text-sm font-medium hover:bg-blue-700 transition"
                            >
                                Submit Request
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    )
}
