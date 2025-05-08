'use client';
import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
    const backendUrl = 'http://24.144.109.202:5000/login';
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
    const [loading, setLoading] = useState(false);

    const validate = () => {
        const newErrors: typeof errors = {};

        if (!email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Enter a valid email.";
        }

        if (!password) {
            newErrors.password = "Password is required.";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) return;

        setLoading(true);  // Set loading to true when starting login attempt

        try {
            const response = await fetch(backendUrl + 'login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const data = await response.json();
                // Handle server error
                throw new Error(data.message || 'Failed to login');
            }

            const { token } = await response.json();

            // Store the token (e.g., in localStorage)
            localStorage.setItem('token', token);

            // Redirect to dashboard or another page
            window.location.href = "/dashboard";
        } catch (err) {
            const errorMessage = (err as Error)?.message || 'An unknown error occurred';
            setErrors({ email: errorMessage, password: '' });  // Show error message
        } finally {
            setLoading(false);  // Reset loading state
        }
    };

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
                            <p className="mb-6 text-gray-600">Please enter your credentials to continue..</p>

                            <form className="flex flex-col gap-4" onSubmit={handleLogin}>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="form-control w-full border p-2 rounded"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm text-start pt-1">{errors.email}</p>
                                    )}
                                </div>

                                <div>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="form-control w-full border p-2 rounded"
                                    />
                                    {errors.password && (
                                        <p className="text-red-500 text-sm text-start pt-1">{errors.password}</p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="bg-primary text-white py-3 rounded"
                                    disabled={loading}
                                >
                                    {loading ? "Logging in..." : "Login"}
                                </button>
                            </form>
                        </div>

                        <div className="login_card_footer mt-6 text-center text-sm text-gray-700">
                            <p className="mt-2">
                                <a href="/forgot-password" className="text-primary font-semibold hover:underline">Forgot Password?</a>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}
