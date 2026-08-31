import { useEffect } from "react";

const BASE_URL = "https://deepaksrepairingcenter.com";

const SEO = ({ title, description, path = "" }) => {
  useEffect(() => {
    // 1. Update Document Title
    if (title) {
      document.title = title;
    }

    // 2. Update Meta Description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = description;

      // Update OG & Twitter Description
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.content = description;

      const twitterDesc = document.querySelector('meta[name="twitter:description"]');
      if (twitterDesc) twitterDesc.content = description;
    }

    // 3. Update Canonical and URL Tags
    const fullUrl = `${BASE_URL}${path}`;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = fullUrl;

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.content = fullUrl;

    const twitterUrl = document.querySelector('meta[name="twitter:url"]');
    if (twitterUrl) twitterUrl.content = fullUrl;

    // 4. Update OG & Twitter Title
    if (title) {
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.content = title;

      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) twitterTitle.content = title;
    }
  }, [title, description, path]);

  return null;
};

export default SEO;
