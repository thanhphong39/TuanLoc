import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ServiceDetailPage from './pages/ServiceDetailPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/gioi-thieu" element={<AboutPage />} />
        <Route path="/dich-vu" element={<ServicesPage />} />
        <Route path="/san-pham" element={<ProductsPage />} />
        <Route path="/du-an" element={<ProjectsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/lien-he" element={<ContactPage />} />
        
        {/* Detail pages */}
        <Route path="/san-pham/:slug" element={<ProductDetailPage />} />
        <Route path="/du-an/:slug" element={<ProjectDetailPage />} />
        <Route path="/dich-vu/:slug" element={<ServiceDetailPage />} />
        
        {/* Fallback */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}

export default App;
