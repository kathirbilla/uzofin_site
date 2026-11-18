export const cx = (...classes) => classes.filter(Boolean).join(' ');

const formatters = new Map();

export function formatNumber(value, decimals = 0) {
  if (!formatters.has(decimals)) {
    formatters.set(
      decimals,
      new Intl.NumberFormat('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }),
    );
  }
  return formatters.get(decimals).format(value);
}

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;
