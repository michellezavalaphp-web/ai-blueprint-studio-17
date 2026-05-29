import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  /** Path beginning with "/" — used to build canonical, og:url, and hreflang. Defaults to current path. */
  path?: string;
  /** Open Graph type. Defaults to "website". Use "article" for blog posts. */
  ogType?: string;
}

const SITE_URL = "https://www.goaiinnovation.com";

const upsertMeta = (selector: string, create: () => HTMLMetaElement, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertLink = (id: string, rel: string, href: string, hreflang?: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[data-seo="${id}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("data-seo", id);
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
  if (hreflang) el.setAttribute("hreflang", hreflang);
};

const SEO = ({ title, description, path, ogType = "website" }: SEOProps) => {
  useEffect(() => {
    const currentPath = path ?? window.location.pathname;
    const canonical = `${SITE_URL}${currentPath}`;

    document.title = title;

    upsertMeta('meta[name="description"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      return m;
    }, description);
    upsertMeta('meta[property="og:title"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:title");
      return m;
    }, title);
    upsertMeta('meta[property="og:description"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:description");
      return m;
    }, description);
    upsertMeta('meta[property="og:url"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:url");
      return m;
    }, canonical);
    upsertMeta('meta[property="og:type"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:type");
      return m;
    }, ogType);
    upsertMeta('meta[name="twitter:title"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "twitter:title");
      return m;
    }, title);
    upsertMeta('meta[name="twitter:description"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "twitter:description");
      return m;
    }, description);

    upsertLink("canonical", "canonical", canonical);
    upsertLink("hreflang-en", "alternate", canonical, "en");
    upsertLink(
      "hreflang-es",
      "alternate",
      `${canonical}${canonical.includes("?") ? "&" : "?"}lang=es`,
      "es",
    );
    upsertLink("hreflang-default", "alternate", canonical, "x-default");
  }, [title, description, path, ogType]);

  return null;
};

export default SEO;
