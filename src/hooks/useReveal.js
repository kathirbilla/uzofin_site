import { useLayoutEffect } from 'react';
import { gsap, ScrollTrigger, ALLOW_MOTION } from '@/utils/gsap';

const FROM = {
  left: { x: -60 },
  right: { x: 60 },
  scale: { scale: 0.85 },
};

export default function useReveal(scopeRef, { selector = '[data-reveal]', stagger = 0.12, start = 'top 85%', y = 40 } = {}) {
  useLayoutEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return undefined;

    const mm = gsap.matchMedia();
    mm.add(
      ALLOW_MOTION,
      () => {
        const items = gsap.utils.toArray(selector, scope);
        if (!items.length) return;

        items.forEach((el) => gsap.set(el, { autoAlpha: 0, ...(FROM[el.dataset.reveal] ?? { y }) }));

        ScrollTrigger.batch(items, {
          start,
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: 1.1,
              stagger,
              ease: 'power3.out',
              overwrite: true,
            }),
        });
      },
      scope,
    );

    return () => mm.revert();
  }, [scopeRef, selector, stagger, start, y]);
}
