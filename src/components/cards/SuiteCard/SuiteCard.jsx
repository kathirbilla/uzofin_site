import Counter from '@/components/common/Counter';
import { bem } from '@/utils/bem';
import styles from './SuiteCard.module.scss';

const b = bem(styles, 'suite-card');

export default function SuiteCard({ title, description, value, suffix, hidePlus, label, accent = 'blue' }) {
  return (
    <article className={b(null, accent)} data-reveal="">
      <h3 className={b('title')}>{title}</h3>
      <p className={b('description')}>{description}</p>
      <p className={b('metric')}>
        {!hidePlus && <sup className={b('plus')}>+</sup>}
        <Counter value={value} suffix={suffix} duration={2.4} />
      </p>
      <p className={b('label')}>{label}</p>
    </article>
  );
}
