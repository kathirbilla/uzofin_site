import { useLayoutEffect, useRef } from 'react';
import { STATS } from '@/data/siteContent';
import { useReveal } from '@/hooks';
import { gsap, ALLOW_MOTION } from '@/utils/gsap';
import { bem } from '@/utils/bem';
import StatItem from '@/components/cards/StatItem';
import GlowCurve from '@/components/visuals/GlowCurve';
import RibbonSphere from '@/components/visuals/RibbonSphere';
import styles from './Stats.module.scss';

const b = bem(styles, 'stats');

export default function Stats() {
  const rootRef = useRef(null);
  const curveRef = useRef(null);
  useReveal(rootRef);

  useLayoutEffect(() => {
    const curve = curveRef.current;
    if (!curve) return undefined;

    const mm = gsap.matchMedia();
    mm.add(ALLOW_MOTION, () => {
      gsap.fromTo(
        curve,
        { clipPath: 'inset(0% 100% 0% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 2.2,
          ease: 'power2.inOut',
          scrollTrigger: { trigger: rootRef.current, start: 'top 70%', once: true },
        },
      );
    });
    return () => mm.revert();
  }, []);

  return (
    <section className={`section ${b()}`} id="ai-banking" ref={rootRef}>
      <GlowCurve ref={curveRef} />

      <div className={`container ${b('grid')}`}>
        <div className={b('intro')}>
          <h2 className={b('title')} data-reveal="left">
            {STATS.title[0]}
            <br />
            {STATS.title[1]}
          </h2>
          <div className={b('visual')} data-reveal="scale">
            <RibbonSphere />
          </div>
        </div>

        <ul className={b('list')}>
          {STATS.items.map((item) => (
            <StatItem key={item.label} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
