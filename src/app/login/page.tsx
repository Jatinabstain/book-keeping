'use client';
import Image from "next/image";

export default function LoginPage() {
    return (
        <section className="banner_section min-h-screen flex items-center justify-center">
            <div className="mx-auto max-w-[1200px] px-8 w-full">
                <section className="login_section flex justify-center">
                    <div className="login_card bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                        <div className="login_card_header flex flex-col items-center mb-6">
                            <Image
                                src="/next.svg"
                                alt="logo"
                                width={120}
                                height={120}
                                objectFit="contain"
                            />
                        </div>
                        <div className="login_card_body text-center">
                            <p className="mb-6 text-gray-600">Please enter your credentials to continue.</p>
                            <form className="flex flex-col gap-4" method="post">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="form-control"
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="form-control"
                                />
                                <button className="bg-primary text-white py-3"
                                    // goto dashboard
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href = "/dashboard";
                                    }}
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                        <div className="login_card_footer mt-6 text-center text-sm text-gray-700">
                            <p className="mt-2">
                                <a href="/forgot-password" className="text-primary font-semibold">Forgot Password?</a>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}