import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navigation, site } from '../content/site';
import { Icon } from './Icon';
import { Logo } from './Logo';

const focusableSelector =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstRender = useRef(true);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const focusable = panel ? Array.from(panel.querySelectorAll<HTMLElement>(focusableSelector)) : [];
    focusable[0]?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab' || !panel) return;
      const items = Array.from(panel.querySelectorAll<HTMLElement>(focusableSelector));
      if (!items.length) return;

      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (!open) triggerRef.current?.focus();
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <div className="site-header__inner container">
        <Logo />

        <nav className="desktop-nav" aria-label="Main navigation">
          <ul>
            {navigation.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => (isActive ? 'nav-link is-active' : 'nav-link')}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <Link to="/publish-your-book" className="button button--primary site-header__cta">
            <span>Publish Your Book</span>
            <Icon name="arrow-up-right" size={16} />
          </Link>
          <button
            ref={triggerRef}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>

      {open ? (
        <div className="mobile-nav-layer">
          <button
            type="button"
            className="mobile-nav__backdrop"
            aria-label="Close menu"
            tabIndex={-1}
            onClick={close}
          />
          <div
            ref={panelRef}
            id="mobile-navigation"
            className="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="mobile-nav__top">
              <span className="eyebrow">Menu</span>
              <button
                type="button"
                className="mobile-nav__close"
                onClick={() => {
                  close();
                  triggerRef.current?.focus();
                }}
                aria-label="Close menu"
              >
                <Icon name="close" size={22} />
              </button>
            </div>
            <nav aria-label="Mobile navigation">
              <ul className="mobile-nav__links">
                {navigation.map((item, index) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      onClick={close}
                      className={({ isActive }) =>
                        isActive ? 'mobile-nav__link is-active' : 'mobile-nav__link'
                      }
                    >
                      <span className="mobile-nav__number">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>{item.label}</span>
                      <Icon name="arrow-up-right" size={18} />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mobile-nav__footer">
              <Link to="/publish-your-book" className="button button--primary button--block" onClick={close}>
                Publish Your Book
                <Icon name="arrow-right" size={17} />
              </Link>
              <div className="mobile-nav__contact">
                <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
                <a href={`tel:${site.contact.phoneHref}`}>{site.contact.phone}</a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
