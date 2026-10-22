import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';

const AboutPage = lazy(() => import('./pages/AboutPage').then((module) => ({ default: module.AboutPage })));
const BlogArticlePage = lazy(() =>
  import('./pages/BlogArticlePage').then((module) => ({ default: module.BlogArticlePage })),
);
const BlogPage = lazy(() => import('./pages/BlogPage').then((module) => ({ default: module.BlogPage })));
const BookDetailPage = lazy(() =>
  import('./pages/BookDetailPage').then((module) => ({ default: module.BookDetailPage })),
);
const BooksPage = lazy(() => import('./pages/BooksPage').then((module) => ({ default: module.BooksPage })));
const BookstorePage = lazy(() =>
  import('./pages/BookstorePage').then((module) => ({ default: module.BookstorePage })),
);
const CareersPage = lazy(() =>
  import('./pages/CareersPage').then((module) => ({ default: module.CareersPage })),
);
const ContactPage = lazy(() =>
  import('./pages/ContactPage').then((module) => ({ default: module.ContactPage })),
);
const PublishBookPage = lazy(() =>
  import('./pages/PublishBookPage').then((module) => ({ default: module.PublishBookPage })),
);
const ReferralPage = lazy(() =>
  import('./pages/ReferralPage').then((module) => ({ default: module.ReferralPage })),
);
const ServiceDetailPage = lazy(() =>
  import('./pages/ServiceDetailPage').then((module) => ({ default: module.ServiceDetailPage })),
);
const ServicesPage = lazy(() =>
  import('./pages/ServicesPage').then((module) => ({ default: module.ServicesPage })),
);

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/:slug" element={<ServiceDetailPage />} />
        <Route path="books" element={<BooksPage />} />
        <Route path="books/:slug" element={<BookDetailPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogArticlePage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="publish-your-book" element={<PublishBookPage />} />
        <Route path="bookstore" element={<BookstorePage />} />
        <Route path="referral-program" element={<ReferralPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
