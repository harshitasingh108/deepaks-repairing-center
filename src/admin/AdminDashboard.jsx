import { useEffect, useState } from "react";
import {
    Wrench,
    Clock3,
    CheckCircle2,
    Phone,
    Mail,
    User,
    RefreshCw,
    LogOut,
    AlertCircle,
} from "lucide-react";

const AdminDashboard = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [updatingId, setUpdatingId] = useState(null);

    const admin = JSON.parse(
        localStorage.getItem("admin") || "null"
    );

    const fetchRequests = async () => {
        try {
            setLoading(true);
            setError("");

            const token = localStorage.getItem("adminToken");

            if (!token) {
                window.location.href = "/admin/login";
                return;
            }

            const response = await fetch(
                "http://localhost:5000/api/repair-requests",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (response.status === 401) {
                localStorage.removeItem("adminToken");
                localStorage.removeItem("admin");
                window.location.href = "/admin/login";
                return;
            }

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to fetch requests"
                );
            }

            setRequests(data.data || []);
        } catch (error) {
            setError(
                error.message ||
                "Unable to load repair requests"
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRequests();
    }, []);

    const updateStatus = async (requestId, newStatus) => {
        try {
            setUpdatingId(requestId);
            setError("");

            const token = localStorage.getItem("adminToken");

            const response = await fetch(
                `http://localhost:5000/api/repair-requests/${requestId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        status: newStatus,
                    }),
                }
            );

            const data = await response.json();

            if (response.status === 401) {
                localStorage.removeItem("adminToken");
                localStorage.removeItem("admin");

                window.location.href = "/admin/login";
                return;
            }

            if (!response.ok) {
                throw new Error(
                    data.message ||
                    "Failed to update request"
                );
            }

            setRequests((currentRequests) =>
                currentRequests.map((request) =>
                    request._id === requestId
                        ? data.data
                        : request
                )
            );
        } catch (error) {
            setError(
                error.message ||
                "Unable to update request"
            );
        } finally {
            setUpdatingId(null);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("admin");

        window.location.href = "/admin/login";
    };

    const getStatusClass = (status) => {
        switch (status) {
            case "completed":
                return "bg-green-500/15 text-green-400 border-green-400/20";

            case "in-progress":
                return "bg-blue-500/15 text-blue-400 border-blue-400/20";

            case "contacted":
                return "bg-yellow-500/15 text-yellow-400 border-yellow-400/20";

            case "cancelled":
                return "bg-red-500/15 text-red-400 border-red-400/20";

            default:
                return "bg-orange-500/15 text-orange-400 border-orange-400/20";
        }
    };

    return (
        <main className="min-h-screen bg-slate-950 px-5 py-8 text-white sm:px-8 lg:px-10">

            <div className="mx-auto max-w-7xl">

                {/* ================= HEADER ================= */}

                <header className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    <div>

                        <div className="flex items-center gap-3">

                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500">
                                <Wrench size={24} />
                            </div>

                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.15em] text-orange-400">
                                    Admin Panel
                                </p>

                                <h1 className="text-2xl font-black sm:text-3xl">
                                    Repair Requests
                                </h1>
                            </div>

                        </div>

                        {admin && (
                            <p className="mt-3 text-sm text-slate-400">
                                Welcome{" "}
                                <span className="font-semibold text-white">
                                    {admin.name}
                                </span>
                            </p>
                        )}

                    </div>

                    <div className="flex gap-3">

                        <button
                            onClick={fetchRequests}
                            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
                        >
                            <RefreshCw size={17} />
                            Refresh
                        </button>

                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-400 transition hover:bg-red-500/20"
                        >
                            <LogOut size={17} />
                            Logout
                        </button>

                    </div>

                </header>

                {/* ================= STATS ================= */}

                <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

                    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                        <div className="flex items-center gap-3">

                            <Clock3 className="text-orange-400" />

                            <div>
                                <p className="text-xs text-slate-400">
                                    Total Requests
                                </p>

                                <p className="mt-1 text-2xl font-black">
                                    {requests.length}
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                        <div className="flex items-center gap-3">

                            <AlertCircle className="text-yellow-400" />

                            <div>
                                <p className="text-xs text-slate-400">
                                    Pending
                                </p>

                                <p className="mt-1 text-2xl font-black">
                                    {
                                        requests.filter(
                                            (request) =>
                                                request.status ===
                                                "pending"
                                        ).length
                                    }
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                        <div className="flex items-center gap-3">

                            <CheckCircle2 className="text-green-400" />

                            <div>
                                <p className="text-xs text-slate-400">
                                    Completed
                                </p>

                                <p className="mt-1 text-2xl font-black">
                                    {
                                        requests.filter(
                                            (request) =>
                                                request.status ===
                                                "completed"
                                        ).length
                                    }
                                </p>
                            </div>

                        </div>
                    </div>

                </div>

                {/* ================= ERROR ================= */}

                {error && (
                    <div className="mb-6 flex items-center gap-3 rounded-2xl border border-red-400/20 bg-red-500/10 px-5 py-4 text-red-300">

                        <AlertCircle size={20} />

                        <p>{error}</p>

                    </div>
                )}

                {/* ================= LOADING ================= */}

                {loading && (
                    <div className="flex min-h-[300px] items-center justify-center">

                        <div className="text-center">

                            <RefreshCw
                                size={36}
                                className="mx-auto animate-spin text-orange-400"
                            />

                            <p className="mt-4 text-sm text-slate-400">
                                Loading repair requests...
                            </p>

                        </div>

                    </div>
                )}

                {/* ================= EMPTY ================= */}

                {!loading &&
                    !error &&
                    requests.length === 0 && (
                        <div className="rounded-[28px] border border-white/10 bg-white/[0.06] px-6 py-20 text-center">

                            <Wrench
                                size={45}
                                className="mx-auto text-slate-500"
                            />

                            <h2 className="mt-5 text-xl font-bold">
                                No repair requests yet
                            </h2>

                            <p className="mt-2 text-sm text-slate-400">
                                Customer requests will appear here.
                            </p>

                        </div>
                    )}

                {/* ================= REQUESTS ================= */}

                {!loading &&
                    !error &&
                    requests.length > 0 && (
                        <div className="space-y-5">

                            {requests.map((request) => (

                                <div
                                    key={request._id}
                                    className="rounded-[28px] border border-white/10 bg-white/[0.06] p-6 shadow-xl backdrop-blur-xl"
                                >

                                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

                                        {/* Customer */}

                                        <div>

                                            <div className="flex items-center gap-3">

                                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400">
                                                    <User size={21} />
                                                </div>

                                                <div>

                                                    <h3 className="font-bold text-white">
                                                        {request.name}
                                                    </h3>

                                                    <p className="text-xs text-slate-500">
                                                        Request ID:{" "}
                                                        {request._id}
                                                    </p>

                                                </div>

                                            </div>

                                            <div className="mt-5 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">

                                                <div className="flex items-center gap-2">
                                                    <Phone
                                                        size={16}
                                                        className="text-orange-400"
                                                    />
                                                    {request.phone}
                                                </div>

                                                {request.email && (
                                                    <div className="flex items-center gap-2">
                                                        <Mail
                                                            size={16}
                                                            className="text-orange-400"
                                                        />
                                                        {request.email}
                                                    </div>
                                                )}

                                            </div>

                                        </div>

                                        {/* STATUS */}

                                        <div className="flex flex-col items-start gap-2">

                                            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                                Request Status
                                            </label>

                                            <select
                                                value={
                                                    request.status ||
                                                    "pending"
                                                }
                                                disabled={
                                                    updatingId ===
                                                    request._id
                                                }
                                                onChange={(event) =>
                                                    updateStatus(
                                                        request._id,
                                                        event.target.value
                                                    )
                                                }
                                                className={`rounded-xl border px-4 py-3 text-sm font-bold outline-none transition ${getStatusClass(
                                                    request.status
                                                )} ${updatingId ===
                                                        request._id
                                                        ? "cursor-wait opacity-60"
                                                        : "cursor-pointer"
                                                    }`}
                                            >

                                                <option value="pending">
                                                    Pending
                                                </option>

                                                <option value="contacted">
                                                    Contacted
                                                </option>

                                                <option value="in-progress">
                                                    In Progress
                                                </option>

                                                <option value="completed">
                                                    Completed
                                                </option>

                                                <option value="cancelled">
                                                    Cancelled
                                                </option>

                                            </select>

                                            {updatingId ===
                                                request._id && (
                                                    <p className="text-xs text-orange-400">
                                                        Updating...
                                                    </p>
                                                )}

                                        </div>

                                    </div>

                                    {/* DETAILS */}

                                    <div className="mt-6 grid gap-4 border-t border-white/10 pt-6 md:grid-cols-3">

                                        <div>
                                            <p className="text-xs text-slate-500">
                                                Machine
                                            </p>

                                            <p className="mt-1 font-semibold text-white">
                                                {request.machine ||
                                                    "Not specified"}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-xs text-slate-500">
                                                Brand
                                            </p>

                                            <p className="mt-1 font-semibold text-white">
                                                {request.brand ||
                                                    "Not specified"}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-xs text-slate-500">
                                                Service
                                            </p>

                                            <p className="mt-1 font-semibold text-white">
                                                {request.service}
                                            </p>
                                        </div>

                                    </div>

                                    {/* MESSAGE */}

                                    {request.message && (
                                        <div className="mt-5 rounded-2xl bg-black/20 p-4">

                                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                                Customer Message
                                            </p>

                                            <p className="mt-2 text-sm leading-6 text-slate-300">
                                                {request.message}
                                            </p>

                                        </div>
                                    )}

                                </div>

                            ))}

                        </div>
                    )}

            </div>

        </main>
    );
};

export default AdminDashboard;