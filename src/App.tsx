import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { HomeSampleCollectionPage } from './components/pages/HomeSampleCollectionPage';
import { ContactPage } from './components/pages/ContactPage';
import { GalleryPage } from './components/pages/GalleryPage';
import { TestimonialsPage } from './components/pages/TestimonialsPage';
import { FAQPage } from './components/pages/FAQPage';
import { BlogPage } from './components/pages/BlogPage';
import { BlogPostPage } from './components/pages/BlogPostPage';
import { OffersPage } from './components/pages/OffersPage';
import { CertificationsPage } from './components/pages/CertificationsPage';
import { LoginPage } from './components/admin/LoginPage';
import { AdminLayout } from './components/admin/AdminLayout';
import { DashboardPage } from './components/admin/DashboardPage';
import { ManageOffers } from './components/admin/ManageOffers';
import { ManageGallery } from './components/admin/ManageGallery';
import { ManageBlog } from './components/admin/ManageBlog';
import { ManageServices } from './components/admin/ManageServices';
import { ProtectedRoute } from './components/ProtectedRoute';

import ScrollToTop from './components/ScrollToTop';

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