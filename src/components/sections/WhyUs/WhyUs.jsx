import { useRef } from 'react';
import { WHY } from '@/data/siteContent';
import { useReveal } from '@/hooks';
import { bem } from '@/utils/bem';
import { MarqueeRow, SectionHeading } from '@/components/common';
import styles from './WhyUs.module.scss';

const b = bem(styles, 'why');

export default function WhyUs() {
  const rootRef = useRef(null);
  useReveal(rootRef);

  return (
    <section className={`section ${b()}`} id="payments" ref={rootRef}>
      <div className="container">
        <SectionHeading
          titleStart={WHY.titleStart}
          titleHighlight={WHY.titleHighlight}
          description={WHY.description}
          size="md"
        />
      </div>

      <div className={b('rows')} data-reveal="">
        {WHY.rows.map((row, i) => (
          <MarqueeRow key={i} items={row.items} direction={row.direction} duration={40 + i * 6} />
        ))}
      </div>
    </section>
  );
}
