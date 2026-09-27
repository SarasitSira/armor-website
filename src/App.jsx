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
import { SourcesContext } from './sources';

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
      <div className="flex min-h-screen flex-col bg-white text-black antialiased">
        <Nav />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/solutions" element={<SolutionsOverview />} />
            <Route path="/solutions/bexo" element={<SolutionsBexo />} />
            <Route path="/solutions/shield" element={<SolutionsShield />} />
            <Route path="/bexo" element={<Navigate to="/solutions/bexo" replace />} />
            <Route path="/shield" element={<Navigate to="/solutions/shield" replace />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <NewsletterSection />
        <Footer />
      </div>
    </SourcesContext.Provider>
  );
}
