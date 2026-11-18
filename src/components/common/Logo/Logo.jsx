import { BRAND } from '@/assets/images';
import { bem } from '@/utils/bem';
import { cx } from '@/utils/helpers';
import styles from './Logo.module.scss';

const b = bem(styles, 'logo');

export default function Logo({ size = 'md', className, href = '#top' }) {
  const Tag = href ? 'a' : 'span';

  const [src, width, height] = size === 'lg' ? [BRAND.logoLarge, 228, 84] : [BRAND.logoSmall, 114, 42];

  return (
    <Tag href={href || undefined} className={cx(b(null, size), className)} aria-label={href ? 'UzOFin home' : undefined}>
      <img src={src} width={width} height={height} alt={href ? '' : 'UzOFin – Connect. Control. Comply'} className={b('img')} decoding="async" />
    </Tag>
  );
}
