import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from './App.jsx';

export { PAGE_PATHS, SITE_URL, SITE_NAME, OG_IMAGE, getPageMeta } from './seo';
export { LOCALES, localizePath } from './i18n/config';

// Renders a route to static HTML at build time (used by scripts/prerender.mjs)
export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );
}
