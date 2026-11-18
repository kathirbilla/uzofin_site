import { useSound } from '@/context/SoundContext';
import { bem } from '@/utils/bem';
import { cx } from '@/utils/helpers';
import Icon from '../Icon';
import styles from './SoundToggle.module.scss';

const b = bem(styles, 'sound-toggle');

export default function SoundToggle({ className }) {
  const { enabled, toggle } = useSound();

  return (
    <button
      type="button"
      className={cx(b(null, enabled && 'on'), className)}
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={enabled ? 'Mute sound effects' : 'Enable sound effects'}
    >
      <Icon name={enabled ? 'sound-on' : 'sound-off'} className={b('icon')} />
      <span className={b('bars')} aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
    </button>
  );
}
