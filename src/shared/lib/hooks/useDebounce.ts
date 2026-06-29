import { debounce } from "lodash";
import { useRef, useEffect, useCallback } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useDebouncedCallback<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const debouncedFn = useRef(
    debounce((...args: Parameters<T>) => {
      callbackRef.current(...args);
    }, delay)
  ).current;

  useEffect(() => {
    return () => {
      debouncedFn.cancel();
    };
  }, [debouncedFn]);

  return useCallback(
    (...args: Parameters<T>) => {
      debouncedFn(...args);
    },
    [debouncedFn]
  );
}
