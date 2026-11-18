import { useRef } from 'react';
import { useMarquee } from '@/hooks';
import { bem } from '@/utils/bem';
import FeatureLink from '@/components/cards/FeatureLink';
import styles from './MarqueeRow.module.scss';

const b = bem(styles, 'marquee');

export default function MarqueeRow({ items, direction = 'left', duration = 45 }) {
  const trackRef = useRef(null);
  useMarquee(trackRef, { direction, duration });

  return (
    <div className={b()}>
      <div className={b('track')} ref={trackRef}>
        {[0, 1].map((copy) => (
          <ul key={copy} className={b('group')} aria-hidden={copy === 1 ? 'true' : undefined}>
            {items.map((item, i) => (
              <li key={`${item.title}-${i}`} className={b('item')}>
                <FeatureLink {...item} tabIndex={copy === 1 ? -1 : undefined} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
