import { forwardRef } from 'react';
import { IMAGES } from '@/assets/images';
import { bem } from '@/utils/bem';
import { cx } from '@/utils/helpers';
import styles from './GlowCurve.module.scss';

const b = bem(styles, 'glow-curve');

const GlowCurve = forwardRef(function GlowCurve({ className }, ref) {
  return (
    <img
      ref={ref}
      src={IMAGES.glowCurves}
      width="1200"
      height="1022"
      alt=""
      aria-hidden="true"
      className={cx(b(), className)}
      loading="lazy"
      decoding="async"
    />
  );
});

export default GlowCurve;
