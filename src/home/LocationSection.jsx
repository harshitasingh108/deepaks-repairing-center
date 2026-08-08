import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Star,
    Navigation,
    MessageCircle,
} from "lucide-react";

const LocationSection = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/40 to-white py-24">

            {/* Background Glow */}
            <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-orange-200/30 blur-[140px]" />
            <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-orange-100/40 blur-[140px]" />

            <div className="relative mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mb-16 text-center">

                    <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
                        Visit Our Store
                    </span>

                    <h2 className="mt-6 text-5xl font-black text-slate-900">
                        Find Us Easily
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                        Visit Deepak Repairing Center for genuine power tools,
                        machine repair services and professional support.
                    </p>

                </div>

                <div className="grid items-center gap-10 lg:grid-cols-2">

                    {/* GOOGLE MAP */}

                    <div className="overflow-hidden rounded-[35px] border border-white bg-white shadow-[0_25px_60px_rgba(0,0,0,0.12)]">

                        <iframe
                            title="Deepak Repairing Center"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.1690958223558!2d77.0979262!3d28.744367900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07a55c7aae69%3A0x31688d2d0cdef9c9!2sDeepak%20repairing%20center!5e0!3m2!1sen!2sin!4v1786227219812!5m2!1sen!2sin"
                            className="h-[600px] w-full"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                        />

                    </div>

                    {/* CONTACT CARD */}

                    <div className="rounded-[35px] border border-white bg-white/90 p-10 shadow-[0_25px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl">

                        <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                            🟢 Open 24 Hours
                        </span>

                        <h2 className="mt-6 text-4xl font-black text-slate-900">
                            Deepak Repairing Center
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Trusted destination for Power Tool Sales, Professional
                            Repair Services and Genuine Spare Parts with more than
                            45 years of experience.
                        </p>

                        {/* Address */}

                        <div className="mt-10 space-y-7">

                            <div className="flex gap-4">

                                <div className="rounded-2xl bg-orange-100 p-3">

                                    <MapPin className="text-orange-600" />

                                </div>

                                <div>

                                    <h4 className="font-bold text-slate-900">
                                        Address
                                    </h4>

                                    <p className="mt-2 leading-7 text-slate-600">
                                        Near Sunhery Chowk,
                                        A Block,
                                        Sahibabad Dairy,
                                        Prahladpur,
                                        Rohini,
                                        Delhi - 110042
                                    </p>

                                </div>

                            </div>

                            {/* Phone */}

                            <div className="flex gap-4">

                                <div className="rounded-2xl bg-orange-100 p-3">

                                    <Phone className="text-orange-600" />

                                </div>

                                <div>

                                    <h4 className="font-bold text-slate-900">
                                        Phone
                                    </h4>

                                    <a
                                        href="tel:+919871238460"
                                        className="mt-2 block text-slate-600 hover:text-orange-600"
                                    >
                                        +91 98712 38460
                                    </a>

                                </div>

                            </div>

                            {/* Email */}

                            <div className="flex gap-4">

                                <div className="rounded-2xl bg-orange-100 p-3">

                                    <Mail className="text-orange-600" />

                                </div>

                                <div>

                                    <h4 className="font-bold text-slate-900">
                                        Email
                                    </h4>

                                    <a
                                        href="mailto:harshi786108@gmail.com"
                                        className="mt-2 block text-slate-600 hover:text-orange-600"
                                    >
                                        harshi786108@gmail.com
                                    </a>

                                </div>

                            </div>

                            {/* Timing */}

                            <div className="flex gap-4">

                                <div className="rounded-2xl bg-orange-100 p-3">

                                    <Clock className="text-orange-600" />

                                </div>

                                <div>

                                    <h4 className="font-bold text-slate-900">
                                        Working Hours
                                    </h4>

                                    <p className="mt-2 font-semibold text-green-600">
                                        Open 24 Hours
                                    </p>

                                </div>

                            </div>

                            {/* Rating */}

                            <div className="flex gap-4">

                                <div className="rounded-2xl bg-orange-100 p-3">

                                    <Star className="text-orange-600" />

                                </div>

                                <div>

                                    <h4 className="font-bold text-slate-900">
                                        Google Rating
                                    </h4>

                                    <p className="mt-2 text-slate-600">
                                        ⭐ 5.0 (5 Reviews)
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Buttons */}

                        <div className="mt-12 flex flex-wrap gap-4">

                            <a
                                href="https://google.com/maps/place/Deepak+repairing+center/@28.7443679,77.0979262,17z/data=!3m1!4b1!4m6!3m5!1s0x390d07a55c7aae69:0x31688d2d0cdef9c9!8m2!3d28.7443679!4d77.0979262!16s%2Fg%2F11qb3j13dv?entry=ttu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-2xl bg-orange-500 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600"
                            >
                                <Navigation size={18} />
                                Get Directions
                            </a>

                            <a
                                href="https://wa.me/919871238460"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-2xl border border-green-200 bg-green-50 px-7 py-4 font-semibold text-green-700 transition-all duration-300 hover:bg-green-100"
                            >
                                <MessageCircle size={18} />
                                WhatsApp
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default LocationSection;