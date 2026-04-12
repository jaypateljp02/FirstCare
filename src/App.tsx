import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProtectedRoute } from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';
import { LoadingSpinner } from './components/LoadingSpinner';

// Lazy load pages
const HomePage = lazy(() => import('./components/pages/HomePage').then(module => ({ default: module.HomePage })));
const AboutPage = lazy(() => import('./components/pages/AboutPage').then(module => ({ default: module.AboutPage })));
const ServicesPage = lazy(() => import('./components/pages/ServicesPage').then(module => ({ default: module.ServicesPage })));
const HomeSampleCollectionPage = lazy(() => import('./components/pages/HomeSampleCollectionPage').then(module => ({ default: module.HomeSampleCollectionPage })));
const ContactPage = lazy(() => import('./components/pages/ContactPage').then(module => ({ default: module.ContactPage })));
const GalleryPage = lazy(() => import('./components/pages/GalleryPage').then(module => ({ default: module.GalleryPage })));
const TestimonialsPage = lazy(() => import('./components/pages/TestimonialsPage').then(module => ({ default: module.TestimonialsPage })));
const FAQPage = lazy(() => import('./components/pages/FAQPage').then(module => ({ default: module.FAQPage })));
const BlogPage = lazy(() => import('./components/pages/BlogPage').then(module => ({ default: module.BlogPage })));
const BlogPostPage = lazy(() => import('./components/pages/BlogPostPage').then(module => ({ default: module.BlogPostPage })));
const OffersPage = lazy(() => import('./components/pages/OffersPage').then(module => ({ default: module.OffersPage })));
const CertificationsPage = lazy(() => import('./components/pages/CertificationsPage').then(module => ({ default: module.CertificationsPage })));

// Admin pages
const LoginPage = lazy(() => import('./components/admin/LoginPage').then(module => ({ default: module.LoginPage })));
const AdminLayout = lazy(() => import('./components/admin/AdminLayout').then(module => ({ default: module.AdminLayout })));
const DashboardPage = lazy(() => import('./components/admin/DashboardPage').then(module => ({ default: module.DashboardPage })));
const ManageOffers = lazy(() => import('./components/admin/ManageOffers').then(module => ({ default: module.ManageOffers })));
const ManageGallery = lazy(() => import('./components/admin/ManageGallery').then(module => ({ default: module.ManageGallery })));
const ManageBlog = lazy(() => import('./components/admin/ManageBlog').then(module => ({ default: module.ManageBlog })));
const ManageServices = lazy(() => import('./components/admin/ManageServices').then(module => ({ default: module.ManageServices })));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        {/* Only show Header/Footer on non-admin pages */}
        <Routes>
          <Route path="/admin/*" element={null} />
          <Route path="*" element={<Header />} />
        </Routes>

        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/home-collection" element={<HomeSampleCollectionPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogPostPage />} />
              <Route path="/offers" element={<OffersPage />} />
              <Route path="/certifications" element={<CertificationsPage />} />

              {/* Admin Routes */}
              <Route path="/admin/login" element={<LoginPage />} />
              <Route path="/admin" element={<ProtectedRoute />}>
                <Route element={<AdminLayout />}>
                  <Route index element={<DashboardPage />} />
                  <Route path="offers" element={<ManageOffers />} />
                  <Route path="services" element={<ManageServices />} />
                  <Route path="gallery" element={<ManageGallery />} />
                  <Route path="blog" element={<ManageBlog />} />
                </Route>
              </Route>
            </Routes>
          </Suspense>
        </main>

        <Routes>
          <Route path="/admin/*" element={null} />
          <Route path="*" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;