import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Star,
    Navigation,
    MessageCircle,
} from "lucide-react";
import { MAP_URL, MAP_EMBED_URL, openGoogleMaps } from "../constants/map";

const ContactMap = () => {
    return (
        <section className="relative z-20 -mt-28 px-6 pb-24">

            <div className="mx-auto max-w-7xl">

                <div
                    className="
          overflow-hidden
          rounded-[35px]
          border
          border-white/60
          bg-white/90
          shadow-[0_35px_80px_rgba(0,0,0,0.12)]
          backdrop-blur-2xl
          lg:grid
          lg:grid-cols-2
          "
                >

                    {/* ================= MAP ================= */}

                    <div className="relative h-[650px]">

                        <iframe
                            title="Deepak Repairing Center"
                            src={MAP_EMBED_URL}
                            className="h-full w-full"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                        />

                        {/* Floating Badge */}

                        <div className="absolute left-6 top-6 rounded-full bg-white px-5 py-3 shadow-xl">

                            <p className="font-semibold text-slate-900">

                                ⭐ 5.0 Google Rating

                            </p>

                        </div>

                    </div>

                    {/* ================= RIGHT ================= */}

                    <div className="p-10 lg:p-14">

                        <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">

                            Visit Our Store

                        </span>

                        <h2 className="mt-6 text-5xl font-black text-slate-900">

                            Deepak
                            <br />
                            Repairing Center

                        </h2>

                        <p className="mt-6 leading-8 text-slate-600">

                            We provide Power Tool Sales,
                            Genuine Spare Parts and
                            Professional Repair Services
                            with trusted workmanship.

                        </p>

                        {/* Contact Info */}

                        <div className="mt-10 space-y-7">

                            <div className="flex gap-4">

                                <div className="rounded-2xl bg-orange-100 p-3">

                                    <MapPin className="text-orange-600" />

                                </div>

                                <div>

                                    <h4 className="font-bold">

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

                            <div className="flex gap-4">

                                <div className="rounded-2xl bg-orange-100 p-3">

                                    <Phone className="text-orange-600" />

                                </div>

                                <div>

                                    <h4 className="font-bold">

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

                            <div className="flex gap-4">

                                <div className="rounded-2xl bg-orange-100 p-3">

                                    <Mail className="text-orange-600" />

                                </div>

                                <div>

                                    <h4 className="font-bold">

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

                            <div className="grid gap-4 sm:grid-cols-2">

                                <div className="rounded-3xl bg-orange-50 p-5">

                                    <Clock className="text-orange-500" />

                                    <h4 className="mt-4 font-bold">

                                        Working Hours

                                    </h4>

                                    <p className="mt-2 text-green-600 font-semibold">

                                        Open 24 Hours

                                    </p>

                                </div>

                                <div className="rounded-3xl bg-orange-50 p-5">

                                    <Star className="text-orange-500" />

                                    <h4 className="mt-4 font-bold">

                                        Google Rating

                                    </h4>

                                    <p className="mt-2">

                                        ⭐ 5.0 (5 Reviews)

                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Buttons */}

                        <div className="mt-10 flex flex-wrap gap-4">

                            <a
                                href={MAP_URL}
                                onClick={openGoogleMaps}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                flex
                items-center
                gap-3
                rounded-2xl
                bg-orange-500
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-orange-600
              "
                            >

                                <Navigation size={18} />

                                Get Directions

                            </a>

                            <a
                                href="https://wa.me/919871238460"
                                target="_blank"
                                rel="noreferrer"
                                className="
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-green-300
                bg-green-50
                px-8
                py-4
                font-semibold
                text-green-700
                transition-all
                duration-300
                hover:bg-green-100
              "
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

export default ContactMap;