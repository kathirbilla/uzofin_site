import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';
import { createAudioEngine } from '@/utils/audio';

const STORAGE_KEY = 'uzofin:sound';
const SoundContext = createContext({ enabled: false, toggle: () => {}, play: () => {} });

const readPreference = () => {
  try {
    return window.localStorage.getItem(STORAGE_KEY) !== 'off';
  } catch {
    return true;
  }
};

export function SoundProvider({ children }) {
  const [enabled, setEnabled] = useState(readPreference);
  const enabledRef = useRef(enabled);
  const engineRef = useRef(null);
  const lastPlayRef = useRef({});

  const play = useCallback((name, { throttle = 60 } = {}) => {
    if (!enabledRef.current) return;
    const now = performance.now();
    if (now - (lastPlayRef.current[name] || 0) < throttle) return;
    lastPlayRef.current[name] = now;

    try {
      engineRef.current ??= createAudioEngine();
      engineRef.current.play(name);
    } catch {}
  }, []);

  const toggle = useCallback(() => {
    const next = !enabledRef.current;
    enabledRef.current = next;
    setEnabled(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next ? 'on' : 'off');
    } catch {}
    if (next) play('toggle');
  }, [play]);

  const value = useMemo(() => ({ enabled, toggle, play }), [enabled, toggle, play]);

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
}

export const useSound = () => useContext(SoundContext);
