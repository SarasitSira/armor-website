import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { getPageMeta } from '../seo';

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!content) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!href) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

// Replaces the hreflang links that point to this page in the other languages
function setAlternates(alternates) {
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
  for (const alt of alternates) {
    const el = document.createElement('link');
    el.setAttribute('rel', 'alternate');
    el.setAttribute('hreflang', alt.hrefLang);
    el.setAttribute('href', alt.href);
    document.head.appendChild(el);
  }
}

// Keeps <title>, description, canonical, and social tags in sync with the current route.
// The same values are written into the pre-rendered HTML at build time (scripts/prerender.mjs).
export default function usePageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getPageMeta(pathname);
    document.documentElement.lang = meta.locale;
    document.title = meta.title;
    setMeta('name', 'description', meta.description);
    setMeta('name', 'robots', meta.noindex ? 'noindex' : null);
    setMeta('property', 'og:title', meta.title);
    setMeta('property', 'og:description', meta.description);
    setMeta('property', 'og:url', meta.url);
    setMeta('property', 'og:locale', meta.ogLocale);
    setMeta('name', 'twitter:title', meta.title);
    setMeta('name', 'twitter:description', meta.description);
    setCanonical(meta.url);
    setAlternates(meta.alternates);
  }, [pathname]);
}
