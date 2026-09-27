import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

import { DEMO_HREF } from '../site';

export function DemoButton({ className = '' }) {
  return (
    <a
      href={DEMO_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-full bg-brand px-7 py-3 text-[17px] font-medium text-white transition-colors hover:bg-brand/90 ${className}`}
    >
      Request a demo
    </a>
  );
}

// Text link with a trailing chevron. Pass `to` for internal pages or `href` for links;
// `external` opens the link in a new tab with an up-right arrow.
export function ArrowLink({ to, href, external = false, children, className = '' }) {
  const classes = `group inline-flex items-center text-[17px] text-brand hover:underline ${className}`;
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

export function PreviewButton({ href, children = 'Preview', className = '' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-1.5 rounded-full bg-brand px-7 py-3 text-[17px] font-medium text-white transition-colors hover:bg-brand/90 ${className}`}
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} />
    </a>
  );
}
