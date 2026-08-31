import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_MEASUREMENT_ID = "G-2DPPZ4BZXW";

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      const pagePath = location.pathname + location.search;
      const pageLocation = window.location.href;

      // Brief delay ensures route-specific SEO title is updated before sending page_view
      const timer = setTimeout(() => {
        // Send explicit page_view event to GA4 collection endpoint
        window.gtag("event", "page_view", {
          send_to: GA_MEASUREMENT_ID,
          page_path: pagePath,
          page_location: pageLocation,
          page_title: document.title,
        });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location]);

  return null;
};

export default AnalyticsTracker;
