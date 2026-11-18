import { useRef } from 'react';
import { API_SECTION } from '@/data/siteContent';
import { useReveal } from '@/hooks';
import { bem } from '@/utils/bem';
import { Button, GradientText } from '@/components/common';
import WireLines from '@/components/visuals/WireLines';
import styles from './ApiSection.module.scss';

const b = bem(styles, 'api');

export default function ApiSection() {
  const rootRef = useRef(null);
  useReveal(rootRef);

  return (
    <section className={`section ${b()}`} id="developers" ref={rootRef}>
      <div className={`container ${b('content')}`}>
        <h2 className={b('title')} data-reveal="">
          {API_SECTION.titleStart} <GradientText tone="violet">{API_SECTION.titleHighlight}</GradientText>
        </h2>
        <p className={b('subtitle')} data-reveal="">
          {API_SECTION.subtitle}
        </p>
      </div>

      <div className={b('wires')}>
        <div className={b('lines')}>
          <WireLines />
        </div>
        <div className={b('cta')} data-reveal="scale">
          <Button href={API_SECTION.cta.href} size="sm">
            {API_SECTION.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
