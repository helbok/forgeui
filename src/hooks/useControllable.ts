import { useCallback, useState } from "react";

export function useControllableState<T>(options: {
  value?: T;
  defaultValue: T;
  onChange?: (value: T) => void;
}) {
  const { value, defaultValue, onChange } = options;
  const [internal, setInternal] = useState(defaultValue);
  const controlled = value !== undefined;

  const setValue = useCallback(
    (next: T | ((prev: T) => T)) => {
      const current = controlled ? (value as T) : internal;
      const resolved =
        typeof next === "function" ? (next as (p: T) => T)(current) : next;
      if (!controlled) {
        setInternal(resolved);
      }
      onChange?.(resolved);
    },
    [controlled, internal, value, onChange],
  );

  return [(controlled ? value : internal) as T, setValue] as const;
}
