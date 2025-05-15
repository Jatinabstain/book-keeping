'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function HowItWorks() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section className="w-full bg-gray-50 py-10" id="how-it-works">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl lg:text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
                <div
                    className="relative group cursor-pointer"
                    onClick={() => setIsOpen(true)}
                >
                    <img
                        src="/how-it-works.jpg"
                        alt="How it works video"
                        className="w-full object-cover lg:h-[70vh] h-[50vh] rounded-xl shadow-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-xl transition-opacity group-hover:bg-black/50">
                        <img
                            src="/play.svg"
                            alt="Play"
                            className="w-20 rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isOpen && (
                <div className="fixed z-50 inset-0">
                    <div className="flex items-center justify-center min-h-screen bg-black/80 p-4">
                        <div className="relative w-full max-w-4xl aspect-video">
                            <button
                                className="absolute -top-4 -right-4 bg-white p-2 rounded-full shadow w-8 h-8 cursor-pointer"
                                onClick={() => setIsOpen(false)}
                            >
                                <i className="fi fi-br-cross"></i>
                            </button>
                            <iframe
                                className="w-full h-full rounded-lg"
                                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                                title="How it works video"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
