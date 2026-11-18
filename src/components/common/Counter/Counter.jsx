import { useRef } from 'react';
import useCountUp from '@/hooks/useCountUp';
import { formatNumber } from '@/utils/helpers';

export default function Counter({ value, decimals = 0, prefix = '', suffix = '', duration = 2, className }) {
  const numberRef = useRef(null);
  useCountUp(numberRef, value, { decimals, duration });

  return (
    <span className={className}>
      {prefix}
      <span ref={numberRef}>{formatNumber(value, decimals)}</span>
      {suffix}
    </span>
  );
}
