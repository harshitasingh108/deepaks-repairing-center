import { useState } from "react";

import {
    User,
    Phone,
    Mail,
    Wrench,
    Building2,
    MessageSquare,
    Send,
    CheckCircle,
    AlertCircle,
} from "lucide-react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        product: "",
        brand: "",
        service: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);
        setSuccess("");
        setError("");

        try {
            const response = await fetch(
                "http://localhost:5000/api/repair-requests",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        phone: formData.phone,
                        email: formData.email,
                        product: `${formData.product} - ${formData.brand}`,
                        service: formData.service,
                        message: formData.message,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to submit request"
                );
            }

            setSuccess(
                "Your request has been submitted successfully. Our team will contact you soon."
            );

            setFormData({
                name: "",
                phone: "",
                email: "",
                product: "",
                brand: "",
                service: "",
                message: "",
            });
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
        <section className="px-6 py-24">

            <div className="mx-auto max-w-6xl">

                {/* ================= HEADER ================= */}

                <div className="mb-16 text-center">

                    <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
                        Send Us a Request
                    </span>

                    <h2 className="mt-6 text-5xl font-black text-slate-900">
                        Let's Discuss Your Requirement
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                        Fill out the form below and our team will contact
                        you as soon as possible.
                    </p>

                </div>

                {/* ================= FORM CARD ================= */}

                <div
                    className="
                        rounded-[35px]
                        border
                        border-white/60
                        bg-white/90
                        p-10
                        shadow-[0_25px_60px_rgba(0,0,0,0.12)]
                        backdrop-blur-2xl
                    "
                >

                    <form
                        onSubmit={handleSubmit}
                        className="grid gap-8 md:grid-cols-2"
                    >

                        {/* ================= NAME ================= */}

                        <div>

                            <label className="mb-3 flex items-center gap-2 font-semibold text-slate-700">

                                <User size={18} />

                                Full Name

                            </label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                required
                                className="
                                    w-full
                                    rounded-2xl
                                    border
                                    border-slate-300
                                    px-5
                                    py-4
                                    outline-none
                                    transition
                                    focus:border-orange-500
                                    focus:ring-2
                                    focus:ring-orange-100
                                "
                            />

                        </div>

                        {/* ================= PHONE ================= */}

                        <div>

                            <label className="mb-3 flex items-center gap-2 font-semibold text-slate-700">

                                <Phone size={18} />

                                Phone Number

                            </label>

                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter phone number"
                                required
                                className="
                                    w-full
                                    rounded-2xl
                                    border
                                    border-slate-300
                                    px-5
                                    py-4
                                    outline-none
                                    transition
                                    focus:border-orange-500
                                    focus:ring-2
                                    focus:ring-orange-100
                                "
                            />

                        </div>

                        {/* ================= EMAIL ================= */}

                        <div>

                            <label className="mb-3 flex items-center gap-2 font-semibold text-slate-700">

                                <Mail size={18} />

                                Email

                            </label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="
                                    w-full
                                    rounded-2xl
                                    border
                                    border-slate-300
                                    px-5
                                    py-4
                                    outline-none
                                    transition
                                    focus:border-orange-500
                                    focus:ring-2
                                    focus:ring-orange-100
                                "
                            />

                        </div>

                        {/* ================= MACHINE ================= */}

                        <div>

                            <label className="mb-3 flex items-center gap-2 font-semibold text-slate-700">

                                <Wrench size={18} />

                                Machine Name

                            </label>

                            <input
                                type="text"
                                name="product"
                                value={formData.product}
                                onChange={handleChange}
                                placeholder="Example: Drill Machine"
                                required
                                className="
                                    w-full
                                    rounded-2xl
                                    border
                                    border-slate-300
                                    px-5
                                    py-4
                                    outline-none
                                    transition
                                    focus:border-orange-500
                                    focus:ring-2
                                    focus:ring-orange-100
                                "
                            />

                        </div>

                        {/* ================= BRAND ================= */}

                        <div>

                            <label className="mb-3 flex items-center gap-2 font-semibold text-slate-700">

                                <Building2 size={18} />

                                Brand

                            </label>

                            <select
                                name="brand"
                                value={formData.brand}
                                onChange={handleChange}
                                required
                                className="
                                    w-full
                                    rounded-2xl
                                    border
                                    border-slate-300
                                    px-5
                                    py-4
                                    outline-none
                                    transition
                                    focus:border-orange-500
                                    focus:ring-2
                                    focus:ring-orange-100
                                "
                            >

                                <option value="">
                                    Select Brand
                                </option>

                                <option value="Bosch">
                                    Bosch
                                </option>

                                <option value="Makita">
                                    Makita
                                </option>

                                <option value="DeWALT">
                                    DeWALT
                                </option>

                                <option value="INGCO">
                                    INGCO
                                </option>

                                <option value="Stanley">
                                    Stanley
                                </option>

                                <option value="Dongcheng">
                                    Dongcheng
                                </option>

                                <option value="Other">
                                    Other
                                </option>

                            </select>

                        </div>

                        {/* ================= SERVICE ================= */}

                        <div>

                            <label className="mb-3 block font-semibold text-slate-700">
                                Service Required
                            </label>

                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                                className="
                                    w-full
                                    rounded-2xl
                                    border
                                    border-slate-300
                                    px-5
                                    py-4
                                    outline-none
                                    transition
                                    focus:border-orange-500
                                    focus:ring-2
                                    focus:ring-orange-100
                                "
                            >

                                <option value="">
                                    Select Service
                                </option>

                                <option value="Machine Repair">
                                    Machine Repair
                                </option>

                                <option value="Buy New Machine">
                                    Buy New Machine
                                </option>

                                <option value="Spare Parts">
                                    Spare Parts
                                </option>

                                <option value="Maintenance">
                                    Maintenance
                                </option>

                            </select>

                        </div>

                        {/* ================= MESSAGE ================= */}

                        <div className="md:col-span-2">

                            <label className="mb-3 flex items-center gap-2 font-semibold text-slate-700">

                                <MessageSquare size={18} />

                                Message

                            </label>

                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="6"
                                placeholder="Describe your requirement..."
                                className="
                                    w-full
                                    rounded-2xl
                                    border
                                    border-slate-300
                                    px-5
                                    py-4
                                    outline-none
                                    transition
                                    focus:border-orange-500
                                    focus:ring-2
                                    focus:ring-orange-100
                                "
                            />

                        </div>

                        {/* ================= SUCCESS ================= */}

                        {success && (
                            <div className="md:col-span-2 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-green-700">

                                <CheckCircle
                                    size={22}
                                    className="mt-0.5 shrink-0"
                                />

                                <p className="font-medium">
                                    {success}
                                </p>

                            </div>
                        )}

                        {/* ================= ERROR ================= */}

                        {error && (
                            <div className="md:col-span-2 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-red-700">

                                <AlertCircle
                                    size={22}
                                    className="mt-0.5 shrink-0"
                                />

                                <p className="font-medium">
                                    {error}
                                </p>

                            </div>
                        )}

                        {/* ================= BUTTON ================= */}

                        <div className="md:col-span-2">

                            <button
                                type="submit"
                                disabled={loading}
                                className="
                                    flex
                                    items-center
                                    justify-center
                                    gap-3
                                    rounded-2xl
                                    bg-gradient-to-r
                                    from-orange-500
                                    to-orange-600
                                    px-10
                                    py-5
                                    font-semibold
                                    text-white
                                    shadow-lg
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:shadow-xl
                                    disabled:cursor-not-allowed
                                    disabled:opacity-60
                                    disabled:hover:translate-y-0
                                "
                            >

                                <Send size={20} />

                                {loading
                                    ? "Sending Request..."
                                    : "Send Request"}

                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </section>
    );
};

export default ContactForm;