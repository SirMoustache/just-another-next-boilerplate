/**
 * Absolute imports
 */
import { useState, useEffect } from 'react';

const getIsScrolled = (threshold: number): boolean | undefined => {
  if (typeof document === 'undefined') return;

  return document.documentElement.scrollTop >= threshold;
};

export type UseScrolledOptions = {
  threshold?: number;
};

export const useIsScrolled = ({ threshold = 10 }: UseScrolledOptions = {}) => {
  const [isScrolled, setIsScrolled] = useState(getIsScrolled(threshold));

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = getIsScrolled(threshold);
      setIsScrolled(scrolled);
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, setIsScrolled]);

  return isScrolled;
};
