import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    window.scrollTo(0, 0);
    const timer = window.setTimeout(() => {
      const heading = document.querySelector<HTMLElement>('#main-content h1');
      heading?.focus({ preventScroll: true });
    }, 30);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return (
    <div className="site">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Suspense
          fallback={
            <div className="page-loading" role="status" aria-live="polite" aria-busy="true">
              <span className="page-loading__line" aria-hidden="true" />
              <span>Loading page…</span>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
