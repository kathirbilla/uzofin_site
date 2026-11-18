import { cx } from './helpers';

export function bem(styles, block) {
  return (element, modifiers) => {
    const base = element ? `${block}__${element}` : block;
    const mods = (Array.isArray(modifiers) ? modifiers : [modifiers])
      .filter(Boolean)
      .map((modifier) => styles[`${base}--${modifier}`]);

    return cx(styles[base], ...mods);
  };
}
