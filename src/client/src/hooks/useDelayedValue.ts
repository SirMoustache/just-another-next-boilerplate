/**
 * Absolute imports
 */
import { useEffect, useState } from 'react';

export type UseDelayValueConfig<A, B> = {
  /**
   * Initial value
   */
  initial: A;
  /**
   * Value after delay
   */
  value: B;
  /**
   * Delay time in ms
   * @default 1000
   */
  delayMs?: number;
  /**
   * Should be delayed when value is set to falsy
   * @default true
   */
  delayUnset?: boolean;
  /**
   * Should be delayed from initial to value
   * @default false
   */
  delaySet?: boolean;
};

/**
 *
 * @example
 * const shouldShowLoader = useDelaySetValue({
 *  initial: false,
 *  value: isFetching,
 *  delayMs: 1000
 * });
 */
export const useDelaySetValue = <A, B>({
  initial,
  value,
  delayMs = 1000,
  delayUnset = false,
  delaySet = true,
}: UseDelayValueConfig<A, B>) => {
  const [delayedValue, setDelayedValue] = useState<A | B>(initial);

  useEffect(() => {
    if ((value && delaySet) || (!value && delayUnset)) {
      const id = setTimeout(() => {
        setDelayedValue(value);
      }, delayMs);

      return () => clearTimeout(id);
    }

    if (!value && !delayUnset) {
      setDelayedValue(value);
    }

    if (value && !delaySet) {
      setDelayedValue(value);
    }
  }, [value, delayMs, delayUnset, delaySet]);

  return delayedValue;
};
