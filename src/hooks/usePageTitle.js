import { useEffect } from 'react';

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ARMOR` : 'ARMOR | Bexo Back Exosuit';
  }, [title]);
}
