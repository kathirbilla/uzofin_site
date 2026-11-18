import Icon from '@/components/common/Icon';
import { useSound } from '@/context/SoundContext';
import { bem } from '@/utils/bem';
import styles from './FeatureLink.module.scss';

const b = bem(styles, 'feature-link');

export default function FeatureLink({ title, text, href = '#suite', tabIndex }) {
  const { play } = useSound();

  return (
    <a href={href} className={b()} tabIndex={tabIndex} onMouseEnter={() => play('hover', { throttle: 120 })}>
      <span className={b('head')}>
        <span className={b('title')}>{title}</span>
        <Icon name="arrow-up-right" className={b('icon')} />
      </span>
      <span className={b('text')}>{text}</span>
    </a>
  );
}
