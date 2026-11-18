import { useLayoutEffect } from 'react';
import { gsap, ALLOW_MOTION } from '@/utils/gsap';

export default function useMarquee(trackRef, { direction = 'left', duration = 40, hoverSpeed = 0.15 } = {}) {
  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const mm = gsap.matchMedia();
    mm.add(ALLOW_MOTION, () => {
      const [fromX, toX] = direction === 'left' ? [0, -50] : [-50, 0];
      const tween = gsap.fromTo(
        track,
        { xPercent: fromX },
        { xPercent: toX, duration, ease: 'none', repeat: -1 },
      );

      const slow = () => gsap.to(tween, { timeScale: hoverSpeed, duration: 0.5, overwrite: true });
      const resume = () => gsap.to(tween, { timeScale: 1, duration: 0.6, overwrite: true });

      track.addEventListener('mouseenter', slow);
      track.addEventListener('mouseleave', resume);
      track.addEventListener('focusin', slow);
      track.addEventListener('focusout', resume);

      return () => {
        track.removeEventListener('mouseenter', slow);
        track.removeEventListener('mouseleave', resume);
        track.removeEventListener('focusin', slow);
        track.removeEventListener('focusout', resume);
      };
    });

    return () => mm.revert();
  }, [trackRef, direction, duration, hoverSpeed]);
}
