import { useState } from "react";
import {
    Search,
    Phone,
    Wrench,
    CheckCircle2,
    Clock3,
    AlertCircle,
} from "lucide-react";

const TrackRepair = () => {
    const [phone, setPhone] = useState("");
    const [request, setRequest] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const trackRepair = async (event) => {
        event.preventDefault();

        if (!phone.trim()) {
            setError("Please enter your phone number.");
            return;
        }

        try {
            setLoading(true);
            setError("");
            setRequest(null);

            const response = await fetch(
                `http://localhost:5000/api/repair-requests/track?phone=${encodeURIComponent(
                    phone.trim()
                )}`
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Repair request not found"
                );
            }

            setRequest(data.data);
        } catch (error) {
            setError(
                error.message ||
                "Unable to track your repair request."
            );
        } finally {
            setLoading(false);
        }
    };

    const getStatusStep = () => {
        switch (request?.status) {
            case "contacted":
                return 2;

            case "in-progress":
                return 3;

            case "completed":
                return 4;

            case "cancelled":
                return 0;

            default:
                return 1;
        }
    };

    const currentStep = getStatusStep();

    return (
        <main className="min-h-screen bg-slate-50 px-5 py-16">

            <div className="mx-auto max-w-4xl">

                {/* Header */}

                <div className="mb-12 text-center">

                    <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-5 py-2 text-sm font-bold text-orange-600">
                        <Wrench size={16} />
                        Track Your Repair
                    </span>

                    <h1 className="mt-6 text-4xl font-black text-slate-900 sm:text-5xl">
                        Check Your Repair Status
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                        Enter the phone number used while submitting
                        your repair request.
                    </p>

                </div>

                {/* Search Form */}

                <div className="rounded-[30px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:p-8">

                    <form
                        onSubmit={trackRepair}
                        className="flex flex-col gap-4 sm:flex-row"
                    >

                        <div className="relative flex-1">

                            <Phone
                                size={20}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                            />

                            <input
                                type="tel"
                                value={phone}
                                onChange={(event) =>
                                    setPhone(event.target.value)
                                }
                                placeholder="Enter your phone number"
                                className="w-full rounded-2xl border border-slate-300 py-4 pl-12 pr-5 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                            />

                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-7 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                        >

                            <Search size={20} />

                            {loading
                                ? "Searching..."
                                : "Track Repair"}

                        </button>

                    </form>

                    {/* Error */}

                    {error && (
                        <div className="mt-5 flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-600">

                            <AlertCircle size={19} />

                            <span>{error}</span>

                        </div>
                    )}

                </div>

                {/* Result */}

                {request && (
                    <div className="mt-8 rounded-[30px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:p-8">

                        <div className="flex flex-col gap-4 border-b border-slate-100 pb-6 sm:flex-row sm:items-center sm:justify-between">

                            <div>

                                <p className="text-sm text-slate-500">
                                    Customer
                                </p>

                                <h2 className="mt-1 text-2xl font-black text-slate-900">
                                    {request.name}
                                </h2>

                            </div>

                            <div className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold capitalize text-orange-600">
                                {request.status?.replace(
                                    "-",
                                    " "
                                )}
                            </div>

                        </div>

                        {/* Status Timeline */}

                        <div className="mt-10">

                            <div className="relative">

                                <div className="absolute left-5 top-5 h-1 w-[calc(100%-40px)] bg-slate-200 sm:left-8 sm:w-[calc(100%-64px)]" />

                                <div className="relative grid grid-cols-4 gap-2">

                                    {/* Step 1 */}

                                    <div className="text-center">

                                        <div
                                            className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full ${currentStep >= 1
                                                    ? "bg-orange-500 text-white"
                                                    : "bg-slate-200 text-slate-400"
                                                }`}
                                        >
                                            <CheckCircle2 size={20} />
                                        </div>

                                        <p className="mt-3 text-xs font-bold text-slate-700 sm:text-sm">
                                            Received
                                        </p>

                                    </div>

                                    {/* Step 2 */}

                                    <div className="text-center">

                                        <div
                                            className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full ${currentStep >= 2
                                                    ? "bg-orange-500 text-white"
                                                    : "bg-slate-200 text-slate-400"
                                                }`}
                                        >
                                            <Phone size={18} />
                                        </div>

                                        <p className="mt-3 text-xs font-bold text-slate-700 sm:text-sm">
                                            Contacted
                                        </p>

                                    </div>

                                    {/* Step 3 */}

                                    <div className="text-center">

                                        <div
                                            className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full ${currentStep >= 3
                                                    ? "bg-orange-500 text-white"
                                                    : "bg-slate-200 text-slate-400"
                                                }`}
                                        >
                                            <Wrench size={18} />
                                        </div>

                                        <p className="mt-3 text-xs font-bold text-slate-700 sm:text-sm">
                                            In Progress
                                        </p>

                                    </div>

                                    {/* Step 4 */}

                                    <div className="text-center">

                                        <div
                                            className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full ${currentStep >= 4
                                                    ? "bg-green-500 text-white"
                                                    : "bg-slate-200 text-slate-400"
                                                }`}
                                        >
                                            <CheckCircle2 size={20} />
                                        </div>

                                        <p className="mt-3 text-xs font-bold text-slate-700 sm:text-sm">
                                            Completed
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Request Details */}

                        <div className="mt-10 grid gap-4 border-t border-slate-100 pt-8 sm:grid-cols-3">

                            <div className="rounded-2xl bg-slate-50 p-4">

                                <p className="text-xs text-slate-500">
                                    Machine
                                </p>

                                <p className="mt-1 font-bold text-slate-900">
                                    {request.machine ||
                                        "Not specified"}
                                </p>

                            </div>

                            <div className="rounded-2xl bg-slate-50 p-4">

                                <p className="text-xs text-slate-500">
                                    Brand
                                </p>

                                <p className="mt-1 font-bold text-slate-900">
                                    {request.brand ||
                                        "Not specified"}
                                </p>

                            </div>

                            <div className="rounded-2xl bg-slate-50 p-4">

                                <p className="text-xs text-slate-500">
                                    Service
                                </p>

                                <p className="mt-1 font-bold text-slate-900">
                                    {request.service ||
                                        "Not specified"}
                                </p>

                            </div>

                        </div>

                        {request.status === "completed" && (
                            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 p-5 text-green-700">

                                <CheckCircle2 size={22} />

                                <div>

                                    <p className="font-bold">
                                        Your repair is completed!
                                    </p>

                                    <p className="mt-1 text-sm">
                                        Your machine is ready.
                                    </p>

                                </div>

                            </div>
                        )}

                        {request.status === "cancelled" && (
                            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-700">

                                <AlertCircle size={22} />

                                <div>

                                    <p className="font-bold">
                                        Request cancelled
                                    </p>

                                    <p className="mt-1 text-sm">
                                        Please contact our team for
                                        more information.
                                    </p>

                                </div>

                            </div>
                        )}

                    </div>
                )}

            </div>

        </main>
    );
};

export default TrackRepair;