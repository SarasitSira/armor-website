import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Production pages are pre-rendered to HTML (scripts/prerender.mjs), so attach to that markup.
// The dev server serves an empty root, and the shared 404 page is rendered in English, so both
// render from scratch (the 404 then shows in the language of the requested URL).
if (container.hasChildNodes() && !('notFound' in container.dataset)) {
  hydrateRoot(container, app)
} else {
  container.replaceChildren()
  createRoot(container).render(app)
}
