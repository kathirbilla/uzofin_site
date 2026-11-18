import { useLayoutEffect, useRef } from 'react';
import { INDUSTRY } from '@/data/siteContent';
import { useMarquee, useReveal } from '@/hooks';
import { gsap } from '@/utils/gsap';
import { bem } from '@/utils/bem';
import { SectionHeading } from '@/components/common';
import IndustryCard from '@/components/cards/IndustryCard';
import styles from './Industry.module.scss';

const b = bem(styles, 'industry');
const LIFT_RATIO = 0.214;

export default function Industry() {
  const rootRef = useRef(null);
  const marqueeRef = useRef(null);
  const trackRef = useRef(null);

  useReveal(rootRef);
  useMarquee(trackRef, { direction: 'left', duration: 42, hoverSpeed: 0 });

  useLayoutEffect(() => {
    const marquee = marqueeRef.current;
    const items = gsap.utils.toArray('li', trackRef.current);
    if (!marquee || items.length < 2) return undefined;

    const track = trackRef.current;
    const setters = items.map((item) => gsap.quickSetter(item, 'y', 'px'));
    let layout = null;

    const measure = () => {
      layout = {
        centre: marquee.offsetLeft + marquee.clientWidth / 2,
        trackWidth: track.offsetWidth,
        pitch: items[1].offsetLeft - items[0].offsetLeft,
        lift: items[0].offsetWidth * LIFT_RATIO,
        centres: items.map((item) => item.offsetLeft + item.offsetWidth / 2),
      };
    };

    const wave = () => {
      const shift = (gsap.getProperty(track, 'xPercent') / 100) * layout.trackWidth + gsap.getProperty(track, 'x');
      layout.centres.forEach((c, i) => {
        const offset = (c + shift - layout.centre) / layout.pitch;
        setters[i]((layout.lift * (1 + Math.cos(Math.PI * offset))) / 2);
      });
    };

    measure();
    wave();
    window.addEventListener('resize', measure);
    const observer = new IntersectionObserver(([entry]) =>
      entry.isIntersecting ? gsap.ticker.add(wave) : gsap.ticker.remove(wave),
    );
    observer.observe(marquee);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
      gsap.ticker.remove(wave);
    };
  }, []);

  return (
    <section className={`section ${b()}`} id="support" ref={rootRef}>
      <div className="container">
        <SectionHeading
          eyebrow={INDUSTRY.eyebrow}
          titleStart={INDUSTRY.titleStart}
          titleHighlight={INDUSTRY.titleHighlight}
          size="xl"
        />
      </div>

      <div className={b('marquee')} ref={marqueeRef} role="region" aria-label="Industry standard features" data-reveal="">
        <div className={b('track')} ref={trackRef}>
          {[0, 1].map((copy) => {
            const isDuplicate = copy === 1;
            return (
              <ul key={copy} className={b('group')} aria-hidden={isDuplicate ? 'true' : undefined}>
                {INDUSTRY.cards.map((card) => (
                  <li key={card.title} className={b('item')}>
                    <IndustryCard {...card} focusable={!isDuplicate} />
                  </li>
                ))}
              </ul>
            );
          })}
        </div>
      </div>
    </section>
  );
}
