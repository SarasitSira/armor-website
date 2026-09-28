import { useEffect, useMemo, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Footer from './components/Footer';
import Nav from './components/Nav';
import NewsletterSection from './components/NewsletterSection';
import usePageMeta from './hooks/usePageMeta';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Industries from './pages/Industries';
import NotFound from './pages/NotFound';
import SolutionsBexo from './pages/solutions/Bexo';
import SolutionsOverview from './pages/solutions/Overview';
import SolutionsShield from './pages/solutions/Shield';
import { LOCALES, localizePath } from './i18n/config';
import { SourcesContext } from './sources';

// Every page, available at the same path in each language (/industries, /th/industries, /es/industries)
const PAGES = [
  ['/', Home],
  ['/industries', Industries],
  ['/solutions', SolutionsOverview],
  ['/solutions/bexo', SolutionsBexo],
  ['/solutions/shield', SolutionsShield],
  ['/contact', Contact],
];

// App is rendered inside a router: BrowserRouter in the browser (main.jsx), StaticRouter at build time (entry-server.jsx)

// Start each page at the top (or at the #section in the URL) instead of keeping the previous scroll position
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    if (target) {
      target.scrollIntoView();
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [sources, setSources] = useState([]);
  const sourcesValue = useMemo(() => ({ sources, setSources }), [sources]);
  usePageMeta();

  return (
    <SourcesContext.Provider value={sourcesValue}>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-canvas text-black antialiased">
        <Nav />
        <main className="flex-1">
          <Routes>
            {LOCALES.flatMap((locale) =>
              PAGES.map(([path, Page]) => (
                <Route key={`${locale}${path}`} path={localizePath(path, locale)} element={<Page />} />
              ))
            )}
            <Route path="/bexo" element={<Navigate to="/solutions/bexo" replace />} />
            <Route path="/shield" element={<Navigate to="/solutions/shield" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <NewsletterSection />
        <Footer />
      </div>
    </SourcesContext.Provider>
  );
}
