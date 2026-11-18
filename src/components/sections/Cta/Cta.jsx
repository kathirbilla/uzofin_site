import { useLayoutEffect, useRef } from 'react';
import { CTA } from '@/data/siteContent';
import { useReveal } from '@/hooks';
import { gsap, ALLOW_MOTION } from '@/utils/gsap';
import { bem } from '@/utils/bem';
import { Button, GradientText } from '@/components/common';
import GlassShape from '@/components/visuals/GlassShape';
import styles from './Cta.module.scss';

const b = bem(styles, 'cta');

export default function Cta() {
  const rootRef = useRef(null);
  useReveal(rootRef);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(
      ALLOW_MOTION,
      () => {
        gsap.to('[data-anim="shape-top"]', { y: -16, rotation: -6, duration: 3.2, ease: 'sine.inOut', yoyo: true, repeat: -1 });
        gsap.to('[data-anim="shape-bottom"]', { y: 14, rotation: 7, duration: 3.8, ease: 'sine.inOut', yoyo: true, repeat: -1 });
      },
      rootRef,
    );
    return () => mm.revert();
  }, []);

  return (
    <section className={`section ${b()}`} ref={rootRef}>
      <div className="container">
        <div className={b('box')}>
          <GlassShape variant="top" className={b('shape', 'top')} data-anim="shape-top" />
          <GlassShape variant="bottom" className={b('shape', 'bottom')} data-anim="shape-bottom" />

          <h2 className={b('title')} data-reveal="">
            {CTA.titleStart}
            <br />
            {CTA.titleMid} <GradientText tone="violet">{CTA.titleHighlight}</GradientText>
          </h2>

          <div className={b('actions')} data-reveal="">
            <Button href={CTA.primary.href} size="sm">
              {CTA.primary.label}
            </Button>
            <Button href={CTA.secondary.href} size="sm" variant="outline">
              {CTA.secondary.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
