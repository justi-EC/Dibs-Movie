import { useEffect, useState } from "react";

export function useDebounce<T>(defaultValue: T) {
  const [query, setQuery] = useState<T>(defaultValue);
  const [debounceQuery, setDebounceQuery] = useState<T>(defaultValue);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      return setQuery(debounceQuery);
    }, 200);

    return () => clearTimeout(debounceTimeout);
  }, [debounceQuery]);

  return { query, debounceQuery, setDebounceQuery };
}
