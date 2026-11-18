import { IMAGES } from '@/assets/images';
import { bem } from '@/utils/bem';
import styles from './WireLines.module.scss';

const b = bem(styles, 'wire-lines');

export default function WireLines() {
  return (
    <div className={b()} aria-hidden="true">
      <img src={IMAGES.apiWires} width="1500" height="500" alt="" className={b('img')} loading="lazy" decoding="async" />
      <span className={b('pulse')} />
    </div>
  );
}
