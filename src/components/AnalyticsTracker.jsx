import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_MEASUREMENT_ID = "G-2DPPZ4BZXW";

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      const pagePath = location.pathname + location.search;
      const pageLocation = window.location.href;

      let isDebugMode = false;
      try {
        if (
          location.search.includes("ga_debug=true") ||
          location.search.includes("debug=true")
        ) {
          sessionStorage.setItem("ga_debug", "true");
          isDebugMode = true;
        } else if (
          location.search.includes("ga_debug=false") ||
          location.search.includes("debug=false")
        ) {
          sessionStorage.removeItem("ga_debug");
          isDebugMode = false;
        } else {
          isDebugMode =
            sessionStorage.getItem("ga_debug") === "true" ||
            Boolean(import.meta.env.DEV);
        }
      } catch (e) {
        isDebugMode =
          location.search.includes("ga_debug=true") ||
          location.search.includes("debug=true") ||
          Boolean(import.meta.env.DEV);
      }

      // Brief delay ensures route-specific SEO title is updated before sending page_view
      const timer = setTimeout(() => {
        const eventParams = {
          send_to: GA_MEASUREMENT_ID,
          page_path: pagePath,
          page_location: pageLocation,
          page_title: document.title,
        };

        if (isDebugMode) {
          eventParams.debug_mode = true;
          eventParams._dbg = 1;
        }

        window.gtag("event", "page_view", eventParams);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location]);

  return null;
};

export default AnalyticsTracker;
