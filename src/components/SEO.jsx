import { useEffect } from "react";

const BASE_URL = "https://deepaksrepairingcenter.com";

const SEO = ({ title, description, path = "", breadcrumbs, schema }) => {
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

    // 5. Manage Dynamic Page-Specific Structured Data Schema
    let scriptElement = document.getElementById("dynamic-page-schema");
    const schemasToInject = [];

    if (breadcrumbs && breadcrumbs.length > 0) {
      schemasToInject.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((b, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": b.name,
          "item": `${BASE_URL}${b.item}`
        }))
      });
    }

    if (schema) {
      schemasToInject.push(schema);
    }

    if (schemasToInject.length > 0) {
      if (!scriptElement) {
        scriptElement = document.createElement("script");
        scriptElement.id = "dynamic-page-schema";
        scriptElement.type = "application/ld+json";
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(
        schemasToInject.length === 1 ? schemasToInject[0] : { "@context": "https://schema.org", "@graph": schemasToInject }
      );
    } else if (scriptElement) {
      scriptElement.remove();
    }

    return () => {
      const existingScript = document.getElementById("dynamic-page-schema");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [title, description, path, breadcrumbs, schema]);

  return null;
};

export default SEO;
