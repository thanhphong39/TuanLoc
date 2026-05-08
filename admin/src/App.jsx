import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import AdminLayout from './components/AdminLayout';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ProductsPage from './pages/ProductsPage';

// Simple placeholder components for other pages
const Placeholder = ({ name }) => (
  <div className="p-8">
    <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-4">{name}</h1>
    <p className="text-gray-400 font-medium italic">Trang {name} đang được phát triển...</p>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        {/* Protected Admin Routes */}
        <Route path="/" element={
          <ProtectedRoute>
            <AdminLayout>
              <DashboardPage />
            </AdminLayout>
          </ProtectedRoute>
        } />
        
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <AdminLayout>
              <DashboardPage />
            </AdminLayout>
          </ProtectedRoute>
        } />

        <Route path="/products" element={
          <ProtectedRoute>
            <AdminLayout>
              <ProductsPage />
            </AdminLayout>
          </ProtectedRoute>
        } />

        <Route path="/services" element={
          <ProtectedRoute>
            <AdminLayout>
              <Placeholder name="Dịch vụ" />
            </AdminLayout>
          </ProtectedRoute>
        } />

        <Route path="/projects" element={
          <ProtectedRoute>
            <AdminLayout>
              <Placeholder name="Dự án" />
            </AdminLayout>
          </ProtectedRoute>
        } />

        <Route path="/blogs" element={
          <ProtectedRoute>
            <AdminLayout>
              <Placeholder name="Tin tức" />
            </AdminLayout>
          </ProtectedRoute>
        } />

        <Route path="/contacts" element={
          <ProtectedRoute>
            <AdminLayout>
              <Placeholder name="Liên hệ" />
            </AdminLayout>
          </ProtectedRoute>
        } />

        <Route path="/categories" element={
          <ProtectedRoute>
            <AdminLayout>
              <Placeholder name="Danh mục" />
            </AdminLayout>
          </ProtectedRoute>
        } />

        {/* 404 Redirect to Dashboard or Login */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
