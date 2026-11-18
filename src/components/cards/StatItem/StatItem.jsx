import Counter from '@/components/common/Counter';
import { bem } from '@/utils/bem';
import styles from './StatItem.module.scss';

const b = bem(styles, 'stat');

export default function StatItem({ value, decimals, suffix, extra, label, tone = 'violet' }) {
  return (
    <li className={b(null, tone)} data-reveal="right">
      <p className={b('value')}>
        <Counter value={value} decimals={decimals} suffix={suffix} />
        {extra && <span className={b('extra')}>{extra}</span>}
      </p>
      <p className={b('label')}>{label}</p>
    </li>
  );
}
