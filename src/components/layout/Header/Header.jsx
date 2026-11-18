import { useEffect, useState } from 'react';
import { NAV_LINKS } from '@/data/siteContent';
import { useSound } from '@/context/SoundContext';
import { useScrolled, useScrollLock } from '@/hooks';
import { bem } from '@/utils/bem';
import { Button, Icon, Logo, SoundToggle } from '@/components/common';
import styles from './Header.module.scss';

const header = bem(styles, 'header');
const nav = bem(styles, 'nav');
const burger = bem(styles, 'burger');
const menu = bem(styles, 'mobile-menu');

export default function Header() {
  const isScrolled = useScrolled(24);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const { play } = useSound();

  useScrollLock(isMenuOpen);

  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setIsMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    play('toggle');
    setIsMenuOpen((open) => !open);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={header(null, [isScrolled && 'scrolled', isMenuOpen && 'menu-open'])}>
      <div className={`container ${header('inner')}`}>
        <Logo className={header('logo')} />

        <nav className={nav()} aria-label="Primary">
          <ul className={nav('list')}>
            {NAV_LINKS.map((link) => (
              <li key={link.id} className={nav('item', link.children && 'dropdown')}>
                <a
                  href={link.href}
                  className={nav('link', link.active && 'active')}
                  aria-haspopup={link.children ? 'true' : undefined}
                  onMouseEnter={() => play('hover', { throttle: 120 })}
                >
                  {link.label}
                  {link.children && <Icon name="chevron-down" className={nav('chevron')} />}
                </a>

                {link.children && (
                  <ul className={nav('dropdown')}>
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a href={child.href} className={nav('dropdown-link')}>
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className={header('actions')}>
          <SoundToggle />
          <Button href="#developers" className={header('cta')}>
            Start Building
          </Button>
          <button
            type="button"
            className={burger(null, isMenuOpen && 'active')}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={burger('line')} />
            <span className={burger('line')} />
            <span className={burger('line')} />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={menu(null, isMenuOpen && 'open')}>
        <nav aria-label="Mobile">
          <ul className={menu('list')}>
            {NAV_LINKS.map((link) => {
              const isOpen = openSubmenu === link.id;
              return (
                <li key={link.id} className={menu('item')}>
                  {link.children ? (
                    <>
                      <button
                        type="button"
                        className={menu('link', isOpen && 'open')}
                        aria-expanded={isOpen}
                        onClick={() => setOpenSubmenu(isOpen ? null : link.id)}
                      >
                        {link.label}
                        <Icon name="chevron-down" className={menu('chevron')} />
                      </button>
                      <ul className={menu('sub', isOpen && 'open')}>
                        {link.children.map((child) => (
                          <li key={child.label}>
                            <a href={child.href} className={menu('sublink')} onClick={closeMenu}>
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <a href={link.href} className={menu('link')} onClick={closeMenu}>
                      {link.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
          <Button href="#developers" className={menu('cta')} onClick={closeMenu}>
            Start Building
          </Button>
        </nav>
      </div>
    </header>
  );
}
