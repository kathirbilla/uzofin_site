import { useLayoutEffect } from 'react';
import { gsap, ALLOW_MOTION } from '@/utils/gsap';
import { formatNumber } from '@/utils/helpers';

export default function useCountUp(ref, end, { decimals = 0, duration = 2, start = 'top 88%' } = {}) {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const mm = gsap.matchMedia();
    mm.add(ALLOW_MOTION, () => {
      const state = { value: 0 };
      el.textContent = formatNumber(0, decimals);

      gsap.to(state, {
        value: end,
        duration,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start, once: true },
        onUpdate: () => {
          el.textContent = formatNumber(state.value, decimals);
        },
      });

      return () => {
        el.textContent = formatNumber(end, decimals);
      };
    });

    return () => mm.revert();
  }, [ref, end, decimals, duration, start]);
}
