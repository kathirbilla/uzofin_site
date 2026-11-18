import { useLayoutEffect, useRef } from 'react';
import { IMAGES } from '@/assets/images';
import { gsap, ALLOW_MOTION } from '@/utils/gsap';
import { bem } from '@/utils/bem';
import { cx } from '@/utils/helpers';
import styles from './RibbonSphere.module.scss';

const b = bem(styles, 'ribbon-sphere');

const TIMING = { hold: 5.2, change: 1.5, turn: 90 };

export default function RibbonSphere({ className }) {
  const rootRef = useRef(null);
  const stageRef = useRef(null);
  const imgRef = useRef(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    const img = imgRef.current;

    const mm = gsap.matchMedia();
    mm.add(ALLOW_MOTION, () => {
      gsap.to(root, { y: -8, duration: 3.2, ease: 'sine.inOut', yoyo: true, repeat: -1 });

      gsap.to(img, {
        rotation: `+=${TIMING.turn}`,
        duration: TIMING.change,
        ease: 'power3.inOut',
        delay: TIMING.hold,
        repeat: -1,
        repeatDelay: TIMING.hold,
        repeatRefresh: true,
      });

      const onEnter = () => gsap.to(stage, { scale: 1.07, duration: 0.6, ease: 'power3.out', overwrite: 'auto' });
      const onLeave = () => gsap.to(stage, { scale: 1, duration: 0.8, ease: 'power3.out', overwrite: 'auto' });
      stage.addEventListener('mouseenter', onEnter);
      stage.addEventListener('mouseleave', onLeave);

      return () => {
        stage.removeEventListener('mouseenter', onEnter);
        stage.removeEventListener('mouseleave', onLeave);
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={rootRef} className={cx(b(), className)} aria-hidden="true">
      <div ref={stageRef} className={b('stage')}>
        <img
          ref={imgRef}
          src={IMAGES.ribbonSphere}
          width="590"
          height="590"
          alt=""
          className={b('img')}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}
