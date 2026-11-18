import { useRef } from 'react';
import { PARTNERS } from '@/data/siteContent';
import { useReveal } from '@/hooks';
import { bem } from '@/utils/bem';
import styles from './Partners.module.scss';

const b = bem(styles, 'partners');

export default function Partners() {
  const rootRef = useRef(null);
  useReveal(rootRef, { y: 20, stagger: 0.06 });

  return (
    <section className={b()} aria-labelledby="partners-title" ref={rootRef}>
      <div className="container">
        <h2 id="partners-title" className={b('title')} data-reveal="">
          {PARTNERS.title}
        </h2>
        <ul className={b('list')}>
          {PARTNERS.logos.map((logo) => (
            <li key={logo.name} className={b('logo', logo.modifier)} data-reveal="">
              <img src={logo.src} alt={logo.name} className={b('img')} loading="lazy" decoding="async" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
