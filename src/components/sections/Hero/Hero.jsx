import { useLayoutEffect, useRef } from 'react';
import { HERO } from '@/data/siteContent';
import { gsap, ALLOW_MOTION } from '@/utils/gsap';
import { bem } from '@/utils/bem';
import { Button, GradientText } from '@/components/common';
import HeroArcs from '@/components/visuals/HeroArcs';
import styles from './Hero.module.scss';

const b = bem(styles, 'hero');

export default function Hero({ isReady }) {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    if (!isReady) return undefined;

    const mm = gsap.matchMedia();
    mm.add(
      ALLOW_MOTION,
      () => {
        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .from('[data-hero-ring]', { autoAlpha: 0, scale: 0.85, duration: 1.8 })
          .from('[data-anim="line"]', { yPercent: 110, duration: 1.1, stagger: 0.12 }, 0.15)
          .from('[data-anim="subtitle"]', { autoAlpha: 0, y: 20, duration: 0.9 }, '-=0.7')
          .from('[data-anim="actions"] > *', { autoAlpha: 0, y: 20, duration: 0.8, stagger: 0.1 }, '-=0.6');

        gsap.to('[data-hero-ring]', {
          scale: 1.04,
          duration: 6,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          delay: 1.8,
        });

        gsap.to('[data-hero-arcs]', {
          yPercent: 18,
          autoAlpha: 0.4,
          ease: 'none',
          scrollTrigger: { trigger: rootRef.current, start: 'top top', end: 'bottom top', scrub: true },
        });
      },
      rootRef,
    );

    return () => mm.revert();
  }, [isReady]);

  return (
    <section className={b()} id="top" ref={rootRef}>
      <HeroArcs />

      <div className={`container ${b('content')}`}>
        <h1 className={b('title')}>
          <span className={b('mask')}>
            <span className={b('line')} data-anim="line">
              {HERO.titleStart} <GradientText>{HERO.titleHighlight}</GradientText>
            </span>
          </span>
          <span className={b('mask')}>
            <span className={b('line')} data-anim="line">
              {HERO.titleEnd}
            </span>
          </span>
        </h1>

        <p className={b('subtitle')} data-anim="subtitle">
          {HERO.subtitle}
        </p>

        <div className={b('actions')} data-anim="actions">
          <Button href={HERO.primaryCta.href}>
            {HERO.primaryCta.label}
          </Button>
          <Button href={HERO.secondaryCta.href} variant="outline">
            {HERO.secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
