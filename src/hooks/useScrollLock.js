import { useEffect } from 'react';

export default function useScrollLock(locked) {
  useEffect(() => {
    if (!locked) return undefined;
    const root = document.documentElement;
    root.classList.add('is-scroll-locked');
    return () => root.classList.remove('is-scroll-locked');
  }, [locked]);
}
