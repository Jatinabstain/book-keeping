"use client"

import { Mail, Phone, MapPin } from 'lucide-react'

import Footer from "@/components/website/Footer"
import Header from "@/components/website/Header"

export default function contact() {
    return (
        <>
            <Header />
            <main>
                <div className="min-h-screen bg-white">
                    {/* Header */}
                    <div className="bg-[#f9fafb] py-16 text-center">
                        <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
                        <p className="mt-2 text-gray-600">We’re here to help — reach out anytime.</p>
                    </div>

                    {/* Contact Info + Form */}
                    <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
                                <p className="text-gray-600">Reach out via email, phone, or visit our office.</p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-gray-700">
                                    <Mail className="w-5 h-5 text-primary" />
                                    <span>support@vacei.com</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-700">
                                    <Phone className="w-5 h-5 text-primary" />
                                    <span>+1 (800) 123-4567</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-700">
                                    <MapPin className="w-5 h-5 text-primary" />
                                    <span>123 Business Lane, Suite 100, New York, NY</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gray-0 p-8 border border-gray-200 shadow-sm">
                            <h2 className="text-xl font-semibold text-gray-800 mb-6">Send a Message</h2>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:ring-primary focus:border-primary focus:outline-none"
                                    />
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:ring-primary focus:border-primary focus:outline-none"
                                    />
                                </div>

                                <div className="col-span-1 md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                    <input
                                        type="text"
                                        placeholder="Brief subject..."
                                        className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:ring-primary focus:border-primary focus:outline-none"
                                    />
                                </div>

                                <div className="col-span-1 md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea
                                        rows={5}
                                        placeholder="Write your message here..."
                                        className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:ring-primary focus:border-primary focus:outline-none resize-none"
                                    ></textarea>
                                </div>

                                <div className="col-span-1 md:col-span-2">
                                    <button
                                        type="submit"
                                        className="w-full bg-primary text-white font-medium py-3 px-6 hover:bg-primary/90 transition"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>

                    {/* Optional Map */}
                    <div className="w-full">
                        <iframe
                            className="w-full h-80"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9363761958264!2d-74.006015!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjIuMCJX!5e0!3m2!1sen!2sus!4v1616161616161"
                            loading="lazy"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    )
}
