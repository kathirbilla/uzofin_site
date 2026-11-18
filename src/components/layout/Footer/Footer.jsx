import { useRef } from 'react';
import { FOOTER } from '@/data/siteContent';
import { useReveal } from '@/hooks';
import { bem } from '@/utils/bem';
import { Icon, Logo } from '@/components/common';
import styles from './Footer.module.scss';

const b = bem(styles, 'footer');
const slug = (text) => `#${text.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

export default function Footer() {
  const rootRef = useRef(null);
  useReveal(rootRef, { y: 24 });

  return (
    <footer className={b()} id="contact" ref={rootRef}>
      <div className="container">
        <div className={b('top')}>
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
