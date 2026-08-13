// DEEPAK REPAIRING CENTER - EXACT CANONICAL GOOGLE MAPS LISTING URL & EMBED URL

export const MAP_URL =
    "https://www.google.com/maps/search/?api=1&query=Deepak+repairing+center,+Rohini,+Delhi";

export const MAP_SEARCH_URL =
    "https://www.google.com/maps/search/?api=1&query=Deepak+repairing+center,+Rohini,+Delhi";

export const MAP_EMBED_URL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.1690958223558!2d77.0979262!3d28.744367900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07a55c7aae69%3A0x31688d2d0cdef9c9!2sDeepak%20repairing%20center!5e0!3m2!1sen!2sin!4v1786564815268!5m2!1sen!2sin";

export const openGoogleMaps = (e) => {
    if (e && typeof e.preventDefault === "function") {
        e.preventDefault();
    }

    if (typeof window === "undefined" || typeof navigator === "undefined") {
        return;
    }

    const ua = navigator.userAgent || "";
    const isAndroid = /Android/i.test(ua);
    const isIOS = /iPhone|iPad|iPod/i.test(ua);

    if (isAndroid) {
        // Android native geo: URI directly invokes the Google Maps native app search intent
        window.location.href = "geo:0,0?q=Deepak+repairing+center,+Rohini,+Delhi";
    } else if (isIOS) {
        // iOS Google Maps / Apple Maps search query
        window.location.href =
            "https://www.google.com/maps/search/?api=1&query=Deepak+repairing+center,+Rohini,+Delhi";
    } else {
        // Desktop browser opens Google Maps search in a new tab
        window.open(MAP_URL, "_blank", "noopener,noreferrer");
    }
};
