'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function PricingSection() {
    return (
        <section className="relative py-[100px] bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6">
                    {/* Essential Bookkeeping */}
                    <div className="relative p-10 rounded-2xl bg-cream transition">
                        <h3 className="text-xl font-semibold text-[#0A1B04] mb-4">Essential Bookkeeping</h3>
                        <p className="text-[#3D3D3D] text-base font-light">Ideal for startups and growing businesses.</p>
                        <p className="text-[#3D3D3D] text-base font-light mb-6">We post, organize, and reconcile your financial documents, giving you clean books each month.</p>

                        <div className="mb-6">
                            <table className="w-full bg-white text-left border border-[#D9D9D9] overflow-hidden rounded-xl border-collapse">
                                <thead>
                                    <tr>
                                        <td className="px-6 py-4 text-base border border-[#D9D9D9]">Monthly Documents</td>
                                        <td className="px-6 py-4 text-base border border-[#D9D9D9]">Monthly Price (EUR)</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-base px-6 py-4 border border-[#D9D9D9]">Up to 250</td>
                                        <td className="text-base px-6 py-4 border border-[#D9D9D9]">€99/month</td>
                                    </tr>
                                    <tr>
                                        <td className="text-base px-6 py-4 border border-[#D9D9D9]">Up to 500</td>
                                        <td className="text-base px-6 py-4 border border-[#D9D9D9]">€129/month</td>
                                    </tr>
                                    <tr>
                                        <td className="text-base px-6 py-4 border border-[#D9D9D9]">Up to 1000</td>
                                        <td className="text-base px-6 py-4 border border-[#D9D9D9]">€199/month</td>
                                    </tr>
                                    <tr>
                                        <td className="text-base px-6 py-4 border border-[#D9D9D9]">1000+</td>
                                        <th className="text-base px-6 py-4 border border-[#D9D9D9] text-primary font-semibold">Contact Us</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="font-medium text-xl mb-4">Includes:</p>
                        <ul className="space-y-2.5 leading-relaxed mb-[31px]">
                            <li className="flex gap-2.5 items-center text-[#3D3D3D] font-light text-base"><img className="w-4 h-4 object-contain" alt="list" src="/list-point.svg"></img> QuickBooks monthly subscription (included)</li>
                            <li className="flex gap-2.5 items-center text-[#3D3D3D] font-light text-base"><img className="w-4 h-4 object-contain" alt="list" src="/list-point.svg"></img> Document Upload (drag & drop, email, scanner)</li>
                            <li className="flex gap-2.5 items-center text-[#3D3D3D] font-light text-base"><img className="w-4 h-4 object-contain" alt="list" src="/list-point.svg"></img> Real-Time Dashboard & Status Tracking</li>
                            <li className="flex gap-2.5 items-center text-[#3D3D3D] font-light text-base"><img className="w-4 h-4 object-contain" alt="list" src="/list-point.svg"></img> Smart Document Organizer (Posted, Pending, Needs Review)</li>
                            <li className="flex gap-2.5 items-center text-[#3D3D3D] font-light text-base"><img className="w-4 h-4 object-contain" alt="list" src="/list-point.svg"></img> Live Chat Support</li>
                            <li className="flex gap-2.5 items-center text-[#3D3D3D] font-light text-base"><img className="w-4 h-4 object-contain" alt="list" src="/list-point.svg"></img> Smart Deadline Reminders</li>
                            <li className="flex gap-2.5 items-center text-[#3D3D3D] font-light text-base"><img className="w-4 h-4 object-contain" alt="list" src="/list-point.svg"></img> Request VAT, Payroll, Audit & More via Portal</li>
                            <li className="flex gap-2.5 items-center text-[#3D3D3D] font-light text-base"><img className="w-4 h-4 object-contain" alt="list" src="/list-point.svg"></img> Lifetime Cloud Archive of All Files</li>
                        </ul>

                        <Link
                            href="javascript:void(0)"
                            className="flex items-center justify-center border border-color w-full text-center py-[18px] text-white rounded-lg text-primary font-base font-medium">
                            Start Bookkeeping
                            <img src="/right-arrow.svg" className='w-4 object-contain ml-2' alt="" />
                        </Link>
                    </div>

                    {/* Core Accounting */}
                    <div className="relative p-10 rounded-2xl bg-cream transition">
                        <h3 className="text-xl font-semibold text-[#0A1B04] mb-4">Essential Bookkeeping</h3>
                        <p className="text-[#3D3D3D] text-base font-light">Ideal for startups and growing businesses.</p>
                        <p className="text-[#3D3D3D] text-base font-light mb-6">We post, organize, and reconcile your financial documents, giving you clean books each month.</p>

                        <div className="mb-6">
                            <table className="w-full bg-white text-left border border-[#D9D9D9] overflow-hidden rounded-xl border-collapse">
                                <thead>
                                    <tr>
                                        <td className="px-6 py-4 text-base border border-[#D9D9D9]">Monthly Documents</td>
                                        <td className="px-6 py-4 text-base border border-[#D9D9D9]">Monthly Price (EUR)</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-base px-6 py-4 border border-[#D9D9D9]">Up to 250</td>
                                        <td className="text-base px-6 py-4 border border-[#D9D9D9]">€249/month</td>
                                    </tr>
                                    <tr>
                                        <td className="text-base px-6 py-4 border border-[#D9D9D9]">Up to 500</td>
                                        <td className="text-base px-6 py-4 border border-[#D9D9D9]">€329/month</td>
                                    </tr>
                                    <tr>
                                        <td className="text-base px-6 py-4 border border-[#D9D9D9]">Up to 1000</td>
                                        <td className="text-base px-6 py-4 border border-[#D9D9D9]">€499/month</td>
                                    </tr>
                                    <tr>
                                        <td className="text-base px-6 py-4 border border-[#D9D9D9]">1000+</td>
                                        <th className="text-base px-6 py-4 border border-[#D9D9D9] text-primary font-semibold">Contact Us</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="font-medium text-xl mb-4">Includes Everything in Bookkeeping, plus:</p>
                        <ul className="space-y-2.5 leading-relaxed mb-[31px]">
                            <li className="flex gap-2.5 items-center text-[#3D3D3D] font-light text-base"><img className="w-4 h-4 object-contain" alt="list" src="/list-point.svg"></img> Full Account Preparation</li>
                            <li className="flex gap-2.5 items-center text-[#3D3D3D] font-light text-base"><img className="w-4 h-4 object-contain" alt="list" src="/list-point.svg"></img> Accruals & Prepayments</li>
                            <li className="flex gap-2.5 items-center text-[#3D3D3D] font-light text-base"><img className="w-4 h-4 object-contain" alt="list" src="/list-point.svg"></img> Depreciation Schedules</li>
                            <li className="flex gap-2.5 items-center text-[#3D3D3D] font-light text-base"><img className="w-4 h-4 object-contain" alt="list" src="/list-point.svg"></img> Adjusting Entries</li>
                            <li className="flex gap-2.5 items-center text-[#3D3D3D] font-light text-base"><img className="w-4 h-4 object-contain" alt="list" src="/list-point.svg"></img> CFO Support Available</li>
                            <li className="flex gap-2.5 items-center text-[#3D3D3D] font-light text-base"><img className="w-4 h-4 object-contain" alt="list" src="/list-point.svg"></img> Advanced Reporting</li>
                        </ul>

                        <Link
                            href="javascript:void(0)"
                            className="flex items-center justify-center border border-color w-full text-center py-[18px] text-white rounded-lg text-primary font-base font-medium">
                            Start Bookkeeping
                            <img src="/right-arrow.svg" className='w-4 object-contain ml-2' alt="" />
                        </Link>
                    </div>

                    {/* Add-On Services (Available on Request) */}
                    <div className="relative p-10 rounded-2xl bg-cream transition">
                        <h3 className="font-medium text-xl mb-4">Add-On Services (Available on Request)</h3>

                        <ul className="text-sm text-gray-700 space-y-2 mb-6 leading-relaxed">
                            <li className="flex gap-2.5 items-center text-[#3D3D3D] font-light text-base"><img className="w-4 h-4 object-contain" alt="list" src="/list-point.svg"></img> MBR Filings (any filings with the Malta Business Registry)</li>
                            <li className="flex gap-2.5 items-center text-[#3D3D3D] font-light text-base"><img className="w-4 h-4 object-contain" alt="list" src="/list-point.svg"></img> Tax Return Submission</li>
                            <li className="flex gap-2.5 items-center text-[#3D3D3D] font-light text-base"><img className="w-4 h-4 object-contain" alt="list" src="/list-point.svg"></img> Incorporation (Local & International)</li>
                            <li className="flex gap-2.5 items-center text-[#3D3D3D] font-light text-base"><img className="w-4 h-4 object-contain" alt="list" src="/list-point.svg"></img> KYC/AML Checks (via verified partners)</li>
                            <li className="flex gap-2.5 items-center text-[#3D3D3D] font-light text-base"><img className="w-4 h-4 object-contain" alt="list" src="/list-point.svg"></img> Residency Scheme Assistance</li>
                            <li className="flex gap-2.5 items-center text-[#3D3D3D] font-light text-base"><img className="w-4 h-4 object-contain" alt="list" src="/list-point.svg"></img> ISO Certification Support</li>
                            <li className="flex gap-2.5 items-center text-[#3D3D3D] font-light text-base"><img className="w-4 h-4 object-contain" alt="list" src="/list-point.svg"></img> GDPR & Cybersecurity Audits</li>
                            <li className="flex gap-2.5 items-center text-[#3D3D3D] font-light text-base"><img className="w-4 h-4 object-contain" alt="list" src="/list-point.svg"></img> Marketing & Business Strategy Support</li>
                        </ul>
                        <p className="mt-7 text-base font-normal text-[#3D3D3D]">All services requested and completed are permanently stored in your dashboard for easy access and record-keeping.</p>
                    </div>

                    {/* Business Marketplace (Included) */}
                    <div className="relative p-10 rounded-2xl bg-cream transition">
                        <h3 className="font-medium text-xl mb-4">Business Marketplace (Included)</h3>
                        <p className="text-base font-normal text-[#3D3D3D] mb-6">Post service requests, get matched with verified providers, and manage everything from your dashboard.</p>

                        <ul className="text-sm text-gray-700 space-y-2 leading-relaxed">
                            <li className="flex gap-2.5 items-center text-[#3D3D3D] font-light text-base"><img className="w-4 h-4 object-contain" alt="list" src="/list-point.svg"></img> Unlimited service requests</li>
                            <li className="flex gap-2.5 items-center text-[#3D3D3D] font-light text-base"><img className="w-4 h-4 object-contain" alt="list" src="/list-point.svg"></img> Chat & Zoom integration</li>
                            <li className="flex gap-2.5 items-center text-[#3D3D3D] font-light text-base"><img className="w-4 h-4 object-contain" alt="list" src="/list-point.svg"></img> Document upload & version history</li>
                            <li className="flex gap-2.5 items-center text-[#3D3D3D] font-light text-base"><img className="w-4 h-4 object-contain" alt="list" src="/list-point.svg"></img> Ratings & secure messaging</li>
                            <li className="flex gap-2.5 items-center text-[#3D3D3D] font-light text-base"><img className="w-4 h-4 object-contain" alt="list" src="/list-point.svg"></img> Encrypted contact protection</li>
                        </ul>
                        <Link
                            href="javascript:void(0)"
                            className="flex items-center mt-7 justify-center border border-color w-full text-center py-[18px] text-white rounded-lg text-primary font-base font-medium">
                            Explore Marketplace
                            <img src="/right-arrow.svg" className='w-4 object-contain ml-2' alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
