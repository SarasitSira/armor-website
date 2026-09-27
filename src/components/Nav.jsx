import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';

import { ArmorLogo, Wordmark } from './Brand';
import { DEMO_HREF, NAV_LINKS } from '../site';

const desktopLinkClass = (isCompact, isActive) =>
  `transition-all duration-300 hover:text-black ${isCompact ? 'text-xs' : 'text-sm'} ${
    isActive ? 'text-black' : 'text-graphite'
  }`;

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // `to` of the top-bar item whose flyout panel is open
  const [openMenu, setOpenMenu] = useState(null);
  const closeTimer = useRef(null);
  const menuRef = useRef(null);

  // Nav is tall at the top of the page and compacts once the user scrolls
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const showMenu = (key) => {
    clearTimeout(closeTimer.current);
    setOpenMenu(key);
  };
  // Short delay so the panel doesn't flicker shut while the pointer moves from the item to the panel
  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };
  const closeNow = () => {
    clearTimeout(closeTimer.current);
    setOpenMenu(null);
  };
  const closeMobile = () => setIsMobileMenuOpen(false);

  const activeMenu = NAV_LINKS.find((link) => link.to === openMenu);
  const isCompact = isScrolled || isMobileMenuOpen;
  const isSolid = isCompact || Boolean(activeMenu);

  return (
    <>
      <nav
        ref={menuRef}
        onKeyDown={(e) => {
          if (e.key === 'Escape') closeNow();
        }}
        onBlur={(e) => {
          if (!menuRef.current?.contains(e.relatedTarget)) closeNow();
        }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          activeMenu
            ? 'border-transparent bg-white'
            : isSolid
              ? 'border-black/6 bg-white/75 backdrop-blur-xl backdrop-saturate-150'
              : 'border-transparent bg-white'
        }`}
      >
        <div
          className={`relative z-10 mx-auto flex max-w-5xl items-center justify-between px-5 transition-[height] duration-300 ease-out ${
            isCompact ? 'h-12' : 'h-20'
          }`}
        >
          <Link to="/" onClick={closeMobile} className="flex items-center gap-2" aria-label="ARMOR home">
            <ArmorLogo className={`transition-all duration-300 ${isCompact ? 'h-6 w-6' : 'h-9 w-9'}`} />
            <Wordmark className={`text-black transition-all duration-300 ${isCompact ? 'text-[15px]' : 'text-xl'}`} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 self-stretch md:flex">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.to}
                  className="flex items-center self-stretch"
                  onMouseEnter={() => showMenu(link.to)}
                  onMouseLeave={scheduleClose}
                >
                  <NavLink
                    to={link.to}
                    onClick={closeNow}
                    onFocus={() => showMenu(link.to)}
                    aria-haspopup="true"
                    aria-expanded={openMenu === link.to}
                    className={({ isActive }) =>
                      `inline-flex items-center gap-1 ${desktopLinkClass(isCompact, isActive || openMenu === link.to)}`
                    }
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-3 w-3 transition-transform duration-200 ${openMenu === link.to ? 'rotate-180' : ''}`}
                      strokeWidth={2}
                    />
                  </NavLink>
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onMouseEnter={closeNow}
                  onFocus={closeNow}
                  className={({ isActive }) => desktopLinkClass(isCompact, isActive)}
                >
                  {link.label}
                </NavLink>
              )
            )}
            <a
              href={DEMO_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onFocus={closeNow}
              className={`rounded-full bg-black font-medium text-white transition-all duration-300 hover:bg-graphite ${
                isCompact ? 'px-3.5 py-1 text-xs' : 'px-5 py-2 text-sm'
              }`}
            >
              Request a demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-graphite hover:text-black md:hidden"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
          </button>
        </div>

        {/* Desktop flyout: extends the bar downward with the same surface, so the two read as one piece */}
        <div
          className={`absolute inset-x-0 top-full hidden md:block ${activeMenu ? '' : 'pointer-events-none'}`}
          onMouseEnter={() => activeMenu && showMenu(activeMenu.to)}
          onMouseLeave={scheduleClose}
        >
          <div
            className={`border-b border-black/6 bg-white shadow-[0_24px_40px_-24px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out ${
              activeMenu ? 'visible opacity-100' : 'invisible opacity-0'
            }`}
          >
            {activeMenu && (
              <div className="mx-auto max-w-5xl px-5 pb-12 pt-6">
                <p className="mb-4 text-sm font-medium text-graphite">Explore {activeMenu.label}</p>
                <div className="flex flex-col items-start gap-5">
                  {activeMenu.children.map((child) => (
                    <Link key={child.to} to={child.to} onClick={closeNow} className="group block">
                      <span className="block text-3xl font-semibold tracking-tight text-black transition-colors group-hover:text-brand">
                        {child.label}
                      </span>
                      <span className="mt-1 block text-sm text-graphite">{child.description}</span>
                    </Link>
                  ))}
                  <Link
                    to={activeMenu.to}
                    onClick={closeNow}
                    className="mt-2 inline-flex items-center text-sm font-medium text-brand hover:underline"
                  >
                    View all {activeMenu.label.toLowerCase()}
                    <ChevronRight className="h-3.5 w-3.5" strokeWidth={2} />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-black/6 bg-white/95 backdrop-blur-xl md:hidden">
            <div className="flex flex-col px-5 py-4">
              {NAV_LINKS.map((link) => (
                <div key={link.to} className="border-b border-black/6 py-3">
                  <NavLink
                    to={link.to}
                    end={Boolean(link.children)}
                    onClick={closeMobile}
                    className={({ isActive }) => `block text-lg font-semibold tracking-tight ${isActive ? 'text-brand' : ''}`}
                  >
                    {link.label}
                  </NavLink>
                  {link.children && (
                    <div className="mt-2 flex flex-col gap-2 pl-4">
                      {link.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          onClick={closeMobile}
                          className={({ isActive }) => `text-base ${isActive ? 'text-brand' : 'text-graphite'}`}
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a href={DEMO_HREF} target="_blank" rel="noopener noreferrer" className="mt-5 rounded-full bg-brand py-3 text-center font-medium text-white">
                Request a demo
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Soft blur over the page while a flyout is open. Kept outside <nav> because the bar's own
          backdrop-filter would otherwise stop this layer from blurring the page behind it. */}
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-0 z-40 hidden bg-white/30 backdrop-blur-sm transition-opacity duration-300 md:block ${
          activeMenu ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </>
  );
}
