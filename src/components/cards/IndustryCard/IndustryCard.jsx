import { bem } from '@/utils/bem';
import styles from './IndustryCard.module.scss';

const b = bem(styles, 'industry-card');

export default function IndustryCard({ title, text, focusable = true }) {
  return (
    <article className={b()}>
      <h3 className={b('title')}>{title}</h3>
      <p className={b('text')}>
        {text}{' '}
        <a href="#contact" className={b('link')} tabIndex={focusable ? undefined : -1}>
          Know more
        </a>
      </p>

      <svg
        className={b('icon')}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <path className={b('icon-ring')} d="M21.801 10A10 10 0 1 1 17 3.335" pathLength="1" />
        <path className={b('icon-check')} d="m9 11 3 3L22 4" pathLength="1" />
      </svg>
    </article>
  );
}
