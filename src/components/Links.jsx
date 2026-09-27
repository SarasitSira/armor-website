import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

import { DEMO_HREF } from '../site';

const PILL = 'inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium transition-colors';
const PILL_TONES = {
  dark: 'bg-black text-white hover:bg-graphite',
  light: 'bg-white text-black hover:bg-white/85',
};

// Primary call to action. Use tone="light" on dark backgrounds and photos.
export function DemoButton({ tone = 'dark', className = '' }) {
  return (
    <a href={DEMO_HREF} target="_blank" rel="noopener noreferrer" className={`${PILL} ${PILL_TONES[tone]} ${className}`}>
      Request a demo
    </a>
  );
}

// Pill link to an internal page
export function PillLink({ to, tone = 'dark', children, className = '' }) {
  return (
    <Link to={to} className={`${PILL} ${PILL_TONES[tone]} ${className}`}>
      {children}
    </Link>
  );
}

// Text link with a trailing chevron. Pass `to` for internal pages or `href` for links;
// `external` opens the link in a new tab with an up-right arrow.
export function ArrowLink({ to, href, external = false, children, className = '' }) {
  const classes = `group inline-flex items-center text-[15px] font-medium text-brand hover:underline ${className}`;
  const content = (
    <>
      {children}
      {external ? (
        <ArrowUpRight className="ml-0.5 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} />
      ) : (
        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
      )}
    </>
  );

  if (to) return <Link to={to} className={classes}>{content}</Link>;

  return (
    <a href={href} className={classes} {...(external && { target: '_blank', rel: 'noopener noreferrer' })}>
      {content}
    </a>
  );
}

export function PreviewButton({ href, tone = 'dark', children = 'Preview', className = '' }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`group ${PILL} ${PILL_TONES[tone]} ${className}`}>
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} />
    </a>
  );
}
