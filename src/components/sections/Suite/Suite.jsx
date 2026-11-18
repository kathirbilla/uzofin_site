import { useRef } from 'react';
import { SUITE } from '@/data/siteContent';
import { useReveal } from '@/hooks';
import { bem } from '@/utils/bem';
import SuiteCard from '@/components/cards/SuiteCard';
import styles from './Suite.module.scss';

const b = bem(styles, 'suite');
const COLUMN_MODIFIERS = ['first', 'second'];

export default function Suite() {
  const rootRef = useRef(null);
  useReveal(rootRef);

  return (
    <section className={`section ${b()}`} id="suite" ref={rootRef}>
      <div className={`container ${b('grid')}`}>
        <header className={b('intro')} data-reveal="left">
          <h2 className={b('title')}>
            {SUITE.title[0]}
            <br />
            {SUITE.title[1]}
          </h2>
          <p className={b('note')}>
            <sup>*</sup> {SUITE.note}
          </p>
        </header>

        {SUITE.columns.map((column, i) => (
          <div key={COLUMN_MODIFIERS[i]} className={b('column', COLUMN_MODIFIERS[i])}>
            {column.map((card) => (
              <SuiteCard key={card.title} {...card} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
