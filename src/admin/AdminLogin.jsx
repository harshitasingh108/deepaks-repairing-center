import { useState } from "react";
import { Lock, Mail, LogIn, ShieldCheck, AlertCircle } from "lucide-react";
const API_URL =
    import.meta.env.VITE_API_URL ||
    "http://localhost:5000";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();

        setLoading(true);
        setError("");

        try {
            const response = await fetch(
                `${API_URL}/api/auth/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Login failed"
                );
            }

            localStorage.setItem("adminToken", data.token);
            localStorage.setItem(
                "admin",
                JSON.stringify(data.admin)
            );

            window.location.href = "/admin/dashboard";
        } catch (error) {
            setError(
                error.message ||
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-950 px-5 py-12">

            <div className="absolute inset-0 overflow-hidden">

                <div className="absolute left-[-120px] top-[-120px] h-[350px] w-[350px] rounded-full bg-orange-500/20 blur-[120px]" />

                <div className="absolute bottom-[-120px] right-[-120px] h-[350px] w-[350px] rounded-full bg-blue-500/15 blur-[120px]" />

            </div>

            <div className="relative z-10 w-full max-w-md">

                <div className="mb-8 text-center">

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 shadow-lg shadow-orange-500/20">

                        <ShieldCheck
                            size={32}
                            className="text-white"
                        />

                    </div>

                    <h1 className="mt-6 text-3xl font-black text-white">
                        Admin Login
                    </h1>

                    <p className="mt-2 text-sm text-slate-400">
                        Deepak Repairing Center
                    </p>

                </div>

                <div className="rounded-[30px] border border-white/10 bg-white/[0.08] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.4)] backdrop-blur-2xl">

                    <form
                        onSubmit={handleLogin}
                        className="space-y-6"
                    >

                        {/* Email */}

                        <div>

                            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-200">

                                <Mail size={17} />

                                Email Address

                            </label>

                            <input
                                type="email"
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                placeholder="Enter admin email"
                                required
                                className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-white outline-none placeholder:text-slate-500 transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10"
                            />

                        </div>

                        {/* Password */}

                        <div>

                            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-200">

                                <Lock size={17} />

                                Password

                            </label>

                            <input
                                type="password"
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                                placeholder="Enter your password"
                                required
                                className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-white outline-none placeholder:text-slate-500 transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10"
                            />

                        </div>

                        {/* Error */}

                        {error && (
                            <div className="flex items-start gap-3 rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">

                                <AlertCircle
                                    size={19}
                                    className="mt-0.5 shrink-0"
                                />

                                <span>{error}</span>

                            </div>
                        )}

                        {/* Button */}

                        <button
                            type="submit"
                            disabled={loading}
                            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-4 font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                        >

                            <LogIn size={20} />

                            {loading
                                ? "Signing In..."
                                : "Sign In"}

                        </button>

                    </form>

                    <div className="mt-6 border-t border-white/10 pt-5 text-center">

                        <p className="text-xs text-slate-500">
                            Authorized administrators only
                        </p>

                    </div>

                </div>

            </div>

        </main>
    );
};

export default AdminLogin;