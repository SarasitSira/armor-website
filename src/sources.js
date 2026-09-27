import { createContext, useContext, useEffect } from 'react';

// Pages register their research citations here; the footer renders them as fine print
export const SourcesContext = createContext({ sources: [], setSources: () => {} });

// `items` should be a stable (module-level) array so the effect doesn't re-run every render
export function usePageSources(items) {
  const { setSources } = useContext(SourcesContext);

  useEffect(() => {
    setSources(items);
    return () => setSources([]);
  }, [items, setSources]);
}

export function useSourcesList() {
  return useContext(SourcesContext).sources;
}
