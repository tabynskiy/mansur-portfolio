import { useEffect } from "react";

type MetaProps = {
  title: string;
  description: string;
  canonical: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const ensureMeta = (selector: string, attribute: "name" | "property", value: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, value);
    document.head.appendChild(tag);
  }

  return tag;
};

export const useMeta = ({ title, description, canonical, jsonLd }: MetaProps) => {
  useEffect(() => {
    document.title = title;

    ensureMeta('meta[name="description"]', "name", "description").content = description;
    ensureMeta('meta[property="og:title"]', "property", "og:title").content = title;
    ensureMeta('meta[property="og:description"]', "property", "og:description").content =
      description;
    ensureMeta('meta[name="twitter:title"]', "name", "twitter:title").content = title;
    ensureMeta('meta[name="twitter:description"]', "name", "twitter:description").content =
      description;

    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    let structured = document.head.querySelector<HTMLScriptElement>(
      'script[data-structured="true"]',
    );

    if (!structured) {
      structured = document.createElement("script");
      structured.type = "application/ld+json";
      structured.dataset.structured = "true";
      document.head.appendChild(structured);
    }

    if (jsonLd) {
      structured.textContent = JSON.stringify(jsonLd);
    }
  }, [canonical, description, jsonLd, title]);
};
