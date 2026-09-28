import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';

import { ArmorLogo, Wordmark } from './Brand';
import LanguageSwitcher from './LanguageSwitcher';
import { useLocalizePath, useT } from '../i18n';
import { DEMO_HREF, NAV_LINKS } from '../site';

const desktopLinkClass = (isCompact, isActive) =>
  `font-medium uppercase tracking-[0.14em] transition-all duration-300 hover:text-black ${
    isCompact ? 'text-[11px]' : 'text-xs'
  } ${isActive ? 'text-black' : 'text-graphite'}`;

export default function Nav() {
  const t = useT();
  const localize = useLocalizePath();
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
            ? 'border-transparent bg-canvas'
            : isSolid
              ? 'border-black/6 bg-canvas/80 backdrop-blur-xl backdrop-saturate-150'
              : 'border-transparent bg-transparent'
        }`}
      >
        <div
          className={`relative z-10 grid grid-cols-[1fr_auto] items-center px-5 transition-[height] duration-300 ease-out md:grid-cols-[1fr_auto_1fr] md:px-8 ${
            isCompact ? 'h-12' : 'h-20'
          }`}
        >
          <Link to={localize('/')} onClick={closeMobile} className="flex items-center gap-2 justify-self-start" aria-label={t.common.homeAria}>
            <ArmorLogo className={`transition-all duration-300 ${isCompact ? 'h-6 w-6' : 'h-9 w-9'}`} />
            <Wordmark className={`text-black transition-all duration-300 ${isCompact ? 'text-[15px]' : 'text-xl'}`} />
          </Link>

          {/* Desktop Menu: links centered in the bar */}
          <div className="hidden items-center gap-10 self-stretch md:flex">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.to}
                  className="flex items-center self-stretch"
                  onMouseEnter={() => showMenu(link.to)}
                  onMouseLeave={scheduleClose}
                >
                  <NavLink
                    to={localize(link.to)}
                    onClick={closeNow}
                    onFocus={() => showMenu(link.to)}
                    aria-haspopup="true"
                    aria-expanded={openMenu === link.to}
                    className={({ isActive }) =>
                      `inline-flex items-center gap-1 ${desktopLinkClass(isCompact, isActive || openMenu === link.to)}`
                    }
                  >
                    {t.nav[link.key]}
                    <ChevronDown
                      className={`h-3 w-3 transition-transform duration-200 ${openMenu === link.to ? 'rotate-180' : ''}`}
                      strokeWidth={2}
                    />
                  </NavLink>
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={localize(link.to)}
                  onMouseEnter={closeNow}
                  onFocus={closeNow}
                  className={({ isActive }) => desktopLinkClass(isCompact, isActive)}
                >
                  {t.nav[link.key]}
                </NavLink>
              )
            )}
          </div>

          <div className="hidden items-center gap-6 justify-self-end md:flex">
            <LanguageSwitcher />
            <a
              href={DEMO_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onFocus={closeNow}
              className={`rounded-full bg-black font-medium uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-graphite ${
                isCompact ? 'px-3.5 py-1.5 text-[10px]' : 'px-4 py-2 text-[11px]'
              }`}
            >
              {t.common.requestDemo}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="justify-self-end text-graphite hover:text-black md:hidden"
            aria-label={isMobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
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
            className={`border-b border-black/6 bg-canvas shadow-[0_24px_40px_-24px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out ${
              activeMenu ? 'visible opacity-100' : 'invisible opacity-0'
            }`}
          >
            {activeMenu && (
              <div className="px-5 pb-12 pt-6 md:px-8">
                <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-graphite">{t.nav.explore}</p>
                <div className="flex flex-col items-start gap-5">
                  {activeMenu.children.map((child) => (
                    <Link key={child.to} to={localize(child.to)} onClick={closeNow} className="group block">
                      <span className="block text-3xl font-medium tracking-[-0.03em] text-black transition-colors group-hover:text-brand">
                        {child.label}
                      </span>
                      <span className="mt-1 block text-sm text-graphite">{t.nav[child.descriptionKey]}</span>
                    </Link>
                  ))}
                  <Link
                    to={localize(activeMenu.to)}
                    onClick={closeNow}
                    className="mt-2 inline-flex items-center text-sm font-medium text-brand hover:underline"
                  >
                    {t.nav.viewAll}
                    <ChevronRight className="h-3.5 w-3.5" strokeWidth={2} />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-black/6 bg-canvas/95 backdrop-blur-xl md:hidden">
            <div className="flex flex-col px-5 py-4">
              {NAV_LINKS.map((link) => (
                <div key={link.to} className="border-b border-black/6 py-3">
                  <NavLink
                    to={localize(link.to)}
                    end={Boolean(link.children)}
                    onClick={closeMobile}
                    className={({ isActive }) => `block text-lg font-medium tracking-[-0.02em] ${isActive ? 'text-brand' : ''}`}
                  >
                    {t.nav[link.key]}
                  </NavLink>
                  {link.children && (
                    <div className="mt-2 flex flex-col gap-2 pl-4">
                      {link.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={localize(child.to)}
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
              <LanguageSwitcher className="mt-5 gap-5" onSelect={closeMobile} />
              <a href={DEMO_HREF} target="_blank" rel="noopener noreferrer" className="mt-5 rounded-full bg-black py-3 text-center text-sm font-medium uppercase tracking-[0.14em] text-white">
                {t.common.requestDemo}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Soft blur over the page while a flyout is open. Kept outside <nav> because the bar's own
          backdrop-filter would otherwise stop this layer from blurring the page behind it. */}
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-0 z-40 hidden bg-canvas/30 backdrop-blur-sm transition-opacity duration-300 md:block ${
          activeMenu ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </>
  );
}
