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
import { OffersPage } from './components/pages/OffersPage';
import { CertificationsPage } from './components/pages/CertificationsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/home-collection" element={<HomeSampleCollectionPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/offers" element={<OffersPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;