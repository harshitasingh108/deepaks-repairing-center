


import { useEffect, useMemo, useState } from "react";

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
    Search,
    Filter,
    X,
    TrendingUp,
    CircleDot,
    Sparkles,
} from "lucide-react";

const API_URL = "http://localhost:5000";

// =====================================================
// ADMIN DASHBOARD
// =====================================================

const AdminDashboard = () => {
    const [requests, setRequests] = useState([]);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [updatingId, setUpdatingId] = useState(null);
    const [analyzingId, setAnalyzingId] = useState(null);

    const [aiAnalysis, setAiAnalysis] = useState({});

    const admin = JSON.parse(
        localStorage.getItem("admin") || "null"
    );

    // =====================================================
    // FETCH REPAIR REQUESTS
    // =====================================================

    const fetchRequests = async () => {
        try {
            setLoading(true);
            setError("");

            const token =
                localStorage.getItem("adminToken");

            if (!token) {
                window.location.href =
                    "/admin/login";
                return;
            }

            const response = await fetch(
                `${API_URL}/api/repair-requests`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (response.status === 401) {
                localStorage.removeItem(
                    "adminToken"
                );

                localStorage.removeItem("admin");

                window.location.href =
                    "/admin/login";

                return;
            }

            if (!response.ok) {
                throw new Error(
                    data.message ||
                    "Failed to fetch requests"
                );
            }

            const fetchedRequests = data.data || [];

            setRequests(fetchedRequests);

            // Load previously saved AI analyses from MongoDB
            const savedAnalyses = {};

            fetchedRequests.forEach((request) => {
                if (request.aiAnalysis) {
                    savedAnalyses[request._id] =
                        request.aiAnalysis;
                }
            });

            setAiAnalysis(savedAnalyses);
        } catch (error) {
            console.error(
                "Fetch Requests Error:",
                error
            );

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

    // =====================================================
    // UPDATE STATUS
    // =====================================================

    const updateStatus = async (
        requestId,
        newStatus
    ) => {
        try {
            setUpdatingId(requestId);
            setError("");

            const token =
                localStorage.getItem("adminToken");

            if (!token) {
                window.location.href =
                    "/admin/login";
                return;
            }

            const response = await fetch(
                `${API_URL}/api/repair-requests/${requestId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type":
                            "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        status: newStatus,
                    }),
                }
            );

            const data =
                await response.json();

            if (response.status === 401) {
                localStorage.removeItem(
                    "adminToken"
                );

                localStorage.removeItem("admin");

                window.location.href =
                    "/admin/login";

                return;
            }

            if (!response.ok) {
                throw new Error(
                    data.message ||
                    "Failed to update request"
                );
            }

            setRequests(
                (currentRequests) =>
                    currentRequests.map(
                        (request) =>
                            request._id ===
                                requestId
                                ? data.data
                                : request
                    )
            );
        } catch (error) {
            console.error(
                "Update Status Error:",
                error
            );

            setError(
                error.message ||
                "Unable to update request"
            );
        } finally {
            setUpdatingId(null);
        }
    };

    // =====================================================
    // AI REPAIR ANALYSIS
    // =====================================================

    const analyzeRepair = async (request) => {
        try {
            setAnalyzingId(request._id);
            setError("");

            const token =
                localStorage.getItem("adminToken");

            if (!token) {
                window.location.href =
                    "/admin/login";
                return;
            }

            const response = await fetch(
                `${API_URL}/api/ai/analyze`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        requestId: request._id,
                        name: request.name,
                        machine:
                            request.machine,
                        brand: request.brand,
                        service:
                            request.service,
                        message:
                            request.message,
                    }),
                }
            );

            const data =
                await response.json();

            if (response.status === 401) {
                localStorage.removeItem(
                    "adminToken"
                );

                localStorage.removeItem("admin");

                window.location.href =
                    "/admin/login";

                return;
            }

            if (!response.ok) {
                throw new Error(
                    data.message ||
                    "AI analysis failed"
                );
            }

            setAiAnalysis(
                (currentAnalysis) => ({
                    ...currentAnalysis,
                    [request._id]:
                        data.data,
                })
            );
        } catch (error) {
            console.error(
                "AI Analysis Error:",
                error
            );

            setError(
                error.message ||
                "Unable to analyze repair request"
            );
        } finally {
            setAnalyzingId(null);
        }
    };

    // =====================================================
    // LOGOUT
    // =====================================================

    const handleLogout = () => {
        localStorage.removeItem(
            "adminToken"
        );

        localStorage.removeItem("admin");

        window.location.href =
            "/admin/login";
    };

    // =====================================================
    // ANALYTICS
    // =====================================================

    const analytics = useMemo(() => {
        const total = requests.length;

        const pending = requests.filter(
            (request) =>
                request.status === "pending"
        ).length;

        const contacted = requests.filter(
            (request) =>
                request.status === "contacted"
        ).length;

        const inProgress = requests.filter(
            (request) =>
                request.status ===
                "in-progress"
        ).length;

        const completed = requests.filter(
            (request) =>
                request.status ===
                "completed"
        ).length;

        const cancelled = requests.filter(
            (request) =>
                request.status ===
                "cancelled"
        ).length;

        const completionRate =
            total > 0
                ? Math.round(
                    (completed / total) * 100
                )
                : 0;

        return {
            total,
            pending,
            contacted,
            inProgress,
            completed,
            cancelled,
            completionRate,
        };
    }, [requests]);

    // =====================================================
    // SEARCH + FILTER
    // =====================================================

    const filteredRequests = useMemo(() => {
        const searchText =
            search.trim().toLowerCase();

        return requests.filter(
            (request) => {
                const matchesSearch =
                    !searchText ||
                    request.name
                        ?.toLowerCase()
                        .includes(searchText) ||
                    request.phone
                        ?.toLowerCase()
                        .includes(searchText) ||
                    request.email
                        ?.toLowerCase()
                        .includes(searchText) ||
                    request.machine
                        ?.toLowerCase()
                        .includes(searchText) ||
                    request.brand
                        ?.toLowerCase()
                        .includes(searchText) ||
                    request.service
                        ?.toLowerCase()
                        .includes(searchText);

                const matchesStatus =
                    statusFilter === "all" ||
                    request.status ===
                    statusFilter;

                return (
                    matchesSearch &&
                    matchesStatus
                );
            }
        );
    }, [
        requests,
        search,
        statusFilter,
    ]);

    // =====================================================
    // STATUS HELPERS
    // =====================================================

    const getStatusClass = (status) => {
        switch (status) {
            case "completed":
                return "border-green-400/20 bg-green-500/10 text-green-400";

            case "in-progress":
                return "border-blue-400/20 bg-blue-500/10 text-blue-400";

            case "contacted":
                return "border-yellow-400/20 bg-yellow-500/10 text-yellow-400";

            case "cancelled":
                return "border-red-400/20 bg-red-500/10 text-red-400";

            default:
                return "border-orange-400/20 bg-orange-500/10 text-orange-400";
        }
    };

    const getStatusLabel = (status) => {
        switch (status) {
            case "completed":
                return "Completed";

            case "in-progress":
                return "In Progress";

            case "contacted":
                return "Contacted";

            case "cancelled":
                return "Cancelled";

            default:
                return "Pending";
        }
    };

    const clearFilters = () => {
        setSearch("");
        setStatusFilter("all");
    };

    // =====================================================
    // STAT CARD
    // =====================================================

    const StatCard = ({
        title,
        value,
        icon: Icon,
        iconClass,
        description,
    }) => {
        return (
            <div
                className="
                    group
                    relative
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-white/[0.08]
                    bg-white/[0.045]
                    p-5
                    shadow-[0_15px_40px_rgba(0,0,0,0.12)]
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-white/[0.14]
                    hover:bg-white/[0.065]
                "
            >
                <div
                    className="
                        pointer-events-none
                        absolute
                        -right-10
                        -top-10
                        h-24
                        w-24
                        rounded-full
                        bg-orange-500/10
                        blur-3xl
                        transition
                        duration-500
                        group-hover:bg-orange-500/20
                    "
                />

                <div className="relative">

                    <div className="flex items-start justify-between">

                        <div
                            className={`
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-2xl
                                ${iconClass}
                            `}
                        >
                            <Icon size={20} />
                        </div>

                        <span className="rounded-full border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                            Live
                        </span>

                    </div>

                    <p className="mt-5 text-xs font-medium text-slate-500">
                        {title}
                    </p>

                    <p className="mt-1 text-3xl font-black tracking-tight text-white">
                        {value}
                    </p>

                    <p className="mt-1 text-[11px] text-slate-600">
                        {description}
                    </p>

                </div>
            </div>
        );
    };

    // =====================================================
    // MAIN UI
    // =====================================================

    return (
        <main
            className="
                min-h-screen
                bg-[#070b14]
                px-3
                py-5
                text-white
                sm:px-5
                sm:py-7
                lg:px-8
                lg:py-9
            "
        >

            <div className="mx-auto max-w-7xl">

                {/* =================================================
                    HEADER
                ================================================= */}

                <header className="mb-7">

                    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

                        <div>

                            <div className="flex items-center gap-3">

                                <div
                                    className="
                                        flex
                                        h-12
                                        w-12
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        bg-gradient-to-br
                                        from-orange-400
                                        to-orange-600
                                        shadow-[0_10px_30px_rgba(249,115,22,0.25)]
                                    "
                                >
                                    <Wrench size={22} />
                                </div>

                                <div>

                                    <div className="flex items-center gap-2">

                                        <span
                                            className="
                                                h-1.5
                                                w-1.5
                                                rounded-full
                                                bg-green-400
                                                shadow-[0_0_10px_rgba(74,222,128,0.8)]
                                            "
                                        />

                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400">
                                            Admin Panel
                                        </p>

                                    </div>

                                    <h1 className="mt-1 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
                                        Repair Dashboard
                                    </h1>

                                </div>

                            </div>

                            {admin && (
                                <p className="mt-3 pl-1 text-sm text-slate-500">
                                    Welcome back,{" "}
                                    <span className="font-bold text-slate-300">
                                        {admin.name}
                                    </span>

                                    <span className="mx-2 text-slate-700">
                                        •
                                    </span>

                                    Manage customer repair requests
                                </p>
                            )}

                        </div>

                        {/* ACTIONS */}

                        <div className="flex w-full gap-2 sm:w-auto">

                            <button
                                type="button"
                                onClick={fetchRequests}
                                className="
                                    flex
                                    flex-1
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/[0.04]
                                    px-4
                                    py-3
                                    text-sm
                                    font-bold
                                    text-slate-300
                                    transition-all
                                    hover:border-orange-400/20
                                    hover:bg-white/[0.07]
                                    hover:text-white
                                    sm:flex-none
                                "
                            >
                                <RefreshCw
                                    size={16}
                                    className={
                                        loading
                                            ? "animate-spin"
                                            : ""
                                    }
                                />

                                Refresh
                            </button>

                            <button
                                type="button"
                                onClick={handleLogout}
                                className="
                                    flex
                                    flex-1
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-xl
                                    border
                                    border-red-400/10
                                    bg-red-500/[0.06]
                                    px-4
                                    py-3
                                    text-sm
                                    font-bold
                                    text-red-400
                                    transition-all
                                    hover:bg-red-500/10
                                    sm:flex-none
                                "
                            >
                                <LogOut size={16} />

                                Logout
                            </button>

                        </div>

                    </div>

                </header>

                {/* =================================================
                    ANALYTICS
                ================================================= */}

                <section className="mb-7">

                    <div className="mb-3 flex items-center justify-between">

                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-600">
                            Overview
                        </p>

                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-600">

                            <CircleDot
                                size={12}
                                className="text-green-400"
                            />

                            Live data

                        </div>

                    </div>

                    <div
                        className="
                            grid
                            grid-cols-2
                            gap-3
                            md:grid-cols-3
                            xl:grid-cols-6
                        "
                    >

                        <StatCard
                            title="Total Requests"
                            value={analytics.total}
                            icon={TrendingUp}
                            iconClass="bg-orange-500/10 text-orange-400"
                            description="All customer requests"
                        />

                        <StatCard
                            title="Pending"
                            value={analytics.pending}
                            icon={Clock3}
                            iconClass="bg-yellow-500/10 text-yellow-400"
                            description="Waiting for action"
                        />

                        <StatCard
                            title="Contacted"
                            value={analytics.contacted}
                            icon={Phone}
                            iconClass="bg-purple-500/10 text-purple-400"
                            description="Customer contacted"
                        />

                        <StatCard
                            title="In Progress"
                            value={analytics.inProgress}
                            icon={Wrench}
                            iconClass="bg-blue-500/10 text-blue-400"
                            description="Currently being repaired"
                        />

                        <StatCard
                            title="Completed"
                            value={analytics.completed}
                            icon={CheckCircle2}
                            iconClass="bg-green-500/10 text-green-400"
                            description="Successfully completed"
                        />

                        <StatCard
                            title="Cancelled"
                            value={analytics.cancelled}
                            icon={AlertCircle}
                            iconClass="bg-red-500/10 text-red-400"
                            description="Cancelled requests"
                        />

                    </div>

                    {/* COMPLETION RATE */}

                    <div
                        className="
                            mt-3
                            rounded-[22px]
                            border
                            border-white/[0.08]
                            bg-white/[0.035]
                            p-4
                            sm:p-5
                        "
                    >

                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                            <div>

                                <div className="flex items-center gap-2">

                                    <CheckCircle2
                                        size={16}
                                        className="text-green-400"
                                    />

                                    <p className="text-sm font-bold text-slate-200">
                                        Completion Rate
                                    </p>

                                </div>

                                <p className="mt-1 text-[11px] text-slate-600">
                                    Percentage of requests successfully completed
                                </p>

                            </div>

                            <p className="text-2xl font-black text-white">
                                {analytics.completionRate}%
                            </p>

                        </div>

                        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/[0.06]">

                            <div
                                className="
                                    h-full
                                    rounded-full
                                    bg-gradient-to-r
                                    from-orange-500
                                    to-green-400
                                    transition-all
                                    duration-700
                                "
                                style={{
                                    width: `${analytics.completionRate}%`,
                                }}
                            />

                        </div>

                    </div>

                </section>

                {/* =================================================
                    SEARCH + FILTER
                ================================================= */}

                <section
                    className="
                        mb-7
                        rounded-[24px]
                        border
                        border-white/[0.08]
                        bg-white/[0.035]
                        p-3
                        shadow-[0_15px_40px_rgba(0,0,0,0.10)]
                        backdrop-blur-xl
                        sm:p-4
                    "
                >

                    <div className="flex flex-col gap-3 lg:flex-row">

                        <div className="relative min-w-0 flex-1">

                            <Search
                                size={18}
                                className="
                                    pointer-events-none
                                    absolute
                                    left-4
                                    top-1/2
                                    -translate-y-1/2
                                    text-slate-600
                                "
                            />

                            <input
                                type="text"
                                value={search}
                                onChange={(event) =>
                                    setSearch(
                                        event.target.value
                                    )
                                }
                                placeholder="Search name, phone, email, machine or brand..."
                                className="
                                    w-full
                                    rounded-xl
                                    border
                                    border-white/[0.08]
                                    bg-[#0b111d]
                                    py-3.5
                                    pl-11
                                    pr-10
                                    text-sm
                                    text-white
                                    outline-none
                                    transition-all
                                    placeholder:text-slate-700
                                    focus:border-orange-500/40
                                    focus:bg-[#0c1320]
                                "
                            />

                            {search && (
                                <button
                                    type="button"
                                    onClick={() =>
                                        setSearch("")
                                    }
                                    className="
                                        absolute
                                        right-3
                                        top-1/2
                                        -translate-y-1/2
                                        text-slate-600
                                        transition
                                        hover:text-white
                                    "
                                >
                                    <X size={17} />
                                </button>
                            )}

                        </div>

                        <div className="relative lg:w-52">

                            <Filter
                                size={17}
                                className="
                                    pointer-events-none
                                    absolute
                                    left-4
                                    top-1/2
                                    -translate-y-1/2
                                    text-slate-600
                                "
                            />

                            <select
                                value={statusFilter}
                                onChange={(event) =>
                                    setStatusFilter(
                                        event.target.value
                                    )
                                }
                                className="
                                    w-full
                                    appearance-none
                                    rounded-xl
                                    border
                                    border-white/[0.08]
                                    bg-[#0b111d]
                                    py-3.5
                                    pl-11
                                    pr-4
                                    text-sm
                                    font-bold
                                    text-slate-300
                                    outline-none
                                    transition
                                    focus:border-orange-500/40
                                "
                            >

                                <option value="all">
                                    All Status
                                </option>

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

                        </div>

                        {(search ||
                            statusFilter !==
                            "all") && (
                                <button
                                    type="button"
                                    onClick={clearFilters}
                                    className="
                                    rounded-xl
                                    border
                                    border-white/[0.08]
                                    px-5
                                    py-3
                                    text-sm
                                    font-bold
                                    text-slate-400
                                    transition
                                    hover:bg-white/[0.05]
                                    hover:text-white
                                "
                                >
                                    Clear
                                </button>
                            )}

                    </div>

                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1">

                        <p className="text-[11px] text-slate-600">

                            Showing{" "}
                            <span className="font-bold text-slate-400">
                                {filteredRequests.length}
                            </span>{" "}
                            of{" "}
                            <span className="font-bold text-slate-400">
                                {requests.length}
                            </span>{" "}
                            requests

                        </p>

                        {search && (
                            <p className="text-[11px] text-orange-400">
                                Searching: "{search}"
                            </p>
                        )}

                    </div>

                </section>

                {/* =================================================
                    ERROR
                ================================================= */}

                {error && (
                    <div
                        className="
                            mb-6
                            flex
                            items-start
                            gap-3
                            rounded-2xl
                            border
                            border-red-400/15
                            bg-red-500/[0.07]
                            px-4
                            py-4
                            text-sm
                            text-red-300
                        "
                    >

                        <AlertCircle
                            size={18}
                            className="mt-0.5 shrink-0"
                        />

                        <div className="flex-1">

                            <p className="font-semibold">
                                {error}
                            </p>

                            {error.toLowerCase().includes(
                                "ai"
                            ) && (
                                    <p className="mt-1 text-xs text-red-300/60">
                                        The AI feature may require
                                        an active API key and
                                        available API credits.
                                    </p>
                                )}

                        </div>

                    </div>
                )}

                {/* =================================================
                    LOADING
                ================================================= */}

                {loading && (
                    <div
                        className="
                            flex
                            min-h-[350px]
                            items-center
                            justify-center
                            rounded-[28px]
                            border
                            border-white/[0.07]
                            bg-white/[0.025]
                        "
                    >

                        <div className="text-center">

                            <div
                                className="
                                    mx-auto
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-orange-500/10
                                    text-orange-400
                                "
                            >

                                <RefreshCw
                                    size={24}
                                    className="animate-spin"
                                />

                            </div>

                            <p className="mt-4 text-sm font-semibold text-slate-400">
                                Loading repair requests...
                            </p>

                            <p className="mt-1 text-xs text-slate-700">
                                Fetching latest data
                            </p>

                        </div>

                    </div>
                )}

                {/* =================================================
                    EMPTY
                ================================================= */}

                {!loading &&
                    !error &&
                    filteredRequests.length ===
                    0 && (
                        <div
                            className="
                                rounded-[28px]
                                border
                                border-white/[0.07]
                                bg-white/[0.025]
                                px-5
                                py-20
                                text-center
                            "
                        >

                            <div
                                className="
                                    mx-auto
                                    flex
                                    h-16
                                    w-16
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-orange-500/10
                                    text-orange-400
                                "
                            >
                                <Search size={27} />
                            </div>

                            <h2 className="mt-5 text-xl font-black">
                                No requests found
                            </h2>

                            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
                                {requests.length ===
                                    0
                                    ? "Customer repair requests will appear here."
                                    : "Try changing your search or status filter."}
                            </p>

                            {(search ||
                                statusFilter !==
                                "all") && (
                                    <button
                                        type="button"
                                        onClick={
                                            clearFilters
                                        }
                                        className="
                                        mt-5
                                        rounded-xl
                                        bg-orange-500
                                        px-5
                                        py-3
                                        text-sm
                                        font-bold
                                        text-white
                                        shadow-lg
                                        shadow-orange-500/20
                                        transition
                                        hover:bg-orange-600
                                    "
                                    >
                                        Clear Filters
                                    </button>
                                )}

                        </div>
                    )}

                {/* =================================================
                    REQUEST LIST
                ================================================= */}

                {!loading &&
                    !error &&
                    filteredRequests.length >
                    0 && (
                        <section>

                            <div className="mb-4 flex items-center justify-between">

                                <div>

                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-600">
                                        Customer Requests
                                    </p>

                                    <h2 className="mt-1 text-lg font-black text-slate-200">
                                        Repair Queue
                                    </h2>

                                </div>

                                <span className="rounded-full border border-orange-400/10 bg-orange-500/[0.06] px-3 py-1.5 text-[10px] font-bold text-orange-400">
                                    {
                                        filteredRequests.length
                                    }{" "}
                                    requests
                                </span>

                            </div>

                            <div className="space-y-4">

                                {filteredRequests.map(
                                    (request) => {

                                        const analysis =
                                            aiAnalysis[
                                            request._id
                                            ];

                                        return (
                                            <article
                                                key={
                                                    request._id
                                                }
                                                className="
                                                    group
                                                    overflow-hidden
                                                    rounded-[26px]
                                                    border
                                                    border-white/[0.08]
                                                    bg-white/[0.035]
                                                    shadow-[0_18px_50px_rgba(0,0,0,0.12)]
                                                    backdrop-blur-xl
                                                    transition-all
                                                    duration-300
                                                    hover:border-white/[0.13]
                                                    hover:bg-white/[0.05]
                                                "
                                            >

                                                {/* TOP LINE */}

                                                <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-50 transition group-hover:opacity-100" />

                                                <div className="p-4 sm:p-6">

                                                    {/* CUSTOMER */}

                                                    <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">

                                                        <div className="min-w-0">

                                                            <div className="flex items-center gap-3">

                                                                <div
                                                                    className="
                                                                        flex
                                                                        h-11
                                                                        w-11
                                                                        shrink-0
                                                                        items-center
                                                                        justify-center
                                                                        rounded-2xl
                                                                        bg-orange-500/10
                                                                        text-orange-400
                                                                        ring-1
                                                                        ring-orange-500/10
                                                                    "
                                                                >
                                                                    <User
                                                                        size={
                                                                            20
                                                                        }
                                                                    />
                                                                </div>

                                                                <div className="min-w-0">

                                                                    <h3 className="truncate text-base font-black text-white sm:text-lg">
                                                                        {
                                                                            request.name
                                                                        }
                                                                    </h3>

                                                                    <p className="mt-0.5 truncate text-[10px] text-slate-700">
                                                                        Request ID:{" "}
                                                                        {
                                                                            request._id
                                                                        }
                                                                    </p>

                                                                </div>

                                                            </div>

                                                            {/* CONTACT */}

                                                            <div className="mt-4 flex flex-col gap-2 text-xs text-slate-400 sm:flex-row sm:flex-wrap sm:gap-x-6">

                                                                <div className="flex items-center gap-2">

                                                                    <Phone
                                                                        size={
                                                                            14
                                                                        }
                                                                        className="text-orange-400"
                                                                    />

                                                                    {
                                                                        request.phone
                                                                    }

                                                                </div>

                                                                {request.email && (
                                                                    <div className="flex min-w-0 items-center gap-2">

                                                                        <Mail
                                                                            size={
                                                                                14
                                                                            }
                                                                            className="shrink-0 text-orange-400"
                                                                        />

                                                                        <span className="truncate">
                                                                            {
                                                                                request.email
                                                                            }
                                                                        </span>

                                                                    </div>
                                                                )}

                                                            </div>

                                                        </div>

                                                        {/* STATUS */}

                                                        <div className="w-full xl:w-52">

                                                            <div className="mb-2 flex items-center justify-between">

                                                                <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-600">
                                                                    Status
                                                                </label>

                                                                {updatingId ===
                                                                    request._id && (
                                                                        <span className="text-[10px] font-bold text-orange-400">
                                                                            Updating...
                                                                        </span>
                                                                    )}

                                                            </div>

                                                            <select
                                                                value={
                                                                    request.status ||
                                                                    "pending"
                                                                }
                                                                disabled={
                                                                    updatingId ===
                                                                    request._id
                                                                }
                                                                onChange={(
                                                                    event
                                                                ) =>
                                                                    updateStatus(
                                                                        request._id,
                                                                        event
                                                                            .target
                                                                            .value
                                                                    )
                                                                }
                                                                className={`
                                                                    w-full
                                                                    rounded-xl
                                                                    border
                                                                    px-4
                                                                    py-3
                                                                    text-sm
                                                                    font-bold
                                                                    outline-none
                                                                    transition-all
                                                                    ${getStatusClass(
                                                                    request.status
                                                                )}
                                                                    ${updatingId ===
                                                                        request._id
                                                                        ? "cursor-wait opacity-50"
                                                                        : "cursor-pointer"
                                                                    }
                                                                `}
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

                                                        </div>

                                                    </div>

                                                    {/* MACHINE DETAILS */}

                                                    <div
                                                        className="
                                                            mt-5
                                                            grid
                                                            grid-cols-1
                                                            gap-2
                                                            border-t
                                                            border-white/[0.06]
                                                            pt-5
                                                            sm:grid-cols-3
                                                        "
                                                    >

                                                        <div className="rounded-2xl border border-white/[0.05] bg-black/15 p-4 transition hover:bg-black/25">

                                                            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-700">
                                                                Machine
                                                            </p>

                                                            <div className="mt-2 flex items-center gap-2">

                                                                <Wrench
                                                                    size={
                                                                        14
                                                                    }
                                                                    className="text-orange-400"
                                                                />

                                                                <p className="truncate text-sm font-bold text-slate-200">
                                                                    {
                                                                        request.machine ||
                                                                        "Not specified"
                                                                    }
                                                                </p>

                                                            </div>

                                                        </div>

                                                        <div className="rounded-2xl border border-white/[0.05] bg-black/15 p-4 transition hover:bg-black/25">

                                                            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-700">
                                                                Brand
                                                            </p>

                                                            <p className="mt-2 truncate text-sm font-bold text-slate-200">
                                                                {
                                                                    request.brand ||
                                                                    "Not specified"
                                                                }
                                                            </p>

                                                        </div>

                                                        <div className="rounded-2xl border border-white/[0.05] bg-black/15 p-4 transition hover:bg-black/25">

                                                            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-700">
                                                                Service
                                                            </p>

                                                            <p className="mt-2 truncate text-sm font-bold text-slate-200">
                                                                {
                                                                    request.service ||
                                                                    "Not specified"
                                                                }
                                                            </p>

                                                        </div>

                                                    </div>

                                                    {/* CUSTOMER MESSAGE */}

                                                    {request.message && (
                                                        <div className="mt-2 rounded-2xl border border-white/[0.05] bg-black/15 p-4">

                                                            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-700">
                                                                Customer Message
                                                            </p>

                                                            <p className="mt-2 text-sm leading-6 text-slate-400">
                                                                {
                                                                    request.message
                                                                }
                                                            </p>

                                                        </div>
                                                    )}

                                                    {/* =================================================
                                                        AI ANALYSIS
                                                    ================================================= */}

                                                    <div
                                                        className="
                                                            mt-4
                                                            overflow-hidden
                                                            rounded-2xl
                                                            border
                                                            border-orange-400/10
                                                            bg-gradient-to-br
                                                            from-orange-500/[0.055]
                                                            to-transparent
                                                        "
                                                    >

                                                        <div className="p-4">

                                                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                                                                <div className="flex items-start gap-3">

                                                                    <div
                                                                        className="
                                                                            flex
                                                                            h-10
                                                                            w-10
                                                                            shrink-0
                                                                            items-center
                                                                            justify-center
                                                                            rounded-xl
                                                                            bg-orange-500/10
                                                                            text-orange-400
                                                                        "
                                                                    >
                                                                        <Sparkles
                                                                            size={
                                                                                18
                                                                            }
                                                                        />
                                                                    </div>

                                                                    <div>

                                                                        <p className="text-sm font-black text-slate-200">
                                                                            AI Repair Analysis
                                                                        </p>

                                                                        <p className="mt-1 max-w-xl text-[11px] leading-5 text-slate-600">
                                                                            Get an AI-assisted assessment of the customer's repair problem.
                                                                        </p>

                                                                    </div>

                                                                </div>

                                                                <button
                                                                    type="button"
                                                                    onClick={() =>
                                                                        analyzeRepair(
                                                                            request
                                                                        )
                                                                    }
                                                                    disabled={
                                                                        analyzingId ===
                                                                        request._id
                                                                    }
                                                                    className="
                                                                        flex
                                                                        w-full
                                                                        items-center
                                                                        justify-center
                                                                        gap-2
                                                                        rounded-xl
                                                                        bg-gradient-to-r
                                                                        from-orange-500
                                                                        to-orange-600
                                                                        px-4
                                                                        py-3
                                                                        text-xs
                                                                        font-black
                                                                        text-white
                                                                        shadow-lg
                                                                        shadow-orange-500/10
                                                                        transition-all
                                                                        hover:-translate-y-0.5
                                                                        hover:shadow-orange-500/20
                                                                        disabled:cursor-wait
                                                                        disabled:opacity-50
                                                                        sm:w-auto
                                                                    "
                                                                >

                                                                    <Sparkles
                                                                        size={
                                                                            15
                                                                        }
                                                                        className={
                                                                            analyzingId ===
                                                                                request._id
                                                                                ? "animate-pulse"
                                                                                : ""
                                                                        }
                                                                    />

                                                                    {analyzingId ===
                                                                        request._id
                                                                        ? "Analyzing..."
                                                                        : analysis
                                                                            ? "Analyze Again"
                                                                            : "Analyze with AI"}

                                                                </button>

                                                            </div>

                                                            {/* AI RESULT */}

                                                            {analysis && (
                                                                <div className="mt-4 grid gap-3 sm:grid-cols-2">

                                                                    {/* POSSIBLE ISSUE */}

                                                                    <div className="rounded-xl border border-white/[0.05] bg-black/20 p-4">

                                                                        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-600">
                                                                            Possible Issue
                                                                        </p>

                                                                        <p className="mt-2 text-sm font-bold leading-5 text-slate-200">
                                                                            {
                                                                                analysis.possibleIssue
                                                                            }
                                                                        </p>

                                                                    </div>

                                                                    {/* PRIORITY */}

                                                                    <div className="rounded-xl border border-white/[0.05] bg-black/20 p-4">

                                                                        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-600">
                                                                            Priority
                                                                        </p>

                                                                        <div className="mt-2">

                                                                            <span
                                                                                className={`
                                                                                    inline-flex
                                                                                    rounded-full
                                                                                    border
                                                                                    px-3
                                                                                    py-1
                                                                                    text-[10px]
                                                                                    font-black
                                                                                    ${analysis.priority ===
                                                                                        "High"
                                                                                        ? "border-red-400/20 bg-red-500/10 text-red-400"
                                                                                        : analysis.priority ===
                                                                                            "Medium"
                                                                                            ? "border-yellow-400/20 bg-yellow-500/10 text-yellow-400"
                                                                                            : "border-green-400/20 bg-green-500/10 text-green-400"
                                                                                    }
                                                                                `}
                                                                            >
                                                                                {
                                                                                    analysis.priority
                                                                                }
                                                                            </span>

                                                                        </div>

                                                                    </div>

                                                                    {/* SERVICE */}

                                                                    <div className="rounded-xl border border-white/[0.05] bg-black/20 p-4">

                                                                        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-600">
                                                                            Suggested Service
                                                                        </p>

                                                                        <p className="mt-2 text-sm font-bold leading-5 text-slate-200">
                                                                            {
                                                                                analysis.suggestedService
                                                                            }
                                                                        </p>

                                                                    </div>

                                                                    {/* ACTION */}

                                                                    <div className="rounded-xl border border-white/[0.05] bg-black/20 p-4">

                                                                        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-600">
                                                                            Recommended Action
                                                                        </p>

                                                                        <p className="mt-2 text-sm leading-5 text-slate-400">
                                                                            {
                                                                                analysis.recommendedAction
                                                                            }
                                                                        </p>

                                                                    </div>

                                                                    {/* SAFETY */}

                                                                    <div className="rounded-xl border border-yellow-400/10 bg-yellow-500/[0.035] p-4 sm:col-span-2">

                                                                        <div className="flex items-center gap-2">

                                                                            <AlertCircle
                                                                                size={
                                                                                    15
                                                                                }
                                                                                className="text-yellow-400"
                                                                            />

                                                                            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-yellow-500/80">
                                                                                Safety Note
                                                                            </p>

                                                                        </div>

                                                                        <p className="mt-2 text-sm leading-6 text-slate-400">
                                                                            {
                                                                                analysis.safetyNote
                                                                            }
                                                                        </p>

                                                                    </div>

                                                                    {/* DISCLAIMER */}

                                                                    <div className="sm:col-span-2">

                                                                        <p className="text-[10px] leading-5 text-slate-700">
                                                                            AI analysis is an assistance tool only. Final diagnosis and repair decisions should be made by a qualified technician.
                                                                        </p>

                                                                    </div>

                                                                </div>
                                                            )}

                                                        </div>

                                                    </div>

                                                    {/* FOOTER STATUS */}

                                                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">

                                                        <div className="flex items-center gap-2">

                                                            <span className="text-[10px] font-medium text-slate-700">
                                                                Current status
                                                            </span>

                                                            <span
                                                                className={`
                                                                    rounded-full
                                                                    border
                                                                    px-3
                                                                    py-1
                                                                    text-[10px]
                                                                    font-bold
                                                                    ${getStatusClass(
                                                                    request.status
                                                                )}
                                                                `}
                                                            >
                                                                {getStatusLabel(
                                                                    request.status
                                                                )}
                                                            </span>

                                                        </div>

                                                        <div className="flex items-center gap-1.5 text-[10px] text-slate-700">

                                                            <CircleDot
                                                                size={
                                                                    11
                                                                }
                                                                className="text-green-500"
                                                            />

                                                            Request synced

                                                        </div>

                                                    </div>

                                                </div>

                                            </article>
                                        );
                                    }
                                )}

                            </div>

                        </section>
                    )}

            </div>

        </main>
    );
};

export default AdminDashboard;