import { useRef } from 'react';
import { FOOTER } from '@/data/siteContent';
import { useReveal } from '@/hooks';
import { bem } from '@/utils/bem';
import { Icon, Logo } from '@/components/common';
import styles from './Footer.module.scss';

const b = bem(styles, 'footer');
const slug = (text) => `#${text.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

// Slow, eased scroll back to the header. Respects reduced-motion.
const SCROLL_DURATION = 1400;
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

function scrollToTop() {
  const start = window.scrollY;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion || start === 0) {
    window.scrollTo({ top: 0, behavior: 'instant' });
    return;
  }

  const startTime = performance.now();
  const step = (now) => {
    const progress = Math.min((now - startTime) / SCROLL_DURATION, 1);
    window.scrollTo({ top: start * (1 - easeInOutCubic(progress)), behavior: 'instant' });
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export default function Footer() {
  const rootRef = useRef(null);
  useReveal(rootRef, { y: 24 });

  return (
    <footer className={b()} id="contact" ref={rootRef}>
      <div className="container">
        <div className={b('top')}>
          <button
            type="button"
            className={b('to-top')}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            data-tooltip="Back to top"
          >
            <Icon name="arrow-up" />
          </button>
          <div data-reveal="">
            <Logo size="lg" />
            <p className={b('about')}>{FOOTER.about}</p>
          </div>

          <div className={b('columns')}>
            {FOOTER.columns.map((column) => (
              <nav key={column.title} aria-label={column.title} data-reveal="">
                <h3 className={b('title')}>{column.title}</h3>
                <ul className={b('list')}>
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href={slug(link)} className={b('link')}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div data-reveal="">
              <h3 className={b('title')}>Social</h3>
              <ul className={b('list')}>
                {FOOTER.socials.map((social) => (
                  <li key={social.icon}>
                    <a
                      href={social.href}
                      className={b('social')}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`UzOFin on ${social.label}`}
                    >
                      <span className={b('social-icon')}>
                        <Icon name={social.icon} />
                      </span>
                      {social.handle}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={b('bottom')}>
          <p>{FOOTER.copyright}</p>
          <p>{FOOTER.madeIn}</p>
        </div>
      </div>
    </footer>
  );
}
