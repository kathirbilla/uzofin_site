import { bem } from '@/utils/bem';
import { cx } from '@/utils/helpers';
import styles from './GlassShape.module.scss';

const b = bem(styles, 'glass-shape');

export default function GlassShape({ variant = 'top', className, ...rest }) {
  return <span className={cx(b(null, variant), className)} aria-hidden="true" {...rest} />;
}
