/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';

export const useDebounce = <T extends (...args: any[]) => void>(callback: T, delay: number) => {
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  return (...args: Parameters<T>) => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    timeoutId.current = setTimeout(() => callback(...args), delay);
  };
};
