import { IMAGES } from '@/assets/images';
import { bem } from '@/utils/bem';
import styles from './HeroArcs.module.scss';

const b = bem(styles, 'hero-arcs');

export default function HeroArcs() {
  return (
    <div className={b()} aria-hidden="true" data-hero-arcs="">
      {['left', 'right'].map((side) => (
        <img
          key={side}
          src={IMAGES.heroRing}
          width="1200"
          height="626"
          alt=""
          className={b('ring', side)}
          data-hero-ring={side}
          fetchpriority={side === 'left' ? 'high' : undefined}
          decoding="async"
        />
      ))}
      <span className={b('fade')} />
    </div>
  );
}
