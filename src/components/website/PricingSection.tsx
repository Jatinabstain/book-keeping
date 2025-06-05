'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function PricingSection() {
    return (
        <section className="relative pt-5  pb-10 bg-gradient-to-b from-white via-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                    {/* Essential Bookkeeping */}
                    <div className="relative p-4 bg-white border border-gray-200  shadow-xl transition hover:shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Essential Bookkeeping</h3>
                        <p className="text-gray-600 text-sm">Ideal for startups and growing businesses.</p>
                        <p className="text-gray-600 text-sm mb-6">We post, organize, and reconcile your financial documents, giving you clean books each month.</p>

                        <div className="mb-6">
                            <table className="w-full text-sm text-left border border-gray-200 overflow-hidden">
                                <thead className="bg-gray-50 text-gray-700">
                                    <tr>
                                        <th className="p-2 text-xs border border-gray-200">Monthly Documents</th>
                                        <th className="p-2 text-xs border border-gray-200">Monthly Price (EUR)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-xs p-2 border border-gray-200">Up to 250</td>
                                        <td className="text-xs p-2 border border-gray-200">€99/month</td>
                                    </tr>
                                    <tr>
                                        <td className="text-xs p-2 border border-gray-200">Up to 500</td>
                                        <td className="text-xs p-2 border border-gray-200">€129/month</td>
                                    </tr>
                                    <tr>
                                        <td className="text-xs p-2 border border-gray-200">Up to 1000</td>
                                        <td className="text-xs p-2 border border-gray-200">€199/month</td>
                                    </tr>
                                    <tr>
                                        <td className="text-xs p-2 border border-gray-200">1000+</td>
                                        <th className="text-xs p-2 border border-gray-200 text-primary font-semibold">Contact Us</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="font-semibold mb-2">Includes:</p>
                        <ul className="text-sm text-gray-700 space-y-2 mb-6 leading-relaxed">
                            <li>QuickBooks monthly subscription (included)</li>
                            <li>Document Upload (drag & drop, email, scanner)</li>
                            <li>Real-Time Dashboard & Status Tracking</li>
                            <li>Smart Document Organizer (Posted, Pending, Needs Review)</li>
                            <li>Live Chat Support</li>
                            <li>Smart Deadline Reminders</li>
                            <li>Request VAT, Payroll, Audit & More via Portal</li>
                            <li>Lifetime Cloud Archive of All Files</li>
                        </ul>

                        <Link
                            href="javascript:void(0)"
                            className="flex items-center justify-center bg-primary w-full text-center font-medium p-3 text-white"
                        >
                            Start Bookkeeping
                            <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* Core Accounting */}
                    <div className="relative p-4 bg-white border border-gray-200  shadow-xl transition hover:shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Core Accounting</h3>
                        <p className="text-gray-600 text-sm mb-6">Perfect for businesses needing advanced financial reporting and full accounting support.</p>

                        <div className="mb-6">
                            <table className="w-full text-sm text-left border border-gray-200 overflow-hidden">
                                <thead className="bg-gray-50 text-gray-700">
                                    <tr>
                                        <th className="p-2 text-xs border border-gray-200">Monthly Documents</th>
                                        <th className="p-2 text-xs border border-gray-200">Monthly Price (EUR)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-xs p-2 border border-gray-200">Up to 250</td>
                                        <td className="text-xs p-2 border border-gray-200">€249/month</td>
                                    </tr>
                                    <tr>
                                        <td className="text-xs p-2 border border-gray-200">Up to 500</td>
                                        <td className="text-xs p-2 border border-gray-200">€329/month</td>
                                    </tr>
                                    <tr>
                                        <td className="text-xs p-2 border border-gray-200">Up to 1000</td>
                                        <td className="text-xs p-2 border border-gray-200">€499/month</td>
                                    </tr>
                                    <tr>
                                        <td className="text-xs p-2 border border-gray-200">1000+</td>
                                        <th className="text-xs p-2 border border-gray-200 text-primary font-semibold">Contact Us</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="font-semibold mb-2">Includes Everything in Bookkeeping, plus:</p>
                        <ul className="text-sm text-gray-700 space-y-2 mb-6 leading-relaxed">
                            <li>Full Account Preparation</li>
                            <li>Accruals & Prepayments</li>
                            <li>Depreciation Schedules</li>
                            <li>Adjusting Entries</li>
                            <li>CFO Support Available</li>
                            <li>Advanced Reporting</li>
                        </ul>

                        <Link
                            href="javascript:void(0)"
                            className="flex items-center justify-center bg-primary w-full text-center font-medium p-3 text-white"
                        >
                            Start Core Accounting
                            <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* Add-On Services (Available on Request) */}
                    <div className="relative p-4 bg-white border border-gray-200  shadow-xl transition hover:shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Add-On Services <span className="font-normal text-sm text-red-700">(Available on Request)</span></h3>

                        <ul className="text-sm text-gray-700 space-y-2 mb-6 leading-relaxed">
                            <li>MBR Filings (any filings with the Malta Business Registry)</li>
                            <li>Tax Return Submission</li>
                            <li>Incorporation (Local & International)</li>
                            <li>KYC/AML Checks (via verified partners)</li>
                            <li>Residency Scheme Assistance</li>
                            <li>ISO Certification Support</li>
                            <li>GDPR & Cybersecurity Audits</li>
                            <li>Marketing & Business Strategy Support</li>
                        </ul>
                        <p className="italic">All services requested and completed are permanently stored in your dashboard for easy access and record-keeping.</p>
                    </div>

                    {/* Business Marketplace (Included) */}
                    <div className="relative p-4 bg-white border border-gray-200  shadow-xl transition hover:shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Marketplace <span className="font-normal text-sm text-red-700">(Included)</span></h3>
                        <p className="text-gray-600 text-sm mb-4">Post service requests, get matched with verified providers, and manage everything from your dashboard.</p>

                        <ul className="text-sm text-gray-700 space-y-2 mb-6 leading-relaxed">
                            <li>Unlimited service requests</li>
                            <li>Chat & Zoom integration</li>
                            <li>Document upload & version history</li>
                            <li>Ratings & secure messaging</li>
                            <li>Encrypted contact protection</li>
                        </ul>
                        <Link
                            href="javascript:void(0)"
                            className="flex items-center justify-center bg-primary w-full text-center font-medium p-3 text-white"
                        >
                            Explore Marketplace
                            <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
