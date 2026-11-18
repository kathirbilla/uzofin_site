import { bem } from '@/utils/bem';
import { cx } from '@/utils/helpers';
import GradientText from '../GradientText';
import styles from './SectionHeading.module.scss';

const b = bem(styles, 'section-heading');

export default function SectionHeading({
  eyebrow,
  titleStart,
  titleHighlight,
  highlightTone = 'violet',
  description,
  size = 'lg',
  className,
}) {
  return (
    <header className={cx(b(null, size), className)}>
      {eyebrow && (
        <p className={b('eyebrow')} data-reveal="">
          {eyebrow}
        </p>
      )}
      <h2 className={b('title')} data-reveal="">
        {titleStart} <GradientText tone={highlightTone}>{titleHighlight}</GradientText>
      </h2>
      {description && (
        <p className={b('description')} data-reveal="">
          {description}
        </p>
      )}
    </header>
  );
}
