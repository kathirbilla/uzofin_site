import { bem } from '@/utils/bem';
import { cx } from '@/utils/helpers';
import styles from './GradientText.module.scss';

const b = bem(styles, 'gradient-text');

export default function GradientText({ tone = 'brand', as: Tag = 'span', className, children }) {
  return <Tag className={cx(b(null, tone), className)}>{children}</Tag>;
}
