import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from '@/utils/gsap';
import { bem } from '@/utils/bem';
import { prefersReducedMotion } from '@/utils/helpers';
import { useSound } from '@/context/SoundContext';
import useScrollLock from '@/hooks/useScrollLock';
import Logo from '../Logo';
import styles from './Preloader.module.scss';

const b = bem(styles, 'preloader');

export default function Preloader({ onComplete }) {
  const rootRef = useRef(null);
  const brandRef = useRef(null);
  const countRef = useRef(null);
  const barRef = useRef(null);
  const [isDone, setIsDone] = useState(false);
  const { play } = useSound();

  const onCompleteRef = useRef(onComplete);
  useLayoutEffect(() => {
    onCompleteRef.current = onComplete;
  });

  useScrollLock(!isDone);

  useLayoutEffect(() => {
    const reduce = prefersReducedMotion();
    const counter = { value: 0 };

    const ctx = gsap.context(() => {
      gsap
        .timeline({ onComplete: () => setIsDone(true) })
        .from(brandRef.current, { autoAlpha: 0, y: 24, duration: reduce ? 0.01 : 0.7 })
        .to(
          counter,
          {
            value: 100,
            duration: reduce ? 0.2 : 1.6,
            ease: 'power2.inOut',
            onUpdate: () => {
              countRef.current.textContent = Math.round(counter.value);
            },
          },
          '<0.1',
        )
        .to(barRef.current, { scaleX: 1, duration: reduce ? 0.2 : 1.6, ease: 'power2.inOut' }, '<')
        .add(() => {
          play('intro');
          onCompleteRef.current?.();
        })
        .to(rootRef.current, { yPercent: -100, duration: reduce ? 0.3 : 1, ease: 'power4.inOut' });
    }, rootRef);

    return () => ctx.revert();
  }, [play]);

  if (isDone) return null;

  return (
    <div className={b()} ref={rootRef} role="status" aria-live="polite" aria-label="Loading UzOFin">
      <div className={b('glow')} aria-hidden="true" />
      <div className={b('brand')} ref={brandRef}>
        <Logo size="lg" href={null} />
        <div className={b('meta')}>
          <span className={b('count')} ref={countRef}>
            0
          </span>
          <span className={b('percent')}>%</span>
        </div>
        <div className={b('track')}>
          <span className={b('bar')} ref={barRef} />
        </div>
      </div>
    </div>
  );
}
