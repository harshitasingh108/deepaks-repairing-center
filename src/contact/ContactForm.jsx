import {
    User,
    Phone,
    Mail,
    Wrench,
    Building2,
    MessageSquare,
    Send,
} from "lucide-react";

const ContactForm = () => {
    return (
        <section className="bg-gradient-to-b from-white to-orange-50 py-24 px-6">

            <div className="mx-auto max-w-6xl">

                <div className="mb-16 text-center">

                    <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
                        Send Us a Request
                    </span>

                    <h2 className="mt-6 text-5xl font-black text-slate-900">
                        Let's Discuss Your Requirement
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                        Fill out the form below and our team will contact you as soon as
                        possible.
                    </p>

                </div>

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

                    <form className="grid gap-8 md:grid-cols-2">

                        {/* Name */}

                        <div>

                            <label className="mb-3 flex items-center gap-2 font-semibold text-slate-700">

                                <User size={18} />

                                Full Name

                            </label>

                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-orange-500"
                            />

                        </div>

                        {/* Phone */}

                        <div>

                            <label className="mb-3 flex items-center gap-2 font-semibold text-slate-700">

                                <Phone size={18} />

                                Phone Number

                            </label>

                            <input
                                type="tel"
                                placeholder="Enter phone number"
                                className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-orange-500"
                            />

                        </div>

                        {/* Email */}

                        <div>

                            <label className="mb-3 flex items-center gap-2 font-semibold text-slate-700">

                                <Mail size={18} />

                                Email

                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-orange-500"
                            />

                        </div>

                        {/* Machine */}

                        <div>

                            <label className="mb-3 flex items-center gap-2 font-semibold text-slate-700">

                                <Wrench size={18} />

                                Machine Name

                            </label>

                            <input
                                type="text"
                                placeholder="Example: Drill Machine"
                                className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-orange-500"
                            />

                        </div>

                        {/* Brand */}

                        <div>

                            <label className="mb-3 flex items-center gap-2 font-semibold text-slate-700">

                                <Building2 size={18} />

                                Brand

                            </label>

                            <select
                                className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-orange-500"
                            >
                                <option>Select Brand</option>
                                <option>Bosch</option>
                                <option>Makita</option>
                                <option>DeWALT</option>
                                <option>INGCO</option>
                                <option>Stanley</option>
                                <option>Dongcheng</option>
                                <option>Other</option>
                            </select>

                        </div>

                        {/* Service */}

                        <div>

                            <label className="mb-3 font-semibold text-slate-700 block">
                                Service Required
                            </label>

                            <select
                                className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-orange-500"
                            >
                                <option>Select Service</option>
                                <option>Machine Repair</option>
                                <option>Buy New Machine</option>
                                <option>Spare Parts</option>
                                <option>Maintenance</option>
                            </select>

                        </div>

                        {/* Message */}

                        <div className="md:col-span-2">

                            <label className="mb-3 flex items-center gap-2 font-semibold text-slate-700">

                                <MessageSquare size={18} />

                                Message

                            </label>

                            <textarea
                                rows="6"
                                placeholder="Describe your requirement..."
                                className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-orange-500"
                            ></textarea>

                        </div>

                        {/* Button */}

                        <div className="md:col-span-2">

                            <button
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
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
                            >

                                <Send size={20} />

                                Send Request

                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </section>
    );
};

export default ContactForm;