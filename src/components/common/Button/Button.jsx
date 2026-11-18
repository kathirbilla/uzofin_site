import { useSound } from '@/context/SoundContext';
import { bem } from '@/utils/bem';
import { cx } from '@/utils/helpers';
import Icon from '../Icon';
import styles from './Button.module.scss';

const b = bem(styles, 'btn');

export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  withIcon = true,
  className,
  children,
  onClick,
  type = 'button',
  ...rest
}) {
  const { play } = useSound();
  const Tag = href ? 'a' : 'button';

  const handleClick = (event) => {
    play('click');
    onClick?.(event);
  };

  return (
    <Tag
      href={href}
      type={href ? undefined : type}
      className={cx(b(null, [variant, size]), className)}
      onClick={handleClick}
      onMouseEnter={() => play('hover', { throttle: 120 })}
      {...rest}
    >
      <span className={b('label')}>{children}</span>
      {withIcon && <Icon name="arrow-right" className={b('icon')} />}
    </Tag>
  );
}
